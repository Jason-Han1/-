option = {
    title: {
        text: '单击与双击共存'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'bar',
        data: [220, 182, 191, 234, 290, 330, 310]
    }]
};


var clickFlag = null;

myChart.on('click', function(params) {
    if (clickFlag) { //取消上次延时未执行的方法
        clickFlag = clearTimeout(clickFlag);
    }
    clickFlag = setTimeout(function() {
        alert(params.type);
    }, 300); //延时300毫秒执行

});


myChart.on('dblclick', function(params) {
    if (clickFlag) { //取消上次延时未执行的方法
        clickFlag = clearTimeout(clickFlag);
    }
    alert(params.type);
});