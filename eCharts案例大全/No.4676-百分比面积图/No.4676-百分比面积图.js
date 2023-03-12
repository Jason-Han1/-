var time = ['00.00', '04:00', '08:00', '12:00', '16:00', '20:00'];
var value = [10, 60, 30, 70, 95, 22];
var option = {
    grid: {
        left: '0%',
        right: '10%',
        top: '10%',
        bottom: '0%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: [8, 12],
        textStyle: {
            color: 'white',
            fontSize: '12',
            lineHeight: 12,
            fontFamily: 'Microsoft YaHei, PingFang SC'
        },
        formatter: '{b0}: {c0}%'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: time,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#909399'
            }
        },
        axisLabel: {
            show: true,
            fontSize: '12',
            lineHeight: 12,
            fontFamily: 'Microsoft YaHei, PingFang SC',
        },
        axisTick: {
            show: false,
        },
        minorTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },
    },
    yAxis: {
        type: 'value',
        splitNumber: 2,
        maxInterval: 100,
        minInterval: 0,
        axisLabel: {
            show: true,
            fontSize: '12',
            lineHeight: 12,
            fontFamily: 'Microsoft YaHei, PingFang SC',
            formatter: function(param){
                return param + '%'
            }
        },
        axisLine: { // 轴线
            show: true,
            lineStyle: {
                color: '#909399'
            }
        },
        axisTick: { // 是否显示坐标轴刻度
            show: false,
        },
        minorTick: { // 是否显示次刻度线
            show: false,
        },
        splitLine: { // 是否显示分隔线
            show: false,
        },
    },
    series: [{
        data: value,
        type: 'line',
        lineStyle: {
            width: 1 // 线条的宽度
        },
        itemStyle: {
            color: '#6ab831', // 线条的颜色
        },
        showSymbol: false,
        areaStyle: {
            normal: {
                color: '#6ab831' // 面积的颜色
            },
            opacity: 1 // 透明度
        }
    }]
};