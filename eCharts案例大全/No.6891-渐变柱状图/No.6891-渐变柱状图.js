const list = [{
    name: '黄浦区',
    value: 111
}, {
    name: '徐汇区',
    value: 222
}, {
    name: '长宁区',
    value: 333
}, {
    name: '静安区',
    value: 444
}, {
    name: '普陀区',
    value: 555
}];
const data = ['黄浦区', '徐汇区', '长宁区', '静安区', '普陀区'];
const values = [111,222,333,444,555];
const labelSetting = [''];
option = {
    backgroundColor: '#000',
    xAxis: {max: 2000,
                splitLine: {show: false},
                axisLabel: {show: false},
                axisTick: {show: false},
                axisLine: {show: false}
            },
    grid: {
        containLabel: true,
        left: 100,
        top: 0,
        right: 150,
        bottom: 0
    },
    yAxis: [{
        data: data,
        inverse: true,
                axisLine: {show: false},
                axisTick: {show: false},
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        fontSize: 14,
                        color: '#fff'
                    }
                }
    }],
    series: [{ //内
            type: 'bar',
            barWidth: 20,
            legendHoverLink: false,
            symbolRepeat: true,
            silent: true,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#636DFF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#CA60EE' // 100% 处的颜色
                    }]
                }
            },
            data: list,
            z: 1,
            animationEasing: 'elasticOut'
        },
        {
            type: 'pictorialBar',
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolMargin: '20%',
            symbol: 'rect',
            symbolSize: [10, 20],
            symbolBoundingData: 2000,
            itemStyle: {
                normal: {
                    color: '#D8D8D8'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    offset: [0, 2],
                    textStyle: {
                        color: '#fff',
                        fontSize: 14
                    }
                },
                
            },
            data: values,
            z: 0,
            animationEasing: 'elasticOut'
        },
        { //分隔
            type: 'pictorialBar',
            itemStyle: {
                color: '#000'
            },
            symbolRepeat: 'fixed',
            symbolMargin: 4,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [2, 20],
            symbolPosition: 'start',
            symbolOffset: [0, 0],
            symbolBoundingData: 2000,
            data: list,
            z: 2,
            animationEasing: 'elasticOut'
        }
    ]
};