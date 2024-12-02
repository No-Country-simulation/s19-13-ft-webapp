

function AccountDropdown({ isOpen }) {
  const menuItems = [
    { label: 'Mi Perfil' },
    { label: 'Mis Actividades' },
    { label: 'Mis Resultados' },
    { label: 'Configuración'},
    { label: 'Cerrar Sesión' },
  ];

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div className="py-1" role="menu" aria-orientation="vertical">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
            role="menuitem"
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default AccountDropdown;