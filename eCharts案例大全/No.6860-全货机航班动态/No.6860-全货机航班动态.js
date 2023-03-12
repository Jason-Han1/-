var uploadedDataURL = "/asset/get/s/data-1596589418370-i0oW0darx.jpg";

var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";
var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
var bgIcon = '/asset/get/s/data-1593933762711-IHRMda0Rg.png';

// 郑州 中心点坐标
var city = '郑州';
var zhengzhou = [113.649, 34.7577778];

var geoCoordMap = {
    "郑州": [113.858976, 34.532204],
    "杭州": [120.44332, 30.240977],
    "无锡": [120.439564, 31.508458],
    "泉州": [118.598632, 24.807175],
    "南京": [118.88331, 31.736424],
    "南昌": [115.919301, 28.865286],
    "深圳": [113.821705, 22.638172],
    "新疆": [87.9236, 43.5883],
    "淮安": [119.137859, 33.795129]
};

var geoCoordEMap = {
    "郑州": [113.858976, 34.532204],
    "杭州": [120.44332, 30.240977],
    "无锡": [120.439564, 31.508458],
    "泉州": [118.598632, 24.807175],
    "南京": [118.88331, 31.736424],
    "南昌": [115.919301, 28.865286],
    "深圳": [113.821705, 22.638172],
    "淮安": [119.137859, 33.795129]
};

var geoCoordArray = [
    {
        key: 1,
        start: '杭州',
        end: '郑州',
        route: '杭州-郑州-杭州',
        num: 'O36922/O36989',
        type: 'B733',
        fly: '[19]05:30',
        to: '[19]06:01',
        remark: '公司计划延误'
    },
    {
        key: 2,
        start: '郑州',
        end: '杭州',
        route: '杭州-郑州-杭州',
        num: 'O36990',
        type: 'B733',
        fly: '[19]05:30',
        to: '[19]06:01',
        remark: '公司计划延误'
    },
    {
        key: 3,
        start: '泉州',
        end: '无锡',
        num: 'I99862',
        type: 'B733',
        fly: '[19]05:30',
        to: '[19]06:01',
        remark: '公司计划延误'
    },
    {
        key: 4,
        start: '无锡',
        end: '郑州',
        num: 'I99862',
        type: 'B733',
        fly: '[19]05:30',
        to: '[19]06:01',
        remark: '公司计划延误'
    },
    {
        key: 5,
        start: '南京',
        end: '郑州',
        num: 'CF9092',
        type: 'B733',
        fly: '[19]05:30',
        to: '[19]06:01',
        remark: '公司计划延误'
    },
    {
        key: 6,
        start: '新疆',
        end: '郑州',
        num: 'CF9092',
        type: 'B733',
        fly: '[19]05:30',
        to: '[19]06:01',
        remark: '公司计划延误'
    },
    {
        key: 7,
        start: '南昌',
        end: '郑州',
        num: 'HT3810',
        type: 'B733',
        fly: '[19]05:30',
        to: '[19]06:01',
        remark: '公司计划延误'
    },
    {
        key: 8,
        start: '深圳',
        end: '郑州',
        route: '深圳-郑州',
        num: 'O36879',
        type: 'B733',
        fly: '[19]05:30',
        to: '[19]06:01',
        remark: '公司计划延误'
    },
    {
        key: 9,
        start: '淮安',
        end: '郑州',
        num: 'I99872',
        type: 'B733',
        fly: '[19]05:30',
        to: '[19]06:01',
        remark: '公司计划延误'
    }
];

var geoCoordEArray = [{
    "郑州": [113.858976, 34.532204],
    "杭州": [120.44332, 30.240977]
}, {
    "杭州": [120.44332, 30.240977],
    "郑州": [113.858976, 34.532204],
    "杭州 ": [120.44332, 30.240977]
}, {
    "郑州": [113.858976, 34.532204],
    "无锡": [120.439564, 31.508458],
    "泉州": [118.598632, 24.807175]
}, {
    "郑州": [113.858976, 34.532204],
    "南京": [118.88331, 31.736424]
}, {
    "郑州": [113.858976, 34.532204],
    "南昌": [115.919301, 28.865286]
}, {
    "郑州": [113.858976, 34.532204],
    "深圳": [113.821705, 22.638172]
}, {
    "郑州": [113.858976, 34.532204],
    "淮安": [119.137859, 33.795129]
}];


var colors = ["#FF8C00","#FFFFFF"];
    
