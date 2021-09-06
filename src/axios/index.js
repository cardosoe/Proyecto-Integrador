
import axios from "axios"

const instance = axios.create({
  // baseURL: 'http://joseamietta-laravel-api.herokuapp.com/api/'
  // baseURL: 'http://localhost:8000/api/about/save'
  baseURL: 'https://laravel-25whatts.herokuapp.com/api/about/save'

})

const sendEmail = async (data) => {
  const response = await instance({
    method: 'post',
    url: 'https://laravel-25whatts.herokuapp.com/api/about/save',
    data: data
  });

  return response
};

export {
  sendEmail
}
