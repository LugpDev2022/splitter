interface sectionSpanProps {
  children: React.ReactNode;
}

const SectionSpan: React.FC<sectionSpanProps> = ({ children }) => (
  <span className='font-bold text-lg text-[#5e7a7d]'>{children}</span>
);

export default SectionSpan;
