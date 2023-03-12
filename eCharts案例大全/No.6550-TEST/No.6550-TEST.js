option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#e8e9ed'
    }, {
        offset: 1,
        color: '#aab9c0'
    }]),
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            var tar;
            if (params[1].value != '-') {
                tar = params[1];
            } else {
                tar = params[0];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        data: ['0', '1', '2-10', '10-100', '100-1k', '1k-1w', '1w-10w', '10w+']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
            name: '',
            type: 'bar',
            stack: 'A',
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 784, 77557, 183051, 246240, 258985, 260890, 261259, 261277]
        },
        {
            name: '统计',
            type: 'bar',
            stack: 'A',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(25, 100, 150, 0.5)',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: 'rgb(129, 227, 238)'
                    }, {
                        offset: 1,
                        color: 'rgb(25, 183, 207)'
                    }])
                }
            },
            data: [22784, 76773, 105494, 63189, 127045, 59005, 36009, 100005]
        }
    ]
};