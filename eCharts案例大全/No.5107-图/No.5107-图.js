var uploadedDataURL = "/asset/get/s/data-1605164151140-mLuXvXQqv.png";

option = {
    backgroundColor: '#506074',
    grid: {
        left: '0',
        right: '0',
        bottom: '0',
        top: '0'
    },
    xAxis: [{
        boundaryGap: false,
        data: new Array(15),
        splitLine: {
            show: false
        }
    }],
    yAxis: [{
        min: 0,
        max: 10,
        type: 'value',
        splitLine: {
            show: false
        }

    }],
    series: [
         {
            type: 'pictorialBar',
            symbolSize: ['100%', '100%'],
            symbolPosition: 'start',
            symbolOffset: [30, 0],
            z: 9,
            data: [{}, {}, {}, {}, {}, {}, {
                value: 5,
                symbolSize: ['1800%', '200%'],
                symbol: 'image://' + uploadedDataURL
            }]
        },
        {
            type: 'line',
            areaStyle: {
                normal: {
                    color: '#235935',
                    opacity: 0.8
                }
            },
            data: [9.5, 9.5, 9.5, 9.5, 9.5, 9.5, 9.4, 9.4, 9.3, 9.2, 9.3, 9.2, 9.3, 9.3, 9.2],
            symbolSize: 0,
            lineStyle: {
                normal: {
                    width: 0
                }
            }
        },
        {
            type: 'line',
            smooth: 0.6,
            areaStyle: {
                normal: {
                    color: '#2a445d',
                    opacity: 0.8
                }
            },
            data: [4.3, 4.4, 4.6, 4.7, 4.8, 5.0, 4.7, 4.8, 4.9, 4.9, 5.1, 5.2, 5.4, 5.4, 5.5],
            symbolSize: 0,
            lineStyle: {
                normal: {
                    width: 0
                }
            }
        },
        {
            type: 'line',
            smooth: 0.6,
            z: 10,
            areaStyle: {
                normal: {
                    color: '#307e4c',
                    opacity: 1
                }
            },
            data: [1.7, 1.8, 2, 2.1, 2.2, 2.2, 2.3, 2.5, 2.6, 2.6, 2.7, 2.8, 2.9, 2.9, 3],
            symbolSize: 0,
            lineStyle: {
                normal: {
                    width: 0
                }
            }
        }
    ],
    animation: false
};
myChart.setOption(option);