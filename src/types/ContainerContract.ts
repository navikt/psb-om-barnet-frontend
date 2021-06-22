import { HttpErrorHandler } from '@navikt/k9-http-utils';

interface ContainerContract {
    readOnly: boolean;
    endpoints: {
        rettVedDød: string;
    };
    httpErrorHandler: HttpErrorHandler;
    onFinished: (vurdering) => void;
}

export default ContainerContract;
