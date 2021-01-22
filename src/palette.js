
// palette.js
export const colorRed = '#D24747';
export const colorGreen = '#389E0D';
export const colorOrange = '#F5A731';
// export const colorOrange = '#F5A731';
export const colorSlateBlue = '#B6CAE1';

export const colorViolet = '#7111EC';
export const colorBlueGrey = '#48607D';
export const colorGreyLight = '#E0E0E0';

export const ProchantPalette = {
    // Applies in the BarGauge, Chart, Funnel, PieChart, PolarChart, Sankey, and TreeMap with a discrete colorizer
    simpleSet: ['#00A200', '#E33740', '#6682bb', '#a37182', '#eeba69'], 
    // Applies in the CircularGauge and LinearGauge
    //indicatingSet: ['#90ba58', '#eeba69', '#a37182'], 
    // Applies in the VectorMap and TreeMap with a gradient or range colorizer 
    //gradientSet: ['#78b6d9', '#eeba69'] 
};

const BillingPalette = { simpleSet: [colorRed, colorGreen] };
const PaymentAndARPalette = { simpleSet: [colorRed, colorOrange] };
const DenialsPalette = { simpleSet: [colorGreen, colorSlateBlue] };
const SplinePalette = { simpleSet: [colorViolet, colorBlueGrey] };

DevExpress.viz.registerPalette("Prochant", ProchantPalette);
DevExpress.viz.registerPalette("BillingPalette", BillingPalette);
DevExpress.viz.registerPalette("PaymentAndARPalette", PaymentAndARPalette);
DevExpress.viz.registerPalette("DenialsPalette", DenialsPalette);
DevExpress.viz.registerPalette("SplinePalette", SplinePalette);
