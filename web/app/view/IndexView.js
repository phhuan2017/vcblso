Ext.define(('vcb.view.IndexView'), {
    extend: 'Ext.container.Container',
    xtype:'IndexView',
    layout: 'border',
    itemId:'IndexView',
    items: [
        {
            xtype: 'MenuView',
            region: 'north',
            border: true,
//            height: 30,
            bodyStyle: 'background-color: transparent'
        },
        {
            region: 'west',
            layout: 'fit',
            itemId: 'west',
            collapsible: true,
            width: 300,
            border: true,
            bodyStyle:'background-color: transparent',
            items: {
                xtype: 'amxcontainer',
                itemId: 'WestView',
                layout: 'card'
            }
        },
        {
            region: 'center',       
            border: false,
            layout: 'fit',
            bodyStyle: 'background-color: transparent',
            items: {
                xtype: 'amxcontainer',
                itemId:'CenterView',
                id:'CenterView',
                layout: 'card'
            } 
        }
    ],
//    reset: function() {},
    showWhat: function(itemIdWest,WestView,itemIdCenter,CenterView,title) {
       this.down('#west').setTitle(title);
       this.down('#WestView').activateViewItem(itemIdWest, function() {
            return Ext.create(WestView);
       },this);
       this.down('#CenterView').activateViewItem(itemIdCenter, function() {
            return Ext.create(CenterView);
        },this);
    },
    showWhat1: function(itemIdWest,WestView,itemIdCenter,CenterView,title) {
       this.down('#west').setTitle(title);
       this.down('#WestView').activateViewItem(itemIdWest, function() {
            return Ext.create(WestView);
       },this).hayghe();
       this.down('#CenterView').activateViewItem(itemIdCenter, function() {
            return Ext.create(CenterView);
        },this).activate();
    },
    showWhat2: function(itemIdWest,WestView,itemIdCenter,CenterView) {
       this.down('#WestView').activateViewItem(itemIdWest, function() {
            return Ext.create(WestView);
       },this);
       this.down('#CenterView').activateViewItem(itemIdCenter, function() {
            return Ext.create(CenterView);
        },this);
    },
    showWest:function (itemIdWest,WestView){
        this.down('#WestView').activateViewItem(itemIdWest, function() {
            return Ext.create(WestView);
       },this);
    },
    showCenter:function (itemIdCenter,CenterView){
        this.down('#CenterView').activateViewItem(itemIdCenter, function() {
            return Ext.create(CenterView);
       },this);
    }
});