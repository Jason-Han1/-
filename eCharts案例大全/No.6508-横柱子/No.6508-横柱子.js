option = {
    legend: {
        data: ['轻纺工业', '资源加工工业'],
        icon:'circle',
        itemWidth:7,
        itemHeight:7,
        textStyle:{
            color:'rgba(150, 245, 246, 1)',
            fontSize:10
        }
        
    },
    tooltip: {},
    xAxis: {
        type: 'value',
        max: 25,
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
    },
    yAxis: {
        type: 'category',
        axisLine: {
            show: false
        }
    },
    series: [{
            type: 'bar',
            name: '轻纺工业',
            stack: 'one',
            itemStyle: {
                color: 'RGBA(255, 201, 132, 1)'
            },
            data: [

                {
                    value: 2,
                    itemStyle: {
                        color: 'RGBA(196, 255, 255, 1)'
                    },
                },
                {
                    value: 2,
                    itemStyle: {
                        color: 'RGBA(255, 201, 132, 1)'
                    },
                },
            ]
        },
        {
            type: 'bar',
            name: '机械电子制造工业',
            itemStyle: {
                color: 'RGBA(59, 147, 251, 1)'
            },
            stack: 'one',
            data: [{
                    value: 4,
                    itemStyle: {
                        color: 'RGBA(84, 249, 188, 1)'
                    },
                },
                {
                    value: 4,
                    itemStyle: {
                        color: 'RGBA(59, 147, 251, 1)'
                    },

                },
            ]
        },
        {
            type: 'bar',
            name: '资源加工工业',
            itemStyle: {
                color: 'RGBA(84, 249, 188, 1)'
            },
            stack: 'one',
            data: [{
                    value: 4,
                    itemStyle: {
                        color: 'RGBA(59, 147, 251, 1)'
                    },
                },
                {
                    value: 4,
                    itemStyle: {
                        color: 'RGBA(84, 249, 188, 1)'
                    },
                },
            ]
        },
        {
            type: 'bar',
            name: '其他',
            itemStyle: {
                color: 'RGBA(196, 255, 255, 1)'
            },
            stack: 'one',
            data: [


                {
                    value: 2,
                    itemStyle: {
                        color: 'RGBA(255, 201, 132, 1)'
                    },
                },
                {
                    value: 2,
                    itemStyle: {
                        color: 'RGBA(196, 255, 255, 1)'
                    },
                },
            ]
        },
        // {
        //     type: 'bar',
        //     barWidth: "20%",
        //     stack: '总量',
        //     name:'轻纺工业',
        //     data: [{
        //             name: '轻纺工业',
        //             value: 4,
        //             itemStyle: {
        //                 color: 'RGBA(255, 201, 132, 1)'
        //             }
        //         },
        //         {
        //             name: '其他',
        //             value: 4,
        //             itemStyle: {
        //                 color: 'RGBA(196, 255, 255, 1)'
        //             }
        //         }
        //     ],
        // },
        // {
        //     type: 'bar',
        //     barWidth: "20%",
        //     stack: '总量',
        //     data: [

        //         {
        //             name: '机械电子制造工业',
        //             value: 8,
        //             itemStyle: {
        //                 color: 'RGBA(59, 147, 251, 1)'
        //             }
        //         },
        //         {
        //             name: '资源加工工业',
        //             value: 8,
        //             itemStyle: {
        //                 color: 'RGBA(84, 249, 188, 1)'
        //             }
        //         },
        //     ],
        // },
        // {
        //     type: 'bar',
        //     barWidth: "20%",
        //     stack: '总量',
        //     data: [

        //         {
        //             name: '资源加工工业',
        //             value: 8,
        //             itemStyle: {
        //                 color: 'RGBA(84, 249, 188, 1)'
        //             }
        //         },
        //         {
        //             name: '机械电子制造工业',
        //             value: 8,
        //             itemStyle: {
        //                 color: 'RGBA(59, 147, 251, 1)'
        //             }
        //         },
        //     ],
        // },
        // {
        //     type: 'bar',
        //     barWidth: "20%",
        //     stack: '总量',
        //     data: [

        //         {
        //             name: '其他',
        //             value: 4,
        //             itemStyle: {
        //                 color: 'RGBA(196, 255, 255, 1)'
        //             }
        //         },
        //         {
        //             name: '轻纺工业',
        //             value: 4,
        //             itemStyle: {
        //                 color: 'RGBA(255, 201, 132, 1)'
        //             }
        //         },

        //     ],
        // },
    ]
};