define("xg/eid-company/1.0.4/p/customerParent/rechargeManage/queryBoxTmp.handlebars",["alinw/handlebars/1.3.0/runtime"],function(require,exports,module){var Handlebars=require("alinw/handlebars/1.3.0/runtime"),template=Handlebars.template;module.exports=template(function(Handlebars,depth0,helpers,partials,data){function program1(depth0,data){var helper,options,buffer="";return buffer+='\r\n<div class="queryBox text" id="statusSelect">\r\n    总充值：'+escapeExpression((helper=helpers.formatMoney||depth0&&depth0.formatMoney,options={hash:{},data:data},helper?helper.call(depth0,depth0&&depth0.totalAmount,options):helperMissing.call(depth0,"formatMoney",depth0&&depth0.totalAmount,options)))+"元，剩余："+escapeExpression((helper=helpers.formatMoney||depth0&&depth0.formatMoney,options={hash:{},data:data},helper?helper.call(depth0,depth0&&depth0.remainAmount,options):helperMissing.call(depth0,"formatMoney",depth0&&depth0.remainAmount,options)))+"元，已使用："+escapeExpression((helper=helpers.formatMoney||depth0&&depth0.formatMoney,options={hash:{},data:data},helper?helper.call(depth0,depth0&&depth0.useAmount,options):helperMissing.call(depth0,"formatMoney",depth0&&depth0.useAmount,options)))+"元，当前超用："+escapeExpression((helper=helpers.formatMoney||depth0&&depth0.formatMoney,options={hash:{},data:data},helper?helper.call(depth0,depth0&&depth0.overUsedAmount,options):helperMissing.call(depth0,"formatMoney",depth0&&depth0.overUsedAmount,options)))+"元 （充值请拨打138-6814-7190（盛经理））\r\n</div>\r\n"}function program3(depth0,data){return" "}this.compilerInfo=[4,">= 1.0.0"],helpers=this.merge(helpers,Handlebars.helpers),data=data||{};var stack1,buffer="",helperMissing=helpers.helperMissing,escapeExpression=this.escapeExpression,self=this;return buffer+=" ",stack1=helpers["if"].call(depth0,depth0,{hash:{},inverse:self.program(3,program3,data),fn:self.program(1,program1,data),data:data}),(stack1||0===stack1)&&(buffer+=stack1),buffer+="\r\n\r\n\r\n\r\n"})});