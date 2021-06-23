import { initializeDate, prettifyDate } from '@navikt/k9-date-utils';
import PleietrengendeResponse from './PleietrengendeResponse';

class Pleietrengende {
    fnr: string;

    navn: string;

    diagnosekoder: string;

    dodsdato: string;

    constructor({ fnr, navn, diagnosekoder, dodsdato }: PleietrengendeResponse) {
        this.fnr = fnr;
        this.navn = navn;
        this.diagnosekoder = diagnosekoder?.join(', ');
        this.dodsdato = dodsdato ? prettifyDate(initializeDate(dodsdato)) : null;
    }
}

export default Pleietrengende;
