//  数据配置
const source = [
    ['出入口', '入场', '离场', '黑名单车辆'],
    ['东出入口', 338, 110, 206],
    ['北出入口', 416, 45, 113], 
]; 
const title = '合计';
const piedata = [{
        name: '入场',
        value: 1834
    },
    {
        name: '离场',
        value: 123
    },
    {
        name: '黑名单车辆',
        value: 325
    }
];
myChart.resize({
    height: 320,
    width: 1112
})

// 图表配置

option = {
    // backgroundColor: '#fff',
    dataset: {
        source: source
    },
    grid: {
        left: 408,
        right: 340,
        top: 64,
        bottom: 64
    },
    title: [{
        text: title,
        subtext: '1350',
        left: '155',
        top: '150', 
        subtextStyle: { 
                    fontSize: 14,
                    fontWeight: 'normal',
                    color: '#666666',
                    padding: [10, 0] 
            } 
    }],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }, 
        padding:16, 
    },
    legend: {
        show: true,
        left: 372,
        top: 16,
        itemWidth: 12,
        itemHeight: 12
    }, 
    color: ['#73DDFF', '#73ACFF', '#FDD56A'],
    yAxis: {
        type: 'category',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
    },
    xAxis: {
        type: 'value',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        splitNumber:4,
        axisLabel:{
            color:'#8C8C8C'
        },
        splitLine:{
            lineStyle:{
                type:'dashed'
            }
        }
    },
    series: [{
            type: 'bar',
            name:source[0][1],
            barWidth:30,
            stack:true,
            encode: {
                y: 0,
                x: 1
            },
            label: {
                normal: {
                    show: true, 
                    color:'#fff'
                },
            },
        },{
            type: 'bar',
            name:source[0][2],
            barWidth:30,
            stack:true,
            encode: {
                y: 0,
                x: 2
            },
            label: {
                normal: {
                    show: true, 
                    color:'#fff'
                },
            },
        },{
            type: 'bar',
            name:source[0][3],
            barWidth:30,
            stack:true,
            encode: {
                y: 0,
                x: 3
            },
            label: {
                normal: {
                    show: true, 
                    color:'#fff'
                },
            },
        },
        { 
            type: 'pie',
            z: 100,
            radius: ['40%', '60%'],
            center: [180, '55%'],
            data: piedata,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}"
            },
            label: {
                show: true,
                fontSize: 12,
                formatter: "{b}\n{c}辆",
                color:'#A3A3A3'
            },
        }
    ]
};