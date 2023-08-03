import axios from "axios";

export const getVideo = () => {
  return axios.get(`${process.env.REACT_APP_SERVICE_API}videos`) 
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
     
    });
}

export const getVideoseul = () => {
    return axios.get(`${process.env.REACT_APP_SERVICE_API}seul`) 
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
        
      });
  }