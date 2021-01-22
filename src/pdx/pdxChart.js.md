```js
import { data } from '../Data';
import { colorRed, colorGreen } from '../palette';

// const refDiv = $('header');
// const width  = (refDiv.outerWidth() / 5) || 188;
// const width  = 280;
// const height = width / 2;
const commonChartOptions = {
    // dataSource: [],
    // width: width, height: height,
    commonAxisSettings: {
        visible: false,
        tick: {visible: false},
        label: {visible: false},
        grid: {visible: false},
        valueMarginsEnabled: false // , "min": -10, minValueMargin: 100
    },
    series: {
        argumentField: 'month',
        point: { visible: false }
    },
    legend: { visible: false },
    tooltip: { enabled: true, contentTemplate: lineChartToolTipTemplate },
    margin: { bottom: 5 },
    //argumentAxis: {
        // position: 'top'
        // offset: 10
    //},
    //valueAxis: {
        // "valueMarginsEnabled": true, "min": -10, visible: true, minValueMargin: 0
        // visualRange: { startValue: -1, endValue: 16 },
        // "valueMarginsEnabled": true,
        //minValueMargin: -1,
        // wholeRange: { startValue: -1, endValue: 20 }
    //},
};

export function pdxLineChart(el, dsKey, lineColor) {
    el = $(el);
    const dataSource = data[dsKey];
    const overrideOptions = dataSource['options'] || {};
    const dsKeys = Object.keys(dataSource);
    const calculatedOptions = { size: {} };
    calculatedOptions.size.width = Math.round(el.parent().width());
    calculatedOptions.size.height = Math.round(calculatedOptions.size.width / (overrideOptions.heightRatio || 3.1));
    // console.log(calculatedOptions);
    const opts = Object.assign({}, commonChartOptions, calculatedOptions, overrideOptions, {
        dataSource: dsKeys.map(month => { return {month, val: dataSource[month]} })
    });
    // console.log(opts);
    const L = dsKeys.length;
    const isGreen = ((dataSource[dsKeys[L-1]] - dataSource[dsKeys[L-2]]) * lineColor) > 0;
    opts.series.color = isGreen? colorGreen: colorRed;
    // //
    el.dxChart(opts);
    return opts;
};
// $.fn.pdxChart = function(options) {
//     // console.log(this);
//     options.width = 280;
//     options.height = 
//     this.dxChart(options);
// }

function lineChartToolTipTemplate(info, container) {
    var html =[
        '<div class="pdx-chart-tooltip">',
            '<div class="month"></div>',
            '<div class="value"></div>',
        '</div>'];

        var content = $(html.join(""));

        content.find(".month").text(info.argument);
        content.find(".value").text('$'+(info.value+400.82)+'K');

        content.appendTo(container);
}
```
