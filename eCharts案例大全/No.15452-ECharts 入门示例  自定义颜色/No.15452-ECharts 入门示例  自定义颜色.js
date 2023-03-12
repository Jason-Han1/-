option = {
    title: {
        text: 'ECharts 入门示例  自定义颜色'
    },
    label: {
        normal: {
            show:true,
            textStyle: {
                color: '#FFFFFF',
                fontSize: 40
            }
        },
    },
    itemStyle: {
            normal: {
                color: function(params) {
                    // build a color map as your need.
                    var colorList = [
                        '#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
                        '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                        '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                    ];
                    return colorList[params.dataIndex]
                }
            }
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};