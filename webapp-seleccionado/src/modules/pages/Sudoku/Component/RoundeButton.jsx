const RoundButton = ({ children, ...props }) => {
    return (
      <button
        className="flex flex-row justify-center items-center p-5 w-20 h-20 bg-ColorP rounded-full hover:shadow-lg mb-2"
        {...props}
      >
        {children}
      </button>
    )
  }
  
  export default RoundButton