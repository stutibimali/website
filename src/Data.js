
export const data = {
    DataIncludes: ['Client', 'Prochant', 'Prochant & Client'],
    // Branch: [], // See below
    // Unit: [], // See below
};

export const api = function(path, key){
    return new DevExpress.data.CustomStore({
        loadMode: "raw",
        key: key || "id",
        load: function() {
            // return $.getJSON((prefix || 'data') + '/' + jsonFile);
            return $.getJSON(path);
        }
    });
};

data['Unit'] = [
    {text: 'Dollars', id: 'dollars'},
    {text: 'Count', id: 'count'},
    {text: 'Days', id: 'days'},
];
data['PeriodInMonths'] = [
    {text: '3'},
    {text: '6'},
    {text: '12'},
    {text: '18'},
    {text: '24'}
];
data['OrderDateOrDOS'] = [
    {text: 'Order date'},
    {text: 'DOS'}
];
data['OpenOrdersChart']         = {Jan: 6, Feb: 13, Mar: 9, Apr: 16, May: 15, Jun: 14, Jul: 4, Aug: 6, Sep: 4, Oct: 8, Nov: 7, Dec: 9};
data['HeldRevenueChart']        = {Jan: 14, Feb: 12, Mar: 12, Apr: 15, May: 10, Jun: 5, Jul: 4, Aug: 2, Sep: 1, Oct: 2, Nov: 1, Dec: 6};
data['AccountsReceivableChart'] = {Jan: 6, Feb: 1, Mar: 3, Apr: 5, May: 8, Jun: 6, Jul: 6, Aug: 5, Sep: 8, Oct: 9, Nov: 16, Dec: 15};

data['BillingDonut'] = [{ name: "Difference", val: 6.05 },
{ name: "Goal", val: 93.95 }];

data['PaymentActivityDonut'] = [{ name: "Difference", val: 49.1 },
{ name: "Goal", val: 50.9 }];

data['DenialsDonut'] = [{ name: "Difference", val: 16.73 },
{ name: "Goal", val: 83.27 }];

data['90ARDonut'] = [{ name: "Difference", val: 9.68 },
{ name: "Goal", val: 90.32 }];

data['SplineMonths'] = ['Dec 2019', 'Jan 2020', 'Feb 2020', 'Mar 2020', 'Apr 2020', 'May 2020', 'Jun 2020', 'Jul 2020', 'Aug 2020', 'Sep 2020', 'Oct 2020', 'Nov 2020'];
data['SplineSeries1'] = [605,680,660, 630,335,375, 330,440,402, 450,380,405];
data['SplineSeries2'] = [510,510,525, 520,525,510, 480,475,475, 465,465,465];

// var dataSource = data['Unit'];
// $("#pdxUnit").dxButtonGroup({
//     items: dataSource,
//     keyExpr: "text",
//     stylingMode: "outlined",
//     //stylingMode: "text",
//     selectedItemKeys: ["Dollars"],
//     onItemClick: function(e){
//         DevExpress.ui.notify({ message: 'The "' + e.itemData.text + '" button was clicked', width: 420 }, "success", 1000);
//     }
// });

// const donutFirst = $('.pdx-donut:first');
// const donutWidth = donutFirst.width();
// const donutHeight = donutFirst.height();
// // console.log('donutWidth', donutWidth, 'donutHeight', donutHeight);
// const donutCommonOptions = {
//     type: "doughnut",
//     minSegmentSize: 2,
//     // legend: { visible: true, verticalAlignment: "center", },
//     legend: { visible: false },
//     startAngle: 90,
//     innerRadius: 0.7,
//     annotations: [{
//         tooltipEnabled: false,
//         type: 'text',
//         text: '',
//         paddingLeftRight: 0,
//         paddingTopBottom: 0,
//         border: false,
//         color: 'transparent',
//         font: { family: 'Assistant', size: '0.8rem', weight: 700, color: colorRed },
//         x: donutWidth/2, y: donutWidth/2,
//     }],
//     // size: { width: 30, height: 30 },
//     series: [{
//         argumentField: "name",
//         // label: { visible: false, position: 'inside' },
//     }]
// };
// function buildDonutOptions(p, d, t, g) {
//     var opts = Object.assign({}, donutCommonOptions, {
//         palette: p,
//         dataSource: d,
//         // title: "Title",
//     });
//     if(t && t[0]=='-') opts.segmentsDirection = 'anticlockwise';
//     opts.annotations[0].text = t;
//     opts.annotations[0].font.color = g? colorGreen: colorRed;
//     return opts;
// };
