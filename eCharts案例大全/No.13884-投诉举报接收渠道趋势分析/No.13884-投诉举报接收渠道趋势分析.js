var xData = function() {
    var data = [];
    for (var i = 1; i < 13; i++) {
        data.push(i+'月');
    }
    return data;
}();
options = [{
    title: {
        textStyle:{
             fontSize: '15'
        }
    },
    backgroundColor:'#fff',
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
       grid: {
        top:30,
        right:'40%',
        bottom:'70%'
    },
    legend: {
        left:100,
        data: ['电话','网络', '信件','走访','其他']
    },
     "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#000'
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
            textStyle:{
                fontSize:10
            }
        },
        "data": xData,
    }],
    yAxis: {
        "type": "value",
            min: 0,
            max: 5000,
        "splitLine": {
            "show": false
        },
        "axisLine": {
            lineStyle: {
                color: '#000'
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
             textStyle:{
                fontSize:10
            }
        },
        "splitArea": {
            "show": false
        },

    },
    series: [{
        name:'电话',
         color: ['#d82c26'],
            type:'line',
            itemStyle : {
                normal : {
                    lineStyle:{
                        width:3,//折线宽度
                    },
                    color: '#35a17a',
                    opacity: 0.4
                }
            },
        data:[3379,4300,3018,3793,3835,3923,3041,3270,3111,4474,4294,3826]
    },{
        name:'网络',
         color: ['#d82c26'],
            type:'line',
            itemStyle : {
                normal : {
                    lineStyle:{
                        width:3,//折线宽度
                    },
                    color: '#e59be1',
                    opacity: 0.4
                }
            },
        data:[3637,3016,4029,3802,4788,3412,3234,4585,4712,4648,3489,3102]
    },{
        name:'信件',
         color: ['#d82c26'],
            type:'line',
            itemStyle : {
                normal : {
                    lineStyle:{
                        width:3,//折线宽度
                    },
                    color: '#ef9376',
                    opacity: 0.4
                }
            },
        data:[2405,3266,2564,2570,2834,3473,2503,2986,2627,3084,2155,3641]
    },{
        name:'走访',
         color: ['#d82c26'],
            type:'line',
            itemStyle : {
                normal : {
                    lineStyle:{
                        width:3,//折线宽度
                    },
                    color: '#55a4ee',
                    opacity: 0.4
                }
            },
        data:[3129,3451,3028,2102,2401,2471,2927,2511,3760,2346,2354,2376]
    },{
        name:'其他',
         color: ['#d82c26'],
            type:'line',
            itemStyle : {
                normal : {
                    lineStyle:{
                        width:3,//折线宽度
                    },
                    color: '#ed400b',
                    opacity: 0.4
                }
            },
        data:[2580,3627,2447,3104,2781,3680,3230,2519,3331,3069,2439,2906]
    }]
}];