import { data } from '../data.js';
import { pdxSelectBox, pdxSelectBoxSearch, pdxMultiSelectBoxWithSearch } from '../pdx/pdxSelectBox.js';
import { pdxButtonGroup } from '../pdx/pdxButtonGroup.js';
import { pdxLineChart } from '../pdx/pdxChart.js';
import { pdxMultiSeriesChart } from '../pdx/pdxMultiSeriesChart.js';
//import { pdxDoubleAreaChart, pdxStackedBarsWithSplineChart } from '../pdx/pdxMultiSeriesChart.js';
import { QS, resizeToAspect, doubleAxis } from '../pdx/util.js';

import jsonOrders from '../../data/Order12MonthData.json';
import jsonHold from '../../data/Hold.json';
import jsonAR from '../../data/AR.json';

export default function pageDetail() {
    var dataSource = data['DataIncludes'];
    pdxSelectBox('#pdxDataIncludes', dataSource, dataSource[dataSource.length - 1]);

    var dataSource = data['Branch'];
    // pdxSelectBoxSearch('#pdxBranch', dataSource, dataSource[0]);
    // pdxMultiSelectBoxWithSearch('#pdxBranch', dataSource, 'All');

    pdxButtonGroup('#pdxUnit', data['Unit'], 'Dollars');
    pdxButtonGroup('#pdxPeriodInMonths', data['PeriodInMonths'], '12');
    pdxButtonGroup('#pdxOrderDateOrDOS', data['OrderDateOrDOS'], 'Order date');

    pdxLineChart('#pdxApproachingTimelyFiling', data['AccountsReceivableChart'], true);
    pdxLineChart('#pdxPastTimelyFiling', data['AccountsReceivableChart'], false);

    detailedChart(QS('data'));
}

function detailedChart(qsData) {
    const chart = new MultiSeriesCharts();
    qsData = qsData || 'orders';
    chart[qsData + 'Chart']();
}

class MultiSeriesCharts {
    ordersChart() {
        $('.chartName').text('Open orders');
        resizeToAspect('#pdxDetailChart', 1, 0.65);

        const legends = ['Current open orders', 'Expected'];
        const miniOpts = {
            dataSource: jsonOrders,
            palette: 'SplinePalette',
            series: [
                {type: 'spline', valueField: 'orderallow', argumentField: 'monthyear'},
                {type: 'spline', valueField: 'Expectedorderallow', argumentField: 'monthyear'}
            ],
        };
        pdxMultiSeriesChart('#pdxDetailChart', miniOpts, legends, customTooltipHandlers);
    }

    heldChart() {
        $('.chartName').text('Held Revenue');
        resizeToAspect('#pdxDetailChart', 1, 0.65);

        const legends = ['Hold', 'Stop'];
        const miniOpts = {
            dataSource: jsonHold,
            palette: '',//TODO:1:Register two New Palette refering figma
            series: [
                {type: 'splinearea', valueField: 'holdallow', argumentField: 'monthyear'},
                {type: 'splinearea', valueField: 'orderallow', argumentField: 'monthyear'}
            ]
        };
        pdxMultiSeriesChart('#pdxDetailChart', miniOpts, legends, customTooltipHandlers);
    }

    arChart() {
        $('.chartName').text('Accounts Receivable');
        resizeToAspect('#pdxDetailChart', 1, 0.65);

        const legends = ['Total', '90 AR', '90 AR %'];
        const miniOpts = {
            dataSource: jsonAR,//TODO:1:dataSource to be modified with 12 rows only.
            palette: '',//TODO:1:Register two New Palette refering figma
            valueAxis: doubleAxis(
                'totalAnd90AR', '', '',
                '90ARPerc', '', '',
            ).valueAxis,
            series: [
                {type: 'stackedbar', valueField: 'openbalance', argumentField: 'monthyear'},
                {type: 'stackedbar', valueField: '90AR', argumentField: 'monthyear'},
                {type: 'spline', valueField: '90AR%', argumentField: 'monthyear', axis: '90ARPerc'}
            ],
        };
        pdxMultiSeriesChart('#pdxDetailChart', miniOpts, legends, customTooltipHandlers);
    }
}

var customTooltipHandlers = {
    'Current open orders': function() {

    },
    'Expected': function() {

    },
    'Hold': function() {

    },
    'Stop': function() {

    },
    'Total': function() {

    },
    '90 AR': function() {

    },
    '90 AR %': function() {

    },
}
