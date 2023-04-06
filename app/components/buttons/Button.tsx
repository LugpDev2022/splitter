interface ButtonProps {
  children: React.ReactNode;
  active?: boolean;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  active,
  className,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      className={`
    ${active ? 'bg-teal-500' : 'bg-cyan-900'}
    ${active ? 'text-cyan-900' : ' text-white'}
    ${className}
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
