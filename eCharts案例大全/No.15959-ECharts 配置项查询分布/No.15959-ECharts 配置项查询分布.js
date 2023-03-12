var uploadedDataURL = "/asset/get/s/data-1463636894153-rJ8smC5f.json";

myChart.showLoading();

$.getJSON(uploadedDataURL, function (rawData) {

    myChart.hideLoading();

    function convert(source, target, basePath) {
        for (var key in source) {
            var path = basePath ? (basePath + '.' + key) : key;
            if (key.match(/^\$/)) {

            }
            else {
                target.children = target.children || [];
                var child = {
                    name: path
                };
                target.children.push(child);
                convert(source[key], child, path);
            }
        }

        if (!target.children) {
            target.value = source.$count || 1;
        }
        else {
            target.children.push({
                name: basePath,
                value: source.$count
            });
        }
    }

    convert(rawData, data, '');

    myChart.setOption({
        title: {
            text: 'ECharts 配置项查询分布',
            subtext: '2016/04',
            left: 'leafDepth'
        },
        tooltip: {},
        series: [{
            name: 'option',
            type: 'treemap',
            visibleMin: 300,
            data: data.children,
            leafDepth: 2,
            levels: [
                {
                    itemStyle: {
                        normal: {
                            borderColor: '#555',
                            borderWidth: 4,
                            gapWidth: 4
                        }
                    }
                },
                {
                    colorSaturation: [0.3, 0.6],
                    itemStyle: {
                        normal: {
                            borderColorSaturation: 0.7,
                            gapWidth: 1,
                            borderWidth: 2
                        }
                    }
                },
                {
                    colorSaturation: [0.3, 0.5],
                    itemStyle: {
                        normal: {
                            borderColorSaturation: 0.6,
                            gapWidth: 1
                        }
                    }
                },
                {
                    colorSaturation: [0.3, 0.5]
                }
            ]
        }]
    })
});