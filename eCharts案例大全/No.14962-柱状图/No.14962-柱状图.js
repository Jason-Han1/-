var datas = [4835, 831, 690, 536, 450];
var max = datas[0];
var len = datas.length;
var datastyle = [];
var normalcolor = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    offset: 0,
    color: '#B453F4'
}, {
    offset: 1,
    color: '#25DCE8'
}]);
for (var i = 0; i < datas.length; i++) {
    datastyle.push({
        value: datas[i],
        itemStyle: {
            normal: {
                color:normalcolor,
                barBorderRadius:26
            }
        },
        tooltip:{
            formatter: '{b0}: {c0}<br />{b1}: {c1}'
        }
    })
}

option = {
    color: ['#3398DB'],
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {

        type: 'category',
        name:'(年)',
        nameLocation:'end',
        nameTextStyle:{
            color:'#fff',
            fontSize:28
        },
        axisLabel: {
            textStyle: {
                fontSize: 28,
                color: '#fff'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#45BAFE'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        splitArea: {
            show: false
        },
        data: ['2012', '2013', '2014', '2015', '2016']
    },
    yAxis: {
        min: 0,
        max: 10000,
        name: '(亿元)',
        nameTextStyle: {
            color: '#fff',
            fontSize: 28
        },
        axisLabel: {
            textStyle: {
                fontSize: 28,
                color: '#fff'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#45BAFE'
            }
        },
        splitLine: {
            show: false
        },
        splitArea: {
            show: false
        }
    },
    series: [{
            type: 'pictorialBar',
            symbol: 'circle',
            symbolSize: [26,'100%'],
            symbolPosition: [0,0],
            symbolOffset: [0, 0],
            data: [10000,10000,10000,10000,10000],
            label:{
                normal:{
                    show:false
                }
            },
            animation:false,
            silent:false,
            legendHoverLink:false,
            hoverAnimation:{
                animation:false
            }
        }, {
            name: '',
            type: 'bar',
            barWidth: '26',
            data: datastyle,
            label: {
                normal: {
                    show: false,
                }
            }
        },

    ],
    label: {
        normal: {
            show: true,
            offset: [0, -10],
            textStyle: {
                color: '#fff',
                fontSize: 22
            },
            position: 'top',
            formatter: '{c}'
        }
    }
};