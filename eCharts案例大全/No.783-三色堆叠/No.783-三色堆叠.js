
let yLabel = ['1','2','3','4']
let gData = [100,200,300,400]
let zData = [100,200,300,400]
let dData = [100,200,300,400]
let bgData = []
// 这块是柱子最大长度，也就是阴影管的长度
for(let i in gData){
    bgData.push(2000)
}
option = {
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        }
    },
    backgroundColor: 'rgb(20,28,52)',
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            margin:15,
            textStyle: {
                color: '#fff',
            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: yLabel
    }, 
    // 右边显示数据
    // {
    //     type: 'category',
    //     inverse: true,
    //     axisTick: 'none',
    //     axisLine: 'none',
    //     show: true,
    //     axisLabel: {
    //         textStyle: {
    //             color: '#fff',
    //             fontSize: '12'
    //         },
    //     },
    //     data: gData
    // }
    ],
    series: [
        {
            name: '低',
            type: 'bar',
            zlevel: 1,
            stack: 'total',
            itemStyle: {
                normal: {
                    barBorderRadius: [0,0,0,0],
                    // 颜色渐变
                    color: new echarts.graphic.LinearGradient(1, 1, 1, 0, [{
                        offset: 0,
                        color: 'rgba(0,81,175,1)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(47,218,142,1)'
                    }]),
                    shadowBlur:0,
                    shadowColor:'rgba(87,220,222,0.7)'
                },
            },
            barWidth: 20,
            data: gData
        },
        {
            name: '中',
            type: 'bar',
            zlevel: 1,
            stack: 'total',
            itemStyle: {
                normal: {
                    barBorderRadius: [0,0,0,0],
                    // 颜色渐变
                    color: new echarts.graphic.LinearGradient(1, 1, 1, 0, [{
                        offset: 0,
                        color: 'rgba(255,215,50,1)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(143,117,8,1)'
                    }]),
                    shadowBlur:0,
                    shadowColor:'rgba(87,220,222,0.7)'
                },
            },
            barWidth: 20,
            data: gData
        },{
            name: '高',
            type: 'bar',
            zlevel: 1,
            stack: 'total',
            itemStyle: {
                normal: {
                    barBorderRadius: [0,5,5,0],
                    // 颜色渐变
                    color: new echarts.graphic.LinearGradient(1, 1, 1, 0, [{
                        offset: 0,
                        color: 'rgba(241,102,99,1)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(181,72,70,1)'
                    }]),
                    shadowBlur:0,
                    shadowColor:'rgba(87,220,222,0.7)'
                },
            },
            barWidth: 20,
            data: gData
        },
        // 背景进度条
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: bgData,
            tooltip:{
                show: false
            },
            itemStyle: {
                normal: {
                    color: 'rgba(24,31,68,1)',
                    barBorderRadius: [0,30,30,0],
                }
            },
        },
    ]
};