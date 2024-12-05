// src/App.jsx
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import TableauEmbed from "./components/TableauEmbed";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const App = () => {
  const { isAuthenticated, user } = useAuth0();

  // if (isLoading) return <div>Cargando...</div>;

  return (
    <>
      <div className="w-full h-screen bg-gradient-to-tr from-pink-50 to-indigo-100">
        <Navbar />
        {/* Mostrar informacion del usuario */}
        {isAuthenticated ? (
          <>
            <div className="flex gap-4 justify-center">
              <h3>Información del Usuario:</h3>
              <p>Nombre: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
            <TableauEmbed />
          </>
        ) : (
          <div className="flex items-center justify-center h-[75%] mx-10">
            <h3 className="text-2xl font-bold text-[#0b4482] text-center">
              Para poder visualizar el dashboard, es necesario iniciar sesión
            </h3>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};

export default App;
