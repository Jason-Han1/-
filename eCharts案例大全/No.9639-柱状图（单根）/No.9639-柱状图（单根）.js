
var xAxisData=['组合1', '组合2', '组合3', '组合4', '组合5', '组合6', '组合7'];
var seriesData=[0.10, 0.52, 0.2, 0.34,0.390, 0.330, 0.220];
option = {
    color: ['#ff7632'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '2%',
        bottom: '30',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            color: '#666'
        },
        data: xAxisData,

    }],
    legend: {
        bottom: '0',
    },
    yAxis: [{
        type: 'value',
        name: '收益率',
        nameTextStyle: {
            color: '#666'
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        axisLabel: {
            color: '#666'
        },
    }],
    series: [{
        name: '收益率',
        type: 'bar',
        barWidth: '40',
         itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255,118,50,0.2)' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(255,118,50,1)' // 100% 处的颜色
                }], false),
                barBorderRadius: [30, 30, 30, 30],
                shadowColor: 'rgba(255,118,50,1)',
                shadowBlur: 4,
            }
        },
        barMinWidth:'30',
        data:seriesData 
    }]
};