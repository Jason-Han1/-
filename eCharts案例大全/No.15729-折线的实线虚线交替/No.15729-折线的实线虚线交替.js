option = {
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} W'
        }
    },
    visualMap: {
        show: false,
        seriesIndex:0,
        dimension: 0,
        pieces: [{
            gt: 0,
            lte: 8,
            color: 'red'
        }, {
            gt: 8,
            color: 'transparent'
        }]
    },
    series: [
        {
            name:'用电量',
            type:'line',
            smooth: true,
            data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
        },
        {
            name:'用电量',
            type:'line',
            smooth: true,
            data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
            lineStyle:{
                normal:{
                    type:'dotted'
                }
            }
        }
    ]
};
