var uploadedDataURL = "/asset/get/s/data-1495075608240-HyemsKqxW.json";


$.get(uploadedDataURL, function (geoJson) {

    myChart.hideLoading();

    echarts.registerMap('孝感市', geoJson);
    
var allData = {
"citys":[
{"name":"孝南区 鄂K 00000","value":[113.925849,30.925966],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"孝昌县 5%","value":[113.988964,31.251618],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"大悟县 5%","value":[114.126249,31.565483],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"云梦县 50%","value":[113.750616,31.021691],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"应城市 20%","value":[113.573842,30.939038],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"安陆市 5%","value":[113.690401,31.26174],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"汉川市 10%","value":[113.835301,30.652165],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
],

"moveLines":[
{"fromName":"孝南区","toName":"孝昌县","coords":[[113.925849,30.925966],[113.988964,31.251618]]},
{"fromName":"孝南区","toName":"大悟县","coords":[[113.925849,30.925966],[114.126249,31.565483]]},
{"fromName":"孝南区","toName":"云梦县","coords":[[113.925849,30.925966],[113.750616,31.021691]]},
{"fromName":"孝南区","toName":"应城市","coords":[[113.925849,30.925966],[113.573842,30.939038]]},
{"fromName":"孝南区","toName":"安陆市","coords":[[113.925849,30.925966],[113.690401,31.26174]]},
{"fromName":"孝南区","toName":"汉川市","coords":[[113.925849,30.925966],[113.835301,30.652165]]},
]

};
    
option = {
    backgroundColor: '#404a59',
    title: {
        text: '孝感市卡口数据研判',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    legend: {
        show: true,
        orient: 'vertical',
        top: 'auto',
        left: 'right',
        data: ['地点', '线路'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: '孝感市',
        label: {
            //normal:{
                //show: true,
                //textStyle:{
                    //color:'#fff',
                //}
            //},
            emphasis: {
                show: false,
                    textStyle:{
                    color:'#fff',
                }
            }
        },
        roam: false,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#404a59'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [{
        name: '地点',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 1,
        rippleEffect: {
            brushType: 'stroke',
            period:7,
            scale:26
        },
        label: {
            normal:
            {
                show : true,
                position:'right',
                formatter:'{b}'
            },
            emphasis: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: 2,
        showEffectOn: 'render',
        itemStyle: {
            normal: {
                color: '#46bee9'
            }
        },
        data: allData.citys
    }, {
        name: '线路',
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 2,
        large: true,
        effect: {
            show: true,
            constantSpeed: 50,
            symbol: 'arrow',//ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: 10,
            trailLength: 0,
        },
        lineStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, color: '#58B3CC'
                    }, {
                        offset: 1, color: '#F58158'
                    }], false),
                width: 2,
                opacity: 0.6,
                curveness: 0.2
            }
        },
        data: allData.moveLines
    }]
};
myChart.setOption(option);
});
