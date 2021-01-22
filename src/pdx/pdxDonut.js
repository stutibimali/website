import { colorRed, colorGreen } from '../palette.js';

const donutFirst = $('.pdx-donut:first');
const donutWidth = donutFirst.width();
const donutHeight = donutFirst.height();
// console.log('donutWidth', donutWidth, 'donutHeight', donutHeight);
const donutCommonOptions = {
    type: "doughnut",
    minSegmentSize: 2,
    // legend: { visible: true, verticalAlignment: "center", },
    legend: { visible: false },
    startAngle: 90,
    innerRadius: 0.7,
    annotations: [{
        tooltipEnabled: false,
        type: 'text',
        text: '',
        paddingLeftRight: 0,
        paddingTopBottom: 0,
        border: false,
        color: 'transparent',
        font: { family: 'Assistant', size: '0.8rem', weight: 700, color: colorRed },
        x: donutWidth/2, y: donutWidth/2,
    }],
    // size: { width: 30, height: 30 },
    series: [{
        argumentField: "name",
        // label: { visible: false, position: 'inside' },
    }]
};

export function buildDonutOptions(p, d, t, g) {
    var opts = Object.assign({}, donutCommonOptions, {
        palette: p,
        dataSource: d,
        // title: "Title",
    });
    if(t && t[0]=='-') opts.segmentsDirection = 'anticlockwise';
    opts.annotations[0].text = t;
    opts.annotations[0].font.color = g? colorGreen: colorRed;
    return opts;
};

export function pdxDonut(el, dataSource, palette, value, isGreen) {
    if(!el) return console.warn('el required for pdxDonut: ', el, dataSource);
    if(typeof el == 'string') el = $(el);
    el.dxPieChart(buildDonutOptions(palette, dataSource, value, isGreen));
}

// pdxDonut('#pdxBillingDonut', data['BillingDonut'], 'BillingPalette', '-6.05%');
// pdxDonut('#pdxPaymentActivityDonut', data['PaymentActivityDonut'], 'PaymentAndARPalette', '-50.9%');
// pdxDonut('#pdxDenialsDonut', data['DenialsDonut'], 'DenialsPalette', '-16.73%', true);
// pdxDonut('#pdx90ARDonut', data['90ARDonut'], 'PaymentAndARPalette', '+9.68%');
// $("#pdxPaymentActivityDonut").dxPieChart(buildDonutOptions("PaymentAndARPalette", dataSource, '-50.9%'));
// $("#pdxDenialsDonut").dxPieChart(buildDonutOptions("DenialsPalette", dataSource, '-16.73%', 1));
// $("#pdx90ARDonut").dxPieChart(buildDonutOptions("PaymentAndARPalette", dataSource, '+9.68%'));

