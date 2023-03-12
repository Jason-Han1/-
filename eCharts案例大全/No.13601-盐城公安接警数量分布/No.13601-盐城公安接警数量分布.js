var geoCoordMap = {
    '安丰派出所': [120.414229, 32.742268],
    '安丰中队': [120.413761, 32.736904],
    '城北派出所': [120.233519, 33.820345],
    '城东派出所': [119.595099, 34.206175],
    '东台河闸边防派出所': [120.914194, 32.878284],
    '富安派出所': [120.491024, 32.679186],
    '富安中队': [120.485251, 32.676356],
    '海道桥派出所': [120.311399, 32.866706],
    '何垛桥派出所': [120.329357, 32.859149],
    '花舍派出所': [120.745484, 32.922478],
    '弶港边防派出所': [120.855964, 32.755594],
    '弶港派出所': [120.763107, 32.88946],
    '交大开发区中队': [120.345513, 32.874541],
    '廉贻中队': [120.252287, 32.898852],
    '梁垛河闸边防派出所': [120.914194, 32.878284],
    '梁垛派出所': [120.377517, 32.778627],
    '南沈灶派出所': [120.53594, 32.784559],
    '农干桥派出所': [120.77285, 32.77131],
    '溱东派出所': [120.154838, 32.666296],
    '溱东中队': [120.154838, 32.666296],
    '三仓派出所': [120.670724, 32.773948],
    '三仓中队': [120.690483, 32.779491],
    '三里桥派出所': [120.324364, 32.850973],
    '时堰派出所': [120.200697, 32.718924],
    '事故中队': [120.330384, 32.864492],
    '水上派出所': [118.872702, 34.766416],
    '唐洋派出所': [120.7009, 32.638111],
    '唐洋中队': [120.700838, 32.638034],
    '头灶派出所': [120.557013, 32.894402],
    '头灶中队': [120.572059, 32.892228],
    '五烈派出所': [120.264926, 32.853785],
    '新坝派出所': [120.298613, 32.849475],
    '新东边防派出所': [120.862021, 32.683683],
    '新港边防派出所': [120.842036, 32.614245],
    '新街派出所': [120.7855, 32.677219],
    '许河派出所': [120.653076, 32.73319],
    '沿海高速公路一大队': [120.390438, 33.180384],
    '沿海中队': [120.390438, 33.180388]

};

var rawData = [{
        name: '安丰派出所',
        value: [0, 0, 25, 3, 3, 3, 3]
    },
    {
        name: '安丰中队',
        value: [0, 92, 0, 0, 0, 0, 0]
    },
    {
        name: '城北派出所',
        value: [1, 0, 63, 2, 7, 7, 11]
    },
    {
        name: '城东派出所',
        value: [0, 0, 56, 0, 9, 5, 9]
    },
    {
        name: '东台河闸边防派出所',
        value: [1, 0, 1, 1, 0, 0, 0]
    },
    {
        name: '富安派出所',
        value: [1, 0, 31, 2, 5, 5, 5]
    },
    {
        name: '富安中队',
        value: [0, 58, 0, 0, 0, 0, 0]
    },
    {
        name: '海道桥派出所',
        value: [4, 0, 43, 0, 19, 13, 20]
    },
    {
        name: '何垛桥派出所',
        value: [1, 0, 38, 4, 7, 10, 5]
    },
    {
        name: '花舍派出所',
        value: [0, 0, 5, 0, 0, 0, 1]
    },
    {
        name: '弶港边防派出所',
        value: [1, 0, 8, 0, 1, 3, 2]
    },
    {
        name: '弶港派出所',
        value: [0, 0, 3, 0, 0, 1, 1]
    },
    {
        name: '交大开发区中队',
        value: [0, 90, 1, 0, 0, 0, 0]
    },
    {
        name: '廉贻中队',
        value: [0, 74, 0, 0, 0, 0, 0]
    },
    {
        name: '梁垛河闸边防派出所',
        value: [0, 0, 3, 0, 0, 0, 1]
    },
    {
        name: '梁垛派出所',
        value: [2, 0, 37, 0, 8, 5, 6]
    },
    {
        name: '南沈灶派出所',
        value: [1, 0, 12, 1, 1, 3, 4]
    },
    {
        name: '农干桥派出所',
        value: [0, 0, 2, 0, 0, 0, 0]
    },
    {
        name: '溱东派出所',
        value: [0, 0, 22, 3, 1, 3, 7]
    },
    {
        name: '溱东中队',
        value: [0, 46, 0, 0, 0, 0, 0]
    },
    {
        name: '三仓派出所',
        value: [3, 0, 28, 0, 5, 1, 5]
    },
    {
        name: '三仓中队',
        value: [0, 52, 0, 0, 0, 0, 0]
    },
    {
        name: '三里桥派出所',
        value: [2, 0, 51, 3, 12, 16, 15]
    },
    {
        name: '时堰派出所',
        value: [2, 0, 29, 2, 2, 4, 5]
    },
    {
        name: '事故中队',
        value: [0, 271, 0, 0, 0, 0, 0]
    },
    {
        name: '水上派出所',
        value: [0, 0, 0, 0, 2, 0, 0]
    },
    {
        name: '唐洋派出所',
        value: [1, 0, 17, 1, 2, 1, 1]
    },
    {
        name: '唐洋中队',
        value: [0, 62, 0, 0, 0, 0, 0]
    },
    {
        name: '头灶派出所',
        value: [1, 0, 22, 3, 3, 2, 10]
    },
    {
        name: '头灶中队',
        value: [0, 72, 0, 0, 0, 0, 0]
    },
    {
        name: '五烈派出所',
        value: [4, 0, 29, 1, 3, 2, 7]
    },
    {
        name: '新坝派出所',
        value: [0, 0, 28, 1, 3, 11, 7]
    },
    {
        name: '新东边防派出所',
        value: [0, 0, 3, 0, 0, 0, 0]
    },
    {
        name: '新港边防派出所',
        value: [0, 0, 0, 0, 0, 1, 0]
    },
    {
        name: '新街派出所',
        value: [1, 0, 16, 0, 1, 1, 4]
    },
    {
        name: '许河派出所',
        value: [4, 0, 19, 1, 0, 0, 5]
    },
    {
        name: '沿海高速公路一大队',
        value: [0, 14, 0, 0, 0, 0, 0]
    },
    {
        name: '沿海中队',
        value: [0, 29, 0, 0, 0, 0, 0]
    }

];

