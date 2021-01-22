const buttonGroupOptions = {
    stylingMode: "outlined",
    onItemClick: function(e) {
        DevExpress.ui.notify({ message: 'The "' + e.itemData.text + '" button was clicked', width: 420 }, "success", 1000);
    }
};

export function pdxButtonGroup(el, dataSource, selectedItemKeys) {
    if(!dataSource) return console.warn('Datasource not given for pdxButtonGroup: ', el, dataSource, selectedItemKeys);
    el = $(el);
    if(!(selectedItemKeys instanceof Array) && typeof selectedItemKeys == 'string') {
        selectedItemKeys = [selectedItemKeys];
    }
    var options = Object.assign({}, buttonGroupOptions, {
        items: dataSource,
    });
    if(selectedItemKeys && selectedItemKeys instanceof Array) options.selectedItemKeys = selectedItemKeys;
    if(dataSource['overrideOptions']) options = Object.assign({}, options, dataSource['overrideOptions']);
    el.dxButtonGroup(options);
}
