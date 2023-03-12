option = {
    xAxis: {
        type: 'category',
        data: [{
            value: 'Mon',
            start: 123,
            end: 456
        }, 'Tue', 'Wed', 'Thu', 'Fri', {
            value: 'Sat',
            start: 123,
            end: 456
        }, 'Sun'],
        boundaryGap: false,
        axisLine: {onZero: false},
                splitLine: {show: false},
                splitNumber: 20,
                min: 'dataMin',
                max: 'dataMax',
                axisPointer: {
                    z: 100
                }
        // axisTick:{
        //     alignWithLabel:true
        // }
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        // data: [
        //       [{value: "Mon"}, 820],
        //       ["Tue", 932],
        //       ["Wed", 901],
        //       ["Thu", 934],
        //       ["Fri", 1290],
        //       ["Sat", 1330],
        //       ["Sun", 1320]
            // ],
        type: 'bar'
    }],
    brush: {
            xAxisIndex: "all",
            throttleType: "debounce",
            throttleDelay: 500,
            brushStyle: {
              color: "rgba(120,140,180,0.6)"
            },
            outOfBrush:{
                colorAlpha: 1
            }
            // toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
            // xAxisIndex: 0
          }
};

console.log(myChart);
myChart.on('brushSelected', function(params){
    console.log(params);
});


setTimeout(function(){
    myChart.dispatchAction({
            type: "brush",
            areas: [
              {
                brushType: "lineX",
                coordRange: ['Sat', 'Sun'],
                xAxisIndex: 0
              }
            ]
          });
}, 500)