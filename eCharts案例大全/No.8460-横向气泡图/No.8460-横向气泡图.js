option = {
    grid: {

        left: '-10%',
        right: '2%',
        bottom: '10%'
      },
    xAxis: {
        show:false,
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    yAxis: {
        show:false,
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        scale: true
    },
    series: [{
        name: '1990',
        data: [[1,70,190,'五星','星级'],[2,70,240,'四星','星级'],[3,70,150,'三星','星级'],[4,70,90,'二星','星级'],[4.6,70,45,'一星','星级']],
        type: 'scatter',
        symbolSize: function (data) {
            return data[2]/1.2;
        },
        label: {
                show: true,
                color: 'white',
                fontSize: 20,
                formatter: function (param) {
                    return param.data[2];
                },
                position: 'inside'
            },
        itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(120, 36, 50, 0.5)',
            shadowOffsetY: 5,
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                offset: 0,
                color: 'rgb(129, 227, 238)'
            }, {
                offset: 1,
                color: 'rgb(25, 183, 207)'
            }])
        }
    }]
};
