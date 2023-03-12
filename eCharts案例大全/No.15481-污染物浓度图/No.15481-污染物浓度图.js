var timeData = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

/*timeData = timeData.map(function (str) {
    return str.replace('2009/', '');
});*/

option = {
    title: {
        text: '污染物浓度图',
        subtext: '堆叠数据',
        x: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false
        }
    },
    legend: {
        data: ['PM2.5', 'PM10','AQI'],
        x: 'left'
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    axisPointer: {
        link: {
            xAxisIndex: 'all'
        }
    },
    dataZoom: [{
        show: true,
        realtime: true,
        start: 30,
        end: 70,
        xAxisIndex: [0, 2]
    }, {
        type: 'inside',
        realtime: true,
        start: 30,
        end: 70,
        xAxisIndex: [0, 1]
    }],
    grid: [{
        left: 50,
        right: 50,
        height: '15%'
    }, {
        left: 50,
        right: 50,
        top: '30%',
        height: '15%'
    }, {
        left: 50,
        right: 50,
        top: '50%',
        height: '15%'
    }],
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            onZero: true
        },
        data: timeData,
        show: false
    }, {
        gridIndex: 1,
        type: 'category',
        boundaryGap: false,
        axisLine: {
            onZero: true
        },
        data: timeData,
         show: false
    }, {
        gridIndex: 2,
        type: 'category',
        boundaryGap: false,
        axisLine: {
            onZero: true
        },
        data: timeData
    }],
    yAxis: [{
        name: 'PM2.5',
        type: 'value',
        max: 500,
        nameLocation: 'middle',
        nameGap: 30,
        position: 'left'

    },  {
        gridIndex: 1,
        name: 'PM10',
        type: 'value',
        nameLocation: 'middle',
         nameGap: 30,
        inverse: false
    },  {
        gridIndex: 2,
        name: 'AQI',
        type: 'value',
        nameLocation: 'middle',
         nameGap: 30,
        inverse: false
    }],
    series: [{
            name: '2014-PM2.5',
            type: 'line',

            symbolSize: 8,
            hoverAnimation: false,
            data: [92, 130, 83, 55, 54, 48, 75, 56, 59, 103, 86, 58]
        },

        {
            name: '2014-PM10',
            type: 'line',

            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 8,
            hoverAnimation: false,
            data: [104, 115, 121, 89, 82, 27, 33, 31, 35, 68, 102, 81]
        },

        {
            name: '2014-AQI',
            type: 'line',

            xAxisIndex: 2,
            yAxisIndex: 2,
            symbolSize: 8,
            hoverAnimation: false,
            data: [104, 115, 121, 89, 82, 27, 33, 31, 35, 68, 102, 81]
        }
    ]
};