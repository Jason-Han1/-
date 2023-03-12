var colors = ['#63980e',  '#3470a3'];

var xData = function() {
    var data = [];
    for (var i = 1; i < 13; i++) {
        data.push(i+'月');
    }
    return data;
}();
option = {
    title: {
        text: '审批事项办理类型发展趋势（换证）',
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
            data:[756,627,998,797,978,1347,717,993,620,1245,555,741]},
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
                        color: '#f29941' // 0% 处的颜色
                    }, {
                        offset: 0,
                        color: '#4c5ae8' // 100% 处的颜色
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
        data:[4.5,4,6.5,4.2,5.4,9,4,7,3,9,3,4.5]
    }]
};
