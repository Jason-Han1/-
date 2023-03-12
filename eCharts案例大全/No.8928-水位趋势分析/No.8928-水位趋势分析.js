var colors = ['#2978aa',  '#3470a3'];

var xData = function() {
    var data = ['12:30', '12:40', '12:50', '13:00', '13:10', '13:20', '13:30', '13:40', '13:50', '3:30', '13:30', '13:30', '13:30'];
    
    return data;
}();
option = {
    backgroundColor:'#fff',
    title: {
        text: '水位趋势分析',
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
        left:'5%',
       right:'5%',
        bottom:'55%'
    }, 
    legend: {
        data:['雷达水位','河道水位'],
        align: 'left',
        left: 30,
        top:30
    },
     "calculable": true,
    "xAxis": [{
        position: 'top',
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
            min: 200,
            max: 400,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value}cm '
            }
        },
        {
            type: 'value',
            name: '',
            inverse: true,
            max: 200,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value} cm'
            }
        }
    ],
    
    series: [
        {
        name:'雷达水位',
         color: '#008000',
         yAxisIndex: 1,
            type:'line',
             symbol: 'circle',
             symbolSize: 2,
             smooth: true,
            itemStyle : {
                normal : {
                    /*lineStyle:{
                        width:3,//折线宽度
                    },*/
                   
                }
            },
        data:[92,90,88,85,80,85,80,80,82,84,82,80,80]
    },
    {
        name: '河道水位',
        yAxisIndex: 0,
        type: 'line',
        stack: '总量',
        symbol: 'circle',
        symbolSize: 2,
        smooth: true,
        itemStyle: {
            normal: {
                color: 'rgba(3,240,254,1)',
                lineStyle: {
                    color: "rgba(3,240,254,1)",
                    width: 2
                },
                areaStyle: {
                    //color: '#94C9EC'
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(3,240,254,.7)'
                    }, {
                        offset: 1,
                        color: 'rgba(3,240,254,0)'
                    }])
                },
                shadowColor:'rgba(3,240,254,1)',
                shadowBlur:20,
            }
        },
        markPoint: {
            itemStyle: {
                normal: {
                    color: 'red'
                }
            }
        },
       data:[292,290,288,285,280,285,280,280,282,284,282]
    }

]
};
