

var countries = ['奥地利', '比利时', '加拿大', '智利', '中国', '捷克共和国', '德国', '丹麦', '西班牙', '爱沙尼亚', '芬兰', '法国', '英国', '希腊', '匈牙利', '爱尔兰', '以色列', '意大利', '日本', '大韩民国', '卢森堡', '墨西哥', '荷兰', '挪威', '波兰', '葡萄牙', '罗马尼亚', '俄罗斯联邦', '新加坡', '斯洛伐克共和国', '瑞典', '土耳其', '美国'];

var years = ['2011', '2012', '2013', '2014'];

var data = [
    [
        [3888, 2.681634155, 0.115044968],
        [2630, 2.155333864, 0.113580762],
        [4754, 1.798516848, 0.321718039],
        [339, 0.353431105, 0.008865196],
        [415829, 1.794378769, 1.344426108],
        [947, 1.560055473, 0.035462114],
        [73216, 2.793094646, 1.049495413],
        [3372, 2.966252937, 0.101297148],
        [4846, 1.325123536, 0.197168399],
        [92, 2.306546282, 0.005343989],
        [3221, 3.638811596, 0.099578704],
        [14655, 2.190640728, 0.627071365],
        [20107, 1.690647615, 0.438706938],
        [798, 0.671962477, 0.019337731],
        [759, 1.196201683, 0.016738569],
        [1089, 1.532655096, 0.03705727],
        [1360, 4.010980069, 0.104993157],
        [12776, 1.208805643, 0.275376703],
        [287580, 3.383130198, 1.99795231],
        [138034, 3.743612984, 0.450155865],
        [454, 1.495255394, 0.008776758],
        [1065, 0.425630318, 0.049771599],
        [8195, 1.903056123, 0.170076448],
        [1585, 1.627537229, 0.081076972],
        [4134, 0.746011795, 0.039444782],
        [648, 1.456831329, 0.035674867],
        [1445, 0.493159407, 0.009141344],
        [26879, 1.090685987, 0.207753205],
        [1056, 2.150545396, 0.059218391],
        [269, 0.664985831, 0.006511529],
        [5614, 3.249186329, 0.182966043],
        [4258, 0.859523484, 0.066591939],
        [247750, 2.762901434, 4.28745]
    ],
    [
        [4137, 2.885611751, 0.117552039],
        [2656, 2.362687426, 0.117609858],
        [4709, 1.786069239, 0.327335695],
        [336, 0.364786726, 0.009675296],
        [535313, 1.928096899, 1.631482938],
        [1005, 1.790383224, 0.036960954],
        [73905, 2.871666001, 1.016459314],
        [3013, 3.000847221, 0.096710267],
        [4816, 1.284108385, 0.172063689],
        [61, 2.114262278, 0.004891402],
        [3600, 3.419483165, 0.087780344],
        [14540, 2.229066585, 0.597705505],
        [20108, 1.621774512, 0.426603403],
        [708, 0.699567292, 0.017186316],
        [795, 1.27038148, 0.016156227],
        [1059, 1.563616123, 0.03512697],
        [1319, 4.128561592, 0.107183065],
        [12192, 1.269762162, 0.263428865],
        [287013, 3.34313709, 1.990663159],
        [148136, 4.025543282, 0.492246329],
        [502, 1.288387196, 0.007213256],
        [1294, 0.431925327, 0.051161548],
        [7443, 1.939447342, 0.160769869],
        [1565, 1.620240469, 0.082584443],
        [4795, 0.881090883, 0.04407462],
        [696, 1.377767686, 0.029810508],
        [1057, 0.482513568, 0.008301336],
        [29174, 1.125617969, 0.226937204],
        [1081, 1.999471183, 0.057971785],
        [205, 0.808098834, 0.007519337],
        [5758, 3.281344985, 0.178466004],
        [4833, 0.921956332, 0.072729752],
        [268782, 2.699295093, 4.362913307]
    ],
    [
        [4159, 2.964367964, 0.127082033],
        [2600, 2.429639368, 0.126681978],
        [4567, 1.688282406, 0.310469086],
        [340, 0.391102941, 0.01082079],
        [704936, 2.014663128, 1.912036712],
        [1134, 1.909524273, 0.03978082],
        [73929, 2.826465631, 1.05860102],
        [3275, 3.05717828, 0.102683755],
        [4532, 1.261723192, 0.172762921],
        [66, 1.71468405, 0.004329026],
        [3492, 3.296833923, 0.088747507],
        [14690, 2.243278709, 0.630417223],
        [19552, 1.664319816, 0.451412843],
        [764, 0.812521634, 0.019460694],
        [745, 1.397306603, 0.018780049],
        [881, 1.535990932, 0.036596513],
        [1201, 4.088166123, 0.119541383],
        [12017, 1.30581673, 0.278601131],
        [271731, 3.474087952, 1.709099492],
        [159978, 4.148528466, 0.541633943],
        [515, 1.301430349, 0.008042125],
        [1210, 0.501060466, 0.063072179],
        [8151, 1.957941606, 0.169199292],
        [1612, 1.652425456, 0.086314296],
        [4608, 0.870823097, 0.045636272],
        [741, 1.326410846, 0.029986633],
        [1023, 0.386661981, 0.007407949],
        [29120, 1.132793839, 0.235510646],
        [1143, 2.000481989, 0.060463749],
        [213, 0.827352135, 0.008110851],
        [6000, 3.306047971, 0.191334882],
        [4769, 0.944772769, 0.077777718],
        [287831, 2.742439075, 4.598536376]
    ],
    [
        [4058, 2.986101514, 0.130459055],
        [2811, 2.464682772, 0.131009371],
        [4198, 1.611535199, 0.287721343],
        [452, 0.379277698, 0.009787698],
        [801135, 2.046036451, 2.118636316],
        [1077, 1.997342028, 0.040999382],
        [73826, 2.842110679, 1.099411182],
        [3359, 3.051451057, 0.104470235],
        [4416, 1.222219162, 0.168830279],
        [80, 1.4323688, 0.003793652],
        [3615, 3.173878291, 0.086398228],
        [25116, 2.255988303, 0.638262415],
        [19922, 1.700690197, 0.508318151],
        [745, 0.834537526, 0.019659541],
        [659, 1.370716837, 0.018963411],
        [881, 1.518890182, 0.038095833],
        [1125, 4.108562894, 0.125588429],
        [12243, 1.28699587, 0.275566578],
        [265959, 3.583492875, 1.648930345],
        [164073, 4.291634971, 0.605284896],
        [586, 1.256096937, 0.008148799],
        [1246, 0.540771351, 0.070013112],
        [9150, 1.972795993, 0.173471763],
        [1632, 1.705111816, 0.085224411],
        [4424, 0.940505393, 0.051254398],
        [834, 1.285201947, 0.02957467],
        [980, 0.382832013, 0.007620028],
        [24370, 1.186906229, 0.220835526],
        [1303, '-', 0],
        [238, 0.886220557, 0.008884238],
        [5852, 3.160839968, 0.180512561],
        [5170, 1.007124663, 0.080411777],
        [285096, '-', 0]
    ]
];

