var rawData = [{
        name: 'China',
        value: [400]
    },
    {
        name: 'Russia',
        value: [11]
    },
    {
        name: 'Spain',
        value: [101]
    },
    {
        name: 'Indonesia',
        value: [101]
    }
];
var valueData = [400, 11, 101, 101]
var maxNum = Math.max(...rawData.map((item) => item.value[0]))

var geoCoordMap3 = {
    'Afghanistan': [67.709953, 33.93911],
    'Angola': [17.873887, -11.202692],
    'Albania': [20.168331, 41.153332],
    'UnitedArabEmirates': [53.847818, 23.424076],
    'Argentina': [-63.61667199999999, -38.416097],
    'Armenia': [45.038189, 40.069099],
    'FrenchSouthern and AntarcticLands': [69.348557, -49.280366],
    'Australia': [133.775136, -25.274398],
    'Austria': [14.550072, 47.516231],
    'Azerbaijan': [47.576927, 40.143105],
    'Burundi': [29.918886, -3.373056],
    'Belgium': [4.469936, 50.503887],
    'Benin': [2.315834, 9.30769],
    'BurkinaFaso': [-1.561593, 12.238333],
    'Bangladesh': [90.356331, 23.684994],
    'Bulgaria': [25.48583, 42.733883],
    'TheBahamas': [-77.39627999999999, 25.03428],
    'Bosnia andHerzegovina': [17.679076, 43.915886],
    'Belarus': [27.953389, 53.709807],
    'Belize': [-88.49765, 17.189877],
    'Bermuda': [-64.7505, 32.3078],
    'Bolivia': [-63.58865299999999, -16.290154],
    'Brazil': [-51.92528, -14.235004],
    'Brunei': [114.727669, 4.535277],
    'Bhutan': [90.433601, 27.514162],
    'Botswana': [24.684866, -22.328474],
    'CentralAfricanRepublic': [20.939444, 6.611110999999999],
    'Canada': [-106.346771, 56.130366],
    'Switzerland': [8.227511999999999, 46.818188],
    'Chile': [-71.542969, -35.675147],
    'China': [104.195397, 35.86166],
    'IvoryCoast': [-5.547079999999999, 7.539988999999999],
    'Cameroon': [12.354722, 7.369721999999999],
    'DemocraticRepublic of the Congo': [21.758664, -4.038333],
    'Republic of theCongo': [15.827659, -0.228021],
    'Colombia': [-74.297333, 4.570868],
    'CostaRica': [-83.753428, 9.748916999999999],
    'Cuba': [-77.781167, 21.521757],
    'NorthernCyprus': [33.429859, 35.126413],
    'Cyprus': [33.429859, 35.126413],
    'CzechRepublic': [15.472962, 49.81749199999999],
    'Germany': [10.451526, 51.165691],
    'Djibouti': [42.590275, 11.825138],
    'Denmark': [9.501785, 56.26392],
    'DominicanRepublic': [-70.162651, 18.735693],
    'Algeria': [1.659626, 28.033886],
    'Ecuador': [-78.18340599999999, -1.831239],
    'Egypt': [30.802498, 26.820553],
    'Eritrea': [39.782334, 15.179384],
    'Spain': [-3.74922, 40.46366700000001],
    'Estonia': [25.013607, 58.595272],
    'Ethiopia': [40.489673, 9.145000000000001],
    'Finland': [25.748151, 61.92410999999999],
    'Fiji': [178.065032, -17.713371],
    'FalklandIslands': [-59.523613, -51.796253],
    'France': [2.213749, 46.227638],
    'Gabon': [11.609444, -0.803689],
    'UnitedKingdom': [-3.435973, 55.378051],
    'Georgia': [-82.9000751, 32.1656221],
    'Ghana': [-1.023194, 7.946527],
    'Guinea': [-9.696645, 9.945587],
    'Gambia': [-15.310139, 13.443182],
    'GuineaBissau': [-15.180413, 11.803749],
    'EquatorialGuinea': [10.267895, 1.650801],
    'Greece': [21.824312, 39.074208],
    'Greenland': [-42.604303, 71.706936],
    'Guatemala': [-90.23075899999999, 15.783471],
    'FrenchGuiana': [-53.125782, 3.933889],
    'Guyana': [-58.93018, 4.860416],
    'Honduras': [-86.241905, 15.199999],
    'Croatia': [15.2, 45.1],
    'Haiti': [-72.285215, 18.971187],
    'Hungary': [19.503304, 47.162494],
    'Indonesia': [113.921327, -0.789275],
    'India': [78.96288, 20.593684],
    'Ireland': [-8.24389, 53.41291],
    'Iran': [53.688046, 32.427908],
    'Iraq': [43.679291, 33.223191],
    'Iceland': [-19.020835, 64.963051],
    'Israel': [34.851612, 31.046051],
    'Italy': [12.56738, 41.87194],
    'Jamaica': [-77.297508, 18.109581],
    'Jordan': [36.238414, 30.585164],
    'Japan': [138.252924, 36.204824],
    'Kazakhstan': [66.923684, 48.019573],
    'Kenya': [37.906193, -0.023559],
    'Kyrgyzstan': [74.766098, 41.20438],
    'Cambodia': [104.990963, 12.565679],
    'SouthKorea': [127.766922, 35.907757],
    'Kosovo': [20.902977, 42.6026359],
    'Kuwait': [47.481766, 29.31166],
    'Laos': [102.495496, 19.85627],
    'Lebanon': [35.862285, 33.854721],
    'Liberia': [-9.429499000000002, 6.428055],
    'Libya': [17.228331, 26.3351],
    'SriLanka': [80.77179699999999, 7.873053999999999],
    'Lesotho': [28.233608, -29.609988],
    'Lithuania': [23.881275, 55.169438],
    'Luxembourg': [6.129582999999999, 49.815273],
    'Latvia': [24.603189, 56.879635],
    'Morocco': [-7.092619999999999, 31.791702],
    'Moldova': [28.369885, 47.411631],
    'Madagascar': [46.869107, -18.766947],
    'Mexico': [-102.552784, 23.634501],
    'Macedonia': [21.745275, 41.608635],
    'Mali': [-3.996166, 17.570692],
    'Myanmar': [95.956223, 21.913965],
    'Montenegro': [19.37439, 42.708678],
    'Mongolia': [103.846656, 46.862496],
    'Mozambique': [35.529562, -18.665695],
    'Mauritania': [-10.940835, 21.00789],
    'Malawi': [34.301525, -13.254308],
    'Malaysia': [101.975766, 4.210484],
    'Namibia': [18.49041, -22.95764],
    'NewCaledonia': [165.618042, -20.904305],
    'Niger': [8.081666, 17.607789],
    'Nigeria': [8.675277, 9.081999],
    'Nicaragua': [-85.207229, 12.865416],
    'Netherlands': [5.291265999999999, 52.132633],
    'Norway': [8.468945999999999, 60.47202399999999],
    'Nepal': [84.12400799999999, 28.394857],
    'NewZealand': [174.885971, -40.900557],
    'Oman': [55.923255, 21.512583],
    'Pakistan': [69.34511599999999, 30.375321],
    'Panama': [-80.782127, 8.537981],
    'Peru': [-75.015152, -9.189967],
    'Philippines': [121.774017, 12.879721],
    'PapuaNewGuinea': [143.95555, -6.314992999999999],
    'Poland': [19.145136, 51.919438],
    'PuertoRico': [-66.590149, 18.220833],
    'NorthKorea': [127.510093, 40.339852],
    'Portugal': [-8.224454, 39.39987199999999],
    'Paraguay': [-58.443832, -23.442503],
    'Qatar': [51.183884, 25.354826],
    'Romania': [24.96676, 45.943161],
    'Russia': [105.318756, 61.52401],
    'Rwanda': [29.873888, -1.940278],
    'WesternSahara': [-12.885834, 24.215527],
    'SaudiArabia': [45.079162, 23.885942],
    'Sudan': [30.217636, 12.862807],
    'SouthSudan': [31.3069788, 6.876991899999999],
    'Senegal': [-14.452362, 14.497401],
    'SolomonIslands': [160.156194, -9.64571],
    'SierraLeone': [-11.779889, 8.460555],
    'ElSalvador': [-88.89653, 13.794185],
    'Somaliland': [46.8252838, 9.411743399999999],
    'Somalia': [46.199616, 5.152149],
    'RepublicofSerbia': [21.005859, 44.016521],
    'Suriname': [-56.027783, 3.919305],
    'Slovakia': [19.699024, 48.669026],
    'Slovenia': [14.995463, 46.151241],
    'Sweden': [18.643501, 60.12816100000001],
    'Swaziland': [31.465866, -26.522503],
    'Syria': [38.996815, 34.80207499999999],
    'Chad': [18.732207, 15.454166],
    'Togo': [0.824782, 8.619543],
    'Thailand': [100.992541, 15.870032],
    'Tajikistan': [71.276093, 38.861034],
    'Turkmenistan': [59.556278, 38.969719],
    'EastTimor': [125.727539, -8.874217],
    'Trinidad andTobago': [-61.222503, 10.691803],
    'Tunisia': [9.537499, 33.886917],
    'Turkey': [35.243322, 38.963745],
    'UnitedRepublic ofTanzania': [34.888822, -6.369028],
    'Uganda': [32.290275, 1.373333],
    'Ukraine': [31.16558, 48.379433],
    'Uruguay': [-55.765835, -32.522779],
    'UnitedStates ofAmerica': [-95.712891, 37.09024],
    'Uzbekistan': [64.585262, 41.377491],
    'Venezuela': [-66.58973, 6.42375],
    'Vietnam': [108.277199, 14.058324],
    'Vanuatu': [166.959158, -15.376706],
    'WestBank': [35.3027226, 31.9465703],
    'Yemen': [48.516388, 15.552727],
    'SouthAfrica': [22.937506, -30.559482],
    'Zambia': [27.849332, -13.133897],
    'Zimbabwe': [29.154857, -19.015438]
}
var namearr = ['1']
var colorarr = ['#1921ff', '#266eff', '#01c3dd', '#008198', '#2ef4ab',
    '#ffe074', '#ffcbcb', '#cd8425'
];
var attackSourcesColor = [
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: "#EB3B5A"
        },
        {
            offset: 1,
            color: "#FE9C5A"
        }
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: "#FA8231"
        },
        {
            offset: 1,
            color: "#FFD14C"
        }
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: "#F7B731"
        },
        {
            offset: 1,
            color: "#FFEE96"
        }
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: "#395CFE"
        },
        {
            offset: 1,
            color: "#2EC7CF"
        }
    ])
];
var geoCoordMap = geoCoordMap3;

