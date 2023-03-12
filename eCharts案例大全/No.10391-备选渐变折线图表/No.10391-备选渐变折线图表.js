option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['', '4时', '8时', '12时', '16时', '20时', '24时']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [20, 132, 201, 324, 290, 130, 0],
        type: 'line',
        symbolSize: 8,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1, [{
                    offset: 0,
                    color: '#f25d2d'
                  },
                  {
                    offset: 1,
                    color: '#11ded6'
                  }
                ])
            }
        }
    }]
};
