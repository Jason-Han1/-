
var zsmap = "/asset/get/s/data-1628238859025-Dfx8_XEhz.json";
var ptmap = "/asset/get/s/data-1628239424841-XcII47BMz.json"; // 普陀区
var dsmap = "/asset/get/s/data-1628239333323-JEugF7A7B.json"; //岱山
var dhmap = "/asset/get/s/data-1628239422412-isRkowV1r.json"; // 定海
var ssmap = "/asset/get/s/data-1628239193577-2Cl3a5ezO.json";// 嵊泗

var mapname = zsmap
var mapJson = [{
        name: "嵊泗县",
        json: ssmap
    },
    {
        name: "岱山县",
        json: dsmap
    },
    {
        name: "定海区",
        json: dhmap
    },
    {
        name: "普陀区",
        json: ptmap
    },
]

/**
此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，来达到hover散点和区域显示tooltip的效果

默认情况下，map series 会自己生成内部专用的 geo 组件。但是也可以用这个 geoIndex 指定一个 geo 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
当设定了 geoIndex 后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。

http://echarts.baidu.com/option.html#series-map.geoIndex

并且加了pin气泡图标以示数值大小
*/

myChart.showLoading();
let index = -1;
var timer = setInterval(function() {
    // 隐藏提示框
    myChart.dispatchAction({
        type: 'hideTip',
        seriesIndex: 0,
        dataIndex: index
    });
    // 显示提示框
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: index + 1
    });
    // 取消高亮指定的数据图形
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: index
    });
    // 高亮指定的数据图形
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: index + 1
    });
    index++;
    if (index > 13) {
        index = -1;
    }
}, 2000);


myChart.on('mousemove', function(e) {
    clearInterval(timer);
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0
    });
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: e.dataIndex
    });
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: e.dataIndex
    });
}); //---------------------------------------------鼠标移入静止播放
myChart.on('mouseout', function(e) {
    clearInterval(timer);
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: e.dataIndex
    }); //鼠标移出后先把上次的高亮取消
    timer = setInterval(function() {
        // 隐藏提示框
        myChart.dispatchAction({
            type: 'hideTip',
            seriesIndex: 0,
            dataIndex: index
        });
        // 显示提示框
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: index + 1
        });
        // 取消高亮指定的数据图形
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: index
        });
        // 高亮指定的数据图形
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: index + 1
        });
        index++;
        if (index > 13) {
            index = -1;
        }
    }, 2000);
});
myChart.on('click', function(e) {
    console.log(e)
    var chooseName = mapJson.filter(item => {
        return item.name == e.name
    })
    console.log(chooseName)
    mapname = chooseName[0].json

    console.log(mapname, '选择地图')

    mapDate = []
    $('<div class="back">返回舟山市</div>').appendTo(
        $('#chart-panel')
    );

    $('.back').css({
        'position': 'absolute',
        'left': '17px',
        'top': '25px',
        'color': 'rgb(222,222,222)',
        'font-size': '15px',
        cursor: 'pointer',
        'z-index': '100'
    })
    $('.back').click(function() {
        mapname = zsmap
        mapDate = [{
                name: '嵊泗县',
                value: []
            },
            {
                name: '岱山县',
                value: []
            },
            {
                name: '定海区',
                value: []
            },
            {
                name: '普陀区',
                value: []
            },
        ];
        $('.back').css({
            'position': 'absolute',
            'left': '17px',
            'top': '-25px',
            'color': 'rgb(222,222,222)',
            'font-size': '15px',
            cursor: 'pointer',
            'z-index': '100'
        })

        mapInit()
    })
    mapInit()
})
setTimeout(function() {
    mapInit()
}, 1000);
var mapInit = () => {
    console.log('我来了', mapname)
    $.getJSON(mapname, function(geoJson) {
        echarts.registerMap('hanzhou', geoJson);
        myChart.hideLoading();
        option = {
            backgroundColor: '#020933',
            title: {
                top: 20,
                text: '舟山市',
                subtext: '',
                x: 'center',
                textStyle: {
                    color: '#ccc'
                }
            },

            // tooltip: {
            //     trigger: 'item',
            //     formatter: function(params) {
            //         console.log(params)
            //             return params.name + ' : ' + params.value[2];
            //     }
            // },
            geo: {
                map: 'hanzhou',
                aspectScale: 0.75, //长宽比
                zoom: 1.1,
                roam: false,
                itemStyle: {
                    normal: {
                        areaColor: '#013C62',
                        shadowColor: '#182f68',
                        shadowOffsetX: 0,
                        shadowOffsetY: 25
                    },
                    emphasis: {
                        areaColor: '#2AB8FF',
                        borderWidth: 0,
                        color: 'green',
                        label: {
                            show: false
                        }
                    }
                }
            },
            series: [{
                    type: 'map',
                    roam: true,
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        emphasis: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },

                    itemStyle: {
                        normal: {
                            borderColor: '#2ab8ff',
                            borderWidth: 1.5,
                            areaColor: '#12235c'
                        },
                        emphasis: {
                            areaColor: '#2AB8FF',
                            borderWidth: 0,
                            color: 'green'
                        }
                    },
                    zoom: 1.1,
                    roam: false,
                    map: 'hanzhou' //使用
                    // data: this.difficultData //热力图数据   不同区域 不同的底色
                },

            ]
        };
        myChart.setOption(option);
    });
}