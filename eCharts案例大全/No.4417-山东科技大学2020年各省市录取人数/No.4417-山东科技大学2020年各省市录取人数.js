var province = ['北京', '广东', '浙江', '湖南', '河南', '安徽', '重庆', '山东', '江西', '四川', '江苏', '湖北', '福建', '上海', '广西', '河北', '陕西', '云南', '海南', '黑龙江', '辽宁', '山西', '天津', '甘肃', '内蒙古', '新疆', '宁夏', '吉林', '贵州', '青海', '西藏'];
var data = [5, 10, 50, 50, 100, 90, 40, 5399, 75, 120, 59, 40, 70, 10, 100, 150, 100, 100, 40, 60, 40, 110, 30, 60, 40, 32, 110, 35, 135, 20, 25]
var res = [];
for (var j = 0; j < data.length; j++) {
    res.push({
        name: province[j],
        value: data[j]
    });
}
res.sort(function(a, b) {
    return a.value - b.value;
});
var res1 = [];
var res2 = [];
for (var t = 0; t < 31; t++) {
    res1[t] = res[res.length - 1 - t].name;
    res2[t] = res[res.length - 1 - t].value;
}
var geoCoordMap = {};
var toolTipData = [ 
    {name:"北京",value:[{name:"综合改革",value:5}]},
    {name:"天津",value:[{name:"综合改革",value:30}]},
    {name:"河北",value:[{name:"文史",value:4},{name:"理工",value:135},{name:"中外理工",value:5},{name:"美术",value:6}]},
    {name:"山西",value:[{name:"文史",value:4},{name:"理工",value:90},{name:"中外理工",value:10},{name:"美术",value:6}]},
    {name:"内蒙古",value:[{name:"文史",value:8},{name:"理工",value:32}]},
    {name:"辽宁",value:[{name:"文史",value:10},{name:"理工",value:25},{name:"中外理工",value:5}]},
    {name:"吉林",value:[{name:"文史",value:12},{name:"理工",value:23}]},
    {name:"黑龙江",value:[{name:"文史",value:4},{name:"理工",value:56}]},
    {name:"上海",value:[{name:"综合改革",value:10}]},
    {name:"江苏",value:[{name:"理工",value:49},{name:"中外文史",value:4},{name:"美术",value:6}]},
    {name:"浙江",value:[{name:"综合改革",value:50}]},
    {name:"安徽",value:[{name:"文史",value:8},{name:"理工",value:66},{name:"中外文史",value:5},{name:"中外理工",value:5},{name:"美术",value:6}]},
    {name:"福建",value:[{name:"文史",value:6},{name:"理工",value:54},{name:"中外理工",value:10}]},
    {name:"江西",value:[{name:"文史",value:8},{name:"理工",value:67}]},
    {name:"山东",value:[{name:"总录取人数",value:5399}]},
    {name:"河南",value:[{name:"文史",value:12},{name:"理工",value:71},{name:"中外文史",value:4},{name:"中外理工",value:4},{name:"美术",value:9}]},
    {name:"湖北",value:[{name:"文史",value:12},{name:"理工",value:8},{name:"理工-国家专项",value:20}]},
    {name:"湖南",value:[{name:"理工",value:40},{name:"理工-国家专项",value:10}]},
    {name:"重庆",value:[{name:"文史",value:8},{name:"理工",value:32}]},
    {name:"四川",value:[{name:"文史",value:16},{name:"理工",value:86},{name:"中外文史",value:4},{name:"中外理工",value:4},{name:"理工-国家专项",value:10}]},
    {name:"贵州",value:[{name:"文史-一本",value:2},{name:"理工-一本",value:10},{name:"文史-二本",value:4},{name:"理工-二本",value:89},{name:"理工-国家专项一本",value:16},{name:"理工-国家专项二本",value:14}]},
    {name:"云南",value:[{name:"文史",value:8},{name:"理工",value:92}]},
    {name:"西藏",value:[{name:"理工",value:15},{name:"理工-国家专项",value:10}]},
    {name:"陕西",value:[{name:"文史",value:8},{name:"理工",value:89},{name:"美术",value:3}]},
    {name:"甘肃",value:[{name:"理工",value:44},{name:"理工-国家专项",value:16}]},
    {name:"青海",value:[{name:"文史",value:6},{name:"理工",value:14}]},
    {name:"宁夏",value:[{name:"文史",value:8},{name:"理工",value:102}]},
    {name:"新疆",value:[{name:"文史",value:16},{name:"理工",value:16}]},
    {name:"广东",value:[{name:"文史",value:2},{name:"理工",value:8}]},
    {name:"广西",value:[{name:"文史",value:20},{name:"理工",value:80}]},
    {name:"海南",value:[{name:"综合改革",value:40}]},
];
console.log(data)
console.log(toolTipData)
var max = 480,
    min = 9; // todo 
