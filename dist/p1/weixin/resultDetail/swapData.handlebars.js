define("xg/eid-company/1.0.4/p/weixin/resultDetail/swapData.handlebars",["alinw/handlebars/1.3.0/runtime"],function(require,exports,module){var Handlebars=require("alinw/handlebars/1.3.0/runtime"),template=Handlebars.template;module.exports=template(function(Handlebars,depth0,helpers,partials,data){function program1(depth0,data){var stack1,helper,buffer="";return buffer+='\r\n    <div class="item">\r\n        <div><span class="mylabel">典当物品</span><span class="text pull-right name">XXXXXX</span></div>\r\n        <div><span class="mylabel">典当金额</span><span class="text pull-right idCard">XXXXXX</span></div>\r\n        <div><span class="mylabel">典当地点</span><span class="text pull-right cardNumber">',(helper=helpers.cardNumber)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.cardNumber,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+'</span></div>\r\n        <div><span class="mylabel">典当时间</span><span class="text pull-right time">',(helper=helpers.time)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.time,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+'</span></div>\r\n        <div><span class="mylabel">违约行为</span><span class="text pull-right time">',(helper=helpers.time)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.time,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+'</span></div>\r\n        <div><span class="mylabel">描述</span><span class="text pull-right time">',(helper=helpers.time)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.time,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+"</span></div>\r\n    </div>\r\n"}this.compilerInfo=[4,">= 1.0.0"],helpers=this.merge(helpers,Handlebars.helpers),data=data||{};var stack1,buffer="",functionType="function",escapeExpression=this.escapeExpression,self=this;return stack1=helpers.each.call(depth0,depth0,{hash:{},inverse:self.noop,fn:self.program(1,program1,data),data:data}),(stack1||0===stack1)&&(buffer+=stack1),buffer+="\r\n"})});