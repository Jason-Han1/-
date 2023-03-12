option = {
    tooltip: {
        show: true,
        formatter: function(val){
            return val.value[3]
        }
    },
    xAxis: [
        {
          type: 'time',
          splitLine: {
            show: false
          },
          min: new Date("2020-5-19 00:00:00"),
          max: new Date("2020-5-19 24:00:00")
        },
        {
          type: 'time',
          splitLine: {
            show: false
          },
          min: new Date("2020-5-19 00:00:00"),
          max: new Date("2020-5-19 24:00:00")
        },
    ],
    yAxis: [
        {
            type: 'category',
            data: ['手术间一','手术间二']
        }
    ],
    dataZoom: [
        {
          show: true,
          type: 'slider',
          height: 20,
          bottom: 25,
          xAxisIndex:[0,1],
          textStyle: {
            color: '#000'
          },
        },
        {
          show: true,
          orient:'vertical',
          type: 'slider',
          right: 40,
          width: 20,
          start: 0,
          end: 100,
          textStyle: {
            color: '#000'
          },
        }
    ],
    series: [
        {
            name:'背景板',
            type: 'custom',
            renderItem: renderItem,
            encode: { 
                x: 1, 
                y: 0,
                tooltip: 2,
                label: 3 
            },
            z: 1,
            itemStyle: {normal: {color: "white"}},
            label: {
                show: true,
                position: 'insideTopLeft',
                color:'red',
                formatter: function(value){
                    return '{a|}{b| '+value.value[3]+'}'
                },
                rich: {
                    a: {
                        borderWidth: 1,
                        borderColor:'#4D4D4D'
                    },
                    b: {
                        color:'black'
                    }
                }
            },
            data: [
                {
                    name:  "手术1",
                    value: [0, new Date("2020-5-19 09:00:00"), new Date("2020-5-19 15:00:00"), '阑尾手术','肝胆内科 张医生'],
                },
                {
                    name:  "手术2",
                    value: [1, new Date("2020-5-19 09:00:00"), new Date("2020-5-19 15:00:00"), '阑尾手术','肝胆内科 张医生'],
                },
                {
                    name:  "手术3",
                    value: [1, new Date("2020-5-19 17:00:00"), new Date("2020-5-19 22:00:00"), '阑尾手术','肝胆内科 李医生'],
                }
            ]
        },
        {
            name:'折线背景',
            type: 'custom',
            renderItem: renderItem4,
            encode: { 
                x: 1, 
                y: 0
            },
            z: 2,
            itemStyle: {
                color: "#F0EFF5"
            },
            data: [
                {
                    name:  "手术1",
                    value: [0, new Date("2020-5-19 09:00:00"), new Date("2020-5-19 15:00:00")],
                    
                },
                {
                    name:  "手术2",
                    value: [1, new Date("2020-5-19 09:00:00"), new Date("2020-5-19 15:00:00")],
                    
                },
                {
                    name:  "手术3",
                    value: [1, new Date("2020-5-19 17:00:00"), new Date("2020-5-19 22:00:00")],
                }
            ]
        },
        {
            name:'顶部条',
            type: 'custom',
            renderItem: renderItem2,
            tooltip:{
              show: false  
            },
            encode: { x: 1, y: 0 },
            itemStyle: {
                color: "#007AFF"
            },
            data: [
                {
                    name:  "手术1",
                    value: [0, new Date("2020-5-19 09:00:00"), new Date("2020-5-19 15:00:00")],
                },
                {
                    name:  "手术2",
                    value: [1, new Date("2020-5-19 09:00:00"), new Date("2020-5-19 15:00:00")],
                },
                {
                    name:  "手术3",
                    value: [1, new Date("2020-5-19 17:00:00"), new Date("2020-5-19 22:00:00")],
                }
            ]
        },
        {
            name:'底部文字',
            type: 'custom',
            renderItem: renderItem3,
            encode: { x: 1, y: 0 },
            z: 2,
            itemStyle: {normal: {color: "transparent"}},
            label: {
                show: true,
                position: 'insideBottomLeft',
                color:'red',
                formatter: function(value){
                    return '{a|}{b| '+value.value[4]+'}'
                },
                rich: {
                    a: {
                        borderWidth: 1,
                        borderColor:'#4D4D4D'
                    },
                    b: {
                        color:'black',
                    }
                }
            },
            data: [
                {
                    name:  "手术1",
                    value: [0, new Date("2020-5-19 09:00:00"), new Date("2020-5-19 15:00:00"), '阑尾手术','肝胆内科 张医生'],
                },
                {
                    name:  "手术2",
                    value: [1, new Date("2020-5-19 09:00:00"), new Date("2020-5-19 15:00:00"), '阑尾手术','肝胆内科 张医生'],
                },
                {
                    name:  "手术3",
                    value: [1, new Date("2020-5-19 17:00:00"), new Date("2020-5-19 22:00:00"), '阑尾手术','肝胆内科 李医生'],
                }
            ]
        },
        {
            name: '开始时间',
            type: 'line',
            symbol: 'circle' ,
            symbolSize: 4,
            z: 3,
            itemStyle: {
                color:'red'
            },
            lineStyle:{
                color: 'rgba(0,0,0,0)'
            },
            tooltip:{
              show:true,
              formatter:function(value){
                  return value.value[2];
              }
            },
            data:[
              [new Date('2020-5-19 10:00:00'), 0, 30],
              [new Date("2020-5-19 10:00:00"), 1, 30]
            ]
        },
        {
            name: '结束时间',
            type: 'line',
            symbol: 'circle' ,
            symbolSize: 4,
            z: 3,
            itemStyle: {
                color:'green'
            },
            lineStyle:{
                color: 'rgba(0,0,0,0)'
            },
            data:[
              [new Date('2020-5-19 11:00:00'), 0, 40],
              [new Date("2020-5-19 11:00:00"), 1, 40]
            ]
        },
        {
            name:'间隔时间',
            type: 'custom',
            renderItem: renderItem5,
            encode: { 
                x: 1, 
                y: 0,
                tooltip: 2,
                label: 3 
            },
            z: 5,
            itemStyle: { color: "orange" },
            label: {
                show:true,
                position: 'inside',
                color:'white'
            },
            data: [
                {
                    name:  "手术1",
                    value: [0, new Date("2020-5-19 15:00:00"), new Date("2020-5-19 17:00:00"), '间隔时间','肝胆内科 张医生'],
                },
                {
                    name:  "手术2",
                    value: [1, new Date("2020-5-19 15:00:00"), new Date("2020-5-19 17:00:00"), '间隔时间','肝胆内科 张医生'],
                }
            ]
        },
        {
            name:'上班时间',
            type: 'custom',
            renderItem: renderItem6,
            encode: { x: 1, y: 0 },
            itemStyle: {color: "red"},
            z: 4,
            data: [
                {
                    name:  "上班时间",
                    value: [0, new Date("2020-5-19 9:00:00"), new Date("2020-5-19 9:02:00")],
                },
                {
                    name:  "上班时间",
                    value: [1, new Date("2020-5-19 9:00:00"), new Date("2020-5-19 9:02:00")],
                },
            ]
        },
        {
            name:'下班时间',
            type: 'custom',
            renderItem: renderItem6,
            encode: { x: 1, y: 0 },
            itemStyle: {color: "green"},
            z: 4,
            data: [
                {
                    name:  "下班时间",
                    value: [0, new Date("2020-5-19 17:00:00"), new Date("2020-5-19 17:02:00")],
                },
                {
                    name:  "下班时间",
                    value: [1, new Date("2020-5-19 17:00:00"), new Date("2020-5-19 17:02:00")],
                },
            ]
        },
    ]
};

