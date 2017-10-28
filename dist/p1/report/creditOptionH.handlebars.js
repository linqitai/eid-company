define("xg/eid-company/1.0.4/p/report/creditOptionH.handlebars",["alinw/handlebars/1.3.0/runtime"],function(require,exports,module){var Handlebars=require("alinw/handlebars/1.3.0/runtime"),template=Handlebars.template;module.exports=template(function(Handlebars,depth0,helpers,partials,data){this.compilerInfo=[4,">= 1.0.0"],helpers=this.merge(helpers,Handlebars.helpers),data=data||{};var stack1,helper,buffer="",functionType="function",escapeExpression=this.escapeExpression;return buffer+=' <div id="modal-creditOption" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\r\n  <div class="modal-dialog">\r\n    <div class="modal-content radius">\r\n      <div class="modal-header">\r\n        <h5 class="modal-title" style="font-size: 18px">提示</h5>\r\n        <a class="close" data-dismiss="modal" aria-hidden="true" href="javascript:void();">×</a>\r\n      </div>\r\n      <form class="form form-horizontal" id="creditOptionForm">\r\n        <input type="hidden" name="encryptKey" id="encryptKey" value="',(helper=helpers.encryptKey)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.encryptKey,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+'">\r\n        <input type="hidden" name="status" id="status" value="',(helper=helpers.status)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.status,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+'">\r\n        <div class="modal-body">\r\n            客户：',(helper=helpers.borrowerName)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.borrowerName,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;确认",(helper=helpers.optionText)?stack1=helper.call(depth0,{hash:{},data:data}):(helper=depth0&&depth0.optionText,stack1=typeof helper===functionType?helper.call(depth0,{hash:{},data:data}):helper),buffer+=escapeExpression(stack1)+'？\r\n        </div>\r\n        <div class="modal-footer">\r\n          <input class="btn btn-primary" type="submit" value="确认">\r\n          <button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>'})});