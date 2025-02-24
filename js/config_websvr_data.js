var config_websvr_data = {
    ip: "34.224.88.91",
    http_port: "7778",
    https_port: "7775",

    mySignIn_url: function () {
        return `http://${config_websvr_data.ip}/wdaws/bb/np/mySignIn.htm?sip=http://${config_websvr_data.ip}:7778`
    }

}



//config_websvr_data.mySignIn_url = `http://${config_websvr_data.ip}/wdaws/bb/np/mySignIn.htm?sip=http://${config_websvr_data.ip}:7778`




/////
//reminder
/////
config_websvr_data.mySignIn_path_file = "wdaws/bb/np/mySignIn.htm"

//https://bsnp21.github.io/bb/np/mySignIn.htm?sip=https://34.227.20.213:7775
config_websvr_data.github_host_signin_url = "https://bsnp21.github.io/bb/np/mySignIn.htm" //?sip=https://34.227.20.213:7775",

config_websvr_data.obilib_work_path = "obi/Lab/obilab/test1/oohtm/works1"
