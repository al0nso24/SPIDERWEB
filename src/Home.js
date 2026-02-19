import { Link } from "react-router";

export default function Home(){
    return(
        <div>
            <div className="hero"></div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                        <h1 className="text-center"><i><b>"Un gran poder conlleva una gran responsabilidad"</b></i></h1>     
                        <h5 className="text-center text-secondary">El héroe más humano de Marvel</h5>
                        <br></br>
                        <div className="d-flex justify-content-center">
                            <Link to="/origen" className="btn btn-danger">Conoce su historia</Link>
                        </div>
                        <br></br>
                    </div>
                </div>
            </div>
            <br></br>
        </div>
    )
}