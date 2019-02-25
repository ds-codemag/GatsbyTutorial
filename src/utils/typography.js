import Typography from "typography";
import bootstrapTheme from 'typography-theme-bootstrap';

bootstrapTheme.googleFonts = [
    {
        name: 'Poppins',
        styles: [
            '300',
            '600',
        ],
    },
];
bootstrapTheme.headerFontFamily = ["-apple-system", "BlinkMacSystemFont", "Poppins", "sans-serif"];
bootstrapTheme.headerWeight = 600;
bootstrapTheme.bodyFontFamily = ["-apple-system", "BlinkMacSystemFont", "Poppins", "sans-serif"];
bootstrapTheme.bodyWeight = 300;
bootstrapTheme.boldWeight = 600;

const typography = new Typography(bootstrapTheme);

export default typography
export const rhythm = typography.rhythm;
export const scale = typography.scale;
