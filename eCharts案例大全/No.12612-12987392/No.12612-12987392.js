option = {
    title: [{
        text: '12987392',
        x: 'center',
        y: '45%',
        textStyle: {
            fontWeight: 'normal',
            color: '#0580f2',
            fontSize: '30'
        }
    },{
        text: '待处理短信总数',
        x: 'center',
        y: '50%',
        textStyle: {
            fontWeight: 'normal',
            color: '#92a5ae',
            fontSize: '16'
        }
    }],
    color: ['rgba(176, 212, 251, 1)'], 
    legend: {
        width:'50',
        show: true,
        itemGap: 12,
        icon:"pin",
        data: ['01', '02'],
        right:100,
        y:'center'
    },
   
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: true,
        radius: ['50%', '60%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: false, 
        data: [{
            value: 80,
            name: '01',
            itemStyle: {
                normal: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#367bec' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                } 
            }
        }, {
            name: '02',
            value: 20
        }]
    }]
}