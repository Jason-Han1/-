var xArr = ['一', '二', '三', '四', '五'];
var yArr = [100, 200, 300, 400, 500];
var series = [];
for (var i = 0; i < xArr.length; i++) {
    series.push({
        name: xArr[i],
        type: 'bar',
        barWidth: 16,
        barGap: '-100%',
        data: [
            [xArr[i], yArr[i], yArr[i]]
        ]
    });
}


option = {
    legend: {
        left: 'left',
        top: '30',
        data: xArr,
    },
    grid: {
        x: 60,
        y: 100,
        x2: 40,
        y2: 35,
    },
    xAxis: {
        data: xArr,
        // axisLabel: {
        //     inside: false,
        //     textStyle: {
        //         color: '#fff'
        //     }
        // },
        // axisTick: {
        //     show: false
        // },
        // axisLine: {
        //     show: false
        // },
        z: 10
    },
    yAxis: {
        // axisLine: {
        //     show: false
        // },
        // axisTick: {
        //     show: false
        // },
        // axisLabel: {
        //     type: 'value',
        //     textStyle: {
        //         color: '#999'
        //     },
        //     formatter: '{value} 人'
        // },
        name: '人',
    },
    color: ['#F75647', '#43C17E', '#F9CB44', '#F75647', '#FC9827', '#7E5CCA'],
    series: series
};