import { Link } from "react-router";

export default function Menu() {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <Link class="navbar-brand fs-3 text-white" to="/">Spider-Web</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <Link class="nav-link text-white" aria-current="page" to="/">Home</Link>
                        <Link class="nav-link text-white" to="/origen">Origen</Link>
                        <Link class="nav-link text-white" to="/variantes">Variantes</Link>
                        <Link class="nav-link text-white" to="/villanos">Villanos</Link>
                        <Link class="nav-link text-white" to="/apariciones">Apariciones</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}