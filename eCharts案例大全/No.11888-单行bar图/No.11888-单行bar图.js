var colorList = ["#5C5DBA", "#6776F3", "#8A92D0", "#54C6EA", "#55D9C9"];
var bgColor = '#102155';

var data = [60000, 130000, 400000, 1546714, 1546714];
var legendData = ['3000RMB以下', '3001~5000RMB', '5001~10000RMB', '10001~15000RMB', '15000RMB以上'];
var total = 0;
for (var i = 0; i < data.length; i++) {
    total += data[i];
}
option = {
    title: {
        text: '收入水平分布',
        textStyle: {
            color: "#FFFFFF"
        },
    },
    legend: {
        textStyle: {
            color: "#FFFFFF"
        },
        data: legendData
    },
    tooltip: {
        formatter: function(params, ticket, callback) {
            var tlData = 0;
            switch (params.seriesName) {
                case '3000RMB以下':
                    tlData = data[0]
                    // code
                    break;
                case '3001~5000RMB':
                    tlData = data[1]
                    // code
                    break;
                case '5001~10000RMB':
                    tlData = data[2]
                    // code
                    break;
                case '10001~15000RMB':
                    tlData = data[3]
                    // code
                    break;
                case '15000RMB以上':
                    tlData = data[4]
                    // code
                    break;

                default:
                    // code
            }
            return params.seriesName + '<br>' + tlData;

        }
    },
    xAxis: {
        data: [],
        type: 'value',
        max: 1000,
        show: false,
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        show: false,

        axisTick: {
            show: false
        }
    },
    color: colorList,
    backgroundColor: bgColor,
    series: [{
        type: 'bar',
        name: '3000RMB以下',
        data: [data[0] * 1000 / total],
        stack: 'income',
        barWidth: 60,
        itemStyle: {
            normal: {

            },
            emphasis: {
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10,
                opacity: 0.8
            }
        }
    }, {
        type: 'bar',
        name: '3001~5000RMB',
        data: [data[1] * 1000 / total],
        stack: 'income',
        barWidth: 60,
    }, {
        type: 'bar',
        name: '5001~10000RMB',
        data: [data[2] * 1000 / total],
        stack: 'income',
        barWidth: 60,
    }, {
        type: 'bar',
        name: '10001~15000RMB',
        data: [data[3] * 1000 / total],
        stack: 'income',
        barWidth: 60,
    }, {
        type: 'bar',
        name: '15000RMB以上',
        data: [data[4] * 1000 / total],
        stack: 'income',
        barWidth: 60,
    }]
};