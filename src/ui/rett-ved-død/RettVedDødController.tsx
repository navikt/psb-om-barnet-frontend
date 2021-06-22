import { LinkButton } from '@navikt/k9-react-components';
import Alertstripe from 'nav-frontend-alertstriper';
import React, { useContext } from 'react';
import { RettVedDød } from '../../types/RettVedDød';
import ContainerContext from '../context/ContainerContext';
import WriteAccessBoundContent from '../write-access-bound-content/WriteAccessBoundContent';
import RettVedDødForm from './RettVedDødForm';
import RettVedDødVurderingsdetaljer from './RettVedDødVurderingsdetaljer';

interface RettVedDødControllerProps {
    rettVedDød: RettVedDød;
}

const RettVedDødController = ({ rettVedDød }: RettVedDødControllerProps): JSX.Element => {
    const { readOnly } = useContext(ContainerContext);
    const [editMode, setEditMode] = React.useState(false);

    const getHeading = () => <h2 className="text-xl font-semibold">Rett til pleiepenger ved barnets død</h2>;

    if (readOnly && !rettVedDød) {
        return null;
    }

    if (rettVedDød && (!editMode || readOnly)) {
        return (
            <>
                <div className="flex">
                    {getHeading()}
                    <WriteAccessBoundContent
                        contentRenderer={() => (
                            <LinkButton className="ml-4" onClick={() => setEditMode(true)}>
                                Rediger vurdering
                            </LinkButton>
                        )}
                    />
                </div>
                <RettVedDødVurderingsdetaljer rettVedDød={rettVedDød} />
            </>
        );
    }

    return (
        <>
            {getHeading()}
            <div className="mt-6">
                <Alertstripe type="advarsel">
                    Vurder hvor lang periode søker har rett på pleiepenger ved barnets død.
                </Alertstripe>
                <RettVedDødForm rettVedDød={rettVedDød} onCancelClick={() => setEditMode(false)} />
            </div>
        </>
    );
};

export default RettVedDødController;
