import { HttpErrorHandler } from '@navikt/k9-http-utils';

interface ContainerContract {
    readOnly: boolean;

    httpErrorHandler: HttpErrorHandler;
}

export default ContainerContract;
