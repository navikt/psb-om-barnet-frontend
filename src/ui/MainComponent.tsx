import React from 'react';
import Alertstripe from 'nav-frontend-alertstriper';
import OmBarnetForm from './OmBarnetForm';
import './styles.css';
import ContainerContext from './context/ContainerContext';

const MainComponent = ({ data }) => {
    return (
        <ContainerContext.Provider value={data}>
            <h1 className="text-3xl font-semibold">Om barnet</h1>
            <div className="flex mt-10">
                <div className="mr-7">
                    <p>
                        Navn:
                        <span className="font-semibold ml-1">Snill Blyant</span>
                    </p>
                </div>
                <div className="mr-7">
                    <p>
                        Fødselsnummer:
                        <span className="font-semibold ml-1">00000000000</span>
                    </p>
                </div>
                <div className="mr-7">
                    <p>
                        Diagnose:
                        <span className="font-semibold ml-1">Diagnose</span>
                    </p>
                </div>
                <div className="mr-7 text-white bg-black rounded pr-2 pl-2">Død 01.01.2021</div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-300">
                <h2 className="text-xl font-semibold">Rett til pleiepenger ved barnets død</h2>
                <Alertstripe type="advarsel" className="mt-6">
                    Vurder hvor lang periode søker har rett på pleiepenger ved barnets død.
                </Alertstripe>
            </div>
            <OmBarnetForm />
        </ContainerContext.Provider>
    );
};
export default MainComponent;
