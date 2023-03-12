var color_dark = ["#FF8256", "#FFCC4B", "#5FAAFF", "#92D96C"];
var color_light = ["#FFC0AA", "#FFE4AA", "#B7D9FF", "#C8ECB5"];
var max = 11;

option = {
    grid: {
        left: '3%',
        right: '4%',
        bottom: '12%',
        top: '12%',
        containLabel: true,
        show: true,
        backgroundColor: "#FAFAFA",
        borderColor: "#FAFAFA",
        z: -10,
    },
    xAxis: [{
        type: 'value',
        max: 11,
        min: -11,
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
    }],
    yAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: "#FFF",
                    width: 1
                },
            },
            data: ['活跃', '感觉', '视觉', '序列'],
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#666666",
                    fontWeight: 300
                }
            },

        },
        {
            type: 'category',
            data: ['沉思', '直觉', '言语', '综合'],
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#666666",
                    fontWeight: 300
                }
            },

        }
    ],
    series: [{
            type: 'bar',
            stack: 'style',
            z: -1,
            animation: false,
            label: {
                show: true,
                position: 'insideRight',
                fontSize: 14,
                fontWeight: 300,
            
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                         return params.data > Math.floor(max / 2) ? color_dark[params.dataIndex % color_dark.length]: color_light[params.dataIndex % color_light.length];
                    },
                }
            },
            data: [8, 4, 1, 8],
        },
        {
            type: 'bar',
            stack: 'style',
            z: -1,
            animation: false,
            barCategoryGap: 0.1,
            label: {
                show: true,
                position: 'insideLeft',
                fontSize: 14,
                fontWeight: 300,
                formatter: function(value) {
                    return Math.abs(value.data) || "";
                }
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        return Math.abs(params.data) > Math.floor(max / 2) ? color_dark[params.dataIndex % color_dark.length]: color_light[params.dataIndex % color_light.length];
                },
            }
        },
        data: [-3, -7, -10, -3],
    }
]
};