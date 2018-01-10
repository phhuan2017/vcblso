
Ext.define('vcb.view.BaoCao.CHITIEUHUYDONG.ChiTieuHuyDongTraiView', { 
    extend: "Ext.form.Panel",
    xtype:'ChiTieuHuyDongTraiView',
    itemId:'ChiTieuHuyDongTraiView',
    requires:[
        'vcb.view.Support.ListLinkGridView',
    ],
    config: {
        items:[
            {
                items:[
                    {
                        layout:'vbox',
                        xtype:'fieldset',
                        margin: '5 5 5 5',
                        title:'Điều kiện tìm kiếm',
                        items:[
                            {
                                xtype:'datefield',
                                margin: '5 0 5 0',
                                name:'ngayBaoCao',
                                maxValue:new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1),
                                itemId:'ngayBaoCao',
                                fieldLabel:'Ngày báo cáo',
                                editable:false,
                                flex:2
                            },
                            {
                                
                                displayField: 'name',
                                valueField: 'id',
                                xtype:'combobox',
                                margin: '5 0 5 0',
                                name:'loaiTienGui',
                                itemId:'loaiTienGui',
                                fieldLabel:'Loại tiền gửi',
                                editable:false,
                                value:"",
                                store:{
                                    fields: ['id', 'name'],
                                    data : [
                                        {"id":"", "name":"Tất cả"},
                                        {"id":"D", "name":"Không kỳ hạn"},
                                        {"id":"T", "name":"Kỳ hạn"}
                                    ] 
                                },
                                flex:2
                            },
                            {
                                xtype:'combobox',
                                margin:'5 0 5 0',
                                flex:1,
                                itemId:'phongBan',
                                name:'phongBan',
                                value:0,
                                store: Ext.getStore('vcb.store.PhongBanStore'),
                                displayField: 'TENPHONG',
                                valueField: 'PHONGBANID',
                                fieldLabel:'Phòng ban',
                                editable:false,
                                listeners:{
                                    select:function ( combo, records, eOpts ){
                                        var phongBanId = records[0].data.PHONGBANID;
                                        var storeNguoi=Ext.getStore('vcb.store.NguoiStore');
                                        storeNguoi.load({// tìm quyền của user
                                            params:{
                                                NGUOIID:0,
                                                HOTEN:'',
                                                PHONGBANID:phongBanId
                                            },
                                            callback: function(records, operation, success) {
//                                                console.log(records);
                                            }
                                        })
                                        
                                    }
                                }
                            },
                            {
                                xtype:'combobox',
                                margin: '5 0 5 0',
                                store:'vcb.store.NguoiStore',
        //                        queryMode: 'local',
                                displayField: 'HOTEN',
                                editable:false,
        //                        flex:1;
                                itemId:'canBo',
                                name:'canBo',
                                valueField: 'SELLERID',
                                fieldLabel:'Cán bộ',
//                                listeners:{
//                                    show:function ( me, eOpts ){
//                                        console.log('vao chưa ?');
//                                    }
//                                }
                            },
                            {
                                xtype:'textfield',
                                margin: '5 0 5 0',
                                name:'ten',
                                itemId:'ten',
                                fieldLabel:'Tên khách hàng',
                                flex:2
                            },
                            {
                                xtype:'textfield',
                                margin: '5 0 5 0',
                                name:'cif',
                                itemId:'cif',
                                fieldLabel:'Cif',
                                flex:2
                            },
                            {
                                xtype:'textfield',
                                margin: '5 0 5 0',
                                name:'soTaiKhoan',
                                itemId:'soTaiKhoan',
                                fieldLabel:'Số TK',
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
                                    var form=this.up('form');
                                    var tam=form.getValues().ngayBaoCao
                                    var thang=tam.slice(0,2)
                                    var ngay=tam.slice(3,5)
                                    var nam=tam.slice(8,10)
                                    var ngayBaoCao=ngay+thang+nam;
                                    var userId=App.Session.getUserID();//lấy thông tin user id đang đăng nhập
                                    var storePhanQuyen=Ext.getStore('vcb.store.PhanQuyenStore');
                                        storePhanQuyen.load({// tìm quyền của user
                                            params:{
                                                USERID:userId
                                            },
                                            callback: function(records, operation, success) {
                                                for(var i=0;i<records.length;i++){//chạy từng QuyenID
                                                    var kt=0;// biến kiểm tra
                                                    var quyenId=records[i].data.QUYENID
                                                    var storeMapQuyen=Ext.getStore('vcb.store.MapQuyenStore');//kiểm tra xem có nút đó không
                                                    storeMapQuyen.load({//tím tên người tạo
                                                        params:{
                                                            QUYENID:quyenId
                                                        },
                                                        callback: function(records, operation, success) {
                                                            var kt=0;// biến kiểm tra
                                                            for(var j=0;j<records.length;j++){
                                                                if(records[j].data.NUTID==18){
                                                                    kt=18;
                                                                    j=records.length
                                                                }
                                                            }
                                                            if(kt==18){
                                                                //Kiểm tra xem đã điền ngày tạo kỳ hạn chưa 
                                                                if(tam==''){//nếu chưa điền thông báo điền ngày tạo kỳ hạn
                                                                    Ext.Msg.alert("Thông báo","Bạn vui lòng chọn ngày Tạo báo cáo .");
                                                                }else{
                                                                    Ext.getCmp('CenterView').activateViewItem('TaiKhoanHuyDongChiTietView',function() {
                                                                        var itemview= Ext.create('vcb.view.BaoCao.CHITIEUHUYDONG.TaiKhoanHuyDongChiTietView');
                                                                        return itemview;
                                                                      }, this).hayghe(form);
                                                                }
                                                            }else{
                                                                Ext.Msg.alert("Thông báo","Bạn không có quyền ở chức năng này.");
                                                            }
                                                        }
                                                    })   
                                                }
                                            }
                                        })
                                } 
                            }
                        ]
                    }
                ]
            }
        ]
    },
    hayghe:function () {
        var me= this;
        var nguoiId=App.Session.getNguoiID();
        var userId=App.Session.getUserID();//lấy thông tin user id đang đăng nhập
        var storePhanQuyen=Ext.getStore('vcb.store.PhanQuyenStore');
            storePhanQuyen.load({// tìm quyền của user
                params:{
                    USERID:userId
                },
                callback: function(records, operation, success) {
                    for(var i=0;i<records.length;i++){//chạy từng QuyenID
                        var kt=0;// biến kiểm tra
                        var quyenId=records[i].data.QUYENID
                        var storeMapQuyen=Ext.getStore('vcb.store.MapQuyenStore');//kiểm tra xem có nút đó không
                        storeMapQuyen.load({//tím tên người tạo
                            params:{
                                QUYENID:quyenId
                            },
                            callback: function(records, operation, success) {
                                var kt=0;// biến kiểm tra
                                for(var j=0;j<records.length;j++){
                                    if(records[j].data.NUTID==22){
                                        kt=1;
                                        j=records.length
                                    }
                                }
                                if(kt==1){// 
                                    me.down('#canBo').setReadOnly(false)
                                }else{
                                    var nguoiStore=Ext.getStore('vcb.store.NguoiStore');
                                    me.down('#canBo').setReadOnly(true)
                                    //tìm kiếm seller id nếu thấy gán sellerid
                                    for(var i=0;i<nguoiStore.totalCount;i++){
                                        if(nguoiStore.data.items[i].data.NGUOIID == nguoiId){
                                            me.down('#canBo').setValue(nguoiStore.data.items[i].data.SELLERID)
                                        }
                                    }
                                }
                            }
                        })   
                    }
                }
            })
    }
});


