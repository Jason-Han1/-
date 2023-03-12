var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";
var geoCoordMap = {
'上海': [121.4648, 31.2891],
'新疆': [86.9236, 41.5883],
'甘肃': [103.9901, 36.3043],
'江苏': [120.2062, 32.9208],
'广西': [108.479, 24.1152],
'江西': [116.0046, 28.6633],
'安徽': [117.29, 32.0581],
'内蒙古': [111.4124, 41.4901],
'黑龙江': [127.9688, 46.868],
'天津': [117.4219, 39.4189],
'山西': [112.3352, 37.9413],
'广东': [114.5107, 23.8196],
'四川': [103.9526, 30.7617],
'西藏': [91.1865, 30.1465],
'云南': [101.9199, 25.0663],
'浙江': [119.5313, 29.8773],
'湖北': [113.0896, 31.3628],
'辽宁': [123.1238, 42.1216],
'山东': [117.1582, 36.8701],
'河北': [115.4995, 38.6006],
'福建': [118.0543, 26.5222],
'青海': [97.4038, 35.8207],
'陕西': [109.1162, 34.2004],
'贵州': [106.6992, 26.7682],
'河南': [113.4668, 34.6234],
'重庆': [107.7539, 30.1904],
'宁夏': [106.3586, 38.1775],
'吉林': [125.8154, 44.2584],
'湖南': [111.8823, 28.2568],
'海南': [109.8500, 19.7028],
'北京': [116.4551, 40.4539],

};
var mapData_pro =[
    {name: "新疆", value: 200}, {name: "西藏",value: 30 }, 
         {name: "宁夏", value: 50}, {name: "甘肃",value: 30}, 
         {name: "云南", value: 30}, {name: "陕西",value: 30}, 
         {name: "青海", value: 30}, {name: "贵州",value: 30}, 
         {name: "福建", value: 220}, {name: "江西",value: 30}, 
         {name: "四川", value: 210}, {name: "江苏",value: 140}, 
         {name: "安徽", value: 30}, {name: "浙江",value: 333}, 
         {name: "海南", value: 500},  {name: "天津", value: 300}, {name: "重庆", value: 200}, 
         {name: "广东", value: 300}, {name: "广西", value: 10 }, 
         {name: "湖南", value: 200}, {name: "湖北", value: 300},
         {name: "河南", value: 129}, {name: "河北", value: 390},
         {name: "山东", value: 200}, {name: "山西",value: 60}, 
         {name: "黑龙江",value: 400}, {name: "吉林", value: 201}, 
         {name: "辽宁", value: 30}, {name: "内蒙古", value: 490 }
]
var mapData_test =[
    {name: "北京", value: 400,},{name: "上海", value: 350}]
