option = {
    title : {
        text: '每年新办许可证趋势',
    },
    tooltip : {
        trigger: 'axis'
    },
     grid: {
        left: '3%',
        top:'11%',
        bottom: '30%',
        containLabel: true
    },
    color:['#00cc99'],
   
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
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[136,375,380,449,114,267,142,318,357,193,421,391]
        }
    ]
};