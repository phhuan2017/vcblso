Ext.define('vcb.view.QLND.QLNDChiTietView', { 
    extend: "Ext.form.Panel",
    xtype:'QLNDChiTietView',
    itemId:'QLNDChiTietView',
    layout: 'fit',
    requires:[
        'vcb.view.QLND.DanhSachQuyenView',
        'vcb.view.QLND.DanhSachPhanQuyenView'
    ],
    config: {
        items:[
            {
                xtype:'tabpanel',
                items:[
                    {
                        title: 'Thông tin người dùng',
                        items:[
                            {
                                xtype:'fieldset',
                                margin:'5 5 5 5',
                                itemId:'thongTinNguoiDung',
                                title:'Thông tin người dùng',
                                items:[
                                    {
                                        xtype:'container',
                                        layout:'hbox',
                                        items:[
                                            {
                                                xtype:'textfield',
                                                margin:'5 5 5 5',
                                                flex:1,
                                                itemId:'hoTenND',
                                                name:'hoTenND',
                                                fieldLabel:'Họ tên ND'
                                            },
                                            {
                                                xtype:'container',
                                                flex:0.1
                                            },
                                            {
                                                xtype:'datefield',
                                                margin:'5 5 5 5',
                                                itemId:'ngaySinh',
                                                name:'ngaySinh',
                                                flex:1,
                                                fieldLabel:'Ngày sinh',
                                                editable:false,
                                                format:'d-m-Y'
                                            }
                                        ]
                                    },
                                    {
                                        xtype:'container',
                                        layout:'hbox',
                                        items:[
                                            {
                                                xtype:'textfield',
                                                margin:'5 5 5 5',
                                                itemId:'soCMT',
                                                name:'soCMT',
                                                flex:1,
                                                fieldLabel:'Số CMT'
                                            },
                                            {
                                                xtype:'container',
                                                flex:0.1
                                            },
                                            {
                                                xtype:'combobox',
                                                margin:'5 5 5 5',
                                                itemId:'chucVu',
                                                name:'chucVu',
                                                store: Ext.getStore('vcb.store.ChucVuStore'),
                                                valueField: 'maChucVu',
                                                displayField: 'tenChucVu',
                                                flex:1,
                                                fieldLabel:'Chức vụ',
                                                editable:false
                                            }
                                        ]
                                    },
                                    {
                                        xtype:'container',
                                        layout:'hbox',
                                        items:[
                                            {
                                                xtype:'combobox',
                                                margin:'5 5 5 5',
                                                flex:1,
                                                itemId:'phongBan',
                                                name:'phongBan',
                                                store: Ext.getStore('vcb.store.PhongBanStore'),
                                                displayField: 'TENPHONG',
                                                valueField: 'PHONGBANID',
                                                fieldLabel:'Phòng ban',
                                                editable:false
                                            },
                                            {
                                                xtype:'container',
                                                flex:0.1
                                            },
                                            {
                                                xtype:'textfield',
                                                margin:'5 5 5 5',
                                                itemId:'moTa',
                                                name:'moTa',
                                                flex:1,
                                                fieldLabel:'Địa chỉ'
                                            }
                                        ]
                                    },
                                    {
                                        xtype:'container',
                                        layout:'hbox',
                                        items:[
                                            {
                                                xtype:'textfield',
                                                margin:'5 5 5 5',
                                                itemId:'ngayTao',
                                                name:'ngayTao',
                                                readOnly:true,
                                                flex:1,
                                                fieldLabel:'Ngày tạo'
                                            },
                                            {
                                                xtype:'container',
                                                flex:0.1
                                            },
                                            {
                                                xtype:'textfield',
                                                margin:'5 5 5 5',
                                                itemId:'nguoiTao',
                                                name:'nguoiTao',
                                                flex:1,
                                                readOnly:true,
                                                fieldLabel:'Người tạo'
                                            }
                                            
                                        ]
                                    },
                                    {
                                        xtype:'container',
                                        layout:'hbox',
                                        items:[
                                            {
                                                xtype:'textfield',
                                                margin:'5 5 5 5',
                                                itemId:'ngayCapNhat',
                                                name:'ngayCapNhat',
                                                readOnly:true,
                                                flex:1,
                                                fieldLabel:'Ngày cập nhật'
                                            },
                                            {
                                                xtype:'container',
                                                flex:0.1
                                            },
                                            {
                                                xtype:'textfield',
                                                margin:'5 5 5 5',
                                                itemId:'nguoiCapNhat',
                                                readOnly:true,
                                                name:'nguoiCapNhat',
                                                flex:1,
                                                fieldLabel:'Người cập nhật'
                                            },
                                            {
                                                xtype:'textfield',
                                                margin:'5 5 5 5',
                                                itemId:'capNhatHayUpdate',
                                                name:'capNhatHayUpdate',
                                                flex:1,
                                                fieldLabel:'capNhatHayUpdate',
                                                hidden:true
                                            },
                                            {
                                                xtype:'textfield',
                                                margin:'5 5 5 5',
                                                itemId:'nguoiId',
                                                name:'nguoiId',
                                                flex:1,
                                                fieldLabel:'nguoiID',
                                                hidden:true
                                            }
                                        ]
                                    },
                                    {
                                        xtype:'container',
        //                                dock: 'bottom',
                                        layout:'hbox',
                                        items:[
                                            {
                                                xtype:'textfield',
                                                margin:'5 5 5 5',
                                                itemId:'sellerId',
                                                name:'sellerId',
                                                flex:1,
                                                fieldLabel:'sellerId',
                                            },
                                            {
                                                xtype:'container',
                                                flex:1
                                            },
                                            {
                                                margin: '5 5 5 5',
                                                xtype:'button',
                                                text:'Lưu người dùng',
                                                icon:'./resources/img/Save.png',
                //                                        flex: 0.5,
                                                handler:function (){
                                                    var form=this.up('form');
//                                                    var tenTruyCap=form.getValues().tenTruyCap;
//                                                    var trangThaiND=form.getValues().trangThaiND;
//                                                    var myPassword =Ext.util.MD5(form.getValues().matKhau);
                                                    var hoTenND=form.getValues().hoTenND;
                                                    var User=App.Session.getUserID();
                                                    var ngaySinh=form.getValues().ngaySinh;
                                                    var CMT=form.getValues().soCMT;
                                                    var chucVu=form.getValues().chucVu;
                                                    var phongBan=form.getValues().phongBan;
                                                    var moTa=form.getValues().moTa;
                                                    var nguoiId=form.getValues().nguoiId;
                                                    var sellerId=form.getValues().sellerId
                                                    var capNhatHayUpdate=form.getValues().capNhatHayUpdate;
                                                    if(hoTenND==''){Ext.Msg.alert("Thông báo","Ban chưa nhập họ tên người dùng");}
                                                    else{
                                                        if(ngaySinh==''){Ext.Msg.alert("Thông báo","Ban chưa nhập ngày sinh");}
                                                        else {
                                                            if(CMT==''){Ext.Msg.alert("Thông báo","Ban chưa nhập số CMT");}
                                                            else{
                                                                if(chucVu==''){Ext.Msg.alert("Thông báo","Ban chưa nhập chức vụ");}
                                                                else{
                                                                    if(phongBan==''){Ext.Msg.alert("Thông báo","Ban chưa nhập phòng ban");}
                                                                    else{
                                                                        if(capNhatHayUpdate==0){//nếu capNhatHayUpdate = 0 thì thêm mới người dùng
                                                                            Core.themNguoiDungServlet(User,hoTenND,ngaySinh,CMT,chucVu,phongBan,moTa,sellerId,function(options,success,response){
                                                                                if (success) {//kiem tra ket noi thanh cong khong 
                                                                                    response = Ext.decode(response.responseText);
                                //                                                    console.log(response);
                                                                                    if(response.ResponseCode==0){// kiểm tra user tồn tại hay chưa 
                                                                                        var store=Ext.getStore('vcb.store.NguoiStore')
                                                                                        store.load();
                                                                                        Ext.Msg.alert("Thông báo","Lưu Thành công");

                                                                                    }else{
                                                                                        Ext.Msg.alert("Thông báo"," them nguoi dung"+response.ResponseName);
                                                                                    }
                                                                                }
                                                                                else {//ket noi khong thanh cong 
                                                                                    Ext.Msg.alert("Thông báo","Kết nối có vấn đề. Xin gui lòng xem lại!")
                                                                                }
                                                                            });
                                                                        }else{//nếu capNhatHayUpdate=1 thì cấp nhật người dùng
                                                                            Core.capNhatNguoiDungServlet(User,hoTenND,ngaySinh,CMT,chucVu,phongBan,moTa,nguoiId,sellerId,function(options,success,response){
                                                                                if (success) {//kiem tra ket noi thanh cong khong 
                                                                                    response = Ext.decode(response.responseText);
                                                                                    if(response.ResponseCode == 0){// kiểm tra user tồn tại hay chưa 
                                                                                        var store=Ext.getStore('vcb.store.NguoiStore')
                                                                                        store.load();
                                                                                        Ext.Msg.alert("Thông báo","Lưu Thành công");

                                                                                    }else{
                                                                                        Ext.Msg.alert("Thông báo",response.ResponseName);
                                                                                    }
                                                                                }
                                                                                else {//ket noi khong thanh cong 
                                                                                    Ext.Msg.alert("Thông báo","Kết nối có vấn đề. Xin gui lòng xem lại!")
                                                                                }
                                                                            });
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype:'fieldset',
                                margin: '5 5 5 5',
                                name:'quanLyUser',
                                itemId:'quanLyUser',
                                title:'Quản lý User',
                                autoScroll:true,
                                layout:'hbox',
                                items:[
                                    {
                                       xtype:'fieldset',
                                       margin:'5 5 5 5',
                                       title:'Danh sách User',
                                       flex:1,
                                       layout:'fit',
                                       items:[
                                           {
                                               xtype:'grid',
                                               flex:1,
                                               minHeight:150,
                                               store: Ext.getStore('vcb.store.UserStore'),
                                               columns: [
                                                   { text: 'Tên truy cập', dataIndex: 'user_name',flex:1},
                                                   { text: 'Trạng thái', dataIndex: 'MOTA_TRANGTHAI',flex:1 }
                                               ],
                                               listeners: {
                                                    itemclick:function (me, record, item, index){
                                                        me.up('#QLNDChiTietView').down('#tenTruyCap').setValue(record.data.user_name);
                                                        me.up('#QLNDChiTietView').down('#matKhau').setValue(record.data.pass_word);
                                                        me.up('#QLNDChiTietView').down('#trangThaiND').setValue(record.data.TRANGTHAIID);
                                                        me.up('#QLNDChiTietView').down('#userId').setValue(record.data.USERID);
                                                    }
                                                }
                                           }
                                       ]
                                    },
                                    {
                                        xtype:'fieldset',
                                        margin:'5 5 5 5',
                                        title:'Thông tin chi tiết',
                                        flex:1,
                                        layout:'fit',
                                        items:[
                                            {
                                                xtype:'textfield',
                                                margin:'5 5 5 5',
                                                name:'tenTruyCap',
                                                itemId:'tenTruyCap',
//                                                flex:1,
                                                fieldLabel:'Tên truy cập'
                                            },
                                            
                                            {
                                                xtype:'container',
                                                layout:'hbox',
                                                items:[
                                                    {
                                                        xtype:'textfield',
                                                        margin:'5 5 5 5',
                                                        flex:1,
                                                        itemId:'matKhau',
                                                        name:'matKhau',
                                                        inputType: 'password',
                                                        fieldLabel:'Mật khẩu'
                                                    },
                                                    {
                                                        xtype:'checkboxfield',
                                                        itemId:'thayDoiMatKhau',
                                                        name:'thayDoiMatKhau',
                                                        boxLabel  : 'Thay đổi ?',
                                                    }
                                                ]
                                            },
                                            {
                                                xtype:'combobox',
                                                margin:'5 5 5 5',
//                                                flex:1,
                                                fieldLabel:'Trạng thái',
                                                name:'trangThaiND',
                                                itemId:'trangThaiND',
                                                store:'vcb.store.TrangThaiStore',
                                                displayField: 'MOTA',
                                                valueField: 'TRANGTHAIID',
                                                editable:false
                                            },
                                            {
                                                xtype:'textfield',
                                                margin:'5 5 5 5',
                                                fieldLabel:'userID',
                                                name:'userId',
                                                itemId:'userId',
                                                hidden:true
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
                                                        text:'Phân quyền',
                                                        icon:'./resources/img/Add.png',
                                //                        flex: 0.7,
                                                        handler:function (){
                                                            var form=this.up('form');
                                                            var userId=this.up('QLNDChiTietView').down('#userId').getValue();
                                                            var storeQuyen=Ext.getStore('vcb.store.QuyenStore')
                                                            var userPhanQuyenId=App.Session.getUserID();
//                                                            console.log(storeQuyen);
                                                            
                                                            if(userId!=''){
                                                                for(var i=0;i<storeQuyen.data.length;i++){
                                                                    var quyenId=storeQuyen.data.items[i].data.QUYENID;
                                                                    Core.themPhanQuyenServlet(userId,quyenId,userPhanQuyenId,function(options,success,response){
                                                                        if (success) {//kiem tra ket noi thanh cong khong 
                                                                            response = Ext.decode(response.responseText);
                                                        //                    console.log(response.data[0]);
                                                                            if(response.ResponseCode==0){// kiểm tra user tồn tại hay chưa 
                                                                                Ext.getStore('vcb.store.PhanQuyenStore').
                                                                                load({
                                                                                    params:{
                                                                                        USERID:userId,
                                                                                    }
                                                                                });
                                                                                 Ext.getStore('vcb.store.ChuaPhanQuyenStore').load({
                                                                                    params:{
                                                                                        USERID:userId,
                                                                                    }
                                                                                });
                                                                            }else{
                                                                                Ext.Msg.alert("Thông báo",response.ResponseName);
                                                                            }
                                                                        }
                                                                        else {//ket noi khong thanh cong 
                                                                            Ext.Msg.alert("Thông báo","Kết nối có vấn đề. Xin gui lòng xem lại!")
                                //                                            show_PhanQuyen.close();
                                                                        }
                                                                    });
                                                                }
                                                                //reset store phân quyền
                                                                
//                                                               
//                                                                //Tạo form show_PhanQuyen
                                                                form.show_PhanQuyen();
//                                                                console.log(form);
//                                                                //truyền giá trị vào cho UserPhanQuyenId
                                                                Ext.getCmp('userPhanQuyenId').setValue(userId);
                                                            }else{
                                                                Ext.Msg.alert('Thông báo','Vui lòng chọn 1 user để phân quyền');
                                                            }
                                                            
                                                        }
                                                    },
                                                    {
                                                        margin: '5 5 5 5',
                                                        xtype:'button',
                                                        text:'Thêm mới',
                                                        icon:'./resources/img/Add.png',
                                //                        flex: 0.7,
                                                        handler:function (){
                                                            this.up('QLNDChiTietView').down('#tenTruyCap').setValue('');
                                                            this.up('QLNDChiTietView').down('#matKhau').setValue('');
                                                            this.up('QLNDChiTietView').down('#trangThaiND').setValue(2);
                                                            this.up('QLNDChiTietView').down('#userId').setValue('');
                                                        }
                                                    },
                                                    {
                                                        margin: '5 5 5 5',
//                                                        flex:1,
                                                        xtype:'button',
                                                        text:'Lưu User',
                                                        icon:'./resources/img/Save.png',
                                                        handler:function (){
                                                            var form=this.up('form');
                                                            var myPassword =form.getValues().matKhau;
                                                            var tenTruyCap=form.getValues().tenTruyCap;
                                                            var trangThai=form.getValues().trangThaiND;
                                                            var nguoiId=form.getValues().nguoiId;
                                                            var userId=form.getValues().userId;
                                                            var User=App.Session.getUserID();
                                                            var thayDoiMatKhau=form.getValues().thayDoiMatKhau
                                                            if(userId==''){//nếu userId='' đang thêm mới user
                                                                myPassword=Ext.util.MD5(myPassword);
                                                            }else{// đang cập nhật
                                                                if(thayDoiMatKhau=='on'){//on là muốn thay đổi mật khẩu
                                                                    myPassword=Ext.util.MD5(myPassword);//mã hóa lại pass mới
                                                                }
                                                            }
                                                            if(nguoiId!=''){
                                                                if(tenTruyCap==''){
                                                                    Ext.Msg.alert("Thông báo","Tên truy cập không được để rỗng");
                                                                }else{
                                                                    Core.themUserServlet(tenTruyCap,myPassword,trangThai,nguoiId,User,userId,function(options,success,response){
                                                                        if (success) {//kiem tra ket noi thanh cong khong 
                                                                            response = Ext.decode(response.responseText);
                        //                                                    console.log(response);
                                                                            if(response.success==true){// kiểm tra user tồn tại hay chưa 
                                                                                var storeUser= Ext.getStore('vcb.store.UserStore');
                                                                                storeUser.load({
                                                                                        params:{
                                                                                            NGUOIID:nguoiId
                                                                                        }
                                                                                })
                                                                                Ext.Msg.alert("Thông báo","Lưu Thành công");
                                                                            }else{
                                                                                Ext.Msg.alert("Thông báo","Lưu thất bại");
                                                                            }
                                                                        }
                                                                        else {//ket noi khong thanh cong 
                                                                            Ext.Msg.alert("Thông báo","Kết nối có vấn đề. Xin vui lòng xem lại!")
                                                                        }
                                                                    });
                                                                }
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
                    },
                    
                ]
            }
        ],
        hayghe:function (data){
            var me = this;
            me.getForm().reset();
            if(data==0){//nếu bấm nút thêm mới
                this.down('#hoTenND').setValue(HOTEN);
                this.down('#ngaySinh').setValue(NGAYSINH);
                this.down('#soCMT').setValue(CMT);
                this.down('#moTa').setValue(DIACHI);
                this.down('#ngayTao').setValue(NGAYTAO);
                this.down('#ngayCapNhat').setValue(NGAYCAPNHAT);
                this.down('#quanLyUser').setDisabled(true) ;
                this.down('#capNhatHayUpdate').setValue(data);
                this.down('#nguoiId').setValue(NGUOIID);
                var storeUser=Ext.getStore('vcb.store.UserStore');
                storeUser.load({//tím tên người tạo
                    params:{
                        NGUOIID:-2
                    }
                })
//                this.down('#hoTenND').setValue('');
//                this.down('#ngaySinh').setValue('');
//                this.down('#soCMT').setValue('');
//                this.down('#chucVu').setValue(1);
//                this.down('#phongBan').setValue(1);
//                this.down('#moTa').setValue('');
//                this.down('#ngayTao').setValue('');
//                this.down('#nguoiTao').setValue('');
//                this.down('#ngayCapNhat').setValue('');
//                this.down('#nguoiCapNhat').setValue('');
            }else{//click phòng ban
//                console.log(data);
                this.down('#quanLyUser').setDisabled(false) ;
                var CHUCVU=data.data.CHUCVU;
                var DIACHI=data.data.DIACHI;
                var HOTEN=data.data.HOTEN;
                var NGAYCAPNHAT=data.data.NGAYCAPNHAT;
                var NGAYSINH=data.data.NGAYSINH;
                var NGAYTAO=data.data.NGAYTAO;
                var NGUOIID=data.data.NGUOIID;
                var PHONGBANID=data.data.PHONGBANID;
                var TRANGTHAIID=data.data.TRANGTHAIID;
                var USERCAPNHAT=data.data.USERCAPNHAT;
                var CMT=data.data.CMT;
                var USERTAO=data.data.USERTAO;
                var SELLERID=data.data.SELLERID;
                this.down('#chucVu').setValue(CHUCVU);
                this.down('#hoTenND').setValue(HOTEN);
                this.down('#ngaySinh').setValue(NGAYSINH);
                this.down('#soCMT').setValue(CMT);
                this.down('#moTa').setValue(DIACHI);
                this.down('#ngayTao').setValue(NGAYTAO);
                this.down('#ngayCapNhat').setValue(NGAYCAPNHAT);
                this.down('#phongBan').setValue(PHONGBANID);
                this.down('#capNhatHayUpdate').setValue(data);
                this.down('#nguoiId').setValue(NGUOIID);
                this.down('#sellerId').setValue(SELLERID);
                
                var storeNguoi=Ext.getStore('vcb.store.Nguoi_TimKiemStore');
//                console.log(storeNguoi);
                storeNguoi.load({//tím tên người tạo
                    params:{
                        USERID:USERTAO
                    },
                    callback: function(records, operation, success) {
//                        console.log(records);
                        if(records.length>0){
                            me.down('#nguoiTao').setValue(records[0].data.HOTEN);
                        }
                    }
                })
                if(USERCAPNHAT=='')
                {
                    me.down('#nguoiCapNhat').setValue('');
                }else{
                    var storeNguoi2=Ext.getStore('vcb.store.Nguoi_TimKiemStore');
                    storeNguoi2.load({//tìm tên người cập nhật
                        params:{
                            USERID:USERCAPNHAT
                        },
                        callback: function(records, operation, success) {
//                            console.log(records);
                           if(records.length>0){
                                me.down('#nguoiCapNhat').setValue(records[0].data.HOTEN);
                            }
                        }
                    })
                }
//                var storeNguoi=Ext.getStore('vcb.store.NguoiStore');
////                console.log(storeNguoi)
//                storeNguoi.load({//tím tên người tạo
//                    params:{
//                        NGUOIID:'0'
//                    }
//                })
                var storeUser=Ext.getStore('vcb.store.UserStore');
                storeUser.load({//tím tên người tạo
                    params:{
                        NGUOIID:NGUOIID
                    }
                })
            }
        },
        show_PhanQuyen:function (data){
        var show_PhanQuyen = Ext.create('Ext.window.Window', {
//            closable: true,
            maximizable: true,
            height: 400,
            width: 800,
            title:'Phân Quyền',
            modal: true,
            id: 'show_PhanQuyen',
            itemId:'show_PhanQuyen',
            requires:[
                'vcb.view.QLND.DanhSachQuyenView',
                'vcb.view.QLND.DanhSachPhanQuyenView'
            ],
//            layout: 'fit',
//            autoScroll:true,
            items: [
                {
                    xtype:'fieldset',
                    titile:'Phân Quyền',
                    layout:'hbox',
                    items:[
                        {
                            xtype:'fieldset',
                            title:'Danh sách quyền',
//                            itemId:'phanQuyen',
                            margin:'5 5 5 5',
                            flex:1,
                            items:[
                                {
                                    xtype:'DanhSachQuyenView',
                                    listeners: {
                                        checkchange:function (me, rowIndex, checked, eOpts ){
                                            var record=me.up('DanhSachQuyenView').store.data.items[rowIndex].data;
                                            var store=Ext.getStore('vcb.store.QuyenStore');
                                            store.removeAt(rowIndex)
                                            var store2=Ext.getStore('vcb.store.PhanQuyenStore');
                                            store2.insert(0,record);
                                        }
                                    }
                                },
                            ]
                        },
                        {
                            xtype:'fieldset',
                            title:'Danh dách các quyền đã Phân',
//                            itemId:'phanQuyen',
                            margin:'5 5 5 5',
                            flex:1,
                            items:[
                                {
                                    xtype:'DanhSachPhanQuyenView',
                                    listeners: {
                                        checkchange:function (me, rowIndex, checked, eOpts ){
                                            var record=me.up('DanhSachPhanQuyenView').store.data.items[rowIndex].data;
                                            var store=Ext.getStore('vcb.store.PhanQuyenStore');
                                            store.removeAt(rowIndex)
                                            var store2=Ext.getStore('vcb.store.QuyenStore');
                                            store2.insert(0,record);
                                        }
                                    }
                                },
                                {
                                    xtype:'textfield',
                                    id:'userPhanQuyenId',
                                    hidden:true
                                }
                            ]
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
                            xtype:'button',
                            margin:'5 5 5 5',
                            text:'lưu',
                            icon:'./resources/img/Save.png',
                            handler:function (){
                                var userId=this.up('#show_PhanQuyen').down('#userPhanQuyenId').getValue();
                                var storePQ=Ext.getStore('vcb.store.PhanQuyenStore');
                                var storeChuaphan=Ext.getStore('vcb.store.ChuaPhanQuyenStore')
                                var userPhanQuyenId=App.Session.getUserID();
                                //lưu tất các các quyền chưa phân
                                for(var i=0;i<storeChuaphan.data.length;i++){
                                    var quyenId=storeChuaphan.data.items[i].data.QUYENID;
//                                    console.log(quyenId);
                                    Core.themChuaPhanQuyenServlet(userId,quyenId,userPhanQuyenId,0,function(options,success,response){
                                        if (success) {//kiem tra ket noi thanh cong khong 
                                            response = Ext.decode(response.responseText);
                        //                    console.log(response.data[0]);
                                            if(response.ResponseCode==0){// kiểm tra user tồn tại hay chưa 
//                                                Ext.Msg.alert("Thông báo","Lưu thành công");
                                            }else{
                                                Ext.Msg.alert("Thông báo",response.ResponseName);
//                                                show_PhanQuyen.close();
                                            }
                                        }
                                        else {//ket noi khong thanh cong 
                                            Ext.Msg.alert("Thông báo","Kết nối có vấn đề. Xin gui lòng xem lại!")
//                                            show_PhanQuyen.close();
                                        }
                                    });
                                }   
                                // lưu tất cả các quyền đã phân với trạng thái =1
                                for(var i=0;i<storePQ.data.length;i++){
                                    var quyenId=storePQ.data.items[i].data.QUYENID;
//                                    console.log(quyenId);
                                    Core.themChuaPhanQuyenServlet(userId,quyenId,userPhanQuyenId,1,function(options,success,response){
                                        if (success) {//kiem tra ket noi thanh cong khong 
                                            response = Ext.decode(response.responseText);
                        //                    console.log(response.data[0]);
                                            if(response.ResponseCode==0){// kiểm tra user tồn tại hay chưa 
                                                Ext.Msg.alert("Thông báo","Lưu thành công");
                                            }else{
                                                Ext.Msg.alert("Thông báo",response.ResponseName);
//                                                show_PhanQuyen.close();
                                            }
                                        }
                                        else {//ket noi khong thanh cong 
                                            Ext.Msg.alert("Thông báo","Kết nối có vấn đề. Xin gui lòng xem lại!")
//                                            show_PhanQuyen.close();
                                        }
                                    });
                                }   
                                
                            }
                        },
                        {
                            xtype:'button',
                            margin:'5 5 5 5',
                            text:'thoát',
                            handler:function (){
                                show_PhanQuyen.close();
                            }
                        }
                    ]
                }
            ]
        }
        );
        show_PhanQuyen.show();
    }
    }
});


