Ext.define('vcb.view.QLCONGVAN.CVanListView', {
    extend:'Ext.form.Panel',
    border:false,
    autoScroll: true,
    xtype:'CVanListView',
    id:'CVanListView',
    itemId:'CVanListView',
    height:300,
    layout:'fit',
    config:{
        items:[{
                xtype: 'container',
                activeTab: 0,
                plain: false,
                items: [
                    {
                        xtype:'gridpanel',
                        itemId:'Product_Search_Store',
                        enableTextSelection: true,
                        //store:('vcb.store.ProductSearchStore'),
                        columns: [
                            {
                                text: 'STT',
                                flex:0.05,
                                //xtype:'rownumberer'
                            }, 
                            {
                                text: 'Nội dung công văn',
                                flex:1.7,
                                name: 'NDCVan',
                                //dataIndex: 'gtin'
                            },
                            {
                                text:'Ngày CV đến',
                                flex:1
                            },
                            {
                                text: 'Trạng thái',
                                flex:1.3
//                                name: 'allgtin',
                                //dataIndex: 'activateName'
                            }
                        ]
                    }
                ]
    }]
    }
});



