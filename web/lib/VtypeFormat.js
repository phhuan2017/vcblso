Ext.apply(Ext.form.field.VTypes, {
    number_companyprefix:  function(v) {
        return /^893\d{4,7}$/.test(v);
    },
    number_companyprefixText: 'format wrong !',
    number_companyprefixMask: /[\d]/i,
    tel:function(v){
        return /^&/.test(v);
    },
    telText:'Không tồn tại định dạng số điện thoại',
    telMask:/[0-9]/i,
    only_number:function(v){
        return /\d/.test(v);
    },
    only_numberText:'Không tồn tại định dạng số điện thoại',
    only_numberMask:/[0-9]/i,
    dollar: function(val,field) {
        var amount=/[0-9.]/g;
        var format = function(value) {
            var samount = new String(value);
            if (samount.length > 3) {
                var n = samount.length % 3;
                var s = samount.substr(0, n);
                for (; n < samount.length; n += 3) {
                    if (s.length > 0) {
                        s += '.';
                    }
                    s += samount.substr(n, 3);
                }
                return s;
            }
            
            return samount;
        }
        //var bd = Ext.getCmp('fldAllocationAmount');
        var s = format((new String(val)).replace(/[^0-9]/g,''));
        if (s != val) {
            field.setValue(s);
        }
        return amount.test(val);
    }
});
