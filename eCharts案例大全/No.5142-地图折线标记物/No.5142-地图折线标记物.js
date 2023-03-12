/**
此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，来达到hover散点和区域显示tooltip的效果

默认情况下，map series 会自己生成内部专用的 geo 组件。但是也可以用这个 geoIndex 指定一个 geo 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
当设定了 geoIndex 后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。

http://echarts.baidu.com/option.html#series-map.geoIndex

并且加了pin气泡图标以示数值大小
*/

var uploadedDataURL = "/asset/get/s/data-1604987052721-RrDEffHjT.json";
var powerData = [{
    name: '阎家梁风场',
    symbol: 'circle',
    coords: [[114.18, 40.45], [114.58, 40.55],[115.48, 40.55]],
    value: [20],
  }]
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    var data = geoJson.features.map((feature) => {
        // return 0
        return {
            name: feature.properties.name,
            id: feature.id,
            value: 0,
        };
    });

    echarts.registerMap('shanxi', geoJson);
    myChart.hideLoading();

    let option = {
        title: {
            show: false,
        },
        grid: {
            left: 10,
            top: 20,
            right: 10,
            bottom: 30
        },
        geo: {
            geoIndex: 1,
            map: 'shanxi',
            label: {
                show: false
            },
            zoom: 1.2,
            animation: false
        },

        series: [{
                name: 'main',
                z: 2,
                type: 'map',
                map: 'shanxi',
                mapType: "shanxi",
                zoom: 1.2,
                label: {
                    show: true,
                    formatter(params) {
                        return `￮ ${params.name}`;
                    },
                    textStyle: {
                        color: '#fff',
                        fontSize: 14,
                        fontFamily: 'MicrosoftYaHei',
                        backgroundColor: 'transparent',
                    },
                },
                itemStyle: {
                    color: '#004790',
                    borderWidth: 1,
                    borderColor: '#54ADFF',
                    areaColor: '#004790',
                },
                emphasis: {
                    label: {
                        show: true,
                        color: '#fff',
                    },
                    itemStyle: {
                        color: '#17BBFF',
                        borderColor: '#54ADFF',
                        areaColor: '#17BBFF'
                    },
                },
                data,
            },
            {
                // 折线
                type: 'lines',
                coordinateSystem: 'geo',
                symbol: 'circle',
                polyline: true,
                symbolSize: [14, 0],
                z: 5,
                lineStyle: {
                    type: 'solid',
                    opacity: 1,
                    color: 'red',
                    curveness: 0
                },
                label: {
                    show: true,
                    position: 'end',
                    formatter: (params) => {
                        // return `{a|${params.data.names}}`
                        return params.data.name
                    },
                },
                data: powerData
            },
            {
                // 文字
                type: 'lines',
                coordinateSystem: 'geo',
                symbol: 'circle',
                symbolSize: [14, 0],
                z: 5,
                lineStyle: {
                    type: 'solid',
                    opacity: 0,
                    color: 'red',
                    curveness: 0
                },
                label: {
                    show: true,
                    padding: [0, 0, 15, 0],
                    position: 'end',
                    formatter: (params) => {
                        // return `{a|${params.data.names}}`
                        return params.data.name
                    },
                },
                data: powerData
            },
            {
                // 标注点
                type: 'lines',
                coordinateSystem: 'geo',
                symbol: 'circle',
                symbolSize: [14, 0],
                z: 5,
                lineStyle: {
                    type: 'solid',
                    opacity: 1,
                    color: 'red',
                    curveness: 0
                },
                data: powerData
            },
        ],
    }
    myChart.setOption(option);
});