//成都市地图，包含子区
var hzmap = "https://geo.datav.aliyun.com/areas_v2/bound/510100_full.json";
//都江堰市
var yhmap = "https://geo.datav.aliyun.com/areas_v2/bound/510181.json";
//彭州市
var xsmap = "https://geo.datav.aliyun.com/areas_v2/bound/510182.json";
//崇州市
var xhmap = "https://geo.datav.aliyun.com/areas_v2/bound/510184.json";
//温江区
var xcmap = "https://geo.datav.aliyun.com/areas_v2/bound/510115.json";
//郫都区
var tlmap = "https://geo.datav.aliyun.com/areas_v2/bound/510117.json";
//新都区
var scmap = "https://geo.datav.aliyun.com/areas_v2/bound/510114.json";
//青白江区
var lamap = "https://geo.datav.aliyun.com/areas_v2/bound/510113.json";
//金堂县
var jgmap = "https://geo.datav.aliyun.com/areas_v2/bound/510121.json";
//龙泉驿区
var jdmap = "https://geo.datav.aliyun.com/areas_v2/bound/510112.json";
//成华区
var gsmap = "https://geo.datav.aliyun.com/areas_v2/bound/510108.json";
//金牛区
var fymap = "https://geo.datav.aliyun.com/areas_v2/bound/510106.json";
//青羊区
var camap = "https://geo.datav.aliyun.com/areas_v2/bound/510105.json";
//锦江区
var bjmap = "https://geo.datav.aliyun.com/areas_v2/bound/510104.json";
//武侯区
var whmap = "https://geo.datav.aliyun.com/areas_v2/bound/510107.json";
//双流区
var slmap = "https://geo.datav.aliyun.com/areas_v2/bound/510116.json";
//大邑县
var dyxmap = "https://geo.datav.aliyun.com/areas_v2/bound/510129.json";
//邛崃市
var qxsmap = "https://geo.datav.aliyun.com/areas_v2/bound/510183.json";
//蒲江县
var pjxmap = "httpshttps://geo.datav.aliyun.com/areas_v2/bound/510131.json";
//新津区
var xjqmap = "httpshttps://geo.datav.aliyun.com/areas_v2/bound/510118.json";
//简阳市
var jysmap = "https://geo.datav.aliyun.com/areas_v2/bound/510185.json";


var mapname = hzmap
var mapJson = [
    {
        name: "简阳市",
        json: jysmap
    },
    {
        name: "新津区",
        json: xjqmap
    },
    {
        name: "蒲江县",
        json: pjxmap
    },
    {
        name: "邛崃市",
        json: qxsmap
    },
    {
        name: "大邑县",
        json: dyxmap
    },
    {
        name: "双流区",
        json: slmap
    },
    {
        name: "武侯区",
        json: whmap
    },
    {
        name: "锦江区",
        json: bjmap
    },
    {
        name: "青羊区",
        json: camap
    },
    {
        name: "金牛区",
        json: fymap
    },
    {
        name: "成华区",
        json: gsmap
    },
    {
        name: "龙泉驿区",
        json: jdmap
    },
    {
        name: "金堂县",
        json: jgmap
    },
    {
        name: "青白江区",
        json: lamap
    },
    {
        name: "新都区",
        json: scmap
    },
    {
        name: "郫都区",
        json: tlmap
    },
    {
        name: "温江区",
        json: xcmap
    },
    {
        name: "崇州市",
        json: xhmap
    },
    {
        name: "彭州市",
        json: xsmap
    },
    {
        name: "都江堰市",
        json: yhmap
    }
]

var mapDate = [{
        name: '江干区',
        value: [120.185, 30.274, 29999]
    },
    {
        name: '拱墅区',
        value: [120.182, 30.351, 29999]
    },
    {
        name: '西湖区',
        value: [120.091, 30.27, 29999]
    },
    {
        name: '滨江区',
        value: [120.21, 30.209, 29999]
    },
    {
        name: '萧山区',
        value: [120.254, 30.159, 29999]
    },
    {
        name: '余杭区',
        value: [120.295, 30.427, 29999]
    },
    {
        name: '富阳区',
        value: [119.956, 30.05, 29999]
    },
    {
        name: '桐庐县',
        value: [119.675, 29.784, 29999]
    },
    {
        name: '淳安县',
        value: [119.058, 29.613, 29999]
    },
    {
        name: '建德市',
        value: [119.28, 29.464, 29999]
    },
    {
        name: '临安区',
        value: [119.712, 30.227, 29999]
    },
    {
        name: '钱塘新区',
        value: [120.485, 30.284, 29999]
    }
];
/**
此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，来达到hover散点和区域显示tooltip的效果

默认情况下，map series 会自己生成内部专用的 geo 组件。但是也可以用这个 geoIndex 指定一个 geo 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
当设定了 geoIndex 后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。

http://echarts.baidu.com/option.html#series-map.geoIndex

并且加了pin气泡图标以示数值大小
*/

myChart.showLoading();
let index = -1;
//定时
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
    $('<div class="back">返回成都市</div>').appendTo(
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
        mapname = hzmap
        mapDate = [{
                name: '江干区',
                value: [120.185, 30.274, 29999]
            },
            {
                name: '拱墅区',
                value: [120.182, 30.351, 29999]
            },
            {
                name: '西湖区',
                value: [120.091, 30.27, 29999]
            },
            {
                name: '滨江区',
                value: [120.21, 30.209, 29999]
            },
            {
                name: '萧山区',
                value: [120.254, 30.159, 29999]
            },
            {
                name: '余杭区',
                value: [120.295, 30.427, 29999]
            },
            {
                name: '富阳区',
                value: [119.956, 30.05, 29999]
            },
            {
                name: '桐庐县',
                value: [119.675, 29.784, 29999]
            },
            {
                name: '淳安县',
                value: [119.058, 29.613, 29999]
            },
            {
                name: '建德市',
                value: [119.28, 29.464, 29999]
            },
            {
                name: '临安区',
                value: [119.712, 30.227, 29999]
            },
            {
                name: '钱塘新区',
                value: [120.485, 30.284, 29999]
            }
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
                text: '成都市房价分布图',
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
            visualMap: {
                min: 0,
                max: 1000000,
                right: 100,
                seriesIndex: 1,
                type: 'piecewise',
                bottom: 100,
                textStyle: {
                    color: '#FFFF'
                },
                splitList: [
                    // {
                    //     gt: 50000,
                    //     color: '#F5222D',
                    //     label: '困难人数大于5万人'
                    // }, //大于5万人
                    // {
                    //     gte: 30000,
                    //     lte: 50000,
                    //     color: '#FA541C ',
                    //     label: '困难人数3-5万人'
                    // }, //3-5万人
                    // {
                    //     gte: 10000,
                    //     lte: 30000,
                    //     color: '#FA8C16',
                    //     label: '困难人数1-3万人'
                    // }, //1-3万人
                    // {
                    //     lte: 10000,
                    //     color: '#fbe1d6',
                    //     label: '困难人数小于1万人'
                    // }
                ]
            },
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
                {
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    showEffectOn: 'render',
                    rippleEffect: {
                        period: 15,
                        scale: 4,
                        brushType: 'fill'
                    },
                    hoverAnimation: true,
                    itemStyle: {
                        normal: {
                            color: '#ffff',
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: mapDate
                }

            ]
        };
        myChart.setOption(option);
    });
}