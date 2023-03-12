var xAxisData = ["蜀山区", "瑶海区", "庐阳区", "包河区", "巢湖市", "长丰县", "肥东县", "肥西县", "庐江县"];
var seriesData = [12, 12, 12, 12, 12, 12, 12, 12, 12];
var color =  new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: 'rgb(255, 140, 55, 1)'
      }, {
        offset: 1,
        color: 'rgb(255, 140, 55, 0.5)'
      }]);

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: xAxisData,
        axisLine: {
            lineStyle: {
                color: '#bbb'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            color: '#333'
        }
    }],
    yAxis: [{
        name: '（次）',
        textStyle: {
            color: '#fff',
        },
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#bbb'
            }
        },
        axisLabel: {
            color: '#333'
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    }],
    series: [{
        name: '区县超标排名',
        type: 'bar',
        barMaxWidth: 15,
        itemStyle: {
            normal: {
                color:color
            }
        },
        data: seriesData
    }]
};