
Ext.define('vcb.view.KHUYENMAI.KhuyenMaiTraiView', { 
    extend: "Ext.form.Panel",
    xtype:'KhuyenMaiTraiView',
    itemId:'KhuyenMaiTraiView',
//    layout:'fit',
    requires:[
        'vcb.view.KHUYENMAI.DanhSachKhachHangKhuyenMaiView',
    ],
    config: {
        items:[
            {
                xtype:'tabpanel',
                items:[
                    {
                        title:'Thông tin khuyến mãi',
                        items:[
                        {
                            xtype:'fieldset',
                            margin: '5 5 5 5',
                            title:'Điều kiện tìm kiếm',
                            items:[
                                {
                                    xtype:'textfield',
                                    margin: '5 0 5 0',
                                    name:'soCIF',
                                    itemId:'soCIF',
                                    fieldLabel:'Số CIF',
                                    flex:2,
                                },
                                {
                                    xtype:'textfield',
                                    margin: '5 0 5 0',
            //                        hidden:true,
                                    name:'ten',
                                    itemId:'ten',
                                    fieldLabel:'Tên khách hàng',
                                    flex:2
                                }
                            ]
                        },
                        {
                            xtype:'container',
            //                flex:1,
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
                                        var form = this.up('form');
                                        var cif = form.getValues().soCIF;
                                        App.Session.setCif(cif);
                                        var ten=form.getValues().ten;
                                        App.Session.setTen(ten);
                                        var khuyenMaiStore=Ext.getStore('vcb.store.khuyenMai2Store');
                                        khuyenMaiStore.load({//tìm tên người cập nhật
                                            params:{
                                                cif:cif,
                                                ten:ten
                                            },
                                            callback: function(records, operation, success) {
                                            }
                                          })
                                    }
                                }
                            ]
                        },
                        {
                            xtype:'DanhSachKhachHangKhuyenMaiView',
                            listeners: {
                                itemclick:function ( me, record, item, index, e, eOpts ){
                    //                console.log(record.data);
                                    Ext.getCmp('CenterView').activateViewItem('KhuyenMaiChiTietView',function() {
                                        var itemview= Ext.create('vcb.view.KHUYENMAI.KhuyenMaiChiTietView');
                                        return itemview;
                                      }, this).hayghe(record.data);
                                }
                            }
                        }

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
                                    text:'Thêm ',
                                    icon:'./resources/img/Add.png',
                                    handler:function (){
                                        Ext.getCmp('CenterView').activateViewItem('KhuyenMaiChiTietView',function() {
                                            var itemview= Ext.create('vcb.view.KHUYENMAI.KhuyenMaiChiTietView');
                                            return itemview;
                                          }, this).hayghe('');
                                    }
                                }
                            ]
                        }
                    ]
                    },
                    {
                       title:'Báo cáo',
                       items:[
                           {
                                xtype:'fieldset',
                                margin: '5 5 5 5',
                                title:'Báo cáo quà đã trả',
                                items:[
                                    {
                                        xtype:'datefield',
                                        margin: '5 0 5 0',
                                        name:'tuNgayLichSu',
                                        value:new Date(),
        //                                maxValue:new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1),
                                        itemId:'tuNgayLichSu',
                                        fieldLabel:'Từ ngày',
                                        editable:false,
                                        flex:2,
//                                        listeners: {
//                                            change:function ( me, newValue, oldValue, eOpts ){
//                                                console.log(newValue);
//                                            }
//                                        }
                                    },
                                    {
                                        xtype:'datefield',
                                        margin: '5 0 5 0',
                                        name:'denNgayLichSu',
                                        value:new Date(),
        //                                maxValue:new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1),
                                        itemId:'denNgayLichSu',
                                        fieldLabel:'Đến ngày',
                                        editable:false,
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
                                        text:'Xuất dữ liệu',
                                        icon:'./resources/img/excel.png',
                                        handler:function (){
                                            var form = this.up('form').getValues();
                                            var tuNgayLichSu = form.tuNgayLichSu;
                                            var denNgayLichSu = form.denNgayLichSu;
                                            var Url = 'KhuyenMai_XuatDuLieu_Qua_Servlet';
                                            var form = document.createElement("form");			
                                            form.method = "POST";
                                            form.action = Url;

                                            var tuNgay = document.createElement('input');				
                                            tuNgay.name = 'tuNgay';
                                            tuNgay.value = tuNgayLichSu;
                                            form.appendChild(tuNgay);
                                            
                                            var denNgay = document.createElement('input');				
                                            denNgay.name = 'denNgay';
                                            denNgay.value = denNgayLichSu;
                                            form.appendChild(denNgay);
                                            //=======================================
                                            document.body.appendChild(form);
                                            form.submit();
                                            document.body.removeChild(form);
                                        }
                                    },
                                    {
                                        margin: '5 5 5 5',
                                        xtype:'button',
                                        text:'Tìm kiếm',
                                        icon:'./resources/img/timkiem.png',
                                        handler:function (){
                                            var form = this.up('form').getValues();
                                            var tuNgayLichSu = form.tuNgayLichSu;
                                            var denNgayLichSu = form.denNgayLichSu;
                                            App.Session.setTuNgayLichSu(tuNgayLichSu);
                                            App.Session.setDenNgayLichSu(denNgayLichSu);
                                            if(tuNgayLichSu>denNgayLichSu){
                                                Ext.Msg.alert("Thông báo","Từ ngày phải nhỏ hơn hoặc bằng đến ngày");
                                            }else{
                                                var khuyenMai_BaoCao_Store=Ext.getStore('vcb.store.khuyenMai_BaoCao_Store');
                                                khuyenMai_BaoCao_Store.load({//tìm tên người cập nhật
                                                    params:{
                                                        tuNgay:tuNgayLichSu,
                                                        denNgay:denNgayLichSu
                                                    },
                                                    callback: function(records, operation, success) {
                                                        Ext.getCmp('CenterView').activateViewItem('DanhSachQua_BaoCao_View',function() {
                                                            var itemview= Ext.create('vcb.view.KHUYENMAI.DanhSachQua_BaoCao_View');
                                                            return itemview;
                                                          }, this);
                                                    }
                                                  })
                                            }
                                        }
                                    }
                                ]
                            }
                       ]
                    }
                ]
            }
        ]
        
    }
 
});


