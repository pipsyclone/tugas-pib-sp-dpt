import SkoliosisImage from '../../assets/img/skoliosis.jpg'

import DataPenyakit from '../../assets/dataPenyakit';

const Skoliosis = (props) => {
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
                    PENYAKIT YANG DIDERITA  : SKOLIOSIS
                </pre>
                
                <hr />

                <img src={SkoliosisImage} alt="Skoliosis" class="img-fluid text-center col-sm-3 float-start me-3" />
                
                <h4>Skoliosis</h4>
                <p>
                    Skoliosis adalah kelainan pada tulang belakang yang ditandai dengan bentuk punggung melengkung seperti huruf C atau S. 
                    Skoliosis lebih sering ditemukan pada anak-anak sebelum masa pubertas, yaitu sekitar usia 10–15 tahun.
                    <br />
                    Skoliosis biasanya menimbulkan keluhan ringan, tetapi dapat berkembang menjadi lebih parah seiring pertambahan usia. 
                    Jika tidak ditangani, lengkungan skoliosis yang sangat parah dapat menimbulkan kerusakan sendi dan nyeri berkepanjangan.
                    Selain itu, tulang belakang yang melengkung parah juga berisiko mengganggu paru-paru.
                </p>

                <h5>Gejala Skoliosis</h5>
                <p>
                    Gejala skoliosis dapat bervariasi, tergantung pada tingkat keparahan kondisinya. Akan tetapi, beberapa gejala khas skoliosis yang 
                    umumnya timbul antara lain:

                    <ul>
                        {
                            DataPenyakit.map((data, dataKey) => {
                                if (data.idPenyakit === "skoliosis") {
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

                <h5>Diagnosis Skoliosis</h5>
                <p>
                    Untuk mendiagnosis skoliosis, langkah pertama yang dilakukan oleh dokter adalah menanyakan gejala yang dialami, riwayat penyakit 
                    pasien dan keluarganya, dan waktu saat pasien pertama kali menyadari kemunculan lengkungan tulang belakang.
                    <br />
                    Selanjutnya, dokter akan melakukan pemeriksaan fisik. Dalam pemeriksaan fisik, dokter akan meminta pasien untuk membungkuk untuk 
                    melihat apakah ada tulang rusuk yang menonjol atau tidak. Dokter juga akan memeriksa kondisi saraf untuk mengetahui apakah ada 
                    otot yang lemah, kaku, atau menunjukkan refleks abnormal.
                    <br />
                    Selain pemeriksaan fisik, dokter juga dapat melakukan pemeriksaan foto Rontgen dan CT scan untuk memastikan adanya skoliosis dan 
                    mengetahui tingkat keparahan lengkungan tulang belakang. Jika dokter mencurigai kelainan pada tulang belakang disebabkan oleh hal 
                    lain, dokter dapat melakukan pemindaian dengan MRI.
                </p>

                <h5>Pengobatan Skoliosis</h5>
                <p>
                    Penanganan skoliosis dilakukan berdasarkan jenis skoliosis, tingkat keparahan dan usia pasien, serta kondisi lengkungan tulang 
                    belakang.
                    <br />
                    <br />
                    <b>Terapi skoliosis pada anak-anak</b>
                    <br />
                    Pengobatan belum diperlukan untuk skoliosis yang ringan pada anak, mengingat tulang belakangnya masih dapat kembali lurus saat 
                    usianya bertambah. Meski demikian, perkembangan penyakit perlu terus diamati oleh dokter.
                    <br />
                    <br />
                    <b>Terapi skoliosis pada orang dewasa</b>
                    <br />
                    Untuk penderita dewasa yang mengalami skoliosis parah dan sering menimbulkan keluhan nyeri punggung, terapi yang dilakukan dokter 
                    dapat berupa:

                    <ul>
                        <li>Pemberian obat pereda nyeri</li>
                        <li>Untuk meredakan peradangan dan nyeri, dokter akan memberikan obat antiinflamasi nonsteroid, seperti paracetamol atau ibuprofen.</li>
                        <li>Suntik kortikosteroid di rongga tulang belakang</li>
                        <li>
                            Sunti kortikosteroid diberikan jika pasien mengalami tekanan di saraf tulang belakang sehingga merasakan nyeri, kaku, atau 
                            kesemutan. Suntikan ini hanya bekerja dalam jangka waktu yang pendek, yaitu sekitar beberapa minggu atau beberapa bulan.
                        </li>
                    </ul>

                    <b>Operasi skoliosis</b>
                    <br />
                    Untuk kasus skoliosis yang parah, dokter dapat melakukan operasi. Prosedur operasi yang dilakukan bisa berupa:

                    <ul>
                        <li>
                            <b>Operasi penggabungan tulang</b>
                            <br />
                            Dalam operasi ini, dua atau beberapa ruas tulang belakang disatukan agar membentuk satu tulang. Batang logam, kait, 
                            sekrup, atau kabel biasanya akan menahan bagian tersebut, hingga tulang menyatu.
                        </li>
                        <li>
                            <b>Operasi laminektomi</b>
                            <br />
                            Dalam operasi laminektomi, sebagian dari tulang belakang yang melengkung akan diangkat untuk menghilangkan tekanan 
                            pada saraf yang terpengaruh.
                        </li>
                        <li>
                            <b>Operasi dekompresi</b>
                            <br />
                            Operasi ini mengangkat salah satu bantalan atau cakram di tulang belakang guna mengurangi tekanan pada saraf.
                        </li>
                    </ul>
                    
                    Operasi yang sering dilakukan pada banyak kasus skoliosis adalah kombinasi dari teknik-teknik operasi di atas. Perlu diketahui, 
                    waktu penyembuhan operasi tulang belakang biasanya memakan waktu hingga 1 tahun atau lebih untuk bisa pulih sepenuhnya. Selain itu, 
                    operasi ini juga berisiko menimbulkan komplikasi berupa:

                    <ul>
                        <li>Implan menjadi tergeser, rusak, atau longgar</li>
                        <li>Infeksi pada luka pascaoperasi</li>
                        <li>Penggumpalan darah</li>
                        <li>Kerusakan saraf</li>
                    </ul>
                </p>

                <p>
                    <i>Sumber : alodokter.com</i>
                </p>
            </div>
        </div>
    )
}

export default Skoliosis;