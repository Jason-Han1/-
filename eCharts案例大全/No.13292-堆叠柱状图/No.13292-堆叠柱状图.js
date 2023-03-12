option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    toolbox: {
        show : true,
        feature : {
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },    
    legend: {
        data: ['已读','未读','垃圾']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月'],
        axisLabel: {
            interval: 0
        }
    }],
    yAxis: [{
        type: 'value',
        max: 700
    }],
    series: [

        {
            name: '未读',
            type: 'bar',
            barWidth: '40%',
            itemStyle: {
                normal: {
                    color: '#4dbd74'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            stack: '信息',
            data: [320, 132, 101, 134, 90, 30]
        },
        {
            name: '已读',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: '#ffc107'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    textStyle: {
                        color: '#000'
                    }
                }
            },
            stack: '信息',
            data: [220, 182, 191, 234, 290, 230]
        },
        {
            name: '垃圾',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: '#f86c6b'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            stack: '信息',
            data: [150, 132, 201, 154, 90, 130]
        },
        {
            name: '总数',
            type: 'bar',
            stack: '信息',
            label: {
                normal: {
                    offset: ['50', '800'],
                    show: true,
                    position: 'insideBottom',
                    formatter: '{c}',
                    textStyle: {
                        color: '#000'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(128, 128, 128, 0)'
                }
            },
            data: [690, 446, 493, 522, 470, 390]
        }
    ]
};