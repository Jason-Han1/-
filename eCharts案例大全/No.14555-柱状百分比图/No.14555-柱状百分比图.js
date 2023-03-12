option = {
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            var res = params.name;
            var myseries = option.series;
            for (var i = 0; i < myseries.length; i++) {
                res += myseries[i].name + ' : ' + myseries[i].data[0] + '%</br>';
            }
            return res;
        }
    },
    xAxis: {
        type: 'value',
        show: false,

    },
    yAxis: {
        type: 'category',
        show: false,
        axisTick: {
            show: false
        }
    },
    series: [{
        type: 'bar',
        name: '大专以下',
        data: [10],
        stack: 'income',
        barWidth: 13,
        itemStyle: {
            normal: {
                color: '#1f66f8',
                barBorderRadius: [5, 0, 0, 5],

            }
        },
    }, {
        type: 'bar',
        name: '大专',
        data: [40],
        stack: 'income',
        barWidth: 13,

        itemStyle: {
            normal: {
                color: '#14b9f6',
                barBorderRadius: [0],

            }

        },
    }, {
        type: 'bar',
        name: '本科以上',
        data: [50],
        stack: 'income',
        barWidth: 13,

        itemStyle: {
            normal: {
                color: '#14f6cf',
                barBorderRadius: [0, 5, 5, 0],

            }

        }
    }]
};