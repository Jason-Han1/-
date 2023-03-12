var colorList = ['#1B5AE0', '#36F6F9', '#E243D2']
option = {
    legend: {
        /*
        //自定义图例样式
        bottom:'10%',
        right:'5%',
        orient:'vertical',
        padding:[15,28],
        itemWidth:10,
        itemHeight:10,
        icon:'circle',
        textStyle:{
            fontSize:14,
            color:'#727272',
            padding:[0,0,0,6],
            lineHeight:16,
        },
        backgroundColor:'rgb(245,248,253,0.6)',
        */
        bottom: '10%',
        //设置图例的样式
        itemWidth: 16,
        itemHeight: 3,
    },
    series: [{
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['15%', '40%'],
        clockwise: true,
        avoidLabelOverlap: true,
        //设置滑过放大
        hoverOffset: 20,
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        //设置提示线上的内容
        label: {
            show: true,
            position: 'outside',
            formatter: '{a|{b}：{d}%}\n{hr|}',
            rich: {
                hr: {
                    //设置点的背景色
                    // backgroundColor: 't',
                    backgroundColor: "white",
                    borderRadius: 3,
                    width: 3,
                    height: 3,
                    padding: [3, 3, 0, -12]
                },
                // 设置字体颜色 he 位置
                a: {
                    // 
                    padding: [-30, -90, -40, -90],
                    color: "red",
                    fontSize: 16,
                }
            }
        },
        //设置提示线的颜色
        labelLine: {
            normal: {
                length: 40,
                length2: 90,
                lineStyle: {
                    width: 1,
                    color: "white"
                }
            }
        },
        data: [{
            'name': '正常',
            'value': 1.45
        }, {
            'name': '高损',
            'value': 2.93
        }, {
            'name': '负损',
            'value': 3.15
        }],
    }]
};