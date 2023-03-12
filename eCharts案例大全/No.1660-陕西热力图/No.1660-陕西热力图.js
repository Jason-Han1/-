var uploadedDataURL = '/asset/get/s/data-1632631745678-v-jTu4Rh1.json';
var outname = ['西安', '宝鸡', '铜川', '咸阳', '渭南', '延安', '汉中', '榆林', '安康', '商洛'];
//请勿修改outname
var outvalue = [60, 49, 20, 11, 8, 6, 6, 5, 4, 0]; //编辑outvalue，注意与outname顺序对应
var outdata = [];
for (var i = 0; i < outname.length; i++) {
    outdata.push({
        name: outname[i],
        value: outvalue[i],
    });
}
$.getJSON(uploadedDataURL, function (geoJson) {
    echarts.registerMap('shaanxi', geoJson); // 自定义地图
    var geoCoordMap = {
        西安: [108.848, 34.0631],
        宝鸡: [107.1448, 34.3693],
        铜川: [109.0196, 35.1165],
        咸阳: [108.4051, 34.7334],
        渭南: [109.8028, 34.7993],
        延安: [109.4908, 36.3965],
        汉中: [107.0286, 33.0776],
        榆林: [109.7411, 38.2901],
        安康: [109.0292, 32.6903],
        商洛: [109.9397, 33.6683],
    };

    let handleData = function (data) {
        let list = [];
        for (let i = 0; i < outname.length; i++) {
            let geoCoord = geoCoordMap[outname[i]];
            if (geoCoord) {
                list.push({
                    name: outname[i],
                    value: geoCoord.concat(outvalue[i]),
                });
            }
        }
        return list;
    };

    let option = {
        baseOption: {
            timeline: {
                show: false,
            },
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    if (!params.value) {
                        return `${params.name}无数据`;
                    } else {
                        return `${params.name} ${params.value}`;
                    }
                },
            },
        },
        options: [
            {
                visualMap: {
                    min: 0, //修改显示数值范围
                    max: 60, //修改显示数值范围
                    itemWidth: 15,
                    itemHeight: 90,
                    left: '250',
                    bottom: '50',
                    text: ['高', '低'],
                    textStyle: {
                        color: '#666666',
                        fontSize: 13,
                    },
                    inRange: {//可根据报告需要自定义色系
                        // color: ['#F0F8FF', '#2F9BFF'],
                        color: ['#F0F8FF', '#006edd'],
                        // color: ['#fefef9', '#f5e9a3', '#f0c291', '#c6202f']
                    },
                    outOfRange: {
                        show: false,
                    },
                },
                geo: {
                    show: true,
                    map: 'shaanxi',
                    roam: false,
                    label: {
                        emphasis: {
                            show: false,
                        },
                    },
                    itemStyle: {
                        normal: {
                            show: false,
                        },
                    },
                },
                series: [
                    {
                        name: 'light',
                        type: 'scatter',
                        // type: 'map',
                        // map: 'shaanxi',
                        coordinateSystem: 'geo',
                        data: handleData(data),
                        symbolSize: 1,
                        label: {
                            normal: {
                                formatter: '{b}',
                                fontSize: 20,
                                show: true,
                            },
                            emphasis: {
                                show: false,
                            },
                        },
                        itemStyle: {
                            normal: {
                                areaColor: '#F0F8FF',
                                borderColor: '#bbbbbb',
                                borderWidth: 1,
                                label: {
                                    show: true,
                                    textStyle: {
                                        color: '#000',
                                        fontSize: 12,
                                    },
                                },
                            },
                            emphasis: {
                                areaColor: '#FFAE00',
                            },
                        },
                    },
                    {
                        // center: 'center',
                        data: outdata,
                        // mapType: 'shaanxi',
                        map: 'shaanxi',
                        roam: false,
                        type: 'map',
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false,
                                },
                            },
                            emphasis: {
                                show: false,
                                label: {
                                    show: false,
                                    textStyle: {
                                        color: 'transparent',
                                    },
                                },
                            },
                        },
                    },
                ],
            },
        ],
    };
    myChart.setOption(option);
});
