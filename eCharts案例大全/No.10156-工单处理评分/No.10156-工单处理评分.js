var myColor = ['#08cca2', '#fac46e', '#64ccf3', '#fb9996', '#36a3f7'];
option = {
    backgroundColor: '#ffffff',
    grid: {
        left: '5%',
        top: '12%',
        right: '5%',
        bottom: '8%',
        containLabel: true
    },
    xAxis: [{
        show: false,
    }],
    yAxis: [{
        axisTick: 'none',
        axisLine: 'none',
        offset: '27',
        axisLabel: {
            textStyle: {
                color: '#777',
                fontSize: '16',
            }
        },
        data: ['xiao', 'green', 'trigger', 'master', 'boss']
    }, {
        axisTick: 'none',
        axisLine: 'none',
        axisLabel: {
            textStyle: {
                color: '#777',
                fontSize: '16',
            }
        },
        data: ['100', '100', '100', '100', '100']
    }, {
        name: '工单处理评分',
        nameGap: '50',
        nameTextStyle: {
            color: '#777',
            fontSize: '16',
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0)'
            }
        },
        data: [],
    }],
    series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: [100, 13, 25, 29, 38],
            label: {
                normal: {
                    show: true,
                    position: '',
                    textStyle: {
                        color: '#777',
                        fontSize: '16',
                    }
                }
            },
            barWidth: 12,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                }
            },
            z: 2
        }, {
            name: '白框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [99.5, 99.5, 99.5, 99.5, 99.5],
            barWidth: 20,
            itemStyle: {
                normal: {
                    color: '#ffffff',
                    barBorderRadius: 5,
                }
            },
            z: 1
        }, {
            name: '外框',
            type: 'bar',
            yAxisIndex: 2,
            barGap: '-100%',
            data: [100, 100, 100, 100, 100],
            barWidth: 24,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                    barBorderRadius: 5,
                }
            },
            z: 0
        }
    ]
};