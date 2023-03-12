option = {
    title: {
        text: '70%',
        subtext: '基础工资所占比例',
        x: 'center',
        y: '45%',
        textStyle: {
            fontWeight: 'normal',
            color: '#fff',
            fontSize: '15'
        },
        subtextStyle: {
            color: '#fff',
            fontSize: 8
        },
    },
   
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: true,
        radius: ['24%', '14%'],
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
        hoverAnimation: true, 
        data: [{
            value: 70,
            name: '01',
            itemStyle: {
                normal: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#C8E69A' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#C8E69A' // 100% 处的颜色
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
            value: 20,
            itemStyle: {
                normal: {
                    color: '#E1A861',
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                } 
            }
        },{
            name: '03',
            value: 10,
            itemStyle: {
                normal: {
                    color: '#AFE1F3',
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                } 
            }
        }
        ]
    }]
}