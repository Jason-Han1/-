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
    
        data:['一胎','二胎','三胎','四胎','五胎','六胎','七胎'],
                textStyle: {
            color: '#fff'
        }
    },
    series: [
        {
            name:'母猪数量占比',
            type:'pie',
            hoverAnimation: false,
            legendHoverLink:false,
            radius: ['40%', '42%'],
            color: ['#915872', '#3077b7', '#9a8169', '#3f8797','#5b8144','#307889','#9c6a79'
],
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
                {value:435, name:''},
                {value:679, name:''},
                {value:848, name:''},
                 {value:348, name:''},
                 {value:679, name:''},
                {value:848, name:''},
                 {value:348, name:''}
            ]
        },
        {
            name:'母猪数量占比',
            type:'pie',
            radius: ['42%', '55%'],
            color: ['#d74e67', '#0092ff', '#eba954', '#21b6b9','#60a900','#01949b',' #f17677'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },
          
            },
            data:[
                {value:435, name:'一胎'},
                {value:679, name:'二胎'},
                {value:848, name:'三胎'},
                {value:348, name:'四胎'},
                {value:679, name:'五胎'},
                {value:848, name:'六胎'},
                {value:348, name:'七胎'}
         
            ]
        }
    ]
};