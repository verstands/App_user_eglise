import axios from "axios";

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
  return axios.get(`${process.env.REACT_APP_SERVICE_API}video/${id}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      }
    }
  )
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      alert(error)
    });
}