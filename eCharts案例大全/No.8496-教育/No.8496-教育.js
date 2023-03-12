option = {
    // eduction
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        right:80,
        y: "center",
        textStyle:{
            fontSize:35,
            color: 'black',
        },
        data:['Maldives','Kiribati','Tuvalu']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['45%', '50%'],
             label:{
                normal:{
                    show: true,
                    position: "outer",
                    textStyle:{
                        fontWeight:300,
                        fontSize:40,
                        color:'black'
                    },
                    formatter:'{d}%'
                },
        },
            data: [
                // 376 88+17+6+2 46
                {value:376 , name: 'Maldives'},
                {value:113 , name: 'Kiribati'},
                {value:13 , name: 'Tuvalu'},
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
