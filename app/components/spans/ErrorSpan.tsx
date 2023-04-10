interface ErrorSpanProps {
  children: React.ReactNode;
  show?: boolean;
}

const ErrorSpan: React.FC<ErrorSpanProps> = ({ children, show = false }) => {
  return (
    <span
      className={`
      text-red-500
      font-semibold
      text-lg
      text-right
      ${show ? 'block' : 'hidden'}`}
    >
      {children}
    </span>
  );
};

export default ErrorSpan;
