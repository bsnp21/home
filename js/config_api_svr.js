function config_api_svr(configdata) {
    this.config_data = configdata
}
config_api_svr.prototype.web_url = function (proctocol) {
    var rest_addr = this.rest_addr(proctocol)
    var url = `http://${this.config_data.ip}/${this.config_data.web_path}?ip=${rest_addr}`
    return url
}
config_api_svr.prototype.rest_addr = function (proctocol) {
    var potname = `${proctocol}_port`  //proctocol=http or https 
    var port = this.config_data[potname]
    var url = `${proctocol}://${this.config_data.ip}:${port}`
    return url
}
config_api_svr.prototype.test_https_work = function () {
    var url = `https://${this.config_data.ip}:${this.config_data.https_port}/test_https_work`
    return url
}
var config_api_svrxxxx = {
    ip: "34.227.20.213",
    http_port: "7778",
    https_port: "7775",
    web_path: "/wdaws/bb/np/mySign.htm",
}
