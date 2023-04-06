interface ButtonProps {
  children: React.ReactNode;
  active?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, active }) => {
  return (
    <button
      className={`
   
    w-50
    block
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
  `}
    >
      {children}%
    </button>
  );
};

export default Button;
