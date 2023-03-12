/**
此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，来达到hover散点和区域显示tooltip的效果

默认情况下，map series 会自己生成内部专用的 geo 组件。但是也可以用这个 geoIndex 指定一个 geo 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
当设定了 geoIndex 后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。

http://echarts.baidu.com/option.html#series-map.geoIndex

并且加了pin气泡图标以示数值大小
*/

var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('china', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
    "台湾": [121.5135,25.0308],
    "黑龙江": [127.9688, 45.368],
    "内蒙古": [110.3467, 41.4899],
    "吉林": [125.8154, 44.2584],
    "北京": [116.4551, 40.2539],
    "辽宁": [123.1238, 42.1216],
    "河北": [114.4995, 38.1006],
    "天津": [117.4219, 39.4189],
    "山西": [112.3352, 37.9413],
    "陕西": [109.1162, 34.2004],
    "甘肃": [103.5901, 36.3043],
    "宁夏": [106.3586, 38.1775],
    "新疆": [87.9236, 43.5883],
    "四川": [103.9526, 30.7617],
    "重庆": [108.384366, 30.439702],
    "安徽": [117.29, 32.0581],
    "湖北": [114.3896, 30.6628],
    "江西": [116.0046, 28.6633],
    "湖南": [113.0823, 28.2568],
    "贵州": [106.6992, 26.7682],
    "云南": [102.9199, 25.4663],
    "广西": [108.479, 23.1152],
    "海南": [110.3893, 19.8516],
    "上海": [121.4648, 31.2891],
    "深圳": [114.035986,22.619675],
    "广州": [113.266255,23.144907],
    "嘉兴": [120.763549,30.780763],
    "苏州": [120.601036,31.320348],
    "东莞": [113.749219,23.052849],
    "鲁东": [120.380259,36.100227],
    "无锡": [120.343303,31.577105],
    "香港": [114.192449,22.303751],
    "宁波": [121.626245,29.888116],
    "沈阳": [123.489492,41.684261],
    "鲁中": [118.058005,36.831102],
    "粤西": [110.335658,21.271874],
    "冀北": [118.168641,39.656586],
    "常州": [119.972285,31.831995],
    "济南": [117.090179,36.678323],
    "苏北": [117.257804,34.230815],
    "南京": [118.805871,32.048984],
    "厦门": [118.047567,24.532228],
    "佛山": [113.125059,23.041594],
    "南通": [120.955058,32.036517],
    "温州": [120.682333,28.00823],
    "福州": [119.330491,26.096524],
    "金华": [119.656891,29.078074],
    "大连": [121.532516,38.953529],
    "惠州": [114.439083,23.141883],
    "台州": [121.387763,28.632269],
    "潮州": [116.653459,23.405795],

    };

   var data =[ 
    {name:"上海",value:[1971,799]},
    {name:"深圳",value:[2540,725]},
    {name:"广州",value:[3537,727]},
    {name:"嘉兴",value:[1373,587]},
    {name:"北京",value:[2435,824]},
    {name:"苏州",value:[1382,316]},
    {name:"东莞",value:[3708,331]},
    {name:"安徽",value:[1349,378]},
    {name:"河南",value:[218,616]},
    {name:"鲁东",value:[1017,335]},
    {name:"无锡",value:[970,194]},
    {name:"香港",value:[0,4]},
    {name:"湖北",value:[807,427]},
    {name:"四川",value:[686,243]},
    {name:"冀州",value:[1420,387]},
    {name:"宁波",value:[523,199]},
    {name:"重庆",value:[796,298]},
    {name:"沈阳",value:[85,129]},
    {name:"鲁中",value:[914,278]},
    {name:"湖南",value:[908,425]},
    {name:"粤西",value:[2083,401]},
    {name:"冀北",value:[1010,297]},
    {name:"常州",value:[749,174]},
    {name:"台湾",value:[0,3]},
    {name:"济南",value:[1083,340]},
    {name:"苏北",value:[562,142]},
    {name:"南京",value:[427,236]},
    {name:"天津",value:[643,223]},
    {name:"厦门",value:[174,199]},
    {name:"佛山",value:[2162,304]},
    {name:"江西",value:[925,286]},
    {name:"南通",value:[602,140]},
    {name:"温州",value:[457,163]},
    {name:"福州",value:[105,208]},
    {name:"金华",value:[610,164]},
    {name:"大连",value:[34,129]},
    {name:"陕西",value:[751,331]},
    {name:"山西",value:[710,241]},
    {name:"泉州",value:[103,165]},
    {name:"广西",value:[600,153]},
    {name:"惠州",value:[1304,196]},
    {name:"贵州",value:[563,157]},
    {name:"台州",value:[451,97]},
    {name:"甘肃",value:[63,206]},
    {name:"黑龙江",value:[77,255]},
    {name:"吉林",value:[44,172]},
    {name:"新疆",value:[31,107]},
    {name:"云南",value:[960,178]},
    {name:"内蒙古",value:[679,169]},
    {name:"潮汕",value:[938,179]},
    {name:"宁夏",value:[25,58]},
    {name:"海南",value:[71,37]},
];

