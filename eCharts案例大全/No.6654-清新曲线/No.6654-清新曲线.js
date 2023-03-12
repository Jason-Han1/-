
// markLine可用空格将label推向末尾
option = {
    grid:{
        left: '10%',
        right: '3%',
        top: '10%',
        bottom: '10%'
    },
    tooltip:{
        show:true,
        trigger: 'axis',

        axisPointer:{
            type:'line',
            lineStyle:{
                color:'#00aaff',
                width:1,
                type:'solid',
            },
            z:-100
        },
        formatter: function (params) {
            console.log(params)
            var res='<div><p>时间：'+params[0].name+'</p></div>'
            for(var i=0;i<params.length;i++){
                res+='<p>'+params[i].seriesName+'：'+params[i].data+'kW.h</p>'
            }
            return res;
        }
    },
    xAxis: {
        boundaryGap: false,
        type: 'category',
        axisTick:{
            show:false
        },

        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#808080',//左边线的颜色
                width:'1'//坐标线的宽度
            }
        },
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel:{
            interval:0
        }
    },
    yAxis: {
        type: 'value',
        name:"单位：kW.h",
        nameLocation:"end",
        nameGap:-10,
        nameTextStyle:{
            color:"#808080",
            padding:[0, 0,0,90]
        },
        max: function(value) {
            if(value.max<1){
                return 800
            }else{
                return value.max+200
            }
            // return value.max - 20;
        },
        axisTick:{
            show:false
        },
        splitLine:{
            show:false
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#808080',//左边线的颜色
                width:'1'//坐标线的宽度
            }
        },
    },
    series: [{

        data: [820, 932, 901, 934, 1290, 1330, 1320],
        name:"用电量",
        markLine: {
            data: [
                {type: 'average', name: '平均值'}
            ],
            lineStyle:{
                color:"rgba(200,200,200,1)",
                width:2
            },
            symbol:"none",
            label:{
                show:true,
                position:'middle',
                formatter: function (params) {
                    var res='            '+params.name+'：'+params.value;
                    return res;
                }

            },
        },
        type: 'line',
        smooth: true,
        areaStyle: {
            color:{
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                    offset: 0, color: 'rgba(184,232,255,0.8)' // 0% 处的颜色
                }, {
                    offset: 1, color: 'rgba(184,246,249,0.6)' // 100% 处的颜色
                }],
                global: false // 缺省为 false

            },
            shadowOffsetX:0,
            shadowOffsetY:10,
            shadowBlur:0,
            shadowColor:{
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                    offset: 0, color: 'red' // 0% 处的颜色
                }, {
                    offset: 1, color: 'blue' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }

        },
        lineStyle:{
            color:{
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                    offset: 0, color: '#00ABFF' // 0% 处的颜色
                }, {
                    offset: 1, color: '#00E3E6' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            },
            shadowColor:'rgba(0,197,243,0.5)',
            shadowBlur: 6,
            shadowOffsetY: 8,

            width:3
        },
        symbol:"circle",
        symbolSize:6,
        showAllSymbol:false,
        itemStyle:{
            color:"white",
            borderColor:"#00aaff",
            borderWidth:2
        }
    }]
};