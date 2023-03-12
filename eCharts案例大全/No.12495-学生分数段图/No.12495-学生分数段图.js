
//五个柱子的渐变色很麻烦
var zcol1 = {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,//上下渐变
        colorStops: [{
            offset: 0,
            color: '#ea5252' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#fbdcdc' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    }
var zcol2 = {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,//上下渐变
        colorStops: [{
            offset: 0,
            color: '#ff9417' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#ffead0' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    }
var zcol3 = {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,//上下渐变
        colorStops: [{
            offset: 0,
            color: '#ffbd0a' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#fff1ce' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    }
var zcol4 = {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,//上下渐变
        colorStops: [{
            offset: 0,
            color: '#1aa6ff' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#d1eeff' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    }
var zcol5 = {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,//上下渐变
        colorStops: [{
            offset: 0,
            color: '#1ace4a' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#d1f5db' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    }
option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    title:{
      text:'成绩总览',
      left:'center'
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        containLabel: true
    },
    backgroundColor:'#fff',
    xAxis : [
        {
            name:'分数',
            nameTextStyle:{
                color:'#666666'
            },
            type : 'category',
            data : ['0-59', '60-69', '70-79', '80-89', '90-100'],
            axisTick: {
                alignWithLabel: false,
            },
            axisLine:{
              lineStyle:{
                  color:'#cccccc'
              }
            },
            axisLabel:{
                textStyle:{
                    fontSize:14,
                    color:'#999999'
                }
            }
        }
    ],
    yAxis : [
        {
            name:'人数',
            type : 'value',
            axisLabel:{
                textStyle:{
                    fontSize:14,
                    color:'#999999'
                }
            },
            axisLine:{
              lineStyle:{
                  color:'#cccccc'
              }
            },
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#e8e8e8',
                    type:'dashed'
                }
            },
            nameTextStyle:{
                color:'#666666'
            }
        }
    ],
    series : [
        {
            name:'',
            type:'bar',
            barWidth: '30%',
            data:[5,2,3,10,30],
            label:{
                normal:{
                    show:true,
                    position:'top',
                    textStyle:{
                        fontSize:25,
                    }
                }
            },
            
            itemStyle: {
                normal: {
                    barBorderRadius: [8, 8, 0, 0],
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          zcol1,zcol2,zcol3,zcol4,zcol5
                        ];
                        return colorList[params.dataIndex]
                    },
                    label:{
                        color: ['#ea5252','#ff9417','#ffbd0a','#1aa6ff','#1ace4a'],
                    }
                }
            },
        }
    ]
};
