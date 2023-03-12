var data1=[462,498,482,473,482,493];
option = {
    backgroundColor:'#fff',
    legend: {
        
        top:'30',
        data: ['日常检查','专项检查', '飞行检查', '督导检查','临时检查']
    },
    grid:{
        bottom:'60%',
        right:'18%',
        left:'15%',
        top:'15%'
    },
    title: {
        text: '检查类型违规趋势分析'
    },
    xAxis: {
         splitLine: {
            lineStyle: {
                show:true,
                type: 'dashed'
            }
        },"axisLabel": {
            "interval": 0,
             rotate:40,
            textStyle:{
                fontSize:12,
                color:'#000'
            },},
        "data": ['热食类食品制售','冷食类食品制售','生食类食品制售','糕点类食品制售','自制饮品制售','其他类食品制售']
    },
    yAxis: {
        min:100,
        name:'违法违规主体数',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
     tooltip: {
        trigger: 'item',
        formatter: '{b}<br/>{a}:{c}'
         
     },
    series: [{
        name:'日常检查',
        symbolSize: function (data) {
            return Math.sqrt(data)  * 1;
        },
        type: 'scatter',
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(164,298, 250)'
                }, {
                    offset: 1,
                    color: '#33CC00'
                }]),
        data:data1
    },{
        name:'专项检查',
        symbolSize: function (data) {
            return Math.sqrt(data) * 1;
        },
        type: 'scatter',
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(251, 118, 123)'
                }, {
                    offset: 1,
                    color: '#669999'
                }]),
        data:[632,613,652,625,684,628]
    },{
        name:'飞行检查',
        symbolSize: function (data) {
            return Math.sqrt(data)  *1;
        },
        type: 'scatter',
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(154, 255, 154)'
                }, {
                    offset: 1,
                    color: '#FFCC00'
                }]),
        data:[331,315,367,385,367,362]
    },{
        name:'督导检查',
        symbolSize: function (data) {
            return Math.sqrt(data) * 1;
        },
        type: 'scatter',
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(154, 255, 154)'
                }, {
                    offset: 1,
                    color: '#008000'
                }]),
        data:[423,416,435,456,463,435]
    },{
        name:'临时检查',
        symbolSize: function (data) {
            return Math.sqrt(data)  * 1;
        },
        type: 'scatter',
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(154, 255, 154)'
                }, {
                    offset: 1,
                    color: '#3300FF'
                }]),
        data:[233,245,263,251,238,216]
    }]
};