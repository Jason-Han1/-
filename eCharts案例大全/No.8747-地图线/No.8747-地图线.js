var uploadedDataURL = "/asset/get/s/data-1577929263585-7iWLUl9L.json";
var symbolPower ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAATCAYAAABlcqYFAAADKUlEQVQ4jaWVz2tcVRTHP/fHe/MjidM0MW1MaFVocFo1SJVKaSViFi7diHZR0E3/iO79P9y5EMSVgrgJqCCioMFgRSVNxoxjOml+dDLz3rvvni7efXVGoyT4hcPlce8933PO97xz1fJiDUABOpgJ36UdFxLMB8vDig2OLVADxoBxoApEYe+4yIEMOAQeAD0gAbKSpAZMA08As0AjEBGikaFsTQjK/C0IBxwA94BNYAu4D+Tl4Qlg/oXnnlyePTP5Upq6hogYpZTTWmdK4QElIjbPfdXlvu69VMX7WAoipZTKrNH7tWrcXv1p85PWVvdLYAD0S5LHgPPPN8+//uq1Sy+eoERH4dLO+5/1WlvddeBPYLckGQNmBkl6GqDduc/Hn36TRNZsR7HtGq37ImJc7sezzM1cu/LM1MWFeQDWfm6xurbBW29cfcQySLL5UP4qoGyodQxMuNzXAQ56A77+7pc41HgD2As6nAbqv653pt67fQNrNBeemkWp0SZ0uZ+kaKAIUDqQGCAWL9HQWRUclx48hbhpZ3uPz1d+ACCKDM0LcyMk4qXCUHfao4ramKizdPUi1prpSiXy1uhDQHkvlSR1jTTN2Ns/RET+kcVRGCGREPWZxxu88/YSwGSw/4URElX8D7TaO3zw0RdYa9pxbH+3xhwIon0utTRzZ7PMnZsYr3Hr5jJanzATAslhP+HHOy2AXaAVVh2yagC8e2PpWASEi0IxEhKlVTa0lwYrZ5CE8+bc3DTXrzQB6A9Svv3+t1GnWg2G7mLD5QTYj6x5AIXwr11/1kWRnYojq43RAxExzuX1NHOnXr688CiL9Y1t7rbucXnx6b/KY02Xov0zQGxg6wGdajXegUL4m2++UgfqwPx/laK5MEdzYbSFq5VoE9imGCtiKXp/D1hf+Wrtw9W1jTuZc6dEsErhtNZJKJcSkch7qeW5H/MiNfESC2IApZVKjdG7lTjautvaXqHQsgd4tbxYK8fKJHAWmKGYZZUQ2L9N4fL9KeGC0y7QBv4IwfdtcNIfWjuBYPhvPw48hQZJIOtTiO9L4TMKbfoUb8BJnA9DGH0hBeAh8Ok8qebAi8UAAAAASUVORK5CYII=';
var powerImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAALCAYAAAByF90EAAAAyklEQVQokaXSoUsDYQCG8d/kULAMBkaLxWwThg6WVl00GawzDIMbC7ZZBts/MJaWbFctgysz2TVeGGhdGQbDTji249i4B77wfvA+vPB9pTAM73CoGIsAQ5QLiqIgFXqY71A6wQMu05dp0QfecgSneMQ9jhHhGzdwsMOCc4zxhRZmuMYV3rMWbXKBLppJfkU/Wb5FlqiGJzSwwgQv+MybnRbV0UEVS+vXHCDOE2SJ2vjFFCP8WP+vs5x+JUv0n2+TsxcBnnG0b3GD+A95NCBnsOTeXgAAAABJRU5ErkJggg==';
var option = null;
var data = [];
var province = [
    "西藏",
];
var geoCoordMap = {
    西藏: [91.11, 30.97],
    上海: [121.48, 31.22],
    福建: [118.1, 27.46],
    浙江: [119.96, 29.86],
    广东: [113.23, 24.16],
    山西: [112.53, 38.87],
    云南: [101.73, 25.04],
    辽宁: [123.38, 42.8],
    吉林: [125.35, 44.88],
    江西: [115.89, 28.68],
    海南: [109.51, 20.25],
    广西: [108.74, 24.16],
    内蒙古: [111.65, 42.42],
    四川: [104.06, 31.67],
    陕西: [108.95, 35.27],
    江苏: [119.78, 33.04],
    贵州: [106.71, 27.57],
    北京: [116.46, 41.92],
    新疆: [86.68, 41.77],
    山东: [118, 36.65],
    甘肃: [103.73, 37.03],
    天津: [117.2, 40.13],
    河南: [113.65, 34.76],
    黑龙江: [127.63, 47.75],
    河北: [115.48, 40.03],
    湖南: [112, 28.21],
    安徽: [117.27, 32.86],
    湖北: [112.31, 31.52],
    青海: [97.31, 37.03],
    重庆: [107.31, 30.52],
    宁夏: [106.31, 38.52]
};
var gdp = [
    [113.879249,23.413066,113.361825,22.416307],
];
$.get(uploadedDataURL, function (geoJson) {

    myChart.hideLoading();

    echarts.registerMap('江门市', geoJson);
    
var allData = {
"citys":[
    {"name":"a","value":[113.399707,22.751756]},
    {"name":"b","value":[112.978351,22.356635]},

],
"moveLines":[
    {coords: [[113.338988,22.762689],[112.925176,22.387704]]}, 
    {coords: [[113.483875,22.759356],[113.026649,22.32326]]}, 
    ],
"powerList":[
    {name: 'a',value: [113.106912,22.610955]},
    // {name: 'a',value: [113.039144,22.577736]},
    ],
 "powerList2":[
    {name: 'b',value: [113.66635,23.248939]},
    // {name: 'b',value: [113.039144,22.577736]},
    ],   
    // "section":[
    //     {coords: [[113.879249,23.413066],[113.361825,22.416307]]},
        
    //     ]
};
for (var i = 0; i < province.length; i++) {
    data.push({
        name: province[i],
        value: [
             {
                    value: 34,
                    itemStyle: {
                        normal:{
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: '#f6e3a1'
                        }, {
                            offset: 1,
                            color: '#ff4236'
                        }]),  
                        },
                    },
                    label: {
                        show:false,
                        // color: "rgb(8,218,28)",
                        // fontSize: 14,
                    }
                },
                {
                    value: 52,
                    name: 'rose2',
                    itemStyle: {
                        color: "raba(0,0,0,0)",
                        emphasis: {
                        label: {
                            show: false
                        }
                    }
                    }
                }
        ]
    });
}
/*addBar*/
function addBar(chart, data) {
    var op = chart.getOption();
    var sd = option.series;

    var grids = [];
    var xAxis = [];
    var yAxis = [];
    var barSeries = [];

    for (var i = 0; i < data.length; i++) {
        var randomValue = 15;
        var radius = randomValue;
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            var vr = [];
            data[i].value.map(function(v) {
                vr.push({
                    name: v.name,
                    value: v.value,
                    // visualMap: false
                }); //饼图的数据不进行映射
            });

            // xAxis.push({
            //     gridIndex: i,
            //     show: false,
            //     type: "category",
            //     data: ["早", "中", "晚"],
            //     z: 6
            // });

            // yAxis.push({
            //     type: "value",
            //     show: false,
            //     gridIndex: i,
            //     z:6
            // });

            // var coord = chart.convertToPixel("geo", geoCoord);
            // grids.push({
            //     width: 30,
            //     height: 30,
            //     left: coord[0] - 25,
            //     top: coord[1] - 25,
            //     z:6
            // });

            let barSeriesData = data[i].value.map(item => item.value);
            barSeries.push({
                id: i,
                type: "pie",
                radius : ['33%', '44%'],
                // xAxisIndex: i,
                // yAxisIndex: i,
                barCategoryGap: 0,
                data: barSeriesData,
                z:6,
                label: {
                    normal: {
                       show : false
                    }
                    },
                itemStyle: {
                    normal: {
                        color: function(params) {
                            // 柱状图每根柱子颜色
                            var colorList = ["rgb(8,218,28)", "rgba(0,0,0,0)"];
                            return colorList[params.dataIndex];
                        }
                    },
                    emphasis: {
                        label: {
                            show: false
                        }
                    }
                }
            });

            var newOption = {
                // geo: op.geo,
                // grid: grids,
                // xAxis: xAxis,
                // yAxis: yAxis,
                series: [...barSeries]
            };
        }
    }
    return newOption;
}
    
