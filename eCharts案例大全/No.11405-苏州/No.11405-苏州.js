//var jiangsu = "/asset/get/s/data-1545717074162-HoS4KynOn.json";
var jiangsu = "/asset/get/s/data-1557368914117-YDdLgQCLJ.json";
// $(function() {
// var myChart = echarts.init(document.getElementById('echar'));
$.get(jiangsu, function(tjJson) {
    echarts.registerMap('jiangsu', tjJson);


    var geoCoordMap = {
       '': [120.61562, 31.349619],

        '吴中区': [120.3971099, 31.232765],
        '相城区': [120.601043, 31.4802088],
        '姑苏区': [120.602416, 31.3043684],
        '工业园区': [120.75347, 31.36770],
        '高新区': [120.3840637, 31.3723991],
        '吴江区': [120.605850, 30.9787865],
        '常熟市': [120.74852, 31.658156],
        '张家港市': [120.6216430, 31.9195301],
        '昆山市': [120.958137, 31.381925],
        '太仓市': [121.184692, 31.5949131],
    };

    var goData = [{
            name: '',
            value: 10
        },{
            name: '吴中区',
            value: 9
        },{
            name: '相城区',
            value: 8
        },{
            name: '姑苏区',
            value: 7
        },{
            name: '工业园区',
            value: 6
        },{
            name: '高新区',
            value: 5
        },{
            name: '吴江区',
            value: 4
        },{
            name: '常熟市',
            value: 3
        },{
            name: '张家港市',
            value: 2
        },
        {
            name: '昆山市',
            value: 1
        },
        {
            name: '太仓市',
            value: 1
        }
    ];
    var goTotal=0;//计算总人数
    goData.forEach(function(item,i){
        goTotal+=item.value;
    })
    //值控制圆点大小
    var backData = [{
        name: '常熟市',
        value: 75
    }, {
        name: '昆山市',
        value: 95
    }];

    var planePath = 'arrow';

    var convertData = function(name, data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var fromCoord = geoCoordMap[name];
            var toCoord = geoCoordMap[data[i].name];
            if (fromCoord && toCoord) {
                res.push({
                    //对换即可调整方向
                    coords: [fromCoord, toCoord]
                });
            }
        }
        return res;
    };
    var series = [];
    [
        ['', goData],
       // ['徐州', backData],

    ].forEach(function(item, i) {
        series.push({
            name: item[0],
            type: 'lines',
            zlevel: 2,
            //线特效配置
            effect: {
                show: true,
                period: 6,
                trailLength: 0.1,
                symbol: planePath, //标记类型
                symbolSize: 10
            },
            lineStyle: {
                normal: {
                    width: 2,
                    opacity: 0.4,
                    curveness: 0.2, //弧线角度
                    color: '#00eaff'
                }
            },
            data: convertData(item[0], item[1])
        },  {
				type: 'effectScatter',
				coordinateSystem: 'geo',
				zlevel: 2,
				rippleEffect: { //涟漪特效
					period: 4, //动画时间，值越小速度越快
					brushType: 'stroke', //波纹绘制方式 stroke, fill
					scale: 4 //波纹圆环最大限制，值越大波纹越大
				},
				label: {
					normal: {
						show: false,
						position: 'right', //显示位置
						offset: [10, 110], //偏移设置
						formatter: function(params){//圆环显示文字
							return params.data.name;
						},
						fontSize: 13
					},
					emphasis: {
						show: true
					}
				},
				symbol: 'circle',
				symbolSize: function(val) {
					return 5; //圆环大小
				},
				itemStyle: {
					normal: {
						show: false,
						color: '#00eaff'
					}
				},
			      data: item[1].map(function(dataItem) {
                console.log(dataItem)
                return {
                    name: dataItem.name,
                    value: geoCoordMap[dataItem.name].concat([dataItem.value])
                };
            }),
			},
        {  //终点
            name: item[0],
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            label: {
                normal: {
                    show: true,
                    color: '#fff',
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbol: 'circle',
            //圆点大小
            symbolSize: function(val) {
                return 5;
            },
            itemStyle: {
                normal: {
                    show: true,
                     color:'#00eaff'
                }
            },
            data: item[1].map(function(dataItem) {
                console.log(dataItem)
                return {
                    name: dataItem.name,
                    value: geoCoordMap[dataItem.name].concat([dataItem.value])
                };
            })

        }, {//起点
            name: 'item[0]',
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}',
                    
                }
            },
            symbolSize: function(val) {
                return 25;
            },
           	"symbol": 'path://M512 39.384615l169.353846 295.384615 342.646154 63.015385-240.246154 248.123077L827.076923 984.615385l-315.076923-145.723077L196.923077 984.615385l43.323077-334.769231L0 401.723077l342.646154-63.015385L512 39.384615', 
				

            itemStyle: {
                normal: {
                    show: true,
                    color:'#DC143C'
                }
            },
            data: [{
                name: item[0],
                value: geoCoordMap[item[0]].concat([100])
            }]

        })

    });
var type = {
            type: 'map',
            map: 'jiangsu',
              geoIndex: 0,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        data:goData,
        };
 series.unshift(type);
    option = {
        backgroundColor: '#050b29',
     
    
        tooltip: {
            trigger: 'item',
            formatter: "{b}"
        },
       visualMap: {
                show: false,
                min: 0,
				max: 10,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true,
                seriesIndex: [0],
                textStyle: {
                    fontSize: '25'
                },
                inRange: {
                //   color: ['#91639b', '#a677a4', '#8a637b', '#a677a4', '#91639b',
                //     '#7e58c5',
                //     '#a54aa5', '#EE82EE', '#aa53c5', '#9400D3',
                //     '#eb3600'
                // ]
				    color: ['#5193ff', '#5193ff', '#5193ff', '#5193ff', '#5193ff',
                    '#7B68EE',
                    '#4682B4', '#07e9fd','#7ac6f5',  '#7e58c5',
                    '#eb3600'
                ]


                }
            },
      //地图相关设置
            geo: {
        map: 'jiangsu',
        zoom: 1.2,
    
        roam: true,
           label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#fbfbfb',
                borderColor: '#b9b4b7'

            },
            emphasis: {
                areaColor: '#05ff09'
            }
        }
    },
        series: series
    };
    myChart.setOption(option);
})
// })