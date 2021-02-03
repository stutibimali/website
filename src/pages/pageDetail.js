import { data } from '../data.js';
import { pdxSelectBox, pdxSelectBoxSearch, pdxMultiSelectBoxWithSearch } from '../pdx/pdxSelectBox.js';
import { pdxButtonGroup } from '../pdx/pdxButtonGroup.js';
import { pdxLineChart } from '../pdx/pdxChart.js';
import { pdxMultiSeriesChart } from '../pdx/pdxMultiSeriesChart.js';
import { QS, resizeToAspect } from '../pdx/util.js';

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

    detailedChart(QS['data']);
}

function detailedChart(qsData) {
    console.log(qsData);
    const multiSeriesData = [];
    const s1 = data['SplineSeries1'];
    const s2 = data['SplineSeries2'];
    const legends = ['Current open orders', 'Expected'];
    data['SplineMonths'].forEach(function(m, i){
        multiSeriesData.push({ series: 'series1', month: m, value: s1[i]*1000 });
        multiSeriesData.push({ series: 'series2', month: m, value: s2[i]*1000 });
    });

    resizeToAspect('#pdxOpenOrdersDetailChart', 1, 0.65);
    pdxMultiSeriesChart('#pdxOpenOrdersDetailChart', 'spline', multiSeriesData, legends);
}
