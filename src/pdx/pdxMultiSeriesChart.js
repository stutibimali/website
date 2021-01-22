import { colorGreyLight } from '../palette.js';

export function pdxMultiSeriesChart(el, type, dataSource, legends) {
    // pdxChartSplines('#pdx', data[])
    // const dataSource = [];
    // console.log(dataSource);
    if(el) el = $(el);
    const hRatio = 0.725;
    const width = el.width();
    const height = width * hRatio;
    // console.log(width, height);
    el.dxChart({
        width: width, height: height,
        dataSource: dataSource,
        palette: 'SplinePalette',
        commonAxisSettings: {
            grid: { visible: true, color: colorGreyLight },
            tick: { visible: false },

            color: colorGreyLight,
            label: {
                font: { family: 'Assistant', size: '0.7rem' }
            }
            
        },
        commonSeriesSettings: {
            argumentField: "month",
            valueField: "value",
            type: type || "spline",
            point: { visible: false }
        },
        seriesTemplate: {
            nameField: "series",
        },
        legend: {
            verticalAlignment: "bottom",
            horizontalAlignment: "center",
            font: { family: 'Assistant', size: '0.8rem' },
            customizeText: function(info) {
                // console.log(a,b);
                return legends[info.seriesIndex];
            }
        }
    })
}
