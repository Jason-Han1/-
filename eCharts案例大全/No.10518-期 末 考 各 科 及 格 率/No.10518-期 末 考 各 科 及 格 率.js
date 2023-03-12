var xData = function() {
    var data = [];
    for (var i = 2020; i < 2101; i+=5) {
        data.push(i + "");
    }
    return data;
}();


var maerdaifu = [0,5216,10779,16704,23008,29707,36818,44358,52345,60796,69729,79161,89112,99599,110639,122252,134455,147267,160705,174787,189530,204954,221074,237908,255472,273784,292859,312713,333362,354822,377106,400229,424205,449049,474772,501387,528908,557346,586711,617016,648271,680486,713671,747835,782987,819137,856291,894458,933646,973862,1015113,1057405,1100745,1145139,1190593,1237113,1284703,1333370,1383118,1433952,1485877,1538897,1593017,1648241,1704574,1762019,1820581,1880263,1941070,2003005,2066072,2130276,2195619,2262105,2329739,2398524,2468463,2539561,2611822,2685248,2759844];
var tuwalu = [0,114,234,360,490,627,769,917,1071,1231,1397,1571,1751,1938,2132,2333,2542,2759,2984,3216,3458,3708,3967,4235,4512,4799,5096,5403,5720,6049,6388,6738,7100,7474,7861,8260,8672,9097,9536,9988,10456,10938,11435,11948,12477,13022,13584,14164,14762,15378,16013,16667,17341,18036,18752,19489,20249,21031,21838,22668,23523,24404,25311,26246,27208,28198,29219,30269,31351,32465,33613,34794,36010,37263,38552,39880,41248,42656,44107,45600,47138];
var jilibasi = [0,1186,2432,3741,5114,6553,8062,9641,11295,13024,14833,16723,18697,20759,22910,25155,27496,29937,32480,35129,37887,40759,43747,46856,50090,53452,56946,60577,64349,68266,72334,76557,80939,85486,90202,95094,100166,105424,110874,116521,122372,128433,134709,141209,147938,154903,162112,169571,177289,185272,193529,202068,210897,220025,229460,239212,249289,259702,270460,281573,293052,304906,317147,329786,342835,356304,370207,384555,399362,414640,430402,446663,463437,480737,498580,516980,535952,555514,575680,596470,617898];

var m =[0, 29707, 69729, 122252, 189530, 273784, 377106, 501387, 648271, 819137, 1015113, 1237113, 1485877, 1762019, 2066072, 2398524, 2759844];
var t = [0, 627, 1397, 2333, 3458, 4799, 6388, 8260, 10456, 13022, 16013, 19489, 23523, 28198, 33613, 39880, 47138];
var j = [0, 6553, 14833, 25155, 37887, 53452, 72334, 95094, 122372, 154903, 193529, 239212, 293052, 356304, 430402, 516980, 617898];











option = {
    backgroundColor: "#282828",
    "title": {
        "text": "期 末 考 各 科 及 格 率",
        // "subtext": "点击查看原样式",
        // 'sublink': 'https://gallery.echartsjs.com/editor.html?c=xwOlg7TXru',
        x: "center",

        textStyle: {
            color: '#fff',
            fontSize: '30'
        },
        // subtextStyle: {
        //     color: '#90979c',
        //     fontSize: '16',

        // },
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#00F5FF"
            }

        },
    },
    
    "grid": {
        
        "borderWidth": 10,
        "top": 110,
        "bottom": 95,
        textStyle: {
            color: "#fff"
        }
    },
    "legend": {
        x: '10%',
        top: '10%',
        textStyle: {
            color: '#90979c',
        },
        "data": ['马尔代夫','图瓦卢','基里巴斯']
    },
     

    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#90979c'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "data": xData,
    }],
    
    "yAxis": [{
        "type": "value",
        "splitLine": {
            "show": false
        },
       
        "axisLine": {
            lineStyle: {
                color: '#90979c'
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "splitArea": {
            "show": false
        },

        scale:'true'

    }],
    dataZoom:[{
        type: 'slider',
        textStyle:{
            color: 'white',
            fontSize: 20
        },
        bottom: 30,
        x: 80,
        handleSize: '110%',
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        minSpan: 10,
        handleStyle:{
            color: 'black',
            borderColor: 'red',
            borderType: 'solid'
        },
        
      
        
    },
    {
        type:'inside',
        dataBackground:{
            lineStyle: {
                color: 'red'
            }
        },

    },
    ],












    series: [
        {
            name: "马尔代夫",
            type: 'bar',
            barWidth: 30,
            itemStyle: {
                normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#7b4397'},
                        {offset: 1, color: '#dc2430'}
                    ]
                )
            }
        },
            // "barGap": "-100%",
        data:m
        },// 语文


        {
            "name": "图瓦卢",
            "type": "bar",
            barWidth: 40,
            "barGap": "-100%",
            "itemStyle": {
                "normal": {
                    "color": "DarkSlateGray",
                    "label": {
                        "show": true,
                         "textStyle": {
                            "color": "#fff"
                         },
                        "position": "insideTop",

                    }
                }
            },
            data:t
        },// 数学
        
        
        {
            "name": "基里巴斯",
            "type": "bar",
            barWidth: 40,
            "barGap": "-100%",
            "itemStyle": {
                "normal": {
                    "color": "#BC8F8F",
                    "label": {
                        "show": true,
                        "textStyle": {
                            "color": "#fff"
                        },
                        "position": "insideTop",
                    }
                }
            },
            data:j
        },//英语
        
        
        // {
        //     "name": "物理",
        //     "type": "bar",
        //     barWidth: 40,
        //     "barGap": "-100%",
        //     "itemStyle": {
        //         "normal": {
        //             "color": "#8B658B",
        //             "label": {
        //                 "show": true,
        //                 "textStyle": {
        //                     "color": "#fff"
        //                 },
        //                 "position": "insideTop",
        //             }
        //         }
        //     },
        //     "data": [
        //         41.2,
        //         42.0,
        //         40.0,
        //         23.5,
        //         44.0,
        //         51.0,
        //         41.2,
        //         96.1,
        //         90.2
        //     ],
        // },// 物理
        
        
        // {
        //     "name": "化学",
        //     "type": "bar",
        //     barWidth: 40,

        //     "barGap": "-100%",
        //     "itemStyle": {
        //         "normal": {
        //             "color": "#838B83",
        //             "label": {
        //                 "show": true,
        //                 "textStyle": {
        //                     "color": "#fff"
        //                 },
        //                 "position": "insideTop",
        //             }
        //         }
        //     },
        //     "data": [
        //         7.8,
        //         12.2,
        //         16.0,
        //         7.8,
        //         8.0,
        //         24.5,
        //         7.8,
        //         80.4,
        //         84.0
        //     ],
        // },// 化学
        
        
        // {
        //     "name": "生物",
        //     "type": "bar",
        //     barWidth: 40,
        //     "barGap": "-100%",
        //     "itemStyle": {
        //         "normal": {
        //             "color": "rgba(205,144,128,0.5)",
        //             "label": {
        //                 "show": true,
        //                 "textStyle": {
        //                     "color": "#fff"
        //                 },
        //                 "position": "insideTop",
        //             }
        //         }
        //     },
        //     "data": [
        //         51.0,
        //         53.1,
        //         62.0,
        //         58.8,
        //         60.0,
        //         57.1,
        //         49.0,
        //         100.0,
        //         98.0
        //     ],
        // },// 生物
            
    ]

    
    
    
    
    
    
    
    
    
    
    
}