// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = exports.data = void 0;
var data = {
  DataIncludes: ['Client', 'Prochant', 'Prochant & Client'] // Branch: [], // See below
  // Unit: [], // See below

};
exports.data = data;

var api = function api(path, key) {
  return new DevExpress.data.CustomStore({
    loadMode: "raw",
    key: key || "id",
    load: function load() {
      // return $.getJSON((prefix || 'data') + '/' + jsonFile);
      return $.getJSON(path);
    }
  });
};

exports.api = api;
data['Unit'] = [{
  text: 'Dollars',
  id: 'dollars'
}, {
  text: 'Count',
  id: 'count'
}, {
  text: 'Days',
  id: 'days'
}];
data['PeriodInMonths'] = [{
  text: '3'
}, {
  text: '6'
}, {
  text: '12'
}, {
  text: '18'
}, {
  text: '24'
}];
data['OrderDateOrDOS'] = [{
  text: 'Order date'
}, {
  text: 'DOS'
}];
data['OpenOrdersChart'] = {
  Jan: 6,
  Feb: 13,
  Mar: 9,
  Apr: 16,
  May: 15,
  Jun: 14,
  Jul: 4,
  Aug: 6,
  Sep: 4,
  Oct: 8,
  Nov: 7,
  Dec: 9
};
data['HeldRevenueChart'] = {
  Jan: 14,
  Feb: 12,
  Mar: 12,
  Apr: 15,
  May: 10,
  Jun: 5,
  Jul: 4,
  Aug: 2,
  Sep: 1,
  Oct: 2,
  Nov: 1,
  Dec: 6
};
data['AccountsReceivableChart'] = {
  Jan: 6,
  Feb: 1,
  Mar: 3,
  Apr: 5,
  May: 8,
  Jun: 6,
  Jul: 6,
  Aug: 5,
  Sep: 8,
  Oct: 9,
  Nov: 16,
  Dec: 15
};
data['BillingDonut'] = [{
  name: "Difference",
  val: 6.05
}, {
  name: "Goal",
  val: 93.95
}];
data['PaymentActivityDonut'] = [{
  name: "Difference",
  val: 49.1
}, {
  name: "Goal",
  val: 50.9
}];
data['DenialsDonut'] = [{
  name: "Difference",
  val: 16.73
}, {
  name: "Goal",
  val: 83.27
}];
data['90ARDonut'] = [{
  name: "Difference",
  val: 9.68
}, {
  name: "Goal",
  val: 90.32
}];
data['SplineMonths'] = ['Dec 2019', 'Jan 2020', 'Feb 2020', 'Mar 2020', 'Apr 2020', 'May 2020', 'Jun 2020', 'Jul 2020', 'Aug 2020', 'Sep 2020', 'Oct 2020', 'Nov 2020'];
data['SplineSeries1'] = [605, 680, 660, 630, 335, 375, 330, 440, 402, 450, 380, 405];
data['SplineSeries2'] = [510, 510, 525, 520, 525, 510, 480, 475, 475, 465, 465, 465];
},{}],"src/pdx/pdxSelectBox.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pdxSelectBox = pdxSelectBox;
exports.pdxSelectBoxSearch = pdxSelectBoxSearch;

function pdxSelectBox(el, dataSource, selected) {
  if (!el) return console.warn('pdxSelectBox needs a valid element');
  if (typeof el == 'string') el = $(el);
  return el.dxSelectBox({
    dataSource: dataSource,
    value: selected || dataSource[0] //displayExpr: "Name",
    //searchEnabled: true

  }).dxSelectBox("instance");
}

function pdxSelectBoxSearch(el, dataSource, selected) {
  if (!el) return console.warn('pdxSelectBoxSearch needs a valid element');
  if (typeof el == 'string') el = $(el);
  var opts = {
    dataSource: dataSource,
    value: selected,
    displayExpr: "name",
    searchEnabled: true
  };
  if (selected) opts.value = selected;
  return el.dxSelectBox().dxSelectBox("instance");
}
},{}],"src/pdx/pdxButtonGroup.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pdxButtonGroup = pdxButtonGroup;
var buttonGroupOptions = {
  stylingMode: "outlined",
  onItemClick: function onItemClick(e) {
    DevExpress.ui.notify({
      message: 'The "' + e.itemData.text + '" button was clicked',
      width: 420
    }, "success", 1000);
  }
};

function pdxButtonGroup(el, dataSource, selectedItemKeys) {
  if (!dataSource) return console.warn('Datasource not given for pdxButtonGroup: ', el, dataSource, selectedItemKeys);
  el = $(el);

  if (!(selectedItemKeys instanceof Array) && typeof selectedItemKeys == 'string') {
    selectedItemKeys = [selectedItemKeys];
  }

  var options = Object.assign({}, buttonGroupOptions, {
    items: dataSource
  });
  if (selectedItemKeys && selectedItemKeys instanceof Array) options.selectedItemKeys = selectedItemKeys;
  if (dataSource['overrideOptions']) options = Object.assign({}, options, dataSource['overrideOptions']);
  el.dxButtonGroup(options);
}
},{}],"src/Data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = exports.data = void 0;
var data = {
  DataIncludes: ['Client', 'Prochant', 'Prochant & Client'] // Branch: [], // See below
  // Unit: [], // See below

};
exports.data = data;

