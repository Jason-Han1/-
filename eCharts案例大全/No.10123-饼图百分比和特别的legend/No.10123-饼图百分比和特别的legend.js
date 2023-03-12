var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 0,
        shadowColor: '#203665'
    }
};
option = {
    backgroundColor: "#fff",
    legend:{
        type:'scroll',
        orient :'vertical',
        selectedMode:false,
        icon:'circle',
        right:'5%',
        top:'50%'
    },
    tooltip:{
        show:true
    },
    series: [ {
        name: '行业排放分布',
        type: 'pie',
        clockWise: false,
        radius: ['0%', '50%'],
        itemStyle: dataStyle,
        center: ['25%', '50%'],
        data: [{
            name:'废气监测达标率',
            value: 25,
            itemStyle: {
                normal: {
                    color: '#ef4864',
                    shadowColor: '#ef4864',
                    shadowBlur: 0
                }
            }
        }, {
            value: 75,
            name:'废水监测达标率',
            itemStyle: {
                normal: {
                    color: '#facc14'
                },
                emphasis: {
                    color: '#facc14'
                }
            }
        }]
    }
    ]
}