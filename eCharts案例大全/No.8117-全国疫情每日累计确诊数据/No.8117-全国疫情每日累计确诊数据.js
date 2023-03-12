//var name_title = "新型冠状病毒累计确诊·中国"
var name_title = "全国疫情每日累计确诊数据"
//var subname = '信科学生居住地分布图'
var subname = '截止至2020-04-07'
var nameColor = " rgb(0, 0, 0)"
var name_fontFamily = '汉仪简菱心'
var subname_fontSize = 15
var name_fontSize = 30
var mapName = 'china'
var data = [
    {name:"湖北",value:67803},
    {name:"广东",value:1533},
    {name:"河南",value:1276},
    {name:"浙江",value:1265},
    {name:"湖南",value:1019},
    {name:"安徽",value:990},
    {name:"江西",value:937},
    {name:"江苏",value:651},
    {name:"重庆",value:579},
    {name:"山东",value:781},
    {name:"四川",value:560},
    {name:"黑龙江",value:544},
    {name:"北京",value:587},
    {name:"上海",value:538},
    {name:"河北",value:327},
    {name:"福建",value:351},
    {name:"广西",value:254},
    {name:"陕西",value:256},
    {name:"云南",value:184},
    {name:"海南",value:168},
    {name:"贵州",value:147},
    {name:"山西",value:138},
    {name:"天津",value:180},
    {name:"辽宁",value:144},
    {name:"甘肃",value:139},
    {name:"吉林",value:98},
    {name:"新疆",value:76},
    {name:"内蒙古",value:1213},
    {name:"宁夏",value:75},
    {name:"香港",value:914},
    {name:"台湾",value:373},
    {name:"青海",value:18},
    {name:"澳门",value:44},
    {name:"西藏",value:1},
    ];
    
var geoCoordMap = {};
var toolTipData = []
/*
var toolTipData = [ 
    {name:"北京",value:[{name:"文科",value:95},{name:"理科",value:82}]},
    {name:"天津",value:[{name:"文科",value:22},{name:"理科",value:20}]},
    {name:"河北",value:[{name:"文科",value:60},{name:"理科",value:42}]},
    {name:"山西",value:[{name:"文科",value:40},{name:"理科",value:41}]},
    {name:"内蒙古",value:[{name:"文科",value:23},{name:"理科",value:24}]},
    {name:"辽宁",value:[{name:"文科",value:39},{name:"理科",value:28}]},
    {name:"吉林",value:[{name:"文科",value:41},{name:"理科",value:41}]},
    {name:"黑龙江",value:[{name:"文科",value:35},{name:"理科",value:31}]},
    {name:"上海",value:[{name:"文科",value:12},{name:"理科",value:12}]},
    {name:"江苏",value:[{name:"文科",value:47},{name:"理科",value:45}]},
    {name:"浙江",value:[{name:"文科",value:57},{name:"理科",value:57}]},
    {name:"安徽",value:[{name:"文科",value:57},{name:"理科",value:52}]},
    {name:"福建",value:[{name:"文科",value:59},{name:"理科",value:57}]},
    {name:"江西",value:[{name:"文科",value:49},{name:"理科",value:42}]},
    {name:"山东",value:[{name:"文科",value:67},{name:"理科",value:52}]},
    {name:"河南",value:[{name:"文科",value:69},{name:"理科",value:68}]},
    {name:"湖北",value:[{name:"文科",value:60},{name:"理科",value:56}]},
    {name:"湖南",value:[{name:"文科",value:62},{name:"理科",value:52}]},
    {name:"重庆",value:[{name:"文科",value:47},{name:"理科",value:44}]},
    {name:"四川",value:[{name:"文科",value:65},{name:"理科",value:60}]},
    {name:"贵州",value:[{name:"文科",value:32},{name:"理科",value:30}]},
    {name:"云南",value:[{name:"文科",value:42},{name:"理科",value:41}]},
    {name:"西藏",value:[{name:"文科",value:5},{name:"理科",value:4}]},
    {name:"陕西",value:[{name:"文科",value:38},{name:"理科",value:42}]},
    {name:"甘肃",value:[{name:"文科",value:28},{name:"理科",value:28}]},
    {name:"青海",value:[{name:"文科",value:5},{name:"理科",value:5}]},
    {name:"宁夏",value:[{name:"文科",value:10},{name:"理科",value:8}]},
    {name:"新疆",value:[{name:"文科",value:36},{name:"理科",value:31}]},
    {name:"广东",value:[{name:"文科",value:63},{name:"理科",value:60}]},
    {name:"广西",value:[{name:"文科",value:29},{name:"理科",value:30}]},
    {name:"海南",value:[{name:"文科",value:8},{name:"理科",value:6}]},
];
*/

/*获取地图数据*/
myChart.showLoading();
var mapFeatures = echarts.getMap(mapName).geoJson.features;
myChart.hideLoading();
mapFeatures.forEach(function(v) {
    // 地区名称
    var name = v.properties.name;
    // 地区经纬度
    geoCoordMap[name] = v.properties.cp;

});

