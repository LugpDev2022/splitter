import Button from './components/buttons/Button';

import AmmountSpan from './components/spans/AmmountSpan';
import MainContainer from './components/containers/MainContainer';
import GeneralContainer from './components/containers/GeneralContainer';
import Header from './components/Header';
import BillSection from './components/sections/BillSection';
import TipPercentajeSection from './components/sections/TipPercentajeSection';
import PeopleNumberSection from './components/sections/PeopleNumberSection';

const page = () => {
  return (
    <GeneralContainer>
      <Header />

      <MainContainer>
        <div>
          <BillSection />
          <TipPercentajeSection />
          <PeopleNumberSection />
        </div>

        <div className='bg-[#00494d] rounded-xl p-7 flex flex-col justify-between'>
          <div>
            <AmmountSpan ammount={0.0}>Tip Ammmount</AmmountSpan>
            <AmmountSpan ammount={0.0}>Total</AmmountSpan>
          </div>
          <Button active className='w-full' disabled>
            RESET
          </Button>
        </div>
      </MainContainer>
    </GeneralContainer>
  );
};

export default page;
