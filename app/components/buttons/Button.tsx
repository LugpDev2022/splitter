interface ButtonProps {
  active?: boolean;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  active,
  children,
  className,
  disabled,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
      ${active ? 'bg-teal-500' : 'bg-cyan-900'}
      ${active ? 'text-cyan-900' : ' text-white'}
      ${className ? className : ''}
      disabled:bg-[#0d686d]
      disabled:hover:bg-[#0d686d]
      disabled:hover:text-[#00494d]
      disabled:text-[#00494d]
      duration-300
      font-bold
      hover:bg-teal-200
      hover:text-cyan-900
      p-4
      rounded-lg
      text-xl
      transition
    `}
    >
      {children}
    </button>
  );
};

export default Button;
