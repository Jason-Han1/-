xData = [1, 1, 3, 4, 5, 6, 7]
yData = [10, 20, 30, 40, 50, 60, 70]

option = {
     tooltip: {
        trigger: 'axis'
      },
       dataset: {
        source: [
            xData,
            yData
        ],
    },
    xAxis: {
        // type: 'value',
        // min: 0,
        // max: 10,
        // interval: 1,
        // data: xData
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        // data: yData,
        seriesLayoutBy: 'row',
        type: 'line',
        // data: [
        //     xData,
        //     yData
        // ],
        smooth: true
    }]
};
