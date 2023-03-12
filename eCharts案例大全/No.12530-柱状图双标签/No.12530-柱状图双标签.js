//思路 将两条柱状图重合显示  一个label显示在中间一个显示在右边

let data1 = ['50', '100', '150'];
let data2 = ['100', '120', '78'];

option = {
    backgroundColor: '#fff',
    grid: {
        left: '5%',
        top: '1%',
        right: '2%',
        bottom: '1%',
        containLabel: true
    },
    xAxis: [{
        show: false,
    }],
    yAxis: [{
        offset: '27',
        axisLabel: {
            textStyle: {
                color: '#192948',
                fontSize: '16',
            }
        },
        data: ['寿命', '它故障', '画面不正常']
    }, {
        axisTick: 'none',
        axisLine: 'none',
        show: false,
        axisLabel: {
            textStyle: {
                color: '#192948',
                fontSize: '16',
            }
        },
        data: ['寿命', '它故障', '画面不正常']
    }],
    series: [{
            name: '红条',
            type: 'bar',
            yAxisIndex: 0,
            barGap: '0',
            data: data1,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: function(param) {
                        return param.value;
                    },
                    textStyle: {
                        color: '#fff',
                        fontSize: '16',
                    }
                }
            },
            barWidth: 50,
            z: 2
        }, {
            name: '红条',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '0',
            data: data1,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: function(param) {
                        var sum = data1.reduce((total, num) => {
                            return Number(total) + Number(num);
                        });
                        let rate = parseInt((param.value / sum) * 100).toFixed();
                        return rate + "%";
                    },
                    textStyle: {
                        color: '#000',
                        fontSize: '16',
                    }
                }
            },
            barWidth: 50,
            z: 1
        },
        {
            name: '黑条',
            type: 'bar',
            yAxisIndex: 0,
            barGap: '0',
            data: data2,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: function(param) {
                        return param.value;
                    },
                    textStyle: {
                        color: '#fff',
                        fontSize: '16',
                    }
                }
            },
            barWidth: 50,
            z: 2
        },
        {
            name: '黑条',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '0',
            data: data2,
            barWidth: 50,
            z: 1
        }
    ]
};