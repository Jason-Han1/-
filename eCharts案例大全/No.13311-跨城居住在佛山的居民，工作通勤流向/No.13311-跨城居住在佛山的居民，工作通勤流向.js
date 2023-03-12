var uploadedDataURL = "/asset/get/s/data-1531395489903-Syci63NXQ.json";


$.get(uploadedDataURL, function (geoJson) {

    myChart.hideLoading();

    echarts.registerMap('江门市', geoJson);
    
var allData = {
"citys":[
{"name":"禅城区 7.5%","value":[113.048,23.01],"symbolSize":4,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"高明区 0.1%","value":[112.69,22.849],"symbolSize":1,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"南海区 77.3%","value":[113.005,23.122],"symbolSize":13,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"三水区 1.1%","value":[112.904,23.284],"symbolSize":1,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"顺德区 14.0%","value":[113.175,22.847],"symbolSize":6,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"白云区","value":[113.339,23.31],"symbolSize":1,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"从化市","value":[113.574,23.623],"symbolSize":1,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"番禺区","value":[113.384,22.988],"symbolSize":1,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"海珠区","value":[113.309,23.082],"symbolSize":1,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"花都区","value":[113.221,23.478],"symbolSize":1,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"黄埔区","value":[113.475,23.163],"symbolSize":1,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"荔湾区","value":[113.221,23.083],"symbolSize":1,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"南沙区","value":[113.475,22.822],"symbolSize":1,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"天河区","value":[113.358,23.165],"symbolSize":1,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"越秀区","value":[113.271,23.139],"symbolSize":1,"itemStyle":{"normal":{"color":"#F58158"}}},
{"name":"增城市","value":[113.711,23.325],"symbolSize":1,"itemStyle":{"normal":{"color":"#F58158"}}},
],

"moveLines":[
{"fromName":"","toName":"","coords":[[113.048,23.01],[113.339,23.31]]},
{"fromName":"","toName":"","coords":[[113.005,23.122],[113.339,23.31]]},
{"fromName":"","toName":"","coords":[[112.904,23.284],[113.339,23.31]]},
{"fromName":"","toName":"","coords":[[113.175,22.847],[113.339,23.31]]},
{"fromName":"","toName":"","coords":[[113.005,23.122],[113.574,23.623]]},
{"fromName":"","toName":"","coords":[[113.048,23.01],[113.384,22.988]]},
{"fromName":"","toName":"","coords":[[112.69,22.849],[113.384,22.988]]},
{"fromName":"","toName":"","coords":[[113.005,23.122],[113.384,22.988]]},
{"fromName":"","toName":"","coords":[[112.904,23.284],[113.384,22.988]]},
{"fromName":"","toName":"","coords":[[113.175,22.847],[113.384,22.988]]},
{"fromName":"","toName":"","coords":[[113.048,23.01],[113.309,23.082]]},
{"fromName":"","toName":"","coords":[[113.005,23.122],[113.309,23.082]]},
{"fromName":"","toName":"","coords":[[112.904,23.284],[113.309,23.082]]},
{"fromName":"","toName":"","coords":[[113.175,22.847],[113.309,23.082]]},
{"fromName":"","toName":"","coords":[[113.048,23.01],[113.221,23.478]]},
{"fromName":"","toName":"","coords":[[113.005,23.122],[113.221,23.478]]},
{"fromName":"","toName":"","coords":[[112.904,23.284],[113.221,23.478]]},
{"fromName":"","toName":"","coords":[[113.175,22.847],[113.221,23.478]]},
{"fromName":"","toName":"","coords":[[113.048,23.01],[113.475,23.163]]},
{"fromName":"","toName":"","coords":[[113.005,23.122],[113.475,23.163]]},
{"fromName":"","toName":"","coords":[[113.175,22.847],[113.475,23.163]]},
{"fromName":"","toName":"","coords":[[113.048,23.01],[113.221,23.083]]},
{"fromName":"","toName":"","coords":[[113.005,23.122],[113.221,23.083]]},
{"fromName":"","toName":"","coords":[[112.904,23.284],[113.221,23.083]]},
{"fromName":"","toName":"","coords":[[113.175,22.847],[113.221,23.083]]},
{"fromName":"","toName":"","coords":[[113.048,23.01],[113.475,22.822]]},
{"fromName":"","toName":"","coords":[[113.005,23.122],[113.475,22.822]]},
{"fromName":"","toName":"","coords":[[113.175,22.847],[113.475,22.822]]},
{"fromName":"","toName":"","coords":[[113.048,23.01],[113.358,23.165]]},
{"fromName":"","toName":"","coords":[[113.005,23.122],[113.358,23.165]]},
{"fromName":"","toName":"","coords":[[112.904,23.284],[113.358,23.165]]},
{"fromName":"","toName":"","coords":[[113.175,22.847],[113.358,23.165]]},
{"fromName":"","toName":"","coords":[[113.048,23.01],[113.271,23.139]]},
{"fromName":"","toName":"","coords":[[113.005,23.122],[113.271,23.139]]},
{"fromName":"","toName":"","coords":[[112.904,23.284],[113.271,23.139]]},
{"fromName":"","toName":"","coords":[[113.175,22.847],[113.271,23.139]]},
{"fromName":"","toName":"","coords":[[113.048,23.01],[113.711,23.325]]},
{"fromName":"","toName":"","coords":[[113.005,23.122],[113.711,23.325]]},
{"fromName":"","toName":"","coords":[[113.175,22.847],[113.711,23.325]]},
]
};
    
option = {
    backgroundColor: '#404a59',
    title: {
        text: '跨城居住在佛山的居民，工作通勤流向',
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
