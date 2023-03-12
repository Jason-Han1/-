
var xData = function() {
    var data = [];
    for (var i = 3; i < 9; i++) {
        data.push(2010+i+'年');
    }
    return data;
}();
options = [{
    title: {
        text: '许可证有效数量发展趋势',
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
        top:40,
        right:'30%',
        bottom:'70%'
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
        name:'有效许可证数',
         color: ['#d82c26'],
            type:'line',
            itemStyle : {
                normal : {
                    lineStyle:{
                        width:3,//折线宽度
                    }
                }
            },
        data:[379,462,519,573,658,694]
    }]
}];