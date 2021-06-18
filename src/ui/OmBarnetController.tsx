import Alertstripe from 'nav-frontend-alertstriper';
import React, { useContext } from 'react';
import ContainerContext from './context/ContainerContext';
import OmBarnetForm from './OmBarnetForm';

const OmBarnetController = (): JSX.Element => {
    const { readOnly } = useContext(ContainerContext);

    if (readOnly) {
        return (
            <div className="mt-6">
                <p className="font-semibold">Vurdering</p>
                <p className="mt-2">Vurdering</p>
            </div>
        );
    }

    return (
        <div className="mt-6">
            <Alertstripe type="advarsel">
                Vurder hvor lang periode søker har rett på pleiepenger ved barnets død.
            </Alertstripe>
            <OmBarnetForm />
        </div>
    );
};

export default OmBarnetController;
