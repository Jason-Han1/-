var xAxisData = ['09-01', '09-02', '09-03', '09-04', '09-05', '09-06', '09-07', '09-08', '09-09', '09-10'];
var seriesData = [0.5, 0.2, 0.1, 0.4, 0.5, 1, 0.5, 0.2, 0.1, 0.4, 0.5, 1];
var arrowArr = ['W', 'WSW', 'SW', 'SSW', 'S', 'SSE', 'SE', 'ESE', 'E', 'E'];
var preditDate = '09-05';
var beforeEnsure = '09-04';
var afterEnsure = '09-07';

//总长度
var num = xAxisData.length - 1;
var index = 0;
var actualPercent = '';
var preditPercent = '';


var arrowDataArr = [];
xAxisData.forEach(function(item, i) {
    var arr = [];
    arr.push(xAxisData[i]);
    arr.push(seriesData[i]);
    arr.push(arrowArr[i]);
    arrowDataArr.push(arr);

})




//箭头处理函数
var directionMap = {};
echarts.util.each(
    ['W', 'WSW', 'SW', 'SSW', 'S', 'SSE', 'SE', 'ESE', 'E', 'ENE', 'NE', 'NNE', 'N', 'NNW', 'NW', 'WNW'],
    function(name, index) {
        directionMap[name] = Math.PI / 8 * index;
    }
);

var dims = {
    time: 0,
    windSpeed: 1,
    R: 2,
    waveHeight: 3,
    weatherIcon: 2,
    minTemp: 3,
    maxTemp: 4
};
var arrowSize = 18;
var weatherIconSize = 45;

function renderArrow(param, api) {
    var point = api.coord([
        api.value(dims.time),
        api.value(dims.windSpeed)
    ]);

    return {
        type: 'path',
        shape: {
            pathData: 'M31 16l-15-15v9h-26v12h26v9z',
            x: -arrowSize / 2,
            y: -arrowSize / 2,
            width: arrowSize,
            height: arrowSize
        },
        rotation: directionMap[api.value(dims.R)],
        position: point,
        style: api.style({
            stroke: '#555',
            lineWidth: 1
        })
    };
}



option = {
    color: ['#259e72', '#178fcd'],
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            return [
                params[1].value[dims.time] + '<br/>' +
                '风速：' + params[1].value[dims.windSpeed],
                '风向：' + params[1].value[dims.R],
            ].join('<br>');
        }
    },
    xAxis: [{
            boundaryGap: false,
            data: xAxisData
    }],
    "grid": [{
            "left": "5%",
            "right": "5%",

            "show": false
        }
    ],
    yAxis: [{
        name: ''
    }],
    "visualMap": [{
        "show": false,
        "dimension": 0,
        "seriesIndex": 0,
        "pieces": [{
            "lte": index,
            "color": "#259e72"
        }, {
            "gt": index,
            "lte": seriesData.length + 1,
            "color": "#51d9a7"
        }]
    }],
    "visualMap": [{
        "show": false,
        "dimension": 0,
        "seriesIndex": 0,
        "pieces": [{
            "lte": index,
            "color": "#259e72"
        }, {
            "gt": index,
            "lte": seriesData.length + 1,
            "color": "#51d9a7"
        }]
    }],
    series: [{
        name: '风速',
        type: 'line',
        smooth: true,
        "xAxisIndex": "0",
        data: seriesData,
        markLine: {
            label: {
                color: '#666',
                position: 'middle',
                textStyle: {
                    padding: -50
                }
            },
            lineStyle: {
                color: '#666'
            }
        }
    }, {
        name: '风向',
        "type": "custom",
        renderItem: renderArrow,
        "encode": {
            "x": 0,
            "y": 1
        },
        "data": arrowDataArr,
        "z": 10
    }, {
        name: '平行于y轴的趋势线',
        type: 'line',
        color: ['black'],
        markLine: {
            data: [
                [{
                    symbol: "line",
                    coord: [preditDate, 0]
                }, {
                    symbol: "line",
                    coord: [preditDate, 1]
                }]
            ]
        }
    }]
};

setTimeout(function() {
    var chart = document.getElementById('chart-panel');
    var myChart = echarts.init(chart);
    myChart.dispatchAction({
        type: 'showTip',
        // 系列的 index，在 tooltip 的 trigger 为 axis 的时候可选。
        seriesIndex: 1,
        // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
        dataIndex: 3
        // 可选，数据名称，在有 dataIndex 的时候忽略
        //name?: string
    });
}, 10);