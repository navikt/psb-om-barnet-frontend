import { HttpErrorHandler } from '@navikt/k9-http-utils';

interface ContainerContract {
    readOnly: boolean;
    endpoints: {
        rettVedDod: string;
        omPleietrengende: string;
    };
    httpErrorHandler: HttpErrorHandler;
    onFinished: (vurdering) => void;
}

export default ContainerContract;
