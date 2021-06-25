import { get } from '@navikt/k9-http-utils';
import { LinkButton, PageContainer } from '@navikt/k9-react-components';
import axios from 'axios';
import Alertstripe from 'nav-frontend-alertstriper';
import React, { useContext, useEffect, useMemo, useReducer } from 'react';
import { RettVedDød } from '../../../types/RettVedDød';
import ContainerContext from '../../context/ContainerContext';
import WriteAccessBoundContent from '../../write-access-bound-content/WriteAccessBoundContent';
import RettVedDødForm from '../rett-ved-død-form/RettVedDødForm';
import RettVedDødVurderingsdetaljer from '../rett-ved-død-vurderingsdetaljer/RettVedDødVurderingsdetaljer';
import ActionType from './actionTypes';
import rettVedDødReducer from './reducer';

const RettVedDødController = (): JSX.Element => {
    const [state, dispatch] = useReducer(rettVedDødReducer, {
        hasFailed: false,
        isLoading: true,
        rettVedDød: null,
        editMode: false,
    });
    const { rettVedDød, editMode, isLoading, hasFailed } = state;
    const { readOnly, endpoints, httpErrorHandler } = useContext(ContainerContext);
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
                    dispatch({ type: ActionType.OK, rettVedDød: response });
                }
            })
            .catch(() => {
                dispatch({ type: ActionType.FAILED });
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
                                <LinkButton className="ml-4" onClick={() => dispatch({ type: ActionType.ENABLE_EDIT })}>
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
                    <RettVedDødForm
                        rettVedDød={rettVedDød}
                        onCancelClick={() => dispatch({ type: ActionType.ABORT_EDIT })}
                    />
                </div>
            </>
        );
    };

    if (readOnly && !rettVedDød) {
        return null;
    }

    return (
        <PageContainer isLoading={isLoading} hasError={hasFailed}>
            {getContent()}
        </PageContainer>
    );
};

export default RettVedDødController;
