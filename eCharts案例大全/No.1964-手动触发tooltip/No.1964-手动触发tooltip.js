option = {
    tooltip: {
        trigger: 'axis',
        triggerOn: 'none',
        axisPointer: {
            type: 'shadow',
            animation: false
        },
    },
    title: {
        text: 'Awesome Chart',
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    },
    yAxis: {},
    series: [
        {
            type: 'bar',
            data: ['-', 182, 191, 234, 290, '-', '-'],
        },
        {
            type: 'bar',
            data: [2220, 1282, 1291, 2234, 2290, '-', '-'],
        },
    ],
};
myChart.getZr().on('click', (params) => {
    console.log(params)
    myChart.dispatchAction({
        type: 'hideTip',
    });
    const pointInPixel = [params.offsetX, params.offsetY];
    if (myChart.containPixel('grid', pointInPixel)) {
        let xIndex = myChart.convertFromPixel(
            {
                seriesIndex: 0,
            },
            [params.offsetX, params.offsetY]
        )[0];
        setTimeout(function () {
            myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 1,
                dataIndex: xIndex,
            });
        }, 10);
    }
});
