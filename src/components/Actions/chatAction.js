import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";


let token = `Bearer ${localStorage.getItem("token")}`;
export const getChatInterne = (groupe) => {
    return axios.get(`${process.env.REACT_APP_SERVICE_API}chatInterne/${groupe}`,
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

export const addChat = (postData) => {
        axios.post(`${process.env.REACT_APP_SERVICE_API}chat`, postData,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: token
                }
            }).then((response) => {
            }).catch((error) => {

                if (error.response && error.response.status === 422) {
                    toast.error(`${error.response.data.message}`)
                } else if (error.response.status === 500) {
                    toast.error(`${error.response.data.message}`)
                } else {
                    toast.error(`${error.response.data.message}`)
                }
            })
}