import renderers from './util/renderers';
import './styles.css';
import ContainerContract from './types/ContainerContract';

interface ExtendedWindow extends Window {
    renderOmBarnetApp: (id: string, contract: ContainerContract) => void;
}

(window as Partial<ExtendedWindow>).renderOmBarnetApp = async (appId, data) => {
    const { renderAppInSuccessfulState } = renderers;
    renderAppInSuccessfulState(appId, data);
};
