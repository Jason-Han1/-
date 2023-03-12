var leftNum="25%"
var rightNum1="20%"
var rightNum2="30%"
option = {
    series: [{
        name: '漏斗图',
        color: ['#445097', '#655f9f', '#8c72a9'],
   
      type: 'funnel',
     gap: 10,
        top: 0,
         bottom: 0,
        left: '10%',
       width: '80%',
        min: 40,
        max: 100,
        minSize: '20%',
        maxSize: '100%',
        sort: 'descending',
        legendHoverLink: false,
        label: {
            show: true,
            position: 'inside',
            fontSize: 10,
            formatter: function(params) {
                let text = '';
                switch (params.dataIndex) {
                    case 0:
                        text = `申请结案(${params.data.data})`;
                        break;
                    case 1:
                        text = `申请限制出入境(${params.data.data})`;
                        break;
                    case 2:
                        text = `财产申报(${params.data.data})`;
                        break;
                   
                }
                return text;
            },
            rich: {
                value1: {
                    color: '#fff',
                    fontWeight: 700,
                    fontFamily: 'Camar'
                },
                value2: {
                    color: '#fff',
                    fontWeight: 700,
                    fontFamily: 'Camar'
                },
                value3: {
                    color: '#fff',
                    fontWeight: 700,
                    fontFamily: 'Camar'
                },
              
            }
        },
        labelLine: {
            length: 10,
            lineStyle: {
                width: 0,
                type: 'solid'
            }
        },
        itemStyle: {
            borderColor: '#fff',
            borderWidth: 0
        },
        emphasis: {
            itemStyle: {
                color: '#999'
            }
        },
        markLine: {
            data: [
                [{
                        x: '106',
                        y: '5%',
                        lineStyle: {
                            color: '#999',
                            type: 'solid'
                        },
                        symbol: 'none',
                    },
                    {
                        x: '90%',
                        y: '5%',
                        symbol: 'none'
                    }
                ],
                [{
                        x: '90%',
                        y: '5%',
                        lineStyle: {
                            color: '#999',
                            type: 'solid'
                        },
                        symbol: 'none'
                    },
                    {
                        x: '90%',
                        y: '25%',
                        label: {
                            formatter: () => {
                                return rightNum1
                            }
                        }
                    }
                ],
                [{
                        x: '106',
                        y: '50%',
                        lineStyle: {
                            color: '#999',
                            type: 'solid'
                        },
                        symbol: 'none'
                    },
                    {
                        x: '90%',
                        y: '50%',
                        symbol: 'none'
                    }
                ],
                [{
                        x: '90%',
                        y: '50%',
                        lineStyle: {
                            color: '#999',
                            type: 'solid'
                        },
                        symbol: 'none'
                    },
                    {
                        x: '90%',
                        y: '30%',
                    }
                ],
               

              
              
                
               // 底线
                [{
                        x: '106',
                        y: '95%',
                        lineStyle: {
                            color: '#999',
                            type: 'solid'
                        },
                        symbol: 'none'
                    },
                    {
                        x: '90%',
                        y: '95%',
                        symbol: 'none'
                    }
                ],
                  // 底箭头
                  [{
                        x: '90%',
                        y: '50%',
                        lineStyle: {
                            color: '#999',
                            type: 'solid'
                        },
                        symbol: 'none'
                    },
                    {
                        x: '90%',
                        y: '72%',
                        label: {
                            formatter: () => {
                                return rightNum2
                            },
                        },
                    }
                ],
                [{
                        x: '90%',
                        y: '95%',
                        lineStyle: {
                            color: '#999',
                            type: 'solid'
                        },
                        symbol: 'none'
                    },
                    {
                        x: '90%',
                        y: '75%',
                    }
                ],

               
                // 左侧
                [{
                        x: '5%',
                        y: '5%',
                        lineStyle: {
                            color: '#999',
                            type: 'solid',
                            position: 'start'
                        },

                        symbol: 'none'
                    },
                    {
                        x: '5%',
                        y: '50%'
                    }
                ],
                [{
                    x: '5%',
                    y: '95%',
                    lineStyle: {
                        color: '#999',
                        type: 'solid',
                    },

                    label: {
                        formatter: () => {
                            return leftNum
                        },
                    },
                    symbol: 'none'
                }, {
                    x: '5%',
                    y: '53%',
                }],
                [{
                        x: '25%',
                        y: '5%',
                        lineStyle: {
                            color: '#999',
                            type: 'solid',
                            position: 'start'
                        },

                        symbol: 'none'
                    },
                    {
                        x: '5%',
                        y: '5%',
                        symbol: 'none'
                    }
                ],
                 [{
                        x: '25%',
                        y: '95%',
                        lineStyle: {
                            color: '#999',
                            type: 'solid',
                            position: 'start'
                        },

                        symbol: 'none'
                    },
                    {
                        x: '5%',
                        y: '95%',
                        symbol: 'none'
                    }
                ],

            ]
        },
        data: [{
                value:100,
                data:26,
                "name": "申请结案"
            },
            {
               value: 80,
                data:82,
                "name": "申请限制出入境"
            },
            {
              value: 60,
                data:20,
                "name": "财产申报"
            },
          
        ]
    }]
};