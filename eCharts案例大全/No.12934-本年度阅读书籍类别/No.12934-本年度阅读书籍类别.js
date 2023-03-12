demo = [ 
    {value:32, name:'情感励志类'},
    {value:122, name:'科研技术类'},
    {value:92, name:'人物传记类'}
]
options = 
   [
        {
        backgroundColor: '#001121',
        title : {
            text: '本年度阅读书籍类别',
            textStyle:{
                color:"#fff"
            },
            subtext: '2018年'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
    
        },
        legend: {
            
            orient: 'vertical',
            x: 'center',
            icon:"rect",
            itemWidth: 14,
            itemHeight: 14,
            
            textStyle:{
                color:"rgba(255,255,255,0.8)"
            }
        
        },
        series: [
            {
                name:'内圈',
                type:'pie',
                hoverAnimation: false,
                legendHoverLink:false,
                radius: ['33%', '34%'],
                color: ['#C6EB54', '#EB6B54', '#EBA954'],
                label: {
                    
                    normal: {
                        show:false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    },
                   
                },
                data:demo
            },
            {
                name:'书籍分类',
                type:'pie',
                radius: ['35%', '65%'],
                color: ['#C6EB54', '#EB6B54', '#EBA954'],
             
                label: {
                    normal: {
                        formatter: "{a|{b}}\n{b|{d}}{c|%}",
    					rich: {
    						a:{
    							color: 'rgba(255, 255, 255, 0.8)',
    							fontSize: 23
    						},
    						b:{
    							color: '#f4b741',
    							fontSize: 28
    						},
    						c:{
    							color: '#fff',
    							fontSize: 23
    						}
    					}
                    },
              
                },
                data:demo
            }
        ]
}
];

