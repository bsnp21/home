function gen_test_ip_availability() {
    var _THIS = this

    function gen_host() {
        // href="http://34.227.20.213/wdaws/bb/np/mySignIn.htm?sip=http://34.227.20.213:7778"
        ///href="http://34.227.20.213/wdaws/bb/np/mySignIn.htm?sip=http://34.227.20.213:7778&rep=https://wdingsoft@bitbucket.org/bsnp21/guest_01.git&pat=&opt="
        // hostipaddress list.
        // svr ip list (including githut.io)
        // svr port https or http. 
        var protocal = $("#host_cap .protocal.hili").text()
        var port = BsnpSvc_IP_Info.Ports.host
        var Hostary = ["./api_demo_local.htm","../np/mySignIn.htm", "https://bsnp21.github.io/bb/np/mySignIn.htm"];
        Object.keys(BsnpSvc_IP_Info.IP).forEach(function (ip) {
            Hostary.push(`${protocal}://${ip}:${port[protocal]}/wdaws/bb/np/mySignIn.htm`)
        })
        console.log(Hostary)
        var str = ""
        Hostary.forEach(function (key, i) {
            var default_hili = (3 === i) ? " hili" : ""
            str += `<tr><td>${i}</td><td class='host${default_hili}'>${key}</td></tr>`
        })
        $("#hostaddr").html(str)
        $(".host").on("click", function () {
            $(".host.hili").removeClass("hili")
            $(this).addClass("hili")
            _THIS.gen_linker()
        })
    }
    function gen_svc() {
        var protocal = $("#svr_cap .protocal.hili").text().trim()
        var str = "<tr><td>-</td></tr><tr><td>-</td></tr>"
        Object.keys(BsnpSvc_IP_Info.IP).forEach(function (ip, i) {
            var url = `${protocal}://${ip}:${BsnpSvc_IP_Info.Ports.bsnpa[protocal]}`
            var portc = BsnpSvc_IP_Info.Ports.bsnpc[protocal]
            var url_c = `${protocal}://${ip}:${portc}`
            var par = `?sip=${url}`
            var default_hili = (0 === i) ? " hili" : ""
            str += `<tr><td class='svc${default_hili}' ip='${ip}'>${par}</td><td><a href='${url}'>/</a></td><td><a href='${url}/get_OTK'>get_OTK</a></td><td><a href='${url_c}'>${portc}</a></td></tr>`
        })
        $("#svcaddr").html(str)
        $(".svc").on("click", function () {
            $(".svc.hili").removeClass("hili")
            $(this).addClass("hili")
            _THIS.gen_linker()

        })
    }


   

    $(function () {
        gen_host()
        gen_svc()
        
        $("#svr_cap .protocal").on("click", function () {
            $("#svr_cap .protocal.hili").removeClass("hili")
            $(this).addClass("hili")
            gen_svc()
            _THIS.gen_linker()
        })

        $("#host_cap .protocal").on("click", function () {
            $("#host_cap .protocal.hili").removeClass("hili")
            $(this).addClass("hili")
            gen_host()
            _THIS.gen_linker()
        })

        _THIS.gen_linker()
    })
}
gen_test_ip_availability.prototype.guest_auto_login = function () {
   
    var par = `&guest_auto_login=1`
    return par
}
gen_test_ip_availability.prototype.gen_linker = function (i) {
    var str = $(".host.hili").text()
    str += $(".svc.hili").text()
    
    $("#linkstr").text(str )
    $("#linkstr").attr("href", str )
    console.log("linker=",str)
    return str
}
$(function () {
    var tester = new gen_test_ip_availability()
})