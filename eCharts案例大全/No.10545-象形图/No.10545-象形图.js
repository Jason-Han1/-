var list = [
    {
        name: '峰值',
        value: 17
        
    }, {
        name: '当日',
        value: 15
    }, {
        name: '同期',
        value: 13  
    }    
]


// 指定图表的配置项和数据
var option = {
    tooltip: {
        show: false
    },
    grid: {
        top: '20%',
        left: '5%',
        right: '5%',
        bottom: '15%',
    },
    xAxis: {
        data: ['峰值', '当日', '同期'],
        offset: 15,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: function (value, index, o) {
                var colorListr = [
                    '#0f4471',
                    '#00adb5',
                    '#ff5722',
                    '#5628b4',
                    '#20BF55',
                    '#f23557',
                    '#118df0',
                    '#11cbd7',
                    '#d3327b',
                    '#ae318a',
                    '#993090',
                    '#6f3071'
                ];
                return colorListr[index];
                /*return colorListr[params.dataIndex]*/
            },
            fontSize: 14
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
            show: false
        }
    },
    series: [ {
        type: 'bar',
        barGap: '-100%',
        barWidth:20,
        barMaxWidth: 20,
        max: 100,
        itemStyle: {
            color: '#536dfe',
            opacity: 0.2,
            barBorderRadius: [10, 10, 0, 0]
        },
        data: function() {
            var maxArr = [];
            var max = list[0].value;
            for(var i=1; i<list.length; i++) {
                if(max < list[i].value) max = list[i].value;
            }
            max = max*1.3;
            for(var i=0; i<list.length; i++) {
                maxArr.push(max);
            }
            return maxArr;
        }()
    }, {
        type: 'pictorialBar',
        symbolRepeat: 'fixed',
        symbolMargin: 4,
        symbol: 'rect',
        symbolClip: true,
        symbolSize: [20, 10],
        symbolPosition: 'start',
        symbolOffset: [0, 0],
        data: list,
        label: {
            show: true,
            formatter: '{c}',
            position: 'insideTop'
        },
        itemStyle: {
            color: function(params) {
                var colorListr = [
                    '#0f4471',
                    '#00adb5',
                    '#ff5722',
                    '#5628b4',
                    '#20BF55',
                    '#f23557',
                    '#118df0',
                    '#11cbd7',
                    '#d3327b',
                    '#ae318a',
                    '#993090',
                    '#6f3071'
                ];
                return colorListr[params.dataIndex]
            }
        }
    }]
};