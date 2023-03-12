// 小部分部分下一级市区因为没有上传地图，所以无法下钻。大部分可以正常跳转

var zhumadian = "/asset/get/s/data-1562118579950-xXLfaPrXL.json";
var zhoukou = "/asset/get/s/data-1562118572274-v9xfaTwy5.json";
var zhengzhou = "/asset/get/s/data-1562118560176-EShp-n1M3.json";
var xuchang = "/asset/get/s/data-1562118551860-kjVYXRXie.json";
var xinyang = "/asset/get/s/data-1562118541540-1oHhC50T2.json";
var xinxiang = "/asset/get/s/data-1562118523296-25lVhSW-v.json";
var shangqiu = "/asset/get/s/data-1562118518920-oiGJ003Uo.json";
var sanmenxia = "/asset/get/s/data-1562118509577-7n9hCY3ms.json";
var pingdingshan = "/asset/get/s/data-1562118493063-2EXbyXPks.json";
var nanyang = "/asset/get/s/data-1562118482129-BF0-vIlyJ.json";
var luoyang = "/asset/get/s/data-1562118461353-wCQVj7-4u.json";
var kaifeng = "/asset/get/s/data-1562118436936-dm62fgITa.json";
var jiaozuo = "/asset/get/s/data-1562118423443-dsMnIHN5q.json";
var henan = "/asset/get/s/data-1562117497263-O6MV8S2ot.json";
var anyang = "/asset/get/s/data-1562117441591-aML_BHbjY.json";

var nameMap = '河南省';
var mapData = [{
    name: '焦作市',
    value: '598'
}, {
    name: '开封市',
    value: '2223'
}, {
    name: '郑州市',
    value: '637'
}, {
    name: '周口市',
    value: '885'
}, {
    name: '许昌市',
    value: '768'
}, {
    name: '南阳市',
    value: '1233'
}, {
    name: '信阳市',
    value: '1633'
}, {
    name: '新乡市',
    value: '1768'
}, {
    name: '洛阳市',
    value: '1233'
}, {
    name: '河南省',
    value: '3633'
}];

var seriesdata = [ //右边状图

    // 左边地图
    {
        type: 'map',
        map: nameMap,
        aspectScale: 0.75,

        top: 10,
        width: '60%',
        height: '90%',
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#667aed',
                borderColor: '#fff',
                borderWidth: 1.5,
                label: {
                    show: true,
                    color: '#fff',
                },

                emphasis: {
                    label: {
                        show: true
                    }
                }
            }
        },
    }, {
        name: '',
        type: 'bar',
        xAxisIndex: 0,
        yAxisIndex: 0,

        barWidth: '30%',
        itemStyle: {
            normal: {
                color: "aqua",
                label: {
                    show: true, //开启显示
                    position: "right", // 在上方显示
                    textStyle: {
                        // 数值样式
                        color: "#00eeff",
                        fontSize: 14
                    }
                }
            }
        },
        label: {
            normal: {
                show: true,
                position: "right",
                textStyle: {
                    color: "#c23531"
                }
            }
        },
        data: mapData
    },
    {
        name: '',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,

        barWidth: '30%',
        itemStyle: {
            normal: {
                color: "aqua",
                label: {
                    show: true, //开启显示
                    position: "right", // 在上方显示
                    textStyle: {
                        // 数值样式
                        color: "#00eeff",
                        fontSize: 14
                    }
                }
            }
        },
        label: {
            normal: {
                show: true,
                position: "right",
                textStyle: {
                    color: "#c23531"
                }
            }
        },
        data: mapData
    },


];
var ynameMap = [];
for (var i = 0; i < 10; i++) {
    ynameMap.push(seriesdata[1].data[i].name);
}

var optionMap = {

    backgroundColor: "#98988E",
    grid: [{
        gridIndex: 0,
        right: "2%",
        top: "10%",
        bottom: "10%",
        width: "25%"
    }, {
        gridIndex: 1,
        left: "5%",
        top: "10%",
        bottom: "10%",
        width: "25%"
    }],
    tooltip: {
        trigger: 'item',
        formatter: function(data) {
            if (!isNaN(data.value)) {
                return data.name + "：" + data.value;
            }
        },
    },
    xAxis: [{
            gridIndex: 0,
            type: "value",
            scale: true,
            position: "top",
            min: 0,
            show: false,
            axisTick: {
                show: false //刻度线
            },
            splitLine: {
                show: false //分割线
            },
            axisLabel: {
                show: false //文字
            },
            axisLine: {
                lineStyle: {
                    type: "solid",
                    color: "#00eeff" //线的颜色
                }
            }
        },
        {
            gridIndex: 1,
            type: "value",
            scale: true,
            position: "top",
            min: 0,
            show: false,
            axisTick: {
                show: false //刻度线
            },
            splitLine: {
                show: false //分割线
            },
            axisLabel: {
                show: false //文字
            },
            axisLine: {
                lineStyle: {
                    type: "solid",
                    color: "#00eeff" //线的颜色
                }
            }
        }
    ],
    yAxis: [{
            gridIndex: 0,
            show: true,
            type: "category",
            axisLabel: {
                rotate: -20, // 角度
                color: "#00eeff",
                interval: 0 // 让字体完全显示
            },
            axisTick: {
                inside: true, //刻度朝向
                alignWithLabel: true, //刻度对齐
                lineStyle: "#00eeff"
            },

            axisLine: {
                lineStyle: {
                    color: "#00eeff" //线的颜色
                }
            },
            inverse: true,
            data: ynameMap || []
        },
        {
            gridIndex: 1,
            show: true,
            type: "category",
            axisLabel: {
                rotate: -20, // 角度
                color: "#00eeff",
                interval: 0 // 让字体完全显示
            },
            axisTick: {
                inside: true, //刻度朝向
                alignWithLabel: true, //刻度对齐
                lineStyle: "#00eeff"
            },

            axisLine: {
                lineStyle: {
                    color: "#00eeff" //线的颜色
                }
            },
            inverse: true,
            data: ynameMap || []
        }
    ],
    series: seriesdata
};

$.get(henan, function(gdMap) {
    echarts.registerMap(nameMap, gdMap);
    myChart.setOption(optionMap, true);
});

const clickCity = param => {
    switch (param.name) {
        case '河南省':
            city = henan;
            break;
        case '洛阳市':
            city = luoyang;
            break;
        case '新乡市':
            city = xinxiang;
            break;
        case '信阳市':
            city = xinyang;
            break;
        case '南阳市':
            city = nanyang;
            break;
        case '许昌市':
            city = xuchang;
            break;
        case '周口市':
            city = zhoukou;
            break;
        case '郑州市':
            city = zhengzhou;
            break;
        case '开封市':
            city = kaifeng;
            break;
        case '焦作市':
            city = jiaozuo;
            break;
        case '平顶山市':
            city = pingdingshan;
            break;
        case '驻马店市':
            city = zhumadian;
            break;
        case '三门峡市':
            city = sanmenxia;
            break;
        case '商丘市':
            city = shangqiu;
            break;
        case '安阳市':
            city = anyang;
            break;
    }

    $.get(city, function(gdMap) {
        echarts.registerMap(nameMap, gdMap);
        myChart.setOption(optionMap, true);
    });
};

myChart.on("click", clickCity);