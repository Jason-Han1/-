// <div id="ChartsChina" ref="ChartsRef" style="width:1000px;height:800px"></div>
// import 'echarts/map/js/china'
// import "echarts/lib/chart/map";
// var myChart = this.$echarts.init(this.$refs.ChartsRef);
// 实际开发时上面都要写
option = {
    tooltip: {
        trigger: 'item',
        formatter: function(params) {

            if (params.data != 'undefined' && params.data.hasOwnProperty('jgCODE')) {
                // console.log('1111',params);
                // 提示框内容
                // 点击提示框页面跳转
                // 页面路由跳转以及传参 

                return `
                      <a target="_Blank" href="www.baidu.com?id=${params.data.c}" style="text-decoration:none">
                            <div  style="font-size: 13px;height: 17px;line-height: 17px;color: #fff;text-align: center;">${params.data.name}</div>
                            <div  style="height: 30px; line-height: 30px; font-size: 15px;display: flex;align-items: center;color:#fff">
                                <i style="border-radius: 50%;width: 15px; height: 15px;background-color: #fff;margin:0  5px;background-color: green;"></i>
                                a的数据:${params.data.a}
                            </div>
                            <div  style="height: 30px; line-height: 30px;font-size: 15px; display: flex;align-items: center;color:#fff">
                                <i style="border-radius: 50%;width: 15px;height: 15px;background-color: #fff;margin:0  5px;background-color: red;"></i> 
                                b的数据:${params.data.b}
                            </div>
                      </a>
                    `
            }
        },
        //提示框是否交互
        enterable: true,
        // 提示框点击显示
        triggerOn: 'click',
        //内编剧
        padding: [0],
        //提示框的样式
        extraCssText: 'width: 150px;height: 78px;' +
            'background-color: blue;' // +'background: url('+require('../assets/indexbg.png')+');'自己提示框的背景图或者背景色
            +
            'border-radius: 0; border: 1px solid #000;' +
            'background-size: 100% 100%; background-repeat: no-repeat;'
    },

    geo: {
        map: "china",
        show: true,
        // //是否开启鼠标缩放和平移漫游。
        roam: false,
        // //当前视角的缩放比例。
        zoom: 1.2,
        // //图形上的文本标签，
        label: {
            show: false,
            color: 'red',
            fontSize: '20'

        },
        // // // 地图的大小，见 layoutCenter。支持相对于屏幕宽高的百分比或者绝对的像素大小。
        layoutSize: 100,
        // // //这个是高亮边框
        itemStyle: {
            borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#00F6FF'
            }, {
                offset: 1,
                color: '#53D9FF'
            }], false),
            borderWidth: 5,
            shadowColor: 'rgba(10,76,139,1)',
            shadowOffsetY: 0,
            shadowBlur: 60
        }
    },
    series: [
        //给地图填充颜色
        {
            name: "地图",
            type: "map", //地图种类
            map: "china", //地图类型。
            // data: this._mapData,
            zoom: 1.2, //放大比例
            label: {
                //图形上的文本标签，可用于说明图形的一些数据信息
                show: false
            },
            // 每个省份的颜色
            itemStyle: {
                areaColor: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                            offset: 0,
                            color: '#073684' // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#061E3D' // 100% 处的颜色
                        }
                    ],
                },
                borderColor: '#215495',
                borderWidth: 1,
            },
            // 鼠标移动到每个省份高亮的颜色属性的等设置
            emphasis: {
                itemStyle: {
                    areaColor: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#073684' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#061E3D' // 100% 处的颜色
                        }],
                    },
                    // borderColor: 'red',
                },
                label: {
                    show: true,
                    color: '#fff'
                }

            },
        },
        {
            type: 'scatter',
            name: '散点',
            // 使用的坐标轴
            coordinateSystem: 'geo',
            // 层级
            zlevel: 3,
            itemStyle: {
                normal: {
                    color: '#1DE9B6',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            symbolSize: 10,
            // 选中时的状态
            emphasis: {
                itemStyle: {
                    color: 'orange',
                    shadowBlur: 10,
                    shadowColor: '#333'
                },
            },
            data: [{
                name: '上海中心', //坐标名称
                jc: '上海', //省会
                province: '上海', //省份名
                jgCODE: "010107313", //省份代码
                value: [121.5648, 31.4891], //省会经纬度
                a: 0, //自己的数据，后台取的
                b: 0, //自己的数据，后台取的
                c: 0, //自己的数据，后台取的
                itemStyle: { //点的自定义设置
                    color: '#4ab2e5'
                }
            }, {
                name: '合肥中心',
                jc: '合肥',
                province: '安徽',
                jgCODE: "010107314",
                value: [117.29, 32.0581],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {
                    color: '#4ab2e5'
                }
            }, {
                name: '上海分行',
                jc: '上海',
                province: '上海',
                jgCODE: "310000000",
                value: [121.4648, 31.0091],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '北京分行',
                jc: '北京',
                province: '北京',
                jgCODE: "110000000",
                value: [116.4551, 40.2539],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '天津分行',
                jc: '天津',
                province: '天津',
                jgCODE: "120000000",
                value: [117.4219, 39.4189],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '河北分行',
                jc: '石家庄',
                province: '河北',
                jgCODE: "130000000",
                value: [114.4995, 38.1006],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '山西分行',
                jc: '太原',
                province: '山西',
                jgCODE: "140000000",
                value: [112.3352, 37.9413],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '内蒙古分行',
                jc: '呼和浩特',
                province: '内蒙古',
                jgCODE: "150000000",
                value: [110.3467, 41.4899],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '辽宁分行',
                jc: '沈阳',
                province: '辽宁',
                jgCODE: "210000000",
                value: [123.1238, 42.1216],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '大连分行',
                jc: '大连',
                province: '辽宁',
                jgCODE: "212000000",
                value: [122.5, 40.1216],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '吉林分行',
                jc: '长春',
                province: '吉林',
                jgCODE: "220000000",
                value: [125.8154, 44.2584],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '黑龙江分行',
                jc: '哈尔滨',
                province: '黑龙江',
                jgCODE: "230000000",
                value: [127.9688, 45.368],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '江苏分行',
                jc: '南京',
                province: '江苏',
                jgCODE: "320000000",
                value: [118.8062, 31.9208],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '苏州分行',
                jc: '苏州',
                province: '江苏',
                jgCODE: "322000000",
                value: [120.4, 31.4],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '浙江分行',
                jc: '杭州',
                province: '浙江',
                jgCODE: "330000000",
                value: [119.5313, 29.8773],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '宁波分行',
                jc: '宁波',
                province: '浙江',
                jgCODE: "331000000",
                value: [120.0313, 27.9773],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '安徽分行',
                jc: '合肥',
                province: '安徽',
                jgCODE: "340000000",
                value: [117.29, 30.581],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '福建分行',
                jc: '福州',
                province: '福建',
                jgCODE: "350000000",
                value: [119.4543, 25.9222],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '厦门分行',
                jc: '厦门',
                province: '福建',
                jgCODE: "351000000",
                value: [117.9543, 24.8222],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '江西分行',
                jc: '南昌',
                province: '江西',
                jgCODE: "360000000",
                value: [116.0046, 28.6633],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '山东分行',
                jc: '济南',
                province: '山东',
                jgCODE: "370000000",
                value: [117.1582, 36.8701],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '青岛分行',
                jc: '青岛',
                province: '山东',
                jgCODE: "371000000",
                value: [120.7582, 37.2701],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '河南分行',
                jc: '郑州',
                province: '河南',
                jgCODE: "410000000",
                value: [113.4668, 34.6234],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '湖北分行',
                jc: '武汉',
                province: '湖北',
                jgCODE: "420000000",
                value: [114.3896, 30.6628],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '湖南分行',
                jc: '长沙',
                province: '湖南',
                jgCODE: "430000000",
                value: [113.0823, 28.2568],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '广东分行',
                jc: '广州',
                province: '广东',
                jgCODE: "440000000",
                value: [113.12244, 23.009505],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '深圳分行',
                jc: '深圳',
                province: '广东',
                jgCODE: "442000000",
                value: [115.12244, 23.009505],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '广西分行',
                jc: '南宁',
                province: '广西',
                jgCODE: "450000000",
                value: [108.479, 23.1152],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '海南分行',
                jc: '海口',
                province: '海南',
                jgCODE: "460000000",
                value: [110.3893, 19.8516],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '重庆分行',
                jc: '重庆',
                province: '重庆',
                jgCODE: "500000000",
                value: [108.384366, 30.439702],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '四川分行',
                jc: '成都',
                province: '四川',
                jgCODE: "510000000",
                value: [103.9526, 30.7617],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '贵州分行',
                jc: '贵阳',
                province: '贵州',
                jgCODE: "520000000",
                value: [106.6992, 26.7682],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '云南分行',
                jc: '昆明',
                province: '云南',
                jgCODE: "530000000",
                value: [102.9199, 25.4663],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '西藏分行',
                jc: '拉萨',
                province: '西藏',
                jgCODE: "540000000",
                value: [91.11, 29.97],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '陕西分行',
                jc: '西安',
                province: '陕西',
                jgCODE: "610000000",
                value: [109.1162, 34.2004],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '甘肃分行',
                jc: '兰州',
                province: '甘肃',
                jgCODE: "620000000",
                value: [103.5901, 36.3043],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '青海分行',
                jc: '西宁',
                province: '青海',
                jgCODE: "630000000",
                value: [101.4038, 36.8207],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '宁夏分行',
                jc: '银川',
                province: '宁夏',
                jgCODE: "640000000",
                value: [106.3586, 38.1775],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }, {
                name: '新疆分行',
                jc: '乌鲁木齐',
                province: '新疆',
                jgCODE: "650000000",
                value: [87.9236, 43.5883],
                a: 0,
                b: 0,
                c: 0,
                itemStyle: {}
            }]
        },
    ]
};
myChart.setOption(option);
// tooltip轮播
var count = 0;
var timeTicket = null;
var dataLength = 39; //此处设置的是需要轮播的次数 也就是data的长度
timeTicket && clearInterval(timeTicket);
timeTicket = setInterval(function() {
    // 展示提示框
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 1,
        dataIndex: (count) % dataLength
    });
    // 取消高亮的点
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 1,
        dataIndex: ((count) % dataLength - 1 == -1) ? (dataLength - 1) : ((count) % dataLength - 1)
    });
    // 高亮当前的城市
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 1,
        dataIndex: (count) % dataLength
    });
    count++;
}, 2000);
// 点击散列点显示该点提示框，显示5秒 ，5秒后再次进行轮播
myChart.on('click', function(params) {

    if (params.componentSubType === "scatter") {
        // 清除定时器
        clearInterval(timeTicket)
        // 展示指定提示框
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 1,
            dataIndex: params.dataIndex
        });
        // 取消所有高亮的点
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 1,
        });
        // 高亮当前的城市
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 1,
            dataIndex: params.dataIndex
        });
        //再次轮播  提示框展示5秒
        setTimeout(() => {
            // 取消所有高亮的点
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 1,
            });
            clearInterval(timeTicket);
            timeTicket = setInterval(function() {
                // 展示提示框
                myChart.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 1,
                    dataIndex: (count) % dataLength
                });
                // 取消高亮的点
                myChart.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 1,
                    dataIndex: ((count) % dataLength - 1 == -1) ? (dataLength - 1) : ((count) % dataLength - 1)
                });
                // 高亮当前的城市
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 1,
                    dataIndex: (count) % dataLength
                });
                count++;
            }, 2000);
        }, 5000);

    }
})