define("xg/eid-company/1.0.4/p/adminAccount/inforServiceH/inforServiceMH-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "",
            stack1, helper, functionType = "function",
            escapeExpression = this.escapeExpression;
        buffer += '<div class="col-xs-12">\r\n    <div class="queryBox mt-10 text" id="queryTime">\r\n        <label class="labelText w70 pull-left text-r">查询时间：</label>\r\n        <a href="javascript:void(0)" data-querytime="all" class="btn btn-link current">全部</a>\r\n        <a href="javascript:void(0)" data-querytime="today" class="btn btn-link">当天</a>\r\n        <a href="javascript:void(0)" data-querytime="threeDay" class="btn btn-link">最近三天</a>\r\n        <a href="javascript:void(0)" data-querytime="week" class="btn btn-link">最近一周</a>\r\n        <a href="javascript:void(0)" data-querytime="month" class="btn btn-link">最近一月</a>\r\n\r\n    </div>\r\n    <!-- <div class="queryBox mt-10 text" id="userDefined">\r\n        <label class="labelText w70 pull-left text-r">自定义：</label>\r\n        \r\n    </div> -->\r\n    <div class="queryBox mt-10" id="bankStatus">\r\n        <label class="labelText w70 pull-left text-r">业务状况：</label>\r\n        <a href="javascript:void(0)" data-yewu="" data-a="" id="statu" class="btn btn-link  statu-all">全部</a>\r\n         <a href="javascript:void(0)" data-yewu="4" data-a="1" id="statu1" class="btn btn-link">未查看<span>(';
        if (helper = helpers.notChecked) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.notChecked;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + ')</span></a>\r\n        <a href="javascript:void(0)" data-yewu="0" data-a="2" id="statu2"class="btn btn-link">未处理<span>(';
        if (helper = helpers.businessUntreatedCount) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.businessUntreatedCount;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + ')</span></a>\r\n        <a href="javascript:void(0)" data-yewu="2"data-a="3" id="statu3" class="btn btn-link statu-unpass">未通过<span>(';
        if (helper = helpers.businessNotPassCount) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.businessNotPassCount;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + ')</span></a>\r\n        <a href="javascript:void(0)" data-yewu="1"data-a="4" id="statu4" class="btn btn-link statu-pass">已通过<span>(';
        if (helper = helpers.businessPassCount) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.businessPassCount;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + ')</span></a>\r\n\r\n        <a href="javascript:void(0)" data-yewu="3"data-a="5" id="statu5" class="btn btn-link">黑名单<span>(';
        if (helper = helpers.businessBlacklistCount) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.businessBlacklistCount;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + ')</span></a>\r\n\r\n    </div>\r\n    <div class="queryBox mt-10" id="statusSelect1">\r\n        <label class="labelText w70 pull-left text-r">风险等级：</label>\r\n          <a href="javascript:void(0)" data-level=""id="levebtn" data-b="" class="btn btn-link color-all">全部</a>\r\n        <a href="javascript:void(0)" data-level="3" id="levebtn1" data-b="1"class="btn btn-link color-red">红</a>\r\n        <a href="javascript:void(0)" data-level="2" id="levebtn2" data-b="2"class="btn btn-link color-yellow">黄</a>\r\n        <a href="javascript:void(0)" data-level="1" id="levebtn3" data-b="3"class="btn btn-link color-green">绿</a>\r\n    </div>\r\n    <div class="queryBox mt-10" id="bankStatus1">\r\n        <label class="labelText w70 pull-left text-r">身份信息：</label>\r\n        <a href="javascript:void(0)" data-idval="" data-c=""id="idcard" class="btn btn-link current">全部</a>\r\n        <a href="javascript:void(0)" data-idval="1" data-c="1"id="idcard1" class="btn btn-link">验证通过<span>(';
        if (helper = helpers.identityPassCount) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.identityPassCount;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + ')</span></a>\r\n        <a href="javascript:void(0)" data-idval="-1" data-c="2"id="idcard2" class="btn btn-link">验证失败<span>(';
        if (helper = helpers.identityNotPassCount) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.identityNotPassCount;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + ')</span></a>\r\n        <a href="javascript:void(0)" data-idval="3" data-c="3"id="idcard3" class="btn btn-link">身份证过期<span>(';
        if (helper = helpers.identityExpiredCount) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.identityExpiredCount;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + ')</span></a>\r\n    </div>\r\n    <div class="queryBox mt-10" id="bankStatus2">\r\n        <label class="labelText w70 pull-left text-r">人脸比对：</label>\r\n        <a href="javascript:void(0)" data-face="" id="face"data-d="" class="btn btn-link current">全部</a>\r\n        <a href="javascript:void(0)" data-face="10" data-d="1"id="face1" class="btn btn-link">识别通过<span>(';
        if (helper = helpers.faceVerificationPassCount) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.faceVerificationPassCount;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + ')</span></a>\r\n        <a href="javascript:void(0)" data-face="20" data-d="2"id="face2" class="btn btn-link">人工通过<span>(';
        if (helper = helpers.faceVerificationLabourPassCount) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.faceVerificationLabourPassCount;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + ')</span></a>\r\n        <a href="javascript:void(0)" data-face="-10" data-d="3"id="face3" class="btn btn-link">未通过<span>(';
        if (helper = helpers.faceVerificationNotPassCount) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.faceVerificationNotPassCount;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + ')</span></a>\r\n        <a href="javascript:void(0)" data-face="-20" data-d="4"id="face4" class="btn btn-link">人工未通过<span>(';
        if (helper = helpers.faceVerificationLabourNotPassCount) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.faceVerificationLabourNotPassCount;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + ')</span></a>\r\n    </div>\r\n    <div class="queryBox mt-10" id="bankStatus3">\r\n        <label class="labelText w70 pull-left text-r">查询来源：</label>\r\n        <a href="javascript:void(0)" data-ren="" class="btn btn-link current">全部</a>\r\n        <a href="javascript:void(0)" data-ren="1" class="btn btn-link">人证通</a>\r\n        <a href="javascript:void(0)" data-ren="3" class="btn btn-link">接口</a>\r\n        <a href="javascript:void(0)" data-ren="2" class="btn btn-link">App</a>\r\n    </div>\r\n    <div class="queryBox mt-10" id="bankStatus4">\r\n        <label class="labelText w70 pull-left text-r">手机校验：</label>\r\n        <a href="javascript:void(0)" data-status="" id="check" data-f=""class="btn btn-link mobile-all">全部</a>\r\n        <a href="javascript:void(0)" data-status="0" id="check1"data-f="1" class="btn btn-link">未校验<span>(';
        if (helper = helpers.mobileCheckUntreatedCount) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.mobileCheckUntreatedCount;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + ')</span></a>\r\n        <a href="javascript:void(0)" data-status="1" id="check2" data-f="2"class="btn btn-link">校验失败<span>(';
        if (helper = helpers.mobileCheckNotPassCount) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.mobileCheckNotPassCount;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + ')</span></a>\r\n        <a href="javascript:void(0)" data-status="2" id="check3"data-f="3" class="btn btn-link mobile-succ">校验成功<span>(';
        if (helper = helpers.mobileCheckPassCount) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.mobileCheckPassCount;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + ")</span></a>\r\n    </div>\r\n</div>";
        return buffer
    })
});