// 多系列无法定位
var data = [220, 182, 191];
var colors = [{
    type: 'linear',
    x: 0,
    x2: 0,
    y: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: '#459fff'
    }, {
        offset: 0.5,
        color: '#77def5'
    }, {
        offset: 0.5,
        color: '#77def5'
    }, {
        offset: 1,
        color: '#4dc3e9'
    }]
}];

var barWidth = 15;
option = {
    backgroundColor: '#0f295b',
    title: {
      text: '单位：(元/m3)',
      right: 0,
      textStyle: {
          color: '#fff',
          fontSize: 14
      }
    },
    grid: {
        top: '10%',
        bottom: '5%',
        left: '10%',
        right: '10%'
    },
    yAxis: [{
        inverse: true,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#506388'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            fontSize: 12,
            color: '#fff'
        },
        splitLine: {
          show: true,
          lineStyle: {
              color: '#506388'
          }
        },
        boundaryGap: false,
        data: ['市场非标库日租金', '市场标库日租金', '日租金'],
    },{
       axisLine: {
            show: true,
            lineStyle: {
                color: '#506388'
            }
        } 
    }],
    xAxis: {
        axisLabel: {
            show: true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#506388',
                type: 'dashed'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    series: [{
        z: 1,
        type: 'bar',
        barWidth: barWidth,
        data: [220, 182, 191],
        itemStyle: {
            normal: {
                color: colors[0]
            }
        },
    }, {
        z: 2,
        name: '底部',
        type: 'pictorialBar',
        data: [1, 1, 1, 1, 1],
        symbol: 'diamond',
        symbolOffset: ['-50%', 0],
        symbolSize: [10, barWidth],
        itemStyle: {
            normal: {
                color: colors[0]
            }
        },
    }, {
        z: 3,
        name: '上部1',
        type: 'pictorialBar',
        symbolPosition: 'end',
        data: data,
        symbol: 'diamond',
        symbolOffset: ['50%', 0],
        symbolSize: [10 * (barWidth - 4) / barWidth, barWidth - 4, ],
        itemStyle: {
            normal: {
                borderColor: '#4dc3e9',
                borderWidth: 1,
                color: '#4dc3e9'
            }
        }
    }]
};