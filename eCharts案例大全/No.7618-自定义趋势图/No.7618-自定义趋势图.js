var yearCount = 5;
var categoryCount = 12;


var xAxisData = ['海南','海口','琼海','三亚','儋州'];
var customData = [];
var legendData = [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021];
var dataList = [
    [2068,400,60,170,160],
    [2284,600,80,210,210],
    [2571,800,130,320,350],
    [2759,1000,200,450,560],
    [3150,1227,290,532,799],
    [3414,1587,477,672,908],
    [3581,1589,446,763,802],
    [4091,1875,396,900,1082],
    [4527,1945,438,936,1817],
    [4789,1886,504,1021,1006],
    [5325.7417,1903.365,526.2141,1144.0482,2772.0659],
    ];


var encodeY = [1,2,3,4,5];


for (var i = 0; i < categoryCount; i++) {
    var val;
    var customVal = [i];
    customData.push(customVal);


    for (var j = 0; j < dataList.length; j++) {
        var value = j === 0
            ? echarts.number.round(val, 2)
            : echarts.number.round(Math.max(0, dataList[j - 1][i] + (Math.random() - 0.5) * 200), 2);
        //dataList[j].push(value);
        customVal.push(value);
    }
}


function renderItem(params, api) {
    var xValue = api.value(0);
    var currentSeriesIndices = api.currentSeriesIndices();
    var barLayout = api.barLayout({
        barGap: '30%', barCategoryGap: '20%', count: currentSeriesIndices.length - 1
    });


    var points = [];
    for (var i = 0; i < currentSeriesIndices.length; i++) {
        var seriesIndex = currentSeriesIndices[i];
        if (seriesIndex !== params.seriesIndex) {
            var point = api.coord([xValue, api.value(seriesIndex)]);
            point[0] += barLayout[i - 1].offsetCenter;
            point[1] -= 20;
            points.push(point);
        }
    }
    var style = api.style({
        stroke: api.visual('color'),
        fill: null
    });


    return {
        type: 'polyline',
        shape: {
            points: points
        },
        style: style
    };
}


option = {
    title:{
      text:''//各地区最大负荷变化趋势  
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: legendData
    },
    dataZoom: [{
        type: 'slider',
        start: 0,
        end: 100
    }, {
        type: 'inside',
        start: 50,
        end: 70
    }],
    xAxis: {
        data: xAxisData
    },
    yAxis: {
        name:'负荷（MW）',
    },
    series: [{
        type: 'custom',
        name: 'trend',
        renderItem: renderItem,
        itemStyle: {
            borderWidth: 2
        },
        encode: {
            x: 0,
            y: encodeY
        },
        data: customData,
        z: 200
    }].concat(echarts.util.map(dataList, function (data, index) {
        return {
            type: 'bar',
            animation: false,
            name: legendData[index + 1],
            itemStyle: {
                opacity: 0.5
            },
            data: data
        };
    }))
};