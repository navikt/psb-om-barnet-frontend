import React, { useContext } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Form } from '@navikt/k9-react-components';
import { RadioGroupPanel, TextArea } from '@navikt/k9-form-utils';
import { required } from '../validators/index';
import ContainerContext from './context/ContainerContext';

enum RadioOptions {
    MINDRE_ENN_TRE_ÅR = 'mindreEnnTreÅr',
    TRE_ÅR_ELLER_MER = 'treÅrEllerMer',
}

export enum FieldName {
    VURDER_PERIODE = 'vurderPeriode',
    BEGRUNNELSE = 'begrunnelse',
}

const OmBarnetForm = () => {
    const formMethods = useForm();
    const { readOnly } = useContext(ContainerContext);

    const handleSubmit = () => {
        return null;
    };

    return (
        <div className="mt-8">
            <FormProvider {...formMethods}>
                <Form onSubmit={formMethods.handleSubmit(handleSubmit)} buttonLabel="Bekreft og fortsett">
                    <div className="hide-legend">
                        <RadioGroupPanel
                            question="Vurder hvor lang periode søker har rett på pleiepenger ved barnets død."
                            radios={[
                                {
                                    value: RadioOptions.MINDRE_ENN_TRE_ÅR,
                                    label: 'Søker har mottatt pleiepenger i mindre enn 3 år og har rett på 30 dager (6 uker) med pleiepenger jf § 9-10, fjerde ledd, første punktum.',
                                },
                                {
                                    value: RadioOptions.TRE_ÅR_ELLER_MER,
                                    label: 'Søker har mottatt 100 % pleiepenger i 3 år eller mer og har rett på 3 måneder med pleiepenger jf § 9-10, fjerde ledd, andre punktum. ',
                                },
                            ]}
                            name={FieldName.VURDER_PERIODE}
                            validators={{ required }}
                            disabled={readOnly}
                        />
                    </div>
                    <div className="mt-3 max-w-xl">
                        <TextArea
                            label="Vurdering"
                            name={FieldName.BEGRUNNELSE}
                            validators={{ required }}
                            disabled={readOnly}
                        />
                    </div>
                </Form>
            </FormProvider>
        </div>
    );
};

export default OmBarnetForm;
