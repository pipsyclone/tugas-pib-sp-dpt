const NotFound = (props) => {
    return (
        <div className={'card mx-auto shadow col-sm-10'}>
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
                    PENYAKIT YANG DIDERITA  : TIDAK DITEMUKAN!
                </pre>
                
                <hr />

                <div className="text-center">
                    <img src={'/medical-not-found.svg'} alt="Skoliosis" class="img-fluid col-sm-4" />
                    <h1>Mohon Maaf Saat Ini Kami Belum Bisa Mengidentifikasi Penyakit Anda!</h1>
                </div>
            </div>
        </div>
    )
}

export default NotFound;