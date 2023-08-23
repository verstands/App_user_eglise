import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


let token = `Bearer ${localStorage.getItem("token")}`;
const navigateTo = useNavigate;
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
            if (error.response && error.response.status === 401) {
                window.location.href = "/";
            } else {
                toast.error(`${error.response.data.message}`)
            }
        });
}
export const getSeulEvenement = (navigate) => {
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
            if (error.response && error.response.status === 401) {
                window.location.href = "/";
            } else {
                toast.error(`${error.response.data.message}`)
            }
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
            if (error.response && error.response.status === 401) {
                window.location.href = "/";
            } else {
                toast.error(`${error.response.data.message}`)
            }
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
            if (error.response && error.response.status === 401) {
                window.location.href = "/";
            } else {
                toast.error(`${error.response.data.message}`)
            }
        });
}