Ext.define('vcb.view.QLTRANGTHAI.QLTrangThaiView', { 
    extend: "Ext.form.Panel",
    xtype:'QLTrangThaiView',
    itemId:'QLTrangThaiView',
    config: {
        items:[
            {
                xtype:'tabpanel',
                items:[
                    {
                        title:'Trạng thái',
                        items:[
                            {
                                layout:'hbox',
                                xtype:'fieldset',
                                margin: '5 5 5 5',
                                title:'Điều kiện tìm kiếm',
                                items:[
                                    {
                                        xtype:'textfield',
                                        margin: '5 0 5 0',
                                        name:'tenTrangThai',
                                        itemId:'tenTrangThai',
                                        fieldLabel:'Tên trạng thái',
                                        flex:2
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
                                            var form = this.up('form').getForm();
                                            var MOTA=form.getValues().tenTrangThai;
//                                            console.log(MOTA);
                                            var storeTrangThai=Ext.getStore('vcb.store.TrangThaiStore');
                                            storeTrangThai.load({
                                                params:{
                                                    MOTA:MOTA
                                                }
                                            })
                                        }
                                    }
                                ]
                            },
                            {
                                xtype:'grid',
                                title: 'Danh sách Trạng thái',
                                alignTo:'c',
                                store: Ext.getStore('vcb.store.TrangThaiStore'),
                                columns: [
                                    { text: 'ID',  dataIndex: 'TRANGTHAIID' },
                                    { text: 'Tên', dataIndex: 'MOTA', flex: 1 },
                                ],
                                listeners: {
                                    itemclick:function (me, record, item, index){
//                                        console.log(record);
                                        Ext.getCmp('CenterView').activateViewItem('QLTrangThaiChiTietView',function() {
                                            var itemview= Ext.create('vcb.view.QLTRANGTHAI.QLTrangThaiChiTietView');
//                                            var maTrangThai=record.data.TRANGTHAIID;
//                                            var MOTA=record.data.MOTA;
//                                            var ngayTao=record.data.NGAYTAO;
//                                            var ngaycapnhat=record.data.NGAYCAPNHAT;
//                                            var nguoiTao=record.data.USERTAO;
//                                            var nguoiCapNhat=record.data.USERCAPNHAT;
//                                            var nguoiTao1=App.Session.timNguoi(nguoiTao);
//                                            console.log(nguoiTao1);
//                                            itemview.down('#maTrangThai').setValue(maTrangThai);
//                                            itemview.down('#tenTrangThai').setValue(MOTA);
//                                            itemview.down('#ngayTao').setValue(ngayTao);
//                                            itemview.down('#ngayCapNhat').setValue(ngaycapnhat);
//                                            itemview.down('#nguoiCapNhat').setValue(nguoiCapNhat);
//                                            itemview.down('#nguoiTao').setValue(nguoiTao);
                                            return itemview;
                                          }, this).hayghe(record);
                                    }
                                }
                                
                            }
                        ]
                    }
//                    {
//                        title:'Nhóm Trạng thái',
//                        items:[        
//                            {
//                                layout:'hbox',
//                                xtype:'fieldset',
//                                margin: '5 5 5 5',
//                                title:'Điều kiện tìm kiếm',
//                                items:[
//                                    {
//                                        xtype:'textfield',
//                                        margin: '5 0 5 0',
//                                        fieldLabel:'Tên nhóm',
//                                        flex:2
//                                    }
//                                ]
//                            },
//                            {
//                                xtype:'container',
//                                layout:'hbox',
//                                items:[
//                                    {
//                                        xtype:'container',
//                                        flex:1
//                                    },
//                                    {
//                                        margin: '5 5 5 5',
//                                        xtype:'button',
//                                        text:'Tìm kiếm',
//                                        icon:'./resources/img/timkiem.png'
//                                    }
//                                ]
//                            }
////                            {
////                                xtype:'grid',
////                                title: 'Danh sách nhóm',
////                                
////                                columns: [
////                                    { text: 'ID',  dataIndex: 'name' },
////                                    { text: 'Tên', dataIndex: 'email', flex: 1 },
////                                    { text: 'Mô tả', dataIndex: 'phone' }
////                                ]
////                            }
//                        ]
//                    }
                ]
            }
//            {
////                layout:'hbox',
//                xtype:'fieldset',
//                margin: '5 5 5 5',
//                title:'Điều kiện tìm kiếm',
//                items:[
//                    {
//                        xtype:'textfield',
//                        margin: '5 0 5 0',
//                        fieldLabel:'Tên trạng thái',
//                        flex:2
//                    },
//                    
//                    
//                ]
//            },
//            {
//                xtype:'container',
//                layout:'hbox',
//                items:[
//                    {
//                        xtype:'container',
//                        flex:1
//                    },
//                    {
//                        margin: '5 5 5 5',
//                        xtype:'button',
//                        text:'Tìm kiếm',
//                        icon:'./resources/img/timkiem.png',
//                        
//                    }
//                ]
//            },
//            {
//                xtype:'grid',
//                title: 'Danh sách Trạng thái',
//                columns: [
//                    { text: 'ID',  dataIndex: 'name' },
//                    { text: 'Tên', dataIndex: 'email', flex: 1 },
//                    { text: 'Mô tả', dataIndex: 'phone' }
//                ],
//            },
            
        ],
        dockedItems: [
            {
                xtype:'container',
                dock: 'bottom',
                layout:'hbox',
                items:[
                    {
                        xtype:'container',
                        flex:1
                    },
                    {
                        margin: '5 5 5 5',
                        xtype:'button',
                        text:'Thêm mới',
                        icon:'./resources/img/Add.png',
//                        flex: 0.7,
                        handler:function (){
                            Ext.getCmp('CenterView').activateViewItem('QLTrangThaiChiTietView',function() {
                              var itemview= Ext.create('vcb.view.QLTRANGTHAI.QLTrangThaiChiTietView');
//                              console.log(itemview);
                              return itemview;
                            }, this).hayghe(-1);
                        }
                    }
//                    {
//                        margin: '5 5 5 5',
//                        xtype:'button',
//                        text:'Thêm nhóm',
//                        icon:'./resources/img/Add.png',
////                        flex: 0.7,
//                        handler:function (){
////                            Ext.getCmp('CenterView').activateViewItem('QLTrangThaiChiTietView',function() {
////                              var itemview= Ext.create('vcb.view.QLTrangThaiChiTietView');
////                              return itemview;
////                            }, this);
//                        }
//                    }
                ]
            },
        ]
    }
 
});


