var colorList = ['#479EFF', '#47D6FF', '#D19AFF']
var arr=[
                {value: 123, name: '国家储备库'},
                {value: 102, name: '地方储备库'},
                {value: 122, name: '委托库点'},

                ]
option = {
    color:colorList,
    title: {
        text: '1250.5',
        subtext:'万吨',
        x: 'center',
        y: 'center',
        textStyle: {
            color:"#FF6A00",
            fontSize: 30
        },
        subtextStyle:{
            color:'#C2C2C2',
            fontSize:20
        }
    },
    tooltip: {
        trigger: 'item'
    },
    series: [{
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['30%', '50%'],
        clockwise: true,
        avoidLabelOverlap: true,
        hoverOffset: 30,
        emphasis: {
                itemStyle: {
                    borderColor: '#f3f3f3',
                    borderWidth: 20,
                },
            },
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        label: {
            show: true,
            position: 'outside',
            formatter: '{d}%',
            textStyle:{
                fontSize:15
            }
        },
        labelLine: {
            normal: {
                length: 20,
                length2: 30,
                lineStyle: {
                    width: 1
                }
            }
        },
        data: arr,
    }]
};