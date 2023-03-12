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
        left: '40',
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
            return params[0].name + params[0].value + '%'
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
                color: '#37FFD5',
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
            show:false,

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
                color: '#37FFD5',
                fontSize: '16',
                align: 'right',
            }
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
                    color: new echarts.graphic.LinearGradient(0, 0,1,  0, [{
                        offset: 0,
                        color: 'rgb(36,207,233,1)'
                    }, {
                        offset: 0.5,
                        color: 'rgb(55,255,213,1)'
                    }, {
                        offset: 1,
                        color: 'rgb(55,255,213,1)'
                    }]),
                },
            },
            barWidth: 10,
            data: getmyd
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 10,
            barGap: '-100%',
            data: getmydzd,
            itemStyle: {
                normal: {
                    color: 'rgba(55,255,213,0.2)',
                    barBorderRadius: 2,
                }
            },
        },
    ]
};