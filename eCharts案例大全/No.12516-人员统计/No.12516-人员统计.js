var placeHolderStyle = {
    normal: {
        color: '#fff',
        opacity: 0.1
    },
    emphasis: {
        color: '#fff',
        opacity: .1
    }
}


option = {
    color:['#DA64A8','#7A54CF','#47B7E1'],
    backgroundColor: '#02061d',
    textStyle: {
        fontSize: 16,
        color: '#40E7F4 '
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} : {b}{c} ({d}%)"
    },
    legend: {
        show:true,
        top: '10%',
        right: '10%',
        data: ['当日人员', '施工人员', '管理人员'],
        textStyle: {
            color: '#fff ',
            fontSize: 14
        },
        formatter(name) {
            return name
        },
        itemGap: 16
    },
    series: [{
        name: '当日人员',
        type: 'pie',
        radius: ['40%', '41%'],
        label: true,
        startAngle: 50,
        clockWise: true,
        hoverAnimation: true,
        hoverOffset: 8,
        data: [{
                value: 300,
                name: '到场总人数',
                itemStyle: {
                    normal:{
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        // 0% 处的颜色   
                            offset: 0, color: '#FF7671'  },
                            {

                                 // 100% 处的颜色
                                offset: 1, color: '#A14AFF' 
                        }], false)

                    }
                }
            },
            {
                value: 25,
                 name: '未到场总人数',
                hoverAnimation: true,
                itemStyle: placeHolderStyle
            }
        ]
    }, {
        name: '施工人员',
        type: 'pie',
        radius: ['30%', '31%'],
        label: false,
        startAngle: 200,
        clockWise: true,
        hoverAnimation: true,
        hoverOffset: 3,
        data: [{
                value: 120,
                name: '到场人数',
                itemStyle: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#A568FF' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#006CFF' // 100% 处的颜色
                        }]
                    }
                }
            },
            {
                value:15 ,
                hoverAnimation: true,
                name: '未到场人数',
                itemStyle: placeHolderStyle
            }
        ]
    },{
        name: '管理人员',
        type: 'pie',
        radius: ['15%', '16%'],
        label: false,
        startAngle: 80,
        clockWise: true, //顺时加载
        hoverAnimation: true,
        hoverOffset: 3,
        data: [{
                value: 160,
                name: '到场人数',
                itemStyle: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#57FFE0' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#3469E2' // 100% 处的颜色
                        }]
                    }
                }
            },
            {
                value: 10,
                 name: '未到场人数',
                hoverAnimation: true, //鼠标移入变大
                itemStyle: placeHolderStyle
            }

        ]
    } ]
};