var uploadedDataURL = '/asset/get/s/data-1630741505579-A8A8D-V6N.json';

// 指定图表的配置项和数据
$.getJSON(uploadedDataURL, function (data) {
    var nodes = data[1];
    var option = {
        title: [
            {
                text: '长三角各市职住OD',
                subtext: '点击城市显示详细职住',
            },
        ],
        tooltip: {},
        legend: {
            data: ['上海市', '江苏省', '浙江省', '安徽省', '去向', '来源'],
        },
        series: [
            {
                name: '销量1',
                type: 'graph',

                layout: 'circular',
                circular: {
                    rotateLabel: true,
                },
                //draggable: true,
                emphasis: { focus: 'adjacency' },
                label: { position: 'right', show: true },
                //roam: true,
                categories: [{ name: '上海市' }, { name: '江苏省' }, { name: '浙江省' }, { name: '安徽省' }],
                data: nodes,
                //edgeSymbol: ['none', 'arrow'],
                lineStyle: { color: 'source', curveness: 0.3 },
                edges: data[0],
            },
        ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    myChart.on('click', function (params) {
        console.log(params);
        var city = params['name'];

        var links = data[0];
        var newnodes = [];
        for (var i = 1; i < nodes.length; i++) {
            if (nodes[i]['name'] == city) {
                var citynode = nodes[i];
                citynode['itemStyle'] = {
                    borderColor: '#666',
                    borderWidth: 1,
                    shadowColor: 'rgba(0, 0, 0, 1)',
                    shadowBlur: 10,
                };
                citynode['label'] = {
                    color: 'red',
                    textBorderColor: '#999',
                    textBorderWidth:2
                };
                newnodes.push(citynode);
            } else {
                var citynode = nodes[i];
                citynode['itemStyle'] = {};
                citynode['label'] = {};
                newnodes.push(citynode);
            }
        }
        console.log(newnodes);
        var option1 = {
            title: [{}, { text: city + '职住来源去向情况', right: '5%' }],
            dataset: [
                {
                    source: links,
                },
                {
                    transform: {
                        type: 'filter',
                        config: { dimension: 'source', '=': city },
                        print: true,
                    },
                },
                {
                    transform: {
                        type: 'filter',
                        config: { dimension: 'target', '=': city },
                        print: true,
                    },
                },
            ],
            grid: [{ right: '7%', top: '7%', width: '38%', height: '80%' }],
            xAxis: {},
            yAxis: { type: 'category', inverse: true, max: 10 },
            series: [
                { left: '5%', width: '40%', data: newnodes },
                {
                    name: '去向',
                    realtimeSort: true,
                    type: 'bar',
                    label: { show: true, position: 'right' },
                    datasetIndex: 1,
                    encode: { x: 'value', y: 'target' },
                    barGap: '0%',
                    barCategoryGap: '5%',
                },
                {
                    name: '来源',
                    type: 'bar',
                    label: { show: true, position: 'right' },
                    datasetIndex: 2,
                    encode: { x: 'value', y: 'source' },
                },
            ],
        };
        myChart.setOption(option1);
    });
});