// 3d柱状图
const topImg = "data:image/png;base64,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"
const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        // 会canvas的应该都能看得懂，shape是从custom传入的
        const xAxisPoint = shape.xAxisPoint
        const c0 = [shape.x, shape.y]
        const c1 = [shape.x - 10, shape.y - 4]
        const c2 = [xAxisPoint[0] - 10, xAxisPoint[1] - 6]
        const c3 = [xAxisPoint[0], xAxisPoint[1]]
        ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
    }
})

function attackSourcesDataFmt(sData) {
    var sss = [];
    sData.forEach(function(item, i) {
        let itemStyle = {
            color: i > 3 ? attackSourcesColor[3] : attackSourcesColor[i]
        };
        sss.push({
            value: item,
            itemStyle: itemStyle
        });
    });
    return sss;
}
// 绘制右侧面
const CubeRight = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        const xAxisPoint = shape.xAxisPoint
        const c1 = [shape.x, shape.y + 3] //上左
        const c2 = [xAxisPoint[0], xAxisPoint[1]] //下左
        const c3 = [xAxisPoint[0] + 10, xAxisPoint[1] - 5] //下右
        const c4 = [shape.x + 10, shape.y - 4] //上右
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
})
// 绘制顶面
const CubeTop = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        const c1 = [shape.x, shape.y + 3]
        const c2 = [shape.x + 10, shape.y - 4] //右点
        const c3 = [shape.x, shape.y - 10]
        const c4 = [shape.x - 10, shape.y - 4]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
})
// 注册三个面图形
echarts.graphic.registerShape('CubeLeft', CubeLeft)
echarts.graphic.registerShape('CubeRight', CubeRight)
echarts.graphic.registerShape('CubeTop', CubeTop)
// 底部图片
const imgList = []
rawData.map((item, index) => {
    imgList.push({
        coord: [index, 0],
        symbolOffset: [0, '-18%'],
        symbolSize: [30, 10],
        symbol: "image://" + topImg,
        // label: {
        //     show: true,
        //     offset: [0, -30],
        //     fontSize: 16,
        //     color: "#00baff",
        // }
    }, )
})


