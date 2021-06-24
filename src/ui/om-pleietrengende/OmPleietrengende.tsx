import { get } from '@navikt/k9-http-utils';
import { PageContainer } from '@navikt/k9-react-components';
import axios from 'axios';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import ContainerContext from '../context/ContainerContext';
import Pleietrengende from '../../types/Pleietrengende';
import PleietrengendeResponse from '../../types/PleietrengendeResponse';

const OmPleietrengende = (): JSX.Element => {
    const { endpoints, httpErrorHandler } = useContext(ContainerContext);
    const [isLoading, setIsLoading] = useState(true);
    const [pleietrengende, setPleietrengende] = useState<Pleietrengende>(null);
    const httpCanceler = useMemo(() => axios.CancelToken.source(), []);

    const getOmPleietrengende = () =>
        get<PleietrengendeResponse>(endpoints.omPleietrengende, httpErrorHandler, {
            cancelToken: httpCanceler.token,
        });

    useEffect(() => {
        let isMounted = true;
        getOmPleietrengende()
            .then((response) => {
                if (isMounted) {
                    const nyPleietrengende = new Pleietrengende(response);
                    setPleietrengende(nyPleietrengende);
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

    return (
        <PageContainer isLoading={isLoading}>
            {pleietrengende && (
                <div className="flex items-center mt-10">
                    <p className="my-0 mr-7">
                        Navn:
                        <span className="font-semibold ml-1">{pleietrengende.navn}</span>
                    </p>

                    <p className="my-0 mr-7">
                        Fødselsnummer:
                        <span className="font-semibold ml-1">{pleietrengende.fnr}</span>
                    </p>

                    <p className="my-0 mr-7">
                        Diagnose:
                        <span className="font-semibold ml-1">{pleietrengende.diagnosekoder}</span>
                    </p>
                    {pleietrengende.dødsdato ? (
                        <p className="text-white bg-black rounded pr-2 pl-2 my-0 leading-6">{`Død ${pleietrengende.dødsdato}`}</p>
                    ) : null}
                </div>
            )}
        </PageContainer>
    );
};
export default OmPleietrengende;
