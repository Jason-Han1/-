var data = [{
    "name": "设备总数",
    "value": 50
}, {
    "name": "运行中",
    "value": 40
}, {
    "name": "关机",
    "value": 30
}, {
    "name": "故障",
    "value": 20
}, {
    "name": "低电量",
    "value": 10
}];

var color = ['#1a9bfc','#94d96c','#999', '#e32f46',  '#ffc20e'];
var xData = [],
    yData = [];
var min = 0,max = 100; 
data.map(function(a, b) {
    xData.push(a.name);
    if (a.value === 0) {
        yData.push(a.value + min);
    } else {
        yData.push(a.value);
    }
});

option = {
    backgroundColor:"#111c4e",
    title:{
        text:'物联设备概况条形统计图',
        subtext:'2018年',
        subtextStyle:{
          color:'#fff'  
        },
        textStyle:{
            color:'#fff',
            align:'center',
            width:'200',
            //textShadowColor : '#478cfc',
            //textShadowBlur:10
        },
        left:'center'
    },
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
                return prams[0].name +'：'+'0'
            } else {
                return prams[0].name +'：' + prams[0].data
            }
        }
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
                color: '#0c3b71'
            }
        },
        axisLabel: {
            show: true,
             color: 'rgb(170,170,170)',
             fontSize:14
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
            max: max,
            axisLine: {
                lineStyle: {
                    color: '#0c3b71'
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
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
                }
            }
        }
    ],
    series:{
            name: '个数',
            type: 'bar',
            barWidth: '20%',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    color: function(params) {
                    var num = color.length;
                    return color[params.dataIndex % num]
                },
                }
            },
            label: {
                normal: {
                    show: true
                }
            },
            data: yData,
            zlevel: 1
    }
};