option = {
    baseOption: {
        backgroundColor: new echarts.graphic.RadialGradient(0.5, 0.5, 0.9, [{
            offset: 0,
            color: '#f7f8fa'
        }, {
            offset: 1,
            color: '#043270'
        }]),

        title: [{

                left: 'center',
                top: '5%',
                textStyle: {
                    fontSize: 30,
                    color: 'rgba(23,23,31, 0.7)',
                    textShadowColor: '(0,0,0,0.3)',
                    textShadowBlur: 5,
                    textShadowOffsetX: 2,
                    textShadowOffsety: 4
                }
            },
            {
                id: 'top 10',
                test: ''
            }
        ],
        visualMap: {
            // min: 0    
            max: 20,
            show: false,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true,
            seriesIndex: [0, 2],
            inRange: {
                color: ['rgba(255, 255, 51,0.4)', 'rgba(238,25,27,1)'],
                //symbolSize: [10, 50]
            }
        },
        geo: {
            map: 'world',
            show: true,
            roam: false,
            label: {
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    show: true,
                    areaColor: '#b1e2ee',
                    borderColor: '#1773c3',
                    shadowColor: '#1773c3',
                    shadowBlur: 1
                }
            },
        },
        series: [{
            name: '底图',
            type: 'map',
            mapType: 'world',
            roam: true,
            top: '16%',
            bottom: '5%',
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: false,
                }
            },
            itemStyle: {},
            data: []
        }, ]
    },
    // options: []
}

