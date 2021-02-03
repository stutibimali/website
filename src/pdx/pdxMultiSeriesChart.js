import { colorGreyLight } from '../palette.js';

export function pdxMultiSeriesChart(el, type, dataSource, legends) {
    if(el) el = $(el);

    el.dxChart({
        // width: width,// height: height,
        dataSource: dataSource,
        palette: 'SplinePalette',
        redrawOnResize: true,
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
                return legends[info.seriesIndex];
            }
        }
    });
}
