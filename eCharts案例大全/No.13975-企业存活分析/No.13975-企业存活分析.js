option = {
    title : {
        text: '企业存活分析',
    },
    backgroundColor:'#fff',
    tooltip : {
        trigger: 'axis'
    },
     grid: {
        left: '1%',
        right:'7%',
        top:'11%',
        bottom: '40%',
        containLabel: true
    },
    color:['#00cc99'],
   
    calculable : true,
    xAxis : [
        {
            name:'地区',
            boundaryGap : false,
            "axisLabel": {
            "interval": 0,
            textStyle: {
                fontSize: 10
            }
        },
            data :['崇左市','来宾市','河池市','贺州市','百色市','玉林市','贵港市','钦州市','防城港市','北海市','梧州市','桂林市','柳州市','南宁市']
            
            
        }
    ],
    yAxis : {
            type : 'value',
            name:'实存企业数'
        }
    ,
    series : [
        {
            name:'新办数',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[136,375,380,449,114,267,142,318,357,193,421,391,438,369]
        }
    ]
};