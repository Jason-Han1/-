//散点图
function scatterPlot(id, datas, links) {
    var echartsInstance = echarts.getInstanceByDom(document.getElementById(id));
    if (echartsInstance != undefined) {
        echarts.dispose(echartsInstance)
    }
    var chartDOM = document.getElementById(id);
    var chartInstance = echarts.init(chartDOM);
    var option = {
        backgroundColor: 'rgba(14, 22, 71, 0.3)',
        tooltip: {
            show: true
        },
        series: [{
            type: 'graph',
            layout: 'none',
            roam: false,
            center: ['50%', '50%'],
            draggable: false,
            focusNodeAdjacency: true,
            tooltip: {
                formatter: function(data) {
                    return data.data.name;
                }
            },
            data: datas,
            links: links,
            lineStyle: {
                normal: {
                    color: '#342832',
                    curveness: 0,
                    type: "solid"
                }
            },
            itemStyle: {
                normal: {
                    color: function(data) {
                        return data.data.mark == "department" ? "#090d3d" : "#37130c"
                    },
                    borderColor: "#ffe4bc",
                    borderWidth: 1,
                    borderType: "solid",
                    opacity: 1
                }
            },
            label: {
                normal: {
                    color: "#fff",
                    show: true,
                    position: 'top',
                    formatter: function(params) {
                        if (params.data.show) {
                            return params.data.name;
                        } else {
                            return "";
                        }
                    },
                    z: 4
                }
            }
        }]
    };
    chartInstance.setOption(option);
}

//散点图上的扇形图
function scatterPlotPink(id) {
    var chartDOM = document.getElementById(id);
    var echartsInstance = echarts.getInstanceByDom(chartDOM);
    if (echartsInstance != undefined) {
        var chartOption = echartsInstance.getOption();
        echarts.util.map(chartOption.series[0].data, function(item, index) {
            if (index < 9 && index > 0) {
                chartOption.series.push({
                    id: item.organizeID + 'pie',
                    type: 'pie',
                    center: echartsInstance.convertToPixel({
                        seriesIndex: 0
                    }, [item.x, item.y]),
                    tooltip: {
                        show: false
                    },
                    legend: {
                        show: false
                    },
                    z: 3,
                    radius: [10, 20],
                    hoverAnimation: false,
                    data: [{
                            value: item.value,
                            itemStyle: {
                                normal: {
                                    color: item.mark == "department" ? "#ca8622" : "#e86435"
                                }
                            },
                            label: {
                                show: true,
                                formatter: '{c}' + "%",
                                color: "#fff",
                                fontWight: "normal",
                                position: 'center'
                            }
                        },
                        {
                            value: 100 - item.value,
                            itemStyle: {
                                normal: {
                                    color: "transparent"
                                }
                            },
                            label: {
                                show: false
                            }
                        }
                    ]
                })
            }
        })
        echartsInstance.setOption(chartOption)
    }
}

// 根据对象的某个属性对其进行由大到小排序
function arrMaxToMinSort(propertyName) {
    return function(object1, object2) {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if (value2 > value1) {
            return 1;
        } else if (value2 < value1) {
            return -1;
        } else {
            return 0;
        }
    }
}

