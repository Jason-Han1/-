var colorList = ['#1FC700', '#8700E3', '#25B3C7', '#FF8800']
var arr=[
                {value: 123, name: '水稻'},
                {value: 102, name: '玉米'},
                {value: 122, name: '大豆'},
                {value: 137, name: '经作'}
                ]
option = {
    backgroundColor:'#030F35',
    color:colorList,
    title: {
        x: 'center',
        y: 'center',
        textStyle: {
            color:"#fff",
            fontSize: 15
        },
    },
    tooltip: {
        trigger: 'item'
    },
    series: [{
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['24%', '35%'],
        clockwise: true,
        avoidLabelOverlap: true,
        label: {
            show: true,
            position: 'outside',
            formatter:'{a1|{d}'+'}'+'{a2|'+ '%'+'}',
            rich: {
                a1: {
                    //padding: [-30, 15, -20, 15]
                    fontSize:14,
                    color:'#fff'
                },
                a2:{
                    fontSize:10,
                    color:'#fff'
                }
            }
        },
        labelLine: {
            show:true,
            normal: {
                length: 20,
                length2: 30,
                lineStyle: {
                    width: 1,
                    color:'#fff',
                    symbol:'circle',
                    symbolSize:10
                }
            }
        },
        data: arr,
    }]
};