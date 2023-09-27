import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


let token = `Bearer ${localStorage.getItem("token")}`;
const navigateTo = useNavigate;
export const getEvenement = () => {
    return axios.get(`${process.env.REACT_APP_SERVICE_API}evenements`
    )
        .then((response) => {
            return response.data.data;
        })
        .catch((error) => {
            alert(error)
        });
}
export const getSeulEvenement = () => {
    return axios.get(`${process.env.REACT_APP_SERVICE_API}seulEvenement`
    )
        .then((response) => {
            return response.data.data;
        })
        .catch((error) => {
           alert(error)
        });
}

export const getEvenementTous = () => {
    return axios.get(`${process.env.REACT_APP_SERVICE_API}tousEvenement`
    )
        .then((response) => {
            return response.data.data;
        })
        .catch((error) => {
            alert(error)
        });
}

export const getEvenementId = (id) => {
    return axios.get(`${process.env.REACT_APP_SERVICE_API}evenement/${id}`,
    )
        .then((response) => {
            return response.data.data;
        })
        .catch((error) => {
            alert(error)
        });
}