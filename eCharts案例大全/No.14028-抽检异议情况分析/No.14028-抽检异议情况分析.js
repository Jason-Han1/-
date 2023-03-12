option = {
    title : {
       text: '抽检异议情况分析',
        subtext: '单位异议趋势分析'
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
        data:['异议提出数','异议通过数']
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
            type : 'value',
            min:0,
            max:1200
        }
    ,
    series : [
        {
            name:'异议提出数',
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
            data:[534,601,526,704,683,556,779,542,666,714,756,727]
        },
         {
            name:'异议通过数',
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
            data:[247,184,178,206,195,238,167,151,169,231,151,206]
        }
    ]
};