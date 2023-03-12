/**
  描述:
  
  使用高德api获取地图行政区geoJson,再用echarts去加载这个地图实现点击下钻功能
  
  vue渲染地图热力图、块状图，实现方法: https://juejin.im/post/5db6a8ab5188251d5e755cdf
  
  github上有完整的代码：https://github.com/biubiubiu01/EchartsMap
  
  阿里云geoJson全国所有市县下载地址：
  
  http://datav.aliyun.com/tools/atlas/#&lat=31.840232667909365&lng=104.2822265625&zoom=4
  
  实现前提：你要先去高德api上去申请key值，免费的，然后引入进来
  
**/


//存储市级的geoJson,因为高德无法获取区县级别的geoJosn数据，所以我们只能获取上一个级别的所有行政区
//然后去遍历，通过名字去比对获取geoJson

$('<div class="back">返回</div>').appendTo(
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
    if (parentCode.length === 1) return;
    // //删除最后一位
    parentCode.pop()
    getGeoJson(parentCode[parentCode.length - 1])
})


var parentJson = null
var cityName = '全国'
var parentCode = [100000]

getGeoJson(100000)

/**
 *  利用高德api获取行政区边界geoJson   
 *   adcode 行政区code 编号
 **/

function getGeoJson(adcode) {
    var map = new AMap.Map('map', {
        resizeEnable: true,
        center: [116.30946, 39.937629],
        zoom: 3
    })
    AMapUI.loadUI(['geo/DistrictExplorer'], DistrictExplorer => {
        var districtExplorer = (window.districtExplorer = new DistrictExplorer({
            eventSupport: true, //打开事件支持
            map: map
        }))
        districtExplorer.loadAreaNode(adcode, function(error, areaNode) {
            if (error) {
                console.error(error);
                return;
            }

            let Json = areaNode.getSubFeatures()
            if (Json.length > 0 && Json[0].properties.level == 'district') {
                parentJson = Json
            }
            //说明当前是区县
            //这里还有个问题就是获取mapData数据，这里调用getMapData方法又会重新生成一次value值
            //其实应该为之前的数据，不过这只是测试数据，用的随机数，实际项目肯定会调接口
            else if (Json.length == 0) {
                Json = parentJson.filter(item => {
                    if (item.properties.adcode == adcode) {
                        return item
                    }

                })
            }

            //去获取数据
            getMapData(Json)
        });
    })
}

//获取数据，这里我们用随机数模拟数据

function getMapData(Json) {
    let mapData = Json.map(item => {
        return ({
            name: item.properties.name,
            value: Math.random() * 1000,
            level: item.properties.level,
            cityCode: item.properties.adcode
        })
    })
    let mapJson = {}
    //geoJson必须这种格式
    mapJson.features = Json

    //去渲染echarts
    initEcharts(mapData, mapJson)
}

function initEcharts(mapData, mapJson) {
    //注册
    echarts.registerMap('Map', mapJson);

    //这里加true是为了让地图重新绘制，不然如果你有筛选的时候地图会飞出去
    myChart.setOption({
        backgroundColor: 'rgb(20,28,52)',
        tooltip: {
            trigger: "item",
            formatter: p => {
                let val = p.value;
                if (window.isNaN(val)) {
                    val = 0;
                }
                let txtCon =
                    p.name + "<br>" + "<hr>" + "数值 : " + val.toFixed(2);
                return txtCon;
            }
        },
        title: {
            show: true,
            x: "center",
            y: "top",
            text: cityName + "地图实现点击下钻",
            textStyle: {
                color: "#fff",
                fontSize: 16
            }
        },
        //这里可以添加echarts内置的，例如下载图片等
        toolbox: {
            feature: {
                dataView: {
                    show: false,
                    readOnly: true
                },
                magicType: {
                    show: false,
                    type: ["line", "bar"]
                },
                restore: {
                    show: false
                },
                saveAsImage: {
                    show: true,
                    name: cityName + "地图",
                    pixelRatio: 2
                }
            },
            iconStyle: {
                normal: {
                    borderColor: "#41A7DE"
                }
            },
            itemSize: 15,
            top: 20,
            right: 22
        },
        dataRange: {
            right: "2%",
            bottom: "3%",
            icon: "circle",
            align: "left",
            splitList: [{
                    start: 0,
                    end: 0,
                    label: '未发生',
                    color: "#6ead51"
                },
                {
                    start: 0,
                    end: 250,
                    label: '0-150',
                    color: "#92b733"
                },
                {
                    start: 250,
                    end: 500,
                    label: '250-500',
                    color: "#c4aa29"
                },
                {
                    start: 500,
                    end: 750,
                    label: '500-750',
                    color: "#ce6c2b"
                },
                {
                    start: 750,
                    label: '750以上',
                    color: "#c92626"
                }
            ],
            textStyle: {
                color: "#0fccff",
                fontSize: 16
            }
        },
        series: [{
            name: "地图",
            type: "map",
            map: "Map",
            roam: true, //是否可缩放
            zoom: 1.1, //缩放比例
            data: mapData,
            itemStyle: {
                normal: {
                    show: true,
                    areaColor: 'rgba(0,0,0,0)',
                    borderColor: 'rgb(185, 220, 227)',
                    borderWidth: '1',
                },
            },
            label: {
                normal: {
                    show: true, //显示省份标签
                    textStyle: {
                        color: "rgb(249, 249, 249)", //省份标签字体颜色
                        fontSize: 12
                    }
                },
                emphasis: {
                    //对应的鼠标悬浮效果
                    show: true,
                    textStyle: {
                        color: "#000"
                    }
                }
            }
        }]

    }, true)

    myChart.on('click', echartsMapClick);
}

//echarts点击事件

function echartsMapClick(params) {
    let cityCode = params.data.cityCode
    cityName = params.data.name
    parentCode.push(cityCode)
    getGeoJson(cityCode)

}