option = {
    backgroundColor: '#000',
    tooltip: {},
    legend: {
        orient: 'vertical',
        x: 'left',
        y: 'bottom',
        data: ['禅城区', '南海区', '顺德区', '高明区', '三水区'],
        textStyle: {
            color: '#fff',
            fontSize: 32
        }
    },
    radar: {
        name: {
          fontSize: 32  
        },
        // shape: 'circle',
        indicator: [
           { name: '注册登记类\n综合窗口'},
           { name: '社会民生类\n综合窗口'},
           { name: '其他类窗口'},
           { name: '税务综合窗口'},
           { name: '公安综合窗口'},
           { name: '投资建设类\n综合窗口'},
           { name: '经营许可类\n综合窗口'}
        ],
        axisLine: {
            lineStyle:{
                color: '#fff',
            }
        },
        axisTick: {
            show: true
        },
        splitLine: {
            show: false
        },
        splitArea: {
            show: false
        }
    },
    series: [{
        name: '五区窗口分布',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [{
                value : [600, 500, 430, 150, 660, 720,800],
                name : '禅城区',
            }, {
                value : [900, 1200, 650, 400, 880, 760,500],
                name : '南海区'
            }, {
                value : [1300, 680, 420, 1030, 580, 266,990],
                name : '顺德区'
            }, {
                value : [2000, 400, 800, 1300, 330, 650,888],
                name : '高明区'
            }, {
                value : [1500, 630, 930, 1500, 850, 230,333],
                name : '三水区'
            }]
    }]
};