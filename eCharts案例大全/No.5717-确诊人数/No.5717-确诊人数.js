option = {
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        left: '45%',
        bottom: '1%',
        textStyle: {
            color: '#90979c',
            fontSize: 15,
            fontWeight: 'bold'
        },
        data: ['中等', '基线']
    },
    title: {
        text: '确诊人数',
        left: '45%'
    },
    xAxis: {
        data: ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73']
    },
    yAxis: {
        max: 40000,
        splitNumber: 10,
    },
    series: [{
        name: '中等',
        type: 'line',
        symbol: 'circle',
        itemStyle: {
            color: "#FF2B2B",
            borderColor: "#FF2B2B",
            borderWidth: 0,
        },
        data: [0, 0, 0, 0, 0, 100, 200, 500, 1000, 3000, 5500, 10000, 15000, 23000, 30000, 35000, 37000, 34000, 29000, 24000, 20000, 14000, 11000, 9000, 7000]
    }, {
        name: '基线',
        type: 'line',
        symbol: 'circle',
        lineStyle: {
            normal: {
                color: "#335A89",
                type: 'dotted'
            },
        },
        itemStyle: {
            color: "#335A89",
            borderColor: "#335A89",
            borderWidth: 0,
        },

        data: [0, 0, 0, 0, 0, 400, 500, 800, 1600, 4000, 5500, 8000, 13000, 21000, 32000, 36000, 37000, 35000, 31000, 27000, 24000, 20000, 15000, 11000, 6000]
    }]
};