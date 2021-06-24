import renderers from './util/renderers';
import './styles.css';

(window as any).renderOmBarnetApp = async (appId, data) => {
    const { renderAppInSuccessfulState } = renderers;
    renderAppInSuccessfulState(appId, data);
};
