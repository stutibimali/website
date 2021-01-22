import { data } from '../Data.js';
import { colorRed, colorGreen } from '../palette.js';

const commonLineChartOptions = {
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
    margin: { bottom: 20 },
};

export function pdxLineChart(el, dataSource, lineColor) {
    el = $(el);
    // const dataSource = data[dsKey];
    const overrideOptions = dataSource['options'] || {};
    const dsKeys = Object.keys(dataSource);
    const calculatedOptions = { size: {} };
    calculatedOptions.size.width = Math.round(el.parent().width());
    calculatedOptions.size.height = Math.round(calculatedOptions.size.width / (overrideOptions.heightRatio || 3.1));
    // console.log(calculatedOptions);
    const dataSpecifictOpts = {
        dataSource: dsKeys.map(month => { return {month: month, val: dataSource[month]} })
    };
    const opts = Object.assign(dataSpecifictOpts, commonLineChartOptions, calculatedOptions, overrideOptions);
    // console.log(opts);
    const L = dsKeys.length;
    const isGreen = ((dataSource[dsKeys[L-1]] - dataSource[dsKeys[L-2]]) * lineColor) > 0;
    opts.series.color = isGreen? colorGreen: colorRed;
    //
    el.dxChart(opts);
    return el.dxChart('instance');
};

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

// export function pdxChartSplines(el, dataSource, lineColor) {
//     el = $(el);
//     el.dxChart(opts);
//     return el.dxChart('instance');
// }
