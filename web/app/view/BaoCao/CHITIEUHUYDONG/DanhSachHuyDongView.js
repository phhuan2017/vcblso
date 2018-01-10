Ext.define('vcb.view.BaoCao.CHITIEUHUYDONG.DanhSachHuyDongView',{
    extend: 'Ext.grid.Panel',
    itemId: 'DanhSachHuyDongView',
    xtype: 'DanhSachHuyDongView',
    border: false,
    height:500,
//    collapsed:true,
    autoScroll:true,
    store: Ext.getStore('vcb.store.ChiTieuHuyDongStore'),
    stripeRows: true,
    title: 'Danh sách các khách hàng đã gán sellerId',
    layout:'fit',
    requires:[
        'Ext.ux.Exporter',
//        'Ext.ux.Exporter.Button'
    ],
    config:{
        columns: [
            { xtype : 'checkcolumn',itemId:'chon',text: 'Chọn',  dataIndex: 'CHECK',flex: 0.5,
                listeners: {
                    checkchange:function (me, rowIndex, checked, eOpts ){
                        var record=me.up('DanhSachHuyDongView').store.data.items[rowIndex].data;
                        var TKTAM=record.TK
//                        var store2=Ext.getStore('vcb.store.ChiTieuHuyDongStore');
//                            store2.removeAt(rowIndex)
                        var store=Ext.getStore('vcb.store.HuyDongMuonphanStore');
                        var tam=0;// biến tạm để kiểm tra
//                        console.log(store.data);
                         for(var i=0;i<store.data.length;i++){// tìm kiếm xem có nút nào giống không
                            var TK=store.data.items[i].data.TK
//                            console.log(nutid);
                            if(TK==TKTAM){
                                tam=1;
                                i=store.data.length
                            }
                        }
                         if(tam==0){//nếu không có nút nào giống thì thêm
                             store.insert(0,record);
                         }else{//nếu có nút giống thì thông báo
                             Ext.Msg.alert("Thông báo",'Khách hàng này đã được chọn');
                         }
//                            store.insert(0,record);    
                    }
                } 
            },
            { 
                text: 'Số tài khoản', 
                dataIndex: 'TK',
//                locked   : true,
//                sortable : false,
                flex: 2
//                tooltip:
            },
            {
                text: 'Tên ', 
                dataIndex: 'TEN',
//                locked   : true,
//                sortable : false,
                flex: 3 
            },
            {
                text: 'Ngày mở TK', 
                dataIndex: 'DATOPN',
//                locked   : true,
//                sortable : false,
                flex: 2
            },
            { 
                text: 'Loại TK', 
                dataIndex: 'TKTYPE',
//                locked   : true,
//                sortable : false,
                flex: 1
//                tooltip:
            },
            {
                text: 'Loại tiền', 
                dataIndex: 'NT4',
//                locked   : true,
//                sortable : false,
                flex: 2
            },
            {
                text: 'Số tiền ', 
                xtype:'numbercolumn',
                dataIndex: 'XACBAL',
//                locked   : true,
//                sortable : false,
                flex: 2 
            },
//            {
//                text: 'Lãi Suất ', 
//                xtype:'numbercolumn',
//                dataIndex: 'XINRAT',
//                format :'0,000.00000',
////                locked   : true,
////                sortable : false,
//                flex: 2
//            },
//            {
//                text: 'Lãi cộng dồn ', 
//                xtype:'numbercolumn',
//                dataIndex: 'XOTACC',
//                
////                locked   : true,
////                sortable : false,
//                flex: 2 
//            },
            {
                text: 'Phòng seller', 
//                xtype:'numbercolumn',
                dataIndex: 'MAPHONG',
//                locked   : true,
//                sortable : false,
                flex: 3,
                renderer : function(val) {
                    var store = Ext.getStore('vcb.store.PhongBanStore')
                    for(var i=0;i<store.data.length;i++){
                        if(store.data.items[i].data.PHONGBANID == val){
                            return '<span style="color:blue;">' + val +"_"+ store.data.items[i].data.TENPHONG + '</span>'
                        }
                    }
//                    console.log(store.data.length)
//                    console.log(val);
                } 
            },
            {
                text: 'SellerId', 
//                xtype:'numbercolumn',
                dataIndex: 'SELLERID',
//                locked   : true,
//                sortable : false,
                flex: 3 ,
                renderer : function(val) {
                    var store = Ext.getStore('vcb.store.NguoiStore')
                    for(var i=0;i<store.data.length;i++){
                        if(store.data.items[i].data.SELLERID == val){
                            return '<span style="color:blue;">' + val +"_"+ store.data.items[i].data.HOTEN + '</span>'
                        }
                    }
//                    console.log(store.data.length)
//                    console.log(val);
                } 
            }
            
        ],
        features: [{ftype:'grouping'}],
        dockedItems: [
            {
                dock: 'bottom',
                height: 30,
                border: false,
                bodyStyle: 'background-color: transparent',
                items: [
                    {
                        xtype:'text',
                        name:'ghiChu',
                        itemId:'ghiChu',
//                        text:'<span style="color:red;"> Tổng:</span>',
//                        style: {
//                            width: '95%',
//                            marginBottom: '10px',
//                            color:'red'
//                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Xuất dữ liệu',
                        margin: 5,
                        name:'addproduct',
                        itemId:'addproducts',
                        cls: 'search_all',
//                        action:'addproduct',
                        icon:'./resources/img/excel.png',
                        handler:function (){
                            var ngayTaoBaoCao = App.Session.getNgayBaoCao();;
                            var loaiTienGui = App.Session.getLoaiTienGui();
                            var cif = App.Session.getCif();
                            var soTaiKhoan = App.Session.getSoTaiKhoan();
                            var sellerId = App.Session.getSellerId();
                            var phongBanId = App.Session.getPhongBanId();
                            var ten = App.Session.getTen();
//                            console.log(ngayTaoBaoCao);
                            var userId=App.Session.getUserID();//lấy thông tin user id đang đăng nhập
                            var storePhanQuyen=Ext.getStore('vcb.store.PhanQuyenStore');
//                                    exportStore(storePhanQuyen,'aa','xlsx')
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
                                                        if(records[j].data.NUTID==19){
                                                            kt=19;
                                                            j=records.length
                                                        }
                                                    }
                                                    if(kt==19){
                                                        //Kiểm tra xem đã điền ngày tạo kỳ hạn chưa 
                                                        if(ngayTaoBaoCao==''){//nếu chưa điền thông báo điền ngày tạo kỳ hạn
                                                            Ext.Msg.alert("Thông báo","Bạn vui lòng chọn ngày tạo kỳ hạn.");
                                                        }else{
                                                            var Url = 'ExportDanhSachHuyDongServlet';
                                                            var form = document.createElement("form");			
                                                            form.method = "POST";
                                                            form.action = Url;
                                                            // biến truyền vào 
                                                            var ngayTaoBaoCao1 = document.createElement('input');				
                                                            ngayTaoBaoCao1.name = 'ngayTaoBaoCao';
                                                            ngayTaoBaoCao1.value = ngayTaoBaoCao;
                                                            form.appendChild(ngayTaoBaoCao1);
//                                                            
                                                            var loaiTienGui1 = document.createElement('input');				
                                                            loaiTienGui1.name = 'loaiTienGui';
                                                            loaiTienGui1.value = loaiTienGui;
                                                            form.appendChild(loaiTienGui1);
                                                            
                                                            var cif1 = document.createElement('input');				
                                                            cif1.name = 'cif';
                                                            cif1.value = cif;
                                                            form.appendChild(cif1);
                                                            
                                                            var soTaiKhoan1 = document.createElement('input');				
                                                            soTaiKhoan1.name = 'soTaiKhoan';
                                                            soTaiKhoan1.value = soTaiKhoan;
                                                            form.appendChild(soTaiKhoan1);
                                                            
                                                            var sellerId1 = document.createElement('input');				
                                                            sellerId1.name = 'sellerId';
                                                            sellerId1.value = sellerId;
                                                            form.appendChild(sellerId1);
                                                            
                                                            var phongBanId1 = document.createElement('input');				
                                                            phongBanId1.name = 'phongBanId';
                                                            phongBanId1.value = phongBanId;
                                                            form.appendChild(phongBanId1);
                                                            
                                                            var ten1 = document.createElement('input');				
                                                            ten1.name = 'ten';
                                                            ten1.value = ten;
                                                            form.appendChild(ten1);
                                                            //=======================================
                                                            document.body.appendChild(form);
                                                            form.submit();
                                                            document.body.removeChild(form);
                                                        }
                                                    }else{
                                                        Ext.Msg.alert("Thông báo","Bạn không có quyền ở chức năng này.");
                                                    }
                                                }
                                            })   
                                        }
                                    }
                                })
