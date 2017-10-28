define("xg/eid-company/1.0.4/c/js/getInfoSocket-debug", [], function(require, exports, module) {
    var websocket = null;
    if ("WebSocket" in window) {
        websocket = new ReconnectingWebSocket("ws://192.168.18.220:8040/socket");
        console.log("websocket");
        var info = {
            item: {
                itemId: 341,
                isnew: 1,
                isChecked: 0,
                cardNum: "330327199207250810",
                firstCustomerId: 0,
                secondCustomerId: null,
                companyId: 1,
                result: null,
                status: 0,
                faceUrl: "http://static.hpbanking.com/xg/uploads/eid/faceImg/a19de1800778a01b5be327444deffe30.jpg",
                macId: "00:88:dc:01:70:67",
                isDeleted: 0,
                created: 1481535145e3,
                updated: 1481535145e3,
                borrowerName: "林祺泰",
                sex: 1,
                nation: "汉",
                address: "浙江省苍南县龙港镇林头村４６号",
                birthdate: "1992年07月25日",
                issuer: "苍南县公安局",
                validDate: "2008/08/26-\t2018/08/26",
                imgUrl: "http://static.hpbanking.com/xg/uploads/eid/idenImg/add5a350f84b87bfac682712f7550857.jpg",
                companyName: "测试总部"
            },
            clientType: "server"
        };
        console.log(info.item);
        $("#borrowerName").html(info.item.borrowerName);
        $("#sex").html(info.item.sex == 2 ? "女" : "男");
        $("#nation").html(info.item.nation);
        $("#birthdate").html(info.item.birthdate);
        $("#maddress").html(info.item.address);
        $("#imgUrl").attr("src", info.item.imgUrl);
        $("#cardNum").html(info.item.cardNum);
        $("#issuer").html(info.item.issuer);
        $("#validDate").html(info.item.validDate);
        $("#faceUrl").attr("src", info.item.faceUrl);
        $("#result").html(info.item.result == 0 ? "人脸比对成功" : "人脸比对失败");
        $("#infoSureBtn").attr("href", "/cycle/credit/report.htm?itemId=" + info.item.itemId);
        $("#modal-checkInfo").modal("show").css("left", "45%");
        if ($(".passCheckBtn").text() == "人脸比对成功") {
            $(".passCheckBtn").css("color", "green")
        } else {
            $(".passCheckBtn").css("color", "red")
        }
    } else {
        alert("当前浏览器不支持本系统的某些功能，为了更好得体验，清风换个浏览器")
    }
    websocket.onerror = function() {
        setMessageInnerHTML("error")
    };
    websocket.onopen = function(event) {
        $.ajax({
            type: "post",
            url: "/common/ajax/user.json",
            success: function(data) {
                if (data.login == true) {
                    companyId = data.user.companyId;
                    var msg = '{"clientType":"client","companyId":' + companyId + "}";
                    websocket.send(msg);
                    setMessageInnerHTML('{"open":1}')
                } else {
                    console.log("未登录或登录超时");
                    window.location.href = "/customer/login.htm"
                }
            }
        })
    };
    websocket.onmessage = function(event) {
        setMessageJson(event.data)
    };
    websocket.onclose = function() {
        setMessageInnerHTML('{"close":1}');
        $.ajax({
            type: "post",
            url: "/common/ajax/user.json",
            success: function(data) {
                if (data.login == true) {} else {
                    console.log("未登录或登录超时");
                    window.location.href = "/customer/login.htm"
                }
            }
        })
    };
    window.onbeforeunload = function() {
        websocket.close()
    };

    function setMessageInnerHTML(innerHTML) {
        console.log(innerHTML)
    }

    function setMessageJson(innerHTML) {
        var info = $.parseJSON(innerHTML);
        console.log(info.item);
        $("#borrowerName").html(info.item.borrowerName);
        $("#sex").html(info.item.sex == 2 ? "女" : "男");
        $("#nation").html(info.item.nation);
        $("#birthdate").html(info.item.birthdate);
        $("#maddress").html(info.item.address);
        $("#imgUrl").attr("src", info.item.imgUrl);
        $("#cardNum").html(info.item.cardNum);
        $("#issuer").html(info.item.issuer);
        $("#validDate").html(info.item.validDate);
        $("#faceUrl").attr("src", info.item.faceUrl);
        $("#result").html(info.item.result == 0 ? "人脸比对成功" : "人脸比对失败");
        $("#infoSureBtn").attr("href", "/cycle/credit/report.htm?itemId=" + info.item.itemId);
        $("#modal-checkInfo").modal("show").css("left", "45%");
        if ($(".passCheckBtn").text() == "人脸比对成功") {
            $(".passCheckBtn").css("color", "green")
        } else {
            $(".passCheckBtn").css("color", "red")
        }
    }

    function closeWebSocket() {
        websocket.close()
    }

    function send() {
        var message = document.getElementById("text").value;
        websocket.send(message)
    }

    function openWebSocket() {
        console.log("openWebSocket");
        if ("WebSocket" in window) {
            websocket = new WebSocket("ws://192.168.18.220:8020/")
        } else {
            alert("当前浏览器不支持本系统的某些功能，为了更好得体验，清风换个浏览器")
        }
    }
});