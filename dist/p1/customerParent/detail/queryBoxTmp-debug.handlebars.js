define("xg/eid-company/1.0.4/p/customerParent/detail/queryBoxTmp-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "";
        buffer += '\r\n\r\n    <!--<div class="input-append date form_starttime pull-left">\r\n        &lt;!&ndash;<input type="text" class="form-control">&ndash;&gt;\r\n        <input size="16" class="startTime input-text w120" type="text" placeholder="开始时间" readonly disabled="true">\r\n        <span class="add-on"><i class="Hui-iconfont Hui-iconfont-feedback2 icon-th"></i></span>\r\n    </div>\r\n    <div class="pull-left" style="height: 32px;line-height: 32px;padding: 0px 10px;">--</div>\r\n    <div class="input-append date form_endttime pull-left">\r\n        <input size="16" class="endTime input-text w120" type="text" placeholder="结束时间" readonly disabled="true">\r\n        <span class="add-on"><i class="Hui-iconfont Hui-iconfont-feedback2 icon-th"></i></span>\r\n    </div>-->\r\n    \r\n';
        return buffer
    })
});