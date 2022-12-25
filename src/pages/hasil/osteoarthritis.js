import OsteoarthritisImage from '../../assets/img/osteoarthritis.jpg'

import DataPenyakit from "../../assets/dataPenyakit"

const Osteoarthritis = (props) => {
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
                    PENYAKIT YANG DIDERITA  : OSTEOARTHRITIS
                </pre>
                
                <hr />

                <img src={OsteoarthritisImage} alt="Osteoporosis" class="img-fluid text-center col-sm-3 float-start me-3" />
                <h4>Osteoarthritis</h4>
                <p>
                    Osteoarthritis adalah peradangan kronis di sendi akibat kerusakan pada tulang rawan. Osteoarthritis adalah jenis arthritis atau radang sendi yang paling sering terjadi. Kondisi ini menyebabkan keluhan, seperti sendi-sendi terasa sakit, kaku, dan bengkak.
                    <br />
                    Osteoarthritis bisa menyerang semua sendi, tetapi kondisi ini paling sering terjadi di sendi-sendi jari tangan, lutut, pinggul, dan tulang punggung. Gejala osteoarthritis umumnya berkembang secara bertahap seiring waktu.
                    <br />
                    <br />
                    Osteoarthritis tidak bisa disembuhkan. Meski demikian, ada sejumlah tindakan yang dapat dilakukan untuk meringankan gejala, mencegah perburukan, dan membantu penderitanya agar bisa beraktivitas kembali secara mandiri.
                </p>

                <h5>Gejala Osteoarthritis</h5>
                <p>
                    Pada tahap awal, penderita osteoarthritis dapat mengalami keluhan rasa sakit atau nyeri sendi dan sendi kaku. Gejala tersebut akan berkembang secara perlahan dan makin parah seiring waktu. Kondisi ini menyebabkan penderita kesulitan menjalani aktivitas sehari-hari.
                    <br />
                    Selain nyeri sendi dan kaku, gejala lain dari osteoarthritis yang umum terjadi adalah:
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

                <h5>Penyebab dan Faktor Risiko Osteoarthritis</h5>
                <p>
                    Osteoarthritis disebabkan oleh kerusakan pada tulang rawan dan sendi. Kondisi ini terjadi ketika tulang rawan yang merupakan 
                    bantalan pelindung tulang kehilangan elastisitasnya. Akibatnya, terjadi gesekan antartulang yang membuatnya lebih rentan mengalami 
                    kerusakan dan menyebabkan radang sendi.
                    <br />
                    <br />
                    Pertambahan usia adalah salah satu faktor utama terjadinya osteoarthritis. Selain itu, ada beberapa faktor lain yang dapat meningkatkan risiko seseorang menderita osteoarthritis, yaitu:

                    <ul>
                        <li>Menderita obesitas</li>
                        <li>Mengalami cedera pada sendi</li>
                        <li>Memiliki riwayat osteoarthritis dalam keluarga</li>
                        <li>Memiliki riwayat operasi pada tulang dan sendi</li>
                        <li>Berjenis kelamin perempuan, terutama yang sudah menopause</li>
                        <li>Memiliki kelainan bawaan pada tulang rawan atau sendi</li>
                        <li>Menderita penyakit tertentu, seperti rheumatoid arthritis dan hemokromatosis</li>
                        <li>Melakukan pekerjaan atau aktivitas fisik yang menyebabkan sendi tertekan secara terus-menerus, misalnya mengenakan sepatu hak tinggi</li>
                    </ul>
                </p>

                <h5>Pengobatan Osteoarthritis</h5>
                <p>
                    Pengobatan osteoarthritis bertujuan untuk meredakan gejala agar penderitanya bisa tetap beraktivitas dengan normal. 
                    Metode pengobatan yang dapat dilakukan antara lain:
                    <br />
                    <br />
                    <b>Obat-obatan</b> 
                    Untuk meredakan rasa nyeri dan peradangan dokter akan memberikan obat-obatan, seperti:

                    <ul>
                        <li>Paracetamol</li>
                        <li>Obat antiinflamasi nonsteroid, seperti ibuprofen, naproxen sodium, atau etoricoxib</li>
                        <li>Duloxetine</li>
                        <li>Capsaicin krim</li>
                        <li>Obat suntik golongan kortikosteroid</li>
                    </ul>
                    
                    <b>Fisioterapi</b>
                    <br />
                    Penderita osteoarthritis dapat menjalani fisioterapi untuk memperkuat otot-otot di sekitar persendian. Terapi ini juga bisa meningkatkan fleksibilitas sendi dan otot, serta mengurangi rasa sakit.
                    <br />
                    <br />
                    <b>Operasi</b>
                    <br />
                    Meski jarang, operasi bisa dilakukan untuk memperbaiki atau mengganti sendi yang rusak. Tindakan ini bertujuan untuk membantu pasien agar lebih mudah bergerak. Metode operasi yang bisa dilakukan oleh dokter misalnya total hip replacement pada  osteoarthritis panggul dan total knee replacement pada osteoarthritis lutut.
                    <br />
                    <br />
                    <b>Olahraga</b>
                    <br />
                    Selain meningkatkan daya tahan tubuh, olahraga yang dilakukan secara teratur bisa memperkuat otot-otot di sekitar persendian sehingga persendian akan lebih stabil.
                    <br />
                    <br />
                    <b>Diet</b>
                    <br />
                    Pasien osteoarthritis dengan  berat badan berlebih disarankan untuk menurunkan berat badan. Hal ini bertujuan untuk mengurangi tekanan pada sendi sehingga bisa mengurangi rasa sakit.
                    <br />
                    <br />
                    <b>Komplikasi Osteoarthritis</b>
                    <br />
                    Osteoarthritis yang tidak tertangani dapat menimbulkan nyeri dan rasa tidak nyaman. Kondisi ini bisa memicu keluhan atau gangguan kesehatan lain, seperti:

                    <ul>
                        <li>Gangguan kecemasan</li>
                        <li>Gangguan tidur</li>
                        <li>Depresi</li>
                        <li>Osteonecrosis atau avascular necrosis (kematian jaringan tulang)</li>
                        <li>Infeksi pada sendi</li>
                        <li>Saraf terjepit atau hernia nukleus pulposus (HNP)</li>
                    </ul>
                    
                    
                    
                    
                    
                    
                    <b>Pencegahan Osteoarthritis</b>
                    <br />
                    Osteoarthritis tidak selalu dapat dicegah. Namun, ada beberapa upaya yang dapat dilakukan untuk menurunkan risiko terkena osteoarthritis, antara lain:

                    <ul>
                        <li>Menjaga berat badan ideal</li>
                        <li>Berolahraga rutin dan aktif secara fisik</li>
                        <li>Menjaga postur tubuh saat duduk atau berdiri</li>
                        <li>Melakukan peregangan otot setelah duduk dalam waktu yang lama</li>
                        <li>Beristirahat yang cukup dan teratur</li>
                        <li>Berhati-hati dalam berjalan dan berkendara untuk menghindari cedera sendi</li>
                    </ul>
                </p>

                <p>
                    <i>Sumber : alodokter.com</i>
                </p>
            </div>
        </div>
    )
}

export default Osteoarthritis;