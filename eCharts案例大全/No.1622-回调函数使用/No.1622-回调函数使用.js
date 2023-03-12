var colors = ['#32DA56', '#e43c59'];
var xData = ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12'];
var yData = [300, 380, 400, 380, 350, 410, 480, 460, 410, 380, 350, 320];
option = {
    // color: colors,
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false,
            alignWithLabel: true
        },
        splitLine: {
            show: true
        },
        data: xData
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false,
            alignWithLabel: true
        },
        splitLine: {
            show: true
        }
    }],
    series: [
        {
            type: 'bar',
            symbol: 'none',
            smooth: true,
            data: yData,
            itemStyle: {
                normal: {
                    color: function (d) {
                        console.log(d)
                        return d.value > 400 ? colors[1] : colors[0]
                    }
                }
            }
        }
    ]
};