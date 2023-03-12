var symbolSize = 10;
var data = [
    ['Jan', 250],
    ['Feb', 300],
    ['Mar', 280],
    ['Apr', 200]
];
// var data = [250, 300, 280, 200];

option = {
    title: {
        text: 'Monthly Forecast'
    },
    tooltip: {
        trigger: 'axis'
            // triggerOn: 'mousemove',
            // triggerOn: 'none',
            // formatter: function (params) {
            //     return params.data[1].toFixed(0);
            // }
    },
    legend: {
        x: 'left',                         
        y: 'middle',  
        orient: 'vertical',
        data: ['Current Year', 'Last Year', 'Avg. Last 3 Months', 'Avg. Last 6 Months', 'Stock']
    },
    grid: {
        left: '150px;',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        id: 'a',
        name: 'Current Year',
        type: 'line',
        smooth: true,
        symbolSize: symbolSize,
        data: data
    }, {
        name: 'Last Year',
        type: 'line',
        smooth: true,
        data: [
            ['Jan', 250],
            ['Feb', 340],
            ['Mar', 250],
            ['Apr', 270],
            ['May', 230],
            ['Jun', 240]
        ]
    }, {
        name: 'Avg. Last 3 Months',
        type: 'line',
        smooth: true,
        data: [
            ['Jan', 220],
            ['Feb', 330],
            ['Mar', 290],
            ['Apr', 280],
            ['May', 240],
            ['Jun', 250]
        ]
    }, {
        name: 'Avg. Last 6 Months',
        type: 'line',
        smooth: true,
        data: [
            ['Jan', 260],
            ['Feb', 380],
            ['Mar', 220],
            ['Apr', 210],
            ['May', 260],
            ['Jun', 270]
        ]
    }, {
        name: 'Stock',
        type: 'line',
        smooth: true,
        data: [
            ['Jan', 230],
            ['Feb', 350],
            ['Mar', 260],
            ['Apr', 270],
            ['May', 250],
            ['Jun', 290]
        ]
    }]
};


if (!app.inNode) {
    setTimeout(function() {
        // Add shadow circles (which is not visible) to enable drag.
        myChart.setOption({
            graphic: echarts.util.map(data, function(item, dataIndex) {
                return {
                    type: 'circle',
                    position: myChart.convertToPixel('grid', item),
                    shape: {
                        cx: 0,
                        cy: 0,
                        r: symbolSize / 2
                    },
                    invisible: true,
                    draggable: true,
                    ondrag: echarts.util.curry(onPointDragging, dataIndex),
                    onmousemove: echarts.util.curry(showTooltip, dataIndex),
                    onmouseout: echarts.util.curry(hideTooltip, dataIndex),
                    z: 100
                };
            })
        });
    }, 0);

    window.addEventListener('resize', updatePosition);
}

myChart.on('dataZoom', updatePosition);

function updatePosition() {
    myChart.setOption({
        graphic: echarts.util.map(data, function(item, dataIndex) {
            return {
                position: myChart.convertToPixel('grid', item)
            };
        })
    });
}

function showTooltip(dataIndex) {
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: dataIndex
    });
}

function hideTooltip(dataIndex) {
    myChart.dispatchAction({
        type: 'hideTip'
    });
}

function onPointDragging(dataIndex, dx, dy) {
    var value = myChart.convertFromPixel('grid', this.position);
    data[dataIndex][1] = value[1].toFixed(0);

    // Update data
    myChart.setOption({
        series: [{
            id: 'a',
            data: data
        }]
    });
}