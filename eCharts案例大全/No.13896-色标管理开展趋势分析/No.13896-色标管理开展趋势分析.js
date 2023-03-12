option = {
    backgroundColor:'#ffffff',
    title : {
       text: '色标管理开展趋势分析',
       
    },
    tooltip : {
        trigger: 'axis'
    },
     grid: {
        left: '15%',
        right: '15%',
        top:'30%',
        bottom:'30%',
        containLabel: true
    },
   legend: {
        data:['开展企业数'],
        top:'21%'
    },
     color:['#8fdfe6'],
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
            name:'开展企业数',
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
            itemStyle: {
                normal: {areaStyle: {type: 'default'}}    
            },
            data:[136,231,334,411,468,499,532,621,633,655,655,661]
        }
    ]
};