import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="text-light pt-5 pb-4 mt-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-4">
            <h5>Spider-Man</h5>
            <p className="text-white">
              Protector de Nueva York y símbolo de sacrificio y valentía.
            </p>
          </div>
          <div className="col-12 col-md-4 offset-md-2">
            <h5>Secciones para explorar</h5>
            <ul className="list-unstyled">
              <li><Link className="text-white text-decoration-none" to="/">Home</Link></li>
              <li><Link className="text-white text-decoration-none" to="/origen">Origen</Link></li>
              <li><Link className="text-white text-decoration-none" to="/variantes">Variantes</Link></li>
              <li><Link className="text-white text-decoration-none" to="/villanos">Villanos</Link></li>
              <li><Link className="text-white text-decoration-none" to="/apariciones">Apariciones</Link></li>
            </ul>
          </div>
        </div>
        <hr className="border-white"></hr>
        <div className="text-white">
          <span>&copy; 2026 Alonso Zegarra Velásquez</span>
        </div>
        <i class="bi bi-envelope-at-fill"></i> zegarrav24@gmail.com
      </div>
    </footer>
  );
}
