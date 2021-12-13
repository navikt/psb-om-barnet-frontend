module.exports = {
    purge: ['./src/**/*.{ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: { 'warning-yellow': '#ff9100' },
        },
        fontFamily: {
            sans: ['Source Sans Pro', 'Arial', 'sans-serif'],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
};
