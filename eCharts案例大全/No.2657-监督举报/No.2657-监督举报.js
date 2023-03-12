let data1 = [{
    value: 40,
    num1: 10,
    num2: 30,
    num3: 40,
    num4: 10,
    label: '测试1'
},{
    value: 120,
    num1: 10,
    num2: 30,
    num3: 55,
    num4: 25,
    label: '测试2'
}];
let namea = data1.map((item)=> {
    return item.label
})
option = {
    backgroundColor: '#101e44',
    grid: {
        top: 100,
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        className: 'echarts-tooltip echarts-tooltip-dark',
        formatter: function (params){
            return `<div style="background-color:red">
                ${params[0].data.label}
            </div>`
        },
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(255,255,255,0)', // 0% 处的颜色
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(173, 115, 250, 1)', // 100% 处的颜色
                        },
                        {
                            offset: 1,
                            color: 'rgba(255,255,255,0)', // 100% 处的颜色
                        },
                    ],
                    global: false, // 缺省为 false
                },
            },
            itemStyle: {
                backgroundColor: 'red',
            },
        },
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            axisLabel: {
                fontSize: 14,
                margin: 20,
                textStyle: {
                    color: 'rgba(211, 224, 255, 1)',
                    fontSize: 16,
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#243753',
                },
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#243753',
                },
            },
            axisTick: {
                show: false,
            },
            data: namea,
        },
    ],
    yAxis: [
        {
            boundaryGap: false,
            type: 'value',
            name: '单位：个',
            nameTextStyle: {
                color: 'rgba(211, 224, 255, 1)',
                fontSize: 16,
                lineHeight: 40
            },
            axisLabel: {
                textStyle: {
                    color: 'rgba(211, 224, 255, 1)',
                    fontSize: 16,
                },
            },
            splitLine: {
                lineStyle: {
                    borderType: 'dotted',
                    color: 'rgba(140, 175, 255, 0.36)',
                    type: 'dashed',
                },
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
    ],
    visualMap: {
        show: false,
        top: 50,
        right: 10,
        pieces: [
            {
                gt: 0,
                lte: 50,
                color: 'rgba(125, 27, 247, 1)',
            },
            {
                gt: 50,
                lte: 100,
                color: 'rgba(125, 27, 247, 1)',
            },
            {
                gt: 100,
                lte: 150,
                color: 'rgba(125, 27, 247, 1)',
            },
            {
                gt: 150,
                lte: 200,
                color: 'rgba(125, 27, 247, 1)',
            },
            {
                gt: 200,
                color: '#fff',
            },
        ],
        outOfRange: {
            color: '#999',
        },
    },
    series: [
        {
            name: '报名',
            type: 'line',
            zlevel: 3,
            symbol: 'circle',
            symbolSize: 6,
            itemStyle: {
                shadowBlur: 4,
                shadowColor: 'rgba(173, 115, 250, 1)',
            },
            lineStyle: {
                normal: {
                    width: 1,
                    color: 'rgba(125, 27, 247, 1)',
                },
            },
            data: data1,
        },
    ],
};
