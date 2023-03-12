option = {
    color: ['#3398DB'],
    grid: {
        left: '5%',
        right: '0%',
        bottom: '5%',
        top: "20%",
        containLabel: true
    },
    xAxis: [

        {
            type: 'category',
            boundaryGap: true,
            axisLine: {

            },

            splitLine: {
                lineStyle: {
                    borderColor: '#ccc',
                    type: 'dashed'
                }
            },
            data: ['上海', '贵州', '四川', '河南', '北京', '陕西', '湖北', '重庆', '浙江', '江苏']
        }
    ],
    yAxis: [{
        type: 'value',
        scale: true,
        name: '数量',
        min: 0,

        splitLine: {
            lineStyle: {
                borderColor: '#ccc',
                type: 'dashed'
            }
        },
        boundaryGap: [1]
    }],
    series: [{
        name: '销量',
        type: 'bar',
        data: [28195, 18752, 17888, 11984, 10773, 10426, 8873, 3887, 1965, 716]
    }]
};
option.timeTicket = setInterval(function() {
    axisData = ['广西', '山东', '河北', '河南', '西藏', '四川', '哈尔滨'];
    data_series = [123, 224, 523, 222, 341, 231, 112];
    var data0 = option.series[0].data;
    var p2 = data0.shift();
    data0.push(p2);

    var kl = option.xAxis[0].data.shift();
    option.xAxis[0].data.push(kl);
    myChart.setOption(option);
}, 3000);