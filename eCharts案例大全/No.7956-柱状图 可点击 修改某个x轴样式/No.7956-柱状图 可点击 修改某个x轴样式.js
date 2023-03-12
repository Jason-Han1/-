option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        triggerEvent: true,
        data: ['Mon', {
            value: '2',
            textStyle: {
                color: 'red',
                borderWidth: '2',
                borderColor: 'blue',
                padding: 3
            }
        }, 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
            alignWithLabel: true
        }
    },
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: '直接访问',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220],

    }]
};
myChart.on('click', function(params) {
    //为三个柱子设置点击事件
    var name = params.name;
    if (params.componentType == "xAxis") {

        alert("单击了" + params.value + "x轴标签");

    } else {

        alert("单击了" + params.name + "柱状图");

    }

});