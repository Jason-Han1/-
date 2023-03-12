let datas=['40', '40', '39.5', '39', '39', '39','38','37','36'];
let xdata = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月'];
let res =  ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月'].map(y=>{
    return {
        
    }
})
option = {
    backgroundColor: '#1a2026',
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c}"
    },
    legend: {
        show: false
    },
    calculable: true,
    series: [{
            type: 'pie',
            startAngle: 0,
            clockwise: false,
            radius: ["25%", "80%"],
            center: ['50%', '50%'],
            roseType: 'area',
            avoidLabelOverlap: false,
            label: {
                show: true,
                position: 'inside',
                formatter: '{b}{c}',
                textStyle: {
                    color: '#b8cff0',
                    fontSize:30
                },
            },
            data: [{
                    value: 40,
                    name: '一月',
                    itemStyle: {
                        borderColor: '#FAE927',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: "#FAE927",
                        color: 'rgba(60,170,211,0.05)'
                    }
                }, {
                    value: 40,
                    name: '二月',
                    itemStyle: {
                        borderColor: '#E9E416',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: "#E9E416",
                        color: 'rgba(60,170,211,0.05)'
                    }
                }, {
                    value: 39.5,
                    name: '三月',
                    itemStyle: {
                        borderColor: '#C9DA36',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: "#C9DA36",
                        color: 'rgba(60,170,211,0.05)'
                    }
                }, {
                    value: 39,
                    name: '四月',
                    itemStyle: {
                        borderColor: '#9ECB3C',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: "#9ECB3C",
                        color: 'rgba(60,170,211,0.05)'
                    }
                }, {
                    value: 39,
                    name: '五月',
                    itemStyle: {
                        borderColor: '#6DBC49',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: "#6DBC49",
                        color: 'rgba(60,170,211,0.05)'
                    }
                }, {
                    value: 39,
                    name: '六月',
                    itemStyle: {
                        borderColor: '#37B44E',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: "#37B44E",
                        color: 'rgba(60,170,211,0.05)'
                    }
                }, {
                    value: 38,
                    name: '七月',
                    itemStyle: {
                        borderColor: '#3DBA78',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: "#3DBA78",
                        color: 'rgba(60,170,211,0.05)'
                    }
                }, {
                    value: 37,
                    name: '八月',
                    itemStyle: {
                        borderColor: '#14ADCF',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: "#14ADCF",
                        color: 'rgba(60,170,211,0.05)'
                    }
                }, {
                    value: 36,
                    name: '九月',
                    itemStyle: {
                        borderColor: '#209AC9',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: "#209AC9",
                        color: 'rgba(60,170,211,0.05)'
                    }
                // }, {
                //     value: 0,
                //     name: 'A',
                //     itemStyle: {
                //         borderColor: '#1E91CA',
                //         borderWidth: 2,
                //         shadowBlur: 10,
                //         shadowColor: "#1E91CA",
                //         color: 'rgba(60,170,211,0.05)'
                //     }
                // }, {
                //     value: 0,
                //     name: 'A',
                //     itemStyle: {
                //         borderColor: '#2C6BA0',
                //         borderWidth: 2,
                //         shadowBlur: 10,
                //         shadowColor: "#2C6BA0",
                //         color: 'rgba(60,170,211,0.05)'
                //     }
                // },
                // {
                //     value: 0,
                //     name: 'B',
                //     itemStyle: {
                //         borderColor: '#2B55A1',
                //         borderWidth: 2,
                //         shadowBlur: 10,
                //         shadowColor: "#2B55A1",
                //         color: 'rgba(60,170,211,0.05)'
                //     }
                },
               
            ]
        },
        {
            type: 'pie',
            radius: ["24%", "23%"],
            data: [100],
            center: ['50%', '50%'],
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,0.3)',
                }
            },
            hoverAnimation: false,
            label: {
                show: false,
            }
        },
        {
            type: 'pie',
            radius: ["22%", "21.5%"],
            data: [100],
            center: ['50%', '50%'],
            color: 'rgba(255,255,255,0.3)',
            hoverAnimation: false,
            label: {
                show: false,
            }
        },

    ]
}