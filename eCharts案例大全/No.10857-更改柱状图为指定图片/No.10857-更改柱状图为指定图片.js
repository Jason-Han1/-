var data = {
    "xaixData": ["深圳", "香港", "北京", "上海"],
    "yname": "%      ",
    "data": [{
            "value": "100%"
        },
        {
            "value": "80%"
        },
        {
            "value": "77%"
        },
        {
            "value": "74%"
        }
    ]
}
var pictorialBarData = [];
var barData = [];
var pictorialBarHeight = 120;
$.each(data.data, function(index, item) {
    barData.push(100);
    var value = parseInt(item.value);
    if (index === 0) {
        pictorialBarData.push({
            value: parseInt(item.value),
            symbolSize: [22, 458 * value / 100],
            symbol: ''
        })
    } else {
        pictorialBarData.push({
            value: parseInt(item.value),
            symbolSize: [22, 458 * value / 100],
            symbol: ''
        })
    }
});

var option = {
    grid: {
        bottom: '14%'
    },
    legend: {
        show: false
    },
    xAxis: {
        data: data.xaixData,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            color: '#999999',
            fontSize: 20,
            interval: 0
        }
    },
    yAxis: {
        max: 100,
        min: 0,
        name: data.yname,
        nameTextStyle: {
            color: '#999999',
            fontSize: 20
        },
        margin: 20,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#2c2d2d'
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            color: '#999999',
            fontSize: 20
        }
    },
    series: [{
            type: 'pictorialBar',
            name: 'pictorial element',
            z: 10,
            label: {
                show: true,
                position: 'top',
                color: '#fff',
                fontSize: 20,
                fontFamily: 'Beeji CloudYuanZhun GBK',
                formatter: function(param) {
                    return param.value + "%";
                }
            },
            data: pictorialBarData
        },
        {
            type: 'bar',
            name: 'reference bar',
            barGap: '-100%',
            itemStyle: {
                color: 'transparent'
            },
            data: barData
        }
    ]
};