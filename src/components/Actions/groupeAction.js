import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";


let token = `Bearer ${localStorage.getItem("token")}`;
export const getGroupe = () => {
    return axios.get(`${process.env.REACT_APP_SERVICE_API}groupes`,
        {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: token
            }
        }
    ).then((response) => {
            return response.data.data;
        })
        .catch((error) => {
            if (error.response && error.response.status === 401) {
                window.location.href = "/";
            } else {
                toast.error(`${error.response.data.message}`)
            }
        });
}
export const getSeulGroupe = (id) => {
    return axios.get(`${process.env.REACT_APP_SERVICE_API}groupe/${id}`,
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
            if (error.response && error.response.status === 401) {
                window.location.href = "/";
            } else {
                toast.error(`${error.response.data.message}`)
            }
        });
}


export const getEvenementIdsss = (id) => {
    return axios.get(`${process.env.REACT_APP_SERVICE_API}evenement/${id}`,
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

        });
}