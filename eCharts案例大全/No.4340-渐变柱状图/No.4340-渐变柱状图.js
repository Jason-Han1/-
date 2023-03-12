var data1= ['50', '60', '30','50', '60', '30','50', '60','40', '60', '20','40', '60']
var datacity = ['2019-12', '2020-01', '2020-02', '2020-03', '2020-04', 
'2020-05', '2020-06','2020-07','2020-08','2020-09','2020-10','2020-11']
var option = {
    backgroundColor:'#021434',
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        top: '10%',
        containLabel: true
    },
    yAxis: [{
        type: 'value',
        axisLabel: { //坐标轴刻度标签的相关设置。
            interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
            margin: 15,
            textStyle: {
                color: '#ACCFFF',
                fontStyle: 'normal',
                fontSize: 12,
            }
        },
        axisLine: {
            lineStyle: {
                color: '#344B83'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#344B83'
            },
        },
        axisTick: {
            show: false
        },

    }],
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        axisLabel: { //坐标轴刻度标签的相关设置。
            interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
            margin: 15,
            textStyle: {
                color: '#ACCFFF',
                fontStyle: 'normal',
                fontSize: 12,
            },
            rotate:30,
        },
        axisLine: {
            lineStyle: {
                color: '#344B83'
            }
        },
        data: datacity,
    }],
    series: [{
            name: '',
            type: 'bar',
            barWidth: '10',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    fontSize: 12,
                    color: '#fff',
                }
            },
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#45CAED'
    
                    }, {
                        offset: 1,
                        color: 'rgba(6, 176, 203, 0.59)'
    
                    }]),
                }
            },
            data: data1,

        },
    ]
};