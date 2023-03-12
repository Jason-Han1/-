options = [{
    title: {
        text: 'Awesome Chart'
    },
    tooltip: {
        show: true,
        trigger: "axis"
    },
    xAxis: {
        boundaryGap: false,
        data: ['Sun', 'Mon', 'Tue']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data: [220, 182, 191]
    }]
},
{
    title: {
        text: 'Awesome Chart'
    },
    tooltip: {
        show: true,
        trigger: "axis"
    },
    xAxis: {
        boundaryGap: false,
        data: ['Sun', 'Mon', 'Tue']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data: [220, 182, 191]
    }]
},
{
    title: {
        text: 'Awesome Chart'
    },
    tooltip: {
        show: true,
        trigger: "axis"
    },
    xAxis: {
        boundaryGap: false,
        data: ['Sun', 'Mon', 'Tue']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data: [220, 182, 191]
    }]
}];


var index = 0;
setInterval(function() {
    if (index > 3) {
        index = 0;
    }
    myChart.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: index
    })
    index++;
}, 2000);