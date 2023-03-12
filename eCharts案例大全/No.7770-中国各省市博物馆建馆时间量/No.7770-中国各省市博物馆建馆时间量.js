var days = ["1863-1949", "1949-1959", "1959-1969", "1969-1979", "1979-1989", "1989-1999", "1999-2009", "2009-2019"];

var province = ['北京', '天津', '河北','山西', '内蒙古', '辽宁', '吉林', '黑龙江', '上海','江苏', '浙江', '安徽', '福建', '江西', '山东','河南', '湖北', '湖南', '广东', '广西','海南', '重庆', '四川', '贵州','云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆','台湾','澳门','香港'];
var news = ["十年间各省市博物馆增长数据",  "十年间各省市博物馆增长数据", "十年间各省市博物馆增长数据", "十年间各省市博物馆增长数据", "十年间各省市博物馆增长数据", "十年间各省市博物馆增长数据", "十年间各省市博物馆增长数据", "十年间各省市博物馆增长数据"]
var data = [
    [3, 2, 2, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 7, 1, 0, 0, 0, 0, 3, 0, 4, 1, 0, 0, 0, 4, 3, 0],
    [8, 2, 9, 4, 3, 0, 6, 6, 1, 10, 14, 10, 7, 7, 4, 5, 9, 10, 4, 12, 3, 0, 3, 4, 2, 1, 0, 10, 6, 2, 2, 1, 1, 1],
    [3, 0, 3, 6, 0, 4, 6, 0, 0, 3, 3, 4, 2, 9, 3, 2, 4, 7, 4, 1, 0, 1, 4, 0, 0, 0, 5, 0, 0, 0, 1, 3, 0, 1],
    [5, 0, 5, 7, 2, 5, 3, 3, 2, 3, 8, 5, 3, 14, 7, 10, 14, 7, 5, 8, 1, 1, 2, 0, 3, 0, 9, 9, 1, 2, 4, 4, 0, 4],
    [34, 7, 19, 46, 8, 16, 7, 13, 11, 47, 27, 25, 36, 48, 42, 45, 45, 33, 68, 32, 10, 4, 33, 10, 14, 0, 44, 33, 6, 4, 5, 14, 2, 6],
    [40, 7, 21, 11, 9, 17, 4, 24, 19, 44, 48, 18, 21, 12, 50, 19, 11, 24, 28, 10, 4, 12, 26, 16, 18, 1, 28, 29, 5, 2, 10, 14, 10, 7],
    [46, 28, 27, 28, 51, 27, 34, 62, 53, 78, 121, 53, 27, 14, 67, 72, 32, 26, 61, 22, 2, 26, 71, 32, 31, 0, 64, 47, 9, 15, 32, 17, 11, 10],
    [22, 16, 48, 46, 92, 24, 38, 88, 34, 98, 163, 128, 33, 45, 364, 170, 96, 46, 92, 24, 14, 46, 92, 32, 31, 0, 64, 47, 9, 15, 32, 17, 11, 10]
];

option = {
    baseOption: {

        timeline: {
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            playInterval: 2000,
            symbolSize: 12,
            left: '5%',
            right: '5%',
            bottom: '0%',
            width: '90%',
            // controlStyle: {
            //     position: 'left'
            // },
            data: days,
            tooltip: {
                formatter: days
            },
        },
    
        tooltip: {
            show: true,
            formatter: function(params) {
                return params.name + '：' + params.data['value']
            },
        },
        visualMap: {
            type: 'piecewise',
            pieces: [
                {
                    min: 251,
                    max: 500,
                    color: '#BD430A'
                },
                {
                    min: 101,
                    max: 250,
                    color: '#E08150'
                },
                {
                    min: 11,
                    max: 100,
                    color: '#E9B090'
                },
                {
                    min: 1,
                    max: 10,
                    color: '#F2DDD2'
                },
                {
                    value: 0,
                    color: 'white'
                }
            ],
            orient: 'vertical',
            itemWidth: 25,
            itemHeight: 15,
            showLabel: true,
            seriesIndex: [0],

            textStyle: {
                color: '#7B93A7'
            },
            bottom: '10%',
            left: "5%",
        },
        grid: {
            right: '5%',
            top: '20%',
            bottom: '10%',
            width: '20%'
        },
        xAxis: {
            min: 0,
            max: 4000,
            show: false
        },
        yAxis: [{
            inverse: true,
            offset: '2',
            'type': 'category',
            data: '',
            nameTextStyle: {
                color: '#fff'
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                //rotate:45,
                textStyle: {
                    fontSize: 14,
                    color: '#000000',
                },
                interval: 0
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#333'
                },
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#333'
                }
            },
        }],
        geo: {
            map: 'china',
            right: '35%',
            left: '20%',
            label: {
                emphasis: {
                    show: false,
                }
            },
            itemStyle: {
                emphasis: {
                    areaColor: '#8792b3'
                }
            }
        },
        series: [{
                name: 'mapSer',
                type: 'map',
                map: 'china',
                roam: false,
                geoIndex: 0,
                label: {
                    show: false,
                },
            },
            {
                'name': '',
                'type': 'bar',
                zlevel: 2,
                barWidth: '40%',
                label: {
                    normal: {
                        show: true,
                        fontSize: 14,
                        position: 'right',
                        formatter: '{c}'
                    }
                },
            }
        ],

    },
    animationDurationUpdate: 3000,
    animationEasingUpdate: 'quinticInOut',
    options: []
};
for (var n = 0; n < days.length; n++) {

    var res = [];
    for (j = 0; j < data[n].length; j++) {
        res.push({
            name: province[j],
            value: data[n][j]
        });
    }
    res.sort(function(a, b) {
        return b.value - a.value;
    }).slice(0, 6);

    res.sort(function(a, b) {
        return a.value - b.value;
    });
    var res1 = [];
    var res2 = [];
    for (t = 0; t < 10; t++) {
        res1[t] = res[res.length - 1 - t].name;
        res2[t] = res[res.length - 1 - t].value;
    }
    console.log(res1);
    console.log("----------------");
    console.log(province);
    option.options.push({
        title: [{
                 text: days[n] + "年  " + news[n],
                textStyle: {
                    color: '#2D3E53',
                    fontSize: 28
                },
                left: 20,
                top: 20,
            },
            {
                show: true,
                text: '十年内博物馆数量增长前十的省市',
                textStyle: {
                    color: '#2D3E53',
                    fontSize: 18
                },
                right: '10%',
                top: '15%'
            }
        ],
        yAxis: {
            data: res1,
        },
        series: [{
            type: 'map',
            data: res
        }, {
            type: 'bar',
            data: res2,
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [{
                                colorStops: [{
                                    offset: 0,
                                    color: '#BD430A' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#BD430A' // 100% 处的颜色
                                }]
                            },
                            {
                                colorStops: [{
                                    offset: 0,
                                    color: '#BD430A' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#BD430A' // 100% 处的颜色
                                }]
                            }
                        ];
                        if (params.dataIndex < 3) {
                            return colorList[0]
                        } else {
                            return colorList[1]
                        }
                    },
                }
            },
        }]
    });
}