import models from "../models";
export default {
  addTransaction: async (objDeuda, revert = false) => {
    try {
      let deuda = await models.Persona.findOne({ _id: objDeuda.persona });
      let diferencia =
        parseInt(objDeuda.total) > parseInt(objDeuda.pagado)
          ? parseInt(objDeuda.total) - parseInt(objDeuda.pagado)
          : parseInt(objDeuda.pagado) - parseInt(objDeuda.total);
      let nuevaDeuda = 0;

      if (revert) {
        /** si se trata de un reverso */
        nuevaDeuda =
          parseInt(deuda.deuda) -
          (parseInt(objDeuda.total) - parseInt(objDeuda.pagado));
      } else {
        if (objDeuda.pagado < objDeuda.total) {
          //Si lo pagado es menor al total
          nuevaDeuda = parseInt(deuda.deuda) + parseInt(diferencia);
        } else {
          //Si lo pagado es mayor al total
          nuevaDeuda = parseInt(deuda.deuda) - parseInt(diferencia);
        }
      }

      //Actualizar la deuda
      await models.Persona.findByIdAndUpdate(
        { _id: objDeuda.persona },
        { deuda: nuevaDeuda }
      );
      try {
        if (revert) {
          await models.Deuda.remove({ venta: objDeuda._id });
        } else {
          //Creamos la transaccion
          await models.Deuda.create({
            persona: objDeuda.persona,
            venta: objDeuda._id,
            total: objDeuda.total,
            pagado: objDeuda.pagado,
            monto: diferencia,
            deuda: nuevaDeuda
          });
        }
        console.log("Transaccion registrada");
      } catch (error) {
        console.log("Error al registrar transaccion: ", error);
      }
    } catch (error) {
      console.log("Crear deuda: ", error);
    }
  },
  aumentarStock: async (idarticulo, cantidad) => {
    let { stock } = await models.Articulo.findOne({ _id: idarticulo });
    let nStock = parseInt(stock) + parseInt(cantidad);
    await models.Articulo.findByIdAndUpdate(
      { _id: idarticulo },
      { stock: nStock }
    );
  },
  disminuirStock: async (idarticulo, cantidad) => {
    let { stock } = await models.Articulo.findOne({ _id: idarticulo });

    let nStock = stock == null ? 0 : stock;
    nStock = parseInt(nStock) - parseInt(cantidad);
    await models.Articulo.findByIdAndUpdate(
      { _id: idarticulo },
      { stock: nStock }
    );
  },
  calcActive: async (venta, deuda, revert = false) => {
    try {
      let persona = await models.Persona.findOne({ _id: venta.persona });
      let nuevaDeuda = 0;
      if (revert) {
        nuevaDeuda = parseInt(persona.deuda) - parseInt(deuda.monto);
      } else {
        nuevaDeuda = parseInt(persona.deuda) + parseInt(deuda.monto);
      }
      persona.deuda = nuevaDeuda;
      persona.save();
    } catch (error) {
      console.log("error calcActive");
      console.log(error);
    }
  },
};