var dataTip = {
    "上海":[7988713,1971],
    "深圳":[7252604,2540],
    "广州":[7267976,3537],
    "浙北":[5870774,1373],
    "北京":[8240406,2435],
    "苏州":[3164278,1382],
    "东莞":[3312126,3708],
    "安徽":[3782236,1349],
    "河南":[6164066,218],
    "鲁东":[3347209,1017],
    "无锡":[1938866,970],
    "香港":[35306,0],
    "湖北":[4269545,807],
    "四川":[2427909,686],
    "冀州":[3867576,1420],
    "宁波":[1986092,523],
    "重庆":[2978449,796],
    "沈阳":[1292797,85],
    "鲁中":[2782450,914],
    "湖南":[4252522,908],
    "粤西":[4011188,2083],
    "冀北":[2965387,1010],
    "常州":[1735810,749],
    "台湾":[25570,0],
    "济南":[3401604,1083],
    "苏北":[1423497,562],
    "南京":[2359532,427],
    "天津":[2234460,643],
    "厦门":[1988165,174],
    "佛山":[3036984,2162],
    "江西":[2859500,925],
    "南通":[1401500,602],
    "温州":[1634925,457],
    "福州":[2084626,105],
    "金华":[1643294,610],
    "大连":[1293140,34],
    "陕西":[3305041,751],
    "山西":[2412463,710],
    "泉州":[1645996,103],
    "广西":[1533481,600],
    "惠州":[1956598,1304],
    "贵州":[1568481,563],
    "台州":[967488,451],
    "甘肃":[2063628,63],
    "黑龙江":[2550171,77],
    "吉林":[1715446,44],
    "新疆":[1072841,31],
    "云南":[1775509,960],
    "内蒙古":[1688287,679],
    "潮汕":[1787795,938],
    "宁夏":[583539,25],
    "海南":[374579,71],
    }
    var max = 480, min = 9; // todo
    var maxSize4Pin = 100, minSize4Pin = 20;

    var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(Math.round(data[i].value[0]),data[i].value[1])
            });
        }
    }
    return res;
    };



    option = {
        backgroundColor: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [{
            offset: 0, color: '#0f378f' // 0% 处的颜色
        }, {
            offset: 1, color: '#00091a' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    },
        title: {
            top:20,
            text: '速运地区作战地图',
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#ccc'
            }
        },

       tooltip: {
            trigger: 'item',
            formatter: function (params) {
              if(typeof(params.value)[2] == "undefined"){
               return params.name + ' : ' + params.value;
              }else{
               return params.name + '总客户数:' + Math.round(dataTip[params.name][0]/10000) + '万 服务客户数:' + dataTip[params.name][1] +
               ' 渗透率:' +  (dataTip[params.name][1]*100/dataTip[params.name][0]).toFixed(3) + '%';
              }
            }
        },
     /*   legend: {
            orient: 'vertical',
            y: 'bottom',
            x: 'right',
             data:['pm2.5'],
            textStyle: {
                color: '#fff'
            }
        },*/
            legend: {
        orient: 'vertical',
        y: 'bottom',
        x:'right',
        data:['pm2.5'],
        textStyle: {
            color: '#fff'
        }
    },
        visualMap: {
            show: false,
            min: 0,
            max: 500,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true,
            seriesIndex: [1],
            inRange: {

            }
        },
        geo: {
            map: 'china',
            show: true,
            roam: true,
            label: {
    normal: {
     show: false
    },
    emphasis: {
     show: false,
    }
   },
            itemStyle: {
                normal: {
                    areaColor: '#3a7fd5',
                    borderColor: '#0a53e9',//线
                    shadowColor: '#092f8f',//外发光
                    shadowBlur: 20
                },
     emphasis: {
                    areaColor: '#0a2dae',//悬浮区背景
                }
            }
        },
        series : [
      {

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
            itemStyle: {
                normal: {
                    color: '#fff'
                }
            },
            name: 'light',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),

        },
         {
            type: 'map',
            map: 'china',
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#031525',
                    borderColor: '#FFFFFF',
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            },
            animation: false,
            data: data
        },
        {
            name: 'Top 5',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin',
            symbolSize: [50,50],
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 9,
                    },
                    formatter (value){
                        return value.data.value[2]
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#D2BB93', //标志颜色
                }
            },
            data: convertData(data),
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            zlevel: 1
        },

    ]
    };
    myChart.setOption(option);
});

