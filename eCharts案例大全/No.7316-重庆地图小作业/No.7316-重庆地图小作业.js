var uploadedDataURL = "/asset/get/s/data-1592148024428-_sX96TMKH.json";

//var uploadedDataURL = "/asset/get/s/data-1592147823275-ngLluAver.json";

//var uploadedDataURL = "/asset/get/s/data-1592146914563-fTAtoYjiu.json";

//var uploadedDataURL = "/asset/get/s/data-1592145838855-UV9kCYzia.json";

//var uploadedDataURL = "/asset/get/s/data-1592145838855-UV9kCYzia.json";

//var uploadedDataURL = "/asset/get/s/data-1592127667182-CnZpFnmp-.json";



/**
此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，
来达到hover散点和区域显示tooltip的效果

默认情况下，map series 会自己生成内部专用的 geo 组件。
但是也可以用这个 geoIndex 指定一个 geo 组件。
这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。
并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
当设定了 geoIndex 后，series-map.map 属性，
以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。

http://echarts.baidu.com/option.html#series-map.geoIndex

并且加了pin气泡图标以示数值大小
*/
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    console.log(geoJson);
    echarts.registerMap('重庆市', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
        '教委':[105.501708984375,30.854937397596693],
        '重庆市':[106.56288, 29.556742],
        // '涪陵区':[107.394905, 29.703652],
        // '万州区':[108.380246, 30.807807],
        // '渝中区':[106.56288, 29.556742],
        // '大渡口区':[106.48613, 29.481002],
        // '江北区':[106.532844, 29.575352],
        // '沙坪坝区':[106.4542, 29.541224],
        // '九龙坡区':[106.480989, 29.523492],
        // '南岸区':[106.560813, 29.523992],
        // '北碚区':[106.437868, 29.82543],
        '綦江区':[106.651417, 29.028091],
        //'渝北区':[106.512851, 29.601451],
        '大足区':[105.715319, 29.700498],
        '巴南区':[106.519423, 29.381919],
        '黔江区':[108.782577, 29.527548],
       // '长寿区':[107.074854, 29.833671],
        '江津区':[106.253156, 29.283387],
        '合川区':[106.265554, 29.990993],
        '永川区':[105.894714, 29.348748],
        '南川区':[107.098153, 29.156646],
        '璧山区':[106.231126, 29.593581],
        '铜梁区':[106.054948, 29.839944],
        '潼南区':[105.841818, 30.189554],
        '荣昌区':[105.594061, 29.403627],
        '开州区':[108.413317, 31.167735],
        '梁平区':[107.800034, 30.672168],
        '武隆区':[107.75655, 29.32376],
        '城口县':[108.6649, 31.946293],
        '丰都县':[107.73248, 29.866424],
        '垫江县':[107.348692, 30.330012],
        '忠县':[108.037518, 30.291537],
        '云阳县':[108.697698, 30.930529],
        '奉节县':[109.465774, 31.019967],
        '巫山县':[109.878928, 31.074843],
        '巫溪县':[109.628912, 31.3966],
        '石柱土家族自治县':[108.112448, 29.99853],
        '秀山土家族苗族自治县':[108.996043, 28.444772],
        '酉阳土家族苗族自治县':[108.767201, 28.839828],
        '彭水苗族土家族自治县':[108.166551, 29.293856],
        
    };
    var moveLine = {
    'normal':[
    {"fromName":"教委","toName":"重庆市",'coords':[[105.501708984375,30.854937397596693],[106.56288, 29.556742],]},
        
   /* {"fromName":"教委","toName":"涪陵区",'coords':[[105.501708984375,30.854937397596693],[107.394905, 29.703652],]},
    {"fromName":"教委","toName":"万州区",'coords':[[105.501708984375,30.854937397596693],[108.380246, 30.807807],]},
    {"fromName":"教委","toName":"渝中区",'coords':[[105.501708984375,30.854937397596693],[106.56288, 29.556742],]},
    {"fromName":"教委","toName":"大渡口区",'coords':[[105.501708984375,30.854937397596693],[106.48613, 29.481002],]},
    {"fromName":"教委","toName":"江北区",'coords':[[105.501708984375,30.854937397596693],[106.532844, 29.575352],]},
    
    {"fromName":"教委","toName":"沙坪坝区",'coords':[[105.501708984375,30.854937397596693],[106.4542, 29.541224],]},
    {"fromName":"教委","toName":"九龙坡区",'coords':[[105.501708984375,30.854937397596693],[106.480989, 29.523492],]},
    {"fromName":"教委","toName":"南岸区",'coords':[[105.501708984375,30.854937397596693],[106.560813, 29.523992],]},
    {"fromName":"教委","toName":"北碚区",'coords':[[105.501708984375,30.854937397596693],[106.437868, 29.82543],]}, 
    */{"fromName":"教委","toName":"綦江区",'coords':[[105.501708984375,30.854937397596693],[106.651417, 29.028091],]},
   // {"fromName":"教委","toName":"渝北区",'coords':[[105.501708984375,30.854937397596693],[106.512851, 29.601451],]},
    {"fromName":"教委","toName":"大足区",'coords':[[105.501708984375,30.854937397596693],[105.715319, 29.700498],]},
    {"fromName":"教委","toName":"巴南区",'coords':[[105.501708984375,30.854937397596693],[106.519423, 29.381919],]},
    {"fromName":"教委","toName":"黔江区",'coords':[[105.501708984375,30.854937397596693],[108.782577, 29.527548],]},
    //{"fromName":"教委","toName":"长寿区",'coords':[[105.501708984375,30.854937397596693],[107.074854, 29.833671],]},
    {"fromName":"教委","toName":"江津区",'coords':[[105.501708984375,30.854937397596693],[106.253156, 29.283387],]},
    {"fromName":"教委","toName":"合川区",'coords':[[105.501708984375,30.854937397596693],[106.265554, 29.990993],]},
    
    {"fromName":"教委","toName":"永川区",'coords':[[105.501708984375,30.854937397596693],[105.894714, 29.348748],]},
    {"fromName":"教委","toName":"南川区",'coords':[[105.501708984375,30.854937397596693],[107.098153, 29.156646],]},
   {"fromName":"教委","toName":"璧山区",'coords':[[105.501708984375,30.854937397596693],[106.231126, 29.593581],]},
   {"fromName":"教委","toName":"铜梁区",'coords':[[105.501708984375,30.854937397596693],[106.054948, 29.839944],]},
   {"fromName":"教委","toName":"潼南区",'coords':[[105.501708984375,30.854937397596693],[105.841818, 30.189554],]},
   {"fromName":"教委","toName":"荣昌区",'coords':[[105.501708984375,30.854937397596693],[105.594061, 29.403627],]},
   {"fromName":"教委","toName":"开州区",'coords':[[105.501708984375,30.854937397596693],[108.413317, 31.167735],]},
   {"fromName":"教委","toName":"梁平区",'coords':[[105.501708984375,30.854937397596693],[107.800034, 30.672168],]},
   {"fromName":"教委","toName":"武隆区",'coords':[[105.501708984375,30.854937397596693],[107.75655, 29.32376],]},
   {"fromName":"教委","toName":"城口县",'coords':[[105.501708984375,30.854937397596693],[108.6649, 31.946293],]},
   {"fromName":"教委","toName":"丰都县",'coords':[[105.501708984375,30.854937397596693],[107.73248, 29.866424],]},
   {"fromName":"教委","toName":"垫江县",'coords':[[105.501708984375,30.854937397596693],[107.348692, 30.330012],]},
   {"fromName":"教委","toName":"忠县",'coords':[[105.501708984375,30.854937397596693],[108.037518, 30.291537],]},
   {"fromName":"教委","toName":"云阳县",'coords':[[105.501708984375,30.854937397596693],[108.697698, 30.930529],]},
   {"fromName":"教委","toName":"奉节县",'coords':[[105.501708984375,30.854937397596693],[109.465774, 31.019967],]},
   {"fromName":"教委","toName":"巫山县",'coords':[[105.501708984375,30.854937397596693],[109.878928, 31.074843],]},
   {"fromName":"教委","toName":"巫溪县",'coords':[[105.501708984375,30.854937397596693],[109.628912, 31.3966],]},
   {"fromName":"教委","toName":"石柱土家族自治县",'coords':[[105.501708984375,30.854937397596693],[108.112448, 29.99853],]},
   {"fromName":"教委","toName":"秀山土家族苗族自治县",'coords':[[105.501708984375,30.854937397596693],[108.996043, 28.444772],]},
   {"fromName":"教委","toName":"酉阳土家族苗族自治县",'coords':[[105.501708984375,30.854937397596693],[108.767201, 28.839828],]},
   {"fromName":"教委","toName":"彭水苗族土家族自治县",'coords':[[105.501708984375,30.854937397596693],[108.166551, 29.293856],]},
    
    
    
    
    
    ],
    'warning':[
    
    ]
    };
    var data = [
        {name:'教委',value:190},
        {name:'重庆市',value:190},
       /* {name:'涪陵区',value:190},
        {name:'万州区',value:190},
        {name:'渝中区',value:190},
        {name:'大渡口区',value:190},
        {name:'江北区',value:90},
        
        
        {name:'沙坪坝区',value:190},
        {name:'九龙坡区',value:190},
        {name:'南岸区',value:190},
        {name:'北碚区',value:190},
        */{name:'綦江区',value:190},
        //{name:'渝北区',value:190},
        {name:'大足区',value:190},
        {name:'巴南区',value:190},
        {name:'黔江区',value:190},
        //{name:'长寿区',value:190},
        {name:'江津区',value:190},
        {name:'合川区',value:190},
        {name:'永川区',value:190},
        {name:'南川区',value:190},
        {name:'璧山区',value:190},
        {name:'铜梁区',value:190},
        {name:'潼南区',value:190},
        {name:'荣昌区',value:190},
        {name:'开州区',value:190},
        {name:'梁平区',value:190},
        {name:'武隆区',value:190},
        {name:'城口县',value:190},
        {name:'丰都县',value:190},
        {name:'垫江县',value:190},
        {name:'忠县',value:190},
        {name:'云阳县',value:190},
        {name:'奉节县',value:190},
        {name:'巫山县',value:190},
        {name:'巫溪县',value:190},
        {name:'石柱土家族自治县',value:190},
        {name:'秀山土家族苗族自治县',value:190},
        {name:'酉阳土家族苗族自治县',value:190},
        {name:'彭水苗族土家族自治县',value:190},
       
    ];
    var max = 480, min = 9; // todo 
    var maxSize4Pin = 100, minSize4Pin = 20;

  var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};


    option = {
        backgroundColor: '#091c3d',
        title: {
            top:20,
            text: '',
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
              	return params.name + ' : ' + params.value[2];
              }
            }
        },
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
                // color: ['#3B5077', '#031525'] // 蓝黑
                // color: ['#ffc0cb', '#800080'] // 红紫
                // color: ['#3C3B3F', '#605C3C'] // 黑绿
                //color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
                 //color: ['#23074d', '#cc5333'] // 紫红
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#1488CC', '#2B32B2'] // 浅蓝
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿
                // color: ['#00467F', '#A5CC82'] // 蓝绿

            }
        },
        // toolbox: {
        //     show: true,
        //     orient: 'vertical',
        //     left: 'right',
        //     top: 'center',
        //     feature: {
        //             dataView: {readOnly: false},
        //             restore: {},
        //             saveAsImage: {}
        //             }
        // },
        geo: {
            show: true,
            map: '重庆市',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: 'transparent',
                    borderColor: '#3fdaff',
                    borderWidth: 2,
                    shadowColor: 'rgba(63, 218, 255, 0.5)',
                    shadowBlur: 30
                },
                emphasis: {
                    areaColor: '#2B91B7',
                }
            }
        },
        series : [
      {
            name: 'light',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function (val) {
                return val[2] / 10;
            },
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
                    color: '#F4E925'
                }
            }
        },
         {
            type: 'map',
            map: '重庆市',
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
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 1)),
            symbolSize: function (val) {
                return val[2] / 5;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#F4E925',
                    shadowBlur: 10,
                    shadowColor: '#05C3F9'
                }
            },
            zlevel: 1
        },
         {
        name: '线路',
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 2,
        large: true,
        effect: {
            show: true,
            constantSpeed: 30,
            symbol: 'arrow',//ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: 0,
            trailLength: 0,
        },
        
        lineStyle: {
            normal: {
                color:'#f3f3f3',
                /*
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, color: '#58B3CC'
                    }, {
                        offset: 1, color: '#F58158'
                    }], false),*/
                width: 1,
                opacity: 1.0,
                curveness: 0.5
            }
        },
        data: moveLine.normal
    }/*,
    {
        name: '线路',
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 2,
        large: true,
        effect: {
            show: true,
            constantSpeed: 30,
            symbol: 'arrow',//ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: 10,
            trailLength: 0,
        },
        
        lineStyle: {
            normal: {
                color:'rgb(255, 0, 0)',
                width: 2,
                opacity: 1,
                curveness: 0.15
            }
        },
        data: moveLine.warning
    }*/
         
    ]
    };
    myChart.setOption(option);
});