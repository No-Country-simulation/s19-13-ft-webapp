

const Button = ({ children, onClick, className = '', disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-3 py-1  text-black rounded-full shadow-sm hover:bg-AzulM focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-ColorP disabled:opacity-50 disabled:cursor-not-allowed focus:bg-ColorP transition-colors ${className}`}
    >
      {children}
    </button>
  )
}

export default Button



