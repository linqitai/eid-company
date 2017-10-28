define("xg/eid-company/1.0.4/p/adminAccount/customerManageH/customerTableH.handlebars",["alinw/handlebars/1.3.0/runtime"],function(require,exports,module){var Handlebars=require("alinw/handlebars/1.3.0/runtime"),template=Handlebars.template;module.exports=template(function(Handlebars,depth0,helpers,partials,data){function program1(depth0,data){var stack1,buffer="";return buffer+=" ",stack1=helpers.each.call(depth0,depth0,{hash:{},inverse:self.noop,fn:self.program(2,program2,data),data:data}),(stack1||0===stack1)&&(buffer+=stack1),buffer+=" "}function program2(depth0,data){var stack1,helper,options,buffer="";return buffer+="\r\n    <tr>\r\n        <td>",(helper=helpers.companyName)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.companyName,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+"</td>\r\n        <td>",(helper=helpers.typeName)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.typeName,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+"</td>\r\n        <td>\r\n            ",helper=helpers.ifCond||depth0&&depth0.ifCond,options={hash:{},inverse:self.noop,fn:self.program(3,program3,data),data:data},stack1=helper?helper.call(depth0,depth0&&depth0.isNeedCall,"==","0",options):helperMissing.call(depth0,"ifCond",depth0&&depth0.isNeedCall,"==","0",options),(stack1||0===stack1)&&(buffer+=stack1),buffer+=" ",helper=helpers.ifCond||depth0&&depth0.ifCond,options={hash:{},inverse:self.noop,fn:self.program(5,program5,data),data:data},stack1=helper?helper.call(depth0,depth0&&depth0.isNeedCall,"==","1",options):helperMissing.call(depth0,"ifCond",depth0&&depth0.isNeedCall,"==","1",options),(stack1||0===stack1)&&(buffer+=stack1),buffer+="\r\n        </td>\r\n        <td>",(helper=helpers.linkMan)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.linkMan,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+"</td>\r\n        <td>",(helper=helpers.phone)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.phone,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+"</td>\r\n        <td>"+escapeExpression((helper=helpers.formatMoney||depth0&&depth0.formatMoney,options={hash:{},data:data},helper?helper.call(depth0,depth0&&depth0.remainAmount,options):helperMissing.call(depth0,"formatMoney",depth0&&depth0.remainAmount,options)))+"</td>\r\n        <td>",(helper=helpers.province)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.province,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1),(helper=helpers.city)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.city,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1),(helper=helpers.address)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.address,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+"</td>\r\n        ",helper=helpers.ifCond||depth0&&depth0.ifCond,options={hash:{},inverse:self.program(9,program9,data),fn:self.program(7,program7,data),data:data},stack1=helper?helper.call(depth0,depth0&&depth0.status,"==",0,options):helperMissing.call(depth0,"ifCond",depth0&&depth0.status,"==",0,options),(stack1||0===stack1)&&(buffer+=stack1),buffer+="\r\n        <td>",(helper=helpers.deviceCount)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.deviceCount,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+'</td>\r\n        <td><a href="/company/customerDetail.htm?companyId=',(helper=helpers.companyId)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.companyId,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+'" class="detailInfor">详情</a></td>\r\n    </tr>\r\n    '}function program3(depth0,data){return'\r\n            <span class="c-green">不需要</span> '}function program5(depth0,data){return'\r\n            <span class="c-blue">需要</span> '}function program7(depth0,data){return'\r\n        <td class="c-red">禁用</td>'}function program9(depth0,data){return'\r\n        <td class="c-green">启用</td>'}function program11(depth0,data){return'\r\n    <tr>\r\n        <td class="text-c" colspan="8">查无数据</td>\r\n    </tr>\r\n    '}this.compilerInfo=[4,">= 1.0.0"],helpers=this.merge(helpers,Handlebars.helpers),data=data||{};var stack1,buffer="",functionType="function",escapeExpression=this.escapeExpression,self=this,helperMissing=helpers.helperMissing;return buffer+='<thead class="text-c">\r\n    <tr>\r\n        <th>客户名称</th>\r\n        <th>客户类型</th>\r\n        <th>接口</th>\r\n        <th>联系人</th>\r\n        <th>联系电话</th>\r\n        <th>剩余金额</th>\r\n        <th>地址</th>\r\n        <th>状态</th>\r\n        <th>设备数量</th>\r\n        <th>操作</th>\r\n    </tr>\r\n</thead>\r\n<tbody class="text-c">\r\n    ',stack1=helpers["if"].call(depth0,depth0,{hash:{},inverse:self.program(11,program11,data),fn:self.program(1,program1,data),data:data}),(stack1||0===stack1)&&(buffer+=stack1),buffer+="\r\n</tbody>"})});