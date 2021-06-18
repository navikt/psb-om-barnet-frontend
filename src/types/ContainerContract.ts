import { HttpErrorHandler } from '@navikt/k9-http-utils';

interface ContainerContract {
    readOnly: boolean;
    endpoints: {
        tilsyn: string;
    };
    httpErrorHandler: HttpErrorHandler;
}

export default ContainerContract;