let barWidth = 18;
//地图数据全部
var mapData_All =mapData_pro.concat(mapData_test)
/*柱子Y名称*/
var categoryData = [];
var barData = [];
barData.push([]);
categoryData.push([]);
mapData_All.sort(function sortNumber(a,b){return a.value-b.value});
for (var j = 0; j < mapData_All.length ;j++) {
        barData[0].push(mapData_All[j].value);
        categoryData[0].push(mapData_All[j].name);
}
$.getJSON(uploadedDataURL, function(geoJson) {
        $('body').css({
        'background': 'url(https://corgixuoos.oss-cn-shanghai.aliyuncs.com/soc/0623%E4%BF%AE%E6%94%B9%E5%A4%A7%E5%B1%8F-%E6%95%B4%E4%BD%93-Recovered.png) repeat-y', //'#2a6d87',
        'position':'fixed',
       'top': 0,
       'left': 0,
       'width':'100%',
       'height':'100%',
       'background-size': 'cover',
     '-webkit-background-size': 'cover',
     '-o-background-size': 'cover',
     'background-position': 'center 0',
        //'writing-mode': 'vertical-rl'
    });
        echarts.registerMap('china', geoJson);
        var convertData = function(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };
        optionXyMap01 = {
            timeline: {
                show:false,
                data: ["2020-01"],
                axisType: 'category',
                autoPlay: true,
                playInterval: 5000,
                left: '10%',
                right: '10%',
                bottom: '3%',
                width: '80%',
                //  height: null,
                label: {
                    normal: {
                        textStyle: {
                            color: '#000000'
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: '#000000'
                        }
                    }
                },
                symbolSize: 10,
                lineStyle: {
                    color: '#555'
                },
                checkpointStyle: {
                    borderColor: '#777',
                    borderWidth: 2
                },
                controlStyle: {
                    showNextBtn: true,
                    showPrevBtn: true,
                    normal: {
                        color: '#666',
                        borderColor: '#666'
                    },
                    emphasis: {
                        color: '#aaa',
                        borderColor: '#aaa'
                    }
                },

            },
            baseOption: {
                animation: true,
                animationDuration: 1000,
                animationEasing: 'cubicInOut',
                animationDurationUpdate: 1000,
                animationEasingUpdate: 'cubicInOut',
                grid: {
                    right: '2%',
                    top: '10%',
                    bottom: '10%',
                    width: '18%'
                },
                tooltip: {
                    trigger: 'axis', // hover触发器
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                        shadowStyle: {
                            color: 'rgba(150,150,150,0.1)' //hover颜色
                        }
                    }
                },
                visualMap: {
                    seriesIndex: [1],
                    show :true,
                    min: 0,
                    max: 300,
                     calculable: true,
                     colorLightness: [0.8, 100],
                    // color: ['#c05050','#e5cf0d','#5ab1ef'],
                     dimension:0,
                },
                legend: {
                show: true,
                bottom: '15%',
                left: '12%',
                orient: 'vertical',
                padding: 20,
                // backgroundColor: 'rgba(236,246,255,0.30)',
                borderWidth: 1,
                // borderColor: '#e9f3fb',
                itemGap: 0,
                itemWidth: 20,
                itemHeight: 20,
                symbolKeepAspect: false,
                inactiveColor: '#999999',
                textStyle: {
                    fontSize: 16,
                },
                data: [{
                    name: '生产测试省份',
                    icon: 'pin'
                }, {
                    name: '生产冒烟省份',
                    icon: 'pin'
                }],
            },
                geo: {
                    roam: false, //是否允许缩放
                    show: true,
                    map: 'china',
                    zoom: 1,
                    center: [113.83531246, 34.0267395887],
                },
                
            },
            backgroundColor: '#cbcdd6',
            color:['green','#F8B44F'],
            options: []

        };
            var statistic_name = "各省测试进度排名";
            var titleName ="YYYYMMDD版本生产测试进度看板";
            optionXyMap01.options.push({
                title: [{
                         text:titleName,
                         //subtext: '   ',
                        //  left: '25%',
                        //  top: '1%',
                         textStyle: {
                             color: '#000000',
                            fontSize: 25
                         }
                    },
                    {
                        id: 'statistic',
                        text: statistic_name,
                        left: '75%',
                        top: '3%',
                        textStyle: {
                            color: '#000000',
                            fontSize: 16
                        }
                    }
                ],
                xAxis: {
                    type: 'value',
                    scale: true,
                    position: 'top',
                    min: 0,
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
                yAxis: {
                    type: 'category',
                    nameGap: 16,
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#000000'
                        }
                    },
                    axisTick: {
                        show: false,
                        lineStyle: {
                            color: '#000000'
                        }
                    },
                    axisLabel: {
                        interval: 0,
                        textStyle: {
                            color: '#000000'
                        }
                    },
                    data: categoryData[0]
                },
                series: [
                    //未知作用
                    {
                        //文字和标志
                        name: 'light',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: convertData(mapData_All),
                        symbolSize: function(val) {
                            return 6;
                        },
                        label: {
                            normal: {
                                
                                 show: true,
                                 position: "bottom", //显示位置
                                 offset: [0, 0], //偏移设置
                                 color: "#000000",
                                 formatter: "{b}", //圆环显示文字
                                 fontWeight: "bold",
                                 fontSize: 11
                            },
                             emphasis: {
                                 show: false
                             },
                        },
                        itemStyle: {
                             color :'transparent',
                        }
                    },
                    //地图
                    {
                        type: 'map',
                        map: 'china',
                        geoIndex: 0,
                        data: mapData_All
                    },
                    //各省测试进度柱状图
                    {
                        zlevel: 1,
                        type: 'bar',
                        barWidth,
                        barMaxWidth: 10,
                        symbol: 'none',
                         itemStyle: {
                            normal: {
                                	label: {
									show: true, //开启显示
									position: 'inside', //在上方显示
									textStyle: { //数值样式
										fontSize: 10
									}
								}
                            }
                        },
                        barBorderRadius: [0, 30, 30, 0],//柱状角成椭圆形
                        data:barData[0],

                    },
                    //分隔
                    // { 
                    //     type: 'pictorialBar',
                    //     itemStyle: {
                    //         color: '#000'
                    //     },
                    //     symbolRepeat: 'fixed',
                    //     symbolMargin: 4,
                    //     symbol: 'roundRect',
                    //     symbolClip: true,
                    //     symbolSize: [2, 18],
                    //     symbolPosition: 'start',
                    //     symbolOffset: [0, 0],
                    //     data: list,
                    //     z: 2,
                    //     animationEasing: 'elasticOut'
                    // },
                    //生产测试省份
                    {
        name: '生产冒烟省份',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(mapData_test),
        symbol: 'pin',
        symbolSize: function(val) {
            return val[1];
        },
        symbolOffset: [10, 10],
        label: {
            show:true,
            position: 'inside',
            // color:'#333',
            formatter: function(params) {
                return params.value[2];
            },
        }},
                    //生产冒烟省分
                    {
        name: '生产测试省份',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(mapData_pro),
        symbol: 'pin',
        symbolSize: function(val) {
            return val[1];
        },
        symbolOffset: [10,10],
        label: {
            show:true,
            position: 'inside',
            // color:'#333',
            formatter: function(params) {
                return params.value[2];
            },
        }
    },
                ]
            });
        myChart.setOption(optionXyMap01);
    });



