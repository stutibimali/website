
export function pdxDropDownBoxWithDataGrid(el, dataSource, selected, opts) {
    if (!el) return console.warn('pdxMultiSelectBoxWithSearch needs a valid element');
    if(typeof el == 'string') el = $(el);
    if(!opts) opts = {}; // set default

    return el.dxDropDownBox({
        dataSource: dataSource,
        value: selected || dataSource[0],
        //value: [0],
        displayExpr: "name",
        valueExpr: "abbr",
        // searchEnabled: true,
        showClearButton: opts.showClearButton || false,
        contentTemplate: function(e){
            const ddbComponent = e.component, value = ddbComponent.option("value");
            const containerDiv = $('<div class="pdx-dropdown">');
            const btns = $('<div class="apply-cancel-btns"></div>').appendTo(containerDiv);
            const applyBtn = $('<button>Apply<button>').appendTo(btns);
            const cancelBtn = $('<button>Cancel<button>').appendTo(btns);
            const datagrid = $('<div class="datagrid-tpl"></div>').appendTo(containerDiv);
            // <button>Apply<button><button>Cancel<button>
            // containerDiv.find('.datagrid-tpl')
            const $dataGrid = datagrid.dxDataGrid({
                dataSource: e.component.getDataSource(),
                columns: ["name"],
                showBorders: opts.showBorders || false,
                showColumnLines: opts.showColumnLines || false, // default: true
                showCheckBoxesMode: 'always',
                hoverStateEnabled: true,
                paging: { enabled: false, pageSize: 10 },
                filterRow: { visible: true },
                scrolling: true, // { mode: "infinite" },
                selection: { mode: "multiple" },
                // selectedRowKeys: [value],
                height: "100%",
                onSelectionChanged: function(selectedItems){
                    var keys = selectedItems.selectedRowKeys,
                        hasSelection = keys.length;
                    console.log('onSelectionChanged', selectedItems, keys);
                    e.component.option("value", hasSelection ? keys : null);
                }
            });
            
            var dgInstance = $dataGrid.dxDataGrid("instance");
            
            e.component.on("valueChanged", function(args){
                console.log('valueChanged', args);
                dgInstance.selectRows(args.value, false);
            });
            
            //return containerDiv; // $dataGrid;
            return $dataGrid;
        }
    }).dxDropDownBox("instance");
}