function renderEachCity() {
    var options = {
        legend: [],
        xAxis: [],
        yAxis: [],
        grid: [],
        series: []
    };

    options.legend.push({
        show: false,
        data: namearr,
        itemWidth: 5,
        itemHeight: 5,
        textStyle: {
            color: '#ddd',
            fontSize: 10
        },
        top: '95%',
        //bottom:'5%'
    });

    echarts.util.each(rawData, function(dataItem, idx) {
        var geoCoord = geoCoordMap[dataItem.name];
        var coord = myChart.convertToPixel('geo', geoCoord);
        idx += '';
        options.xAxis.push({
            id: idx,
            gridId: idx,
            type: 'category',
            name: dataItem.name,
            nameStyle: {
                color: '#ddd',
                fontSize: 12
            },
            nameLocation: 'middle',
            nameGap: 3,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#bbb'
                }
            },
            data: [dataItem.name],
        });
        options.yAxis.push({
            id: idx,
            gridId: idx,
            show: false
        });
        options.grid.push({
            id: idx,
            width: 30,
            height: dataItem.value[0] / maxNum * 100,
            left: coord[0] - 15,
            top: coord[1] - dataItem.value[0] / maxNum * 100,
            // bottom:  dataItem.value[0]
        });
        for (var i = 0; i < namearr.length; i++) {
            options.series.push({
                type: 'custom',
                renderItem: (params, api) => {
                    const location = api.coord([api.value(0), api.value(1)])
                    return {
                        type: 'group',
                        children: [{
                            type: 'CubeLeft',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0])
                            },
                            style: {
                                fill: idx > 2 ? attackSourcesColor[3] : attackSourcesColor[idx]
                            }
                        }, {
                            type: 'CubeRight',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0])
                            },
                            style: {
                                fill: idx > 2 ? attackSourcesColor[3] : attackSourcesColor[idx]
                            }
                        }, {
                            type: 'CubeTop',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0])
                            },
                            style: {
                                fill: idx > 2 ? attackSourcesColor[3] : attackSourcesColor[idx]
                            }
                        }]
                    }
                },
                data: [dataItem.value[i] / maxNum * 100],
                name: namearr[i],
                // type: 'bar',
                stack: 'bar' + idx,
                xAxisId: idx,
                yAxisId: idx,
                itemStyle: {
                    normal: {
                        color: colorarr[i]
                    }
                },
                markPoint: {
                    data: imgList
                },
            });
        }

    });
    myChart.setOption(options);
}
setTimeout(function() {
    renderEachCity();
}, 1);