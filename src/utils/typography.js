import Typography from "typography"

const typography = new Typography({
    baseFontSize: "16px",
    baseLineHeight: 1.5,
    scaleRatio: 2,
    googleFonts: [
        {
            name: 'Poppins',
            styles: [
                '300',
                '600',
            ],
        },
    ],
    headerFontFamily: ["-apple-system", "BlinkMacSystemFont", "Poppins", "sans-serif"],
    headerWeight: 600,
    bodyFontFamily: ["-apple-system", "BlinkMacSystemFont", "Poppins", "sans-serif"],
    bodyWeight: 300,
    boldWeight: 600,
    bodyColor: "#333",
    includeNormalize: true
});

export default typography
