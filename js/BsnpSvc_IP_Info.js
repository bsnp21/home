var Default_Ports = {
    host: {
        http: 80,
        https: 443,
        desc: "default; service apache2 restart"
    },
    bsnpa: {
        http: 7778,
        https: 7775,
        desc: "systemctl start bsnpa.service;; restApi"
    },
    bsnpc: {
        http: 55000,
        https: 55005,
        desc: "systemctl start bsnpc.service;; controller"
    }
}

var BsnpSvc_IP_Info =
{
    Ports: Default_Ports,
    IP:
    {
        "34.227.20.213": {
            ports: Default_Ports,
            desc: "default."
        },
        "3.89.75.22": {
            ports: Default_Ports,
            desc: "wd07 not working"
        },
        "54.152.238.18": {
            ports: Default_Ports,
            desc: "wd08"
        },
        "3.84.149.139":{
            ports: Default_Ports,
            desc: "wd09"
        }
    }

}
