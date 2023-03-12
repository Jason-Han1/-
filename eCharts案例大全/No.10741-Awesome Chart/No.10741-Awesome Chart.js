let xData = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
let yData = [220, 220, 220, 220, 220, 220, 220]
for (let i = 0; i < 3; i++) {
    xData = xData.concat(xData)
    yData = yData.concat(yData)
}
option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: xData
    },
    yAxis: {},
    series: [{
        type: 'line',
        label: {
            show: true
        },
        data: yData
    }]
};