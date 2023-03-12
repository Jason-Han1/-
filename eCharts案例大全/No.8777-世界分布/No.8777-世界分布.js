var data2 = [{
    'date': '2020',
    'data': [ {
        'name': 'China',
        'value': 14428
    },{
        'name': 'Japan',//日本
        'value': 20
    },{
        'name': 'Thailand',//泰国
        'value': 19
    },{
        'name': 'Singapore',//新加坡
        'value': 18
    },{
        'name':'Korea (South)',//韩国
        'value': 15 
    },{
        'name': 'Australia',//澳大利亚
        'value': 12
    },{
        'name': 'Germany',//德国
        'value': 8
    },{
        'name': 'Malaysia',//马来西亚
        'value': 8
    }, {
        'name': 'United States',//美国
        'value': 8
    },{
        'name': 'Vietnam',//越南
        'value': 7
    },{
        'name': 'France',//法国
        'value': 6
    },{
        'name': 'United Arab Emirates',//阿联酋
        'value': 5
    },{
        'name': 'Canada',//加拿大
        'value': 4
    },{
        'name': 'Russia',//俄罗斯
        'value': 2
    },{
        'name': 'India',//印度
        'value': 2
    },{
        'name': 'Philippines',//菲律宾
        'value': 2
    },{
        'name': 'Italy',//意大利
        'value': 2
    },{
        'name': 'United Kingdom',//英国
        'value': 2
    },{
        'name': 'Cambodia',//柬埔寨
        'value': 1
    },{
        'name': 'Spain',//西班牙
        'value': 1
    },{
        'name': 'Sri Lanka',//斯里兰卡
        'value': 1
    }, {
        'name': 'Finland',//芬兰
        'value': 1
    }, {
        'name': 'Sweden',//瑞典
        'value': 1
    }, {
        'name': 'Nepal',//尼泊尔
        'value': 1
    }]
}];

var data = data2;

