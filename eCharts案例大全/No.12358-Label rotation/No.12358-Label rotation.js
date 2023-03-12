
var categoryData = [];
var data = [];
var rotate = 20;

for (var i = 0; i < 100; i++) {
    categoryData.push(i + 'longlonglong');
    data.push(Math.random() * 1000000);
}

option = {
    title: {
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: [{
        height: 50
    }, {
        top: 220,
        height: 300
    }],
    xAxis: [{
        id: 'category',
        type: 'category',
        boundaryGap: false,
        data: categoryData,
        axisLabel: {
            rotate: rotate
        }
    }, {
        gridIndex: 1
    }],
    yAxis: [{
    }, {
        id: 'category',
        type: 'category',
        boundaryGap: false,
        data: categoryData,
        gridIndex: 1,
        axisLabel: {
            rotate: rotate
        }
    }],
    series: [
        {
            type:'scatter',
            data: data
        },
        {
            type:'scatter',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: data
        }
    ]
};

next();

function next() {
    var nextInterval = rotate % 90 === 0 ? 2000: 70;
    rotate = (rotate + 1) % 360;
    setTimeout(function () {
        myChart.setOption({
            xAxis: {
                id: 'category',
                axisLabel: {
                    rotate: rotate
                }
            },
            yAxis: {
                id: 'category',
                axisLabel: {
                    rotate: rotate
                }
            }
        });
        next();
    }, nextInterval);
}