interface GeneralContainerProps {
  children: React.ReactNode;
}

const GeneralContainer: React.FC<GeneralContainerProps> = ({ children }) => (
  <div
    className='
    flex
    flex-col
    gap-8
    justify-end
    md:justify-center
    min-h-[1020px]
    md:min-h-0
    h-full
    items-center'
  >
    {children}
  </div>
);

export default GeneralContainer;
