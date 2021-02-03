import { colorGreyLight } from '../palette.js';

export function pdxMultiSeriesChart(el, opts, legends, customTooltipHandlers) {
    if (el) el = $(el);

    const defaultOpts = {
        // width: width,// height: height,
        // dataSource: dataSource,
        // palette: palette || 'SplinePalette',
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
            // argumentField: "month",
            // valueField: "value",
            // type: type || "spline",
            point: { visible: false }
        },
        // seriesTemplate: {  nameField: "series", },
        // series: series,
        legend: {
            verticalAlignment: "bottom",
            horizontalAlignment: "center",
            font: { family: 'Assistant', size: '0.8rem' },
            customizeText: function (info) {
                return legends[info.seriesIndex];
            }
        },
        tooltip: {
            enabled: true,
            customizeTooltip: function (arg) {
                console.log(arg, arg.seriesName);
                return 'Test';
                /// return customTooltipHandlers[arg.seriesName](arg, arg.point.aggregationInfo);
            }
        }
    };

    opts = Object.assign({}, defaultOpts, opts);

    el.dxChart(opts);
}


/*
export function pdxDoubleAreaChart(el, type, dataSource, legends) {
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
            argumentField: "monthyear"
        },
        series: [
            {type: 'area', valueField: 'a'},
            {type: 'area', valueField: 'b'}
        ],
        // seriesTemplate: { nameField: "series", },
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


export function pdxStackedBarsWithSplineChart(el, type, dataSource, legends) {
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
        // seriesTemplate: { nameField: "series", },
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
*/