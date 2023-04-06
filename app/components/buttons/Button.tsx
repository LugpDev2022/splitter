interface ButtonProps {
  children: React.ReactNode;
  active?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, active, className }) => {
  return (
    <button
      className={`
    p-4
    rounded-lg
    font-bold
    text-xl
    ${active ? 'bg-teal-500' : 'bg-cyan-900'}
    ${active ? 'text-cyan-900' : ' text-white'}
    hover:bg-teal-200
    hover:text-cyan-900
    transition
    duration-300
    ${className}
  `}
    >
      {children}
    </button>
  );
};

export default Button;
