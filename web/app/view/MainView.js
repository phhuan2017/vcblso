
Ext.define(('vcb.view.MainView'),{
    extend: 'Ext.container.Viewport',
    layout: 'fit',
    xtype:'ViewMain',
    items: {
            xtype: 'amxcontainer',
            id: 'MainView',
            layout: 'card'
    }
});

