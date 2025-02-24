
function Generate_IP_Config_File(){
   
    #dig +short myip.opendns.com @resolver1.opendns.com 
    SvrIP=`dig +short myip.opendns.com @resolver1.opendns.com`
    echo SvrIP=${SvrIP}

    if [ ! -z "${SvrIP}" -a "${SvrIP}" == "" ]; then
        echo "SvrIP is empty!"
        exit
    fi
}

 Generate_IP_Config_File 

 if [ ! -z "$1" -a "$1" == "" ]; then
        echo "SvrIP is empty!"
        exit
    fi

FileName="InstalledDeviceIP.js"
echo " InstalledDeviceIP = '$1'" > ${FileName}
git add *
git commit -m "'$1'"
git push