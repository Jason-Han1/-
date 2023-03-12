var barWidth = 30;
option = {
    grid: {  
        left: '0',  
        bottom: '5%',  
        containLabel: true  
    } ,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#283b56'
            }
        }
    },
    legend: {
        data:[ '河南地区出货量', '天津地区出货量', '河南地区占比', '天津地区占比'],
        align: 'left',
        left: 100,
        bottom: 0
    },
    dataZoom: {
        show: false,
        start: 0,
        end: 100
    },
    xAxis: [
        {
            type: 'category',
            data: ['猪肉类', '禽肉类', '牛羊肉类', '水产类', '速冻调理'],
            axisTick: {
                show: false
            },
            axisPointer: {
                type: 'shadow'
            },
            axisLine: {
                lineStyle: {
                    color: '#666'
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            scale: true,
            name: '出货量（元）',
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#666'
                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#666'
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#666'
                }
            },
            max: 400,
            min: 0,
            axisLabel: {
                formatter: '{value}万'
            }
        },
        {
            type: 'value',
            // name: '%',
            scale: true,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            max: 100,
            min: 0,
            axisLabel: {
                formatter: '{value}%'
            }
        }
    ],
    series: [
        {
            name:'河南地区出货量',
            type:'bar',
            barWidth: barWidth,
            barGap: '20%',
            itemStyle:{
                normal:{
                    color:'#a0c0fd'
                }
            },
            data: [390, 200, 180, 160, 150]
        },
        {
            name:'天津地区出货量',
            type:'bar',
            barWidth: barWidth,
            barGap: '20%',
            itemStyle:{normal:{color:'#9599fd'}},
            data: [190, 100, 80, 95, 88]
        },
        {
            name:'河南地区占比',
            type:'line',
            itemStyle:{
                normal:{
                    color:'#2cfffe'
                }
            },
            xAxisIndex: 1,
            data: [100, 80, 180, 195, 188],
            symbol: 'circle',
            symbolSize: 10
        },
        {
            name:'天津地区占比',
            type:'line',
            xAxisIndex: 1,
            itemStyle:{normal:{color:'#fffd38'}},
            data: [190, 100, 80, 95, 88],
            symbol: 'circle',
            symbolSize: 10
        }
    ]
};
// 增加了一个隐藏的x轴，用来控制线图的点的位置
option.xAxis[1] = {
    type: 'value',
    max: option.xAxis[0].data.length * 100,
    show: false
}
option.series[2].data = option.series[2].data.map((x, i) => [(i+1) * 100-50-barWidth/2/2-barWidth/2*0.2, x])
option.series[3].data = option.series[3].data.map((x, i) => [(i+1) * 100-50+barWidth/2/2+barWidth/2*0.2, x])
