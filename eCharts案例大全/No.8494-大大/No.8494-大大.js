option = {
    // title: {
    //     text: '医疗',
    //     subtext: '纯属虚构',
    //     left: 'center'
    // },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        right:0,
        y: "center",
        textStyle:{
            fontSize:30,
            // fontWeight:180
        },
        data:['China','United States','India','Russian Federation','Japan','Rest of the world']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
             label:{
            normal:{
                show: true,
                position: "inner",
                textStyle:{
                    fontWeight:500,
                    fontSize:20
                },
                formatter:'{d}%'
            },
        },
            data: [
                {value: 9056.8, name: 'China'},
                {value: 4833.1, name: 'United States'},
                {value: 2076.8, name: 'India'},
                {value: 1438.6, name: 'Russian Federation'},
                {value: 1147.1, name: 'Japan'},
                {value: 52591.9, name: 'Rest of the world'},
                
                
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
