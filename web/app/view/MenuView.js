Ext.define(('vcb.view.MenuView'), { 
    extend: 'Ext.form.Panel',
    xtype:'MenuView',
    itemId: 'MenuView',
    items:[
        {
            minHeight:50,
            height:0,
            layout:{
              type:'hbox',
              align:'middle'
            },
            frame:false,
            padding:'5 0 0 0',
            border:false,
            items:[
                {
                        html:'<img src="./resources/img/html/VCBlogo.jpg" alt="logo1" class="logo_img" />',
//                        height:'100%',
//                        layout:'fit',
                        border:false
                },
                {
                        border:false,
                        layout:'fit',
                        padding:'0 0 0 5',
                        height:'100%',
                        html:'<FONT COLOR="#006400" align =center ><B>NGÂN HÀNG TMCP NGOẠI THƯƠNG VIỆT NAM - CHI NHÁNH LẠNG SƠN\n\
                                 </B><BR> <font> Địa chỉ: tầng 1 tòa nhà TTTM Phú Lộc, Khu dự án Phú Lộc IV, Phường Vĩnh Trại, Tp. Lạng Sơn</font>\n\
                                    <BR> <font> SĐT: 0253 859 859   FAX: 0253 866 555</font> </FONT>' ,
                        flex:1
                 }
            ]
        },
        {
            xtype:'toolbar',
            minHeight:30,
            items:[
                {
                    xtype: 'button',
                    text:'Trang chủ',
//                    flex:1,
                    handler:function (){
                        Ext.Router.redirect('home');
                    }
                },
//                {
//                    xtype:'splitbutton',
////                    hidden:true,
//                    itemId:'menuCongViec',
//                    text:'Công Việc',
////                    flex:1,
//                    menu: [
//                        {
////                            xtype: 'button',
//                            text:'Công việc',
//                            icon:'./resources/img/laptop.png',
//                            handler:function (){
//                                Ext.Router.redirect('CONGVIEC');
//                            }
//                        },
//                        {
////                            xtype: 'button',
//                            text:'Quản lý công việc',
//                            handler:function (){
//                                Ext.Router.redirect('QLBH');
//                                var storeNguoi=Ext.getStore('vcb.store.NguoiStore');
//                                storeNguoi.load({
//                                    params:{
//                                        HOTEN:-1,
//                                        PHONGBANID:-1,
//                                        NGUOIID:-1
//                                    }
//                                })
//                            }
//                        }
//                    ]
//                },
                {
                    xtype:'splitbutton',
//                    hidden:true,
                    itemId:'menuQTBH',
                    text:'Quản trị bán hàng',
//                    flex:1,
                    menu: [
                        {
//                            xtype: 'button',
                            text:'Trước bán hàng',
                            icon:'./resources/img/laptop.png',
                            handler:function (){
                                Ext.Router.redirect('QuanTriBanHang');
                            }
                        },
                        {
//                            xtype: 'button',
                            text:'Trong bán hàng',
                            icon:'./resources/img/laptop.png',
                            handler:function (){
                                Ext.Router.redirect('TrongQuanTriBanHang');
                            }
                        },
                        {
//                            xtype: 'button',
                            text:'Bán hàng',
                            handler:function (){
                                Ext.Router.redirect('QLBH');
                                var storeNguoi=Ext.getStore('vcb.store.NguoiStore');
                                storeNguoi.load({
                                    params:{
                                        HOTEN:-1,
                                        PHONGBANID:-1,
                                        NGUOIID:-1
                                    }
                                })
                            }
                        }
                    ]
                },
                {
                    xtype: 'button',
                    text:'Công văn',
                    hidden:true,
//                    flex:1,
                    handler:function (){
                        Ext.Router.redirect('CONGVAN');
                    }
                },
                 {
                    xtype:'splitbutton',
                    itemId:'menuBaoCao',
                    text:'Báo cáo',
//                    flex:1,
                    menu: [
                        {
                            text:'Thông tin tài sản thế chấp',
                            icon:'./resources/img/kyhan.png',
                            handler:function (){
                                Ext.Router.redirect('THONGTINTAISANTHECHAP');
                            }
                        },
                         {
                            text:'Tài khoản tiết kiệm',
                            icon:'./resources/img/kyhan.png',
                            handler:function (){
                                Ext.Router.redirect('TAIKHOANTIETKIEM');
                            }
                        },
                        {
                            text:'Kỳ hạn',
                            icon:'./resources/img/kyhan.png',
                            handler:function (){
                                Ext.Router.redirect('KYHAN');
                            }
                        },
                        {
                            text:'Chỉ tiêu huy động',
//                            xtype:'splitbutton',
                            icon:'./resources/img/bank.png',
                            menu:[
                                {
                                    text:'Xác nhận khách hàng huy động',
                                    icon:'./resources/img/confirm.png',
                                    handler:function (){
                                        Ext.Router.redirect('XACNHANKHACHHANG');
                                    }
                                },
                                {
                                    text:'Chỉ tiêu huy động từng cán bộ',
                                    icon:'./resources/img/diagram.png',
                                    handler:function (){
                                        Ext.Router.redirect('CHITIEUHUYDONG');
                                    }
                                },
                            ]
//                            handler:function (){
//                                Ext.Router.redirect('CHITIEUHUYDONG');
//                            }
                        }
                    ]
                },
                {
                    xtype: 'button',
                    text:'Quyền truy cập',
//                    flex:1,
                    hidden:true,
                    handler:function (){
                        Ext.Router.redirect('QTC');
                    }
                },
                {
                    xtype:'splitbutton',
                    itemId:'menuCaiDat',
                    text:'Cài đặt',
//                    flex:1,
                    menu: [
                        { 
                            text: 'Quản lý người dùng',
                            itemId:'menuQuanLyNguoiDung',
                            icon:'./resources/img/user.png',
//                            disabled :true,
                            handler:function (){
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
                                                            if(records[j].data.NUTID==7){
                                                                kt=1;
                                                                j=records.length
                                                            }
                                                        }
                                                        if(kt==1){
                                                            Ext.Router.redirect('QLND');
                                                        }else{
                                                            Ext.Msg.alert("Thông báo","Bạn không được phép vào chức năng này");
                                                        }
                                                    }
                                                })   
                                            }
                                        }
                                    })
//                                Ext.Router.redirect('QLND');
                            }
                        },
                        {
                            text: 'Quản lý Quyền',
                            itemId:'menuQuanLyQuyen',
                            icon:'./resources/img/pow.png',
//                            disable:true,
                            handler:function (){
//                                Ext.Router.redirect('QUYEN');
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
                                                            if(records[j].data.NUTID==13){
                                                                kt=1;
                                                                j=records.length
                                                            }
                                                        }
                                                        if(kt==1){
                                                            Ext.Router.redirect('QUYEN');
                                                        }else{
                                                            Ext.Msg.alert("Thông báo","Bạn không được phép vào chức năng này");
                                                        }
                                                    }
                                                })   
                                            }
                                        }
                                    })
                            }
                        },
                        { 
                            text: 'Phong ban',
                            itemId:'menuPhongBan',
                            icon:'./resources/img/Department.png',
//                            disabled :true,
                            handler:function (){
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
                                                            if(records[j].data.NUTID==14){
                                                                kt=1;
                                                                j=records.length
                                                            }
                                                        }
                                                        if(kt==1){
                                                            Ext.Router.redirect('PHONGBAN');
                                                        }else{
                                                            Ext.Msg.alert("Thông báo","Bạn không được phép vào chức năng này");
                                                        }
                                                    }
                                                })   
                                            }
                                        }
                                    })
                                
                            }
                        },
                        { 
                            text: 'Chức Vụ',
                            itemId:'menuChucVu',
                            icon:'./resources/img/status.png',
//                            disabled :true,
                            handler:function (){
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
                                                            if(records[j].data.NUTID==15){
                                                                kt=1;
                                                                j=records.length
                                                            }
                                                        }
                                                        if(kt==1){
                                                             Ext.Router.redirect('CHUCVU');
                                                        }else{
                                                            Ext.Msg.alert("Thông báo","Bạn không được phép vào chức năng này");
                                                        }
                                                    }
                                                })   
                                            }
                                        }
                                    })
                               
                            }
                        },
                        { 
                            text: 'Trạng thái',
                            itemId:'menuTrangThai',
                            icon:'./resources/img/status.png',
//                            disabled :true,
                            handler:function (){
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
                                                            if(records[j].data.NUTID==15){
                                                                kt=1;
                                                                j=records.length
                                                            }
                                                        }
                                                        if(kt==1){
                                                             Ext.Router.redirect('TRANGTHAI');
                                                        }else{
                                                            Ext.Msg.alert("Thông báo","Bạn không được phép vào chức năng này");
                                                        }
                                                    }
                                                })   
                                            }
                                        }
                                    })
                            }
                        },
                        { 
                            text: 'Quản lý chức danh',
                            itemId:'menuQuanLyChucDanh',
                            icon:'./resources/img/user.png',
//                            disabled :true,
                            handler:function (){
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
                                                            if(records[j].data.NUTID==7){
                                                                kt=1;
                                                                j=records.length
                                                            }
                                                        }
                                                        if(kt==1){
                                                            Ext.Router.redirect('QLCD');
                                                        }else{
                                                            Ext.Msg.alert("Thông báo","Bạn không được phép vào chức năng này");
                                                        }
                                                    }
                                                })   
                                            }
                                        }
                                    })
