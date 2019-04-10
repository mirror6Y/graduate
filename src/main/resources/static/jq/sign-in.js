//登录
function jump() {


    //获取账号
    var account = $("#account").val();
    var password = $("#password").val();

    //json字符串
    var object = {
        username: account,
        password: password,
    }

    $.ajax({
        url: "/login/login",        //login是登录接口
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        data: {
            "account":
            account,
            "password":
            password
        }
        ,
//      JSON.stringify(object),
        success: function (result) {
            if (result == "index") {
                alert("登录成功");
            } else {
                alert("账号或密码不正确");
            }
        }
        ,
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log('XMLHttpRequest:' + XMLHttpRequest);
            console.log('errorThrown:' + errorThrown);
            alert('网络异常！尝试刷新网页解决问题')
            console.log(object);
        }
    })
    ;
}
