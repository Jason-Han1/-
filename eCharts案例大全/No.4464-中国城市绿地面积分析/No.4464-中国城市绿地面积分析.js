var days = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017","2018","2019"];
var province = ['北京', '天津', '河北','山西', '内蒙古', '辽宁', '吉林', '黑龙江', '上海','江苏', '浙江', '安徽', '福建', '江西', '山东','河南', '湖北', '湖南', '广东', '广西','海南', '重庆', '四川', '贵州','云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆','台湾','澳门','香港'];
var news = ["城市绿地面积（万公顷）",  "城市绿地面积（万公顷）", "城市绿地面积（万公顷）", "城市绿地面积（万公顷）", "城市绿地面积（万公顷）", "城市绿地面积（万公顷）", "城市绿地面积（万公顷）", "城市绿地面积（万公顷）","城市绿地面积（万公顷）","城市绿地面积（万公顷）"]
var data = [
[6.27,1.92,6.90,3.11,3.81,9.28,3.79,6.96,12.01,22.76,7.95,7.15,4.79,4.23,15.62,6.68,5.79,4.60,42.04,6.02,4.90,3.77,7.23,2.87,2.81,0.21,2.61,1.53,0.34,1.74,3.77],
[6.35,2.17,7.11,3.25,4.11,9.60,3.87,7.22,12.23,23.75,10.52,7.60,5.08,4.51,16.56,6.96,6.21,4.96,41.06,6.45,4.98,4.39,7.74,3.05,3.19,0.29,2.82,1.63,0.39,1.84,4.41],
[6.55,2.23,7.35,3.57,4.67,11.83,3.88,7.38,12.42,24.70,12.27,7.96,5.45,4.69,17.63,7.70,6.88,5.18,40.17,6.70,5.07,4.72,8.32,3.29,3.53,0.34,3.10,1.85,0.40,1.98,4.95],
[6.84,2.32,7.60,3.63,4.93,12.05,3.84,7.51,12.43,25.63,12.79,8.39,5.76,4.92,19.36,8.08,7.16,5.35,41.20,6.99,1.44,4.81,8.89,3.40,3.49,0.36,3.39,2.12,0.48,2.19,5.36],
[6.84,2.53,7.94,4.04,5.74,12.20,4.53,7.63,12.57,26.55,13.26,8.95,6.04,5.08,20.52,8.57,7.55,5.73,42.19,7.24,1.47,5.25,8.21,3.57,3.73,0.42,3.64,2.23,0.53,2.32,5.70],
[8.13,2.84,8.13,4.20,6.31,12.42,4.73,7.65,12.73,27.41,13.80,9.38,6.45,5.41,21.35,9.00,8.03,5.94,43.84,8.24,1.49,5.59,8.71,3.67,3.94,0.53,5.61,2.36,0.57,2.41,6.08],
[8.21,3.34,8.54,4.30,6.56,11.66,4.66,7.70,12.88,28.19,15.43,9.86,6.72,5.68,22.58,9.54,8.22,6.15,45.27,8.45,1.53,5.98,10.06,4.08,4.31,0.62,5.87,2.63,0.62,2.51,6.48],
[8.35,4.43,8.83,6.40,6.72,12.30,4.81,6.97,13.63,28.60,15.92,10.24,6.98,6.37,23.57,10.12,8.67,6.77,45.58,8.88,1.53,6.16,10.75,4.74,4.52,0.52,6.92,2.69,0.64,2.64,6.89],
[8.53,4.65,9.14,4.82,6.72,12.23,6.93,7.07,13.94,29.38,16.74,10.75,7.21,6.97,24.34,10.71,9.31,7.24,48.54,9.21,1.74,6.48,11.35,5.16,4.64,0.60,7.13,2.72,0.67,2.51,7.29],
[8.87,4.29,9.37,5.14,6.91,12.81,9.00,6.87,15.78,29.85,17.23,11.43,7.39,7.19,25.23,11.53,9.69,7.44,50.24,7.24,1.77,6.77,12.42,5.44,4.86,0.60,5.96,2.92,0.73,2.62,7.69]
];

option = {
    baseOption: {

        timeline: {
            axisType: 'category',
            autoPlay: true,
            playInterval: 2000,
            symbolSize: 12,
            left: '5%',
            right: '5%',
            bottom: '0%',
            width: '90%',
            data: days,
            tooltip: {
                formatter: days
            },
        },
        tooltip: {
            show: true,
            formatter: function(params) {
                return params.name +'地区城市绿地面积'+ '：' + params.data['value']+'万公顷'
            },
        },
        visualMap: {
               type: 'piecewise',
				pieces: [
				{
                    min: 10,
                    color: '#006400'
                },
                {
                    min: 8,
                    max: 10,
                    color: '#007500'
                },
                {
                    min: 6,
                    max: 8,
                    color: '#228B22'
                },
                {
                    min: 4,
                    max: 6,
                    color: '#32CD32'
                },
                {
                    min: 2,
                    max: 4,
                    color: '#79FF79'
                },
                {
                    min: 0,
                    max:2,
                    color: '#93FF93'
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
            /*show: true,
            min: 0,
            max: 10,
            bottom: '10%',
            left: "5%",
            text: ['>10'], // 文本，默认为数值文本
            calculable: true,
            seriesIndex: [0],
            inRange: {
                color: ['#90EE90', '#006400'] // 蓝绿
            }*/
        },
        grid: {
            right: '5%',
            top: '20%',
            bottom: '10%',
            width: '20%'
        },
        xAxis: {
                type: 'value',
                scale: true,
                position: 'top',
                min: 0,
                max:50,
                boundaryGap: false,
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    margin: 1,
                    textStyle: {
                        color: '#000000'
                    }
                },
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
                    areaColor: '#00FF7F'
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
                text: '城市绿地面积长前十的省市',
                textStyle: {
                    color: '#2D3E53',
                    fontSize: 18
                },
                right: '5%',
                top: '13%'
            }
        ],
        xAxis:{
            data:['0','10','20','30','40','50'],
            },
        yAxis: {
            data: res1,
        },
        series: [
            {
            type: 'map',
            data: res
        }, 
        {
            type: 'bar',
            data: res2,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [{
                                colorStops: [{
                                    offset: 0,
                                    color: '#90EE90' 
                                }, {
                                    offset: 1,
                                    color: '#006400' 
                                }]
                            },
                            {
                                colorStops: [{
                                    offset: 0,
                                    color: '#90EE90' 
                                }, {
                                    offset: 1,
                                    color: '#006400'
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
        },]
    });
}