var api = function api(path, key) {
  return new DevExpress.data.CustomStore({
    loadMode: "raw",
    key: key || "id",
    load: function load() {
      // return $.getJSON((prefix || 'data') + '/' + jsonFile);
      return $.getJSON(path);
    }
  });
};

exports.api = api;
data['Unit'] = [{
  text: 'Dollars',
  id: 'dollars'
}, {
  text: 'Count',
  id: 'count'
}, {
  text: 'Days',
  id: 'days'
}];
data['PeriodInMonths'] = [{
  text: '3'
}, {
  text: '6'
}, {
  text: '12'
}, {
  text: '18'
}, {
  text: '24'
}];
data['OrderDateOrDOS'] = [{
  text: 'Order date'
}, {
  text: 'DOS'
}];
data['OpenOrdersChart'] = {
  Jan: 6,
  Feb: 13,
  Mar: 9,
  Apr: 16,
  May: 15,
  Jun: 14,
  Jul: 4,
  Aug: 6,
  Sep: 4,
  Oct: 8,
  Nov: 7,
  Dec: 9
};
data['HeldRevenueChart'] = {
  Jan: 14,
  Feb: 12,
  Mar: 12,
  Apr: 15,
  May: 10,
  Jun: 5,
  Jul: 4,
  Aug: 2,
  Sep: 1,
  Oct: 2,
  Nov: 1,
  Dec: 6
};
data['AccountsReceivableChart'] = {
  Jan: 6,
  Feb: 1,
  Mar: 3,
  Apr: 5,
  May: 8,
  Jun: 6,
  Jul: 6,
  Aug: 5,
  Sep: 8,
  Oct: 9,
  Nov: 16,
  Dec: 15
};
data['BillingDonut'] = [{
  name: "Difference",
  val: 6.05
}, {
  name: "Goal",
  val: 93.95
}];
data['PaymentActivityDonut'] = [{
  name: "Difference",
  val: 49.1
}, {
  name: "Goal",
  val: 50.9
}];
data['DenialsDonut'] = [{
  name: "Difference",
  val: 16.73
}, {
  name: "Goal",
  val: 83.27
}];
data['90ARDonut'] = [{
  name: "Difference",
  val: 9.68
}, {
  name: "Goal",
  val: 90.32
}];
data['SplineMonths'] = ['Dec 2019', 'Jan 2020', 'Feb 2020', 'Mar 2020', 'Apr 2020', 'May 2020', 'Jun 2020', 'Jul 2020', 'Aug 2020', 'Sep 2020', 'Oct 2020', 'Nov 2020'];
data['SplineSeries1'] = [605, 680, 660, 630, 335, 375, 330, 440, 402, 450, 380, 405];
data['SplineSeries2'] = [510, 510, 525, 520, 525, 510, 480, 475, 475, 465, 465, 465];
},{}],"src/palette.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProchantPalette = exports.colorGreyLight = exports.colorBlueGrey = exports.colorViolet = exports.colorSlateBlue = exports.colorOrange = exports.colorGreen = exports.colorRed = void 0;
// palette.js
var colorRed = '#D24747';
exports.colorRed = colorRed;
var colorGreen = '#389E0D';
exports.colorGreen = colorGreen;
var colorOrange = '#F5A731'; // export const colorOrange = '#F5A731';

exports.colorOrange = colorOrange;
var colorSlateBlue = '#B6CAE1';
exports.colorSlateBlue = colorSlateBlue;
var colorViolet = '#7111EC';
exports.colorViolet = colorViolet;
var colorBlueGrey = '#48607D';
exports.colorBlueGrey = colorBlueGrey;
var colorGreyLight = '#E0E0E0';
exports.colorGreyLight = colorGreyLight;
var ProchantPalette = {
  // Applies in the BarGauge, Chart, Funnel, PieChart, PolarChart, Sankey, and TreeMap with a discrete colorizer
  simpleSet: ['#00A200', '#E33740', '#6682bb', '#a37182', '#eeba69'] // Applies in the CircularGauge and LinearGauge
  //indicatingSet: ['#90ba58', '#eeba69', '#a37182'], 
  // Applies in the VectorMap and TreeMap with a gradient or range colorizer 
  //gradientSet: ['#78b6d9', '#eeba69'] 

};
exports.ProchantPalette = ProchantPalette;
var BillingPalette = {
  simpleSet: [colorRed, colorGreen]
};
var PaymentAndARPalette = {
  simpleSet: [colorRed, colorOrange]
};
var DenialsPalette = {
  simpleSet: [colorGreen, colorSlateBlue]
};
var SplinePalette = {
  simpleSet: [colorViolet, colorBlueGrey]
};
DevExpress.viz.registerPalette("Prochant", ProchantPalette);
DevExpress.viz.registerPalette("BillingPalette", BillingPalette);
DevExpress.viz.registerPalette("PaymentAndARPalette", PaymentAndARPalette);
DevExpress.viz.registerPalette("DenialsPalette", DenialsPalette);
DevExpress.viz.registerPalette("SplinePalette", SplinePalette);
},{}],"src/pdx/pdxChart.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pdxLineChart = pdxLineChart;

var _Data = require("../Data.js");

var _palette = require("../palette.js");

