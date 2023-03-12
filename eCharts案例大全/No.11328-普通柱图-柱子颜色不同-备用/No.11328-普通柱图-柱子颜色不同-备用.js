option = {
    title: {
        text: '消防巡查打分统计',
        left: 'center'
    },
    xAxis: {
        type: 'category',
        data: ['0-60分', '60-80分', '80-90分', '90-100分'],
        name: '分段',
    },
    yAxis: {
        type: 'value',
        name: '数量',
    },
    series: [{
        data: [{
            value: 21,
            itemStyle:{
                color:'#56a842',
            },
        }, {
            value: 18,
            itemStyle:{
                color:'#e17149',
            },
        }, {
            value: 34,
            itemStyle:{
                color:'#df8f48',
            },
        }, {
            value: 27,
            itemStyle:{
                color:'#d48265',
            },
        }, ],
        label:{
            show:true,
            position:'top'
        },
        type: 'bar'
    }]
};