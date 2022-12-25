import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const KonsultasiController = () => {
    const navigate = useNavigate()
    const [showHideForm, setShowHideForm]   = useState("biodata")
    const [data, setData]   = useState({
        nama: '',
        tanggal_lahir: '',
        alamat: '',
        nama_penyakit: ''
    })

    const formInit = useFormik({
        initialValues: {
            nama: "",
            tanggal_lahir: "",
            alamat: "",

            // Survey
            no1: "",
            no2: "",
            no3: "",
            no4: "",
            no5: "",
            no6: "",
            no7: "",
            no8: "",
            no9: "",
            no10: "",
            no11: "",
            no12: "",
            no13: "",
            no14: "",
            no15: "",
            no16: "",
            no17: "",
            no18: "",
            no19: "",
            no20: "",
            no21: "",
            no22: "",
            no23: "",
            no24: "",
            no25: "",
            no26: "",
        },

        validationSchema: Yup.object({
            nama: Yup.string().required(),
            tanggal_lahir: Yup.string().required(),
            alamat: Yup.string().required()
        }),

        onSubmit: (values) => {
            if (values.no1 == "" || values.no2 == "" || values.no3 == "" || values.no4 == "" || values.no5 == "" || values.no6 == "" || values.no7 == "" || values.no8 == "" || values.no9 == "" || values.no10 == "" || values.no11 == "" || values.no12 == "" || values.no13 == "" || values.no14 == "" || values.no15 == "" || values.no16 == "" || values.no17 == "" || values.no18 == "" || values.no19 == "" || values.no20 == "" || values.no21 == "" || values.no22 == "" || values.no23 == "" || values.no24 == "" || values.no25 == "" || values.no26 == "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Pertanyaan masih ada yang kosong, silakan cek kembali jawaban anda!'
                })
            }else{
                if (values.no1 === "ya" && values.no10 === "ya" && values.no20 === "ya" && values.no5 === "ya") {
                    navigate('/hasil-diagnosa/' + values.nama + '/' + values.tanggal_lahir + '/' + values.alamat + '/osteoporosis')
                }else if (values.no2 === "ya" && values.no11 === "ya" && values.no9 === "ya" && values.no4 === "ya") {
                    navigate('/hasil-diagnosa/' + values.nama + '/' + values.tanggal_lahir + '/' + values.alamat + '/osteoarthritis')
                }else if (values.no20 === "ya" && values.no6 === "ya" && values.no8 === "ya" && values.no7 === "ya" && values.no12 === "ya" && values.no15 === "ya" && values.no13 === "ya" && values.no14 === "ya" && values.no17 === "ya") {
                    navigate('/hasil-diagnosa/' + values.nama + '/' + values.tanggal_lahir + '/' + values.alamat + '/skoliosis')
                }else if (values.no2 === "ya" && values.no3 === "ya" && values.no11 === "ya" && values.no19 === "ya" && values.no18 === "ya" && values.no16 === "ya" && values.no24 === "ya") {
                    navigate('/hasil-diagnosa/' + values.nama + '/' + values.tanggal_lahir + '/' + values.alamat + '/rheumatoid-arthritis')
                }else if (values.no16 === "ya" && values.no25 === "ya" && values.no26 === "ya" && values.no22 === "ya" && values.no19 === "ya" && values.no23 === "ya" && values.no21 === "ya") {
                    navigate('/hasil-diagnosa/' + values.nama + '/' + values.tanggal_lahir + '/' + values.alamat + '/tumor-tulang')
                }else {
                    navigate('/hasil-diagnosa/' + values.nama + '/' + values.tanggal_lahir + '/' + values.alamat + '/not-found')
                }
            }
        }
    })

    return {
        showHideForm, setShowHideForm,
        formInit,
        data
    }
}

export default KonsultasiController;