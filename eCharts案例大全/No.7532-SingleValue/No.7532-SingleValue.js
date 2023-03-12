option = {
    grid: [{
        left: "left",
        top: "0%",
        height: "200px"
    }, {
        left: "left",
        top: "50%"
    }],
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        gridIndex: 0
    }, {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        gridIndex: 1
    }],
    yAxis: [{
        type: 'value',
        gridIndex: 0
    }, {
        type: 'value',
        gridIndex: 1
    }],
    series: [{
        type: 'custom',
        data: [220, 182, 191, 234, 290, 330, 310],
        xAxisIndex: 0,
        yAxisIndex: 0,
        coordinateSystem: "cartesian2d",
        renderItem: function(params, api) {
            return {
                type: "group",
                children: [{
                    type: "text",
                    style: {
                        text: "123",
                        font: 'bolder 160px cursive',
                        textAlign: "left",
                        x: 100,
                        y: 100
                    }
                }, {
                    type: "text",
                    style: {
                        text: "-50%",
                        font: '26px cursive',
                        textAlign: "left",
                        x: 400,
                        y: 200
                    }
                }, {
                    type: "polygon",
                    shape: {
                        // points:[[20,50] ,[100,50], [100,30] ,[150,70] ,[100,90] ,[100,70] ,[20,70]],
                        points: [
                            [14.8, 20.2],
                            [23.8, 11.2],
                            [14.8, 2.2]
                        ]
                    },
                    position: [400, 100]
                }, {
                    type: "line",
                    shape: {
                        x1: 10,
                        y1: 10,
                        x2: 200,
                        y2: 200,
                        percent:1
                    }
                }]

            }
        }
    }, {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        xAxisIndex: 1,
        yAxisIndex: 1
    }, ]
};