Ext.define('vcb.view.BaoCao.CHITIEUHUYDONG.DanhSachHuyDongMuonPhanView',{
    extend: 'Ext.grid.Panel',
    itemId: 'DanhSachHuyDongMuonPhanView',
    xtype: 'DanhSachHuyDongMuonPhanView',
    border: false,
    height:200,
//    collapsed:true,
    autoScroll:true,
    store: Ext.getStore('vcb.store.HuyDongMuonphanStore'),
    stripeRows: true,
    title: 'Danh sách khách hàng huy động muốn thay đổi sellerId',
    layout:'fit',
    requires:[
        'Ext.ux.Exporter',
//        'Ext.ux.Exporter.Button'
    ],
    config:{
        columns: [
            { xtype : 'checkcolumn',itemId:'chon',text: 'Chọn',  dataIndex: 'CHECK',flex:0.5,
                listeners: {
                    checkchange:function (me, rowIndex, checked, eOpts ){
                         var record=me.up('DanhSachHuyDongMuonPhanView').store.data.items[rowIndex].data;
                         var store2=Ext.getStore('vcb.store.HuyDongMuonphanStore');
                         store2.removeAt(rowIndex)
//                             var store=Ext.getStore('vcb.store.ChiTieuHuyDongStore');
//                             store.insert(0,record);
                    }
                } 
            },
            { 
                text: 'Số tài khoản', 
                dataIndex: 'TK',
//                locked   : true,
                sortable : false,
                flex: 3
//                tooltip:
            },
            {
                text: 'Tên ', 
                dataIndex: 'TEN',
//                locked   : true,
                sortable : false,
                flex: 3 
            },
            { 
                text: 'Loại Tài khoản', 
                dataIndex: 'TKTYPE',
//                locked   : true,
                sortable : false,
                flex: 1
//                tooltip:
            },
            {
                text: 'Số tiền ', 
                xtype:'numbercolumn',
                dataIndex: 'XACBAL',
//                locked   : true,
                sortable : false,
                flex: 3
            }
        ],
        dockedItems: [
            {
                xtype:'container',
                layout:'hbox',
                dock: 'bottom',
                items:[
                    {
                        xtype:'combobox',
                        margin: '5 5 5 5',
                        store:'vcb.store.NguoiStore',
//                        queryMode: 'local',
                        displayField: 'HOTEN',
                        editable:false,
                        flex:1,
//                        layout:'fit',
                        itemId:'sellerId',
                        name:'sellerId',
                        valueField: 'SELLERID',
                        fieldLabel:'cán bộ',
                        listeners:{
                            select:function ( combo, records, eOpts ){
                                this.up('#DanhSachHuyDongMuonPhanView').down('#maPhong').setValue(records[0].data.PHONGBANID);
                            }
                        }
                    },
                    {
                        xtype:'textfield',
                        hidden:true,
                        itemId:'maPhong',
                        name:'maPhong'
                    },
                    {
                        xtype:'container',
                        flex:1
                    },
                    {
                        margin: '5 5 5 5',
                        xtype:'button',
                        text:'Lưu',
                        icon:'./resources/img/Save.png',
                        handler:function (){
                            var sellerId = this.up('#DanhSachHuyDongMuonPhanView').down('#sellerId').getValue();
                            var maPhong = this.up('#DanhSachHuyDongMuonPhanView').down('#maPhong').getValue();
                            var nguoiId=App.Session.getNguoiID();
//                            console.log(sellerId);
                            var trangThai=1;
                            // Phân quyền nút lưu
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
                                                        if(records[j].data.NUTID==21){
                                                            kt=1;
                                                            j=records.length
                                                        }
                                                    }
                                                    if(kt==1){// tức là có thể thay đổi 
                                                        if(sellerId==null){
                                                            Ext.Msg.alert("Thông báo","Vui lòng chọn cán bộ muốn gán sellerId");
                                                        }else{
                                                            if(sellerId==""){
                                                                Ext.Msg.alert("Thông báo","Cán bộ mà bạn chọn chưa có sellerId vui lòng kiểm tra lại");
                                                            }
                                                            else{
                                                                var store = Ext.getStore('vcb.store.HuyDongMuonphanStore');
                            //                                    console.log();
                                                                for(var i=0;i<store.data.length;i++){
                                                                   var tk=store.data.items[i].data.TK
                                                                   Core.themMoiMapSellerIdServlet(sellerId,maPhong,trangThai,nguoiId,tk,function(options,success,response){
                                                                        if (success) {//kiem tra ket noi thanh cong khong 
                                                                            response = Ext.decode(response.responseText);
                                        //                                                    console.log(response);
                                                                            if(response.ResponseCode==0){// kiểm tra user tồn tại hay chưa 
                            //                                                    console.log(i);
                            //                                                    if(i+1 ==store.data.length){
                            //                                                       console.log('ádasdasd');
                            //                                                    }
                                                                            }else{
                                                                                Ext.Msg.alert("Thông báo"," Gán sellerId"+response.ResponseName);
                                                                            }
                                                                        }
                                                                        else {//ket noi khong thanh cong 
                                                                            Ext.Msg.alert("Thông báo","Kết nối có vấn đề. Xin gui lòng xem lại!")
                                                                        }
                                                                    });

                                                                }
                                                                Ext.Msg.alert("Thông báo","Cập thông tin thành công!")
                                                                //=======================================================================
                                                                //xóa toàn bộ dữ liệu cũ trong store
                                                                var HuyDongMuonphanStore=Ext.getStore('vcb.store.HuyDongMuonphanStore')
                                                                HuyDongMuonphanStore.removeAll();
                                                                HuyDongMuonphanStore.sync()
                                                                //=======================================================================
                                                            }
                                                        }
                                                    }else{
                                                        Ext.Msg.alert("Thông báo","Bạn không có quyền thực hiện chức năng này!")
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
});