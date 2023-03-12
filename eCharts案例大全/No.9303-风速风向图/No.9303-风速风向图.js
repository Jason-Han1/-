let data = [{
        "TimePoint": "2019-11-18 15:00:00",
        "WindDir": 118,
        "WindSpeed": 1.307
    },
    {
        "TimePoint": "2019-11-18 16:00:00",
        "WindDir": 112,
        "WindSpeed": 17.267
    },
    {
        "TimePoint": "2019-11-18 17:00:00",
        "WindDir": 109,
        "WindSpeed": 20.978
    },
    {
        "TimePoint": "2019-11-18 18:00:00",
        "WindDir": 116,
        "WindSpeed": 18.794
    },
    {
        "TimePoint": "2019-11-18 19:00:00",
        "WindDir": 178,
        "WindSpeed": 10.483
    },
    {
        "TimePoint": "2019-11-18 20:00:00",
        "WindDir": 90,
        "WindSpeed": 25.704
    },
    {
        "TimePoint": "2019-11-18 21:00:00",
        "WindDir": 350,
        "WindSpeed": 0.499
    },
]

let seriesData = [];
data.filter(item => {
    seriesData.push({
        value: item.WindSpeed,
        symbol: 'path://M31 16l-15-15v9h-26v12h26v9z',
        symbolSize: [item.WindSpeed * 10,40],
        symbolRotate: 90 - item.WindDir,
        msg: item.WindDir
    });
})
option = {
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            let item = params[0];
            return `${item.name}<br/>
            风向: ${item.data.msg }<br/>
            风速: ${item.data.value}`;
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false, 
        splitLine: {
            show: false
          },
        data: ['2019-11-18 15:00:00',
            '2019-11-18 16:00:00',
            '2019-11-18 17:00:00',
            '2019-11-18 18:00:00',
            '2019-11-18 19:00:00',
            '2019-11-18 20:00:00',
            '2019-11-18 21:00:00'
        ],
        axisLabel: {
            formatter: function(date) {
                return echarts.format.formatTime("yyyy月MM月dd日 hh时", date)
            }
        },
        offset: -50,
            axisLabel: { show: false },
     
    },
    yAxis:{
        type: 'value',
        min: -30,
        max: 30,
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: { show: false },
            splitLine: { show: false }
          },
    visualMap: {
        type: "piecewise",
        orient: "horizontal",
        left: "center",
        top: 10,
        pieces: [{
                gte: 25,
                color: "#a52830",
                label: ""
            },
            {
                lt: 25,
                gte: 20,
                color: "#cf962e",
                label: ""
            },
            {
                lt: 20,
                gte: 15,
                color: "#ece93e",
                label: ""
            },
            {
                lt: 15,
                gte: 10,
                color: "#64b846",
                label: ""
            },
            {
                lt: 10,
                gte: 5,
                color: "#173d96",
                label: ""
            },
            {
                lt: 5,
                color: "#abc0e3",
                label: ""
            }
        ],
        // seriesIndex: 0,
        // dimension: 1
    },
    series: [{
        data: seriesData,
        type: 'line',

        encode: {
            x: 0,
        },
        lineStyle: {
            normal: {
                width: 0
            }
        },
    }]
};