var namearr = ['火灾事故',
    '交通警情',
    '纠纷',
    '举报投诉',
    '其他警情',
    '群众求助',
    '违法犯罪警情'
];

var colorarr = ['#1921ff', '#266eff', '#01c3dd', '#008198', '#2ef4ab',
    '#ffe074', '#ffcbcb'
];

option = {
    backgroundColor: '#010b43',
    top: '40%',
    bottom: '-850%',
    tooltip: {
        trigger: 'axis'
    },
    geo: {
        type: 'map',
        center: [120.58108655195974, 33.601001169106716],
        map: 'china',
        label: {
            normal: {
                textStyle: {
                    color: '#fff'
                },
                show: false
            },
            emphasis: {
                textStyle: {
                    color: '#C6A300'
                },
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: "rgba(0,0,0,0)",
                borderColor: "#126cc4",
                borderWidth: 1.3
            },
            emphasis: {
                areaColor: "rgba(233,0,200,0.3)"
            }
        }
    },
    series: []
}

function renderEachCity() {
    var options = {
        legend: [],
        xAxis: [],
        yAxis: [],
        grid: [],
        series: []
    };

    options.legend.push({
        data: namearr,
        itemWidth: 5,
        itemHeight: 5,
        textStyle: {
            color: '#ddd',
            fontSize: 10
        },
        top: '95%',
        //bottom:'5%'
    });

    echarts.util.each(rawData, function(dataItem, idx) {
        var geoCoord = geoCoordMap[dataItem.name];
        var coord = myChart.convertToPixel('geo', geoCoord);
        idx += '';

        options.xAxis.push({
            id: idx,
            gridId: idx,
            type: 'category',
            name: dataItem.name,
            nameStyle: {
                color: '#ddd',
                fontSize: 12
            },
            nameLocation: 'middle',
            nameGap: 3,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#bbb'
                }
            },
            data: [dataItem.name],
        });
        options.yAxis.push({
            id: idx,
            gridId: idx,
            show: false
        });
        options.grid.push({
            id: idx,
            width: 30,
            height: 50,
            left: coord[0] - 15,
            top: coord[1] - 35,
        });

        for (var i = 0; i < namearr.length; i++) {
            options.series.push({
                name: namearr[i],
                type: 'bar',
                stack: 'bar' + idx,
                xAxisId: idx,
                yAxisId: idx,
                barWidth: 12,
                itemStyle: {
                    normal: {
                        color: colorarr[i]
                    }
                },
                data: [dataItem.value[i]]
            });
        }

    });
    myChart.setOption(options);
}
setTimeout(function() {
    renderEachCity();
}, 1);