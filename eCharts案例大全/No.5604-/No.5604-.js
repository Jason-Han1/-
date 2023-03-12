var getmydmc = ['市政工程技术', '工程欠造价', '财务管理', '林业技术', '市场营销', '建设工程管理', '食品加工技术', '数据媒体应用技术', '广告设计与制作', '工商企业管理'];
var getmyd = [78, 72, 63, 55, 51, 49, 36, 20, 15, 10];
var getpm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var getmydzd = [];
for (let i = 0; i < getmyd.length; i++) {
    getmydzd.push(100)
}

option = {
    backgroundColor: '#0B1730',
    grid: {
        left: '60',
        right: '40',
        bottom: '3%',
        top: '5%',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name + '报到率: ' + params[0].value + '%'
        }
    },
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            interval: 0,
            textStyle: {
                padding: [0, 0, 40, 15],
                color: '#99B3FF',
                fontSize: '16',
                align: 'left',
            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: getmydmc
    }, {
        type: 'category',
        inverse: true,
        position: 'left',
        axisLabel: {
           // interval: 0,
            formatter: function(value) {
                if (value - 1 >= 0 && value - 1 < 3) {
                    return '{text1|' + value + '}'
                } else {
                    return '{text2|' + value + '}'
                }
            },
            rich: {
                text1: {
                    color: 'rgba(0,252,253,0.4)',
                    padding: [0, 5, -20, 0],
                    fontSize: '28',
                    fontFamily: 'DIN-Regular',
                },
                text2: {
                    color: 'rgba(0,252,253,0.2)',
                    padding: [0, 5, -20, 0],
                    fontSize: '28',
                    fontFamily: 'DIN-Regular',
                },
            },

        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: getpm
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            padding: [0, 15, 40, 0],
            interval: 0,
            textStyle: {
                color: '#00FCFD',
                fontSize: '16',
                align: 'right',
            },
            formatter: '{value}%'
        },
        data: getmyd
    }],
    series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 2,
                    color: '#24A8B6'
                },
            },
            barWidth: 5,
            data: getmyd
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 5,
            barGap: '-100%',
            data: getmydzd,
            itemStyle: {
                normal: {
                    color: 'rgba(36,168,182,0.2)',
                    barBorderRadius: 2,
                }
            },
        },
    ]
};