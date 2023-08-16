import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";


let token = `Bearer ${localStorage.getItem("token")}`;
export const getProfile = () => {
    return axios.get(`${process.env.REACT_APP_SERVICE_API}profil`,
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

export const DeleteProfile = () => {
    Swal.fire({
        title: 'Êtes-vous sûr de vouloir supprimer le compte ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui, supprimer',
        cancelButtonText: 'Non, annuler'
    }).then((result) => {
        if (result.isConfirmed) {
            axios
                .delete(`${process.env.REACT_APP_SERVICE_API}profil`, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: token
                    }
                })
                .then((response) => {
                    Swal.fire({
                        icon: 'success',
                        text: `${response.data.message}`,
                        confirmButtonText: 'OK'
                    });
                })
                .catch((error) => {
                    alert(error);
                });
        }
    });
}

export const UpdateProfile = (postData, id) => {
     axios.put(`${process.env.REACT_APP_SERVICE_API}profil/${id}`,postData,
        {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: token
            }
        }).then((response) => {
            toast.success(`${response.data.message}`)
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