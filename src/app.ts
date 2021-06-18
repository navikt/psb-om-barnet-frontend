import renderers from './util/renderers';

(window as any).renderOmBarnetApp = async (appId, data) => {
    const { renderAppInSuccessfulState } = renderers;
    renderAppInSuccessfulState(appId, data);
};
