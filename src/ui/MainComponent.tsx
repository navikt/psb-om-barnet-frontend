import { get } from '@navikt/k9-http-utils';
import { PageContainer } from '@navikt/k9-react-components';
import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import ContainerContract from '../types/ContainerContract';
import { RettVedDød } from '../types/RettVedDød';
import ContainerContext from './context/ContainerContext';
import RettVedDødController from './rett-ved-død/RettVedDødController';
import './styles.css';

interface MainComponentProps {
    data: ContainerContract;
}

const MainComponent = ({ data }: MainComponentProps): JSX.Element => {
    const [rettVedDød, setRettVedDød] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { endpoints, httpErrorHandler } = data;
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

    return (
        <ContainerContext.Provider value={data}>
            <h1 className="text-3xl font-semibold">Om barnet</h1>
            <PageContainer isLoading={isLoading}>
                <div className="flex mt-10">
                    <p className="mr-7">
                        Navn:
                        <span className="font-semibold ml-1">Dummy data</span>
                    </p>

                    <p className="mr-7">
                        Fødselsnummer:
                        <span className="font-semibold ml-1">Dummy data</span>
                    </p>

                    <p className="mr-7">
                        Diagnose:
                        <span className="font-semibold ml-1">Dummy data</span>
                    </p>
                    <p className="mr-7 text-white bg-black rounded pr-2 pl-2">Dummy data</p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-300">
                    <RettVedDødController rettVedDød={rettVedDød} />
                </div>
            </PageContainer>
        </ContainerContext.Provider>
    );
};
export default MainComponent;