var geoCoordMap3 = {
    'Afghanistan': [67.709953, 33.93911],
    'Aland Islands': [39.390897, -99.066067],
    'Albania': [20.168331, 41.153332],
    'Algeria': [1.659626, 28.033886],
    'American Samoa': [-14.293662, -170.698357],
    'Andorra': [42.54525, 1.576297],
    'Angola': [17.873887, -11.202692],
    'Anguilla': [18.221643, -63.058971],
    'Antigua and Barbuda': [17.07753, -61.800068],
    'Argentina': [-63.61667199999999, -38.416097],
    'Armenia': [45.038189, 40.069099],
    'Aruba': [12.5, -69.977501],
    'Australia': [133.775136, -25.274398],
    'Austria': [14.550072, 47.516231],
    'Azerbaijan': [47.576927, 40.143105],
    'Bangladesh': [24.2887, 90.0438],
    'Bahrain': [26.066799, 50.511398],
    'Bahamas': [-77.39627999999999, 25.03428],
    'Barbados': [13.167446, -59.555202],
    'Belarus': [27.953389, 53.709807],
    'Belgium': [4.469936, 50.503887],
    'Belize': [-88.49765, 17.189877],
    'Benin': [2.315834, 9.30769],
    'Bermuda': [-64.7505, 32.3078],
    'Bhutan': [90.433601, 27.514162],
    'Bolivia': [-63.58865299999999, -16.290154],
    'Bosnia and Herzegovina': [17.679076, 43.915886],
    'Botswana': [24.684866, -22.328474],
    'Bouvet Island': [-54.4333, 3.4],
    'Brazil': [-51.92528, -14.235004],
    'Brunei': [114.727669, 4.535277],
    'Bulgaria': [25.48583, 42.733883],
    'Burkina Faso': [-1.561593, 12.238333],
    'Burundi': [29.918886, -3.373056],
    'Cambodia': [103.081381,11.353107],
    'Cameroon': [12.354722, 7.369721999999999],
    'Canada': [-106.346771, 56.130366],
    'Cape Verde': [16.0, -24.0],
    'Central African Republic': [6.1428, 20.399599],
    'Chad': [18.732207, 15.454166],
    'Chile': [-71.542969, -35.675147],
    'Christmas Islands': [25.93244, -81.69396],
    'Cocos (keeling) Islands': [-12.5, 96.833298],
    'Colombia': [-74.297333, 4.570868],
    'Comoros': [-11.6474, 43.297699],
    'Congo (Congo-Kinshasa)': [-4.37773, 15.27298],
    'Congo': [-0.2396, 15.3028],
    'Cook Islands': [-21.231001, -159.812195],
    'Costa Rica': [-83.753428, 9.748916999999999],
    "Cote D'Ivoire": [7.6869, -5.6958],
    'China': [87.08627,37.10226],
    'Croatia': [15.2, 45.1],
    'Cuba': [-77.781167, 21.521757],
    'Czech': [50.4881, 1.61488],
    'Cyprus': [33.429859, 35.126413],
    'Denmark': [9.501785, 56.26392],
    'Djibouti': [42.590275, 11.825138],
    'Dominica': [15.427289, -61.356377],
    'East Timor': [49.212307, -2.1256],
    'Ecuador': [-78.18340599999999, -1.831239],
    'Egypt': [30.802498, 26.820553],
    'Equatorial Guinea': [10.267895, 1.650801],
    'Eritrea': [39.782334, 15.179384],
    'Estonia': [25.013607, 58.595272],
    'Ethiopia': [40.489673, 9.145000000000001],
    'Faroe Islands': [62.139046, -7.006846],
    'Fiji': [-17.850599, 177.776901],
    'Finland': [25.748151, 61.92410999999999],
    'France': [2.213749, 46.227638],
    'Franch Metropolitan': [32.13773, -110.76609],
    'Franch Guiana': [-53.125782, 3.933889],
    'French Polynesia': [-17.651199, -149.546295],
    'Gabon': [11.609444, -0.803689],
    'Gambia': [-15.310139, 13.443182],
    'Georgia': [-82.9000751, 32.1656221],
    'Germany': [10.451526, 51.165691],
    'Ghana': [-1.023194, 7.946527],
    'Gibraltar': [36.145147, -5.348485],
    'Greece': [21.824312, 39.074208],
    'Grenada': [37.18302, -3.602192],
    'Guadeloupe': [16.249007, -61.565044],
    'Guam': [13.3532, 144.653198],
    'Guatemala': [-90.23075899999999, 15.783471],
    'Guernsey': [49.456623, -2.582235],
    'Guinea-Bissau': [-15.180413, 11.803749],
    'Guinea': [-9.696645, 9.945587],
    'Guyana': [-58.93018, 4.860416],
    'Hong Kong': [22.264412, 114.167061],
    'Haiti': [-72.285215, 18.971187],
    'Honduras': [-86.241905, 15.199999],
    'Hungary': [19.503304, 47.162494],
    'Iceland': [-19.020835, 64.963051],
    'India': [72.823716,18.959854],
    'Indonesia': [-0.7366, 113.485001],
    'Iran': [53.688046, 32.427908],
    'Iraq': [43.679291, 33.223191],
    'Ireland': [-8.24389, 53.41291],
    'Isle of Man': [54.25, -4.5],
    'Israel': [34.851612, 31.046051],
    'Italy': [12.56738, 41.87194],
    'Jamaica': [-77.297508, 18.109581],
    'Japan': [142.839278,43.187702],
    'Jersey': [49.212307, -2.1256],
    'Jordan': [36.238414, 30.585164],
    'Kazakstan': [66.923684, 48.019573],
    'Kenya': [37.906193, -0.023559],
    'Kiribati': [-2.8497, -171.623795],
    'Korea (South)': [127.766922, 35.907757],
    'Korea (North)': [40.534302, 127.222504],
    'Kuwait': [47.481766, 29.31166],
    'Kyrgyzstan': [74.766098, 41.20438],
    'Laos': [102.495496, 19.85627],
    'Latvia': [24.603189, 56.879635],
    'Lebanon': [35.862285, 33.854721],
    'Lesotho': [28.233608, -29.609988],
    'Liberia': [-9.429499000000002, 6.428055],
    'Libya': [17.228331, 26.3351],
    'Liechtenstein': [47.150002, 9.5833],
    'Lithuania': [23.881275, 55.169438],
    'Luxembourg': [6.129582999999999, 49.815273],
    'Macau': [22.191951, 113.538122],
    'Macedonia': [21.745275, 41.608635],
    'Malawi': [34.301525, -13.254308],
    'Malaysia': [101.975766, 4.210484],
    'Madagascar': [46.869107, -18.766947],
    'Maldives': [-0.6022, 73.084198],
    'Mali': [-3.996166, 17.570692],
    'Malta': [35.902241, 14.413739],
    'Marshall Islands': [7.1482, 171.037399],
    'Martinique': [14.611373, -60.962078],
    'Mauritania': [-10.940835, 21.00789],
    'Mauritius': [-20.2833, 57.549999],
    'Mayotte': [-12.8333, 45.166698],
    'Mexico': [-102.552784, 23.634501],
    'Micronesia': [5.0, 152.0],
    'Moldova': [28.369885, 47.411631],
    'Monaco': [43.731142, 7.419758],
    'Mongolia': [103.846656, 46.862496],
    'Montenegro': [19.37439, 42.708678],
    'Montserrat': [16.735834, -62.192696],
    'Morocco': [-7.092619999999999, 31.791702],
    'Mozambique': [35.529562, -18.665695],
    'Myanmar': [95.956223, 21.913965],
    'Namibia': [18.49041, -22.95764],
    'Nauru': [-0.5334, 166.9086],
    'Nepal': [84.12400799999999, 28.394857],
    'Netherlands': [5.291265999999999, 52.132633],
    'New Caledonia': [165.618042, -20.904305],
    'New Zealand': [174.885971, -40.900557],
    'Nicaragua': [-85.207229, 12.865416],
    'Niger': [8.081666, 17.607789],
    'Nigeria': [8.675277, 9.081999],
    'Niue': [-19.0333, -169.866699],
    'Norfolk Island': [-29.0333, 167.949997],
    'Norway': [8.468945999999999, 60.47202399999999],
    'Oman': [55.923255, 21.512583],
    'Pakistan': [69.34511599999999, 30.375321],
    'Palau': [7.5216, 134.530807],
    'Palestine': [32.0, 35.25],
    'Panama': [-80.782127, 8.537981],
    'Papua New Guinea': [143.95555, -6.314992999999999],
    'Paraguay': [-58.443832, -23.442503],
    'Peru': [-75.015152, -9.189967],
    'Philippines': [125.354232,7.257431],
    'Pitcairn Islands': [-25.0667, -130.083298],
    'Poland': [19.145136, 51.919438],
    'Portugal': [-8.224454, 39.39987199999999],
    'Puerto Rico': [-66.590149, 18.220833],
    'Qatar': [51.183884, 25.354826],
    'Reunion': [-21.087161, 55.593724],
    'Romania': [24.96676, 45.943161],
    'Rwanda': [29.873888, -1.940278],
    'Russian Federation': [65.067703, 116.8564],
    'Saint Helena': [-15.95, -5.7],
    'Saint Kitts-Nevis': [17.31539, -62.74275],
    'Saint Lucia': [13.894094, -60.965061],
    'Saint Vincent and the Grenadines': [13.246317, -61.19014],
    'El Salvador': [-88.89653, 13.794185],
    'Samoa': [-13.5945, -172.611298],
    'San Marino': [43.932716, 12.457975],
    'Sao Tome and Principe': [0.2306, 6.5853],
    'Saudi Arabia': [45.079162, 23.885942],
    'Senegal': [-14.452362, 14.497401],
    'Seychelles': [-4.5833, 55.666698],
    'Sierra Leone': [-11.779889, 8.460555],
    'Singapore': [103.85116,1.341322],
    'Serbia': [43.871162, 20.603973],
    'Slovakia': [19.699024, 48.669026],
    'Slovenia': [14.995463, 46.151241],
    'Solomon Islands': [160.156194, -9.64571],
    'Somalia': [46.199616, 5.152149],
    'South Africa': [22.937506, -30.559482],
    'Spain': [-6.727785,38.580912],
    'Sri Lanka': [79.690555,8.069504],
    'Sudan': [30.217636, 12.862807],
    'Suriname': [-56.027783, 3.919305],
    'Swaziland': [31.465866, -26.522503],
    'Sweden': [12.317131,59.424534],
    'Switzerland': [8.227511999999999, 46.818188],
    'Syria': [38.996815, 34.80207499999999],
    'Tajikistan': [71.276093, 38.861034],
    'Tanzania': [-5.6088, 34.5294],
    'Taiwan': [23.534, 120.559402],
    'Thailand': [98.874289,16.881693],
    'Trinidad and Tobago': [10.418848, -61.293797],
    'Timor-Leste': [125.727539, -8.874217],
    'Togo': [0.824782, 8.619543],
    'Tokelau': [-9.0, -171.75],
    'Tonga': [-21.149, -175.319595],
    'Tunisia': [9.537499, 33.886917],
    'Turkey': [35.243322, 38.963745],
    'Turkmenistan': [59.556278, 38.969719],
    'Tuvalu': [-7.4645, 178.666107],
    'Uganda': [32.290275, 1.373333],
    'Ukraine': [31.16558, 48.379433],
    'United Arab Emirates': [55.300339,25.269605],
    'United Kingdom': [-3.435973, 55.378051],
    'United States': [-95.712891, 37.09024],
    'Uruguay': [-55.765835, -32.522779],
    'Uzbekistan': [64.585262, 41.377491],
    'Vanuatu': [166.959158, -15.376706],
    'Vatican City': [41.902153, 12.452806],
    'Venezuela': [-66.58973, 6.42375],
    'Vietnam': [105.079303,20.16167],
    'Wallis and Futuna': [-13.2818, -176.185303],
    'Western Sahara': [-12.885834, 24.215527],
    'Yemen': [48.516388, 15.552727],
    'Yugoslavia': [51.023042, -116.526079],
    'Zambia': [27.849332, -13.133897],
    'Zimbabwe': [29.154857, -19.015438],
    'Russia': [116.8564, 65.067703],
    'Greenland': [-42.164707, 76.422188],
    'Korea': [127.766922, 35.907757],
    'Democratic Republic of Congo': [15.27298, -4.37773],
    'Dem. Rep. Congo': [15.27298, -4.37773],
    'S. Sudan': [30.05489, 7.265386],
    'Central African Rep.': [6.1428, 20.399599]
};

