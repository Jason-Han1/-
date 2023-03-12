option = {
    title : {
       text: '受理案件数量趋势分析',
    },
    backgroundColor:'#fff',
    tooltip : {
        trigger: 'axis'
    },
     grid: {
        left: '15%',
        top:'15%',
        bottom:'50%',
        right:'20%',
        containLabel: true
    },
    color:['#FF8C00','#7fdfd0','#54FF9F','#BF3EFF'],
   legend: {
       top:50,
        data:['一般程序案件数','简易程序案件数','办结案件数','移送司法机关数']
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis : {
            type : 'value'
        }
    ,
    series : [
        {
            name:'一般程序案件数',
            type:'line',
            areaStyle: {
                normal: {type: 'default',
                    color:'#b4e6f2'
                }
            },
            smooth:true,
            itemStyle: {
                normal: {areaStyle: {type: 'default'}}    
            },
            data:[639,602,657,656,792,821,903,644,646,842,819,715]
        },
         {
            name:'简易程序案件数',
            type:'line',
            areaStyle: {
                normal: {type: 'default',
                    color: '#b4eee5'
                }
            },
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[768,563,889,686,821,823,641,852,657,801,725,731]
        },
         {
            name:'办结案件数',
            type:'line',
            areaStyle: {
                normal: {type: 'default',
                    color: '#93d2e4'
                }
            },
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[353,311,312,345,399,232,233,237,284,211,356,318]
        },
         {
            name:'移送司法机关数',
            type:'line',
            areaStyle: {
                normal: {type: 'default',
                    color:'#7fa9c3'
                }
            },
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[283,217,234,406,325,372,229,291,273,358,325,214]
        }
    ]
};