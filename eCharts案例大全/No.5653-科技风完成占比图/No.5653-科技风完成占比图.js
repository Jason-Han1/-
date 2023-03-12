const handred = 100
let point = 66

option = {
    backgroundColor:'#000',
    title: {
        text: point + '%',
        x: 'center',
        y: 'center',
        textStyle: {
            // fontWeight: 'normal',
            color: '#a458bb',
            fontSize: '75',
            fontWeight:700
        }
    },
   graphic:{
                type:"text",
                left:"center",
                top:"5%",
                style:{
                    text:"科技风完成占比图",
                    textAlign:"center",
                    fill:"#fff",
                    fontSize:40,
                    // fontWeight:700
                }
            },
    tooltip: {
        formatter: function(params) {
            return params.name + '：' + params.percent + ' %'
        }
    },
    legend: {
        show: false,
        itemGap: 12,
        data: ['占比', '剩余']
    },

    series: [{
        name: 'circle',
        type: 'pie',
        clockWise: false,
        radius: ['50%', '66%'],
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
            value: point,
            name: '占比',
            itemStyle: {
                normal: {
                    color: { // 颜色渐变
                        colorStops: [{
                                    offset: 0,
                                    color: '#9058bc' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#d258b7' // 100% 处的颜色1
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
            name: '剩余',
            value: handred - point,
            itemStyle: {
                normal: {
                    color: '#a6a6a6'
                }
            }
        }]
    }]
}