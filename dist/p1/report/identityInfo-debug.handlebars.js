define("xg/eid-company/1.0.4/p/report/identityInfo-debug.handlebars", ["alinw/handlebars/1.3.0/runtime-debug"], function(require, exports, module) {
    var Handlebars = require("alinw/handlebars/1.3.0/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [4, ">= 1.0.0"];
        helpers = this.merge(helpers, Handlebars.helpers);
        data = data || {};
        var buffer = "",
            stack1, helper, options, functionType = "function",
            escapeExpression = this.escapeExpression,
            helperMissing = helpers.helperMissing,
            self = this;

        function program1(depth0, data) {
            return '\r\n        <div class="currentPic pull-left ml29">\r\n            <img src="http://static.hpbanking.com/xg/uploads/files/fc70a224390427c58c0cd72f3b63e598-128-128.png" width="175">\r\n        </div>\r\n        <div class="identityFrontthir-bottom" style="color:white;">本人照片</div>\r\n        '
        }

        function program3(depth0, data) {
            var buffer = "",
                stack1, helper;
            buffer += '\r\n        <div class="currentPicNoborder pull-left ml29">\r\n            <img src="';
            if (helper = helpers.faceUrl) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.faceUrl;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + '" width="175">\r\n        </div>\r\n        ';
            return buffer
        }

        function program5(depth0, data) {
            return '\r\n            <div class="currentPic pull-left ml29"  style="margin:16px 0 0 45px;">\r\n                <img src="http://static.hpbanking.com/xg/uploads/files/fc70a224390427c58c0cd72f3b63e598-128-128.png" width="175">\r\n            </div>\r\n             <div class="identityFrontthir-bottom" style="left:75px;top:200px;color:white;">身份证正面照(拍摄)</div>\r\n            '
        }

        function program7(depth0, data) {
            var buffer = "",
                stack1, helper;
            buffer += '\r\n            <div class="pic-bg id-pic">\r\n                <img src="';
            if (helper = helpers.frontImage) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.frontImage;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + '">\r\n            </div>\r\n             <div class="identityFrontthir-bottom" style="left:90px;top:200px;color:white;">身份证正面照(拍摄)</div>\r\n            ';
            return buffer
        }

        function program9(depth0, data) {
            return '\r\n            <div class="currentPic pull-left ml29" style="margin-left:0px;">\r\n                <img src="http://static.hpbanking.com/xg/uploads/files/fc70a224390427c58c0cd72f3b63e598-128-128.png" width="175">\r\n            </div>\r\n             <div class="identityFrontthir-bottom" style="left:22px;top:184px;color:white;">身份证反面照(拍摄)</div>\r\n            '
        }

        function program11(depth0, data) {
            var buffer = "",
                stack1, helper;
            buffer += '\r\n            <div class=" id-pics" style="margin:0 0 0 -88px">\r\n                <img src="';
            if (helper = helpers.backImage) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.backImage;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + '">\r\n            </div>\r\n             <div class="identityFrontthir-bottom" style="left:-5px;top:184px;color:white;">身份证反面照(拍摄)</div>\r\n            ';
            return buffer
        }

        function program13(depth0, data) {
            return '\r\n        <div class="currentPic pull-left ml29" style="margin:16px 0 0 -78px;">\r\n            <img src="http://static.hpbanking.com/xg/uploads/files/fc70a224390427c58c0cd72f3b63e598-128-128.png" width="175">\r\n        </div>\r\n         <div class="identityFrontthir-bottom" style="left:-20px;top:200px;color:white;">本人照片</div>\r\n        '
        }

        function program15(depth0, data) {
            var buffer = "",
                stack1, helper;
            buffer += '\r\n        <div class=" phonos">\r\n            <img src="';
            if (helper = helpers.faceUrl) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.faceUrl;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + '">\r\n        </div>\r\n         <div class="identityFrontthir-bottom" style="left:15px;top:200px;color:white;">本人照片</div>\r\n        ';
            return buffer
        }

        function program17(depth0, data) {
            return '\r\n        <div class="currentPic pull-left ml29" style="margin:16px 0 0 8px;">\r\n            <img src="http://static.hpbanking.com/xg/uploads/files/fc70a224390427c58c0cd72f3b63e598-128-128.png" width="175">\r\n        </div>\r\n          <div class="identityFrontthir-bottom"style="left:60px;top:200px;color:white;">公安证件照</div>\r\n        '
        }

        function program19(depth0, data) {
            var buffer = "",
                stack1, helper;
            buffer += '\r\n        <div class=" phono">\r\n            <img src="';
            if (helper = helpers.imgUrl) {
                stack1 = helper.call(depth0, {
                    hash: {},
                    data: data
                })
            } else {
                helper = depth0 && depth0.imgUrl;
                stack1 = typeof helper === functionType ? helper.call(depth0, {
                    hash: {},
                    data: data
                }) : helper
            }
            buffer += escapeExpression(stack1) + '">\r\n        </div>\r\n          <div class="identityFrontthir-bottom"style="left:90px;top:200px;color:white;">公安证件照</div>\r\n        ';
            return buffer
        }
        buffer += '<div class="title">照片识别</div>\r\n<div class="pull-left identitiesBox active" id="thretop" >\r\n    <div class="identity identityFront pull-left">\r\n        <div class="pull-left w170 clearfix">\r\n            <div class="lineBox">\r\n                <span class="lightblue">姓名</span><span class="addText">' + escapeExpression((helper = helpers.h || depth0 && depth0.h, options = {
            hash: {},
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.borrowerName, options) : helperMissing.call(depth0, "h", depth0 && depth0.borrowerName, options))) + '</span>\r\n            </div>\r\n            <div class="lineBox">\r\n                <!--<span class="lightblue">性别</span><span class="addText">' + escapeExpression((helper = helpers.infoSex || depth0 && depth0.infoSex, options = {
            hash: {},
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.sex, options) : helperMissing.call(depth0, "infoSex", depth0 && depth0.sex, options))) + '</span><span class="ml-15 lightblue">民族</span><span class="addText">';
        if (helper = helpers.nation) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.nation;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '</span>-->\r\n                <span class="lightblue">性别</span><span class="addText">' + escapeExpression((helper = helpers.infoSex || depth0 && depth0.infoSex, options = {
            hash: {},
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.sex, options) : helperMissing.call(depth0, "infoSex", depth0 && depth0.sex, options))) + '</span><span class="ml-15 lightblue">民族</span>\r\n                <span class="addText">' + escapeExpression((helper = helpers.h || depth0 && depth0.h, options = {
            hash: {},
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.nation, options) : helperMissing.call(depth0, "h", depth0 && depth0.nation, options))) + '</span>\r\n            </div>\r\n            <div class="lineBox">\r\n                <span class="lightblue">出生</span><span class="addText">' + escapeExpression((helper = helpers.h || depth0 && depth0.h, options = {
            hash: {},
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.birthdate, options) : helperMissing.call(depth0, "h", depth0 && depth0.birthdate, options))) + '</span>\r\n            </div>\r\n            <div class="lineBox" style="height:14px;line-height:14px !important;">\r\n                <span class="lightblue">住址</span><span class="addText">' + escapeExpression((helper = helpers.h || depth0 && depth0.h, options = {
            hash: {},
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.address, options) : helperMissing.call(depth0, "h", depth0 && depth0.address, options))) + '</span>\r\n            </div>\r\n        </div>\r\n        <div class="pull-right w80 mr-10">\r\n            <img src="';
        if (helper = helpers.imgUrl) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.imgUrl;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '" class="frontPic">\r\n        </div>\r\n        <div class="lineBox clearfix" style="position: absolute;bottom: 20px;">\r\n            <span class="lightblue">公民身份证号码</span><span class="addText" id="cardNum">' + escapeExpression((helper = helpers.h || depth0 && depth0.h, options = {
            hash: {},
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.cardNum, options) : helperMissing.call(depth0, "h", depth0 && depth0.cardNum, options))) + '</span>\r\n        </div>\r\n\r\n    </div>\r\n    <div class="identity identityBack pull-left ml29">\r\n        <div class="lineBox pdl20 mt100">\r\n            <span class="">签发机关</span><span class="addText">' + escapeExpression((helper = helpers.h || depth0 && depth0.h, options = {
            hash: {},
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.issuer, options) : helperMissing.call(depth0, "h", depth0 && depth0.issuer, options))) + '</span>\r\n        </div>\r\n        <div class="lineBox pdl20">\r\n            <span class="">有效期限</span><span class="addText">' + escapeExpression((helper = helpers.transform || depth0 && depth0.transform, options = {
            hash: {},
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.validDate, options) : helperMissing.call(depth0, "transform", depth0 && depth0.validDate, options))) + '</span>\r\n        </div>\r\n    </div>\r\n    <div class="identityFrontthir pull-left ml29">\r\n        ';
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(1, program1, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.faceUrl, "==", depth0 && depth0.null, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.faceUrl, "==", depth0 && depth0.null, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += " ";
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(3, program3, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.faceUrl, "!=", depth0 && depth0.null, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.faceUrl, "!=", depth0 && depth0.null, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += '\r\n        \r\n    </div>\r\n    \r\n\r\n</div>\r\n<div class="pull-left identitiesBox active" id="forbot">\r\n    <div >\r\n        <div class="identityFrontthir pull-left ml29" style="width:300px;height:180px;">\r\n            ';
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(5, program5, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.frontImage, "==", depth0 && depth0.null, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.frontImage, "==", depth0 && depth0.null, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += " ";
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(7, program7, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.frontImage, "!=", depth0 && depth0.null, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.frontImage, "!=", depth0 && depth0.null, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += '\r\n           \r\n        </div>\r\n        <div class="identityFrontthir pull-left ml29" style="margin:16px 0 0 126px;width:300px;height:180px;">\r\n            ';
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(9, program9, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.backImage, "==", depth0 && depth0.null, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.backImage, "==", depth0 && depth0.null, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += " ";
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(11, program11, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.backImage, "!=", depth0 && depth0.null, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.backImage, "!=", depth0 && depth0.null, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += '\r\n           \r\n        </div>\r\n    </div>\r\n <div class="identityFrontthir pull-left ml29">\r\n        ';
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(13, program13, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.faceUrl, "==", depth0 && depth0.null, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.faceUrl, "==", depth0 && depth0.null, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += " ";
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(15, program15, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.faceUrl, "!=", depth0 && depth0.null, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.faceUrl, "!=", depth0 && depth0.null, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += '\r\n       \r\n    </div>\r\n    <div class="identityFrontthir pull-left ml29">\r\n        ';
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(17, program17, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.imgUrl, "==", depth0 && depth0.null, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.imgUrl, "==", depth0 && depth0.null, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += " ";
        stack1 = (helper = helpers.ifCond || depth0 && depth0.ifCond, options = {
            hash: {},
            inverse: self.noop,
            fn: self.program(19, program19, data),
            data: data
        }, helper ? helper.call(depth0, depth0 && depth0.imgUrl, "!=", depth0 && depth0.null, options) : helperMissing.call(depth0, "ifCond", depth0 && depth0.imgUrl, "!=", depth0 && depth0.null, options));
        if (stack1 || stack1 === 0) {
            buffer += stack1
        }
        buffer += '\r\n      \r\n    </div>\r\n   \r\n\r\n</div>\r\n<div style="position:relative">\r\n    <img src="';
        if (helper = helpers.authorizUrl) {
            stack1 = helper.call(depth0, {
                hash: {},
                data: data
            })
        } else {
            helper = depth0 && depth0.authorizUrl;
            stack1 = typeof helper === functionType ? helper.call(depth0, {
                hash: {},
                data: data
            }) : helper
        }
        buffer += escapeExpression(stack1) + '" alt="" style="height:180px;width:300px;margin:40px 0 0 30px;">\r\n    <div style="position:absolute;color:white;bottom:-25px;left:140px;">授权书</div>\r\n</div>';
        return buffer
    })
});