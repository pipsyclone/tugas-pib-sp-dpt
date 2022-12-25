const Error404 = () => {
    return (
        <div className="middle col-sm-8 animate__animated animate__fadeIn">
            <div className="row mx-auto justify-content-center">
                <div className="col-sm text-center p-0 align-self-center">
                    <img src="/error-page-404.svg" className="img-fluid" width={'75%'} />
                </div>
                <div className="col-sm-5 align-self-center">
                    <h4>Page Not Found!</h4>
                    <span>You play too far, please back to home!</span>
                    <br />
                    <br />
                    <a className="btn btn-primary rounded-0" href="/">
                        <i className="fa-solid fa-home me-2"></i> Home
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Error404;