option = {
    backgroundColor: '#030F35',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name + ': ' + params[0].value;
        }
    },
    xAxis: {
        data: ['2015', '2016', '2017', '2018', '2019', '2020'],
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            color: '#1D2150'
        },
        axisLabel: {
            textStyle: {
                color: '#00F7FE'
            }
        }
    },
    yAxis: {
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(29,33,80,0.8)'
            }

        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#00F7FE'
            }
        }
    },

    series: [{
        name: 'hill',
        type: 'pictorialBar',
        barCategoryGap: '50%',
        symbol: 'triangle',
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#D2C950' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#45AB7C' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
        },
        data: [123, 60, 125, 128, 122, 122]
    }]
};