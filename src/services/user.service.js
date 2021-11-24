import axios from "axios";
export default class UserService {
  static async getUsers() {
    // let url = `https://reqres.in/api/users?page=${}`
    let uri = 'https://reqres.in/api/users';
    const user = await axios.get(uri);
    
    return user;
  }
  /**
   * 
   * @param {*} page Esta es la pagina
   * @returns 
   */
  static async getUsersTest(page) {
    let url = `https://reqres.in/api/users?page=${page}`
    const user = await axios.get(url);
    return user;
  }

  static async getUser(id){
    let url = `https://reqres.in/api/users/?id=${id}`;
    const user = await axios.get(url);
    return user;
  }
  // static getYears(makeId, modelId) {
  //     let uri = `/api/make/years?makeId=${makeId}&modelId=${modelId}`;
  //     return Axios.get(uri);
  // }
}
