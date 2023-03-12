var uploadedDataURL = "/asset/get/s/data-1531395489903-Syci63NXQ.json";


$.get(uploadedDataURL, function (geoJson) {

    myChart.hideLoading();

    echarts.registerMap('江门市', geoJson);
    
var allData = {
"citys":[
{"name":"禅城区","value":[113.048,23.01],"symbolSize":1,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"高明区","value":[112.69,22.849],"symbolSize":1,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"南海区","value":[113.005,23.122],"symbolSize":1,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"三水区","value":[112.904,23.284],"symbolSize":1,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"顺德区","value":[113.175,22.847],"symbolSize":1,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"白云区 21.6%","value":[113.339,23.31],"symbolSize":9,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"从化市 0.0%","value":[113.574,23.623],"symbolSize":1,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"番禺区 18.5%","value":[113.384,22.988],"symbolSize":7,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"海珠区 10.9%","value":[113.309,23.072],"symbolSize":4,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"花都区 4.0%","value":[113.221,23.478],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"黄埔区 1.3%","value":[113.475,23.140],"symbolSize":1,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"荔湾区 24.8%","value":[113.221,23.103],"symbolSize":10,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"南沙区 5.1%","value":[113.475,22.822],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"天河区 6.4%","value":[113.358,23.165],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"越秀区 6.8%","value":[113.271,23.139],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"增城市 0.5%","value":[113.711,23.325],"symbolSize":1,"itemStyle":{"normal":{"color":"#F58158"}}},
],

"moveLines":[
{"fromName":"","toName":"","coords":[[113.339,23.31],[113.048,23.01]]},
{"fromName":"","toName":"","coords":[[113.339,23.31],[112.69,22.849]]},
{"fromName":"","toName":"","coords":[[113.339,23.31],[113.005,23.122]]},
{"fromName":"","toName":"","coords":[[113.339,23.31],[112.904,23.284]]},
{"fromName":"","toName":"","coords":[[113.339,23.31],[113.175,22.847]]},
{"fromName":"","toName":"","coords":[[113.384,22.988],[113.048,23.01]]},
{"fromName":"","toName":"","coords":[[113.384,22.988],[113.005,23.122]]},
{"fromName":"","toName":"","coords":[[113.384,22.988],[112.904,23.284]]},
{"fromName":"","toName":"","coords":[[113.384,22.988],[113.175,22.847]]},
{"fromName":"","toName":"","coords":[[113.309,23.072],[113.048,23.01]]},
{"fromName":"","toName":"","coords":[[113.309,23.072],[113.005,23.122]]},
{"fromName":"","toName":"","coords":[[113.309,23.072],[112.904,23.284]]},
{"fromName":"","toName":"","coords":[[113.309,23.072],[113.175,22.847]]},
{"fromName":"","toName":"","coords":[[113.221,23.478],[113.048,23.01]]},
{"fromName":"","toName":"","coords":[[113.221,23.478],[113.005,23.122]]},
{"fromName":"","toName":"","coords":[[113.221,23.478],[112.904,23.284]]},
{"fromName":"","toName":"","coords":[[113.221,23.478],[113.175,22.847]]},
{"fromName":"","toName":"","coords":[[113.475,23.14],[113.048,23.01]]},
{"fromName":"","toName":"","coords":[[113.475,23.14],[113.005,23.122]]},
{"fromName":"","toName":"","coords":[[113.475,23.14],[112.904,23.284]]},
{"fromName":"","toName":"","coords":[[113.475,23.14],[113.175,22.847]]},
{"fromName":"","toName":"","coords":[[113.221,23.103],[113.048,23.01]]},
{"fromName":"","toName":"","coords":[[113.221,23.103],[113.005,23.122]]},
{"fromName":"","toName":"","coords":[[113.221,23.103],[112.904,23.284]]},
{"fromName":"","toName":"","coords":[[113.221,23.103],[113.175,22.847]]},
{"fromName":"","toName":"","coords":[[113.475,22.822],[113.175,22.847]]},
{"fromName":"","toName":"","coords":[[113.475,22.822],[113.005,23.122]]},
{"fromName":"","toName":"","coords":[[113.358,23.165],[113.048,23.01]]},
{"fromName":"","toName":"","coords":[[113.358,23.165],[113.005,23.122]]},
{"fromName":"","toName":"","coords":[[113.358,23.165],[112.904,23.284]]},
{"fromName":"","toName":"","coords":[[113.358,23.165],[113.175,22.847]]},
{"fromName":"","toName":"","coords":[[113.271,23.139],[113.048,23.01]]},
{"fromName":"","toName":"","coords":[[113.271,23.139],[113.005,23.122]]},
{"fromName":"","toName":"","coords":[[113.271,23.139],[112.904,23.284]]},
{"fromName":"","toName":"","coords":[[113.271,23.139],[113.175,22.847]]},
{"fromName":"","toName":"","coords":[[113.711,23.325],[113.005,23.122]]},
{"fromName":"","toName":"","coords":[[113.711,23.325],[113.175,22.847]]},
]
};
    
option = {
    backgroundColor: '#404a59',
    title: {
        text: '跨城居住在广州的居民，工作通勤流向',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    legend: {
        show: false,
        orient: 'vertical',
        top: 'auto',
        left: 'right',
        data: ['地点', '线路'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: '江门市',
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
        roam: true,
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
            scale:15
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
            symbol: 'pin',//ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: 5,
            trailLength: 0,
        },
        lineStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, color: '#58B3CC'
                    }, {
                        offset: 1, color: '#F58158'
                    }], false),
                width: 1.2,
                opacity: 0.6,
                curveness: 0.2
            }
        },
        data: allData.moveLines
    }]
};
myChart.setOption(option);
});
