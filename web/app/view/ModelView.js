Ext.define(('vcb.view.ModelView'), {
    id:'ModelView',
    extend: 'Ext.container.Container',
    xtype:'ModelView',
    layout:{
        type:'vbox',
        align: 'center'
    },
    items:[
        {
            border: false,
            xtype: 'container',
            flex:1
        },
        {
            border: false,
            xtype: 'amxcontainer',
            itemId: 'modelId',
            layout: 'card'
        },
        {
            border: false,
            xtype: 'container',
            flex:1
        }
    ],
    reset: function() {
    },
    showModel:function (itemIdWest,WestView){
//        console.log('huan');
        this.down('#modelId').activateViewItem(itemIdWest, function() {
            return Ext.create(WestView);
       },this);
    }
});


