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
    "http": [7778, 55000],
    "https": [7775, 55005],
    "ip": {
        "34.227.20.213": "default",
        "3.89.75.22": "wd07",
        "54.152.238.18": "wd08"
    },


    Ports: Default_Ports,
    IP:
    {
        "34.227.20.213": {
            port: Default_Ports,
            desc: "default."
        },
        "3.89.75.22": {
            port: Default_Ports,
            desc: "wd07 not working"
        },
        "54.152.238.18": {
            port: Default_Ports,
            desc: "wd08"
        }
    }

}
