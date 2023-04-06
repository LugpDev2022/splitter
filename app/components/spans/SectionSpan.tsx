interface sectionSpanProps {
  children: React.ReactNode;
}

const SectionSpan: React.FC<sectionSpanProps> = ({ children }) => (
  <span
    className='font-bold text-lg w-full block'
    style={{ color: 'hsl(186, 14%, 43%)' }}
  >
    {children}
  </span>
);

export default SectionSpan;
