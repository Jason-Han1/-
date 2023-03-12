option = {
    // backgroundColor:'#fff',
    title:{
        text:'互动观点',
        textStyle:{
            fontSize:14,
            fontWeight:'normal'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '40%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'正面'},
                {value:679, name:'负面'},
                {value:1548, name:'中性'}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['55%', '70%'],

            data:[
                {value:335, name:'观点1观点1观点1观点1...'},
                {value:310, name:'观点xx1'},
                {value:234, name:'观点xx2'},
                {value:135, name:'观点xx3'},
                {value:1048, name:'观点xx4'},
                {value:251, name:'观点xx5'},
                {value:147, name:'观点xx6'},
                {value:102, name:'观点xx7'}
            ]
        }
    ]
};
myChart.resize({width:552, height:320})