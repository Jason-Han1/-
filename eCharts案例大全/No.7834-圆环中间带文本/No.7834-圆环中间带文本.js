var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            color:['red', '#ccc'],
            series: [
                {
                    name:'XXX站点超标率',
                    type: 'pie',
                    center: ['50%', '50%'], // 饼图的圆心坐标
                    radius: ['70%', '80%'],
                    avoidLabelOverlap: false,
                    hoverAnimation: false,
                    label: { //  饼图图形上的文本标签
 
                        normal: { // normal 是图形在默认状态下的样式
                            show: true,
                            position: 'center',
                            color: 'red',
                            fontSize: 18,
                            fontWeight: 'bold',
                            formatter: '{d}%\n{b}' // {b}:数据名； {c}：数据值； {d}：百分比，可以自定义显示内容，
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[{
                            value: 40,
                            name: "超标",
                            label: {
                                normal: {
                                    show: true
                                }
                            }
                        },
                        {
                            value: 60,
                            name: '正常',
                            label: {
                                normal: {
                                    show: false
                                }
                            }
                        }
                    ]
                }
            ]
};