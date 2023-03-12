option = {
    xAxis: [{
           type: 'value',
           min:0,
           max:100
        
    } 
    ],
    yAxis: [{
           type: 'category',
           data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Nine'],
           show:false
        },
        {
       type: 'category',
       position:'left'
        }
    ],
    series: [{
        data: [10, 20, 15, 80, 70, 40, 30,60],
        type: 'bar',
        yAxisIndex:0,
        zlevel:999,
        itemStyle: {
            normal: {
                color: '#ff9000'
            }
        },
        label:{
            show:true,
            position:'right',
            formatter:'{b} {c}%'
        },
        // barWidth: '90%',
    },{
         data: [{
            name: '脑力',
            value: 100
        }],
        label: {
            show: true,
            position: 'left',
            formatter: '{b}',
            textStyle: {
                color: '#777'
            }
        },
        type: 'bar',
        barGap: 0,
        barWidth: '50%',
        itemStyle: {
            normal: {
                color: 'rgba(155,237,223,0.9)'
            }
        },
        yAxisIndex: 1
    },{
         data: [{
            name: '心理',
            value: 100
        }],
        label: {
            show: true,
            position: 'left',
            formatter: '{b}',
            textStyle: {
                color: '#777'
            }
        },
        type: 'bar',
        barGap: 0,
        barWidth: '37.5%',
        itemStyle: {
            normal: {
                color: 'rgba(155,237,223,0.5)'
            }
        },
        yAxisIndex: 1
    }
    ,{
         data: [{
            name: '情绪',
            value: 100
        }],
        label: {
            show: true,
            position: 'left',
            formatter: '{b}',
            textStyle: {
                color: '#777'
            }
        },
        type: 'bar',
        barGap: 0,
        barWidth: '12.5%',
        itemStyle: {
            normal: {
                color: 'rgba(155,237,223,0.9)'
            }
        },
        yAxisIndex: 1
    }
    ]
};
