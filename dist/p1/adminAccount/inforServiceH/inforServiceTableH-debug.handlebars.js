define("xg/eid-company/1.0.4/p/adminAccount/inforServiceH/inforServiceTableH-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "",
            stack1, self = this,
            helperMissing = helpers.helperMissing,
            functionType = "function",
            escapeExpression = this.escapeExpression;

        function program1(depth0, data) {
            var buffer = "",
                stack1;
            buffer += " ";
            stack1 = helpers.each.call(depth0, depth0, {
                hash: {},
                inverse: self.noop,
                fn: self.program(2, program2, data),
                data: data
            });
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += " ";
            return buffer
        }

        function program2(depth0, data) {
            var buffer = "",
                stack1, helper, options;
            buffer += "\r\n    <tr>\r\n        <td>";
            if (helper = helpers.borrowerName) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.borrowerName;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + "</td>\r\n        <td>" + escapeExpression((helper = helpers.formatstatues || depth0 && depth0.formatstatues, options = {
                hash: {},
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.mobileStatus, depth0 && depth0.mobile, options) : helperMissing.call(depth0, "formatstatues", depth0 && depth0.mobileStatus, depth0 && depth0.mobile, options))) + "</td>\r\n        <td>" + escapeExpression((helper = helpers.formatDateFull || depth0 && depth0.formatDateFull, options = {
                hash: {},
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.created, options) : helperMissing.call(depth0, "formatDateFull", depth0 && depth0.created, options))) + "</td>\r\n        <td>";
            if (helper = helpers.companyName) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.companyName;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + "</td>\r\n        <td>";
            if (helper = helpers.childName) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.childName;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + "</td>\r\n        \r\n        <td>\r\n            ";
            stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
                hash: {},
                inverse: self.noop,
                fn: self.program(3, program3, data),
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.source, "==", "1", options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.source, "==", "1", options));
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += " ";
            stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
                hash: {},
                inverse: self.noop,
                fn: self.program(5, program5, data),
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.source, "==", "3", options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.source, "==", "3", options));
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += " ";
            stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
                hash: {},
                inverse: self.noop,
                fn: self.program(7, program7, data),
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.source, "==", "2", options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.source, "==", "2", options));
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += "\r\n        </td>\r\n        <td>\r\n            " + escapeExpression((helper = helpers.formatstatu || depth0 && depth0.formatstatu, options = {
                hash: {},
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.flowStatus, depth0 && depth0.idenAuthentication, options) : helperMissing.call(depth0, "formatstatu", depth0 && depth0.flowStatus, depth0 && depth0.idenAuthentication, options))) + "\r\n        </td>\r\n        <td>\r\n            " + escapeExpression((helper = helpers.formatstatue || depth0 && depth0.formatstatue, options = {
                hash: {},
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.result, depth0 && depth0.flowStatus, options) : helperMissing.call(depth0, "formatstatue", depth0 && depth0.result, depth0 && depth0.flowStatus, options))) + '\r\n        </td>\r\n        <td style="position:relative;">\r\n            ';
            stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
                hash: {},
                inverse: self.noop,
                fn: self.program(9, program9, data),
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.level, "==", "1", options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.level, "==", "1", options));
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += " ";
            stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
                hash: {},
                inverse: self.noop,
                fn: self.program(11, program11, data),
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.level, "==", "2", options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.level, "==", "2", options));
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += " ";
            stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
                hash: {},
                inverse: self.noop,
                fn: self.program(13, program13, data),
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.level, "==", "3", options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.level, "==", "3", options));
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += "\r\n        </td>\r\n        \r\n        <td>\r\n            ";
            stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
                hash: {},
                inverse: self.noop,
                fn: self.program(15, program15, data),
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.isChecked, "==", "1", options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.isChecked, "==", "1", options));
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += " ";
            stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
                hash: {},
                inverse: self.noop,
                fn: self.program(24, program24, data),
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.isChecked, "==", "0", options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.isChecked, "==", "0", options));
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += "\r\n        </td>\r\n        <td>\r\n            ";
            stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
                hash: {},
                inverse: self.noop,
                fn: self.program(26, program26, data),
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.businessProgress, "==", "1", options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.businessProgress, "==", "1", options));
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += " ";
            stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
                hash: {},
                inverse: self.noop,
                fn: self.program(28, program28, data),
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.businessProgress, "==", "10", options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.businessProgress, "==", "10", options));
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += "\r\n\r\n        </td>\r\n    </tr>\r\n    ";
            return buffer
        }

        function program3(depth0, data) {
            return " 人证通 "
        }

        function program5(depth0, data) {
            return " 接口 "
        }

        function program7(depth0, data) {
            return " App "
        }

        function program9(depth0, data) {
            return '\r\n            <div class="level-green"></div>\r\n            '
        }

        function program11(depth0, data) {
            return '\r\n            <div class="level-yellow"></div>\r\n            '
        }

        function program13(depth0, data) {
            return '\r\n            <div class="level-red"></div>\r\n            '
        }

        function program15(depth0, data) {
            var buffer = "",
                stack1, helper, options;
            buffer += '\r\n            <span class="c-black">  ';
            stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
                hash: {},
                inverse: self.noop,
                fn: self.program(16, program16, data),
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.status, "==", "0", options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.status, "==", "0", options));
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += " ";
            stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
                hash: {},
                inverse: self.noop,
                fn: self.program(18, program18, data),
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.status, "==", "1", options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.status, "==", "1", options));
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
                hash: {},
                inverse: self.noop,
                fn: self.program(20, program20, data),
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.status, "==", "3", options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.status, "==", "3", options));
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += " ";
            stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
                hash: {},
                inverse: self.noop,
                fn: self.program(22, program22, data),
                data: data
            }, helper ? helper.call(depth0, depth0 && depth0.status, "==", "2", options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.status, "==", "2", options));
            if (stack1 || stack1 === 0) {
                buffer += stack1
            }
            buffer += " </span> ";
            return buffer
        }

        function program16(depth0, data) {
            return '\r\n                <span class="c-green">未处理</span> '
        }

        function program18(depth0, data) {
            return '\r\n            <span class="c-blue">已通过</span> '
        }

        function program20(depth0, data) {
            return '\r\n            <span class="c-blue">黑名单</span> '
        }

        function program22(depth0, data) {
            return '\r\n            <span class="c-red">未通过</span> '
        }

        function program24(depth0, data) {
            return '\r\n            <span class="c-black">未查看</span> '
        }

        function program26(depth0, data) {
            var buffer = "",
                stack1, helper;
            buffer += '\r\n            <a class="detailBtn underLine" href="/cycle/credit/detail/detailPages.htm?encryptKey=';
            if (helper = helpers.encryptKey) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.encryptKey;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + '&types=1" target="_blank">详情</a>            ';
            return buffer
        }

        function program28(depth0, data) {
            var buffer = "",
                stack1, helper;
            buffer += '\r\n            <a class="detailBtn underLine" href="/cycle/credit/detail/detailPage.htm?encryptKey=';
            if (helper = helpers.encryptKey) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.encryptKey;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + '&types=1" target="_blank">查询报告</a>            ';
            return buffer
        }

        function program30(depth0, data) {
            return '\r\n    <tr>\r\n        <td class="text-c" colspan="11">查无数据</td>\r\n    </tr>\r\n    '
        }
        buffer += '<thead class="text-c">\r\n    <tr>\r\n        <th>姓名</th>\r\n        <th>手机号</th>\r\n        <th>查询时间</th>\r\n        <th>客户名称</th>\r\n        <th>门店名称</th>\r\n        <th>查询来源</th>\r\n        <th>身份信息</th>\r\n        <th>人脸比对</th>\r\n        <th>风险等级</th>\r\n        <th>业务状况</th>\r\n        <th>身份标识报告</th>\r\n    </tr>\r\n</thead>\r\n<tbody class="text-c">\r\n    ';
        stack1 = helpers["if"].call(depth0, depth0, {
            hash: {},
            inverse: self.program(30, program30, data),
            fn: self.program(1, program1, data),
            data: data
        });
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += "\r\n</tbody>";
        return buffer
    })
});