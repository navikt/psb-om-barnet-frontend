import React from 'react';
import ContainerContract from '../types/ContainerContract';
import ContainerContext from './context/ContainerContext';
import OmBarnetController from './OmBarnetController';
import './styles.css';

interface MainComponentProps {
    data: ContainerContract;
}

const MainComponent = ({ data }: MainComponentProps): JSX.Element => {
    return (
        <ContainerContext.Provider value={data}>
            <h1 className="text-3xl font-semibold">Om barnet</h1>
            <div className="flex mt-10">
                <p className="mr-7">
                    Navn:
                    <span className="font-semibold ml-1">Snill Blyant</span>
                </p>

                <p className="mr-7">
                    Fødselsnummer:
                    <span className="font-semibold ml-1">00000000000</span>
                </p>

                <p className="mr-7">
                    Diagnose:
                    <span className="font-semibold ml-1">Diagnose</span>
                </p>
                <p className="mr-7 text-white bg-black rounded pr-2 pl-2">Død 01.01.2021</p>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-300">
                <h2 className="text-xl font-semibold">Rett til pleiepenger ved barnets død</h2>
                <OmBarnetController />
            </div>
        </ContainerContext.Provider>
    );
};
export default MainComponent;
