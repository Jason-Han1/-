option = {
    backgroundColor: "#090e36",
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c}$ ({d}%)"
    },
    legend: {
        show: false
    },
    calculable: true,
    series: [{
            type: 'pie',
            startAngle: 0,
            clockwise: false,
            radius: ["25%", "90%"],
            center: ['50%', '50%'],
            roseType: 'area',
            avoidLabelOverlap: false,
            label: {
                show: true,
                position: 'inside',
                formatter: '{c}$',
                textStyle: {
                    fontWeight: '100',
                    fontFamily: 'Microsoft YaHei',
                    color: '#FAFAFA',
                },
            },
            data: [{
                    value: 125,
                    name: 'A',
                    itemStyle: {
                        borderColor: '#FAE927',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: "#FAE927",
                        color: 'rgba(60,170,211,0.05)'
                    }
                }, {
                    value: 120,
                    name: 'A',
                    itemStyle: {
                        borderColor: '#E9E416',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: "#E9E416",
                        color: 'rgba(60,170,211,0.05)'
                    }
                }, {
                    value: 115,
                    name: 'A',
                    itemStyle: {
                        borderColor: '#C9DA36',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: "#C9DA36",
                        color: 'rgba(60,170,211,0.05)'
                    }
                }, {
                    value: 110,
                    name: 'A',
                    itemStyle: {
                        borderColor: '#9ECB3C',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: "#9ECB3C",
                        color: 'rgba(60,170,211,0.05)'
                    }
                }, {
                    value: 105,
                    name: 'A',
                    itemStyle: {
                        borderColor: '#6DBC49',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: "#6DBC49",
                        color: 'rgba(60,170,211,0.05)'
                    }
                }, {
                    value: 100,
                    name: 'A',
                    itemStyle: {
                        borderColor: '#37B44E',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: "#37B44E",
                        color: 'rgba(60,170,211,0.05)'
                    }
                }, {
                    value: 95,
                    name: 'A',
                    itemStyle: {
                        borderColor: '#3DBA78',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: "#3DBA78",
                        color: 'rgba(60,170,211,0.05)'
                    }
                }, {
                    value: 90,
                    name: 'A',
                    itemStyle: {
                        borderColor: '#14ADCF',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: "#14ADCF",
                        color: 'rgba(60,170,211,0.05)'
                    }
                }, {
                    value: 85,
                    name: 'A',
                    itemStyle: {
                        borderColor: '#209AC9',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: "#209AC9",
                        color: 'rgba(60,170,211,0.05)'
                    }
                }, {
                    value: 80,
                    name: 'A',
                    itemStyle: {
                        borderColor: '#1E91CA',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: "#1E91CA",
                        color: 'rgba(60,170,211,0.05)'
                    }
                }, {
                    value: 75,
                    name: 'A',
                    itemStyle: {
                        borderColor: '#2C6BA0',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: "#2C6BA0",
                        color: 'rgba(60,170,211,0.05)'
                    }
                },
                {
                    value: 70,
                    name: 'B',
                    itemStyle: {
                        borderColor: '#2B55A1',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: "#2B55A1",
                        color: 'rgba(60,170,211,0.05)'
                    }
                },
                {
                    value: 65,
                    name: 'C',
                    itemStyle: {
                        borderColor: '#2D3D8E',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: "#2D3D8E",
                        color: 'rgba(60,170,211,0.05)'
                    }
                },
                {
                    value: 60,
                    name: 'D',
                    itemStyle: {
                        borderColor: '#44388E',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: "#44388E",
                        color: 'rgba(60,170,211,0.05)'
                    }
                },
                {
                    value: 55,
                    name: 'E',
                    itemStyle: {
                        borderColor: '#6A368B',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: "#6A368B",
                        color: 'rgba(60,170,211,0.05)'
                    }
                },
                {
                    value: 50,
                    name: 'F',
                    itemStyle: {
                        borderColor: '#7D3990',
                        borderWidth: 2,
                        shadowBlur: 10,
                        shadowColor: "#7D3990",
                        color: 'rgba(60,170,211,0.05)'
                    }
                }
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