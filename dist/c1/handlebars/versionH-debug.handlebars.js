define("xg/eid-company/1.0.4/c/handlebars/versionH-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        return '<div id="modal-version" class="modal fade">\r\n    <div class="modal-dialog">\r\n        <div class="modal-content radius">\r\n            <div class="modal-header">\r\n                <h4 class="modal-title ml20">提示</h4>\r\n                <a class="close" data-dismiss="modal" aria-hidden="true" href="javascript:void();">×</a>\r\n            </div>\r\n            <div class="modal-body">\r\n                <h4>为了更好的体验，请升级到IE9及以上版本！</h4>\r\n            </div>\r\n            <div class="modal-footer">\r\n                <a class="btn btn-primary" href="https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&tn=80035161_2_dg&wd=ie%E6%B5%8F%E8%A7%88%E5%99%A8%E5%AE%98%E6%96%B9%E4%B8%8B%E8%BD%BD&oq=www.baiducom&rsv_pq=8cea002a000002a7&rsv_t=4e10AvIkVl%2FX0p9hHF79eHZCgGrGWlXPKUF0SynIeNMTz0y6eQEFIvkhJtOVXSyOTYKvng&rqlang=cn&rsv_enter=1&rsv_sug3=3&rsv_sug1=1&rsv_sug7=100&rsv_sug2=1&prefixsug=ie&rsp=0&inputT=3830&rsv_sug4=3831">确定</a>\r\n                <a class="btn mr23" data-dismiss="modal" aria-hidden="true">关闭</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'
    })
});