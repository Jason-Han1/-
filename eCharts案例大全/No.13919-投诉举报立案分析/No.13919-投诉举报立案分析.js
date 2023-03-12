var colors = ['#2978aa',  '#3470a3'];

var xData = function() {
    var data = [];
    for (var i = 1; i < 13; i++) {
        data.push(i+'月');
    }
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
       right:'55%',
        bottom:'55%'
    }, 
    legend: {
        data:['降雨量','雷达水位','河道水位'],
        align: 'left',
        left: 30,
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
            max: 100,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value}mm '
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
        data:[190,195,196,190,180,170,170,160,165,170,180,180]
    },{
        name:'河道水位',
         color: '#2ec3c1',
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
        data:[200,202,210,220,225,230,235,235,230,220,210,208]
    },
    {
        name: '降雨量',
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
       data:[0,1,5,10,15,40,45,20,15,10,1,1]
    }

]
};
