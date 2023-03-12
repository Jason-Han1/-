option = {
    width: 500,
    tooltip: {
        trigger: 'item',
        formatter: "{a}: {c}%"
        // formatter: function(params) {
        //     console.log(params)
        //     var res = params.name;
        //     var myseries = option.series;
        //     for (var i = 0; i < myseries.length; i++) {
        //         res += myseries[i].name + ' : ' + myseries[i].data[0] + '%</br>';
        //     }
        //     return res;
        // }
    },
    legend: {
        data: ['A类', 'B类', 'C类']
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
        name: 'A类',
        data: [10],
        stack: 'income',
        barWidth: 20,
        label: {
            normal: {
                show: true,
                position: 'left',
                offset: [40, 40],
                formatter: '{a}\n{c}只'
            }
        },
        itemStyle: {
            normal: {
                color: '#d1ef2e',
                barBorderRadius: [5, 0, 0, 5],

            }
        },
        emphasis: {
            itemStyle: {
                color:'#d1ef2e',
                borderColor: '#d1ef2e',
                borderWidth: 5
            }
        },
    }, {
        type: 'bar',
        name: 'B类',
        data: [40],
        stack: 'income',
        barWidth: 20,
        label: {
            normal: {
                show: true,
                position: 'left',
                offset: [40, 40],
                formatter: '{a}\n{c}只'
            }
        },
        itemStyle: {
            normal: {
                color: '#e43c59',
                barBorderRadius: [0],
            }
        },
        emphasis: {
            itemStyle: {
                color:'#e43c59',
                borderColor: '#e43c59',
                borderWidth: 5
            }
        },
    }, {
        type: 'bar',
        name: 'C类',
        data: [50],
        stack: 'income',
        barWidth: 20,
        label: {
            normal: {
                show: true,
                position: 'left',
                offset: [40, 40],
                formatter: '{a}\n{c}只'
            }
        },

        itemStyle: {
            normal: {
                color: '#145203',
                barBorderRadius: [0, 5, 5, 0],
            }
        },
        emphasis: {
            itemStyle: {
                color:'#145203',
                borderColor: '#145203',
                borderWidth: 5
            }
        },
    }]
};