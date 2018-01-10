Ext.define(('vcb.Session'), {
    extend: 'Ext.util.Observable',
    alternateClassName: 'App.Session',
    singleton: true,
    config: {
        agentId: null,
        agentname: null,
        userName:null,
        permission: null,
        syncData: false,
        userID:null,
        nguoiID:null,
        phongBanId:null,
        kt:null,
        records:null,
        tenChuongTrinh:'',
        //===================
        ngayBaoCao:'',
        loaiTienGui:'',
        cif:'',
        soTaiKhoan:'',
        soLuongBanGhiTimThay:0,
        maPhong:0,
        sellerId:'',
        ten:'',
        //======================
        tuNgayLichSu :new Date(),
        denNgayLichSu: new Date(),
        cifLichSu:'',
        soTaiKhoanLichSu:'',
        tenLichSu:'',
        sellerId:''
        
    },
    constructor: function(config) {
        this.initConfig(config);
    },
    applyAgentId: function(val) {
        
        if (this.getSyncData()) {
            var store = Ext.getStore('sessioninfo');
            store.removeAll();
            if (null != val && null != this.getToken()) {
                store.add({agentname: this.agentname, agentId: val, userName: this.userName,permission:this.permission});
            }
            store.sync();
        }
        this.fireEvent('logginchange', this);
    },
    
    isLoggedIn: function() {
        return (null != this.permission && null != this.agentname);
    },
    doiDinhDangNgay: function (date){
        var thang=date.slice(0,2);
        var ngay=date.slice(3,5);
        var nam=date.slice(8,10);
        var ngayBaoCao=ngay+thang+nam;
        return ngayBaoCao
    },
    namThangNgay: function (date){
        var ngay=date.slice(0,2);
        var thang=date.slice(2,4);
//        console.log(date.slice(4,6));
        var nam='20'+date.slice(4,6);
        var ngayBaoCao=nam + '-' +thang+'-'+ngay;
        return ngayBaoCao
    },
    kiemTraQuyen: function(userId,nutIdCheck){
        var kt=App.Session.setKt(0);
//        console.log(App.Session.getKt());
        var storePhanQuyen=Ext.getStore('vcb.store.PhanQuyenStore');
            storePhanQuyen.load({// tìm quyền của user
                params:{
                    USERID:userId
                },
                callback: function(records, operation, success) {
                    for(var i=0;i<records.length;i++){//chạy từng QuyenID
                        var quyenId=records[i].data.QUYENID
                        var storeMapQuyen=Ext.getStore('vcb.store.MapQuyenStore');//kiểm tra xem có nút đó không
                        storeMapQuyen.load({//tím tên người tạo
                            params:{
                                QUYENID:quyenId
                            },
                            callback: function(records, operation, success) {
                                for(var j=0;j<records.length;j++){
                                    if(records[j].data.NUTID==nutIdCheck){
//                                        kt=1;
                                        App.Session.setKt(1)
//                                        console.log(kt);
                                        j=records.length
                                    }
                                }
                                return kt;
                            }
                        })   

                    }
                }
            })
            return storePhanQuyen;
//            console.log(App.Session.getKt());
//            console.log(kt);
    }
//    timNguoi: function (nguoiId){
//        var value='';
//        if(nguoiId!='0'){
//            var storeNguoi=Ext.getStore('vcb.store.NguoiStore');
//            storeNguoi.load({
//                params:{
//                    NGUOIID:nguoiId
//                },
//                callback: function(records, operation, success) {
//                    value= records[0].data;
//                    console.log(records[0].data)
//                }
//            })
////            console.log(storeNguoi.data)
//        }
//        console.log('value');
//        return value;
//        console.log(value);
//    }
});