var option = {
    backgroundColor: '#404a59',
    title: {
        text: '',
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
        data: ['1', '2','3','4','5'],
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
        roam: false,
        itemStyle: {
            normal: {
                areaColor: '#2a333d',
                borderColor: '#404a59',
                borderWidth:1,
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [
        {
        // name: '1',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke',
            period:7,
            scale:2
        },
        label: {
            normal:
            {
                show : true,
                position:'right',
                formatter:'{b}',
                color:'rgb(44,229,236)'
            },
            emphasis: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: 15,
        showEffectOn: 'render',
        itemStyle: {
            normal: {
                color: 'rgb(0,252,255)'
            }
        },
        data: allData.citys
    }, 
    {
        // name: '2',
        type: 'lines',
        symbol: ['none', 'none'],
                    symbolSize: 10,
                    // coordinateSystem: 'cartesian2d',
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        symbolSize: 10,
                        symbol: 'arrow',
                    },
                    label: {
                        show: true,
                        position: 'middle',
                    },
                    lineStyle: {
                        normal: {
                            color:'rgba(0,252,255,1)',
                            width: 2,
                            opacity: 1,
                            curveness: 0
                        }
                    },
        coordinateSystem: 'geo',
        zlevel: 8,
        large: true,
        data: allData.moveLines
    },
    {
        // name: '3',
        type: 'effectScatter',
        symbol: 'image://'+ symbolPower,
        symbolSize: 10,
        coordinateSystem: 'geo',
        zlevel: 3,
        label: {
            normal:
            {
                show : true,
                position:'right',
                formatter:'{b}',
                color:'rgb(44,229,236)'
            },
            emphasis: {
                show: false,
            }
        },
        data: allData.powerList 
    },
    {
        // name: '4',
        type: 'effectScatter',
        symbol: 'image://'+ powerImg,
        symbolSize: 10,
        coordinateSystem: 'geo',
        zlevel: 4,
        label: {
            normal:
            {
                show : true,
                position:'right',
                formatter:'{b}',
                color:'rgb(44,229,236)'
            },
            emphasis: {
                show: false,
            }
        },
        data: allData.powerList2
    },
    {
        // name:'5',
        type: "pie",
                radius : ['33%', '40%'],
                barCategoryGap: 0,
                data: [{
                    value: 34,
                    itemStyle: {
                        color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [{
                        offset: 0,
                        color: 'rgba(20,164,61,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(27,134,85,1)'
                       }], false),
                    },
                    label: {
                        show:false,
                        // color: "rgb(8,218,28)",
                        // fontSize: 14,
                    }
                },
                {
                    value: 52,
                    name: 'rose2',
                    itemStyle: {
                        normal:{
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: 'rgba(0,0,0,0)'
                        }, {
                            offset: 1,
                           color: 'rgba(0,0,0,0)'
                        }]),  
                        },
                        emphasis: {
                        label: {
                            show: false
                        }
                    }
                    }
                }],
                z:10,
                label: {
                    normal: {
                      show : false
                    }
                    },
                itemStyle: {
                    normal: {
                        // color: function(params) {
                        //     // 柱状图每根柱子颜色
                        //     var colorList = ["rgb(8,218,28)", "rgba(0,0,0,0)"];
                        //     return colorList[params.dataIndex];
                        // }
                    },
                    emphasis: {
                        label: {
                            show: false
                        }
                    }
                }
    }
    // {
    //     // name: '5',
    //     type: 'lines',
    //     // symbol: ['none', 'none'],
    //     // symbolSize: 0,
    //     // coordinateSystem: 'geo',
    //     zlevel: 5,
    //     label: {
    //         normal:
    //         {
    //             show : true,
    //             position:'right',
    //             formatter:'xxx断面',
    //             color:'rgb(76,255,90)',
    //         },
    //         emphasis: {
    //             show: false,
    //         }
    //     },
    //     effect: {
    //                 show: false,
    //             },
    //             lineStyle: {
    //                 normal: {
    //                     color:'rgb(8,218,28)',
    //                     width: 2,
    //                     opacity: 0.8,
    //                     type: 'dotted',
    //                     curveness: 0.3,
    //                 }
    //             },
    //     data: allData.section
    // },
    ]
};
myChart.setOption(option);
// option = addBar(myChart, data);
// myChart.setOption(option);
});
