import MainContainer from './components/containers/MainContainer';
import GeneralContainer from './components/containers/GeneralContainer';
import Header from './components/Header';
import BillSection from './components/sections/BillSection';
import TipPercentajeSection from './components/sections/TipPercentajeSection';
import PeopleNumberSection from './components/sections/PeopleNumberSection';
import AmmountSection from './components/sections/AmmountSection';

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

        <AmmountSection />
      </MainContainer>
    </GeneralContainer>
  );
};

export default page;
