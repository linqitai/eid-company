define("xg/eid-company/1.0.4/p/reports/threeMonthRecord-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "",
            stack1, helperMissing = helpers.helperMissing,
            escapeExpression = this.escapeExpression,
            functionType = "function",
            self = this;

        function program1(depth0, data) {
            var buffer = "",
                stack1;
            buffer += "\r\n    ";
            stack1 = helpers.each.call(depth0, depth0, {
                hash: {},
                inverse: self.noop,
                fn: self.program(2, program2, data),
                data: data
            });
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += "\r\n";
            return buffer
        }

        function program2(depth0, data) {
            var buffer = "",
                stack1, helper, options;
            buffer += '\r\n        <tr  class="text-c">\r\n            <td class="">' + escapeExpression((helper = helpers.formatDateFull || depth0 && depth0.formatDateFull, options = {
                hash: {},
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.time, options) : helperMissing.call(depth0, "formatDateFull", depth0 && depth0.time, options))) + "</td><td>";
            if (helper = helpers.address) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.address;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + "</td>\r\n        </tr>\r\n    ";
            return buffer
        }

        function program4(depth0, data) {
            return '\r\n    <tr>\r\n        <td class="text-c" colspan="3">--</td>\r\n    </tr>\r\n'
        }
        stack1 = helpers["if"].call(depth0, depth0, {
            hash: {},
            inverse: self.program(4, program4, data),
            fn: self.program(1, program1, data),
            data: data
        });
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += "\r\n";
        return buffer
    })
});