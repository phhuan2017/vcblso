Ext.define('vcb.view.KHUYENMAI.KhuyenMaiChiTietView', { 
    extend: "Ext.form.Panel",
    xtype:'KhuyenMaiChiTietView',
    itemId:'KhuyenMaiChiTietView',
    layout: 'fit',
    requires:[
        'vcb.view.KHUYENMAI.DanhSachQuaKhuyenMaiView',
        'vcb.view.KHUYENMAI.DanhSachQuaKhuyenMaiDaNhanView',
        'vcb.view.KHUYENMAI.DanhSachTaiKhoanTietKiemView'
    ],
    config: {
        items:[
            {
                xtype:'tabpanel',
                items:[
                    {
                        xtype:'container',
                        autoScoll:true,
                        title:'Thông tin khách hàng',
//                        layout:'vbox',
                        items:[
                            {
                                xtype:'fieldset',
                                margin: '5 5 5 5',
                                title:'Thông tin khách hàng',
                                items:[
                                    {
                                        xtype:'container',
                                        layout:'hbox',
                                        items:[
                                            {
                                                xtype:'textfield',
                                                itemId:'cif',
                                                name:'cif',
                                                minLength:9,
                                                maxLength:9,
                                                emptyText:'Nhập đủ 9 ký tự',
                                                margin:'5 5 5 5',
                                                flex:1,
                                                fieldLabel:'Cif',
                                                hideTrigger: true,
                                                keyNavEnabled: false,
                                                mouseWheelEnabled: false,
                                                listeners:{
                                                    change:function ( me, newValue, oldValue, eOpts ){
                                                       
                                                       if(newValue.length==9){
                                                           //tìm thông tin khách hàng khuyến mãi tiết kiệm
                                                           var khachHangStore=Ext.getStore('vcb.store.KhachHangTietKiemKhuyenMaiStore');
                                                            khachHangStore.load({//tìm tên người cập nhật
                                                                params:{
                                                                    cif:newValue
                                                                },
                                                                callback: function(records, operation, success) {
                                                                        
                                                                }
                                                              })
                                                            //reset lại thông tin qùa
                                                            var QuaKhuyenMaiDaNhanStore=Ext.getStore('vcb.store.QuaKhuyenMaiDaNhanStore');
                                                            QuaKhuyenMaiDaNhanStore.load({//tìm tên người cập nhật
                                                                params:{
                                                                    cif:newValue
                                                                },
                                                                callback: function(records, operation, success) {
                                                                }
                                                              })
                                                            
                                                           // xem lại thông tin khách hàng
                                                           var khuyenMaiStore=Ext.getStore('vcb.store.khuyenMaiStore');
                                                            khuyenMaiStore.load({//tìm tên người cập nhật
                                                                params:{
                                                                    cif:newValue,
                                                                    ten:''
                                                                },
                                                                callback: function(records, operation, success) {
//                                                                    console.log(records)
                                                                    // Gán giá trị khách hàng store  
                                                                    if(records.length == 0){// nếu chưa có cif này ta tim ở cơ sở dữ liệu
                                                                        var store=Ext.getStore('vcb.store.khachHangStore');
                                                                        store.load({//tìm tên người cập nhật
                                                                            params:{
                                                                                cif:newValue,
                                                                                ten:''
                                                                            },
                                                                            callback: function(records, operation, success) {
                                                                                if(records.length==1){
                                                                                    var ngayCapCMT=App.Session.namThangNgay(records[0].data.NGAYCAP);
                                                                                    me.up('#KhuyenMaiChiTietView').down('#cif').setValue(records[0].data.CFNO);
                                                                                    me.up('#KhuyenMaiChiTietView').down('#diaChi').setValue(records[0].data.DIACHI);
                                                                                    me.up('#KhuyenMaiChiTietView').down('#ngayCap').setValue(ngayCapCMT);
                                                                                    me.up('#KhuyenMaiChiTietView').down('#cmt').setValue(records[0].data.SOCMT);
                                                                                    me.up('#KhuyenMaiChiTietView').down('#tenKhachHang').setValue(records[0].data.TEN);
                                                                                    me.up('#KhuyenMaiChiTietView').down('#soDienThoai').setValue(records[0].data.SODIENTHOAI);
                                                                                    me.up('#KhuyenMaiChiTietView').down('#diemTichLuy').setValue(0);
                                                                                    me.up('#KhuyenMaiChiTietView').down('#diemDaDung').setValue(0);
                                                                                    me.up('#KhuyenMaiChiTietView').down('#noiCap').setValue('');
                                                                                }
                                                                            }
                                                                          })
                                                                    }else{
                                                                        me.up('#KhuyenMaiChiTietView').down('#cif').setValue(records[0].data.CIF);
                                                                        me.up('#KhuyenMaiChiTietView').down('#diaChi').setValue(records[0].data.DIACHI);
                                                                        me.up('#KhuyenMaiChiTietView').down('#ngayCap').setValue(records[0].data.NGAYCAP);
                                                                        me.up('#KhuyenMaiChiTietView').down('#cmt').setValue(records[0].data.SOCMT);
                                                                        me.up('#KhuyenMaiChiTietView').down('#tenKhachHang').setValue(records[0].data.TENKHACHANG);
                                                                        me.up('#KhuyenMaiChiTietView').down('#soDienThoai').setValue(records[0].data.SODIENTHOAI); 
                                                                        me.up('#KhuyenMaiChiTietView').down('#diemTichLuy').setValue(records[0].data.SODIEMTICHLUY);
                                                                        me.up('#KhuyenMaiChiTietView').down('#diemDaDung').setValue(records[0].data.SODIEMDADUNG);
                                                                        me.up('#KhuyenMaiChiTietView').down('#noiCap').setValue(records[0].data.NOICAP);
                                                                    }
                                                                }
                                                              })
                                                              me.up('#KhuyenMaiChiTietView').down('#soTaiKhoan').setValue('');
                                                              me.up('#KhuyenMaiChiTietView').down('#soTienTietKiem').setValue('');
                                                              me.up('#KhuyenMaiChiTietView').down('#loaiTietKiem').setValue(1);
                                                              me.up('#KhuyenMaiChiTietView').down('#kyHan').setValue(1);
                                                              me.up('#KhuyenMaiChiTietView').down('#soDiemTichLuy').setValue(0);
                                                       }
                                                    }
                                                }
                                            },
                                            {
                                                xtype:'textfield',
                                                itemId:'tenKhachHang',
                                                name:'tenKhachHang',
//                                                readOnly:'true',
                                                margin:'5 5 5 5',
                                                flex:1,
                                                fieldLabel:'Tên Khách hàng'
                                            },
                                            {
                                                xtype:'textfield',
                                                itemId:'soDienThoai',
                                                name:'soDienThoai',
                                                margin:'5 5 5 5',
                                                flex:1,
                                                fieldLabel:'Số điện thoại'
                                            },
                                        ]
                                    },
                                    {
                                        xtype:'container',
                                        layout:'hbox',
                                        items:[
                                            {
                                                xtype:'textfield',
                                                itemId:'cmt',
                                                name:'cmt',
//                                                readOnly:'true',
                                                margin:'5 5 5 5',
                                                flex:1,
                                                fieldLabel:'CMT/Giấy tờ'
                                            },
                                            {
                                                xtype:'datefield',
                                                itemId:'ngayCap',
                                                name:'ngayCap',
                                                format :'d/m/Y',
                                                emptyText:'Ngày/Tháng/Năm',
//                                                editable:false,
                                                margin:'5 5 5 5',
                                                flex:1,
                                                fieldLabel:'Ngày Cấp'
                                            },
                                            {
                                                xtype:'textfield',
                                                itemId:'noiCap',
                                                name:'noiCap',
                                                margin:'5 5 5 5',
                                                flex:1,
                                                fieldLabel:'Nơi cấp'
                                            },
                                            
                                        ]
                                    },
                                    {
                                        xtype:'container',
                                        layout:'hbox',
                                        items:[
                                            {
                                                xtype:'textfield',
                                                itemId:'diaChi',
                                                name:'diaChi',
                                                margin:'5 5 5 5',
//                                                layout:'fit',
                                                flex:2,
                                                fieldLabel:'Địa chỉ:'
                                            }
                                        ]
                                    },
                                    {
                                        xtype:'container',
                                        layout:'hbox',
                                        items:[
                                            {
                                                xtype:'textfield',
                                                itemId:'diemTichLuy',
                                                name:'diemTichLuy',
                                                readOnly:'true',
                                                margin:'5 5 5 5',
                                                flex:1,
                                                fieldLabel:'Số điểm tích lũy',
                                                listeners:{
                                                    change:function ( me, newValue, oldValue, eOpts ){
                                                        var diemDaDung = me.up('#KhuyenMaiChiTietView').down('#diemDaDung').getValue();
                                                        me.up('#KhuyenMaiChiTietView').down('#diemConLai').setValue(newValue-diemDaDung);
                                                    }
                                                }
                                            },
                                            {
                                                xtype:'textfield',
                                                itemId:'diemDaDung',
                                                name:'diemDaDung',
                                                readOnly:'true',
                                                margin:'5 5 5 5',
                                                flex:1,
                                                fieldLabel:'Số điểm đã dùng',
                                                listeners:{
                                                    change:function ( me, newValue, oldValue, eOpts ){
                                                        var diemTichLuy = me.up('#KhuyenMaiChiTietView').down('#diemTichLuy').getValue();
                                                        me.up('#KhuyenMaiChiTietView').down('#diemConLai').setValue(diemTichLuy-newValue);
                                                    }
                                                }
                                            },
                                            {
                                                xtype:'textfield',
                                                itemId:'diemConLai',
                                                name:'diemConLai',
                                                readOnly:'true',
                                                margin:'5 5 5 5',
                                                flex:1,
                                                fieldLabel:'Số điểm còn lại',
                                                listeners:{
                                                    change:function ( me, newValue, oldValue, eOpts ){
//                                                        console.log(newValue);
                                                        var store=Ext.getStore('vcb.store.QuaKhuyenMaiStore');
                                                        store.load({//QuaKhuyenMaiStore
                                                            params:{
                                                                soDiem:newValue
                                                            },
                                                            callback: function(records, operation, success) {
//                                                                console.log(records)
                                                            }
                                                        })
                                                    }
                                                }
//                                                 
                                            }
                                        ]
                                    },
                                    {
                                        xtype:'container',
                                        layout:'hbox',
                                        items:[
                                            {
                                                xtype:'DanhSachQuaKhuyenMaiView',
                                                margin:'5 5 5 5',
                                                flex:1
                                            },
                                            {
                                                xtype:'DanhSachQuaKhuyenMaiDaNhanView',
                                                margin:'5 5 5 5',
                                                flex:1
                                            },
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype:'fieldset',
                                margin: '5 5 5 5',
                                title:'Thông tin tiết kiệm',
                                items:[
                                    {
                                        xtype:'fieldset',
//                                        title:'Thông tin chi tiết',
                                        items:[
                                            {
                                                xtype:'container',
                                                layout:'hbox',
                                                items:[
                                                    {
                                                        xtype:'textfield',
                                                        itemId:'soTaiKhoan',
                                                        name:'soTaiKhoan',
                                                        emptyText:'Nhập đủ 13 ký tự',
                                                        minLength:13,
                                                        maxLength:13,
        //                                                readOnly:'true',
                                                        margin:'5 5 5 5',
                                                        flex:1,
                                                        fieldLabel:'Số tài khoản',
                                                        hideTrigger: true,
                                                        keyNavEnabled: false,
                                                        mouseWheelEnabled: false
                                                    },
                                                    {
                                                        xtype:'numberfield',
                                                        itemId:'soTienTietKiem',
                                                        name:'soTienTietKiem',
        //                                                emptyText:'Nhập đủ 9 ký tự',
                                                        margin:'5 5 5 5',
                                                        flex:1,
                                                        fieldLabel:'Số tiền tiết kiệm',
                                                        hideTrigger: true,
                                                        keyNavEnabled: false,
                                                        mouseWheelEnabled: false,
                                                        listeners:{
                                                            change:function ( me, newValue, oldValue, eOpts ){
                                                                // lấy thông tin hệ số
                                                                var heSo=0
                                                                var store = Ext.getStore('vcb.store.KyHanStore');
        //                                                        console.log(store.data.items[0].data)
                                                                for(var i=0;i<store.data.items.length;i++){
                                                                    if(store.data.items[i].data.loaiId == me.up('#KhuyenMaiChiTietView').down('#kyHan').getValue()){
                                                                        var heSo=store.data.items[i].data.heSo;
                                                                    }
                                                                }
                                                                //lấy thông tin loại tiết kiệm
                                                                var loaiTietKiem=me.up('#KhuyenMaiChiTietView').down('#loaiTietKiem').getValue();
                                                                //lấy thông tin số chia
                                                                var soChia=1;
                                                                if(loaiTietKiem == 1){// tức là gửi mới 100%
                                                                    soChia=20000000;
                                                                }else{
                                                                    if(loaiTietKiem == 2){
                                                                        soChia=40000000;
                                                                    }else{
                                                                        soChia=0;
                                                                    }
                                                                }
                                                                //tính số điểm tích lũy
                                                                var soTichLuy=(newValue/soChia)*heSo;
                                                                //gán số tích lũy 
                                                                me.up('#KhuyenMaiChiTietView').down('#soDiemTichLuy').setValue(soTichLuy);
                                                            }
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                xtype:'container',
                                                layout:'hbox',
                                                items:[
                                                    {
                                                        xtype:'combobox',
                                                        itemId:'loaiTietKiem',
                                                        name:'loaiTietKiem',
                                                        margin:'5 5 5 5',
                                                        flex:1,
                //                                                queryMode: 'local',
                                                        editable:false,
                                                        value:1,
                                                        displayField: 'tenLoai',
                                                        valueField: 'loaiId',
                                                        store:{
                                                            fields: ['loaiId', 'tenLoai'],
                                                            data : [
                                                                {"loaiId":1, "tenLoai":"Gửi mới 100%"},
                                                                {"loaiId":2, "tenLoai":"Tất toán gửi lại 100%"},
                                                                {"loaiId":3, "tenLoai":"Loại khác"}
                                                            ]
                                                        },
                                                        fieldLabel:'Loại Tiết kiệm',
                                                        listeners:{
                                                            change:function ( me, newValue, oldValue, eOpts ){
                                                                //nếu =3 thì được điền ở trường Số điểm tích lũy còn lại không được điền
                                                                if(newValue!=3){
                                                                    me.up('#KhuyenMaiChiTietView').down('#soDiemTichLuy').setEditable(false)
                                                                }else{
                                                                    me.up('#KhuyenMaiChiTietView').down('#soDiemTichLuy').setEditable(true)
                                                                }
                                                                //==========================================================================
                                                                // lấy thông tin hệ số
                                                                var heSo=0
                                                                var store = Ext.getStore('vcb.store.KyHanStore');
        //                                                        console.log(store.data.items[0].data)
                                                                for(var i=0;i<store.data.items.length;i++){
                                                                    if(store.data.items[i].data.loaiId == me.up('#KhuyenMaiChiTietView').down('#kyHan').getValue()){
                                                                        var heSo=store.data.items[i].data.heSo;
                                                                    }
                                                                }
                                                                //lấy thông tin số chia
                                                                var soChia=1;
                                                                if(newValue == 1){// tức là gửi mới 100%
                                                                    soChia=20000000;
                                                                }else{
                                                                    if(newValue == 2){
                                                                        soChia=40000000;
                                                                    }else{
                                                                        soChia=0;
                                                                    }
                                                                }

                                                                //Số tiền
                                                                var soTienTietKiem=me.up('#KhuyenMaiChiTietView').down('#soTienTietKiem').getValue()
                                                                //tính số điểm tích lũy
                                                                var soTichLuy=(soTienTietKiem/soChia)*heSo;
                                                                //gán số tích lũy 
                                                                me.up('#KhuyenMaiChiTietView').down('#soDiemTichLuy').setValue(soTichLuy);
                                                                //======================================================================================
                                                            }
                                                        }
                                                    },
                                                    {
                                                        xtype:'combobox',
                                                        itemId:'kyHan',
                                                        name:'kyHan',
                                                        margin:'5 5 5 5',
                                                        flex:1,
                //                                                queryMode: 'local',
                                                        editable:false,
                                                        value:1,
                                                        displayField: 'tenLoai',
                                                        valueField: 'loaiId',
                                                        store:Ext.getStore('vcb.store.KyHanStore'),
                                                        fieldLabel:'Kỳ hạn',
                                                        listeners:{
                                                            change:function ( me, newValue, oldValue, eOpts ){

                                                                //==========================================================================
                                                                // lấy thông tin hệ số
                                                                var heSo=0
                                                                var store = Ext.getStore('vcb.store.KyHanStore');
        //                                                        console.log(store.data.items[0].data)
                                                                for(var i=0;i<store.data.items.length;i++){
                                                                    if(store.data.items[i].data.loaiId == me.up('#KhuyenMaiChiTietView').down('#kyHan').getValue()){
                                                                        var heSo=store.data.items[i].data.heSo;
                                                                    }
                                                                }

                                                                //lấy thông tin loại tiết kiệm
                                                                var loaiTietKiem=me.up('#KhuyenMaiChiTietView').down('#loaiTietKiem').getValue();
                                                                //lấy thông tin số chia
                                                                var soChia=1;
                                                                if(loaiTietKiem == 1){// tức là gửi mới 100%
                                                                    soChia=20000000;
                                                                }else{
                                                                    if(loaiTietKiem == 2){
                                                                        soChia=40000000;
                                                                    }else{
                                                                        soChia=0;
                                                                    }
                                                                }
                                                                //Số tiền
                                                                var soTienTietKiem=me.up('#KhuyenMaiChiTietView').down('#soTienTietKiem').getValue()
                                                                //tính số điểm tích lũy
                                                                var soTichLuy=(soTienTietKiem/soChia)*heSo;
                                                                //gán số tích lũy 
                                                                me.up('#KhuyenMaiChiTietView').down('#soDiemTichLuy').setValue(soTichLuy);
                                                                //======================================================================================
                                                            }
                                                        }
                                                    },
                                                    {
                                                        xtype:'numberfield',
                                                        itemId:'soDiemTichLuy',
                                                        name:'soDiemTichLuy',
        //                                                emptyText:'Nhập đủ 9 ký tự',
                                                        margin:'5 5 5 5',
                                                        flex:1,
                                                        fieldLabel:'số điểm tích lũy',
                                                        hideTrigger: true,
                                                        keyNavEnabled: false,
                                                        mouseWheelEnabled: false,
                                                        listeners:{
                                                            change:function ( me, newValue, oldValue, eOpts ){
                                                                if(Math.round(newValue)!=newValue){
                                                                    this.setValue(Math.round(newValue))
                                                                }
                                                            }
                                                        }
                                                    }
                                                ]
                                            },
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
                                                margin: '5 0 5 0',
                                                xtype:'button',
                                                text:'Thêm ',
                                                icon:'./resources/img/Add.png',
                                                handler:function (){
                                                    this.up('#KhuyenMaiChiTietView').down('#soTaiKhoan').setValue('');
                                                    this.up('#KhuyenMaiChiTietView').down('#soTienTietKiem').setValue('');
                                                    this.up('#KhuyenMaiChiTietView').down('#loaiTietKiem').setValue(1);
                                                    this.up('#KhuyenMaiChiTietView').down('#kyHan').setValue(1);
                                                    this.up('#KhuyenMaiChiTietView').down('#soDiemTichLuy').setValue(0);
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        xtype:'DanhSachTaiKhoanTietKiemView',
                                        listeners:{
                                            itemclick:function ( me, record, item, index, e, eOpts ){
                                                // gán giá trị thông tin tai khoản
                                                me.up('#KhuyenMaiChiTietView').down('#soTaiKhoan').setValue(record.data.SOTAIKHOAN);
                                                me.up('#KhuyenMaiChiTietView').down('#soTienTietKiem').setValue(record.data.SOTIEN);
                                                me.up('#KhuyenMaiChiTietView').down('#loaiTietKiem').setValue(record.data.LOAITAIKHOANTIETKIEM);
                                                me.up('#KhuyenMaiChiTietView').down('#kyHan').setValue(record.data.KYHAN);
                                                me.up('#KhuyenMaiChiTietView').down('#soDiemTichLuy').setValue(record.data.SODIEMTICHLUY);
                                            }  
                                        }
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
                                            var Url = 'ExportThongTinTietKiemKhuyenMaiServlet';
                                            var form = document.createElement("form");
                                            
                                            form.method = "POST";
                                            form.action = Url;
//                                            // biến truyền vào 
                                            var cif = document.createElement('input');				
                                            cif.name = 'cif';
                                            cif.value = this.up('#KhuyenMaiChiTietView').down('#cif').getValue();
                                            form.appendChild(cif);
//
//                                            var ten1 = document.createElement('input');				
//                                            ten1.name = 'ten';
//                                            ten1.value = ten;
//                                            form.appendChild(ten1);
//                                            //=======================================
                                            document.body.appendChild(form);
                                            form.submit();
                                            document.body.removeChild(form);
                                        }
                                    },
                                    {
                                        margin: '5 5 5 5',
                                        xtype:'button',
                                        text:'Lưu thông tin khách hàng',
                                        icon:'./resources/img/Save.png',
        //                                        flex: 0.5,
                                        handler:function (){
                                            var me=this;
                                            var value=this.up('form').getValues();
                                            var nguoi= App.Session.getNguoiID();
                                            // Thông tin chung khách hàng
                                            var cif=value.cif;
                                            var tenKhachHang=value.tenKhachHang;
                                            var soDienThoai=value.soDienThoai;
                                            var cmt=value.cmt;
                                            var ngayCap=value.ngayCap;
                                            var noiCap=value.noiCap;
                                            var diaChi=value.diaChi;
                                            var diemTichLuy =value.diemTichLuy;
                                            var diemDaDung=value.diemDaDung;
                                            //========================================
                                            //Thông tin tiết kiệm
                                            var soTaiKhoan=value.soTaiKhoan;
                                            var soTienTietKiem= value.soTienTietKiem;
                                            var loaiTietKiem = value.loaiTietKiem;
                                            var kyHan= value.kyHan;
                                            var soDiemTichLuy = value.soDiemTichLuy;
                                            // Lưu thông tin chung khách hàng
                                            if(tenKhachHang==''){
                                                Ext.Msg.alert("Thông báo","Tên khách hàng chưa được nhập");
                                            }else{
                                                if(cif == ''|| cif.length != 9){
                                                    Ext.Msg.alert("Thông báo","Số CIF phải có 9 ký tự");
                                                }else{
                                                    if(cmt==''||soDienThoai==''||noiCap==''||diaChi==''){
                                                        Ext.Msg.alert("Thông báo","Vui lòng nhập đủ thông tin CMT,SDT,...");
                                                    }else{
                                                        Core.themMoiKhachHangKhuyenMaiServlet(cif,tenKhachHang,soDienThoai,cmt,ngayCap,noiCap,diaChi,diemTichLuy,diemDaDung,nguoi,function(options,success,response){
                                                            if (success) {//kiem tra ket noi thanh cong khong 
                                                                response = Ext.decode(response.responseText);
                                                                if(response.ResponseCode == 0){
                                                                    // Lưu Thông tin Quà
                                                                    var QuaKhuyenMaiDaNhanStore = Ext.getStore('vcb.store.QuaKhuyenMaiDaNhanStore');
                                                                    // cho số lương quà về 0 hết
                                                                    Core.themQuaKhuyenMaiDaNhanServlet(cif,-1,0,nguoi,function(options,success,response){
                                                                        if (success) {//kiem tra ket noi thanh cong khong 
                                                                            response = Ext.decode(response.responseText);
                                                                            if(response.ResponseCode == 0){
                                                                                // sét lại số lượng quà
                                                                                for(var i=0;i<QuaKhuyenMaiDaNhanStore.data.length;i++){
                                                                                    var cif1= QuaKhuyenMaiDaNhanStore.data.items[i].data.CIF;
                                                                                    var quaId=QuaKhuyenMaiDaNhanStore.data.items[i].data.QUAID;
                                                                                    var soLuongQua=QuaKhuyenMaiDaNhanStore.data.items[i].data.SOLUONGQUA;
                                                                                    Core.themQuaKhuyenMaiDaNhanServlet(cif1,quaId,soLuongQua,nguoi,function(options,success,response){
                                                                                        if (success) {//kiem tra ket noi thanh cong khong 
                                                                                            response = Ext.decode(response.responseText);
                                                                                            if(response.ResponseCode == 0){
            //                                                                                    Ext.Msg.alert("Thông báo","Lưu thành công");  
                                                                                            }else{
                                                                                                Ext.Msg.alert("Thông báo",response.ResponseName);
                                                                                            }
                                                                                        }
                                                                                        else {//ket noi khong thanh cong 
                                                                                            Ext.Msg.alert("Thông báo","Lỗi kết lối, Vui lòng thử lại hoặc liên hệ tin học!")
                                                                                        }
                                                                                    });
                                                                                }
                                                                                // Lưu thông tin tiết kiệm
                                                                                if(soTaiKhoan != '' && soTaiKhoan.length != 13){
                                                                                    Ext.Msg.alert("Thông báo","Số tài khoản phải có đủ 13 ký tự!")
                                                                                }else {
                                                                                    if(soTaiKhoan.length == 13){
                                                                                        Core.themMoiThongTinTietKiemKhuyenMaiServlet(cif,soTaiKhoan,soTienTietKiem,loaiTietKiem,kyHan,soDiemTichLuy,nguoi,function(options,success,response){
                                                                                            if (success) {//kiem tra ket noi thanh cong khong 
                                                                                                response = Ext.decode(response.responseText);

                                                                                                if(response.ResponseCode == 0){
                                                                                                    //tìm thông tin khách hàng khuyến mãi tiết kiệm
                                                                                                    var khachHangStore=Ext.getStore('vcb.store.KhachHangTietKiemKhuyenMaiStore');
                                                                                                     khachHangStore.load({//tìm tên người cập nhật
                                                                                                         params:{
                                                                                                             cif:cif
                                                                                                         },
                                                                                                         callback: function(records, operation, success) {

                                                                                                         }
                                                                                                       })
                                                                                                        var QuaKhuyenMaiDaNhanStore=Ext.getStore('vcb.store.QuaKhuyenMaiDaNhanStore');
                                                                                                    QuaKhuyenMaiDaNhanStore.load({//tìm tên người cập nhật
                                                                                                        params:{
                                                                                                            cif:cif
                                                                                                        },
                                                                                                        callback: function(records, operation, success) {
                                                                                                        }
                                                                                                      })

                                                                                                   // xem lại thông tin khách hàng
                                                                                                   var khuyenMaiStore=Ext.getStore('vcb.store.khuyenMaiStore');
                                                                                                    khuyenMaiStore.load({//tìm tên người cập nhật
                                                                                                        params:{
                                                                                                            cif:cif,
                                                                                                            ten:''
                                                                                                        },
                                                                                                        callback: function(records, operation, success) {
                                        //                                                                    console.log(records)
                                                                                                            // Gán giá trị khách hàng store  
                                                                                                            if(records.length == 0){// nếu chưa có cif này ta tim ở cơ sở dữ liệu
                                                                                                                var store=Ext.getStore('vcb.store.khachHangStore');
                                                                                                                store.load({//tìm tên người cập nhật
                                                                                                                    params:{
                                                                                                                        cif:cif,
                                                                                                                        ten:''
                                                                                                                    },
                                                                                                                    callback: function(records, operation, success) {
                                                                                                                        if(records.length==1){
                                                                                                                            var ngayCapCMT=App.Session.namThangNgay(records[0].data.NGAYCAP);
                                                                                                                            me.up('#KhuyenMaiChiTietView').down('#cif').setValue(records[0].data.CFNO);
                                                                                                                            me.up('#KhuyenMaiChiTietView').down('#diaChi').setValue(records[0].data.DIACHI);
                                                                                                                            me.up('#KhuyenMaiChiTietView').down('#ngayCap').setValue(ngayCapCMT);
                                                                                                                            me.up('#KhuyenMaiChiTietView').down('#cmt').setValue(records[0].data.SOCMT);
                                                                                                                            me.up('#KhuyenMaiChiTietView').down('#tenKhachHang').setValue(records[0].data.TEN);
                                                                                                                            me.up('#KhuyenMaiChiTietView').down('#soDienThoai').setValue(records[0].data.SODIENTHOAI);
                                                                                                                            me.up('#KhuyenMaiChiTietView').down('#diemTichLuy').setValue(0);
                                                                                                                            me.up('#KhuyenMaiChiTietView').down('#diemDaDung').setValue(0);
                                                                                                                            me.up('#KhuyenMaiChiTietView').down('#noiCap').setValue('');
                                                                                                                        }
                                                                                                                    }
                                                                                                                  })
                                                                                                            }else{
                                                                                                                me.up('#KhuyenMaiChiTietView').down('#cif').setValue(records[0].data.CIF);
                                                                                                                me.up('#KhuyenMaiChiTietView').down('#diaChi').setValue(records[0].data.DIACHI);
                                                                                                                me.up('#KhuyenMaiChiTietView').down('#ngayCap').setValue(records[0].data.NGAYCAP);
                                                                                                                me.up('#KhuyenMaiChiTietView').down('#cmt').setValue(records[0].data.SOCMT);
                                                                                                                me.up('#KhuyenMaiChiTietView').down('#tenKhachHang').setValue(records[0].data.TENKHACHANG);
                                                                                                                me.up('#KhuyenMaiChiTietView').down('#soDienThoai').setValue(records[0].data.SODIENTHOAI); 
                                                                                                                me.up('#KhuyenMaiChiTietView').down('#diemTichLuy').setValue(records[0].data.SODIEMTICHLUY);
                                                                                                                me.up('#KhuyenMaiChiTietView').down('#diemDaDung').setValue(records[0].data.SODIEMDADUNG);
                                                                                                                me.up('#KhuyenMaiChiTietView').down('#noiCap').setValue(records[0].data.NOICAP);
                                                                                                            }
                                                                                                        }
                                                                                                      })
//                                                                                                      console.log(this);
                                                                                                      me.up('#KhuyenMaiChiTietView').down('#soTaiKhoan').setValue('');
                                                                                                      me.up('#KhuyenMaiChiTietView').down('#soTienTietKiem').setValue('');
                                                                                                      me.up('#KhuyenMaiChiTietView').down('#loaiTietKiem').setValue(1);
                                                                                                      me.up('#KhuyenMaiChiTietView').down('#kyHan').setValue(1);
                                                                                                      me.up('#KhuyenMaiChiTietView').down('#soDiemTichLuy').setValue(0);
                                                       
                                                                                                    Ext.Msg.alert("Thông báo","Lưu thành công");  
                                                                                                }else{
                                                                                                    Ext.Msg.alert("Thông báo",response.ResponseName);
                                                                                                }
                                                                                            }
                                                                                            else {//ket noi khong thanh cong 
                                                                                                Ext.Msg.alert("Thông báo","Lỗi kết lối, Vui lòng thử lại hoặc liên hệ tin học!")
                                                                                            }
                                                                                        });
                                                                                    }
                                                                                }
//                                                                                    Ext.Msg.alert("Thông báo","Lưu thành công");  
                                                                            }else{
                                                                                Ext.Msg.alert("Thông báo",response.ResponseName);
                                                                            }
                                                                        }
                                                                        else {//ket noi khong thanh cong 
                                                                            Ext.Msg.alert("Thông báo","Lỗi kết lối, Vui lòng thử lại hoặc liên hệ tin học!")
                                                                        }
                                                                    });
                                                                    
                                                                    Ext.Msg.alert("Thông báo","Lưu thành công");  
                                                                }else{
                                                                    Ext.Msg.alert("Thông báo",response.ResponseName);
                                                                }
                                                            }
                                                            else {//ket noi khong thanh cong 
                                                                Ext.Msg.alert("Thông báo","Lỗi kết lối, Vui lòng thử lại hoặc liên hệ tin học!")
                                                            }
                                                        });
                                                        
                                                    }
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
        ],
        dockedItems: [
        ]
    },
    hayghe:function (m) {
        var me=this;
         //Thông tin tiết kiệm
            me.down('#soTaiKhoan').setValue('');
            me.down('#soTienTietKiem').setValue('');
            me.down('#loaiTietKiem').setValue(1);
            me.down('#kyHan').setValue(1);
            me.down('#soDiemTichLuy').setValue(0);
        if(m==''){// tức là thêm mới
            var khachHangStore=Ext.getStore('vcb.store.KhachHangTietKiemKhuyenMaiStore');
            khachHangStore.load({//tìm tên người cập nhật
                params:{
                    cif:00000
                },
                callback: function(records, operation, success) {

                }
              })
            var store=Ext.getStore('vcb.store.QuaKhuyenMaiStore');
            store.load({//QuaKhuyenMaiStore
                params:{
                    soDiem:0
                },
                callback: function(records, operation, success) {
                }
            }) 
            var QuaKhuyenMaiDaNhanStore=Ext.getStore('vcb.store.QuaKhuyenMaiDaNhanStore');
            QuaKhuyenMaiDaNhanStore.load({//QuaKhuyenMaiStore
                params:{
                    cif:''
                },
                callback: function(records, operation, success) {
                }
            })  
            //========================================
            // Thông tin khách hàng
            me.down('#cif').setValue('');
            me.down('#tenKhachHang').setValue('');
            me.down('#soDienThoai').setValue('');
            me.down('#cmt').setValue('');
            me.down('#ngayCap').setValue('');
            me.down('#noiCap').setValue('');
            me.down('#diaChi').setValue('');
            me.down('#diemTichLuy').setValue('');
            me.down('#diemDaDung').setValue('');
            me.down('#diemConLai').setValue('');
            //=========================================
           
            //Số điểm tích lũy mặc định không được điền
            me.down('#soDiemTichLuy').setEditable(false)
            //==============================================
        }else{// tức là lấy dữ liệu
            // Thông tin khách hàng
            me.down('#cif').setValue(m.CIF);
//            me.up('#KhuyenMaiChiTietView').down('#cif').setValue(records[0].data.CIF);
            me.down('#diaChi').setValue(m.DIACHI);
            me.down('#ngayCap').setValue(m.NGAYCAP);
            me.down('#cmt').setValue(m.SOCMT);
            me.down('#tenKhachHang').setValue(m.TENKHACHANG);
            me.down('#soDienThoai').setValue(m.SODIENTHOAI); 
            me.down('#diemTichLuy').setValue(m.SODIEMTICHLUY);
            me.down('#diemDaDung').setValue(m.SODIEMDADUNG);
            me.down('#noiCap').setValue(m.NOICAP);
            //reset lại store quà khuyến mãi dự trên số điểm còn lại
            var store=Ext.getStore('vcb.store.QuaKhuyenMaiStore');
            store.load({//QuaKhuyenMaiStore
                params:{
                    soDiem:m.SODIEMTICHLUY-m.SODIEMDADUNG
                },
                callback: function(records, operation, success) {
//                    console.log(records)
                }
            })
            var QuaKhuyenMaiDaNhanStore=Ext.getStore('vcb.store.QuaKhuyenMaiDaNhanStore');
            QuaKhuyenMaiDaNhanStore.load({//QuaKhuyenMaiStore
                params:{
                    cif:m.CIF
                },
                callback: function(records, operation, success) {
                }
            })
        }
    }
});


