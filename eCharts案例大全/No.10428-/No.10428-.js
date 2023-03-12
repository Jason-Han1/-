

option = {
    title: {
        text: '75%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#fffff',
            fontSize: '90'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        show:false,
        orient: 'horizontal',
        x: 'center',
        data:['自建机房','合作机房']
    },
    series: [
        {
            name:'访问来源',
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
                
                {
                    value:25, 
                name:'合作机房',
                    itemStyle:{
                  color:"rgba(255,255,255,0)"
               },
                },
                {
                    value:75, 
                name:'自建机房',
                itemStyle:{
                  color:"#0fffff"
               },
                },
               
            ]
        }
    ]
};
