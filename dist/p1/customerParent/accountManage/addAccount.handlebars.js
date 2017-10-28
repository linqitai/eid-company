define("xg/eid-company/1.0.4/p/customerParent/accountManage/addAccount.handlebars",["alinw/handlebars/1.3.0/runtime"],function(require,exports,module){var Handlebars=require("alinw/handlebars/1.3.0/runtime"),template=Handlebars.template;module.exports=template(function(Handlebars,depth0,helpers,partials,data){return this.compilerInfo=[4,">= 1.0.0"],helpers=this.merge(helpers,Handlebars.helpers),data=data||{},'<div id="modal-add" class="modal fade"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\r\n    <div class="modal-dialog">\r\n        <div class="modal-content radius">\r\n            <div class="modal-header">\r\n                <h2 class="modal-title">新增</h2>\r\n                <a class="close" data-dismiss="modal" aria-hidden="true">×</a>\r\n            </div>\r\n            <form class="form form-horizontal" id="addForm">\r\n                <div class="modal-body" style="overflow: hidden">\r\n                    <div class="row cl">\r\n                        <label class="labelText col-xs-4 col-sm-3 text-c">手机号码：</label>\r\n                        <div class="formControls col-xs-8 col-sm-9">\r\n                            <input type="hidden" class="input-text pull-left" id="customerId" name="customerId">\r\n                            <input type="text" class="input-text pull-left" id="addMobile" name="mobile" maxlength="11" placeholder="请输入手机号码做为用户名与初始密码">\r\n                        </div>\r\n                    </div>\r\n                    <div class="row cl mt10">\r\n                        <label class="labelText col-xs-4 col-sm-3 text-c">姓名：</label>\r\n                        <div class="formControls col-xs-8 col-sm-9">\r\n                            <input type="text" class="input-text pull-left" id="realName" name="realName" placeholder="请输入姓名">\r\n                        </div>\r\n                    </div>\r\n                    <div class="row cl mt10">\r\n                        <label class="labelText col-xs-4 col-sm-3 text-c">类型：</label>\r\n                        <div class="formControls col-xs-8 col-sm-9 text-l">\r\n                            <select class="input-text pull-left w100" id="roleId" name="roleId">\r\n                                <!--<option value="1">管理员</option>\r\n                                <option value="2">操作员</option>\r\n                                <option value="3">财务</option>-->\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class="row cl">\r\n                        <label class="labelText col-xs-4 col-sm-3 text-c">状态：</label>\r\n                        <div class="formControls col-xs-8 col-sm-9" id="statusSelectBox">\r\n                            <input type="hidden" class="input-text pull-left" id="status" name="status" value="0">\r\n                            <div class="radio-box">\r\n                                <input type="radio" id="open" name="radio2" checked>\r\n                                <label for="open">启用</label>\r\n                            </div>\r\n                            <div class="radio-box">\r\n                                <input type="radio" id="forbidden" name="radio2">\r\n                                <label for="forbidden">禁用</label>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class="modal-footer">\r\n                    <input class="btn btn-primary" type="submit" value="确定">\r\n                    <a class="btn" data-dismiss="modal" aria-hidden="true">关闭</a>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>'})});