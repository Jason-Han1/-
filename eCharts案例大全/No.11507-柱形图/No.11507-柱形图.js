var dataAxis = ['空调', '温湿度', '配电', 'UPS', '温湿度', '烟感', '漏水', '空调', '配电', 'UPS', ];
var data = [65, 104, 83, 83, 83, 78, 67, 83, 90, 76];
var yMax = 120;
var dataShadow = [];

for (var i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
}
option = {
    grid: {
        bottom: "20px",
        left: '30px',
        right: '5%',
        top: '5%',
    },
    xAxis: {
        data: dataAxis,
        axisLabel: {
            /* inside: true,*/
            textStyle: {
                color: '#4f9ccf'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },

        /*z: 10*/
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#4f9ccf'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#013168'],
                width: 1,
                type: 'solid'
            }
        }
    },
    series: [{ // For shadow
            type: 'bar',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0.15)'
                }
            },
            barGap: '-100%',
            barCategoryGap: '40%',
            data: dataShadow,
            animation: false
        },
        {
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: "top",
                    distance: 12,
                    formatter: function(params) {
                        return params.data.value;
                    },
                    textStyle: {
                        color: "#4f9ccf",
                        fontSize: 12
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = ['#139dad', '#80c269', '#f7ac47', '#67e0e3', '#ffdb5c', '#e062ae', '#ff9f7f', '#4171fa', '#106fcf', '#e75d6c', ];
                        return colorList[params.dataIndex]
                    }
                },

            },
            data: data
        }
    ]
};