option = {
    title : {
       text: '食品生产情况',
        subtext: '每年企业新办/注销许可证趋势'
    },
    tooltip : {
        trigger: 'axis'
    },
     grid: {
        left: '3%',
        top:'15%',
        containLabel: true
    },
   legend: {
        data:['新办数','注销数']
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
            type : 'value'
        }
    ,
    series : [
        {
            name:'新办数',
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
            data:[136,375,380,449,114,267,142,318,357,193,421,391]
        },
         {
            name:'注销数',
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