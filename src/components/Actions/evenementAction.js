import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";


let token = `Bearer ${localStorage.getItem("token")}`;
export const getEvenement = () => {
    return axios.get(`${process.env.REACT_APP_SERVICE_API}evenements`,
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
export const getSeulEvenement = () => {
    return axios.get(`${process.env.REACT_APP_SERVICE_API}seulEvenement`,
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

export const getEvenementTous = () => {
    return axios.get(`${process.env.REACT_APP_SERVICE_API}tousEvenement`,
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

export const getEvenementId = (id) => {
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