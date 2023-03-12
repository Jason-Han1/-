const time = new Date('2010-01-01 00:00:00');
const data = [];
for (let i = 0; i < 31; ++i) {
    data.push([time.getTime(), i * 10 + Math.random() * 100]);
    time.setMonth(time.getMonth() + 1);
}

option = {
    title: {
        text: 'Apache ECharts 4.x Default Time Axis Labels'
    },
    xAxis: {
        type: 'time'
    },
    yAxis: {
        type: 'value'
    },
    series: {
        type: 'line',
        data: data
    }
};