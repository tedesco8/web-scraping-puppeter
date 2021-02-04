export class UserModel {
  constructor(userData) {
    this.id = userData.uid
    this.name = userData.displayName
    this.email = userData.email
    this.photo = userData.photoURL
  }
}
