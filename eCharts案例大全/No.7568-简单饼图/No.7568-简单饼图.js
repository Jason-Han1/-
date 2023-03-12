
option = {
    backgroundColor: '#003366',
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['60%', '70%'],
            startAngle:0,
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center',
                    formatter: (params)=>{
                        return '{top|总销售}\n'+'{bottom|99999}'
                    },
                    rich: {
                        top: {
                            fontSize: 12,
                            color: '#fff',
                            
                        },
                        bottom: {
                            fontSize: 14,
                            color: '#fff',
                            fontWeight: 'bold',
                            padding: [0, 0, 12, 0],
                        }
                    }
                }
            },
            emphasis: {
                label: {
                    show: true
                }    
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {
                    value:80, name:'直接售彩',
                    highlight: true,
                    label: {
                      show: true  
                    },
                    itemStyle: {
                        color:'#feb000'
                    }
                },
                {
                    value:20, name:'间接售彩',
                    itemStyle: {
                        color: '#00ffff'
                    }
                },
                
            ]
        }
    ]
};

