import { get } from '@navikt/k9-http-utils';
import { LinkButton, PageContainer } from '@navikt/k9-react-components';
import axios from 'axios';
import Alertstripe from 'nav-frontend-alertstriper';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { RettVedDød } from '../../types/RettVedDød';
import ContainerContext from '../context/ContainerContext';
import WriteAccessBoundContent from '../write-access-bound-content/WriteAccessBoundContent';
import RettVedDødForm from './RettVedDødForm';
import RettVedDødVurderingsdetaljer from './RettVedDødVurderingsdetaljer';

const RettVedDødController = (): JSX.Element => {
    const { readOnly, endpoints, httpErrorHandler } = useContext(ContainerContext);
    const [editMode, setEditMode] = React.useState(false);
    const [rettVedDød, setRettVedDød] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const httpCanceler = useMemo(() => axios.CancelToken.source(), []);

    const getRettVedDød = () =>
        get<RettVedDød>(endpoints.rettVedDod, httpErrorHandler, {
            cancelToken: httpCanceler.token,
        });

    useEffect(() => {
        let isMounted = true;
        getRettVedDød()
            .then((response) => {
                if (isMounted) {
                    setRettVedDød(response);
                    setIsLoading(false);
                }
            })
            .catch((e) => {
                setIsLoading(false);
                isMounted = false;
                httpCanceler.cancel();
            });
        return () => {
            isMounted = false;
            httpCanceler.cancel();
        };
    }, []);

    const getContent = () => {
        const getHeading = () => <h2 className="m-0 text-xl font-semibold">Rett til pleiepenger ved barnets død</h2>;

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

    if (readOnly && !rettVedDød) {
        return null;
    }

    return <PageContainer isLoading={isLoading}>{getContent()}</PageContainer>;
};

export default RettVedDødController;
