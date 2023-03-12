

option = {
    grid: [{
        top:"10%",
        right: '4%',
        left:'10%',
        bottom: '55%',
        width:'200px',
        containLabel: true
    },{
         top:"10%",
        right: '4%',
        left:'30%',
        bottom: '55%',
        width:'200px',
        containLabel: true
    },{
         top:"10%",
        right: '4%',
        left:'50%',
        bottom: '55%',
        width:'200px',
        containLabel: true
    },{
        top:'50%',
        right: '4%',
          left:'10%',
        bottom: '3%',
         width:'200px',
        containLabel: true
    }],
    yAxis : [
        {
            name : 'aaa',
        },
         {
            name : 'bbb',
             gridIndex: 1,
        },
          {
            name : 'ccc',
             gridIndex: 2
        },
          {
            name : 'ddd',
             gridIndex:3
        }
    ],
    xAxis : [
        {
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        {
          data : ['1', '2', '3', 'Thu', 'Fri', 'Sat', '7'],
             gridIndex: 1,
        },
         {
          data : ['a', 'b', '3', '999', 'Fri', 'Sat', '7'],
             gridIndex: 2,
        },
          {
          data : ['a', 'b', '3', '999', 'Fri', 'Sat', '7'],
             gridIndex: 3,
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220]
        },
         {
            name:'直接访问2',
            type:'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220]
        },
         {
            name:'直接访问3',
            type:'bar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220]
        },
        {
            name:'直接访问4',
            type:'bar',
            xAxisIndex: 3,
            yAxisIndex: 3,
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220]
        },
        {
            name:'直接访问2',
            type:'pie',
            center:["45%","70%"],
            radius: ['18%', '25%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ]
        },
         
        {
            name:'直接访问4',
            type:'pie',
            center:["80%","70%"],
            radius: ['18%', '25%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ]
        }
    ]
};
