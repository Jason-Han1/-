var plusColor = '#70B3EE';
var minusColor = '#3B3C57';
var totalColor = '#4283F7';
var minusCandleColor = 'red';

option = {
    title: {
        text: '瀑布图&蜡烛图（组合）'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) {
            console.log('2', params);
            // var text = params[1].name + '<br />' + params[1].seriesName + '：' + params[1].value;
            // if (params[2].data.value) text += '<br />平均最大值：' + params[2].value[4];
            // if (params[2].data.value) text += '<br />平均最小值：' + params[2].value[3];
            return '';
        }
    },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        data: ['常量', '题材', '主演', '播出渠道', 'IP', '宣发', '团队制作', '总分']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        type: 'candlestick',
        barWidth: '80%',
        itemStyle: {
            color: 'red', // 往上升
            borderColor: 'red',
            color0: 'green', // 往下降
            borderColor0: 'green'
        },
        markPoint: {
            symbol: 'rect',
            symbolSize: 1,
            label: {
                show: true,
                color: '#202020',
                position: 'top',
                formatter: function(res) {
                    console.log(1, res);
                    return res.data.value;
                }
            },
            data: [{
                value: 50,
                coord: [0, 0]
            }, {
                value: -21,
                coord: [1, -21],
                label: {
                    position: 'bottom'
                }
            }, {
                value: 138,
                coord: [2, 138]
            }, {
                value: 232,
                coord: [3, 232]
            }, {
                value: 222,
                coord: [4, 232]
            }]
        },
        data: [
            [0, -21, 0, -21],
            [-21, -21, -21, -21],
            [-21, 138, -21, 138],
            [138, 232, 138, 232],
            [232, 222, 232, 222],
            [222, 242, 222, 242],
            [242, 406, 242, 406],
            [0, 406, 0, 406]
        ]
    }]
};