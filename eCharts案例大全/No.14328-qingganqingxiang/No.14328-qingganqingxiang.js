option = {
    backgroundColor: '#424956',
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
    
        data:['中立','赞同','不赞同'],
                textStyle: {
            color: '#fff'
        }
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            hoverAnimation: false,
            legendHoverLink:false,
            radius: ['40%', '42%'],
            color: ['#915872', '#9a8169', '#307889'],
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
            
            data:[
                {value:131, name:''},
                {value:147, name:''},
                {value:22, name:''},
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['42%', '55%'],
            color: ['#d74e67', '#0092ff', '#eba954', '#21b6b9','#60a900','#01949b',' #f17677'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },
          
            },
            data:[
                {value:131, name:'中立'},
                {value:147, name:'赞同'},
                {value:22, name:'不赞同'},
         
            ]
        }
    ]
};