
var categoryData = []; //构造数据的分类数组
var chartData = []; // 构造数据数组
var dataCount = 10; //构造数据总数
var interval = 200; //强制设置y轴区间
var colors = ['#5388dd','#2967cc','#00bcc9','#abdc78','#eca100','#60399a'];
var colorsLength = colors.length;
var distance = 5; //text与柱状图距离

//构造数据
for (var i = 0; i < dataCount; i++) {
    var val = Math.random() * 1000;
    categoryData.push('category' + i);
    chartData.push([
        i,
        echarts.number.round(val, 2)
    ]);
}

//将总数按v值切割
var convertData = function(d,v){
    var data = [];
    var v1 = Math.floor(d/v);
    var v2 = d%v;
    if(v1 == 0 && v2 > 0){
            data.push([0,d]);
    }else{
        for(var j = 0; j < v1; j++){
            data.push([j * v,(j + 1) * v]);
        }
        if(v2 > 0){
            data.push([v1 * v,v1 * v + v2]);
        }
    }
    return data;
}

//构造图形
function renderItem(params, api) {
    var res = convertData(api.value(1),interval);
    var categoryIndex = api.value(0);
    var groupData = [];
    var width = api.size([0, 1])[0] * 0.5;
    var textPosition = api.coord([categoryIndex,api.value(1)])

    //添加rect
    for(var i = 0;i < res.length; i++){
        var start = api.coord([categoryIndex,res[i][0]]);
        var end = api.coord([categoryIndex,res[i][1]]);
        groupData.push({
            type: 'rect',
            shape: {
                x: start[0] - width / 2,
                y: start[1],
                width: width,
                height: end[1] - start[1],
            },
            style: {
                fill: colors[i % colorsLength]
            }
        });
    }

    //添加Top Label
    groupData.push({
            type: 'text',
            style: {
                text: api.value(1),
                x: textPosition[0],
                y: textPosition[1] - distance - 10,
                textAlign:'center',
                fill: colors[(res.length - 1) % colorsLength]
            }
        });

    return {
        type: 'group',
        children:groupData
    }
}


option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    title: {
        left: 'center',
        text: 'Bar'
    },
    xAxis: {
        data: categoryData
    },
    yAxis: {
        interval:interval
    },
    series: [{
        type: 'custom',
        name: 'bar',
        renderItem: renderItem,
        encode: {
            x: 0,
            y: 1,
            tooltip: 1,
        },
        data: chartData,
    }]
};