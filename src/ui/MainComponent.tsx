import React from 'react';
import Alertstripe from 'nav-frontend-alertstriper';
import OmBarnetForm from './OmBarnetForm';
import './styles.css';

const MainComponent = ({ data }) => (
    <div>
        <h1 className="text-3xl font-semibold mb-10">Om barnet</h1>
        <div className="flex pb-6 border-b border-gray-300">
            <div className="flex mr-7">
                <p>
                    Navn:
                    <span className="font-semibold ml-1">Snill Blyant</span>
                </p>
            </div>
            <div className="flex mr-7">
                <p>
                    Fødselsnummer:
                    <span className="font-semibold ml-1">00000000000</span>
                </p>
            </div>
            <div className="flex mr-7">
                <p>
                    Diagnose:
                    <span className="font-semibold ml-1">Diagnose</span>
                </p>
            </div>
        </div>
        <div className="mt-6">
            <h2 className="text-xl font-semibold">Rett til pleiepenger ved barnets død</h2>
            <Alertstripe type="advarsel" className="mt-6">
                Vurder hvor lang periode søker har rett på pleiepenger ved barnets død.
            </Alertstripe>
        </div>
        <OmBarnetForm />
    </div>
);

export default MainComponent;
