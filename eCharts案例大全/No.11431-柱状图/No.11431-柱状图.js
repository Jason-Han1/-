var dataPie = [12, 13, 14];
var dataPieXAxis = Array(3);
for (let i = 0; i < dataPie.length; i++) {
    dataPieXAxis[i] = dataPie[i] + ':00'
}
option = {
    title: {
        text: '业务主机',
        textStyle: {
            fontSize: 12,
            fontWeight: 'normal',
            color: '#65aaf1' //标题颜色
        },
        right: '2%',
    },
    grid: {
        left: '40px', // 与容器左侧的距离
        right: '5px', // 与容器右侧的距离
        top: '20px', // 与容器顶部的距离
        bottom: '30px', // 与容器底部的距离
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: [{
        type: 'category',
        data: dataPieXAxis,
        axisTick: {
            alignWithLabel: true
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#00b7ee'
            }
        }
    }],
    yAxis: {
        type: 'value',
        splitLine: {
            show: true
        },
        axisTick: {
            show: true
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            formatter: function(val) {
                return val + '%';
            },
            show: true,
            textStyle: {
                color: '#6ba1bb' //字体颜色
            }
        },
        data: ['0', '20%', '40%', '60%', '80%', '100%'],
    },
    series: [{
        name: '',
        type: 'pictorialBar',
        symbolSize: [30, 20],
        symbolOffset: [0, -1],
        z: 12,
        itemStyle: {
            normal: {
                color: '#14b1eb'
            }
        },
        data: [{
            value: 100,
            symbolPosition: 'end'
        }, {
            value: 60,
            symbolPosition: 'end'
        }, {
            value: 20,
            symbolPosition: 'end'
        }]
    }, {
        name: '业务主机',
        type: 'bar',
        itemStyle: {
            normal: {
                color: '#14b1eb',
                opacity: .7,
                barBorderRadius: 35,
            }
        },
        silent: true,
        barWidth: 30,
        barGap: '-100%', // Make series be overlap
        data: [100, 60, 20]
    }]
};

setInterval(function() { //数据动态展现
    if (dataPie.indexOf(23) == '-1') {
        for (let i = 0; i < dataPie.length; i++) {
            dataPie[i] = dataPie[i] + 1;
            dataPieXAxis[i] = dataPie[i] + ':00'
        }
    } else {
        dataPie = [0, 1, 2]
         for (let i = 0; i < dataPie.length; i++) {
            dataPieXAxis[i] = dataPie[i] + ':00'
        }
    }

    myChart.setOption({
        xAxis: [{
            type: 'category',
            data: dataPieXAxis,
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#00b7ee'
                }
            }
        }],
    });
}, 1000);