// console.log("============geoCoordMap===================")
// console.log(geoCoordMap)
// console.log("================data======================")
console.log(data)
console.log(toolTipData)
var max = 44,
    min = 0; // todo 
var maxSize4Pin = 50,
    minSize4Pin = 0;

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
    
        // document.write(data[i].value[0]);
        // document.write('\t');
        // document.write(data[i].value[1]);
        // document.write('\t\t');
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
            });
        }
    }
    return res;
};

option = {
    backgroundColor: '#FFFFFF', //背景色
    title: {
        text: name_title,
        subtext: subname,
        //x: 'center',
        left: 20,
        top: 20,
        textStyle: {
            color: nameColor,
            fontFamily: name_fontFamily,
            fontSize: name_fontSize,
            fontWeight: 'bolder',
        },
        subtextStyle:{
            fontSize:subname_fontSize,
            fontFamily:name_fontFamily
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            
            
            if (typeof(params.value)[2] == "undefined") {
                var toolTiphtml = ''
                for(var i = 0;i<toolTipData.length;i++){
                    if(params.name==toolTipData[i].name){
                        toolTiphtml += toolTipData[i].name+':<br>'
                        for(var j = 0;j<toolTipData[i].value.length;j++){
                            toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"
                        }
                    }
                }
                console.log(toolTiphtml)
                return toolTiphtml;
            } else {
                var toolTiphtml = ''
                for(var i = 0;i<toolTipData.length;i++){
                    if(params.name==toolTipData[i].name){
                        toolTiphtml += toolTipData[i].name+':<br>'
                        for(var j = 0;j<toolTipData[i].value.length;j++){
                            toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"
                        }
                    }
                }
                console.log(toolTiphtml)
                return toolTiphtml;
            }
        }
    },
    // legend: {
    //     orient: 'vertical',
    //     y: 'bottom',
    //     x: 'right',
    //     data: ['credit_pm2.5'],
    //     textStyle: {
    //         color: '#fff'
    //     }
    // },
    visualMap: {
        show: true,
        min: 1,
        max: 3000,
        left: 26,
        bottom: 40,
        showLabel: !0,
        //text: ['高', '低'], // 文本，默认为数值文本
        
        //calculable: true,
        
        seriesIndex: [1],
        /*
        inRange: {
            color: ['#FFFFFF', '#FF0000']
            // color: ['#3B5077', '#031525'] // 蓝黑
            // color: ['#ffc0cb', '#800080'] // 红紫
            // color: ['#3C3B3F', '#605C3C'] // 黑绿
            // color: ['#FFFF00', '#ff0000', '#5A0D43'] // 黑紫黑
            // color: ['#23074d', '#cc5333'] // 紫红
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#1488CC', '#2B32B2'] // 浅蓝
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿

        }
        */
        
        pieces:[
            {min: 1001, label: "> 1001 ", color:"#800000"},
            {min: 501, max: 1000, label: '501 - 1000 ', color:"#ff0000"},
            {min: 101, max: 500, label: '101 - 500 ', color:"#cd5c5c"},
            {min: 11, max: 100, label: '11 - 100 ', color:"#f08080"},
            {min: 0, max: 10, label: '0 - 10 ', color:"#ffe4e1"},
            ]
        
        /*
        pieces: [{
            gt: 1001,
            label: "> 1000 人",
            color: "#8f0000"
        }, {
            gte: 500,
            lte: 1000,
            label: "500 - 1000 人",
            color: "#ff4444"
        }, {
            gte: 101,
            lt: 499,
            label: "101 - 499 人",
            color: "#ff8888"
        }, {
            gt: 10,
            lt: 100,
            label: "10 - 100 人",
            color: "#ffcccc"
        }, {
            gt: 0,
            lt: 9,
            label: "0 - 9 人",
            color: "#ffffff"
        }],
        */
    },
    /*工具按钮组*/
    // toolbox: {
    //     show: true,
    //     orient: 'vertical',
    //     left: 'right',
    //     top: 'center',
    //     feature: {
    //         dataView: {
    //             readOnly: false
    //         },
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    geo: {
        show: true,
        map: mapName,
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
                areaColor: '#031525',
                borderColor: '#3B5077',
            },
            emphasis: {
                areaColor: '#2B91B7', // 地图
            }
        }
    },
    series: [{
            name: '散点',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: 25,
            label: {
                normal: {
                    formatter: '{b}',
                    //position: 'right',
                    color:'#000000',
                    textStyle:{
            		    fontSize: '10',		//字体大小
            		    fontWeight: 'bolder'		//字体加粗
            		},

                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#FFFF00',
                    // color: '#05C3F9', // 无效 //有效了
                    show: false
                }
            }
        },
        {
            type: 'map',
            map: mapName,
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: true, // 存在legend时显示
            label: {
                normal: {
                    color:'#ff00ff',
                    show: true
                    
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        color: '#000000'
                    }
                }
            },
            
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#031525',
                    borderColor: '#3B5077',
                    
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            },
            animation: true,
            data: convertData(data)
        }
    ]
};
myChart.setOption(option);