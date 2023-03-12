option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
        },
    },
    grid: {
        left: '2%',
        top: '5%',
        bottom: '20%',
        right: '4%',
    },
    tooltip: {
      label: {
          normal:{
              formatter: function(params) {
                  console.log(params)
              }
          }
      }  
    },
    xAxis: {
        data: ['计划停电数量', '非计划停电数量', '故障停电告警数量'],
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: 8,
            },
            interval: 0,
            rich: {
                icon: {
                    height: 25,
                    width: 60,
                    align: 'center',
                    verticalAlign: 'middle',
                    fontSize: 8,
                    backgroundColor: {
                        image:
                            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iNzEiIHZpZXdCb3g9IjAgMCAxMjAgNzEiPg0KICA8ZyBpZD0iXzYiIGRhdGEtbmFtZT0iNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk2MC41IC04MzMpIj4NCiAgICA8cGF0aCBpZD0i5aSa6L655b2iXzEiIGRhdGEtbmFtZT0i5aSa6L655b2iIDEiIGQ9Ik0xMiwwLDI0LDhIMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMzMgOTA0KSByb3RhdGUoMTgwKSIgZmlsbD0iIzYzNzQ4YSIvPg0KICAgIDxsaW5lIGlkPSLnm7Tnur9fMTIzNyIgZGF0YS1uYW1lPSLnm7Tnur8gMTIzNyIgeDI9IjEyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTYwLjUgODMzLjUpIiBmaWxsPSJub25lIiBzdHJva2U9IiM2Mzc0OGEiIHN0cm9rZS13aWR0aD0iMSIvPg0KICAgIDxsaW5lIGlkPSLnm7Tnur9fMTIzOCIgZGF0YS1uYW1lPSLnm7Tnur8gMTIzOCIgeDI9IjEyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTYwLjUgODc5LjUpIiBmaWxsPSJub25lIiBzdHJva2U9IiM2Mzc0OGEiIHN0cm9rZS13aWR0aD0iMSIvPg0KICA8L2c+DQo8L3N2Zz4NCg==',
                    },
                    padding: [10, 0, 0, 0],
                },
            },
        },
    },
    yAxis: {
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    series: [
        {
            name: '',
            type: 'pictorialBar',
            barCategoryGap: '40%',
            symbol: 'triangle',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#ffffff',
                            fontSize: 16,
                            fontFamily: 'myNumberFont',
                        },
                    },
                },
            },
            data: [
                {
                    value: 123,
                    symbolSize: ['100%', '100%'],
                    itemStyle: {
                        color: {
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            type: 'linear',
                            global: false,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: 'rgba(6,255,190,1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(6,255,190,0)',
                                },
                            ],
                        },
                    },
                },
                {
                    value: 60,
                    symbolSize: ['150%', '100%'],
                    itemStyle: {
                        color: {
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            type: 'linear',
                            global: false,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: 'rgba(67,104,215,1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(67,104,215,0)',
                                },
                            ],
                        },
                    },
                },
                {
                    value: 125,
                    symbolSize: ['100%', '100%'],
                    itemStyle: {
                        color: {
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            type: 'linear',
                            global: false,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: 'rgba(255,145,0,1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(255,145,0,0)',
                                },
                            ],
                        },
                    },
                },
            ],
            z: 10,
        },
        {
            name: '第一圈',
            type: 'pictorialBar',
            symbolSize: [47, 16],
            symbolOffset: [0, 11],
            symbolRepeat: false,
            z: 0,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: '#3ACDC5',
                    borderWidth: 6,
                },
            },
            data: [null,1,null],
        },
        {
            name: '第二圈',
            type: 'pictorialBar',
            symbolSize: [62, 22],
            symbolOffset: [0, 17],
            symbolRepeat: false,
            z: 0,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: '#02c3f1',
                    borderWidth: 3,
                },
            },
            data: [null,1,null],
        },
    ],
    animation: false,
};
