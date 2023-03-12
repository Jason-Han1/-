option = {
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    // toolbox: {
    //     feature: {
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    series: [{
        name: '业务指标',
        type: 'gauge',
        detail: {
            formatter: '{value}%',
            fontSize: 28
        },
        title: {
            fontSize: 14
        },
        center: ['50%', '50%'],
        data: [{
            value: 50,
            name: '满意度'
        }]
    }]
};

setInterval(function() {
    option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    myChart.setOption(option, true);
}, 2000);

myChart.resize({
    width: 360,
    height: 360
})