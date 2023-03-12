option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    tooltip:{},
    legend:{
      data:["本月销量","季度销量","年度销量"]  
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {   
            name:'本月销量',
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
        },
        { //这两组数据用来模拟markLine线段开关,data可以为空
            name:'季度销量',
            type:'line',
            markLine:{
                data:[
                    {
                        name:'季度销量',
                        yAxis:"150"
                    }
                ]
            }
        },
        {
            name:'年度销量',
            type:'line',
            markLine:{
                data:[
                    {
                        name:'年度销量',
                        yAxis:"100"
                    }
                ]
            }
        }

    ]
};