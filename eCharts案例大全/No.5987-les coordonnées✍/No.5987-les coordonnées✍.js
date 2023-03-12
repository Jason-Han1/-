var axisData = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var data = axisData.map(function(item, i) {
    return Math.round(Math.random() * 500 * (i + 1));
});
var links = data.map(function(item, i) {
    return {
        source: i,
        target: i + 1
    };
});
links.pop();
option = {
    backgroundColor: '#19181d',
    title: {
          top: 40,
          text: 'les coordonnées✍',
          subtext: '',
          x: 'center',
          textStyle: {
              align: 'center',
              color: '#fff',
              fontSize: 30,
              fontWeight: '100',
          },
      },
    tooltip: {},
    grid: {
        borderWidth: 0,
        top: 140,
        bottom: 50,
        textStyle: {
            color: "#fff"
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: axisData,
        axisLine: {
            lineStyle: {
                color:'#999',
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color:'#999',
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    },
    series: [{
        type: 'graph',
        layout: 'none',
        coordinateSystem: 'cartesian2d',
        itemStyle: {
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                offset: 0,
                color: '#FAFF52'
            }, {
                offset: 1,
                color: '#fe8500'
            }]),
            shadowColor: 'rgba(0, 0, 0, .3)',
            shadowBlur: 3,
            shadowOffsetY: 5,
            shadowOffsetX: 5,
        },
        symbol:'path://M560.611 481.384C562.003 479.263 565.113 479.263 566.505 481.384L607.063 543.177C615.657 556.272 607.507 573.375 592.766 575.676L566.422 557.462V510.018C566.422 508.436 565.14 507.154 563.558 507.154C561.976 507.154 560.693 508.436 560.693 510.018V557.462L534.349 575.676C519.609 573.375 511.459 556.272 520.053 543.177L560.611 481.384Z',
        symbolSize: 40,
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        data: data,
        links: links,
        lineStyle: {
            color: '#FFF',
            shadowColor: 'rgba(0, 0, 0, .3)',
            shadowBlur: 3,
            shadowOffsetY: 5,
            shadowOffsetX: 5,
        },
    }]
};