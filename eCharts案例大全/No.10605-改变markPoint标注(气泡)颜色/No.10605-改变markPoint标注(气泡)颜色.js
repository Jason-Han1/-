var data = [50, 100, 91, 34, 90, 30, 20];
var markArr = [],
    temObj = null;
data.forEach(function(v, i) {
    if (v > 50) {
        temObj = {
            value: v,
            xAxis: i,
            yAxis: v,
            itemStyle: {
                color: '#FF0B00'
            }
        }
    } else {
        temObj = {
            value: v,
            xAxis: i,
            yAxis: v
        }
    }
    markArr.push(temObj)
});
option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: data,
        type: 'bar',
        smooth: true,
        markPoint: {
            itemStyle: {
                color: '#00CD68'
            },
            data: markArr
        },
    }]
};