
options = 
   [
        {
            backgroundColor:'#FFFFFF',
    title : {
        text: '广西各类投诉俗举报接件情况',
        subtext: '2017年'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    legend: {
        
        orient: 'vertical',
        x: 'right',
       itemWidth: 14,
        itemHeight: 14,
        align: 'left',
    
    },
    series: [
        {
            type:'pie',
            hoverAnimation: false,
            legendHoverLink:false,
            radius: ['31%', '35%'],
            color: ['#915872', '#3077b7', '#9a8169','#333366','#339999','#663366'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
               
            },
            tooltip: {
               show:false,
               
               
            },
            data:[ {value:20392, name:''},
                {value:13922, name:''},
                {value:40392, name:''},
                {value:40392, name:''},
                {value:40392, name:''},
                {value:40392, name:''}]
        },
        {
            name:'',
            type:'pie',
            radius: ['35%', '65%'],
            color: ['#d74e67', '#0092ff', '#eba954','#336699','#00cc99','#663399'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },
          
            },
            data:[ {value:20392, name:'食品'},
                {value:13922, name:'药品'},
                {value:40392, name:'保健品'},
                {value:40392, name:'化妆品'},
                {value:40392, name:'医疗器械'},
                {value:40392, name:'其他'}]
        }
    ]
}
];