option = {
    "tooltip":{
        "trigger":"axis"
    },
    "grid":{
        "containLabel":true,
        "left":0,
        "right":0,
        "bottom":0,
        "top":45
    },
    "legend":{
        "left":"center",
        "top":"top"
    },
    "xAxis":{
        "type":"category",
        "data": getXAxisData()
    },
    "yAxis":{
        "type":"value",
        "splitLine":{
            "lineStyle":{
                "type":"dashed",
                "color":"#DDD"
            }
        },
        "name":"次数/秒"
    },
    "series":[
        {
            "name":"APP 实时总访问频率",
            "type":"bar",
            "barMaxWidth":50,
            "stack":"总量",
            "label":{
                "show":true,
                "fontSize":18,
                "position":"inside",
                "formatter":{
                    "_custom":{
                        "type":"function",
                        "display":"<span>ƒ</span> formatter(parms)"
                    }
                }
            },
            "z":2,
            "data":[
                27,
                29,
                33,
                28,
                33,
                25,
                25,
                13,
                8,
                96]
        },
        {
            "name":"第三方 实时总访问频率",
            "type":"bar",
            "barMaxWidth":50,
            "stack":"总量",
            "label":{
                "show":true,
                "fontSize":18,
                "position":"inside",
                "formatter":{
                    "_custom":{
                        "type":"function",
                        "display":"<span>ƒ</span> formatter(parms)"
                    }
                }
            },
            "z":1,
            "data":[
                29,
                35,
                33,
                33,
                26,
                30,
                30,
                60,
                27,
                35]
        }]
}

function getXAxisData () {
    let data = []
    let now = Date.now()
    for (var i = 9; i >= 0; i--) {
        data.push(new Date(now - 3 * i * 1000).toTimeString().substring(0,8))
    }
    return data
}


setInterval(() => {
    
    if (option.xAxis.data.length >= 10) {
      option.xAxis.data.shift()
      option.series[0].data.shift()
      option.series[1].data.shift()
    }

    option.xAxis.data.push( new Date().toTimeString().substring(0,8) )

    option.series[0].data.push(parseInt(Math.random() * 100))
    
    option.series[1].data.push(parseInt(Math.random() * 100))
 
    myChart.setOption(option)
}, 3000)