var commonLineChartOptions = {
  commonAxisSettings: {
    visible: false,
    tick: {
      visible: false
    },
    label: {
      visible: false
    },
    grid: {
      visible: false
    },
    valueMarginsEnabled: false // , "min": -10, minValueMargin: 100

  },
  series: {
    argumentField: 'month',
    point: {
      visible: false
    }
  },
  legend: {
    visible: false
  },
  tooltip: {
    enabled: true,
    contentTemplate: lineChartToolTipTemplate
  },
  margin: {
    bottom: 20
  }
};

function pdxLineChart(el, dataSource, lineColor) {
  el = $(el); // const dataSource = data[dsKey];

  var overrideOptions = dataSource['options'] || {};
  var dsKeys = Object.keys(dataSource);
  var calculatedOptions = {
    size: {}
  };
  calculatedOptions.size.width = Math.round(el.parent().width());
  calculatedOptions.size.height = Math.round(calculatedOptions.size.width / (overrideOptions.heightRatio || 3.1)); // console.log(calculatedOptions);

  var dataSpecifictOpts = {
    dataSource: dsKeys.map(function (month) {
      return {
        month: month,
        val: dataSource[month]
      };
    })
  };
  var opts = Object.assign(dataSpecifictOpts, commonLineChartOptions, calculatedOptions, overrideOptions); // console.log(opts);

  var L = dsKeys.length;
  var isGreen = (dataSource[dsKeys[L - 1]] - dataSource[dsKeys[L - 2]]) * lineColor > 0;
  opts.series.color = isGreen ? _palette.colorGreen : _palette.colorRed; //

  el.dxChart(opts);
  return el.dxChart('instance');
}

;

function lineChartToolTipTemplate(info, container) {
  var html = ['<div class="pdx-chart-tooltip">', '<div class="month"></div>', '<div class="value"></div>', '</div>'];
  var content = $(html.join(""));
  content.find(".month").text(info.argument);
  content.find(".value").text('$' + (info.value + 400.82) + 'K');
  content.appendTo(container);
} // export function pdxChartSplines(el, dataSource, lineColor) {
//     el = $(el);
//     el.dxChart(opts);
//     return el.dxChart('instance');
// }
},{"../Data.js":"src/Data.js","../palette.js":"src/palette.js"}],"src/pdx/pdxMultiSeriesChart.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pdxMultiSeriesChart = pdxMultiSeriesChart;

var _palette = require("../palette.js");

