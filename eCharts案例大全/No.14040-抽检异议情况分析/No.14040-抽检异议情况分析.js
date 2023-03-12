option = {
    backgroundColor:'#fff',
    title : {
       text: '抽检异议情况分析',
        subtext: '各环节异议占比'
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
    
        data:['生产','流通','餐饮'],
                textStyle: {
            color: '#000'
        }
    },
    series: [
        {
            name:'各环节异议占比',
            type:'pie',
            hoverAnimation: false,
            legendHoverLink:false,
            radius: ['30%', '32%'],
            color: ['#BCEE68', '#CD661D', '#B0E0E6'],
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
                {value:848, name:''}
            ]
        },
        {
            name:'各环节异议占比',
            type:'pie',
            radius: ['32%', '55%'],
            color:['#00FF00', '#B22222', '#00CDCD'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },
          
            },
            data:[
                {value:435, name:'生产'},
                {value:679, name:'流通'},
                {value:848, name:'餐饮',selected:true}
         
            ]
        }
    ]
};