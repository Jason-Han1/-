var salesMidData = [{
    value:10,
    name: '防盗',
}, {
    value: 20,
    name: '防火',
}, {
    value: 30,
    name: '新闻',
}, {
    value: 40,
    name: '扫黑除恶',
}, {
    value: 50,
    name: '电信诈骗',
}, {
    value: 60,
    name: '违规事项',
}

];
option = {
    backgroundColor:'#003366',
    title: {
        text: '4000.00',
        top: '48%',
        textAlign: "center",
        left: "49%",
        textStyle: {
            color: '#fff',
            fontSize: 14,
            fontWeight: '400',
            
        },
        subtext:'综合数据',
        subtextStyle:{
             color: '#fff',
            fontSize: 12,
            fontWeight: '400',
        }
    },
    tooltip: {
        show: false,
    },
    series: [
        {
        type: 'pie',
      
        radius: ['50%', '70%'],
        hoverAnimation:false,
        startAngle:90,
        color: ["#00f8ff","#fed230","#774bff","#1eb6fc","#fe224d","#34d25f"],

        label: {
            normal: {
                // formatter: '{text|{b}} \n{num|{c} ({d}%)}',
                formatter: '{text|{b}} \n{num|{d}%}',

                textStyle: {
                    fontWeight: 'bold',
                    fontSize: 14,
                    rich:{
                        text:{
                            fontWeight:'700',
                             padding:[10,-50,0,-50]
                        }
                        ,num:{
                            padding:[0,-50,10,-50]
                        }
                    }
                },
                
            }
        },
        labelLine: {
            normal: {
                length:10,
                length2:50
            }
        },
        data: salesMidData
    },
    ]
};