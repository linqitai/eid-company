define("xg/eid-company/1.0.4/c/handlebars/modifyPassword.handlebars",["alinw/handlebars/1.3.0/runtime"],function(require,exports,module){var Handlebars=require("alinw/handlebars/1.3.0/runtime"),template=Handlebars.template;module.exports=template(function(Handlebars,depth0,helpers,partials,data){return this.compilerInfo=[4,">= 1.0.0"],helpers=this.merge(helpers,Handlebars.helpers),data=data||{},'<div id="modal-modifyPassword" class="modal fade">\r\n    <div class="modal-dialog">\r\n        <div class="modal-content radius">\r\n            <div class="modal-header">\r\n                <h3 class="modal-title ml20">修改密码</h3>\r\n                <a class="close" data-dismiss="modal" aria-hidden="true" href="javascript:void();">×</a>\r\n            </div>\r\n            <form class="form form-horizontal" id="modifyPasswordForm">\r\n                <div class="modal-body">\r\n                    <div class="row cl">\r\n                        <label class="form-label col-xs-4 col-sm-3">当前密码：</label>\r\n                        <div class="formControls col-xs-8 col-sm-9">\r\n                            <input type="password" class="input-text w320" placeholder="请输入老密码" name="olderPassword" id="olderPassword">\r\n                        </div>\r\n                    </div>\r\n                    <div class="row cl">\r\n                        <label class="form-label col-xs-4 col-sm-3">新密码：</label>\r\n                        <div class="formControls col-xs-8 col-sm-9">\r\n                            <input type="password" class="input-text w320" placeholder="请输入新密码" name="newPassword" id="newPassword">\r\n                        </div>\r\n                    </div>\r\n                    <div class="row cl">\r\n                        <label class="form-label col-xs-4 col-sm-3">新密码确认：</label>\r\n                        <div class="formControls col-xs-8 col-sm-9">\r\n                            <input type="password" class="input-text w320" placeholder="再次输入新密码" id="confirm" name="confirm">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class="modal-footer">\r\n                    <input class="btn btn-primary" type="submit" value="确定">\r\n                    <a class="btn mr23" data-dismiss="modal" aria-hidden="true">关闭</a>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>'})});