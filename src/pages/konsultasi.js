import { Helmet } from "react-helmet";

import KonsultasiController from "../controllers/konsultasiController";

import Topbar from "../components/topbar";

const Konsultasi = () => {

    const {
        showHideForm, setShowHideForm,
        formInit
    } = KonsultasiController()

    return (
        <>
            <Helmet>
                <title>Konsultasi</title>
            </Helmet>

            <Topbar />

            <div className="container mt-5 mb-5">
                <form onSubmit={formInit.handleSubmit}>
                    <div className={showHideForm === "biodata" ? 'card shadow mx-auto col-sm-5 middle' : 'd-none'}>
                        <div className="card-body">
                            <h3>Biodata</h3>
                            <hr />

                            <div className="mb-3">
                                <label>Nama Lengkap : </label>
                                <input type={'text'} className='form-control' placeholder={'Masukkan nama lengkap...'} value={formInit.nama} {...formInit.getFieldProps('nama')} />
                                <span className="text-danger">{formInit.errors.nama}</span>
                            </div>
                            <div className="mb-3">
                                <label>Tanggal Lahir : </label>
                                <input type={'date'} className='form-control' value={formInit.tanggal_lahir} {...formInit.getFieldProps('tanggal_lahir')} />
                                <span className="text-danger">{formInit.errors.tanggal_lahir}</span>
                            </div>
                            <div className="mb-3">
                                <label>Alamat : </label>
                                <textarea className="form-control" placeholder={'Tulis disini...'} rows={5} value={formInit.alamat} {...formInit.getFieldProps('alamat')}></textarea>
                                <span className="text-danger">{formInit.errors.alamat}</span>
                            </div>

                            <hr />

                            <button type="button" className={formInit.values.nama == "" || formInit.values.tanggal_lahir == "" || formInit.values.alamat == "" ? 'btn btn-primary rounded-0 float-end disabled' : 'btn btn-primary rounded-0 float-end'} onClick={() => setShowHideForm("survey")}>Mulai Konsultasi</button>
                        </div>
                    </div>

                    {/* Survey */}
                    <div className={showHideForm === 'survey' ? 'container' : 'd-none'}>
                        
                        <div className='card shadow mx-auto col-sm-5 mb-3'>
                            <div className="card-header text-end">Pertanyaan ke 1/26</div>
                            <div className="card-body">
                                <div className="fs-5">
                                    Apakah anda merasa sakit punggung ?
                                    <div className="mt-3 mb-5">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no1'} id={'no1_ya'} value="ya" onChange={(e) => formInit.values.no1 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no1_ya'}>
                                                Ya
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no1'} id={'no1_tidak'} value="tidak" onChange={(e) => formInit.values.no1 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no1_tidak'}>
                                                Tidak
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card shadow mx-auto col-sm-5 mb-3'>
                            <div className="card-header text-end">Pertanyaan ke 2/26</div>
                            <div className="card-body">
                                <div className="fs-5">
                                    Apakah anda merasa nyeri sendi ?
                                    <div className="mt-3 mb-5">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no2'} id={'no2_ya'} value="ya" onChange={(e) => formInit.values.no2 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no2_ya'}>
                                                Ya
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no2'} id={'no2_tidak'} value="tidak" onChange={(e) => formInit.values.no2 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no2_tidak'}>
                                                Tidak
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card shadow mx-auto col-sm-5 mb-3'>
                            <div className="card-header text-end">Pertanyaan ke 3/26</div>
                            <div className="card-body">
                                <div className="fs-5">
                                    Apakah sendi anda membengkak ?
                                    <div className="mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no3'} id={'no3_ya'} value="ya" onChange={(e) => formInit.values.no3 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no3_ya'}>
                                                Ya
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no3'} id={'no3_tidak'} value="tidak" onChange={(e) => formInit.values.no3 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no3_tidak'}>
                                                Tidak
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card shadow mx-auto col-sm-5 mb-3'>
                            <div className="card-header text-end">Pertanyaan ke 4/26</div>
                            <div className="card-body">
                                <div className="fs-5">
                                    Apakah sendi anda berbunyi ketika digerakkan ?
                                    <div className="mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no4'} id={'no4_ya'} value="ya" onChange={(e) => formInit.values.no4 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no4_ya'}>
                                                Ya
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no4'} id={'no4_tidak'} value="tidak" onChange={(e) => formInit.values.no4 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no4_tidak'}>
                                                Tidak
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card shadow mx-auto col-sm-5 mb-3'>
                            <div className="card-header text-end">Pertanyaan ke 5/26</div>
                            <div className="card-body">
                                <div className="fs-5">
                                    Apakah tulang anda mudah patah ?
                                    <div className="mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no5'} id={'no5_ya'} value="ya" onChange={(e) => formInit.values.no5 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no5_ya'}>
                                                Ya
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no5'} id={'no5_tidak'} value="tidak" onChange={(e) => formInit.values.no5 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no5_tidak'}>
                                                Tidak
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card shadow mx-auto col-sm-5 mb-3'>
                            <div className="card-header text-end">Pertanyaan ke 6/26</div>
                            <div className="card-body">
                                <div className="fs-5">
                                    Apakah anda merasa salah satu bahu lebih tinggi daripada yang lain ?
                                    <div className="mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no6'} id={'no6_ya'} value="ya" onChange={(e) => formInit.values.no6 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no6_ya'}>
                                                Ya
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no6'} id={'no6_tidak'} value="tidak" onChange={(e) => formInit.values.no6 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no6_tidak'}>
                                                Tidak
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card shadow mx-auto col-sm-5 mb-3'>
                            <div className="card-header text-end">Pertanyaan ke 7/26</div>
                            <div className="card-body">
                                <div className="fs-5">
                                    Apakah anda merasa salah satu tulang belikat tampak lebih menonjol daripada yang lain ?
                                    <div className="mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no7'} id={'no7_ya'} value="ya" onChange={(e) => formInit.values.no7 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no7_ya'}>
                                                Ya
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no7'} id={'no7_tidak'} value="tidak" onChange={(e) => formInit.values.no7 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no7_tidak'}>
                                                Tidak
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card shadow mx-auto col-sm-5 mb-3'>
                            <div className="card-header text-end">Pertanyaan ke 8/26</div>
                            <div className="card-body">
                                <div className="fs-5">
                                    Apakah anda merasa salah satu pinggul lebih menonjol daripada yang lain ?
                                    <div className="mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no8'} id={'no8_ya'} value="ya" onChange={(e) => formInit.values.no8 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no8_ya'}>
                                                Ya
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no8'} id={'no8_tidak'} value="tidak" onChange={(e) => formInit.values.no8 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no8_tidak'}>
                                                Tidak
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card shadow mx-auto col-sm-5 mb-3'>
                            <div className="card-header text-end">Pertanyaan ke 9/26</div>
                            <div className="card-body">
                                <div className="fs-5">
                                    Apakah anda merasa kesulitan menggerakkan lutut atau panggul dan terasa lebih terbatas ketika duduk, berdiri, naik tangga, atau berjalan ?
                                    <div className="mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no9'} id={'no9_ya'} value="ya" onChange={(e) => formInit.values.no9 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no9_ya'}>
                                                Ya
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no9'} id={'no9_tidak'} value="tidak" onChange={(e) => formInit.values.no9 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no9_tidak'}>
                                                Tidak
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card shadow mx-auto col-sm-5 mb-3'>
                            <div className="card-header text-end">Pertanyaan ke 10/26</div>
                            <div className="card-body">
                                <div className="fs-5">
                                    Apakah anda merasa tinggi badan menurun dari waktu ke waktu ?
                                    <div className="mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no10'} id={'no10_ya'} value="ya" onChange={(e) => formInit.values.no10 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no10_ya'}>
                                                Ya
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no10'} id={'no10_tidak'} value="tidak" onChange={(e) => formInit.values.no10 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no10_tidak'}>
                                                Tidak
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card shadow mx-auto col-sm-5 mb-3'>
                            <div className="card-header text-end">Pertanyaan ke 11/26</div>
                            <div className="card-body">
                                <div className="fs-5">
                                    Apakah anda merasa kaku pada lutut atau panggul terutama di pagi hari atau setelah duduk lama ?
                                    <div className="mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no11'} id={'no11_ya'} value="ya" onChange={(e) => formInit.values.no11 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no11_ya'}>
                                                Ya
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no11'} id={'no11_tidak'} value="tidak" onChange={(e) => formInit.values.no11 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no11_tidak'}>
                                                Tidak
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card shadow mx-auto col-sm-5 mb-3'>
                            <div className="card-header text-end">Pertanyaan ke 12/26</div>
                            <div className="card-body">
                                <div className="fs-5">
                                    Apakah anda merasa tubuh anda condong ke satu sisi ?
                                    <div className="mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no12'} id={'no12_ya'} value="ya" onChange={(e) => formInit.values.no12 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no12_ya'}>
                                                Ya
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no12'} id={'no12_tidak'} value="tidak" onChange={(e) => formInit.values.no12 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no12_tidak'}>
                                                Tidak
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card shadow mx-auto col-sm-5 mb-3'>
                            <div className="card-header text-end">Pertanyaan ke 13/26</div>
                            <div className="card-body">
                                <div className="fs-5">
                                    Apakah anda merasa nyeri pada punggung bagian bawah ?
                                    <div className="mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no13'} id={'no13_ya'} value="ya" onChange={(e) => formInit.values.no13 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no13_ya'}>
                                                Ya
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no13'} id={'no13_tidak'} value="tidak" onChange={(e) => formInit.values.no13 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no13_tidak'}>
                                                Tidak
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card shadow mx-auto col-sm-5 mb-3'>
                            <div className="card-header text-end">Pertanyaan ke 14/26</div>
                            <div className="card-body">
                                <div className="fs-5">
                                    Apakah anda merasa kaku pada punggung ?
                                    <div className="mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no14'} id={'no14_ya'} value="ya" onChange={(e) => formInit.values.no14 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no14_ya'}>
                                                Ya
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no14'} id={'no14_tidak'} value="tidak" onChange={(e) => formInit.values.no14 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no14_tidak'}>
                                                Tidak
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card shadow mx-auto col-sm-5 mb-3'>
                            <div className="card-header text-end">Pertanyaan ke 15/26</div>
                            <div className="card-body">
                                <div className="fs-5">
                                    Apakah tinggi pinggang anda tidak rata ?
                                    <div className="mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no15'} id={'no15_ya'} value="ya" onChange={(e) => formInit.values.no15 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no15_ya'}>
                                                Ya
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no15'} id={'no15_tidak'} value="tidak" onChange={(e) => formInit.values.no15 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no15_tidak'}>
                                                Tidak
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card shadow mx-auto col-sm-5 mb-3'>
                            <div className="card-header text-end">Pertanyaan ke 16/26</div>
                            <div className="card-body">
                                <div className="fs-5">
                                    Apakah anda merasa berat badan menurun ?
                                    <div className="mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no16'} id={'no16_ya'} value="ya" onChange={(e) => formInit.values.no16 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no16_ya'}>
                                                Ya
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no16'} id={'no16_tidak'} value="tidak" onChange={(e) => formInit.values.no16 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no16_tidak'}>
                                                Tidak
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card shadow mx-auto col-sm-5 mb-3'>
                            <div className="card-header text-end">Pertanyaan ke 17/26</div>
                            <div className="card-body">
                                <div className="fs-5">
                                    Apakah anda merasa otot anda tegang ?
                                    <div className="mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no17'} id={'no17_ya'} value="ya" onChange={(e) => formInit.values.no17 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no17_ya'}>
                                                Ya
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no17'} id={'no17_tidak'} value="tidak" onChange={(e) => formInit.values.no17 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no17_tidak'}>
                                                Tidak
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card shadow mx-auto col-sm-5 mb-3'>
                            <div className="card-header text-end">Pertanyaan ke 18/26</div>
                            <div className="card-body">
                                <div className="fs-5">
                                    Apakah anda merasa hilang nafsu makan ?
                                    <div className="mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no18'} id={'no18_ya'} value="ya" onChange={(e) => formInit.values.no18 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no18_ya'}>
                                                Ya
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no18'} id={'no18_tidak'} value="tidak" onChange={(e) => formInit.values.no18 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no18_tidak'}>
                                                Tidak
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card shadow mx-auto col-sm-5 mb-3'>
                            <div className="card-header text-end">Pertanyaan ke 19/26</div>
                            <div className="card-body">
                                <div className="fs-5">
                                    Apakah anda merasakan tubuh anda terasa lelah dan lemah ?
                                    <div className="mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no19'} id={'no19_ya'} value="ya" onChange={(e) => formInit.values.no19 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no19_ya'}>
                                                Ya
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no19'} id={'no19_tidak'} value="tidak" onChange={(e) => formInit.values.no19 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no19_tidak'}>
                                                Tidak
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card shadow mx-auto col-sm-5 mb-3'>
                            <div className="card-header text-end">Pertanyaan ke 20/26</div>
                            <div className="card-body">
                                <div className="fs-5">
                                    Apakah anda merasa postur anda menjadi bungkuk ?
                                    <div className="mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no20'} id={'no20_ya'} value="ya" onChange={(e) => formInit.values.no20 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no20_ya'}>
                                                Ya
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no20'} id={'no20_tidak'} value="tidak" onChange={(e) => formInit.values.no20 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no20_tidak'}>
                                                Tidak
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card shadow mx-auto col-sm-5 mb-3'>
                            <div className="card-header text-end">Pertanyaan ke 21/26</div>
                            <div className="card-body">
                                <div className="fs-5">
                                    Apakah anda merasa sesak nafas ?
                                    <div className="mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no21'} id={'no21_ya'} value="ya" onChange={(e) => formInit.values.no21 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no21_ya'}>
                                                Ya
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no21'} id={'no21_tidak'} value="tidak" onChange={(e) => formInit.values.no21 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no21_tidak'}>
                                                Tidak
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card shadow mx-auto col-sm-5 mb-3'>
                            <div className="card-header text-end">Pertanyaan ke 22/26</div>
                            <div className="card-body">
                                <div className="fs-5">
                                    Apakah anda sedang kekurangan darah (anemia) ?
                                    <div className="mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no22'} id={'no22_ya'} value="ya" onChange={(e) => formInit.values.no22 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no22_ya'}>
                                                Ya
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no22'} id={'no22_tidak'} value="tidak" onChange={(e) => formInit.values.no22 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no22_tidak'}>
                                                Tidak
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card shadow mx-auto col-sm-5 mb-3'>
                            <div className="card-header text-end">Pertanyaan ke 23/26</div>
                            <div className="card-body">
                                <div className="fs-5">
                                    Apakah anda merasakan sensi mati rasa ?
                                    <div className="mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no23'} id={'no23_ya'} value="ya" onChange={(e) => formInit.values.no23 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no23_ya'}>
                                                Ya
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no23'} id={'no23_tidak'} value="tidak" onChange={(e) => formInit.values.no23 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no23_tidak'}>
                                                Tidak
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card shadow mx-auto col-sm-5 mb-3'>
                            <div className="card-header text-end">Pertanyaan ke 24/26</div>
                            <div className="card-body">
                                <div className="fs-5">
                                    Apakah anda sedang demam ringan ?
                                    <div className="mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no24'} id={'no24_ya'} value="ya" onChange={(e) => formInit.values.no24 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no24_ya'}>
                                                Ya
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no24'} id={'no24_tidak'} value="tidak" onChange={(e) => formInit.values.no24 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no24_tidak'}>
                                                Tidak
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card shadow mx-auto col-sm-5 mb-3'>
                            <div className="card-header text-end">Pertanyaan ke 25/26</div>
                            <div className="card-body">
                                <div className="fs-5">
                                    Apakah anda merasa lebih banyak berkeringat di malam hari ?
                                    <div className="mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no25'} id={'no25_ya'} value="ya" onChange={(e) => formInit.values.no25 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no25_ya'}>
                                                Ya
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no25'} id={'no25_tidak'} value="tidak" onChange={(e) => formInit.values.no25 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no25_tidak'}>
                                                Tidak
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card shadow mx-auto col-sm-5 mb-3'>
                            <div className="card-header text-end">Pertanyaan ke 26/26</div>
                            <div className="card-body">
                                <div className="fs-5">
                                    Apakah anda sedang demam di atas 38 derajat celcius ?
                                    <div className="mt-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no26'} id={'no26_ya'} value="ya" onChange={(e) => formInit.values.no26 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no26_ya'}>
                                                Ya
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={'no26'} id={'no26_tidak'} value="tidak" onChange={(e) => formInit.values.no26 = e.target.value}  />
                                            <label className="form-check-label" htmlFor={'no26_tidak'}>
                                                Tidak
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card card-body col-sm-5 mx-auto">
                            <button type="submit" className={'btn btn-primary rounded-0 float-end'}>
                                Selesai
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Konsultasi;