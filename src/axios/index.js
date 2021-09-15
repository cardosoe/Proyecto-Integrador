
import axios from "axios"

const instance = axios.create({
  // baseURL: 'http://localhost:8000/api/about/save'
  baseURL: 'http://localhost:8000/api/about/save'

})

const sendEmail = async (data) => {
  const response = await instance({
    method: 'post',
    url: 'http://localhost:8000/api/about/save',
    data: data
  });

  return response
};

export {
  sendEmail
}