// 如果看不懂这段代码，那么就不用这段代码，
// 自己估计一个最大值也可以。
function getMax(dim) {
    var max = 0;
    data.forEach(function (dataByYear) {
        dataByYear.forEach(function (item) {
            if (item[dim] > max) {
                max = item[dim];
            }
        });
    });
    var exp = Math.round(Math.log(max) / Math.log(10));
    var exp10 = Math.pow(10, exp);
    max = Math.ceil(max / exp10 * 10) / 10 * exp10;

    return max;
}


var itemStyle = {
    normal: {
        opacity: 0.8,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
};

option = {
    baseOption: {
        timeline: {
            axisType: 'category',
            orient: 'vertical',
            autoPlay: false,
            inverse: true,
            playInterval: 3000,
            left: null,
            right: 10,
            top: 20,
            bottom: 20,
            width: 55,
            height: null,
            label: {
                normal: {
                    textStyle: {
                        color: '#ddd'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            symbol: 'none',
            lineStyle: {
                color: '#555'
            },
            checkpointStyle: {
                color: '#bbb',
                borderColor: '#777',
                borderWidth: 2
            },
            controlStyle: {
                showNextBtn: false,
                showPrevBtn: false,
                normal: {
                    color: '#666',
                    borderColor: '#666'
                },
                emphasis: {
                    color: '#aaa',
                    borderColor: '#aaa'
                }
            },
            data: years
        },
        backgroundColor: '#333',
        title: {
            text: '',
            textAlign: 'center',
            right: '3%',
            bottom: 110,
            textStyle: {
                fontSize: 70,
                color: 'rgba(255, 255, 255, 0.9)'
            }
        },
        tooltip: {
            padding: 5,
            backgroundColor: '#222',
            borderColor: '#777',
            borderWidth: 1
        },
        xAxis: {
            type: 'value',
            name: '专利申请量（千亿 $）',
            nameGap: 25,
            min: 0,
            max: getMax(0),
            nameLocation: 'middle',
            nameTextStyle: {
                fontSize: 18
            },
            splitLine: {
                show: false
            },
            axisTick: {
                lineStyle: {
                    color: '#ddd'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#ddd'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#ddd'
                }
            }
        },
        yAxis: {
            type: 'value',
            name: 'R&D 经费支出占比',
            nameGap: 25,
            min: 0,
            max: getMax(1),
            nameTextStyle: {
                color: '#ccc',
                fontSize: 18
            },
            axisLine: {
                lineStyle: {
                    color: '#ddd'
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#ddd'
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                formatter: '{value} %',
                textStyle: {
                    color: '#ddd'
                }
            }
        },
        grid: {
            left: 180,
            right: 110,
            bottom: 100
        },
        geo: {
            top: 20,
            left: 170,
            right: 120,
            height: '38%',
            name: 'World Population (2010)',
            type: 'map',
            map: 'world',
            roam: false,
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#aaa',
                    areaColor: '#555'
                },
                emphasis: {
                    areaColor: '#555'
                }
            }
        },
        toolbox: {
            top: 25,
            left: 10,
            itemSize: 20,
            iconStyle: {
                normal: {
                    borderColor: '#eee'
                },
                emphasis: {
                    borderColor: '#fffb60'
                }
            }
        },
        visualMap: [{
            type: 'piecewise',
            dimension: 3,
            categories: countries,
            left: 10,
            bottom: 35,
            calculable: true,
            precision: 0.1,
            textGap: 10,
            itemGap: 3,
            textStyle: {
                color: '#ccc'
            },
            inRange: {
                color: ['#bcd3bb', '#e88f70', '#9dc5c8', '#e1e8c8', '#7b7c68', '#e5b5b5', '#f0b489', '#928ea8', '#bda29a', '#376956', '#c3bed4', '#495a80', '#9966cc', '#bdb76a', '#eee8ab', '#a35015', '#04dd98', '#d9b3e6', '#b6c3fc','#315dbc','#c5c975','#476a54','#66e638','#a59619','#822ee2','#49450d','#eeebd4','#2b98dc','#b95c25', '#8f1ec2', '#d50390', '#36a15d', '#edc1a5']
            },
            outOfRange: {
                color: '#555'
            }
        }, {
            show: false,
            type: 'continuous',
            dimension: 2,
            min: 0,
            max: 5,
            inRange: {
                symbolSize: [10, 50]
            }
        }],
        dataZoom: [{
            type: 'inside',
            xAxisIndex: 0
        }, {
            show: true,
            type: 'slider',
            xAxisIndex: 0
        }],
        series: [{
            name: 'mymaindata',
            type: 'scatter',
            id: 'gridScatter',
            itemStyle: itemStyle,
            data: [],
            tooltip: {
                formatter: function(obj) {
                    var value = obj.value;
                    //alert('test');
                    //for(var i=0;i<data.length;i++){console.log(data[i][4])};
                    return '<div style="border-bottom: 1px solid #555;padding-bottom: 5px; margin-bottom: 5px;">' + value[3] + '</div>'
                        + '专利申请量：' + value[0] + '<br>'
                        + 'R&D 经费支出占比：' + value[1] + ' %<br>'
                        + 'R&D 经费支出：' + value[2] + ' 千亿 $<br>';
                }
            }
        },
        {name:'数据1',
            type:'line',
            id:'flash1',
            itemStyle: itemStyle,
            data:[],},
            ],
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'quinticInOut'
    },
    options: []
};



for (var n = 0; n < years.length; n++) {
    option.options.push({
        title: {
            text: years[n]
        },
        series: [{
            id: 'gridScatter',
            type: 'scatter',
            itemStyle: itemStyle,
            data: data[n].map(function (item, index) {
                return item.concat([countries[index]]);
            }),
            symbolSize: 10
        },
        {name:'数据1',
            type:'line',
            id:'flash1',
            itemStyle: itemStyle,
            data:[],},]
        
    });
};

myChart.setOption(option);


// 自己估计一个最大值也可以。
function myupdate(datatemp) {
    for (var n = 0; n < years.length; n++) {
        option.options[n].series[1].data=[];
        
    };
    myChart.setOption(option);
     for (var n = 0; n < years.length; n++) {
        option.options[n].series[1].data=datatemp.slice(0,n+1);
        myChart.setOption(option);
    };
    console.log(option);
    
    console.log(datatemp);
    return 1;
}

myChart.on('click', {seriesName: 'mymaindata'}, function (parmas) {
    console.log(parmas);
    console.log(parmas['dataIndex']);
    var countryindex=parmas['dataIndex'];
    var datatemp=[];
    for(var i=0;i<data.length;i++){
        
        datatemp=datatemp.concat([data[i][countryindex]]) 
        
    };
    myupdate(datatemp);
    
    // series name 为 'uuu' 的系列中的图形元素被 'mouseover' 时，此方法被回调。
});