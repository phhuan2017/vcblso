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
                        text: 'Xuất dữ liệu test',
                        name:'addproduct',
                        itemId:'test',
//                        cls: 'search_all',
//                        action:'addproduct',
                        icon:'./resources/img/excel.png',
                        handler:function (){
                            var dataView = this.up('#DanhSachHuyDongView').store.data.items;
                            var dataViewFinal= new Array();
                            for(var i=0;i<dataView.length;i++){
                                var arrayTemp = [];
                                arrayTemp[0] = dataView[i].data.TK;
                                arrayTemp[1] = dataView[i].data.TEN;
                                arrayTemp[2] = dataView[i].data.TKTYPE;
                                arrayTemp[3] = dataView[i].data.NT4;
                                arrayTemp[4] = dataView[i].data.XACBAL;
                                arrayTemp[5] = dataView[i].data.XINRAT;
                                arrayTemp[6] = dataView[i].data.XOTACC;
                                arrayTemp[7] = dataView[i].data.MAPHONG;
                                arrayTemp[8] = dataView[i].data.SELLERID;
                                arrayTemp[9] = dataView[i].data.CFNO;
                                dataViewFinal[i] = arrayTemp;
       
                            }
                             console.log(dataViewFinal);
                            //console.log(this.up('#DanhSachHuyDongView').store.data.items);
//          
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
                                                
                                                    function exportToCsv(filename, rows) {
                                                        var processRow = function (row) {
                                                            var finalVal = '';
                                                            for (var j = 0; j < row.length; j++) {
                                                                var innerValue = row[j] === null ? '' : row[j].toString();
                                                                if (row[j] instanceof Date) {
                                                                    innerValue = row[j].toLocaleString();
                                                                }
                                                                ;
                                                                var result = innerValue.replace(/"/g, '""');
                                                                if (result.search(/("|,|\n)/g) >= 0)
                                                                    result = '"' + result + '"';
                                                                if (j > 0)
                                                                    finalVal += ',';
                                                                finalVal += result;
                                                            }
                                                            return finalVal + '\n';
                                                        };
                                                        var csvFile = '';
                                                        for (var i = 0; i < rows.length; i++) {
                                                            csvFile += processRow(rows[i]);
                                                        }

                                                        var blob = new Blob([csvFile], {type: 'text/csv;charset=utf-8;'});
                                                        if (navigator.msSaveBlob) { // IE 10+
                                                            navigator.msSaveBlob(blob, filename);
                                                        } else {
                                                            var link = document.createElement("a");
                                                            if (link.download !== undefined) { // feature detection
                                                                // Browsers that support HTML5 download attribute
                                                                var url = URL.createObjectURL(blob);
                                                                link.setAttribute("href", url);
                                                                link.setAttribute("download", filename);
                                                                link.style.visibility = 'hidden';
                                                                document.body.appendChild(link);
                                                                link.click();
                                                                document.body.removeChild(link);
                                                            }
                                                        }
                                                    }
                                                    exportToCsv("export.csv", dataViewFinal);
                                                    function exportToCsv(filename, rows) {
                                                        var processRow = function (row) {
                                                            var finalVal = '';
                                                            for (var j = 0; j < row.length; j++) {
                                                                var innerValue = row[j] === null ? '' : row[j].toString();
                                                                if (row[j] instanceof Date) {
                                                                    innerValue = row[j].toLocaleString();
                                                                }
                                                                ;
                                                                var result = innerValue.replace(/"/g, '""');
                                                                if (result.search(/("|,|\n)/g) >= 0)
                                                                    result = '"' + result + '"';
                                                                result = '="' + result + '"';
                                                                if (j > 0)
                                                                    finalVal += ',';
                                                                finalVal += result;
                                                            }
                                                            return finalVal + '\n';
                                                        };

                                                        var csvFile = '';
                                                        for (var i = 0; i < rows.length; i++) {
                                                            csvFile += processRow(rows[i]);
                                                        }

                                                        var blob = new Blob([csvFile], {type: 'text/xls;charset=utf-8;'});
                                                        if (navigator.msSaveBlob) { // IE 10+
                                                            navigator.msSaveBlob(blob, filename);
                                                        } else {
                                                            var link = document.createElement("a");
                                                            if (link.download !== undefined) { // feature detection
                                                                // Browsers that support HTML5 download attribute
                                                                var url = URL.createObjectURL(blob);
                                                                link.setAttribute("href", url);
                                                                link.setAttribute("download", filename);
                                                                link.style.visibility = 'hidden';
                                                                document.body.appendChild(link);
                                                                link.click();
                                                                document.body.removeChild(link);
                                                            }
                                                        }
                                                    }
                                                    exportToCsv("export.xls", dataViewFinal);
//                                                    var tableToExcel = (function () {
//                                                        var uri = 'data:application/vnd.ms-excel;base64,'
//                                                                , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>'
//                                                                , base64 = function (s) {
//                                                                    return window.btoa(unescape(encodeURIComponent(s)))
//                                                                }
//                                                        , format = function (s, c) {
//                                                            return s.replace(/{(\w+)}/g, function (m, p) {
//                                                                return c[p];
//                                                            })
//                                                        }
//                                                        return function (table, name) {
//                                                            if (!table.nodeType)
//                                                                table = document.getElementById(table)
//                                                            var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
//                                                            window.location.href = uri + base64(format(template, ctx))
//                                                        }
//                                                    })();
//                                                    tableToExcel('gridview-1127-table','test');
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