$(function() {

	// 基于准备好的dom，初始化echarts实例
    // var myChart = echarts.init(document.getElementById('echartsId'));
    var mapIData = [];

    // 地图数据坐标 航线 组装
    for (var dataItem of geoCoordArray) {
        mapIData.push({
            name: dataItem.start == city ? '': dataItem.start, //城市名称
            value: geoCoordMap[dataItem.start], //城市坐标
            num: dataItem.num, //航班号
            key: dataItem.key, //航班号
            route: dataItem.route,
            type: dataItem.type,
            fly: dataItem.fly,
            to: dataItem.to,
            remark: dataItem.remark,
            coords: [geoCoordMap[dataItem.start], geoCoordMap[dataItem.end]] //航线路径点
        });
    }

    //加载地图
    $.getJSON(uploadedDataURL, function(geoJson) {
        $('body').css({
            'background': 'url(/asset/get/s/data-1596589418370-i0oW0darx.jpg) repeat-y', //'#2a6d87',
            'position': 'fixed',
            'top': 0,
            'left': 0,
            'width': '100%',
            'height': '100%',
            'background-size': 'cover',
            '-webkit-background-size': 'cover',
            '-o-background-size': 'cover',
            'background-position': 'center 0',
            //'writing-mode': 'vertical-rl'
        });

        //注册地图组件
        echarts.registerMap('china', geoJson);

        option = {
            title: {
                text: '全货机航班动态',
                //subtext: '',
                left: 'center',
                top: '1%',
                textStyle: {
                    color: '#fff',
                    fontSize: 32
                }
            },
            tooltip : {
                show: true,
                trigger: 'item',
                triggerOn: 'mousemove|click',
                enterable: true,
                formatter:function(params, ticket, callback){
                    if(params.seriesType=="lines"){
                        return '航线：'+params.data.route+'<br/><hr/>航班：'+params.data.num+'<br/><hr/>机型：'+params.data.type;
                    }else{
                        return params.name;
                    }
                }
            },
            geo: { //地理坐标系组件。
                show: true,
                map: 'china',
                roam: true,
                silent: true,
                zoom: 1,
                left: 'center', //left 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'left', 'center', 'right'
                layoutCenter: ['50%', '50%'],
                center: [113.83531246, 34.0267395887],
                label: {
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(147, 235, 248, 1)',
                        borderWidth: 1,
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                        shadowColor: 'rgba(128, 217, 248, 1)',
                        // shadowColor: 'rgba(255, 255, 255, 1)',
                        shadowOffsetX: -2,
                        shadowOffsetY: 2,
                        shadowBlur: 10
                    },
                    emphasis: {
                        areaColor: '#389BB7',
                        borderWidth: 0
                    }
                }
            },
            // 多彩色线条样式 -- 屏蔽后为白色
            // visualMap: {
            //     min: 0,
            //     max: 20,
            //     left: 'left',
            //     top: 'bottom',
            //     text: ['高', '低'],
            //     textStyle:{
            //         color:'white'
            //     },
            //     calculable: true,
            //     colorLightness: [0.8, 100],
            //     color: ['#c05050','#e5cf0d','#5ab1ef'],
            //     dimension: 3
            // },
            series: [
                    //地图点的动画效果
                    {
                        //  name: 'Top 5',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        effectType: 'ripple',
                        zlevel: 1,
                        symbolSize: 6,
                        showEffectOn: 'render',
                        rippleEffect: { //涟漪特效
        					period: 4, //动画时间，值越小速度越快
        					brushType: 'stroke', //波纹绘制方式 stroke, fill
        					scale: 4 //波纹圆环最大限制，值越大波纹越大
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                fontSize: 14,
                                fontWeight: 'bold',
                                position: 'right',
                                show: true,
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: colors[0],
                                shadowBlur: 10,
                                shadowColor: colors[0]
                            }
                        },
                        data: mapIData
                    },
        			//被攻击点
        			{
        				type: 'scatter',
        				coordinateSystem: 'geo',
        				zlevel: 2,
        				rippleEffect: {
        					period: 4,
        					brushType: 'stroke',
        					scale: 4
        				},
        				label: {
        					normal: {
                                "show": true,
                                position: 'right',
                                formatter: function(params) {
                                    return '{div|'+city+'}'
                                },
                                verticalAlign: "bottom",
                                rich: {
                                    div: {
                                        height: 28,
                                        fontSize: 14,
                                        lineHeight: 8,
                                        //疑似 下 右 上 左
                                        padding: [3, -10, 3, 10],
                                        color: "#FFFFFF",
                                        backgroundColor: {
                                            image: bgIcon
                                        }
                                    }
                                }
        					},
        					emphasis: {
        						show: true
        					}
        				},
        				symbol: 'pin',  //ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
        				symbolSize: 40,
						color: "#00BFFF",
        				data: [{
        					value: zhengzhou
        				}],
        			},
                    //地图线的动画效果
                    {
                        type: 'lines',
                        zlevel: 2,
                        // polyline:true,
                        effect: {
                            show: true,
                            period: 12, //箭头指向速度，值越小速度越快
                            trailLength: 0, //特效尾迹长度[0,1]值越大，尾迹越长重
                            symbol: planePath, //箭头图标
                            symbolSize: 12, //图标大小
                            color: '#64f2ff'
                        },
                        lineStyle: {
                            normal: {
                                color: colors[1],
                                width: 2, //线宽。
                                type: 'solid', //线的类型。可选：'solid'，'dashed'，'dotted'
                                opacity: 0.8, //线条透明度
                                curveness: 0 //线条曲直度 0 - 0.01
                            }
                        },
                        label: {
                            show: true,
                            position: 'middle',
                            verticalAlign: 'middle',
                            formatter: function(params) {
                                return params.data.num
                            }
                        },
                        data: mapIData
                    }
                ]
        };

        myChart.setOption(option);
                
        // 航线 点击 效果
        // myChart.on('click', 'series.lines', function () {
        //     //alert(11111);
        //     // series name 为 'uuu' 的系列中的图形元素被 'mouseover' 时，此方法被回调。
        // });
        
        myChart.resize();
    });
});