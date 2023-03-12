
var uploadedDataURL = "/asset/get/s/data-1605686895304-HvZQIMOYQ.json";

var bg = '<div class="bg-tooltip"></div>'

$.get(uploadedDataURL, function(as) {
    echarts.registerMap('sd', as); //利用json引入示例
    option = {
        geo3D: {
            map: "sd",
            top: -100,
            viewControl: {
                distance: 120,
                alpha: 30
            },
            postEffect: {
                enable: true,
                bloom: {
                    enable: true
                }
            },
            itemStyle: {
                areaColor: "#166890",
                opacity: 1,
                borderColor: "#17759b",
                borderWidth: 1
            },
            emphasis: {
                itemStyle: {
                    areaColor: "#1BACD5",
                    opacity: 0.9
                }
            },
            label: {
                show: true,
                distance: 0,
                formatter: params => {
                    let regexp = /(济南|青岛|淄博|枣庄|东营|烟台|潍坊|济宁|泰安|威海|日照|莱芜|临沂|德州|聊城|滨州|菏泽)(\D{1})/g;
                    let test = regexp.test(params.name);
                    params.rename = params.name.replace(RegExp.$2, "");
                    return params.rename;
                },
                textStyle: {
                    color: "#E2E2E2",
                    backgroundColor: "rgba(0,23,11,0)"
                }
            }
        },
        series: [{
            type: 'bar3D',
            coordinateSystem: 'geo3D',
            data: [{
                // 数据项的名称
                name: '数据1',
                // 数据项值
                value: [117, 36, 1000]
            }, {
                name: '数据2',
                value: [117, 37, 500]
            }, {
                name: '数据3',
                value: [117, 37.5, 700]
            }, {
                name: '数据4',
                value: [34, 50, 10]
            }]
        }]
    };
    myChart.setOption(option);

});