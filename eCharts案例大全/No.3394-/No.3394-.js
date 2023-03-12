var data=[[1,2,33],[2,2,42],[3,7,43],[4,5,22],[5,3,14],[6,3,223]]
option = {
    grid: {
        top: 160,
        bottom: 125,
    },
    xAxis: {
        type: 'time',
        maxInterval: 3600 * 1000 * 24,
        splitLine: {
            lineStyle: {
                color: '#ddd',
            },
        },
    },
    yAxis: [
        {
            name: '风速（节）',
            nameLocation: 'middle',
            nameGap: 35,
            axisLine: {
                lineStyle: {
                    color: '#666',
                },
            },
            splitLine: {
                lineStyle: {
                    color: '#ddd',
                },
            },
        },
    ],
    series: [{
        name: '风向',
        type: 'custom', //风向
        renderItem: function (params, api) {
            var point = api.coord([api.value(0), api.value(1)]);
            var arrowSize = 18;

            return {
                type: 'path',
                shape: {
                    pathData: 'M31 16l-15-15v9h-26v12h26v9z',
                    x: -arrowSize / 2,
                    y: -arrowSize / 2,
                    width: arrowSize,
                    height: arrowSize,
                },
                rotation:api.value(2)/180*Math.PI,
                position: point,
                style: api.style({
                    stroke: '#555',
                    lineWidth: 1,
                }),
            };
        },
        encode: {
            x: 0,
            y: 1,
        },
        data: data,
    },{	
       		name:"风力",
            type: 'line',	//风力
            symbol: 'none',
            encode: {
                x: 0,
                y: 1
            },
            lineStyle: {
                normal: {
                    color: '#aaa',
                    type: 'dotted'
                }
            },
            data: data,
            z: 1
        }]
};
myChart.setOption(option)