function renderItem6(params, api) {
    var categoryIndex = api.value(0);  //获取data中的value参数为下标
    var start = api.coord([api.value(1), categoryIndex]);
    var end = api.coord([api.value(2), categoryIndex]);
    var height = api.size([0, 1])[1] ;
    var rectShape = echarts.graphic.clipRectByRect({
            x: start[0],
            y: start[1] - height / 2,
            width: end[0] - start[0],
            height: height
        }, {
            x: params.coordSys.x,
            y: params.coordSys.y,
            width: params.coordSys.width,
            height: params.coordSys.height
        });
    return rectShape && {
        type: 'rect',
        shape: rectShape,
        style: api.style()
    };
}
function renderItem5(params, api) {
    var categoryIndex = api.value(0);  //获取data中的value参数为下标
    var start = api.coord([api.value(1), categoryIndex]);
    var end = api.coord([api.value(2), categoryIndex]);
    var allHeight = api.size([0, 1])[1];
    var height = allHeight * 0.8;
    var rectShape = echarts.graphic.clipRectByRect({
            x: start[0],
            y: start[1] - height / 2 - allHeight*0.02,
            width: end[0] - start[0],
            height: height + allHeight*0.02
        }, {
            x: params.coordSys.x,
            y: params.coordSys.y,
            width: params.coordSys.width,
            height: params.coordSys.height
        });
    return rectShape && {
        type: 'rect',
        shape: rectShape,
        style: api.style()
    };
}
function renderItem4(params, api) {
    var categoryIndex = api.value(0);  //获取data中的value参数为下标
    var start = api.coord([api.value(1), categoryIndex]);
    var end = api.coord([api.value(2), categoryIndex]);
    var allHeight = api.size([0, 1])[1];
    var height = allHeight * 0.2;
    var rectShape = echarts.graphic.clipRectByRect({
            x: start[0],
            y: start[1] - height/2, //底部高度百分比一半加上自身高度
            width: end[0] - start[0],
            height: height
        }, {
            x: params.coordSys.x,
            y: params.coordSys.y,
            width: params.coordSys.width,
            height: params.coordSys.height
        });
    return rectShape && {
        type: 'rect',
        shape: rectShape,
        style: api.style()
    };
}
function renderItem3(params, api) {
    var categoryIndex = api.value(0);  //获取data中的value参数为下标
    var start = api.coord([api.value(1), categoryIndex]);
    var end = api.coord([api.value(2), categoryIndex]);
    var allHeight = api.size([0, 1])[1];
    var height = allHeight * 0.02;
    var rectShape = echarts.graphic.clipRectByRect({
            x: start[0],
            y: start[1] - allHeight * -0.38, //底部高度百分比一半加上自身高度
            width: end[0] - start[0],
            height: height
        }, {
            x: params.coordSys.x,
            y: params.coordSys.y,
            width: params.coordSys.width,
            height: params.coordSys.height
        });
    return rectShape && {
        type: 'rect',
        shape: rectShape,
        style: api.style()
    };
}
function renderItem2(params, api) {
    var categoryIndex = api.value(0);  //获取data中的value参数为下标
    var start = api.coord([api.value(1), categoryIndex]);
    var end = api.coord([api.value(2), categoryIndex]);
    var allHeight = api.size([0, 1])[1];
    var height = allHeight * 0.02;
    var rectShape = echarts.graphic.clipRectByRect({
            x: start[0],
            y: start[1] - allHeight * 0.42, //底部高度百分比一半加上自身高度
            width: end[0] - start[0],
            height: height
        }, {
            x: params.coordSys.x,
            y: params.coordSys.y,
            width: params.coordSys.width,
            height: params.coordSys.height
        });
    return rectShape && {
        type: 'rect',
        shape: rectShape,
        style: api.style()
    };
}
function renderItem(params, api) {
    var categoryIndex = api.value(0);  //获取data中的value参数为下标
    var start = api.coord([api.value(1), categoryIndex]);
    var end = api.coord([api.value(2), categoryIndex]);
    var height = api.size([0, 1])[1] * 0.8;
    var rectShape = echarts.graphic.clipRectByRect({
            x: start[0],
            y: start[1] - height / 2,
            width: end[0] - start[0],
            height: height
        }, {
            x: params.coordSys.x,
            y: params.coordSys.y,
            width: params.coordSys.width,
            height: params.coordSys.height
        });
    return rectShape && {
        type: 'rect',
        shape: rectShape,
        style: api.style()
    };
}