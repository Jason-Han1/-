var dataUitName1 = ["2000",
    "2005",
    "2010",
    "2015",
    "2020"
]
var departmentdata1_1 = [10, 20, 30, 40,34]
var departmentdata2_1 = [5, 10, 15, 20,32]
var departmentdata3_1 = [1, 1, 1, 1,4]
var departmentdata4_1 = [4, 9, 14, 19,2]
var departmentdata5_1 = [6, 19, 14, 19,12]
option = {
    backgroundColor: '#031245',
    tooltip: {
        trigger: "axis"
    },
    legend: {
        right: "5%",
        top: "2%",
        textStyle: {
            color: "#fff"
        }
    },
    grid: {
        top: "27%",
        left: "3%",
        right: "7%",
        bottom: "3%",
        containLabel: true
    },
    xAxis: {
        type: "category",
        name: "(年)",
        nameTextStyle: {
            color: "#fff"
        },
        data: dataUitName1,
        axisLabel: {
            textStyle: {
                color: "#fff",
                fontSize: 12,
                fontWeight: 900
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                type: "dashed",
                color: "#2E344B"
            }
        },
        splitLine: {
            show: false
        }
    },
    yAxis: [{
        type: "value",
        name: "(人)",
        nameTextStyle: {
            color: "#fff"
        },
        axisLabel: {
            textStyle: {
                color: "#fff",
                fontSize: 12,
                fontWeight: 900
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: "dashed",
                color: "#2E344B"
            }
        }
    }],
    series: [
        {
            name: "",
            type: "pictorialBar",
            symbolSize: [12, 6],
            symbolOffset: [-31, -4],
            symbolPosition: "end",
            z: 12,
            label: {
                normal: {
                    show: false,
                }
            },
            data: departmentdata1_1,
            color: '#CC1CAA',
            tooltip: {
                show: false
            },
        }, {
            name: "",
            type: "pictorialBar",
            symbolSize: [12, 6],
            symbolOffset: [-31, 4],

            z: 12,
            data: departmentdata1_1,
            color: '#CC1CAA',
            tooltip: {
                show: false
            },
        }, {
            type: "bar",
            name: '未婚',
            itemStyle: {
                normal: {
                    opacity: 0.5,
                }
            },
            barWidth: "12",
            data: departmentdata1_1,
            color:"#CC1CAA",
        },

        {
            name: "",
            type: "pictorialBar",
            symbolSize: [12, 6],
            symbolOffset: [-16, -4],
            symbolPosition: "end",
            z: 12,
            label: {
                show: false
            },
            data: departmentdata2_1,
            color: '#8D67FF',
            tooltip: {
                show: false
            },
        }, {
            name: "",
            type: "pictorialBar",
            symbolSize: [12, 6],
            symbolOffset: [-16, 4],
            z: 12,
            data: departmentdata2_1,
           color: '#8D67FF',
            tooltip: {
                show: false
            },
        }, {
            type: "bar",
            name: '已婚',
            itemStyle: {
                normal: {
                    opacity: 0.5
                }
            },
            barWidth: "12",
            data: departmentdata2_1,
            color: '#8D67FF'
        },



        {
            name: "",
            type: "pictorialBar",
            symbolSize: [12, 6],
            symbolOffset: [0, -4],
            symbolPosition: "end",
            z: 12,
            label: {
                show: false
            },
            data: departmentdata3_1,
            color: '#F97B0F',
            tooltip: {
                show: false
            },
        }, {
            name: "",
            type: "pictorialBar",
            symbolSize: [12, 6],
            symbolOffset: [0, 4],
            z: 12,
            data: departmentdata3_1,
            color: '#F97B0F',
            tooltip: {
                show: false
            },
        }, {
            type: "bar",
            name: '离异',
            itemStyle: {
                normal: {
                    opacity: 0.5
                }
            },
            barWidth: "12",
            data: departmentdata3_1,
            color:"#F97B0F",
        },



        {
            name: "",
            type: "pictorialBar",
            symbolSize: [12, 6],
            symbolOffset: [16, -4],
            symbolPosition: "end",
            z: 12,
            label: {
                show: false
            },
            data: departmentdata4_1,
            color: '#48DE13',
            tooltip: {
                show: false
            },
        }, {
            name: "",
            type: "pictorialBar",
            symbolSize: [12, 6],
            symbolOffset: [16, 4],
            z: 12,
            data: departmentdata4_1,
            color: '#48DE13',
            tooltip: {
                show: false
            },
        }, {
            type: "bar",
            name: '丧偶',
            itemStyle: {
                normal: {
                    opacity: 0.5
                }
            },
            barWidth: "12",
            data: departmentdata4_1,
            color: "#48DE13",
        },
        
        
        {
            name: "",
            type: "pictorialBar",
            symbolSize: [12, 6],
            symbolOffset: [31, -4],
            symbolPosition: "end",
            z: 12,
            label: {
                show: false
            },
            data: departmentdata5_1,
            color: '#00FFFF',
            tooltip: {
                show: false
            },
        }, {
            name: "",
            type: "pictorialBar",
            symbolSize: [12, 6],
            symbolOffset: [31, 4],
            z: 12,
            data: departmentdata5_1,
            color: '#00FFFF',
            tooltip: {
                show: false
            },
        }, {
            type: "bar",
            name: '未知',
            itemStyle: {
                normal: {
                    opacity: 0.5
                }
            },
            barWidth: "12",
            data: departmentdata5_1,
            color: "#00FFFF",
        },

    ]
}