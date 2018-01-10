Ext.define(('vcb.Setting'), {
    extend: 'Ext.util.Observable',
    alternateClassName: 'vcb.Setting',
    singleton: true,
    config: {
        language: 'vi',
        hostUrl: 'http://10.0.10.250:8084/MMSWS',
        onepayInfo: {
            doUrl: 'do_test_local.jsp'
        }
    },
    applyHostUrl: function(val) {
        if ('string' === typeof val && val.length > 1 && val.charAt(val.length-1) != '/') {
            return val + '/';
        }
        return val;
    },
    updateLanguage: function(newValue, oldValue) {
        this.fireEvent('languagechange', this, newValue, oldValue);
    }
});