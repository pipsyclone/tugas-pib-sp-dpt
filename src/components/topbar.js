import { Link } from "react-router-dom";

const Topbar = () => {
    return (
        <nav className="navbar navbar-expand-sm topbar sticky-top">
            <div className="container">
                <Link className="navbar-brand" to={'/'}>
                    <b>SP-DPT</b>
                </Link>

                <ul className="navbar-nav">
                    <li className="nav-item fs-5">
                        <Link className="nav-link active" to={'/'}> Beranda </Link>
                    </li>
                    <li className="nav-item fs-5">
                        <Link className="nav-link" to={'/konsultasi'}> Konsultasi </Link>
                    </li>
                    <li className="nav-item fs-5">
                        <Link className="nav-link" to={'/informasi-penyakit'}> Informasi Penyakit </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Topbar;