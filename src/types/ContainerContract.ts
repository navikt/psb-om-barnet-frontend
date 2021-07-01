import { HttpErrorHandler } from '@navikt/k9-http-utils';

interface ContainerContract {
    readOnly: boolean;
    endpoints: {
        rettVedDod: string;
        omPleietrengende: string;
    };
    httpErrorHandler: HttpErrorHandler;
    onFinished: (vurdering) => void;
    featureToggles: {
        OM_BARNET_AKSJONSPUNKT_IS_ENABLED: boolean;
    };
}

export default ContainerContract;