//                                Ext.Router.redirect('QLND');
                            }
                        }
                    ],
                    listeners: {
//                        menushow:function ( me, menu, eOpts ){
//                            var storePhanQuyen=Ext.getStore('vcb.store.PhanQuyenStore');
//                            for(var i=0;i<storePhanQuyen.data.length;i++){
//                                var quyenId=storePhanQuyen.data.items[i].data.QUYENID;
//                                if(quyenId==1){//quyền cài đặt tham số mới được phép dùng
//                                    me.up('MenuView').down('#menuQuanLyNguoiDung').setDisabled(false)
//                                    me.up('MenuView').down('#menuPhongBan').setDisabled(false)
//                                    me.up('MenuView').down('#menuChucVu').setDisabled(false)
//                                    me.up('MenuView').down('#menuTrangThai').setDisabled(false)
//                                }
//                            }
//                        }
                    }
                },
                {
                    xtype:'splitbutton',
                    itemId:'hoTro',
                    text:'Hỗ trợ',
                    menu: [
                        { 
                            text: 'Danh Sách đường dẫn',
                            itemId:'danhSachDuongDan',
                            icon:'./resources/img/IE.ico',
//                            disabled :true,
                            handler:function (){
                                Ext.Router.redirect('ListLink');
                            }
                        }
                    ]
                },
                
                {
                    xtype: 'button',
                    hidden:true,
                    text:'Quyền truy cập nghiệp vụ',
//                    flex:1,
                    handler:function (){
                        Ext.getCmp('CenterView').activateViewItem('QuyenTruyCapND', function () {
                            var itemview = Ext.create('vcb.view.QuyenTruyCapND.QuyenTruyCapND');
                            return itemview;
                        }, this);
                    }
                },
                {
                    xtype: 'button',
                    text:'Khuyến mãi',
//                    flex:1,
//                    hidden:true,
                    handler:function (){
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
                                                    if(records[j].data.NUTID==23){
                                                        kt=1;
                                                        j=records.length
                                                    }
                                                }
                                                if(kt==1){
                                                    Ext.Router.redirect('KHUYENMAI');
                                                }else{
                                                    Ext.Msg.alert("Thông báo","Bạn không được phép vào chức năng này");
                                                }
                                            }
                                        }); 
                                    }
                                }
                            });
                    }
                },
