define("xg/eid-company/1.0.4/p/adminAccount/customerManageH/customerMH-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        return '<div class="col-xs-4">\r\n  <button class="btn radius btn-primary" id="addCustomer">新增</button>\r\n</div>          \r\n<form id="customer_searchForm" class="col-xs-8">\t\r\n\t<div class="col-xs-5">\r\n\t\t<label class="form-label col-xs-4 col-sm-4">客户名称：</label>\r\n\t\t<div class="formControls col-xs-8 col-sm-8">\r\n\t\t  <input type="text" class="input-text" placeholder="请输入客户名称" name="companyName" id="companyName">\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="col-xs-5">\r\n\t\t<label class="form-label col-xs-4 col-sm-4">联系人：</label>\r\n\t\t<div class="formControls col-xs-8 col-sm-8">\r\n\t\t  <input type="text" class="input-text" autocomplete="off" placeholder="请输入联系人" name="linkMan" id="linkMan">\r\n\t\t</div>\r\n\t</div>\r\n\t<input class="btn btn-default col-xs-2" type="submit" id="search_button" value="搜索">\r\n</form>'
    })
});