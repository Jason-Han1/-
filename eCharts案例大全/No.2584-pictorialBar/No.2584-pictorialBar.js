var data1 = [266, 126, 523, 385, 211, 168, 190];
var data1Max = Math.max.apply(Math, data1);
var data2 = [];
for (var i = 0; i < data1.length; i++) {
    data2.push(data1Max * 1.2)
}
option = {
    backgroundColor:'#000',
    grid: {
        left: '8%',
        top: '3%',
        bottom: '3%',
        right: '20%',
        containLabel: true
    },
    legend: {
        show: false
    },

    xAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: '#fff',
            fontSize: 14
        },
        data: [ '公盈投资','中力经营','粮食集团','建投集团', '铁投集团', '路桥建设','公用事业']
    },
    series: [{
         // 分隔
        type: "pictorialBar",
        itemStyle: {
          normal: {
            color: "rgba(0, 255, 236, 1)"
          }
        },
        symbolRepeat: "fixed",
        symbolMargin: 2,
        symbol: "roundRect",
        symbolClip: true,
        symbolSize: [7.3, 20],
        symbolPosition: "start",
        symbolOffset: [5,0.2],
        z: 0,
        zlevel: 1,
        data: data1
        //data: []
    }, {
        type: 'bar',
        barGap: '-100%',
        barWidth: 30,
        silent: true,
        itemStyle: {
            normal: {
                color: 'rgba(59, 132, 115, 0.2)',
                // shadowColor: '#ffffff',
                // shadowBlur: 10,
                barBorderRadius: 6,
                borderColor: 'rgba(0, 255, 236, 1)'
            }
        },
        label: {
            normal: {
                show: false,
                position: 'right',
                fontSize: 32,
                color: 'rgba(113, 255, 213, 1)',
                offset: [20, 0],
                formatter: function(params) {
                    return data1[params.dataIndex] === 0 ? '-' : data1[params.dataIndex]
                }
            }
        },
        z: -12,
        data: data2
    }]
};