//                            this.up('form').addParcel();
                        }
                    }
//                    {
//                        xtype: 'button',
//                        text: 'Thêm mới',
//                        margin: 5,
//                        name:'addproduct',
//                        itemId:'addproduct',
//                        id:'addproduct',
//                        cls: 'search_all',
//                        action:'addproduct',
//                        handler:function(){
//                            this.up('form').Add_New();
////                            Ext.getCmp('addproduct').disable();
//                            
//                        }
//                    },
//                    {
//                        xtype: 'button',
//                        text: 'Tìm kiếm',
//                        margin: 5,
//                        name:'searchproduct',
//                        itemId:'searchproduct',
//                        id:'searchproduct',
//                        cls: 'search_all',
//                        action:'searchproduct',
//                        handler:function(){
//                            this.up('form').showSearchForm();
//                        }
//                    }
                ]
            },
            {
                xtype: 'pagingtoolbar',
                store: 'vcb.store.ChiTieuHuyDongStore',   // same store GridPanel is using
                dock: 'bottom',
                width:50,
                displayMsg:'Tổng :',
                emptyMsg:'',
                beforePageText:'Trang',
                afterPageText:'Của {0}',
                displayInfo: true,
                listeners: {
                    beforechange:function ( me, page, eOpts ){
                        me.store.setProxy({
                            type:'ajax',
                            url: 'ChiTieuHuyDongServlet',
                            extraParams:{
                                ngayBaoCao:App.Session.getNgayBaoCao(),
                                loaiTienGui:App.Session.getLoaiTienGui(),
                                cif:App.Session.getCif(),
                                soTaiKhoan:App.Session.getSoTaiKhoan(),
                                sellerId:App.Session.getSellerId(),
                                phongBanId:App.Session.getPhongBanId(),
                                ten:App.Session.getTen()
                            },
                            reader: {
                                    type: 'json',
                                    root: 'data',
                                    totalProperty: 'total'
                            }
                        });
                    }
                }
            }
        ]
    }
});