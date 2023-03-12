option = {
    title: {
        text: '我在哪',
        top: '10%',
        left: '35%',
        textStyle: {fontSize: 22}
    },
    singleAxis: {
        type: 'category',
        bottom: '50%',
        top: '50%',
        right: '10%',
        data: ['我是谁'],
        axisLabel: {fontSize: 16, fontWeight: 'bold'},
        axisLine: {show: false},
        axisTick: {show: false}
    },
    legend: {
        show: true,
        left: '40%',
        bottom: '40%',
        textStyle: {fontSize: 14},
        itemWidth: 20,
        itemHeight: 20
    },
    series: [{
        type: 'scatter',
        name: '我要干什么',
        coordinateSystem: 'singleAxis',
        data: [43460,],
        symbolSize: function(value) {
            return Math.sqrt(value)*1.2
        },
        symbolOffset: [0, '-50%'],
        itemStyle: {opacity: 0.7, color: 'green'}
    },{
        type: 'scatter',
        name: 'o~shit',
        coordinateSystem: 'singleAxis',
        data: [18471],
        symbolSize: function(value) {
            return Math.sqrt(value)*1.3
        },
        symbolOffset: [0, '-50%'],
        itemStyle: {opacity: 0.8, color: 'red'},
    }]
};
