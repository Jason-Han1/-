option = {
    title : {
        text: '食品经营情况',
        subtext: '每年新办/注销许可证趋势'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['新办','注销']
    },
     grid: {
        left: '3%',
        right: '25%',
        top:'11%',
        bottom: '30%',
        containLabel: true
    },
    color:['#fbceb2','#dbb0e3'],
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
        }
    ],
    yAxis : {
            name:'新办/注销事项数',
            type : 'value'
        }
    ,
    series : [
        {
            name:'新办',
            type:'line',
            areaStyle: {
                normal: {type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(199, 37, 50,0.2)'
                    }, {
                        offset: 1,
                        color: 'rgba(199, 37, 50,0.2)'
                    }], false)
                }
            },
            smooth:true,
            itemStyle: {
                normal: {areaStyle: {type: 'default'}}    
            },
            data:[210, 312, 121,654, 500, 830, 710, 521, 304, 560, 330, 410]
        },
        {
            name:'注销',
            type:'line',
            areaStyle: {
                normal: {type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(19, 37, 250,0.2)'
                    }, {
                        offset: 1,
                        color: 'rgba(19, 37, 250,0.2)'
                    }], false)
                }
            },
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[610, 312, 221,654, 910, 630, 310, 521, 354, 560, 830, 310]
        }
    ]
};