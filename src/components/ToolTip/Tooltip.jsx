const  Tooltip = ({ message, children }) => {
    return (
        <div className="group relative flex">
          {children}
          <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 text-xs text-white group-hover:scale-100">
            {message}
          </span>
        </div>
      );
}

export  default Tooltip;
