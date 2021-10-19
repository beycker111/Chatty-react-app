import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home">
          <section>
            <div>
              <section className="container text-center py-5">
                <div >
                  <h1 className="display-4">Bienvenido a la aplicación Chatty</h1>
                </div>
                <div className="mt-4 ">
                  <Link className="btn btn-primary px-5 mr-3 btn-account" to = "/signup">Crear nueva cuenta</Link>
                  <br />
                  <Link className="btn btn-primary px-5 text-white btn-account" to = "/login">Iniciar sesion</Link>
                </div>
              </section>
            </div>
          </section>
      </div>
    )
}
