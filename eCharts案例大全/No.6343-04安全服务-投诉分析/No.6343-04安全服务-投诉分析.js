var xData = function() {
    var data = ["新福利", "溢通公司", "南沙巴士", "从化分公司", "花都恒通", "二巴一分", "二巴二分", "番禺片区", "佛广集团", "客运旅包"];
    return data;
}();

var data = [16,
    11,
    8,
    14,
    17,
    16,
    11,
    8,
    14,
    17
]

var filterData = function() {
    const max = Math.max(...data)
    const notMaxData = []
    const maxData = []
    data.forEach(it => {
        if (it === max) {
            notMaxData.push(0)
            maxData.push(it)
        } else {
            notMaxData.push(it)
            maxData.push(0)
        }

    })
    return {
        'notMaxData': notMaxData,
        'maxData': maxData
    }
}

option = {
    backgroundColor: "RGBA(7, 28, 51, 1)",
    legend: {
        data: ['投诉频次', '最高'],
        right: "10%",
        top: 20,
        itemWidth: 60,
        itemHeight: 30,
        type: "plain",
        textStyle: {
            color: "RGBA(154, 209, 253, 1)",
            fontSize: 30
        }
    },
    "tooltip": {
        "show":false,
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }
        },
        formatter:function(params){
            const tip=params[0].marker + ':' + params[0].seriesName + (params[0].value+params[1].value)
            return tip
        }
    },
    "grid": {
        "borderWidth": 0,
        "top": 110,
        "bottom": 95,
        textStyle: {
            color: "#fff"
        }
    },
    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: 'rgba(255,255,255,.5)'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
            color: 'rgba(255,255,255,0.7)',
            fontSize: 18
        },
        "data": xData,
    }],
    "yAxis": [{
        "type": "value",
        "splitLine": {
            "show": true,
            lineStyle: {
                type: 'dashed',
                color: "RGBA(3, 75, 97, 1)"
            }
        },
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
            color: 'rgba(255,255,255,0.5)',
            fontSize: 20

        },
        "splitArea": {
            "show": false
        },

    }],
    "series": [{
            "name": "投诉频次",
            "type": "bar",
            "stack": "1",
            "barMaxWidth": 35,
            "barGap": "10%",
            "label":{
                "show":true,
                "color":'#fff',
                "position":'top',
                "fontSize":15,
                  "formatter":(params)=>{
                    if(filterData().maxData[params.dataIndex]===0){
                          return params.data
                    } else {
                        return ''
                    }
                },
            },
            "itemStyle": {
                "normal": {
                    "color": {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(0, 214, 255, 0.6)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(83, 14, 224, 0.15)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    opacity: 1,
                   
                },


            },
            "data": filterData().notMaxData,
        },
        {
            "name": "最高",
            "type": "bar",
            "stack": "1",
            "barMaxWidth": 35,
            "barGap": "10%",
             "label":{
                "show":true,
                "color":'#fff',
                "position":'top',
                 "fontSize":15,
                  "formatter":(params)=>{
                    if(params.data!==0){
                          return params.data
                    } else {
                        return ''
                    }
                },
            },
            "itemStyle": {
                "normal": {
                    "color": {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(191,0,253, 1)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(83,14,224, 0.2)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    opacity: 1
                    
                },


            },
            "data": filterData().maxData,
        }

    ]
}