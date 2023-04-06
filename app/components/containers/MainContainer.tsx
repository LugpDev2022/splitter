interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <div
      className=' 
      bg-white
      gap-7
      grid
      grid-cols-1
      lg:w-9/12
      md:grid-cols-2
      md:rounded-[30px]
      md:w-11/12
      p-7
      rounded-t-[35px]
      w-full
      '
    >
      {children}
    </div>
  );
};

export default MainContainer;
