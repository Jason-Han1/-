var colors = ['#9b4534',  '#3470a3'];

var xData = function() {
    var data = [];
    for (var i = 1; i < 13; i++) {
        data.push(i+'月');
    }
    return data;
}();
option = {
    title: {
        text: '审批事项办理类型发展趋势（注销）',
        textStyle:{
             fontSize: '15'
        }
    },
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
        top:80,
    },   
    legend: {
        data:['审批申请数','审批申请同比率'],
        align: 'left',
        left: 10,
        top:30
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
                fontSize:15
            }
        },
        "data": xData,
    }],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 1500,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '',
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {name:'审批申请数',
            type:'bar',
           color: colors[0],
            barWidth : 25,
            data:[1156,627,998,797,978,347,597,993,620,845,555,741]},
        {
        name:'审批申请同比率',
         color: colors[1],
         yAxisIndex: 1,
            type:'line',
            itemStyle : {
                normal : {
                    lineStyle:{
                        width:3,//折线宽度
                    },
                    opacity: 0.4,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 1,
                        color: '#48c5d0' // 0% 处的颜色
                    }, {
                        offset: 0,
                        color: '#cf94ee' // 100% 处的颜色
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
        data:[8.3,4,6.5,4.2,5.4,2,3.2,7,3,6,3,4.5]
    }]
};
