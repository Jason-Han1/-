const data = [{
    name: '周一',
    value: [120, 220],
}, {
    name: '周二',
    value: [132, 182],
}, {
    name: '周三',
    value: [101, 191],
}, {
    name: '周四',
    value: [1134, 234],
}, {
    name: '周五',
    value: [90, 290],
}, {
    name: '周六',
    value: [230, 330],
}, {
    name: '周七',
    value: [210, 310],
}];
const legendData = ['付费', '免费'];
const seriesData = [];
legendData.forEach(legend => {
    seriesData.push([]);
})
const xData = [];
data.forEach(({
    name,
    value
}) => {
    xData.push(name);
    value.forEach((v, idx) => {
        seriesData[idx].push(v);
    })
})

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    backgroundColor: '#fff',
    legend: {
        right: 0,
        data: legendData,
    },
    grid: {
        left: 10,
        right: 10,
        bottom: '3%',
        containLabel: true
    },
    color: ['#1890FF', '#FF5614'],
    title: {
        text: '123',
        show: true,
        itemStyle: {
            color: '#000'
        }
    },
    xAxis: [{
        type: 'category',
        data: xData,
        axisLine: {
            show: true,
            lineStyle: {
                width: 2,
                color: '#D9D9D9',
            }
        },
        axisLabel: {
            margin: 16,
            textStyle: {
                fontSize: '14',
                color: '#333',
            }
        },
    }],
    yAxis: [{
        type: 'value',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                fontSize: '14',
                color: '#333',
            }
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#E8E8E8'
            }
        },
    }],
    series: seriesData.map((data, idx) => ({
        name: legendData[idx],
        type: 'bar',
        stack: '数量',
        barWidth: 20,
        data,
    })),
};