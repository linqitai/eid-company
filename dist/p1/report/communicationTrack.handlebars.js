define("xg/eid-company/1.0.4/p/report/communicationTrack.handlebars",["alinw/handlebars/1.3.0/runtime"],function(require,exports,module){var Handlebars=require("alinw/handlebars/1.3.0/runtime"),template=Handlebars.template;module.exports=template(function(Handlebars,depth0,helpers,partials,data){function program1(depth0,data){var stack1,helper,buffer="";return buffer+=' \r\n        <tr class="text-c">\r\n            <td class="report-content">',(helper=helpers.online)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.online,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+'</td>\r\n            <td class="report-content">',(helper=helpers.province)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.province,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+"</td>\r\n            ",stack1=helpers["if"].call(depth0,depth0&&depth0.city,{hash:{},inverse:self.program(4,program4,data),fn:self.program(2,program2,data),data:data}),(stack1||0===stack1)&&(buffer+=stack1),buffer+='\r\n            <td class="report-content">',(helper=helpers.company)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.company,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+"</td>    \r\n        </tr>\r\n        "}function program2(depth0,data){var stack1,helper,buffer="";return buffer+=' <td class="report-content">',(helper=helpers.city)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.city,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+"</td>\r\n            "}function program4(depth0,data){var stack1,helper,buffer="";return buffer+='\r\n            <td class="report-content">',(helper=helpers.province)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.province,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+"</td>\r\n            "}function program6(depth0,data){return'\r\n        <tr>\r\n            <td class="text-c" colspan="8">查无数据</td>\r\n        </tr>\r\n        '}this.compilerInfo=[4,">= 1.0.0"],helpers=this.merge(helpers,Handlebars.helpers),data=data||{};var stack1,buffer="",functionType="function",escapeExpression=this.escapeExpression,self=this;return buffer+='<h2 class="text-c" style="font-size:40px;margin-top:54px;">其他综合信息</h2>\r\n<h3 class="text-c title-bold">手机号信息</h3>\r\n<table class="record mt40">\r\n    <tbody>\r\n        <tr>\r\n            <td>手机在网时长</td>\r\n            <td>手机号归属省份</td>\r\n            <td>手机号归属城市</td>\r\n            <td>手机号所属运营商</td>\r\n            \r\n        </tr>\r\n        ',stack1=helpers["if"].call(depth0,depth0,{hash:{},inverse:self.program(6,program6,data),fn:self.program(1,program1,data),data:data}),(stack1||0===stack1)&&(buffer+=stack1),buffer+='\r\n    </tbody>\r\n</table>\r\n<br>\r\n<p style="margin-bottom:10px;margin-left:20px;font-size:18px;color:#242424;line-height:30px;">说明：手机信息覆盖全国范围，移动、联通、电信三家运营商数据。</p>\r\n'})});