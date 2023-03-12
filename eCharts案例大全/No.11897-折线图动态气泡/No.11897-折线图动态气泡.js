var animationTime = 3000; //动画定时时间
var index = 1; //第几个显示

var datas = [{
    name: '第一医院',
    value: 220
}, {
    name: '第二医院',
    value: 182
}, {
    name: '第三医院',
    value: 191
}, {
    name: '第四医院',
    value: 234
}, {
    name: '第五医院',
    value: 290
}, {
    name: '第六医院',
    value: 330
}, {
    name: '第七医院',
    value: 310
}];

var legendData = [];
var seriesData = [];

datas.forEach(function(item) {
    legendData.push(item.name);
    seriesData.push(item.value);
});

option = {
    title: {
        text: '折线图动态气泡'
    },
    xAxis: {
        data: legendData
    },
    yAxis: {},
    series: [{
        type: 'line',
        data: seriesData,
        markPoint : {
            data : [
                {name : legendData[0], value : seriesData[0], xAxis: 0, yAxis: seriesData[0]}
            ]
        },
    }]
};


var mychart = echarts.getInstanceByDom(document.getElementById("chart-panel"));
mychart.setOption(option);

var animation = function(dataIndex) {
    var options = mychart.getOption();
    
    options.series.forEach(function(serie, i) {
        options.series[i].markPoint.data = [{
            name: legendData[index],
            value: seriesData[index],
            xAxis: index, 
            yAxis: seriesData[index]
        }]
    });
    
    index++;
    if(index >= seriesData.length) {
        index = 0;
    }
    
    mychart.setOption(options);
}

setInterval(function() {
    animation(index);
}, animationTime)