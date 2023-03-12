var imgUrl = "/asset/get/s/data-1597998044111-QKRPvTkC7.jpeg";

var uploadedDataURL = "/asset/get/s/data-1597996859368-p2XZDxby3.json";
//地理位置信息
var geoCoordMap = {
    "A城": [117.760945, 39.000893],
    "B城": [117.702878, 39.024217],
    "C城": [117.671833, 39.04137],
    "D城": [117.674276, 39.035316],
    "E城": [117.709346, 39.034083],
    'F城': [117.718545, 39.042154],
    'G城': [117.719695, 39.033411],
    'H城': [117.703022, 39.02276],
    "I城": [117.763101, 39.023769],
    'J城': [117.70834, 38.995173],

};
var geoCoordData = [{
        name: 'A城',
        value: "35",
        info: {
            img: imgUrl
        }
    },
    {
        name: 'B城',
        value: "60",
        info: {
            img: imgUrl
        }
    },

    {
        name: 'C城',
        value: "25",
        info: {
            img: imgUrl
        }
    },
    {
        name: 'E城',
        value: "45",
        info: {
            img: imgUrl
        }
    },
    {
        name: 'D城',
        value: "55",
        info: {
            img: imgUrl
        }
    },
    {
        name: 'F城',
        value: "10",
        info: {
            img: imgUrl
        }
    },
    {
        name: 'G城',
        value: "20",
        info: {
            img: imgUrl
        }
    },
    {
        name: 'H城',
        value: "30",
        info: {
            img: imgUrl
        }
    },
    {
        name: 'I城',
        value: "40",
        info: {
            img: imgUrl
        }
    },
    {
        name: 'J城',
        value: "50",
        info: {
            img: imgUrl
        }
    }
];
var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
                info: data[i].info || {}
            });
        }
    }
    return res;
};
var option = {
    backgroundColor: '#020933',
    title: {
        text: '北京朝阳区地图',
        top: 20,
        subtext: '',
        sublink: '',
        left: 'center',
        textStyle: {
            color: '#ccc'
        }
    },
    tooltip: {
        trigger: 'item',
        triggerOn: 'click',
        showDelay: 0, //浮层显示的延迟
        transitionDuration: 0.2, // 提示框浮层的移动动画过渡时间
        enterable: true,
        formatter: function(params) {
            console.log(params)
            if (params.data) {
                let info = params.data.info || {};
                let html = `
          <div>
            <img src="${info.img}" alt="">
            <div>
            <span>名字：</span>
            <span>${params.name}</span>
</div>
<button onclick="lookVideoGo('${params.name}')">查看</button>
					</div>
        `;
                return html
            } else {
                return
            }



        },
        // position: [10, 10],
        backgroundColor: "#fff"
    },
    visualMap: { //图例值控制
        min: 0,
        max: 100,
        calculable: true,
        show: true,
        color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
        textStyle: {
            color: '#fff'
        }
    },
    //地理坐标
    geo: {
        map: 'tjbh',
        type: "map",
        aspectScale: 0.75, //长宽比
        zoom: 1.1,
        roam: false,
        itemStyle: {
            normal: {
                areaColor: '#013C62',
                shadowColor: '#182f68',
                shadowOffsetX: 0,
                shadowOffsetY: 25,
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
            map: 'tjbh', //使用
            type: 'map',
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
            roam: true,

        },


        //标记 图形 原点 scatter点 effectScatter涟漪特效
        {

            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 5,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: '#fff'
                }
            },
            zlevel: 1,
            data: convertData(geoCoordData)
        },
        //标记图形 大头针
        {
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin', //标记的图形 图片参考：https://echarts.apache.org/zh/option.html#series-scatter.symbol
            symbolSize: [40, 40],
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 9,
                    },
                    formatter(value) {
                        return value.data.value[2]
                    }
                }
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: '#D8BC37', //标志颜色
                    // shadowBlur: 10,
                    // shadowColor: '#333'
                }
            },
            zlevel: 1,
            data: convertData(geoCoordData)
        }
    ]
};
var lookVideoGo = function(name) {
    console.log(name)
}
var getData = function() {
    $.get(uploadedDataURL, function(geojson) {
        echarts.registerMap('tjbh', geojson);
        myChart.setOption(option);
    })
}

getData()

myChart.on('georoam', function(params) {
    var option = myChart.getOption(); //获得option对象
    if (params.zoom != null && params.zoom != undefined) { //捕捉到缩放时
        option.geo[0].zoom = option.series[0].zoom; //下层geo的缩放等级跟着上层的geo一起改变
        option.geo[0].center = option.series[0].center; //下层的geo的中心位置随着上层geo一起改变
    } else { //捕捉到拖曳时
        option.geo[0].center = option.series[0].center; //下层的geo的中心位置随着上层geo一起改变
    }
    myChart.dispatchAction({
        type: 'restore'
    })
    myChart.setOption(option); //设置option
});