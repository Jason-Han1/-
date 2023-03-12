option = {
    title:{
      text:'通道运行状态' ,
      left:'center'
    },
    tooltip: {
        trigger: 'axis'
    },

    xAxis:  {
        type: 'time',
        boundaryGap: false,
        axisLine:{show:false},
        axisTick:{show:false}
    },
    yAxis: {
        type: 'value',
        max:5,
        inverse:true,
        axisLine:{show:false},
        axisTick:{show:false},
        splitLine:{show:false},
        axisLabel:{
            formatter:function(v){
                return ['通道1','备用1','通道2','备用2'][v-1]; 
            }
        }
    },
    series: [
        {
            name:'通道1-运行',
            type:'line',
            showSymbol:false,
            lineStyle:{normal:{width:10}},
            itemStyle:{normal:{color:'#0f0'}},
            data:[
                [new Date('2018-11-14 01:00:00'),1],
                [new Date('2018-11-14 02:00:00'),1],
                [new Date('2018-11-14 03:00:00'),null],
                [new Date('2018-11-14 04:00:00'),1],
                [new Date('2018-11-14 05:00:00'),1],
                [new Date('2018-11-14 06:00:00'),null],
                [new Date('2018-11-14 07:00:00'),1],
                [new Date('2018-11-14 08:00:00'),1]
            ]
        },
        {
            name:'通道1-断开',
            type:'line',
            showSymbol:false,
            lineStyle:{normal:{width:10}},
            itemStyle:{normal:{color:'#f00'}},
            data:[
                [new Date('2018-11-14 01:00:00'),null],
                [new Date('2018-11-14 02:00:00'),1],
                [new Date('2018-11-14 04:00:00'),1],
                [new Date('2018-11-14 04:00:00'),null],
                [new Date('2018-11-14 05:00:00'),1],
                [new Date('2018-11-14 07:00:00'),1],
                [new Date('2018-11-14 08:00:00'),null]
            ]
        },
        {
            name:'备用1-预备',
            type:'line',
            showSymbol:false,
            lineStyle:{normal:{width:10}},
            itemStyle:{normal:{color:'#aaa'}},
            data:[
                [new Date('2018-11-14 01:00:00'),2],
                [new Date('2018-11-14 02:00:00'),2],
                [new Date('2018-11-14 03:00:00'),null],
                [new Date('2018-11-14 04:00:00'),2],
                [new Date('2018-11-14 05:00:00'),2],
                [new Date('2018-11-14 06:00:00'),null],
                [new Date('2018-11-14 07:00:00'),2],
                [new Date('2018-11-14 08:00:00'),2]
            ]
        },
        {
            name:'备用1-运行',
            type:'line',
            showSymbol:false,
            lineStyle:{normal:{width:10}},
            itemStyle:{normal:{color:'#0f0'}},
            data:[
                [new Date('2018-11-14 01:00:00'),null],
                [new Date('2018-11-14 02:00:00'),2],
                [new Date('2018-11-14 04:00:00'),2],
                [new Date('2018-11-14 04:00:00'),null],
                [new Date('2018-11-14 05:00:00'),2],
                [new Date('2018-11-14 07:00:00'),2],
                [new Date('2018-11-14 08:00:00'),null]
            ]
        },
        
        
        {
            name:'通道2-运行',
            type:'line',
            showSymbol:false,
            lineStyle:{normal:{width:10}},
            itemStyle:{normal:{color:'#0f0'}},
            data:[
                [new Date('2018-11-14 01:00:00'),3],
                [new Date('2018-11-14 02:00:00'),3],
                [new Date('2018-11-14 03:00:00'),3],
                [new Date('2018-11-14 04:00:00'),null],
                [new Date('2018-11-14 05:00:00'),3],
                [new Date('2018-11-14 06:00:00'),3],
                [new Date('2018-11-14 07:00:00'),3],
                [new Date('2018-11-14 08:00:00'),3]
            ]
        },
        {
            name:'通道2-断开',
            type:'line',
            showSymbol:false,
            lineStyle:{normal:{width:10}},
            itemStyle:{normal:{color:'#f00'}},
            data:[
                [new Date('2018-11-14 01:00:00'),null],
                [new Date('2018-11-14 03:00:00'),3],
                [new Date('2018-11-14 05:00:00'),3],
                [new Date('2018-11-14 08:00:00'),null]
            ]
        },
        
        {
            name:'备用2-预备',
            type:'line',
            showSymbol:false,
            lineStyle:{normal:{width:10}},
            itemStyle:{normal:{color:'#aaa'}},
            data:[
                [new Date('2018-11-14 01:00:00'),4],
                [new Date('2018-11-14 02:00:00'),4],
                [new Date('2018-11-14 03:00:00'),4],
                [new Date('2018-11-14 04:00:00'),null],
                [new Date('2018-11-14 05:00:00'),4],
                [new Date('2018-11-14 06:00:00'),4],
                [new Date('2018-11-14 07:00:00'),4],
                [new Date('2018-11-14 08:00:00'),4]
            ]
        },
        {
            name:'备用2-运行',
            type:'line',
            showSymbol:false,
            lineStyle:{normal:{width:10}},
            itemStyle:{normal:{color:'#0f0'}},
            data:[
                [new Date('2018-11-14 01:00:00'),null],
                [new Date('2018-11-14 03:00:00'),4],
                [new Date('2018-11-14 05:00:00'),4],
                [new Date('2018-11-14 08:00:00'),null]
            ]
        }
    ]
};