function pdxMultiSeriesChart(el, opts, legends, customTooltipHandlers) {
  if (el) el = $(el);
  var defaultOpts = {
    // width: width,// height: height,
    // dataSource: dataSource,
    // palette: palette || 'SplinePalette',
    redrawOnResize: true,
    commonAxisSettings: {
      grid: {
        visible: true,
        color: _palette.colorGreyLight
      },
      tick: {
        visible: false
      },
      color: _palette.colorGreyLight,
      label: {
        font: {
          family: 'Assistant',
          size: '0.7rem'
        }
      }
    },
    commonSeriesSettings: {
      // argumentField: "month",
      // valueField: "value",
      // type: type || "spline",
      point: {
        visible: false
      }
    },
    // seriesTemplate: {  nameField: "series", },
    // series: series,
    legend: {
      verticalAlignment: "bottom",
      horizontalAlignment: "center",
      font: {
        family: 'Assistant',
        size: '0.8rem'
      },
      customizeText: function customizeText(info) {
        return legends[info.seriesIndex];
      }
    },
    tooltip: {
      enabled: true,
      customizeTooltip: function customizeTooltip(arg) {
        console.log(arg, arg.seriesName);
        return 'Test'; /// return customTooltipHandlers[arg.seriesName](arg, arg.point.aggregationInfo);
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
},{"../palette.js":"src/palette.js"}],"src/pdx/util.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageInitAnimation = pageInitAnimation;
exports.pageViewportFromQS = pageViewportFromQS;
exports.navigateTo = navigateTo;
exports.QS = QS;
exports.resizeToAspect = resizeToAspect;
exports.doubleAxis = doubleAxis;

function pageInitAnimation() {
  $('.page-init-hidden').hide().addClass('page-init-animating').removeClass('page-init-hidden');
  $('.page-init-animating,.page-init-hidden').slideDown(800, function () {
    $(this).removeClass('page-init-hidden').removeClass('page-init-animating');
  });
}

function pageViewportFromQS() {
  // location.search.split(/[\?\&]/).map(kv => {
  //     kv=kv.split('='); if(kv[0]=='vw') $('html').width(parseInt(kv[1], 10));
  // });
  if (QS('vw')) $('html').width(parseInt(QS('vw'), 10));
}

function navigateTo(page) {
  location.href = page + '.html';
}

function QS(key, dV) {
  if (!QS.qs) {
    QS.qs = {};
    location.search.split(/[\?\&]/).map(function (kv) {
      kv = kv.split('=');
      QS.qs[kv[0]] = kv[1];
    });
  }

  return QS.qs[key] || dV;
}

function resizeToAspect(el, wRatio, hRatio) {
  el = $(el);
  console.log(el);
  var aspectRatio = hRatio / wRatio;
  var outerWidth = $(el).outerWidth();
  el.height(aspectRatio * outerWidth);
}

function doubleAxis(name1, text1, color1, name2, text2, color2) {
  return {
    valueAxis: [{
      name: name1,
      title: {
        text: text1,
        font: {
          color: color1
        }
      },
      label: {
        font: {
          color: color1
        }
      }
    }, {
      name: name2,
      position: "right",
      title: {
        text: text2,
        font: {
          color: color2
        }
      },
      label: {
        font: {
          color: color2
        }
      }
    }]
  };
}
},{}],"data/Order12MonthData.json":[function(require,module,exports) {
module.exports = [{
  "monthyearint": 202002,
  "MonNumber": 2,
  "monthyear": "Feb 2020",
  "sourcesystemkey": 11,
  "orderallow": 3250222.15,
  "12monthallow": 34153134.03,
  "dailyavg": 94869.8167,
  "OrderDays": 34.26,
  "enddate": "/Date(1582952400000)/",
  "OrderCount": 2453,
  "Expectedorderallow": 3805075.74,
  "Expectedorderdays": 96.08,
  "Expectedordercount": 3051
}, {
  "monthyearint": 202003,
  "MonNumber": 3,
  "monthyear": "Mar 2020",
  "sourcesystemkey": 11,
  "orderallow": 3668097.77,
  "12monthallow": 34341718.46,
  "dailyavg": 95393.6623,
  "OrderDays": 38.45,
  "enddate": "/Date(1585627200000)/",
  "OrderCount": 2566,
  "Expectedorderallow": 3758837.94,
  "Expectedorderdays": 90.92,
  "Expectedordercount": 3001
}, {
  "monthyearint": 202004,
  "MonNumber": 4,
  "monthyear": "Apr 2020",
  "sourcesystemkey": 11,
  "orderallow": 3201939.09,
  "12monthallow": 33492211.32,
  "dailyavg": 93033.9203,
  "OrderDays": 34.42,
  "enddate": "/Date(1588219200000)/",
  "OrderCount": 1895,
  "Expectedorderallow": 3730796.8,
  "Expectedorderdays": 71.58,
  "Expectedordercount": 2969
}, {
  "monthyearint": 202005,
  "MonNumber": 5,
  "monthyear": "May 2020",
  "sourcesystemkey": 11,
  "orderallow": 3232481.18,
  "12monthallow": 33618915.98,
  "dailyavg": 93385.8777,
  "OrderDays": 34.61,
  "enddate": "/Date(1590897600000)/",
  "OrderCount": 2037,
  "Expectedorderallow": 3641524.35,
  "Expectedorderdays": 59.98,
  "Expectedordercount": 2863
}, {
  "monthyearint": 202006,
  "MonNumber": 6,
  "monthyear": "Jun 2020",
  "sourcesystemkey": 11,
  "orderallow": 3344368.94,
  "12monthallow": 33263427.81,
  "dailyavg": 92398.4105,
  "OrderDays": 36.2,
  "enddate": "/Date(1593489600000)/",
  "OrderCount": 2386,
  "Expectedorderallow": 3580134.48,
  "Expectedorderdays": 52.44,
  "Expectedordercount": 2751
}, {
  "monthyearint": 202007,
  "MonNumber": 7,
  "monthyear": "Jul 2020",
  "sourcesystemkey": 11,
  "orderallow": 3306301.65,
  "12monthallow": 33303029.03,
  "dailyavg": 92508.4139,
  "OrderDays": 35.74,
  "enddate": "/Date(1596168000000)/",
  "OrderCount": 2723,
  "Expectedorderallow": 3537441.73,
  "Expectedorderdays": 47.26,
  "Expectedordercount": 2666
}, {
  "monthyearint": 202008,
  "MonNumber": 8,
  "monthyear": "Aug 2020",
  "sourcesystemkey": 11,
  "orderallow": 3469584.86,
  "12monthallow": 33285761.09,
  "dailyavg": 92460.4474,
  "OrderDays": 37.53,
  "enddate": "/Date(1598846400000)/",
  "OrderCount": 2735,
  "Expectedorderallow": 3512907.93,
  "Expectedorderdays": 43.83,
  "Expectedordercount": 2604
}, {
  "monthyearint": 202009,
  "MonNumber": 9,
  "monthyear": "Sep 2020",
  "sourcesystemkey": 11,
  "orderallow": 3464127.05,
  "12monthallow": 34089825.13,
  "dailyavg": 94693.9586,
  "OrderDays": 36.58,
  "enddate": "/Date(1601438400000)/",
  "OrderCount": 2817,
  "Expectedorderallow": 3479853.13,
  "Expectedorderdays": 41.08,
  "Expectedordercount": 2556
}, {
  "monthyearint": 202010,
  "MonNumber": 10,
  "monthyear": "Oct 2020",
  "sourcesystemkey": 11,
  "orderallow": 3323734.04,
  "12monthallow": 34482869.4,
  "dailyavg": 95785.7483,
  "OrderDays": 34.7,
  "enddate": "/Date(1604116800000)/",
  "OrderCount": 2576,
  "Expectedorderallow": 3437798.17,
  "Expectedorderdays": 38.78,
  "Expectedordercount": 2511
}, {
  "monthyearint": 202011,
  "MonNumber": 11,
  "monthyear": "Nov 2020",
  "sourcesystemkey": 11,
  "orderallow": 4487966.04,
  "12monthallow": 34560318.48,
  "dailyavg": 96000.8846,
  "OrderDays": 46.75,
  "enddate": "/Date(1606712400000)/",
  "OrderCount": 2462,
  "Expectedorderallow": 3419189.48,
  "Expectedorderdays": 37.41,
  "Expectedordercount": 2506
}, {
  "monthyearint": 202012,
  "MonNumber": 12,
  "monthyear": "Dec 2020",
  "sourcesystemkey": 11,
  "orderallow": 3231568.72,
  "12monthallow": 34601876.44,
  "dailyavg": 96116.3234,
  "OrderDays": 33.62,
  "enddate": "/Date(1609390800000)/",
  "OrderCount": 2331,
  "Expectedorderallow": 3483049.93,
  "Expectedorderdays": 37.3,
  "Expectedordercount": 2480
}, {
  "monthyearint": 202101,
  "MonNumber": 1,
  "monthyear": "Jan 2021",
  "sourcesystemkey": 11,
  "orderallow": 2982808.38,
  "12monthallow": 34035353.26,
  "dailyavg": 94542.6479,
  "OrderDays": 31.55,
  "enddate": "/Date(1610082000000)/",
  "OrderCount": 2171,
  "Expectedorderallow": 3442210.6,
  "Expectedorderdays": 36.45,
  "Expectedordercount": 2442
}];
},{}],"data/Hold.json":[function(require,module,exports) {
module.exports = [{
  "monthyear": "Mar 2019",
  "sourcesystemkey": 11,
  "holdallow": 85162.0600,
  "12monthallow": 5327344.3200,
  "dailyavg": 14798.1786,
  "HoldDays": 5.7500,
  "enddate": "\/Date(1554004800000)\/",
  "holdcount": 1252,
  "monthyear1": "Mar 2019",
  "orderallow": 95278.1200,
  "ordercount": 422
}, {
  "monthyear": "Apr 2019",
  "sourcesystemkey": 11,
  "holdallow": 75262.9400,
  "12monthallow": 8863384.7900,
  "dailyavg": 24620.5133,
  "HoldDays": 3.0600,
  "enddate": "\/Date(1556596800000)\/",
  "holdcount": 961,
  "monthyear1": "Apr 2019",
  "orderallow": 110246.7200,
  "ordercount": 500
}, {
  "monthyear": "May 2019",
  "sourcesystemkey": 11,
  "holdallow": 62640.6600,
  "12monthallow": 11419309.0700,
  "dailyavg": 31720.3029,
  "HoldDays": 1.9700,
  "enddate": "\/Date(1559275200000)\/",
  "holdcount": 907,
  "monthyear1": "May 2019",
  "orderallow": 98852.9700,
  "ordercount": 454
}, {
  "monthyear": "Jun 2019",
  "sourcesystemkey": 11,
  "holdallow": 46563.5400,
  "12monthallow": 14121159.2900,
  "dailyavg": 39225.4424,
  "HoldDays": 1.1900,
  "enddate": "\/Date(1561867200000)\/",
  "holdcount": 790,
  "monthyear1": "Jun 2019",
  "orderallow": 86607.7500,
  "ordercount": 446
}, {
  "monthyear": "Jul 2019",
  "sourcesystemkey": 11,
  "holdallow": 34225.1100,
  "12monthallow": 16847823.9000,
  "dailyavg": 46799.5108,
  "HoldDays": 0.7300,
  "enddate": "\/Date(1564545600000)\/",
  "holdcount": 467,
  "monthyear1": "Jul 2019",
  "orderallow": 84248.3200,
  "ordercount": 482
}, {
  "monthyear": "Aug 2019",
  "sourcesystemkey": 11,
  "holdallow": 33970.6200,
  "12monthallow": 19727481.9000,
  "dailyavg": 54798.5608,
  "HoldDays": 0.6200,
  "enddate": "\/Date(1567224000000)\/",
  "holdcount": 559,
  "monthyear1": "Aug 2019",
  "orderallow": 68328.2800,
  "ordercount": 363
}, {
  "monthyear": "Sep 2019",
  "sourcesystemkey": 11,
  "holdallow": 34847.6600,
  "12monthallow": 22272127.6000,
  "dailyavg": 61867.0211,
  "HoldDays": 0.5600,
  "enddate": "\/Date(1569816000000)\/",
  "holdcount": 576,
  "monthyear1": "Sep 2019",
  "orderallow": 86435.0800,
  "ordercount": 489
}, {
  "monthyear": "Oct 2019",
  "sourcesystemkey": 11,
  "holdallow": 39474.3100,
  "12monthallow": 24949237.9500,
  "dailyavg": 69303.4387,
  "HoldDays": 0.5700,
  "enddate": "\/Date(1572494400000)\/",
  "holdcount": 622,
  "monthyear1": "Oct 2019",
  "orderallow": 73017.0200,
  "ordercount": 428
}, {
  "monthyear": "Nov 2019",
  "sourcesystemkey": 11,
  "holdallow": 26675.7900,
  "12monthallow": 27884797.3200,
  "dailyavg": 77457.7703,
  "HoldDays": 0.3400,
  "enddate": "\/Date(1575090000000)\/",
  "holdcount": 443,
  "monthyear1": "Nov 2019",
  "orderallow": 63095.8300,
  "ordercount": 355
}, {
  "monthyear": "Dec 2019",
  "sourcesystemkey": 11,
  "holdallow": 26675.7900,
  "12monthallow": 30608500.6000,
  "dailyavg": 85023.6127,
  "HoldDays": 0.3100,
  "enddate": "\/Date(1577768400000)\/",
  "holdcount": 443,
  "monthyear1": "Dec 2019",
  "orderallow": 63095.8300,
  "ordercount": 355
}, {
  "monthyear": "Jan 2020",
  "sourcesystemkey": 11,
  "holdallow": 34196.1400,
  "12monthallow": 34639054.9400,
  "dailyavg": 96219.5970,
  "HoldDays": 0.3600,
  "enddate": "\/Date(1580446800000)\/",
  "holdcount": 509,
  "monthyear1": "Jan 2020",
  "orderallow": 69259.0400,
  "ordercount": 355
}, {
  "monthyear": "Feb 2020",
  "sourcesystemkey": 11,
  "holdallow": 30877.5800,
  "12monthallow": 34153134.0300,
  "dailyavg": 94869.8167,
  "HoldDays": 0.3300,
  "enddate": "\/Date(1582952400000)\/",
  "holdcount": 442,
  "monthyear1": "Feb 2020",
  "orderallow": 74689.8700,
  "ordercount": 383
}, {
  "monthyear": "Mar 2020",
  "sourcesystemkey": 11,
  "holdallow": 17526.5600,
  "12monthallow": 34341718.4600,
  "dailyavg": 95393.6623,
  "HoldDays": 0.1800,
  "enddate": "\/Date(1585627200000)\/",
  "holdcount": 271,
  "monthyear1": "Mar 2020",
  "orderallow": 78307.0200,
  "ordercount": 418
}, {
  "monthyear": "Apr 2020",
  "sourcesystemkey": 11,
  "holdallow": 26213.2100,
  "12monthallow": 33492211.3200,
  "dailyavg": 93033.9203,
  "HoldDays": 0.2800,
  "enddate": "\/Date(1588219200000)\/",
  "holdcount": 323,
  "monthyear1": "Apr 2020",
  "orderallow": 61380.6500,
  "ordercount": 277
}, {
  "monthyear": "May 2020",
  "sourcesystemkey": 11,
  "holdallow": 31615.5200,
  "12monthallow": 33618915.9800,
  "dailyavg": 93385.8777,
  "HoldDays": 0.3400,
  "enddate": "\/Date(1590897600000)\/",
  "holdcount": 306,
  "monthyear1": "May 2020",
  "orderallow": 104912.8400,
  "ordercount": 422
}, {
  "monthyear": "Jun 2020",
  "sourcesystemkey": 11,
  "holdallow": 31950.0000,
  "12monthallow": 33263427.8100,
  "dailyavg": 92398.4105,
  "HoldDays": 0.3500,
  "enddate": "\/Date(1593489600000)\/",
  "holdcount": 330,
  "monthyear1": "Jun 2020",
  "orderallow": 64513.8900,
  "ordercount": 297
}, {
  "monthyear": "Jul 2020",
  "sourcesystemkey": 11,
  "holdallow": 20718.9200,
  "12monthallow": 33303029.0300,
  "dailyavg": 92508.4139,
  "HoldDays": 0.2200,
  "enddate": "\/Date(1596168000000)\/",
  "holdcount": 207,
  "monthyear1": "Jul 2020",
  "orderallow": 86796.9800,
  "ordercount": 418
}, {
  "monthyear": "Aug 2020",
  "sourcesystemkey": 11,
  "holdallow": 15778.4700,
  "12monthallow": 33285761.0900,
  "dailyavg": 92460.4474,
  "HoldDays": 0.1700,
  "enddate": "\/Date(1598846400000)\/",
  "holdcount": 210,
  "monthyear1": "Aug 2020",
  "orderallow": 84473.2700,
  "ordercount": 355
}, {
  "monthyear": "Sep 2020",
  "sourcesystemkey": 11,
  "holdallow": 15621.7700,
  "12monthallow": 34089825.1300,
  "dailyavg": 94693.9586,
  "HoldDays": 0.1600,
  "enddate": "\/Date(1601438400000)\/",
  "holdcount": 220,
  "monthyear1": "Sep 2020",
  "orderallow": 94728.9600,
  "ordercount": 348
}, {
  "monthyear": "Oct 2020",
  "sourcesystemkey": 11,
  "holdallow": 14573.6500,
  "12monthallow": 34482869.4000,
  "dailyavg": 95785.7483,
  "HoldDays": 0.1500,
  "enddate": "\/Date(1604116800000)\/",
  "holdcount": 212,
  "monthyear1": "Oct 2020",
  "orderallow": 83494.1200,
  "ordercount": 368
}, {
  "monthyear": "Nov 2020",
  "sourcesystemkey": 11,
  "holdallow": 10579.2800,
  "12monthallow": 34560318.4800,
  "dailyavg": 96000.8846,
  "HoldDays": 0.1100,
  "enddate": "\/Date(1606712400000)\/",
  "holdcount": 162,
  "monthyear1": "Nov 2020",
  "orderallow": 74872.4600,
  "ordercount": 320
}, {
  "monthyear": "Dec 2020",
  "sourcesystemkey": 11,
  "holdallow": 15842.4600,
  "12monthallow": 34601876.4400,
  "dailyavg": 96116.3234,
  "HoldDays": 0.1600,
  "enddate": "\/Date(1609390800000)\/",
  "holdcount": 151,
  "monthyear1": "Dec 2020",
  "orderallow": 70247.5000,
  "ordercount": 314
}, {
  "monthyear": "Jan 2021",
  "sourcesystemkey": 11,
  "holdallow": 14954.8900,
  "12monthallow": 34236707.1600,
  "dailyavg": 95101.9643,
  "HoldDays": 0.1600,
  "enddate": "\/Date(1610946000000)\/",
  "holdcount": 170,
  "monthyear1": "Jan 2021",
  "orderallow": 88938.5400,
  "ordercount": 386
}];
},{}],"data/AR.json":[function(require,module,exports) {
module.exports = [{
  "monthyear": "Feb 2020",
  "sourcesystemkey": 11,
  "openbalance": 3269422.0600,
  "90AR": 1042093.6400,
  "90AR%": 31.8700,
  "enddate": "\/Date(1582952400000)\/",
  "ARCount": 16951,
  "AR90Count": 5501
}, {
  "monthyear": "Mar 2020",
  "sourcesystemkey": 11,
  "openbalance": 3147639.6700,
  "90AR": 1145796.8600,
  "90AR%": 36.4000,
  "enddate": "\/Date(1585627200000)\/",
  "ARCount": 16948,
  "AR90Count": 5787
}, {
  "monthyear": "Apr 2020",
  "sourcesystemkey": 11,
  "openbalance": 3361644.3900,
  "90AR": 1088998.9300,
  "90AR%": 32.3900,
  "enddate": "\/Date(1588219200000)\/",
  "ARCount": 16779,
  "AR90Count": 5786
}, {
  "monthyear": "May 2020",
  "sourcesystemkey": 11,
  "openbalance": 2960947.7400,
  "90AR": 1004576.6800,
  "90AR%": 33.9200,
  "enddate": "\/Date(1590897600000)\/",
  "ARCount": 15857,
  "AR90Count": 5436
}, {
  "monthyear": "Jun 2020",
  "sourcesystemkey": 11,
  "openbalance": 2954992.6700,
  "90AR": 1038461.8600,
  "90AR%": 35.1400,
  "enddate": "\/Date(1593489600000)\/",
  "ARCount": 14982,
  "AR90Count": 5148
}, {
  "monthyear": "Jul 2020",
  "sourcesystemkey": 11,
  "openbalance": 2811286.1500,
  "90AR": 980656.0100,
  "90AR%": 34.8800,
  "enddate": "\/Date(1596168000000)\/",
  "ARCount": 15778,
  "AR90Count": 5331
}, {
  "monthyear": "Aug 2020",
  "sourcesystemkey": 11,
  "openbalance": 3161062.9500,
  "90AR": 939191.7900,
  "90AR%": 29.7100,
  "enddate": "\/Date(1598846400000)\/",
  "ARCount": 16192,
  "AR90Count": 5379
}, {
  "monthyear": "Sep 2020",
  "sourcesystemkey": 11,
  "openbalance": 3624283.3100,
  "90AR": 922838.1100,
  "90AR%": 25.4600,
  "enddate": "\/Date(1601438400000)\/",
  "ARCount": 16574,
  "AR90Count": 5513
}, {
  "monthyear": "Oct 2020",
  "sourcesystemkey": 11,
  "openbalance": 3175487.6800,
  "90AR": 860097.6200,
  "90AR%": 27.0800,
  "enddate": "\/Date(1604116800000)\/",
  "ARCount": 17530,
  "AR90Count": 5285
}, {
  "monthyear": "Nov 2020",
  "sourcesystemkey": 11,
  "openbalance": 2989057.7200,
  "90AR": 685837.8900,
  "90AR%": 22.9400,
  "enddate": "\/Date(1606712400000)\/",
  "ARCount": 17244,
  "AR90Count": 4291
}, {
  "monthyear": "Dec 2020",
  "sourcesystemkey": 11,
  "openbalance": 2878723.8500,
  "90AR": 593743.8800,
  "90AR%": 20.6200,
  "enddate": "\/Date(1609390800000)\/",
  "ARCount": 17144,
  "AR90Count": 4068
}, {
  "monthyear": "Jan 2021",
  "sourcesystemkey": 11,
  "openbalance": 3162826.8200,
  "90AR": 618050.1300,
  "90AR%": 19.5400,
  "enddate": "\/Date(1610946000000)\/",
  "ARCount": 17251,
  "AR90Count": 4286
}];
},{}],"src/pages/pageDetail.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pageDetail;

