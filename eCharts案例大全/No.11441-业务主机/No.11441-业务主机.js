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
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
   grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data: ["12:00", "13:00", "14:00"],
            axisTick: {
                alignWithLabel: true
            },
             axisLabel: {
            show: true,
            textStyle: {
                color: '#00b7ee'
            }
        }
        }
    ],
    yAxis: {
        type : 'value',
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
                    formatter: function (val) {
                        return val  + '%';
                    },
                    show: true,
                    textStyle: {
                        color: '#6ba1bb' //字体颜色
                    }
        },
        data:['0','20%','40%','60%','80%','100%'],
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
        name: '',
        type: 'pictorialBar',
        symbolSize: [30, 20],
        symbolOffset: [0, 0],
        z: 12,
        itemStyle: {
            normal: {
                color: '#14b1eb',
                
            }
        },
        data: [100, 50, 20]
    }, {
        name:'业务主机',
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