app.title = '堆叠条形图';

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
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    legend: {
        data: ['电路复杂度', '可靠性', '成本', '适用功率'],
        textStyle: {
            fontSize: 28
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {

    },
    yAxis: {
        type: 'category',
        data: ['推挽型', '半桥型', '全桥型', '反激型', '正激型'],
        axisLabel: { //调整x轴的lable   

            textStyle: {
                fontSize: 25 // 让字体变大 
            }
        }
    },
    series: [{
            name: '电路复杂度',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            data: [6, 4, 10, 8, 7]
        }, {
            name: '可靠性',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            data: [8, 10, 4, 5, 6]
        }, {
            name: '成本',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            data: [6, 4, 10, 8, 7]
        }, {
            name: '适用功率',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            data: [6, 4, 10, 8, 7]
        },

    ]
    
};
