import { data, api } from '../data.js';
import { routeOnClick } from '../router.js';

import { pdxSelectBox, pdxSelectBoxSearch } from '../pdx/pdxSelectBox.js';
import { pdxDropDownBoxWithDataGrid } from '../pdx/pdxDropDownBox.js';
import { pdxButtonGroup } from '../pdx/pdxButtonGroup.js';
import { pdxLineChart } from '../pdx/pdxChart.js';
import { pdxDonut } from '../pdx/pdxDonut.js';

export default function pageHome() {
    var dataSource = data['DataIncludes'];
    pdxSelectBox('#pdxDataIncludes', dataSource, dataSource[dataSource.length - 1]);

    var dataSource = api('data/branches.json', 'abbr');
    //pdxSelectBoxSearch('#pdxBranch', dataSource, dataSource[0]);
    // pdxSelectBoxSearch('#pdxBranch', dataSource, dataSource[0]);
    pdxDropDownBoxWithDataGrid('#pdxBranch', dataSource, 'All');

    pdxButtonGroup('#pdxUnit', data['Unit'], 'Dollars');

    pdxLineChart('#pdxOpenOrdersChart', data['OpenOrdersChart'], -1);
    pdxLineChart('#pdxHeldRevenueChart', data['HeldRevenueChart'], -1);
    pdxLineChart('#pdxAccountsReceivableChart', data['AccountsReceivableChart'], -1);

    pdxDonut('#pdxBillingDonut', data['BillingDonut'], 'BillingPalette', '-6.05%');
    pdxDonut('#pdxPaymentActivityDonut', data['PaymentActivityDonut'], 'PaymentAndARPalette', '-50.9%');
    pdxDonut('#pdxDenialsDonut', data['DenialsDonut'], 'DenialsPalette', '-16.73%', true);
    pdxDonut('#pdx90ARDonut', data['90ARDonut'], 'PaymentAndARPalette', '+9.68%');

    // routeOnClick('#cardOpenOrders,#cardOpenOrdersCount,#cardOpenOrdersDays', 'orders.html');
    // routeOnClick('#cardHeldRevenue,#cardHeldRevenueCount,#cardHeldRevenueDays', 'held.html');
    // routeOnClick('#cardAR,#cardARCount,#cardARDSO', 'ar.html');

    routeOnClick('#cardOpenOrders,#cardOpenOrdersCount,#cardOpenOrdersDays', 'detail.html?data=orders');
    routeOnClick('#cardHeldRevenue,#cardHeldRevenueCount,#cardHeldRevenueDays', 'detail.html?data=held');
    routeOnClick('#cardAR,#cardARCount,#cardARDSO', 'detail.html?data=ar');
};