var maxSize4Pin = 100,
    minSize4Pin = 20;

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
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

var option = {
    //提示框信息
    tooltip: {
        show: true,
        formatter: function(params) {
            return params.name + '：' + params.value
        },
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
                // console.log(convertData(data))
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
                // console.log(convertData(data))
                return toolTiphtml;
            }
        }
    },
    //视觉映射
    visualMap: {
        type: 'piecewise',
        text: ['高', '低'],
        pieces: [{
                min: 151,
                color: "#bb0000"
            },
            {
                min: 101,
                max: 150,
                color: "#c92626"
            },
            {
                min: 51,
                max: 100,
                color: "#ce6c2b"
            },
            {
                min: 21,
                max: 50,
                color: "#c4aa29"
            },
            {
                min: 11,
                max: 20,
                color: "#92b733"
            },
            {
                min: 1,
                max: 10,
                color: "#6ead51"
            },
        ],
        orient: 'vertical',
        itemSymbol: 'circle',
        itemWidth: 20,
        itemHeight: 20,
        showLabel: true,
        seriesIndex: [0],
        textStyle: {
            color: '#7B93A7'
        },
        bottom: '2%',
        left: "3%",
    },
    grid: {
        right: '5%',
        top: '20%',
        bottom: '10%',
        width: '20%'
    },
    xAxis: {
        min: 0,
        max: 4000,
        show: false
    },
    yAxis: {
        inverse: true,
        offset: '2',
        'type': 'category',
        data: res1,
        nameTextStyle: {
            color: '#fff'
        },
        axisTick: {
            show: false,
        },
        //Y轴刻度标签
        axisLabel: {
            textStyle: {
                fontSize: 11,
                color: '#000000',
            },
            interval: 0
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
    },
    // 地理坐标系组件,绘制地图,散点图等
    geo: {
        map: "china",
        roam: !1,
        scaleLimit: {
            min: 1,
            max: 2
        },
        zoom: 1.2,
        right: '35%',
        left: '20%',
        top:'20%',
        label: {
            normal: {
                show: !0,
                fontSize: "10",
                color: "rgba(0,0,0,0.7)"
            }
        },
        itemStyle: {
            normal: {
                //shadowBlur: 50,
                //shadowColor: 'rgba(0, 0, 0, 0.2)',
                borderColor: "rgba(0, 0, 0, 0.2)"
            },
            emphasis: {
                areaColor: "#f2d5ad",
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                borderWidth: 0
            }
        }
    },
    //标题
    title:{
             text: '山东科技大学2020年各省市录取人数',
             //subtext: '   ',
             left: '25%',
             top: '1%',
             textStyle: {
             color: 'black',
             fontSize: 25
            }
    },
    series: [{
            name: 'mapSer',
            type: 'map',
            map: 'china',
            roam: false,
            geoIndex: 0,
            label: {
                show: false,
            },
            data: res
        },
        {
            name: 'barSer',
            type: 'bar',
            zlevel: 3,
            barWidth: '90%',
            label: {
                normal: {
                    show: true,
                    fontSize: 10,
                    position: 'right',
                    formatter: '{c}'
                }
            },
            data: res2,
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [{
                                colorStops: [{
                                    offset: 0,
                                    color: '#FF0000' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#990000' // 100% 处的颜色
                                }]
                            },
                            {
                                colorStops: [{
                                    offset: 0,
                                    color: '#00C0FA' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#2F95FA' // 100% 处的颜色
                                }]
                            }
                        ];
                        if (params.dataIndex < 3) {
                            return colorList[0]
                        } else {
                            return colorList[1]
                        }
                    },
                }
            }
        }
    ]
};