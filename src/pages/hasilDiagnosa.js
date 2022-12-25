import { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import Topbar from "../components/topbar";
import Footer from "../components/footer";
import Preloader from "../components/preloader";

import Osteoporosis from "./hasil/osteoporosis";
import Osteoarthritis from "./hasil/osteoarthritis";
import Skoliosis from "./hasil/skoliosis";
import RheumatoidArthritis from "./hasil/rheumatoidArthritis";
import TumorTulang from "./hasil/tumorTulang";
import NotFound from "./hasil/notFound";

const HasilDiagnosa = () => {

    const { nama, tanggal_lahir, alamat, nama_penyakit } = useParams()
    const [preloaderVisible, setPreloaderVisible] = useState("show")
    setTimeout(() => {
        setPreloaderVisible("hide")
    }, 3000)

    return (
        <>
            <Helmet>
                <title>Hasil Diagnosa</title>
            </Helmet>

            {
                preloaderVisible === "show" ?
                    <Preloader />
                :
                    ''
            }

            <Topbar />

            <div className="container">

                {
                    nama_penyakit === "osteoporosis" ?
                        <Osteoporosis nama={nama} tanggal_lahir={tanggal_lahir} alamat={alamat} />
                    :
                        nama_penyakit === "osteoarthritis" ?
                            <Osteoarthritis nama={nama} tanggal_lahir={tanggal_lahir} alamat={alamat} />
                        :
                            nama_penyakit === "skoliosis" ?
                                <Skoliosis nama={nama} tanggal_lahir={tanggal_lahir} alamat={alamat} />
                            :
                                nama_penyakit === "rheumatoid-arthritis" ?
                                    <RheumatoidArthritis nama={nama} tanggal_lahir={tanggal_lahir} alamat={alamat} />
                                :
                                    nama_penyakit === "tumor-tulang" ?
                                        <TumorTulang nama={nama} tanggal_lahir={tanggal_lahir} alamat={alamat} />
                                    :
                                        nama_penyakit === "not-found" ?
                                            <NotFound nama={nama} tanggal_lahir={tanggal_lahir} alamat={alamat} />
                                        :
                                            <NotFound nama={nama} tanggal_lahir={tanggal_lahir} alamat={alamat} />
                }

            </div>

            <Footer />
        </>
    )
}

export default HasilDiagnosa;