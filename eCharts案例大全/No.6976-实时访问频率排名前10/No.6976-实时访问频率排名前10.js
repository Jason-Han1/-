option = {
    "tooltip":{
        "show":false,
        "trigger":"axis",
        "axisPointer":{
            "type":"shadow"
        }
    },
    "grid":{
        "containLabel":true,
        "left":40,
        "right":60,
        "bottom":0,
        "top":40
    },
    "xAxis":{
        "type":"value",
        "name":"访问量"
    },
    "yAxis":{
        "type":"category",
        "inverse":true,
        "axisLine":{
            "show":false
        }
    },
    "series":[
        {
            "type":"bar",
            "barWidth":36,
            "cursor":"default",
            "label":{
                "normal":{
                    "show":true,
                    "position":"insideLeft",
                    "color":"#000",
                    "fontSize":14,
                    "textBorderColor":"#333",
                    "textBorderWidth":0,
                    "formatter":(data) => {
                        return `${data.name}：${data.value}`
                    }
                }
            },
            "itemStyle":{
                "barBorderRadius":[
                    0,
                    50,
                    50,
                    0],
                "color":{
                    "x":0,
                    "y":0,
                    "x2":1,
                    "y2":0,
                    "type":"linear",
                    "global":false,
                    "colorStops":[
                        {
                            "offset":0,
                            "color":"#7bcfa6"
                        },
                        {
                            "offset":1,
                            "color":"#FE8463"
                        }]
                }
            },
            "data":[
                {
                    "name":"heartbeat",
                    "value":29
                },
                {
                    "name":"/SmartBulb/v1/device/devicedetail",
                    "value":19
                },
                {
                    "name":"/10a/v1/device/devicedetail",
                    "value":12
                },
                {
                    "name":"getFirmwareUpdateInfoList",
                    "value":11
                },
                {
                    "name":"/15a/v1/device/devicedetail",
                    "value":6
                },
                {
                    "name":"/inwallswitch/v1/device/devicedetail",
                    "value":4
                },
                {
                    "name":"/outdoorsocket15a/v1/device/devicedetail",
                    "value":4
                },
                {
                    "name":"getUserInfo",
                    "value":2
                },
                {
                    "name":"/131airPurifier/v1/device/deviceDetail",
                    "value":2
                },
                {
                    "name":"bypass",
                    "value":2
                }]
        }]
}

setInterval(() => {
    
    for (var i = 0; i < 10; i++) {
        option.series[0].data[i].value = parseInt((Math.random() * 50))
    }
    
    option.series[0].data.sort((a, b) => {
        return a.value > b.value ? -1 : 1
    })
    
    myChart.setOption(option)
    
}, 3000)
