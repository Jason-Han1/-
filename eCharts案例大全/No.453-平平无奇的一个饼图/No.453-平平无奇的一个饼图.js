var uploadedDataURL = "/asset/get/s/data-1632648941519-ANY207-X8.png";

color = ['#8776ff', '#fba544', '#f36d8e'];
data = [
    {
        name: '性能',
        value: '395',
    },
    {
        name: '时间',
        value: '160',
    },
    {
        name: '速度',
        value: '141',
    },
];
pointData = [
    {
        name: '性能',
        value: '56',
        x: '67%',
        y: '30%',
        symbolSize: 85,
        itemStyle: {
            borderWidth: 4,
            borderColor: '#6b03f0',
            shadowColor: '#ccc',
            shadowBlur: 22,
            shadowOffsetY: 12,
            shadowOffsetX: 0,
        },
    },
    {
        name: '时间',
        value: '20',
        x: '71%',
        y: '40%',
        symbolSize: 70,
        itemStyle: {
            borderWidth: 4,
            borderColor: '#f47d07',
        },
    },
    {
        name: '速度',
        value: '24',
        x: '76%',
        y: '30%',
        symbolSize: 60,
        itemStyle: {
            borderWidth: 4,
            borderColor: '#555588',
        },
    },
];
option = {
    backgroundColor: '#eef1fa',
    title: {
        show: false,
    },
    series: [
        /* 饼图 */
        {
            name: '饼图',
            type: 'pie',
            radius: ['38%', '40%'],
            z: 3,
            splitNumber: 6,
            startAngle: 0,
            endAngle: 360,
            itemStyle: {
                normal: {
                    borderRadius: 10,
                    borderWidth: 5,
                    color: function (params) {
                        return color[params.dataIndex];
                    },
                },
            },
            label: {
                show: false,
                width: 100,
                height: 60,
                padding: [20, 0],
                backgroundColor: '#fff',
                borderWidth: 5,
                borderColor: 'auto',
                verticalAlign: 'middle',
                align: 'center',
                borderRadius: 80,
                position: 'outside',
                formatter: '{title|{b}}\n{per|{d}}{font|%}',
                rich: {
                    title: {
                        align: 'center',
                        fontSize: 14,
                        fontWeight: 600,
                        color: '#555588',
                        lineHeight: 30,
                    },
                    per: {
                        align: 'center',
                        fontSize: 24,
                        fontWeight: 'bold',
                    },
                    font: { align: 'left', fontSize: 14, fontWeight: 'bold' },
                },
            },
            labelLine: {
                show: false,
                length: 30,
                length2: 40,
            },
            markPoint: {
                symbol: 'circle',
                itemStyle: {
                    color: '#fff',
                },
                label: {
                    show: true,
                    verticalAlign: 'middle',
                    align: 'center',
                    borderRadius: 80,
                    position: 'inside',
                    formatter: function (value) {
                        return `{title|${value.data.name}}\n{per|${value.data.value}}{font|%}`;
                    },
                    rich: {
                        title: {
                            align: 'center',
                            fontSize: 12,
                            fontWeight: 500,
                            color: '#555588',
                            lineHeight: 20,
                        },
                        per: {
                            align: 'center',
                            fontSize: 22,
                            fontWeight: 500,
                        },
                        font: { align: 'left', fontSize: 12, fontWeight: 'bold' },
                    },
                },
                animation: false,
                data: pointData,
            },
            data: data,
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            pointer: {
                show: false,
            },
        },
        /* 外部刻度 */
        {
            name: '外部刻度',
            type: 'gauge',
            radius: '65%',
            min: 0, //最小刻度
            max: 200, //最大刻度
            splitNumber: 30, //刻度数量
            startAngle: 0,
            endAngle: 360,
            axisLine: {
                show: false,
            },
            //仪表盘轴线
            axisLabel: {
                show: false,
            },
            //刻度标签
            axisTick: {
                show: true,
                splitNumber: 6,
                length: 35,
                lineStyle: {
                    color: '#e2defd', //用颜色渐变函数不起作用
                    width: 1,
                },
            },
            //刻度样式
            splitLine: {
                show: true,
                length: 35,
                lineStyle: {
                    color: '#e2defd', //用颜色渐变函数不起作用
                    width: 1,
                },
            }, //分隔线样式
            detail: {
                show: false,
            },
            pointer: {
                show: false,
            },
        },

        /*内部*/
        {
            type: 'pie',
            radius: ['0', '30%'],
            z: 3,
            hoverAnimation: false,
            data: [
                {
                    value: 75,
                    itemStyle: {
                        normal: {
                            color: '#706dfc',
                            shadowColor: '#ccc',
                            shadowBlur: 22,
                            shadowOffsetY: 12,
                            shadowOffsetX: 0,
                        },
                    },
                    label: {
                        normal: {
                            formatter: function (params) {
                                return '{icon|}\n{title|总   览}\n{a|' + params.value + '}{font|%}';
                            },
                            position: 'center',
                            show: true,
                            color: '#ffffff',
                            rich: {
                                icon: {
                                    height: 50,
                                    align: 'center',
                                    backgroundColor: {
                                        image: uploadedDataURL,
                                    },
                                },
                                title: { fontSize: 16, fontWeight: 600, lineHeight: 40 },
                                a: {
                                    align: 'center',
                                    fontSize: 74,
                                    fontWeight: 600,
                                },
                                font: {
                                    verticalAlign: 'top',
                                    fontSize: 26,
                                },
                            },
                        },
                    },
                    labelLine: {
                        show: false,
                    },
                },
            ],
            animationType: 'scale',
        },
        /*外一层*/
        {
            type: 'pie',
            radius: '65%',
            avoidLabelOverlap: false,
            z: 0,
            hoverAnimation: false,
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            data: [
                {
                    value: 1,
                },
            ],
            itemStyle: {
                normal: {
                    color: '#ffffff',
                    shadowColor: '#e7e5ff',
                    shadowBlur: 22,
                    shadowOffsetY: 12,
                    shadowOffsetX: 0,
                },
            },
            animationType: 'scale',
        },
        //外二层圈
        {
            type: 'pie',
            radius: '47%',
            avoidLabelOverlap: false,
            z: 1,
            hoverAnimation: false,
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            data: [
                {
                    value: 1,
                },
            ],
            itemStyle: {
                normal: {
                    color: '#eef1fa',
                },
            },
        },
        //外三层圈
        {
            type: 'pie',
            radius: ['36%', '42%'],
            avoidLabelOverlap: false,
            z: 2,
            hoverAnimation: false,
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            data: [
                {
                    value: 1,
                },
            ],
            itemStyle: {
                normal: {
                    color: '#fff',
                },
            },
        },
        //最外
        {
            type: 'gauge',
            radius: '80%',
            startAngle: 360,
            endAngle: 0,
            progress: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: [
                        [0.5, '#d2d1f5'],
                        [1, '#eef1fa'],
                    ],
                    width: 2,
                },
            },
            axisTick: {
                show: false,
            },

            axisLabel: {
                show: false,
            },
            anchor: {
                show: false,
            },

            title: {
                show: false,
            },
            detail: {
                show: true,
            },
            splitNumber: 4,
            splitLine: {
                show: true,
                length: 40,
                distance: -20,
                lineStyle: {
                    width: 100,
                    color: '#eef1fa',
                },
            },
            /* markPoint: {
              symbol: "pin",
              symbolSize: 50,
              data: [
                {
                  value: 50,
                  x: "50%",
                  y: "90%",
                  symbol: "circle",
                  itemStyle: {
                    color: "#fff",
                    borderWidth: 0.5,
                    borderColor: "#4d5831",
                  },
                  symbolSize: 30,
                },
                {
                  value: 50,
                  x: "82%",
                  y: "50%",
                  symbol: "circle",
                  itemStyle: {
                    color: "#fff",
                    borderWidth: 0.5,
                    borderColor: "#4d5831",
                  },
                  symbolSize: 30,
                },
                {
                  value: 50,
                  x: "18%",
                  y: "50%",
                  symbol: "circle",
                  itemStyle: {
                    color: "#fff",
                    borderWidth: 0.5,
                    borderColor: "#4d5831",
                  },
                  symbolSize: 30,
                },
                {
                  value: 0.5,

                  symbol: "pin",
                  itemStyle: {
                    color: "#b03a5b",
                    borderWidth: 0.5,
                    borderColor: "#b03a5b",
                  },
                  symbolSize: 30,
                },
              ],
            }, */
        },
        //最外
        {
            type: 'pie',
            radius: ['86%', '90%'],

            z: 1,
            avoidLabelOverlap: false,
            hoverAnimation: false,
            legendHoverLink: false,
            silent: false,
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            emphasis: {},
            data: [
                {
                    value: 1,
                },
            ],
            itemStyle: {
                normal: {
                    color: '#f4f4fd',
                },
            },
        },
    ],
};
