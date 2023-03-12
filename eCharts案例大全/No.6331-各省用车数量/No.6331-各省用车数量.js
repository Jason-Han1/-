var spirit = "/asset/get/s/data-1598164947358-xeWwEpPA_.png";


var maxData = 200;

option = {
    title: {
        text: '各省用车数量',
        left: '70%',
        y: 10,
        textStyle: {
            color: 'red'
        }
    },
    backgroundColor: '#101a3c',
    grid: {
        left: 70,
        top: 10,
        bottom: 10
    },
    tooltip: {
        trigger: 'item',
        textStyle: {
            fontSize: 14
        },
        formatter: '{b0}:{c0}'
    },
    xAxis: {
        left: 10,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    yAxis: [{

            type: 'category',
            inverse: false,
            data: [
                'A',
                'B',
                'C',
                'D',
                'E'
            ],
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                //图形最左侧与y轴文字的距离
                margin: 4,
                textStyle: {
                    color: '#fff',
                    fontSize: 16.25
                }
            }
        },

    ],
    series: [{
        type: 'pictorialBar',
        left: '5%',
        symbol: 'image://asset/get/s/data-1598164947358-xeWwEpPA_.png',
        symbolRepeat: true,
        symbolMargin: '10%',
        symbolClip: 'true',
        symbolSize: 22,
        symbolPosition: 'start',

        label: {
            normal: {
                show: true,
                position: 'insideRight',
                offset: [40, 0],
                color: '#fff',
                formatter: function(params) {
                    return params.value;
                }
            }
        },
        symbolBoundingData: 10000,
        data: [11233, 23212, 21267, 18211, 1111]

    }]
};