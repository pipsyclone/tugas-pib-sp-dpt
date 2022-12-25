import { Helmet } from "react-helmet";

import Topbar from "../components/topbar";
import Footer from "../components/footer";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Sistem Pakar - Diagnosa Penyakit Tulang</title>
            </Helmet>
            
            <Topbar />

            <section className="" id="hero">
                <div className="d-flex w-75 mx-auto mt-5 mb-5">
                    <div className="fw-bold fs-1 align-self-center">
                        Selamat Datang...
                        <br />
                        <br />
                        Sistem Pakar Untuk 
                        <br />
                        Mendiagnosa Penyakit Tulang
                        <br />
                        Berbasis Aplikasi Website
                    </div>
                    <div className="col-sm-6 mx-auto text-center">
                        <img src="/medical.svg" />
                    </div>
                </div>
            </section>

            <div className="content-divider"></div>

            <section className="" id="content-1">
                <div className="mx-auto w-75 mb-5">
                    <div className="content-header">
                        <p className="content-title">Information</p>
                        <hr className="content-title-bottom-border" />
                    </div>
                    <div className="content-information">
                        <h3>Penyakit Tulang</h3>
                        <span>Tubuh manusia tersusun dari 206 tulang yang tersebar dari ujung kaki hingga kepala. Tulang-tulang ini yang membuat tubuh manusia kuat untuk berdiri serta melakukan berbagai aktivitas. Karena fungsi tulang begitu penting bagi manusia, sudah semestinya kita menjaga dan melindungi tulang agar tetap sehat. Jangan sampai, tulang kita terserang penyakit yang membuat fungsinya jadi menurun.</span>
                        <br />
                        <br />
                        <span>Mengingat memiliki peran yang begitu penting, maka sudah sepantasnya Anda menjaga sistem gerak ini agar tidak mudah terserang gangguan atau penyakit. Apalagi, tulang yang menjadi pondasi dalam sistem gerak cukup rentan untuk terserang berbagai penyakit yang bisa menurunkan fungsi dan juga kekuatannya.</span>
                        <br />
                        <br />
                        <span>
                            <i className="text-danger">Berikut beberapa penyakit tulang yang telah kami selidiki.</i>
                            <ul>
                                <li>Osteoporosis</li>
                                <li>Osteoarthritis</li>
                                <li>Skoliosis</li>
                                <li>Rheumatoid Arthritis</li>
                                <li>Tumor Tulang</li>
                            </ul>
                        </span>
                    </div>

                    <div className="text-end" data-aos='fade-left'>
                        <img src="/medical-2.svg" className="content-img-background" />
                    </div>
                </div>
            </section>

            <div className="content-divider"></div>

            <Footer />
        </>
    )
}

export default Home;