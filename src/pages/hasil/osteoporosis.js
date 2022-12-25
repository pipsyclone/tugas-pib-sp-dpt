import OsteoporosisImage from '../../assets/img/osteoporosis.jpeg'

import DataPenyakit from '../../assets/dataPenyakit'

const Osteoporosis = (props) => {
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
                    PENYAKIT YANG DIDERITA  : OSTEOPOROSIS
                </pre>
                
                <hr />

                <img src={OsteoporosisImage} alt="Osteoporosis" class="img-fluid text-center col-sm-3 float-start me-3" />
                <h4>Osteoporosis</h4>
                <p>
                    Osteoporosis disebabkan oleh menurunnya kemampuan tubuh dalam meregenerasi tulang sehingga kepadatan tulang berkurang. 
                    Penurunan kemampuan regenerasi ini biasanya akan dimulai saat seseorang memasuki usia 35 tahun.
                    <br />
                    Selain faktor usia, ada beberapa faktor lain yang bisa meningkatkan risiko terjadinya osteoporosis, seperti kekurangan vitamin 
                    D, gangguan hormon, jarang berolahraga, konsumsi obat-obatan tertentu, serta kebiasaan merokok.
                    <br />
                    Osteoporosis sering kali tidak menimbulkan gejala apa pun. Kondisi ini biasanya baru diketahui saat seseorang mengalami 
                    cedera yang menyebabkan patah tulang.  Seiring berkurangnya kepadatan tulang, penderita bisa mengalami gejala berikut:

                    <ul>
                        {
                            DataPenyakit.map((data, dataKey) => {
                                if (data.idPenyakit === "osteoporosis") {
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

                <h5>Pengobatan dan Pencegahan Osteoporosis</h5>
                <p>
                    Pengobatan osteoporosis bertujuan untuk mencegah terjadinya patah tulang atau tulang retak. Jika penderita osteoporosis sangat 
                    berisiko untuk mengalami patah tulang, dokter dapat memberikan obat-obatan untuk meningkatkan kepadatan tulang, seperti:
                    <br />
                    <ul>
                        <li>Bifosfonat</li>
                        <li>Antibodi monoklonal</li>
                        <li>Terapi hormon</li>
                    </ul>
                    
                    Jika diperlukan, penderita dapat diberikan obat untuk meningkatkan pembentukan tulang, seperti teriparatide dan abaloparatide. 
                    Pasien juga akan dianjurkan untuk mengurangi aktivitas yang dapat menyebabkannya terjatuh atau cedera.
                    <br />
                    Pada beberapa keadaan, osteoporosis sulit untuk dicegah. Akan tetapi, Anda bisa mengurangi risiko terkena osteoporosis dengan 
                    berhenti merokok, melakukan pemeriksaan tulang berkala jika sudah menopause, berolahraga secara teratur, dan mengonsumsi 
                    makanan yang kaya akan vitamin D dan kalsium, misalnya susu sapi dan susu kedelai, atau suplemen kalsium sesuai dengan arahan 
                    dokter.
                </p>

                <p>
                    <i>Sumber : alodokter.com</i>
                </p>
            </div>
        </div>
    )
}

export default Osteoporosis;