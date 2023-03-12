let b = [true, false, true, true]
option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu'],
        axisTick: {
            show: true,
            interval: function (index) {
              // return index && !!x2Data[index]
              return b[index]
        },
        length:50,
        alignWithLabel: false,

      },
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934],
        type: 'bar'
    }]
};
