module.exports = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: { 'warning-yellow': '#ff9100' },
        },
        fontFamily: {
            sans: ['Source Sans Pro', 'Arial', 'sans-serif'],
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
};
