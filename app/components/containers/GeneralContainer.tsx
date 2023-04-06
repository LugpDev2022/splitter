interface GeneralContainerProps {
  children: React.ReactNode;
}

const GeneralContainer: React.FC<GeneralContainerProps> = ({ children }) => {
  return (
    <div
      className='
    flex
    flex-col
    gap-8
    justify-end
    md:justify-center
    min-h-[1020px]
    md:min-h-0
    '
      style={{ height: '100%', alignItems: 'center' }}
    >
      {children}
    </div>
  );
};

export default GeneralContainer;
