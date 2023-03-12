/** 
 * 
 * 作者: GhostCat
 * 博客: https://gcat.cc
 * 描述: 带背景的柱状图
 * 
 */

var data = [{
    "name": "村庄",
    "value": 80
}, {
    "name": "镇乡",
    "value": 87.8
}, {
    "name": "镇中心区",
    "value": 71
}, {
    "name": "主城区",
    "value": 80
}, {
    "name": "城乡结合区",
    "value": 66
}];
var xData = [],
    yData = [],
    bgData =[]
    
var min = 50; 
data.map(function(a, b) {
    xData.push(a.name);
    bgData.push(100)
    if (a.value === 0) {
        yData.push(a.value + min);
    } else {
        yData.push(a.value);
    }
});
option = {
    backgroundColor:"#111c4e",
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                opacity: 0
            }
        },
        formatter: function(prams) {
            if (prams[0].data === min) {
                return "合格率：0%"
            } else {
                return "合格率：" + prams[0].data + "%"
            }
        }
    },
    legend: {
        data: ['直接访问', '背景'],
        show: false
    },
    grid: {
        left: '0%',
        right: '0%',
        bottom: '5%',
        top: '7%',
        height: '85%',
        containLabel: true,
        z: 22
    },
    xAxis: [{
        type: 'category',
        gridIndex: 0,
        data: xData,
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                color: '#54545d'
            }
        },
        axisLabel: {
            show: true,
             color: 'rgb(170,170,170)',
             fontSize:16
        }
    }],
    yAxis: [{
            type: 'value',
            gridIndex: 0,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            min: min,
            max: 100,
            axisLine: {
                show:true,
                lineStyle: {
                    color: '#54545d'
                }
            },
            axisLabel: {
                color: 'rgb(170,170,170)',
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            gridIndex: 0,
            min: min,
            max: 100,
            splitNumber: 12,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
        }
    ],
    series: [{
            name: '合格率',
            type: 'bar',
            barWidth: '30%',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    barBorderRadius: [30,30,0,0],
                    color: "#00f0ff"
                    
                }
            },
              label: {
                normal: {
                    show: true,
                    position: "top",
                    textStyle: {
                        color: "#00f0ff", 
                        fontSize:20
                    }
                }
            },
            data: yData,
            zlevel: 11
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: '50%',
            xAxisIndex: 0,
            yAxisIndex: 1,
            barGap: '-135%',
            data: bgData,
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            zlevel: 9
        },
      
    ]
};

