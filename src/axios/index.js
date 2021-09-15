
import axios from "axios"

const instance = axios.create({
  baseURL: 'https://laravelapimundose.herokuapp.com/api/',
})

const sendEmail = async (data) => {
  const response = await instance({
    method: 'POST',
    url: 'about/save',
    data: data
  });

  return response
};

export {
  sendEmail
}
