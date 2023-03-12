var colors = ['rgba(217,133,193,1)', 'rgba(70,175,230,1)'];
var xData = ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12'];
var yData1 = [300, 380, 400, 380, 350, 410, 480, 460, 410, 380, 350, 320];
var yData2 = [200, 180, 250, 250, 310, 250, 210, 180, 200, 230, 250, 280];
option = {
    color: colors,
    // backgroundColor:'#10263B',
    legend: {
        data: ['用户量', '绑定量']
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisTick: {
            show: false,
            alignWithLabel: true
        },
        splitLine: {
            show: true
        },
        data: xData
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false,
            alignWithLabel: true
        },
        splitLine: {
            show: true
        }
    }],
    series: [{
            type: 'line',
            symbol: 'none',
            smooth: true,
            data: yData1,
            areaStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,
                    [{
                            offset: 0,
                            color: 'rgba(89,122,171,0.5)'
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(89,122,171,1)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(217,133,193,1)'
                        }
                    ]
                )
            }
        },
        {
            type: 'line',
            symbol: 'none',
            smooth: true,
            data: yData2,
            areaStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,
                    [{
                            offset: 0,
                            color: 'rgba(22,52,77,0.5)'
                        },
                        {
                            offset: 0.4,
                            color: 'rgba(49,113,157,0.8)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(70,175,230,1)'
                        }
                    ]
                )
            }
        }
    ]
};