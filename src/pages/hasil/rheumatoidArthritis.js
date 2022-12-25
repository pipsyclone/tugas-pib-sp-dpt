import RheumatoidArthritisImage from '../../assets/img/rheumatoid-arthritis.jpg'

import DataPenyakit from '../../assets/dataPenyakit'

const RheumatoidArthritis = (props) => {
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
                    PENYAKIT YANG DIDERITA  : RHEUMATOID ARTHRITIS
                </pre>
                
                <hr />

                <img src={RheumatoidArthritisImage} alt="Rheumatoid Arthritis" class="img-fluid text-center col-sm-4 float-start me-3" />
                
                <h4>Rheumatoid Arthritis</h4>
                <p>
                    Rheumatoid arthritis adalah peradangan jangka panjang pada sendi akibat sistem kekebalan tubuh yang secara keliru menyerang tubuh. 
                    Jika dibiarkan, radang sendi yang memburuk bisa menyebabkan gangguan fungsi sendi dan perubahan pada bentuk sendi tersebut.
                    <br />
                    Rheumatoid arthritis ditandai dengan bengkak, nyeri, dan kaku pada sendi. Selain menyerang sendi, rheumatoid arthritis juga bisa 
                    menyerang organ lain, seperti kulit, pembuluh darah, paru-paru, mata, dan jantung.
                    Penyakit ini lebih sering terjadi pada wanita, terutama yang berusia 30–50 tahun. Gejalanya terkadang mirip dengan penyakit lain, 
                    seperti polimialgia reumatik dan osteoarthritis.
                </p>

                <h5>Gejala Rheumatoid Arthritis</h5>
                <p>
                    Adapun gejala umum yang dihadapi oleh penderita : 
                    <ul>
                        {
                            DataPenyakit.map((data, dataKey) => {
                                if (data.idPenyakit === "rheumatoid-arthritis") {
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

                <h5>Pengobatan dan Pencegahan Rheumatoid Arthritis</h5>
                <p>
                    Pengobatan rheumatoid arthritis bertujuan untuk mencegah perburukan gejala, menangani peradangan, serta mengurangi kerusakan pada 
                    tulang dan sendi. Adapun metode penanganannya akan disesuaikan dengan usia dan riwayat penyakit pasien.
                    <br />
                    Rheumatoid arthritis merupakan penyakit yang berlangsung dalam jangka panjang. Penyakit ini dapat kambuh kembali setelah 
                    menghilang selama beberapa waktu.
                    <br />
                    Belum diketahui bagaimana cara mencegah rheumatoid arthritis, tetapi risiko terserang penyakit ini dapat dihindari dengan 
                    menjalani pola hidup sehat dan memeriksakan kesehatan secara berkala.
                </p>
                
                <p>
                    <i>Sumber : alodokter.com</i>
                </p>
            </div>
        </div>
    )
}

export default RheumatoidArthritis;