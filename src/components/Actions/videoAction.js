import axios from "axios";
import { toast } from "react-toastify";

let token = `Bearer ${localStorage.getItem("token")}`;

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

export const getVideoId = (id) => {
  return axios.get(`${process.env.REACT_APP_SERVICE_API}video/${id}`
  )
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      if (error.response && error.response.status === 401) {
        
    } else {
        toast.error(`${error.response.data.message}`)
    }
    });
}