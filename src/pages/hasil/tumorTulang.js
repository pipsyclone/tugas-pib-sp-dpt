import TumorTulangImage from '../../assets/img/tumor-tulang.jpg'

import DataPenyakit from '../../assets/dataPenyakit'

const TumorTulang = (props) => {
    return (
        <div className={'card mx-auto shadow col-sm-10 mb-5'}>
            <div className="card-header">
                <h3>Hasil Diagnosa</h3>
            </div>
            <div className="card-body">
                <pre>
                    NAMA                    : {props.nama}
                    <br />
                    TANGGAL LAHIR           : {props.tanggal_lahir}
                    <br />
                    ALAMAT                  : {props.alamat}
                    <br />
                    PENYAKIT YANG DIDERITA  : TUMOR TULANG
                </pre>
                
                <hr />

                <img src={TumorTulangImage} alt="Tumor Tulang" class="img-fluid text-center col-sm-4 float-start me-3" />
                
                <h4>Tumor Tulang</h4>
                <p>
                    Tumor tulang adalah kondisi yang terjadi ketika sel-sel tulang tumbuh secara abnormal. Pertumbuhan tumor tulang dapat dibedakan 
                    menjadi tumor jinak (nonkanker) dan tumor ganas (kanker), serta dapat dibagi lagi menjadi beberapa jenis. Gejala tumor tulang 
                    perlu dikenali sejak dini, agar dapat cepat ditangani.
                    <br />
                    <br />
                    Meski penyebab tumor tulang masih belum diketahui secara pasti, tetapi ada beberapa faktor yang diduga sebagai pemicu tumbuhnya 
                    tumor pada tulang, yaitu kelainan genetik (keturunan), cedera pada tulang, dan paparan radiasi dalam intensitas yang tinggi, 
                    misalnya akibat radioterapi.
                    <br />
                </p>

                <h5>Gejala Tumor Tulang</h5>
                <p>
                    Adapun gejala umum yang sering dihadapi oleh penderita : 
                    <ul>
                        {
                            DataPenyakit.map((data, dataKey) => {
                                if (data.idPenyakit === "osteoarthritis") {
                                    return data.gejalaPenyakit.map((gejala, gejalaKey) => {
                                        return (
                                            <li>
                                                {gejala.gejala}
                                            </li>
                                        )
                                    })
                                }
                            })
                        }
                    </ul>
                </p>

                <h5>Tindakan Penanganan Tumor Tulang</h5>
                <p>
                    Tumor tulang dapat ditangani oleh dokter ortopedi atau dokter ortopedi ahli onkologi. Metode penanganan tumor tulang tergantung 
                    pada jenis tumor tulang, serta tingkat keparahan dan lokasinya. Jika pasien mengalami tumor tulang jinak, maka dokter akan 
                    mengawasi perkembangannya, sekaligus meresepkan obat-obatan untuk meringankan gejala yang muncul.
                    Jika memang diperlukan, dokter bisa melakukan operasi pengangkatan tumor untuk mencegah perkembangan tumor yang berisiko mengganggu
                    fungsi jaringan di sekitarnya.
                    <br />
                    <br />
                    Sementara untuk menangani tumor tulang ganas, biasanya dibutuhkan tindakan khusus yang tergantung pada tingkat keparahan dan 
                    penyebaran kanker ke bagian tubuh lainnya.
                    Ada beberapa penanganan yang dapat dilakukan dokter untuk mengatasi kanker tulang, yaitu radioterapi, kemoterapi, tindakan bedah 
                    untuk mengangkat bagian tulang yang terkena kanker, dan amputasi.
                    Tumor tulang, baik jinak maupun ganas, merupakan kondisi yang tidak boleh disepelekan. Oleh karena itu, jika Anda menemukan 
                    benjolan pada tulang atau merasakan gejala lainnya dari tumor tulang, segeralah periksakan ke dokter.
                </p>
                
                <p>
                    <i>Sumber : alodokter.com</i>
                </p>
            </div>
        </div>
    )
}

export default TumorTulang;