var geoCoordMap = geoCoordMap3;

function formatNum(strNum) {
    strNum = strNum.toFixed(0)
    if (strNum.length <= 3) {
        return strNum;
    }
    if (!/^(\+|-)?(\d+)(\.\d+)?$/.test(strNum)) {
        return strNum;
    }
    var a = RegExp.$1,
        b = RegExp.$2,
        c = RegExp.$3;
    var re = new RegExp(); 
    re.compile("(\\d)(\\d{3})(,|$)");
    while (re.test(b)) {
        b = b.replace(re, "$1,$2$3");
    }
    return a + "" + b + "" + c;
};

function topN(N) {
    var dataRaw = [];
    for (var i = 0; i < data.length; i++) {
        dataRaw[i] = {};
        dataRaw[i].date = data[i].date;
        dataRaw[i].data = data[i].data.slice(0, N);
    }
    return dataRaw;
};
var dataTopN = topN(10);

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(Math.round(data[i].value))
            });
        }
    }
    return res;
};
var showList = ['China','Russia','Spain','Sweden','Thailand','United Kingdom','Japan','Singapore','Malaysia','Australia','Korea (South)','France','United Arab Emirates','Germany','Canada','Vietnam','Cambodia','India','Sri Lanka','Philippines','Finland','Nepal', 'United States','Italy']
var convertData2 = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        if (showList.indexOf(data[i].name) > -1) {
            var geoCoord = geoCoordMap[data[i].name];
            res.push({
                name: data[i].name,
                value: geoCoord.concat(Math.round(data[i].value))
            });
        }
    }
    return res;
};

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
        timeline: {
            show: false,
            axisType: 'category',
            orient: 'vertical',
            autoPlay: true,
            loop: false,
            //  inverse: true,
            playInterval: 200,
            left: null,
            right: 30,
            top: 330,
            bottom: 100,
            //  width: 46,
            height: null,
            label: {
                normal: {
                    show: true,
                    interval: 0,
                },
            },
            symbol: 'none',
            lineStyle: {
                color: '#ccc',
                show: false
            },
            checkpointStyle: {
                symbol: 'none',
                color: '#bbb',
                borderColor: '#777',
                show: false,
                borderWidth: 1
            },
            controlStyle: {
                showNextBtn: false,
                showPrevBtn: false,
                normal: {
                    color: '#666',
                    show: false,
                    borderColor: '#666'
                },
                emphasis: {
                    color: '#aaa',
                    borderColor: '#aaa'
                }
            },
            data: data.map(function(ele) {
                return ele.date
            })
        },
        grid: {
            left: '6%',
            right: '70%',
            top: '65%',
            height: 'auto',
            bottom: '6%'
        },
        xAxis: {},
        yAxis: {},
        geo: {
            map: 'world',
            show: true,
            roam: true,
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#fff',
                    borderColor: '#1773c3',
                    shadowColor: '#1773c3',
                    shadowBlur: 1
                }
            },
            top: '16%',
            bottom: '5%'
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
                        show: true,
                        formatter: '{c}',
                        color: 'rgba(220,220,220,1)'
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: '#fff',
                        borderColor: '#1773c3',
                        shadowColor: '#1773c3',
                        shadowBlur: 20,
                        opacity: 0.6
                    }
                },
                data: []
            },
            {
                name: '前5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: [],
            },
            {
                id: 'bar',
                type: 'bar',
                data: []
            }
        ]
    },
    options: []
}


