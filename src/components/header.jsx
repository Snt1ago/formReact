function Header({ logo, title }) {
  return (
    <header className="bg-blue-500 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {logo && (
          <div className="flex items-center">
            {/* Puedes pasar una imagen como prop */}
            {logo}
            <h1 className="text-xl font-bold ml-3">{title}</h1>
          </div>
        )}
        {/* Aquí puedes añadir más elementos como un menú de navegación */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:underline">
                Inicio
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                Acerca de
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
