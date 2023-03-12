window.HOST_TYPE = 1
$.getJSON('/asset/get/s/data-1633674413207-dw-amlpjO.json', function (data) {
    $.getJSON('/asset/get/s/data-1633674413207-dw-amlpjO.json', function (styleJson) {
   var option = {
                bmap: {
                    center: [118.118600, 24.520422],
                    zoom: 13,
                    roam: true
                },
                tooltip: {
                    formatter: function(params) { return params['name'] + ':' + params['data']['value'][2] + '元/平方米' }
                },
                visualMap: {
                    max: 100000,
                    inRange: {
                        color: ['green', '#eac736', '#d94e5d']
                    },
                    textStyle: { color: '#fff' }
                },
                title: {
                    text: "厦门二手房价可视化",
                    textStyle: {
                        color: '#000',
                        fontSize: 30
                    }
                },
                legend: {
                    data: ['销量1']
                },
                series: [{
                    type: 'scatter',
                    coordinateSystem: 'bmap',
                    data: data
                }],
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option, true);
    });
});
