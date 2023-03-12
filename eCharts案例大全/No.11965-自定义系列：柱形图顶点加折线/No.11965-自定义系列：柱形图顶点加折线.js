var colors = ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
var yearCount = 7;
var categoryCount = 30;

var xAxisData = [];
// var customData = [];
var legendData = [];
var dataList = [];

legendData.push('trend');
var encodeY = [];
for (var i = 0; i < yearCount; i++) {
    legendData.push((2010 + i) + '');
    dataList.push([]);
    // customData.push([i])
    encodeY.push(1 + i);
}

for (var i = 0; i < categoryCount; i++) {
    var val = Math.random() * 1000;
    xAxisData.push('category' + i);

    var data = dataList[0];
    for (var j = 0; j < dataList.length; j++) {
        var value = j === 0
            ? echarts.number.round(val, 2)
            : echarts.number.round(Math.max(0, dataList[j - 1][i] + (Math.random() - 0.5) * 200), 2);
        dataList[j].push(value);
        // customData[j].push(value);
    }
}
// console.log(dataList)
function renderItem(params, api) {  //renderItem针对当前data的每个应该显示(由dataZoom控制)的dataItem项执行,data.length需要等于category长度
    var xValue = api.value(0);//api.value(x)表示dataItem[x]或者dataIndex,0通常用来存放dataIndex便于识别数据
    var xStartValue = params.dataIndex - params.dataIndexInside ;
    var xEndValue = params.dataIndex - params.dataIndexInside + params.dataInsideLength ;
    var currentSeriesIndices = api.currentSeriesIndices();//得到系列的 当前index组。注意这个 index 不同于系列定义时的 index。这个 index 是当 legend 组件进行了系列筛选后，剩余的系列排列后的 index。
    var barLayout = api.barLayout({
        barGap: '30%', barCategoryGap: '20%', count: currentSeriesIndices.length - 1
    });
    // console.log(params);
    // console.log(xValue);
    var pointsList = [];
    if (params.dataIndexInside === 0){//当当前renderItem是第一个渲染的时候，才绘制自定义图形
        // console.log(xStartValue,xEndValue)
        for (var i = 0; i < currentSeriesIndices.length; i++) {
            var seriesIndex = currentSeriesIndices[i];//遍历当前Legend筛选后的index组
            if (seriesIndex !== params.seriesIndex) {
                var points = [];
                for (var j = xStartValue;j < xEndValue;j++){
                    var point = api.coord([j, dataList[seriesIndex-1][j]]);
                    point[0] += barLayout[i - 1].offsetCenter;
                    point[1] -= 0;
                    points.push(point);
                }
                pointsList.push(points)
            }
        }   
        return {
            type:'group',
            children:echarts.util.map(pointsList, function (points, index) {
                                        return {
                                            type: 'polyline',
                                            animation: true,
                                            name: 'Year' + (index),
                                            shape: {
                                                points: points
                                            },
                                            style: api.style({
                                                                    stroke: colors[currentSeriesIndices[index]],//api.visual('color'),
                                                                    fill: null
                                                                })
                                        };
                                    })
            };
    }
    
    // var style = api.style({
    //     stroke: api.visual('color'),
    //     fill: null
    // });
    // console.log(pointsList)
    
}
option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: legendData
    },
    dataZoom: [{
        type: 'slider',
        start: 50,
        end: 70
    }, {
        type: 'inside',
        start: 50,
        end: 70
    }],
    xAxis: {
        data: xAxisData
    },
    yAxis: {},
    series: [{
        type: 'custom',
        name: 'trend',
        renderItem: renderItem,
        itemStyle: {
            normal: {
                borderWidth: 2
            }
        },
        // encode: {
        //     x: 0,
        //     y: encodeY
        // },
        data: dataList[0],
        z: 100
    }].concat(echarts.util.map(dataList, function (data, index) {
        return {
            type: 'bar',
            animation: false,
            name: legendData[index + 1],
            itemStyle: {
                normal: {
                    opacity: 0.5,
                    color:colors[index]
                }
            },
            data: data
        };
    }))
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
};