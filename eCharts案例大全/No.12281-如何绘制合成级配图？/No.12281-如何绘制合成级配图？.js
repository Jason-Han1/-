let data = {
    "sizeConfig": [0.075, 0.15, 0.3, 0.6, 1.18, 2.36, 4.75, 9.5, 13.2, 16.0, 19.0, 26.5, 31.5, 37.5],
    "upperLimit": [6.3, 9.2, 10.1, 11.5, 14.5, 19.0, 33.6, 60.6, 75.9, 83.7, 91.2, 100.0, 100.0, 100.0],
    "lowerLimit": [2.3, 1.2, 2.1, 3.5, 6.5, 11.0, 25.6, 52.6, 67.9, 75.7, 83.2, 100.0, 100.0, 100.0],
    "targetValue": [4.3, 5.2, 6.1, 7.5, 10.5, 15.0, 29.6, 56.6, 71.9, 79.7, 87.2, 100.0, 100.0, 100.0],
    "data": [{
        "date": "2019-01-12 11:00:00",
        "data": [3.1, 3.9, 4.9, 6.2, 9.1, 13.6, 28.9, 54.0, 70.0, 78.3, 86.3, 100.0, 100.0, 100.0]
    }]
}
console.log(1111)
option = {
    title: {
        text: '合成级配图'
    },
    xAxis: {
        data: data.sizeConfig,
        // type: 'value',
        type: 'category',
        axisLabel: {
            rotate: 30,
            interval: function(e, d) {
                console.log(e, d)
                return true
            }
        },
        formatter: function(value, index) {

            console.log(value)
            return value;
        },
        axisTick: {
            alignWithLabel: true
        }
    },
    yAxis: {},
    series: [{
        type: 'line',
        data: [3.1, 3.9, 4.9, 6.2, 9.1, 13.6, 28.9, 54.0, 70.0, 78.3, 86.3, 100.0, 100.0, 100.0]
    }]
};