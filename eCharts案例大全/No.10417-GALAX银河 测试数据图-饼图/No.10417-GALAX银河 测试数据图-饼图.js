option = {
    backgroundColor:'#013561',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        x: 'left',
        textStyle:{
            color:'#fff'
        }
    },
    series: [
        {
            type:'pie',
            radius: ['20%', '50%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    color:'#fff',
                    position: 'outside',
                    formatter:'{b}：{d}%'
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
                    show: true,
                    lineStyle:{
                        color:'#fff'
                    }
                }
            },
            data:[
                {value:454, name:'丰物集'},
                {value:135, name:'物资仓'},
                {value:85, name:'美团'},
                {value:30, name:'交警队'},
                {value:30, name:'交警队1'},
            ]
        }
    ],
    //color:['#478ffd','#8269ff','#01cf59','#ed830e']
    color:['#00d0f3','#4489ff','#00FDBE','#FFFF36','#FFBF1C']
};