for (var i = 0; i < data.length; i++) {
    option.options.push({
        title: [{
                text: "世界分布"
            },
         
        ],
        xAxis: {
            show: false,
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(121,121,121,0.3)'
                    //color:'red'
                }
            },
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(121,121,121,0.3)'
                    //color:'red'
                }
            },
            axisLabel: {
                show: false,
                textStyle: {
                    //  color: '#ddd'
                }
            },
            data: dataTopN[i].data.map(function(ele) {
                return ele.name
            }).reverse()
        },
        geo: {
            map: 'world',
            show: true,
            roam: true,
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#091632',
                    borderColor: '#1773c3',
                    shadowColor: '#1773c3',
                    shadowBlur: 20
                }
            }
        },
        series: [{
                label: {
                    normal: {
                        show: false,
                        formatter: '{c}'
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: data[i].data
            },
            {
                name: '前5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData2(data[i].data),
                symbolSize: 1,
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: function(p) {
                            return p.name + ' : ' + formatNum(p.value[2])
                        },
                        position: 'right',
                        show: true,
                        color: 'white',
                        fontSize: 15,
                        fontWeight: 'bold',
                        shadowColor: 'black',
                        shadowBlur: 10
                    }
                },
              
                zlevel: 1
            },
         
        ]
    })
}