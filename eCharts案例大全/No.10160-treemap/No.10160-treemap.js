option = {
    tooltip: {
        show: true,
    },

    backgroundColor: '#293b82',
    // visualMap:{
    //     type: 'continuous',
    //     min:0,
    //     max:19551,
    // },
    series: [{
        type: 'treemap',
        backgroundColor: 'blue',
        leafDepth: 1,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        textStyle: {
            color: '#000'
        },
        // emphasis:{
        //     itemStyle:{
        //         color:'blue'
        //     }
        // },
        data: [{
                name: '天基', // First tree
                value: 19551,
                itemStyle: {
                    color: 'blue'
                },
                children: [{
                    name: '卫星遥感', // First leaf of first tree
                    value: 2,
                }, {
                    name: '卫星定位', // Second leaf of first tree
                    value: 2
                }, {
                    name: '卫星及发射', // Second leaf of first tree
                    value: 2
                }, {
                    name: '传感器', // Second leaf of first tree
                    value: 3
                }, {
                    name: '芯片板卡', // Second leaf of first tree
                    value: 11847
                }, {
                    name: '地面监控系统', // Second leaf of first tree
                    value: 0
                }, {
                    name: '接收机/天线', // Second leaf of first tree
                    value: 16608
                }]
            }, {
                name: '空基', // Second tree
                value: 993,
                children: [{
                        name: 'GIS基础软件平台', // Son of first tree
                        value: 13440,
                    },
                    {
                        name: '地理信息大数据云中心', // Son of first tree
                        value: 19,
                    },
                    {
                        name: '全数字摄影测量系统', // Son of first tree
                        value: 3141,
                    },
                    {
                        name: '遥感处理软件', // Son of first tree
                        value: 3878,
                    },
                    {
                        name: 'GNSS CORS软件平台', // Son of first tree
                        value: 13440,
                    },
                    {
                        name: '地图服务', // Son of first tree
                        value: 12085,
                    },
                    {
                        name: '机载软件', // Son of first tree
                        value: 3878,
                    },
                    {
                        name: '平差软件', // Son of first tree
                        value: 3878,
                    },
                    {
                        name: '解析测图仪', // Son of first tree
                        value: 434,
                    },
                    {
                        name: '图形工作站', // Son of first tree
                        value: 434,
                    },
                    {
                        name: 'GIS应用平台', // Son of first tree
                        value: 13440,
                    }
                ]
            },
            {
                name: '地基', // Son of first tree
                value: 17248,
            },
            {
                name: '地下', // Son of first tree
                value: 16875,
            },
            {
                name: '水下', // Son of first tree
                value: 16873,
            },
            {
                name: '室内定位', // Son of first tree
                value: 8760,
            }
        ],
        label: {
            show: true,
            formatter: '{title|{b}}\n{subT|({c})}',
            fontSize: 18,
            // lineHeight: 24,
            zlevel: 10,
            rich: {
                title: {
                    color: '#000',
                    align: 'center',
                    fontSize: 20,
                    lineHeight: 40,
                    height: 50,
                },
                subT: {
                    color: '#000',
                    align: 'center',
                    fontSize: 18,
                }
            }
        },
        nodeClick: 'none',
        roam: false,
        levels: [{
                //colorSaturation: [0.6, 0.4],
                colorMappingBy: 'value',
                color: ['#86ac93', '#43614d'],
                itemStyle: {
                    borderColor: 'transparent',
                    borderWidth: 4,
                    gapWidth: 4,

                }

            },
            {
                colorSaturation: [0.6, 0.4],
                colorMappingBy: 'value',
                colorAlpha: [0.6, 0.8],
                itemStyle: {
                    borderColorSaturation: 0.7,
                    //borderColor: 'transparent',
                    gapWidth: 2,
                    borderWidth: 2
                }
            },
            {
                colorSaturation: [0.6, 0.1],
                colorMappingBy: 'value',
                itemStyle: {
                    borderColorSaturation: 0.7,
                    gapWidth: 0,
                    borderWidth: 1
                }
            }
        ],
    }]
};
myChart.on('click', params => {
    console.log(params)
})