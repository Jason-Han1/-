let bgColor = '#fff', fontColor = '#666';
let chartData = [
    {name: '西安', value: 300},
    {name: '宝鸡', value: 400},
    {name: '咸阳', value: 452},
    {name: '汉中', value: 770},
    {name: '榆林', value: 650},
    {name: '商洛', value: 256},
    {name: '铜川', value: 350}
]

let xData = chartData.map(v=>v.name);
let sData = chartData.map(v=>v.value);

let lineOption = {
    lineStyle: {
        color: 'rgba(151,151,151,0.15)',
        type: 'dashed'
    }
}

option = {
    backgroundColor: bgColor,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        top: '14%',
        right: '3%',
        left: '7%',
        bottom: '14%'
    },
    xAxis: [{
        type: 'value',
        axisLine: lineOption,
        axisTick: {
            show: false
        },
        axisLabel: {
            margin: 10,
            color: fontColor,
            textStyle: {
                fontSize: 14
            },
        },
        splitLine: lineOption,
    },{
        axisLine: lineOption,
        axisTick: {
            show: false
        },
        axisLabel: {
            formatter: '{value}',
            color: fontColor,
        }
    }],
    yAxis: [{
        type: 'category',
        name: '单位（个）',
        nameTextStyle: {
            color: fontColor
        },
        data: xData,
        axisLabel: {
            formatter: '{value}',
            color: fontColor,
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
    }],
    series: [{
        type: 'bar',
        data: sData,
        barWidth: '20px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: '#238EFF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#DDE6FF' // 100% 处的颜色
                }], false)
            }
        }
    }]
};