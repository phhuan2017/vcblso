Ext.define(('vcb.view.TrangView'), { 
//    extend: 'Ext.form.Panel',
//    itemId:'TrangView',
////    layout: {
////        type: 'vbox',
////        align: 'center',
////        pack: 'center'
////    },
//    config:{
//        items:[
//            {
//                xtype: 'pannel',
//                loader: {
//                    url: 'http://www.24h.com.vn/',
//                    autoLoad: true
//                },
//                renderTo: Ext.getBody()
//            }
//        ]
//    },
//    activate:function(){
////        console.log('me11');
//    }
    extend: 'Ext.panel.Panel',
    layout: 'fit',
    items: [{
        xtype: 'box',
        autoEl: {
            tag: 'iframe',
//            src: 'http://www.vietcombank.com.vn/',
        },
    }]
});




