/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{html,js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                "brane-green": {
                    DEFAULT: "#67ab00",
                    50: "#f4f9e6",
                    100: "#eef6d0",
                    200: "#d6e9a1",
                    300: "#bedc71",
                    400: "#8fbf12",
                    500: "#67ab00",
                    600: "#5f9900",
                    700: "#4f8100",
                }
            }
        },
    },
    plugins: [],
}

