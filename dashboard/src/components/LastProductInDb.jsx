export const LastProductInDb = () => {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Ultimo evento agregado
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: "40rem" }}
              src="images/1703102504038_products_.jpeg"
              alt="Evento"
            />
          </div>
          <p>
            ¡Bienvenidos a "Hells Comedy: Stand Up del Barrio"! Prepárense para una noche épica de risas
             desenfrenadas con los comediantes más divertidos y locos del barrio. Desde anécdotas 
             locales hasta observaciones ingeniosas, este espectáculo promete una experiencia auténtica 
             llena de humor callejero. ¡No se pierdan la diversión y la autenticidad de "Hells Comedy"!
          </p>
          <a
            className="btn btn-danger"
            target="_blank"
            rel="nofollow"
            href="http://localhost:3000/products/productDetail/7"
          >
            Ver más
          </a>
        </div>
      </div>
    </div>
  )
}
