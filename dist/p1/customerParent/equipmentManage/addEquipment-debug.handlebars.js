define("xg/eid-company/1.0.4/p/customerParent/equipmentManage/addEquipment-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        return '<div id="modal-add" class="modal fade"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\r\n    <div class="modal-dialog">\r\n        <div class="modal-content radius">\r\n            <div class="modal-header">\r\n                <h2 class="modal-title">新增MAC地址</h2>\r\n                <a class="close" data-dismiss="modal" aria-hidden="true" href="javascript:void();">×</a>\r\n            </div>\r\n            <form class="form form-horizontal" id="addForm">\r\n                <div class="modal-body" style="overflow: hidden">\r\n                    <div class="row cl">\r\n                        <label class="labelText col-xs-4 col-sm-3 text-l">MAC地址：</label>\r\n                        <div class="formControls col-xs-8 col-sm-9">\r\n                            <input type="text" class="input-text pull-left" id="deviceMac" name="deviceMac" placeholder="请输入MAC地址">\r\n                            <input type="hidden" class="input-text pull-left" id="deviceId" name="deviceId">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class="modal-footer">\r\n                    <input class="btn btn-primary" id="sureAddBtn" type="submit" value="确定">\r\n                    <a class="btn" data-dismiss="modal" aria-hidden="true">关闭</a>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>'
    })
});