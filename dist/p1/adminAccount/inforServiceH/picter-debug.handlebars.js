define("xg/eid-company/1.0.4/p/adminAccount/inforServiceH/picter-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        return '<div class="col-xs-12" style="margin-bottom:20px;">\r\n    <div style="height:50px">\r\n        <div id="daypicker" class="queryBox mt-10" style="float:left;margin-left:15px;width:375px;">\r\n            <label class="form-label " style="display:inline-block;margin-left:10px;">查询时间：</label>\r\n            <input size="16" id="startTime" class="startTime input-text pull-left w120" style="width:120px;" type="text" placeholder="开始时间"\r\n                readonly>\r\n            <div class="pull-left" style="height: 32px;line-height: 32px;padding: 0px 10px;display:inline-block">--</div>\r\n            <input size="16" id="endTime" style="width:120px;" class="endTime input-text pull-left w120" type="text" placeholder="结束时间"\r\n                readonly>\r\n        </div>\r\n    </div>\r\n    <form id="infor_searchForm" class="col-xs-8" style="float:left;margin-top:10px;">\r\n        <div class="col-xs-3">\r\n            <label class="form-label col-xs-4 col-sm-5">客户名称：</label>\r\n            <div class="formControls col-xs-8 col-sm-7">\r\n                <input type="text" class="input-text" placeholder="客户名称" name="companyName" id="companyName">\r\n            </div>\r\n        </div>\r\n        <div class="col-xs-3">\r\n            <label class="form-label col-xs-4 col-sm-5">门店名称：</label>\r\n            <div class="formControls col-xs-8 col-sm-7">\r\n                <input type="text" class="input-text" placeholder="门店名称" name="childName" id="childName">\r\n            </div>\r\n        </div>\r\n        <div class="col-xs-2">\r\n            <label class="form-label col-xs-4 col-sm-4">姓名：</label>\r\n            <div class="formControls col-xs-8 col-sm-8">\r\n                <input type="text" class="input-text" autocomplete="off" placeholder="姓名" name="borrowerName" id="borrowerName">\r\n            </div>\r\n        </div>\r\n        <div class="col-xs-3">\r\n            <label class="form-label col-xs-4 col-sm-4">手机号：</label>\r\n            <div class="formControls col-xs-8 col-sm-8">\r\n                <input type="text" class="input-text" autocomplete="off" placeholder="手机号" name="borrowerName1" id="borrowerName1">\r\n            </div>\r\n        </div>\r\n        <input class="btn btn-default col-xs-1" type="submit" id="search_button" value="搜索">\r\n    </form>\r\n</div>\r\n<hr>'
    })
});