var _data = require("../data.js");

var _pdxSelectBox = require("../pdx/pdxSelectBox.js");

var _pdxButtonGroup = require("../pdx/pdxButtonGroup.js");

var _pdxChart = require("../pdx/pdxChart.js");

var _pdxMultiSeriesChart = require("../pdx/pdxMultiSeriesChart.js");

var _util = require("../pdx/util.js");

var _Order12MonthData = _interopRequireDefault(require("../../data/Order12MonthData.json"));

var _Hold = _interopRequireDefault(require("../../data/Hold.json"));

var _AR = _interopRequireDefault(require("../../data/AR.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function pageDetail() {
  var dataSource = _data.data['DataIncludes'];
  (0, _pdxSelectBox.pdxSelectBox)('#pdxDataIncludes', dataSource, dataSource[dataSource.length - 1]);
  var dataSource = _data.data['Branch']; // pdxSelectBoxSearch('#pdxBranch', dataSource, dataSource[0]);
  // pdxMultiSelectBoxWithSearch('#pdxBranch', dataSource, 'All');

  (0, _pdxButtonGroup.pdxButtonGroup)('#pdxUnit', _data.data['Unit'], 'Dollars');
  (0, _pdxButtonGroup.pdxButtonGroup)('#pdxPeriodInMonths', _data.data['PeriodInMonths'], '12');
  (0, _pdxButtonGroup.pdxButtonGroup)('#pdxOrderDateOrDOS', _data.data['OrderDateOrDOS'], 'Order date');
  (0, _pdxChart.pdxLineChart)('#pdxApproachingTimelyFiling', _data.data['AccountsReceivableChart'], true);
  (0, _pdxChart.pdxLineChart)('#pdxPastTimelyFiling', _data.data['AccountsReceivableChart'], false);
  detailedChart((0, _util.QS)('data'));
}

function detailedChart(qsData) {
  var chart = new MultiSeriesCharts();
  qsData = qsData || 'orders';
  chart[qsData + 'Chart']();
}

var MultiSeriesCharts = /*#__PURE__*/function () {
  function MultiSeriesCharts() {
    _classCallCheck(this, MultiSeriesCharts);
  }

  _createClass(MultiSeriesCharts, [{
    key: "ordersChart",
    value: function ordersChart() {
      $('.chartName').text('Open orders');
      (0, _util.resizeToAspect)('#pdxDetailChart', 1, 0.65);
      var legends = ['Current open orders', 'Expected'];
      var miniOpts = {
        dataSource: _Order12MonthData.default,
        palette: 'SplinePalette',
        series: [{
          type: 'spline',
          valueField: 'orderallow',
          argumentField: 'monthyear'
        }, {
          type: 'spline',
          valueField: 'Expectedorderallow',
          argumentField: 'monthyear'
        }]
      };
      (0, _pdxMultiSeriesChart.pdxMultiSeriesChart)('#pdxDetailChart', miniOpts, legends, customTooltipHandlers);
    }
  }, {
    key: "heldChart",
    value: function heldChart() {
      $('.chartName').text('Held Revenue');
      (0, _util.resizeToAspect)('#pdxDetailChart', 1, 0.65);
      var legends = ['Hold', 'Stop'];
      var miniOpts = {
        dataSource: _Hold.default,
        palette: '',
        //TODO:1:Register two New Palette refering figma
        series: [{
          type: 'splinearea',
          valueField: 'holdallow',
          argumentField: 'monthyear'
        }, {
          type: 'splinearea',
          valueField: 'orderallow',
          argumentField: 'monthyear'
        }]
      };
      (0, _pdxMultiSeriesChart.pdxMultiSeriesChart)('#pdxDetailChart', miniOpts, legends, customTooltipHandlers);
    }
  }, {
    key: "arChart",
    value: function arChart() {
      $('.chartName').text('Accounts Receivable');
      (0, _util.resizeToAspect)('#pdxDetailChart', 1, 0.65);
      var legends = ['Total', '90 AR', '90 AR %'];
      var miniOpts = {
        dataSource: _AR.default,
        //TODO:1:dataSource to be modified with 12 rows only.
        palette: '',
        //TODO:1:Register two New Palette refering figma
        valueAxis: (0, _util.doubleAxis)('totalAnd90AR', '', '', '90ARPerc', '', '').valueAxis,
        series: [{
          type: 'stackedbar',
          valueField: 'openbalance',
          argumentField: 'monthyear'
        }, {
          type: 'stackedbar',
          valueField: '90AR',
          argumentField: 'monthyear'
        }, {
          type: 'spline',
          valueField: '90AR%',
          argumentField: 'monthyear',
          axis: '90ARPerc'
        }]
      };
      (0, _pdxMultiSeriesChart.pdxMultiSeriesChart)('#pdxDetailChart', miniOpts, legends, customTooltipHandlers);
    }
  }]);

  return MultiSeriesCharts;
}();

var customTooltipHandlers = {
  'Current open orders': function CurrentOpenOrders() {},
  'Expected': function Expected() {},
  'Hold': function Hold() {},
  'Stop': function Stop() {},
  'Total': function Total() {},
  '90 AR': function AR() {},
  '90 AR %': function AR() {}
};
},{"../data.js":"src/data.js","../pdx/pdxSelectBox.js":"src/pdx/pdxSelectBox.js","../pdx/pdxButtonGroup.js":"src/pdx/pdxButtonGroup.js","../pdx/pdxChart.js":"src/pdx/pdxChart.js","../pdx/pdxMultiSeriesChart.js":"src/pdx/pdxMultiSeriesChart.js","../pdx/util.js":"src/pdx/util.js","../../data/Order12MonthData.json":"data/Order12MonthData.json","../../data/Hold.json":"data/Hold.json","../../data/AR.json":"data/AR.json"}],"src/detail.js":[function(require,module,exports) {
"use strict";

var _pageDetail = _interopRequireDefault(require("./pages/pageDetail.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { pageInitAnimation, pageViewportFromQS } from './pdx/util';
$(_pageDetail.default); //pageInitAnimation();
//pageViewportFromQS();
},{"./pages/pageDetail.js":"src/pages/pageDetail.js"}],"../../scoop/persist/nodejs-lts/bin/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51058" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../scoop/persist/nodejs-lts/bin/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/detail.js"], null)
//# sourceMappingURL=/detail.3364b923.js.map