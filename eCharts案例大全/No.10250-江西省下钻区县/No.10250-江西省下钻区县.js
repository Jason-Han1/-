var jiangxisheng = "/asset/get/s/data-1566876250425-5KOygeD3A.json";

var ganzhou = "/asset/get/s/data-1566877015283-F6DHB71Uj.json";

var yichun = "/asset/get/s/data-1566876354738-Eh1cufe1l.json";

var xinyu = "/asset/get/s/data-1566876332728-O-Fvqqw9V.json";

var shangrao = "/asset/get/s/data-1566876321731-VO8N4vczw.json";

var pingxiang= "/asset/get/s/data-1566876306157-1Gke-s6tB.json";

var nanchang = "/asset/get/s/data-1566876294654-OrNytYJbe.json";

var jiujiang = "/asset/get/s/data-1566876280019-6g2VfsAJT.json";

var jingdezhen = "/asset/get/s/data-1566876264856-X1WYaSWXr.json";


var jian = "/asset/get/s/data-1566876224608-KmCb1FAjB.json";

var fuzhou = "/asset/get/s/data-1566876207678-2ifDcX1eM.json";

var yingtan = "/asset/get/s/data-1566876159089-Xlb0p3RrU.json";


var nameMap = '江西省';
var mapData = [{
    name: '宜春市',
    value: '598'
}, {
    name: '新余市',
    value: '2223'
}, {
    name: '上饶市',
    value: '637'
}, {
    name: '萍乡市',
    value: '885'
}, {
    name: '南昌市',
    value: '768'
}, {
    name: '九江市',
    value: '1233'
}, {
    name: '景德镇市',
    value: '1633'
}, {
    name: '吉安市',
    value: '1768'
}, {
    name: '抚州市',
    value: '1233'
}, {
    name: '鹰潭市',
    value: '3633'
}, {
    name: '赣州市',
    value: '3888'
}, {
    name: '江西省',
    value: '5633'
}];

var seriesdata = [
    // 左边地图
    {
        type: 'map',
        map: nameMap,
        aspectScale: 0.75,
        left: '2%',
        top: 12,
        width: '60%',
        height: '90%',
        roam: false,
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
    },
    //右边状图
    {
        name: '',
        type: 'bar',
        xAxisIndex: 0,
        yAxisIndex: 0,
        barWidth: '30%',
        itemStyle: {
            normal: {
                color: '#f5b335',
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
for (var i = 0; i < 12; i++) {
    ynameMap.push(seriesdata[1].data[i].name);
}

var optionMap = {
    backgroundColor: "#00fa9a",
    grid: {
        right: '5%',
        bottom: '3%',
        width: '25%',
        height: '80%'
    },
    tooltip: {
        trigger: 'item',
        formatter: function(data) {
            if (!isNaN(data.value)) {
                return data.name + "：" + data.value;
            }
        },
    },
    xAxis: {
        gridIndex: 0,
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        gridIndex: 0,
        interval: 0,
        data: ynameMap,
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true
        },
        splitLine: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#c23531"
            }
        }
    },
    series: seriesdata
};

$.get(jiangxisheng, function(gdMap) {
    echarts.registerMap(nameMap, gdMap);
    myChart.setOption(optionMap, true);
});

const clickCity = param => {
    switch (param.name) {
        case '江西省':
            city = jiangxisheng ;
            break;
        case '宜春市':
            city = yichun ;
            break;
        case '南昌市':
            city = nanchang ;
            break;    
        case '新余市':
            city = xinyu ;
            break;
        case '上饶市':
            city = shangrao ;
            break;
        case '萍乡市':
            city = pingxiang ;
            break;
        case '九江市':
            city = jiujiang ;
            break;
        case '景德镇市':
            city = jingdezhen ;
            break;
        case '吉安市':
            city = jian ;
            break;
        case '抚州市':
            city = fuzhou ;
            break;
        case '鹰潭市':
            city = yingtan ;
            break;
        case '赣州市':
            city = ganzhou ;
            break;
    }

    $.get(city, function(gdMap) {
        echarts.registerMap(nameMap, gdMap);
        myChart.setOption(optionMap, true);
    });
};

myChart.on("click", clickCity);