//                {
//                    xtype: 'button',
//                    text:'Test',
////                    flex:1,
////                    hidden:true,
//                    handler:function (){
//                        var kyhanUrl = 'TestPDFServlet';
//                        var form = document.createElement("form");			
//                        form.method = "POST";
//                        form.action = kyhanUrl;
//                        // biến truyền vào 
//                        var ngayTaoKyHan1 = document.createElement('input');				
//                        ngayTaoKyHan1.name = 'abc';
//                        ngayTaoKyHan1.value = "008427487";
//                        form.appendChild(ngayTaoKyHan1);
//                        //=======================================
//                        document.body.appendChild(form);
//                        form.submit();
//                        document.body.removeChild(form);
//                    }
//                },
                {
                    xtype:'container',
                    flex:1
                },
                {
                    xtype:'button',
                    text:'Thay đổi Mật khẩu',
                    handler:function (){
                       var show = Ext.create('Ext.window.Window', {
                            title: 'Thay đổi Mật khẩu',
                            itemId:'doiPass',
                            height: 200,
                            width: 300,
//                            layout: 'fit',
                            items: { 
                                xtype: 'container',
                                items:[
                                    {
                                        xtype: 'textfield',
                                        name:'matKhauCu',
                                        itemId:'matKhauCu',
                                        fieldLabel: 'Mật khẩu cũ',
            //                            value:'huan131089',
                                        inputType: 'password',
                                        margin:'15 6 0 35',
                                        anchor:'90%',
                                        listeners:{
                                            
                                        }
                                    },
                                    {
                                        xtype: 'textfield',
                                        name:'matKhauMoi',
                                        itemId:'matKhauMoi',
                                        fieldLabel: 'Mật khẩu mới',
            //                            value:'huan131089',
                                        inputType: 'password',
                                        margin:'15 6 0 35',
                                        anchor:'90%'
                                    },
                                    {
                                        xtype: 'textfield',
                                        name:'matKhauXacNhan',
                                        itemId:'matKhauXacNhan',
                                        fieldLabel: 'Xác nhận lại',
            //                            value:'huan131089',
                                        inputType: 'password',
                                        margin:'15 6 0 35',
                                        anchor:'90%'
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
                                                xtype: 'button',
                                                name:'luu',
                                                itemId:'luu',
                                                text:'Lưu',
                                                margin:'15 6 0 35',
//                                                cls:'search',
                                                flex:1,
                                                handler:function (){
                                                    var matKhauCu = Ext.util.MD5(this.up('#doiPass').down('#matKhauCu').getValue());
                                                    var matKhauMoi = Ext.util.MD5(this.up('#doiPass').down('#matKhauMoi').getValue());
                                                    var matKhauXacNhan = Ext.util.MD5(this.up('#doiPass').down('#matKhauXacNhan').getValue());
                                                    var UserId = App.Session.getUserID();
                                                    if(this.up('#doiPass').down('#matKhauMoi').getValue() == ''){
                                                        Ext.Msg.alert("Thông báo","Mật khẩu mới không được để trống");
                                                    }else{
                                                        if(matKhauCu == matKhauMoi){
                                                            Ext.Msg.alert("Thông báo","Mật khẩu mới giống Mật khẩu cũ");
                                                        }else{
                                                            if(matKhauMoi == matKhauXacNhan){
                                                                Core.thayDoiPassServlet(UserId,matKhauCu,matKhauMoi,function(options,success,response){
                                                                    if (success) {//kiem tra ket noi thanh cong khong 
                                                                        response = Ext.decode(response.responseText);
//                                                                        console.log(response);
                                                                        if(response.ResponseCode==0){// kiểm tra user tồn tại hay chưa 
                                                                            Ext.Msg.alert("Thông báo","Lưu Thành công");
                                                                            show.close();
                                                                        }else{
                                                                            Ext.Msg.alert("Thông báo","Lưu thất bại");
                                                                        }
                                                                    }
                                                                    else {//ket noi khong thanh cong 
                                                                        Ext.Msg.alert("Thông báo","Kết nối có vấn đề. Xin vui lòng xem lại!")
                                                                    }
                                                                });
                                                            }else{
                                                                Ext.Msg.alert("Thông báo","Xác nhận mật khẩu không giống nhau");
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                xtype: 'button',
                                                name:'thoat',
                                                itemId:'thoat',
                                                text:'Thoát',
                                                margin:'15 6 0 35',
                                                flex:1,
                                                handler:function (){
                                                    show.close();
                                                }
                                            }
                                        ]
                                    },
                                    
                                ]
                            }
                        }).show();
                    }
                },
                {
                    xtype:'button',
                    text:'Thoát',
                    handler:function (){
                        Ext.Router.redirect('');
                    }
                }
            ]
        }        
    ]
});


