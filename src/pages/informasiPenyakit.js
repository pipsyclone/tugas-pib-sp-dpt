import { Helmet } from "react-helmet";

import DataPenyakit from "../assets/dataPenyakit";

import Topbar from "../components/topbar";

const InformasiPenyakit = () => {
    return (
        <>
            <Helmet>
                <title>Informasi Penyakit</title>
            </Helmet>

            <Topbar />

            <div className="container mt-5 mb-5">
                <div className="card shadow col-sm-6 mx-auto">
                    <div className="card-body">
                        <h3>Informasi Penyakit Tulang : </h3>
                        <hr />
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            {
                                DataPenyakit.map((data, key) => {
                                    return (
                                        <div class="accordion-item border">
                                            <h2 class="accordion-header" id={key}>
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#' + data.idPenyakit} aria-expanded="false" aria-controls={data.idPenyakit}>
                                                    {data.namaPenyakit}
                                                </button>
                                            </h2>
                                            <div id={data.idPenyakit} class="accordion-collapse collapse" aria-labelledby={key} data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body">
                                                    {data.description}
                                                    <br />
                                                    <br />
                                                    Berikut gejala penyakit {data.namaPenyakit} : 
                                                    <br />
                                                    {
                                                        data.gejalaPenyakit.map((gejala, gejalaKey) => {
                                                            return (
                                                                <div key={gejalaKey}>
                                                                    - <span>{gejala.gejala}</span> <br />
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InformasiPenyakit;