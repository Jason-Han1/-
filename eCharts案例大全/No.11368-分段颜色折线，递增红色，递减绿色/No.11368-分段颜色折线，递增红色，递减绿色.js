_data = [];

function getColors(data) {
    var arr = [];
    for (var i = 1; i < data.length; i++) {
        var style_start = {};
        var style_end = {};
        if (data[i] > data[i - 1]) {
            style_start.color = "red";
        } else {
            style_start.color = "green";
        }
        style_end.color = style_start.color;
        style_start.offset = (i - 1) / (data.length - 1);
        style_end.offset = i / (data.length - 1);
        arr.push(style_start, style_end);
    }
    return arr;
}

for (var i = 0; i < 20; i++) {
    _data.push(Math.round(Math.random() * 100, 0));
}

option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: _data,
        boundaryGap: [0, 0]
    },
    yAxis: {},
    animation: false,
    series: [{
        type: 'line',
        data: _data,
        lineStyle: {
            color: {
                colorStops: getColors(_data)
            }
        }
    }]
};

myChart.setOption(option);

myChart.setOption({
    series: [{
        data: _data
    }]
})

// console.log(myChart.getOption());
setInterval(function() {
    var oldData = _data.shift();
    var newData = Math.round(Math.random() * 100, 2);
    _data.push(newData);
    myChart.setOption({
        series: [{
            data: _data,
            lineStyle: {
                color: {
                    colorStops: getColors(_data)
                }
            }
        }]
    })
}, 1000)