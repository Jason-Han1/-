option = {
    color:['#327bfa','#35b1fa','#62d56b','#ffb84f','#ff7a32'],
    tooltip: {
        trigger: 'item',
        formatter: "{a}:{b} <br/>占比:{d}%<br/>点击查看详情->"
    },
    legend: {
       
        data:['优秀','安全','良好','警示','严重警示'],
        
    },
    grid:{
        top:'bottom',
        left:'90',
        width:'90%',
        height:'80%',
       
    },
    series: [
        {
            name:'健康度22等级',
            type:'pie',
            selectedMode: 'single',
            radius: ['30%', '55%'],
            label: {
                normal: {
                    formatter: '{b|{b}}',
                    rich: {
                        b: {
                            fontSize: 16,
                            lineHeight: 30
                        }
                        
                    }
                }
            },
            data:[
                
                {value:310, name:'优秀'},
                {value:310, name:'安全'},
                {value:251, name:'良好'},
                {value:147, name:'警示'},
                {value:102, name:'严重警示'}
            ]
        }
    ]
};