//基础数据
var excChartInfos = [{
        "organizeID": "黑龙江省",
        "mark": "province",
        "overallTotalQua": 10000,
        "orgFullName": "黑龙江省",
        "orgShortName": "黑龙",
        "totalQua": 50
    },
    {
        "organizeID": "甘肃省",
        "mark": "province",
        "overallTotalQua": 10000,
        "orgFullName": "甘肃省",
        "orgShortName": "甘肃",
        "totalQua": 50
    },
    {
        "organizeID": "生产建设兵团",
        "mark": "province",
        "overallTotalQua": 10000,
        "orgFullName": "生产建设兵团",
        "orgShortName": "兵团",
        "totalQua": 10
    },
    {
        "organizeID": "重庆市",
        "mark": "province",
        "overallTotalQua": 10000,
        "orgFullName": "重庆市",
        "orgShortName": "重庆",
        "totalQua": 500
    },
    {
        "organizeID": "新疆维吾尔自治区",
        "mark": "province",
        "overallTotalQua": 10000,
        "orgFullName": "新疆维吾尔自治区",
        "orgShortName": "新疆",
        "totalQua": 10
    },
    {
        "organizeID": "环保部",
        "mark": "department",
        "overallTotalQua": 10000,
        "orgFullName": "环保部",
        "orgShortName": "环保",
        "totalQua": 10
    },
    {
        "organizeID": "国安部",
        "mark": "department",
        "overallTotalQua": 10000,
        "orgFullName": "国安部",
        "orgShortName": "国安",
        "totalQua": 70
    },
    {
        "organizeID": "陕西省",
        "mark": "province",
        "overallTotalQua": 10000,
        "orgFullName": "陕西省",
        "orgShortName": "陕西",
        "totalQua": 500
    }, {
        "organizeID": "河南省",
        "mark": "province",
        "overallTotalQua": 10000,
        "orgFullName": "河南省",
        "orgShortName": "河南",
        "totalQua": 5000
    },
    {
        "organizeID": "浙江省",
        "mark": "province",
        "overallTotalQua": 10000,
        "orgFullName": "浙江省",
        "orgShortName": "浙江",
        "totalQua": 3000
    },
    {
        "organizeID": "扶贫办",
        "mark": "department",
        "overallTotalQua": 10000,
        "orgFullName": "扶贫办",
        "orgShortName": "扶贫",
        "totalQua": 20
    },
    {
        "organizeID": "体育总局",
        "mark": "department",
        "overallTotalQua": 10000,
        "orgFullName": "体育总局",
        "orgShortName": "体育",
        "totalQua": 20
    },
    {
        "organizeID": "监察部",
        "mark": "department",
        "overallTotalQua": 10000,
        "orgFullName": "监察部",
        "orgShortName": "监察",
        "totalQua": 20
    },
    {
        "organizeID": "教育部",
        "mark": "department",
        "overallTotalQua": 10000,
        "orgFullName": "教育部",
        "orgShortName": "教育",
        "totalQua": 20
    },
    {
        "organizeID": "民政部",
        "mark": "department",
        "overallTotalQua": 10000,
        "orgFullName": "民政部",
        "orgShortName": "民政",
        "totalQua": 180
    },
    {
        "organizeID": "宗教局",
        "mark": "department",
        "overallTotalQua": 10000,
        "orgFullName": "宗教局",
        "orgShortName": "宗教",
        "totalQua": 20
    },
    {
        "organizeID": "测绘局",
        "mark": "department",
        "overallTotalQua": 10000,
        "orgFullName": "测绘局",
        "orgShortName": "地信",
        "totalQua": 20
    },
    {
        "organizeID": "法制办",
        "mark": "department",
        "overallTotalQua": 10000,
        "orgFullName": "法制办",
        "orgShortName": "法制",
        "totalQua": 20
    }
]

//绘图区域的id
var id = "chart-panel";

//中心区域的名称
var organizeFullName = "国务院";

//线的数据
var links = [];

//计算绘图区域宽高 
var H = parseInt($("#" + id).height());
var W = parseInt($("#" + id).width());
//先置入要显示的8个点的坐标
var pointer = [{
        x: W / 2 - 120,
        y: H / 2
    },
    {
        x: W / 2 - 100,
        y: H / 2 - 80
    },
    {
        x: W / 2,
        y: H / 2 - 100
    },
    {
        x: W / 2 + 60,
        y: H / 2 - 80
    },
    {
        x: W / 2 + 100,
        y: H / 2
    },
    {
        x: W / 2 + 60,
        y: H / 2 + 80
    },
    {
        x: W / 2,
        y: H / 2 + 100
    },
    {
        x: W / 2 - 100,
        y: H / 2 + 80
    }
]

//按照量排序
excChartInfos.sort(arrMaxToMinSort("totalQua"));

//组装所要显示图形的数据
excChartInfos.forEach(function(value, index) {
    //当前量占总量的百分比
    if (value.overallTotalQua === 0) {
        value["totalPer"] = 0;
    } else {
        value["totalPer"] = Math.round(value.totalQua / value.overallTotalQua * 100);
    }

    if (index < 8) {
        value["symbolSize"] = 40;
        value["show"] = !0;
        value["x"] = pointer[index].x;
        value["y"] = pointer[index].y;
    } else {
        value["symbolSize"] = 5;
        value["show"] = !1;
        do {
            value["x"] = Math.random() * W;
            value["y"] = Math.random() * H;
        }
        while (W / 2 - 140 < value["x"] && value["x"] < W / 2 + 140 && H / 2 - 120 < value["y"] && value["y"] < H / 2 + 120);
    }

    value["name"] = value.orgFullName;
    value["draggable"] = !1;
    value["value"] = value.totalPer;

    //设置线的数据
    links.push({
        source: organizeFullName,
        target: value.orgFullName,
        value: Math.round(Math.random() * 10) + "%"
    })
})

//将当前机构信息添加到首位
excChartInfos.unshift({
    name: organizeFullName,
    value: 20,
    subtext: organizeFullName,
    symbol: "image://http://www.liuvweb.com/visualView/img/graph_center.png",
    symbolSize: 70,
    roam: false,
    label: {
        normal: {
            show: true,
            position: 'inside',
            formatter: function(params) {
                return params.data.name
            },
            fontSize: 15
        }
    },
    itemStyle: {
        normal: {
            color: "#090d3d",
            borderType: "solid",
            opacity: 1,
            borderWidth: "1px",
            borderColor: "#fff",
            shadowColor: 'rgba(255, 255, 255, 0.8)',
            shadowBlur: 30
        }

    },
    x: W / 2,
    y: H / 2,
    fixed: true
})

//绘制关系图
scatterPlot(id, excChartInfos, links)

//绘制关系图上的扇形区域
scatterPlotPink(id)