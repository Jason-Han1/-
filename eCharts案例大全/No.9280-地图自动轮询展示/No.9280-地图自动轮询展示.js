var uploadedDataURL = "/asset/get/s/data-1558663415563-NEJY4xOlI.json";
var chart = echarts.init(document.getElementById('chart-panel'));

//绘制全国地图，获取全国地图的json
$.getJSON(uploadedDataURL, function(data) {
    //新建一个空数组
    d = [];
    //循环遍历
    for (var i = 0; i < data.features.length; i++) {
        //将数据中的namepush到新数组中,没有这个无法高亮显示 dataIndex
        d.push({
            name: data.features[i].properties.name,
            value:0
        })
    }

    //注册地图名为 'chinaTest' 的geo
    echarts.registerMap('chinaTest', data);
    //绘制地图
    renderMap('chinaTest', d);
    //轮询
    autoMapHover(chart, 0, d.length)
});

var option = {
    backgroundColor: "#043270",
    color: ["#3398DB"],
    tooltip: {
        trigger: "axis",
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: [],
    yAxis: [],
    grid: [],
};


function renderMap(mapName, data) {
    // option.title.subtext = map;
    option.series = [{
        name: mapName,
        type: 'map',
        mapType: mapName,
        roam: true,
        zoom: 1,
        label: {
            normal: {
                show: true,
                textStyle: {
                    color: "#fff"
                }
            },
            emphasis: {
                textStyle: {
                    color: "#fff"
                }
            }
        },
        itemStyle: {
            normal: {
                borderColor: "rgba(147, 235, 248, 1)",
                borderWidth: 1,
                areaColor: {
                    type: "radial",
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [{
                            offset: 0,
                            color: "rgba(147, 235, 248, 0)" // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: "rgba(147, 235, 248, .2)" // 100% 处的颜色
                        }
                    ],
                    globalCoord: false // 缺省为 false
                },
                shadowColor: "rgba(128, 217, 248, 1)",
                shadowOffsetX: -2,
                shadowOffsetY: 2,
                shadowBlur: 10
            },
            //鼠标移入
            emphasis: {
                areaColor: "#389BB7",
                borderWidth: 0
            }
        },
        data: data
    }];
    //渲染地图
    chart.setOption(option);
}

function autoMapHover(myChart, seriesIndex = 0, dataLength = 0) {
    var count = 0;
    var timeTicket = null;
    const run = function() {
        timeTicket && clearInterval(timeTicket);
        timeTicket = setInterval(function() {
            myChart.dispatchAction({
                type: "downplay",
                seriesIndex: seriesIndex
            });
            myChart.dispatchAction({
                type: "highlight",
                seriesIndex: seriesIndex,
                dataIndex: count % dataLength
            });
            count++;
        }, 1000);
    };

    myChart.on("mouseover", function(params) {
        // 清除定时器,将鼠标所在的区域高亮
        clearInterval(timeTicket);
        myChart.dispatchAction({
            type: "downplay",
            seriesIndex: seriesIndex
        });
        myChart.dispatchAction({
            type: "highlight",
            seriesIndex: 0,
            dataIndex: params.dataIndex
        });
    });
    myChart.on("mouseout", function(params) {
        run();
    });
    run();
}