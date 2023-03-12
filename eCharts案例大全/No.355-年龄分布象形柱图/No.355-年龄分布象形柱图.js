// 完整样式请查看：http://js.jirengu.com/muvet/2/
// 完整样式请查看：http://js.jirengu.com/muvet/2/
// 完整样式请查看：http://js.jirengu.com/muvet/2/
// 完整样式请查看：http://js.jirengu.com/muvet/2/
// 完整样式请查看：http://js.jirengu.com/muvet/2/
// 完整样式请查看：http://js.jirengu.com/muvet/2/
// 完整样式请查看：http://js.jirengu.com/muvet/2/
// 完整样式请查看：http://js.jirengu.com/muvet/2/
// 完整样式请查看：http://js.jirengu.com/muvet/2/
document.getElementById('chart-panel').style.backgroundColor = 'rgba(7, 10, 18)';

var obj = {
    0: '2.25%',
    1: '41.54%',
    2: '32.88%',
    3: '16.77%',
    4: '5.43%',
    5: '0.36%',
    6: '0.03%',
};

option = {
    // grid: {
    //     left: 0,
    //     right: 0,
    //     bottom: 0,
    //     top: 20
    // },
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
        show: false,
        data: [],
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
    color: ['#e54035'],
    series: [{
        name: 'hill',
        type: 'pictorialBar',
        barCategoryGap: '-130%',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        label: {
            show: true,
            position: 'top',
            distance: 4,
            color: '#fff',
            // fontWeight: 'bolder',
            fontSize: 12,
            formatter: function(params) {

                return obj[params.dataIndex];

            }
        },
        itemStyle: {
            normal: {
                color: function(params) {
                    let colorList = [
                        'rgba(55, 112, 255,0.7)', 'rgba(79, 116, 255,0.7)',
                        'rgba(83, 116, 255,0.7)', 'rgba(85, 125, 255,0.7)',
                        'rgba(101, 191, 255,0.7)', 'rgba(96, 227, 255,0.7)',
                        'rgba(25, 255, 224,0.7)'
                    ];
                    return colorList[params.dataIndex];
                }
            },
            emphasis: {
                opacity: 1
            }
        },
        data: [2, 30, 25, 16, 10, 6, 1],
        z: 10
    }]
};