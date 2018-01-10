Ext.define('vcb.view.QLCONGVAN.CVanView', { 
    extend: "Ext.form.Panel",
    xtype:'CVanView',
    itemId:'CVanView',
//    requires:[
//        'vcb.view.QLCONGVAN.CVanListView',
//        'vcb.view.QLCONGVAN.CVanDetailView'
//    ],
    config: {
        items:[
            {
                xtype:'fieldset',
                title: 'Điều kiện tìm kiếm',
                items:[
                    {
                        xtype:'textfield',
                        fieldLabel:'Số công văn',
                        itemId:'soCongVanTimKiem',
                        name:'soCongVanTimKiem'
                    },
                    {
                        xtype:'textfield',
                        fieldLabel:'Trích yếu',
                        itemId:'trichYeuTimKiem',
                        name:'trichYeuTimKiem'
                    }
                ]
            },
            {
                xtype:'container',
                layout:'hbox',
                items:[
                    {
                        xtype:'container',
                        flex:1
                    },
                    {
                        margin: '5 5 5 5',
                        xtype:'button',
                        text:'Tìm kiếm',
                        icon:'./resources/img/timkiem.png',
                        handler:function (){
                            
                        }
                    },
                    {
                        margin: '5 5 5 5',
                        xtype:'button',
                        text:'Thêm mới',
                        icon:'./resources/img/Add.png',
                        handler:function(){
                            Ext.getCmp('CenterView').activateViewItem('CVanDetailView',function() {
                                var itemview= Ext.create('vcb.view.QLCONGVAN.CVanDetailView');
                                return itemview;
                            }, this);
//                            this.up('form').showChiTietCVan();
                        }
                    }
                ]
            }
//            {
//                xtype:'CVanListView'
//            }
        ]
//        dockedItems: [
//            {
//                dock: 'bottom',
//                border: false,
//                layout:'hbox',
//                bodyStyle: 'background-color: transparent',
//                items:[
//                    {
////                        xtype:'filefield',
////                        padding:'10 10 10 10',
////                        msgTarget: 'side',
////                        allowBlank: false,
////                        anchor: '100%',
////                        buttonText: 'Chọn công văn',
//                        xtype:'container',
//                        flex:1
//                    },
//                    {
//                        xtype:'button',
//                        padding:'10 10 10 10',
//                        height:35,
//                        text:'Thêm công văn',
//                        flex:0.5,
//                        handler:function(){
//                            Ext.getCmp('CenterView').activateViewItem('CVanDetailView',function() {
//                                var itemview= Ext.create('vcb.view.QLCONGVAN.CVanDetailView');
//                                return itemview;
//                            }, this);
////                            this.up('form').showChiTietCVan();
//                        }
//                    }
//                ]
//            }
//        ],
//        showChiTietCVan:function (){
//            console.log('alo');
//            var form_search = Ext.create('Ext.window.Window', {           
//                closable: true,
//                maximizable: false,
//                height: 400,
//                bodyStyle:'background-color: white',
//                title:'Chi tiết công văn',
//                modal: true,
//                width: 400,
//                id: 'Show_Search_product',
//                layout: 'fit',
//                items:[{
//                        xtype:'CVanDetailView',
//                }]
//           });
//           form_search.show();
//        }
    //        {
    //            xtype:'filefield',
    //            padding:'10 10 10 10',
    //            msgTarget: 'side',
    //            allowBlank: false,
    //            anchor: '100%',
    //            buttonText: 'Chọn công văn'
    //        },
    //        {
    //            layout:'hbox',
    //            border:false,
    //            items:[
    //                {
    //                    flex:1,
    //                    xtype:'container'
    //                },
    //                {
    //                    xtype:'button',
    //                    text: 'Tải lên',
    //                    weidth:'100',
    //                    handler: function() {
    //                        var form = this.up('form').getForm();
    //                        if(form.isValid()){
    //                            form.submit({
    //                                url: 'photo-upload.php',
    //                                waitMsg: 'Uploading your photo...',
    //                                success: function(fp, o) {
    //                                    Ext.Msg.alert('Success', 'Your photo "' + o.result.file + '" has been uploaded.');
    //                                }
    //                            });
    //                        }
    //                    }
    //                },
    //                {
    //                    flex:0.05,
    //                    xtype:'container'
    //                }
    //            ]
    //        }
        
    }
 
});


