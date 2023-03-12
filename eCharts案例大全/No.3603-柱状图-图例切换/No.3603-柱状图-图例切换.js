var data1 = [220, 182, 191, 234, 290, 330, 310,235,382,177,311];
var data2 = [22, 12, 91, 34, 90, 30, 31,35,32,77,31];
var xAxisData = ['尚未启动','达成协议','审核批复','清产核资','评估办理',
'注销办理','挂牌交易','工商变更','全面完成','进入司法','其他'];
var border = 2;
var borderData = data1.map(item => {
    return border;
});
option = {
    legend:{
        orient : 'horizontal',
		y : '2%', 
		x : 'center',
		itemGap : 16,
        data:[{
            name:'本月',
            textStyle:{
                fontSize:14,
                padding:[0,0,0,0],
                color:'#333333'
            },
            itemStyle:{
                color:{
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#DAD4FB' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#A79AF7' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },{
            name:'较上月新增',
            textStyle:{
                fontSize:14,
                padding:[0,0,0,0],
                color:'#333333'
            },
            itemStyle:{
                color:{
                    type:'linear',
                    x: 0,
                    y: 1,
                    x1: 0,
                    y1: 0,
                    colorStops:[{
                        offset:0,color:'#F7E9D1'
                    },{
                        offset:1,color:'#F5A623'
                    }]
                }
            }
        }]
    },
    xAxis: {
        axisLabel:{
          show:true,
          color:'#727272',
          fontSize:14,
        },
        axisLine:{
            show:true,
            lineStyle:{
                width:1,
                type:'solid',
                color:'#E5E5E5',
            }
        },
        axisTick:{
            show:false
        },
        splitLine:{
            show:false
        },
        data: xAxisData
    },
    yAxis: {
        name:'家',
        nameLocation:'end',
        nameTextStyle:{
            color:'#727272',
            fontSize:14,
        },
        axisLabel:{
          show:true,
          color:'#727272',
          fontSize:14,
        },
        axisLine:{
            show:true,
            lineStyle:{
                width:1,
                type:'solid',
                color:'#E5E5E5',
            }
        },
        axisTick:{
            show:false
        },
        splitLine:{
            show:true,
            lineStyle:{
                color:'#E5E5E5',
                width:1,
                type:'dashed'
            }
        },
    },
    series: [{
        name:'本月',
        type: 'bar',
        barWidth: 25,
        stack: "1",
        barGap:'50%',
        barCategoryGap:'20%',
        label:{
            show:true,
            position:'top',
            fontSize:14,
            color:'#7E70DD'
        },
        itemStyle:{
            color:new echarts.graphic.LinearGradient(0,1,0,0,[{
                offset:0,color: '#DAD4FB'
            },{
                offset: 1, color: '#A79AF7'
            }]),
        },
        data:data1
    },{
        name: "本月",
        type: "bar",
        barWidth: 25,
        stack: "1",
        itemStyle: {
            normal: {
                color:'#9081F4'

            }
        },
        data:borderData
    },{
        name:'较上月新增',
        type: 'bar',
        barWidth: 25,
        stack: "2",
        barGap:'50%',
        barCategoryGap:'20%',
        label:{
            show:true,
            position:'top',
            fontSize:14,
            color:'#F5A623'
        },
        itemStyle:{
            color:new echarts.graphic.LinearGradient(0,1,0,0,[{
                offset:0,color: '#F7E9D1'
            },{
                offset: 1, color: '#F5A623'
            }]),
        },
        data:data2
    },{
        name: "较上月新增",
        type: "bar",
        barWidth: 25,
        stack: "2",
        itemStyle: {
            normal: {
                color:'#f99b00'

            }
        },
        data:borderData
    }]
};
