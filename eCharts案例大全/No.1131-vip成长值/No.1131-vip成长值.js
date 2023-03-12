
var alias            = '成长值';
var value            = 11600;
var currentVipLevel  = 4;
var maxVipLevel      = 7;
var lineWidth        = 12;
var primaryColor     = '#EAB864';
var grayColor        = '#AAAAAA';
var centerArr        = ['50%', '85%'];
option = {
    backgroundColor: '#fff',
    series: [
       
        {
            name: '圆点刻度',
            type: 'gauge',
            radius: '100%',
            center: centerArr,
            z:3,
            splitNumber: maxVipLevel,
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: maxVipLevel,
            axisLine: {
                show:false
            },
            splitLine:{
                show:false
            },
            axisLabel: {
                show: true,
                distance:-28,
                formatter: function (val) {
                    var level =  (val+1);
                    //图表中间会员等级数据展示
                    if(level <= currentVipLevel){
                        return '{primary|}';
                    }else{
                        return '{noraml|}';
                    }
                },
                rich: {
                    primary: {
                        width:34,
                        height:34,
                        borderRadius:20,
                        backgroundColor:primaryColor
                    },
                    noraml: {
                        width:34,
                        height:34,
                        borderRadius:20,
                        backgroundColor:grayColor
                    }
                    
                },
            },
            axisTick:{
                splitNumber:1,
                lineStyle:{
                    opacity:0,
                }
            },
            detail:{
                show:false
            },
            pointer:{
                show:false
            }
        },
        {
            name: '线条外圈', //刻度背景
            type: 'gauge',
            z: 2,
            radius: '100%',
            splitNumber: maxVipLevel,
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: maxVipLevel,
            center: centerArr, //整体的位置设置
            progress:{ 
                show: true, 
                width: lineWidth,
                itemStyle: {
                    color: primaryColor
                 }
            },
            splitLine: {
                show:false
            },
            
            data: [
                {
                    show: false,
                    value: currentVipLevel-1,
                },
            ],
            axisLine:{
                lineStyle:{
                    width:lineWidth,
                    color:[
                        [1,grayColor]
                    ]
                }
            },
            axisLabel: {
                distance:-100,
                show: true,
                formatter: function (val) {
                    var level =  (val+1);
                    //图表中间会员等级数据展示
                    if(level == currentVipLevel){
                        return '{current|V' + level +'\n}';
                    }else if(currentVipLevel < level){
                        return '{gray|V' + level +'\n}';
                    }else{
                        return '{noraml|V' + level +'\n}';
                    }
                },
                rich: {
                    current: {
                        fontSize: 25,
                        color: '#fff',
                        backgroundColor:primaryColor,
                        padding:[5,15],
                        borderRadius:20
                    },
                    noraml: {
                        fontSize: 25,
                        color: primaryColor
                    },
                    gray:{
                        fontSize: 25,
                        color: grayColor
                    }
                },
            },
            pointer: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            detail: {
                show: 0,
            }
        },

        {
            name: '刻度尺', //刻度背景
            type: 'gauge',
            z: 1,
            radius: '100%',
            splitNumber: 0,
            startAngle: -90,
            center: centerArr, //整体的位置设置
            axisLine: {
                show: false,
            },
            data: [
                {
                    value:value
                }
            ],
            axisLabel: {
                show: false,
            },
            pointer: {
                show: false,
            },
            axisTick: {
                show: false
            },
            detail: {
                valueAnimation: true,
                formatter: function (val) {
                    //图表中间文字数据展示
                    return '{bold|' + val +'\n}{gray|' + alias + '}';
                },
                rich: {
                    gray: {
                        fontSize: 44,
                        color: '#333',
                    },
                    bold: {
                        fontSize: 100,
                        lineHeight:140,
                        color: '#000'
                    }
                },
                offsetCenter: ['0', '-30%'],
            }
        },
    ],
};
