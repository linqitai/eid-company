define("xg/eid-company/1.0.4/c/js/base/zepto-debug.cookie", [], function(require, exports, module) {
    (function($) {
        $.extend($.fn, {
            cookie: function(key, value, options) {
                var days, time, result, decode;
                if (arguments.length > 1 && String(value) !== "[object Object]") {
                    options = $.extend({}, options);
                    if (value === null || value === undefined) options.expires = -1;
                    if (typeof options.expires === "number") {
                        days = options.expires * 24 * 60 * 60 * 1e3;
                        time = options.expires = new Date;
                        time.setTime(time.getTime() + days)
                    }
                    value = String(value);
                    return document.cookie = [encodeURIComponent(key), "=", options.raw ? value : encodeURIComponent(value), options.expires ? "; expires=" + options.expires.toUTCString() : "", options.path ? "; path=" + options.path : "", options.domain ? "; domain=" + options.domain : "", options.secure ? "; secure" : ""].join("")
                }
                options = value || {};
                decode = options.raw ? function(s) {
                    return s
                } : decodeURIComponent;
                return (result = new RegExp("(?:^|; )" + encodeURIComponent(key) + "=([^;]*)").exec(document.cookie)) ? decode(result[1]) : null
            }
        })
    })(Zepto);
    module.exports = Zepto
});