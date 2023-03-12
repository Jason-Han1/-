var getman=['65'];
var getwoman=['35'];
var data2=[{value:10,name:'背景'}]
option = {
    backgroundColor: "#03141c",
    legend: {
        show:false,
        x: 'center',
        y: 'bottom',
    },
    calculable: true,
    series: [

        {
            name: '总词汇量',
            type: 'pie',
            radius:  ['50%', '70%'],
            center: ['50%', '50%'],
            data: [{
                    value: getman,
                    itemStyle: {
                        color: '#00FCFD'
                    },
                    label: {
                        show: false,
                        color: "rgba(255,255,255,.45)",
                        fontSize: 14,
                        formatter: '已掌握词汇量{c}个',
                        rich: {
                            a: {
                                color: "#fff",
                                fontSize: 20,
                                lineHeight: 30
                            },
                        }
                    },
                    labelLine: {
                        show: false,
                    }
                },
                {
                    value: getwoman,
                    itemStyle: {
                        color: "transparent"
                    }
                }
            ]
        },
        {
            name: '面积模式',
            type: 'pie',
            radius: ['52%', '68%'],
            center: ['50%', '50%'],
            data: [{
                    value: getman,
                    itemStyle: {
                        color: "transparent"
                    }
                },
                {
                    value: getwoman,
                    itemStyle: {
                        color: '#3E6DFF'
                    },
                    label: {
                        show: false,
                        color: "rgba(255,255,255,.45)",
                        fontSize: 14,
                        formatter: '总词汇量5000个',
                        rich: {
                            a: {
                                color: "#fff",
                                fontSize: 20,
                                lineHeight: 30
                            },
                        }
                    },
                    labelLine: {
                        show: false,
                    }
                }
            ]
        },
                        {
        itemStyle: {
            normal: {
                color: 'rgba(62,109,255, 0.2)',
            }
        },
        type: 'pie',
        startAngle:180,
        hoverAnimation: false,
        radius: ['45%', '75%'],
        center: ["50%", "50%"],
        label: {
            normal: {
                show:false
            }
        },
        data: data2,
        z:-1
    }
    ]
};