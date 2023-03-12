app.title = '环形图';

options = [
    {
     tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"},
    title:{
        text: "IP改编动画来源",
        left:"center",
        
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['原创漫画','网文','游戏','文学','真人剧']
    },
    series: [
        {
            name:'IP改编动画来源',
            type:'pie',
            radius: ['50%', '70%'],
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
                    show: false
                }
            },
            data:[
                {value:0.7, name:'原创漫画'},
                {value:0.14, name:'网文'},
                {value:0.088, name:'游戏'},
                {value:0.05, name:'文学'},
                {value:0.03, name:'真人剧'}
            ]
        }
    ]
    },{
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    title:{
        text: "IP改编动画电影来源",
        left:"center",
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['文学','原创剧集动画','漫画','游戏','其他']},
    series: [
        {
            name:'IP改编动画电影来源',
            type:'pie',
            radius: ['50%', '70%'],
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
                    show: false
                }
            },
            data:[
                {value:0.396, name:'文学'},
                {value:0.333, name:'原创剧集动画'},
                {value:0.125, name:'漫画'},
                {value:0.083, name:'游戏'},
                {value:0.063, name:'其他'}
                ]
        }
    
            ]
        }
            
    
    

];
