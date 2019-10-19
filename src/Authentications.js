import axios from 'axios';

const url = 'http://localhost:3000/'

class Authentications {
  // Sign in
  static signin(email, password) {
    /*  return new Promise(async (resolve, reject) => {
       try {
         const response = axios.get(url + 'signin', {
           email: email,
           password: password
         });
         resolve(response)
       } catch (err) {
         reject(err)
       }
     }) */
    axios.get(url + 'signin', { email: email, password: password }).then(response => {
      return response.json();
    })
      .catch((err) => {
        return err.json()
      })
  }

  // signout
  static signout() {
    return axios.get(url + 'signout')
  }
}

export default Authentications