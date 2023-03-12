option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['0']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data: [0],
        label: {
            show: true,
            // showLastOnly: true
        }
    }],
    animationDuration: 3000,
    animationDurationUpdate: 3000
};

function addData(n) {
    option.xAxis.data.push(n + '');
    option.series[0].data.push(
        Math.round(Math.random() * 100) + n * 20
    );
    myChart.setOption(option);
    ++n;
}

var n = 1;
setTimeout(function() {
    addData(n);
}, 0);

setInterval(function() {
    ++n;
    addData(n);
}, 3000);