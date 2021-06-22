import { GreenCheckIcon } from '@navikt/k9-react-components';
import React from 'react';
import { RettVedDød } from '../../types/RettVedDød';
import RettVedDødUtfallType from '../../types/RettVedDødType';

interface RettVedDødVurderingsdetaljerProps {
    rettVedDød: RettVedDød;
}

const RettVedDødVurderingsdetaljer = ({ rettVedDød }: RettVedDødVurderingsdetaljerProps): JSX.Element => {
    const getRettVedDødUtfallTekst = () => {
        if (rettVedDød.rettVedDødType === RettVedDødUtfallType.RETT_6_UKER) {
            return 'Søker har mottatt pleiepenger i mindre enn 3 år og har rett på 30 dager (6 uker) med pleiepenger jf § 9-10, fjerde ledd, første punktum.';
        }

        return 'Søker har mottatt 100 % pleiepenger i 3 år eller mer og har rett på 3 måneder med pleiepenger jf § 9-10, fjerde ledd, andre punktum.';
    };

    return (
        <>
            <div className="mt-6 flex">
                <GreenCheckIcon />
                <p className="ml-1">{getRettVedDødUtfallTekst()}</p>
            </div>
            <div className="mt-6">
                <p className="font-semibold">Vurdering</p>
                <p className="mt-2">{rettVedDød.vurdering}</p>
            </div>
        </>
    );
};

export default RettVedDødVurderingsdetaljer;
