
//优化图表 稍后修改上传  

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) {
            return params[0].name + '<br/>' 
            +params[0].seriesName + ' : ' + params[0].value;
        }
    },
    legend: {
        show: false,
        selectedMode: false,
        data: ['剩余电量']
    },
    xAxis: [{
        show: false,
        type: 'category',
        data: ['电量'],
        boundaryGap: false
    }],
    yAxis: [{
        show: false,
        type: 'value',
        max: 100,
        boundaryGap: [0, 0.1]
    }],
    grid: [{
        x: 0,
        y: 0,
        x2: 0,
        y2: 0
    }],
    series: [{
        name: '剩余电量',
        type: 'bar',
        stack: 'sum',
        barCategoryGap: '0%',
        barWidth: '70',
        itemStyle: {
            normal: {
                color: 'tomato',
                barBorderColor: '#C4C4C4',
                barBorderWidth: 6,
                barBorderRadius: 0,
                label: {
                    show: true,
                    position: 'insideTop'
                }
            }
        },
        data: [80]
    }, {
        name: '满电量',
        type: 'bar',
        stack: 'sum',
        itemStyle: {
            normal: {
                color: '#fff',
                barBorderColor: '#C4C4C4',
                barBorderWidth: 6,
                barBorderRadius: [10, 10, 0, 0],
                label: {
                    show: false,
                    position: 'top',
                    formatter: function(params) {
                        for (var i = 0, l = option.xAxis[0].data.length; i < l; i++) {
                            if (option.xAxis[0].data[i] == params.name) {
                                return option.series[0].data[i] + params.value;
                            }
                        }
                    },
                    textStyle: {
                        color: 'tomato'
                    }
                }
            }
        },
        data: [20]
    }]
};