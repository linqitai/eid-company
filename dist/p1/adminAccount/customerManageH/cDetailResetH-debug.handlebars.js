define("xg/eid-company/1.0.4/p/adminAccount/customerManageH/cDetailResetH-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "",
            stack1, helper, functionType = "function",
            escapeExpression = this.escapeExpression;
        buffer += '<div id="modal-resetPsw" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\r\n  <div class="modal-dialog">\r\n    <div class="modal-content radius">\r\n      <div class="modal-header">\r\n        <h5 class="modal-title">重置密码</h5>\r\n        <a class="close" data-dismiss="modal" aria-hidden="true" href="javascript:void();">×</a>\r\n      </div>\r\n      <form class="form form-horizontal" id="resetPswForm">\r\n        <input type="hidden" name="companyId" id="companyId" value="';
        if (helper = helpers.companyId) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.companyId;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '">\r\n        <div class="modal-body">\r\n            是否重置<span>';
        if (helper = helpers.phone) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.phone;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '</span>账号密码为手机号码？\r\n        </div>\r\n        <div class="modal-footer">\r\n          <input class="btn btn-primary" type="submit" value="确认">\r\n          <!-- <button type="submit" class="btn btn-primary">确定</button> -->\r\n          <button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>';
        return buffer
    })
});