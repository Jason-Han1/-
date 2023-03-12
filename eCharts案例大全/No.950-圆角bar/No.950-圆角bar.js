const color = ['#c1c049', '#3eb177', '#0666e8']
const legend = ['低收入', '中等收入', '高收入']
const xAxis = ['≤100', '100-300', '300-500', '500-1000', '≥1000']
const value1 = [12, 85, 39, 133, 0]
const value2 = [3, 75, 187, 66, 5]
const value3 = [12, 85, 39, 133, 0]
option = {
    backgroundColor:'#100c2a',
    color: color,
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(20,50,125,.8)',
        axisPointer: {
            type: 'shadow', // 可选为：'line' | 'shadow'
        },
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '10%',
        top: '15%',
        containLabel: true,
    },
    legend: {
        left: 'center',
        top: 50,
        icon: 'rect',
        textStyle: {
            color: '#81b0d6',
        },
        itemWidth: 10,
        itemHeight:10,
        itemGap: 30, //左右间隔
    },
    xAxis: {
        type: 'category',
        data: xAxis,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#071a4f',
                width: 1,
                type: 'solid',
            },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#81b0d6',
            },
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#81b0d6',
            },
        },
        axisPointer: {
            snap: true,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#071a4f',
                type: 'dash',
            },
        },
    },
    series: [
        {
            name: legend[0],
            type: 'bar',
            barWidth: '12%',
            itemStyle: {
                normal: {
                    barBorderRadius: 30, //圆角度
                },
            },
            data: value1,
        },
        {
            name: legend[1],
            type: 'bar',
            barWidth: '12%',
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                },
            },
            data: value2,
        },
        {
            name: legend[2],
            type: 'bar',
            barWidth: '12%',
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                },
            },
            data: value3,
        },
    ],
};
