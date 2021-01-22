export function pdxSelectBox(el, dataSource, selected) {
    if (!el) return console.warn('pdxSelectBox needs a valid element');
    if(typeof el == 'string') el = $(el);

    return el.dxSelectBox({
        dataSource: dataSource,
        value: selected || dataSource[0],
        //displayExpr: "Name",
        //searchEnabled: true
    }).dxSelectBox("instance");
}

export function pdxSelectBoxSearch(el, dataSource, selected) {
    if (!el) return console.warn('pdxSelectBoxSearch needs a valid element');
    if(typeof el == 'string') el = $(el);
    var opts = {
        dataSource: dataSource,
        value: selected,
        displayExpr: "name",
        searchEnabled: true
    };
    if(selected) opts.value = selected;
    return el.dxSelectBox().dxSelectBox("instance");
}
