option = {
    title : {
        text: '感情状况比例',
        x:'center',
        textStyle: {
            fontSize: 20
        }
    },
    tooltip : {
        trigger: 'item',
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        top: 30,
        left: 'right',
        data: ['求交往','已结婚','单身'],
        textStyle: {
            fontSize: 20
        }
    },
    series : [
        {
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:10, name:'已结婚'},
                {value:20, name:'求交往'},
                {value:40, name:'单身'},
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.9)'
                }
            }
        }
    ]
};
