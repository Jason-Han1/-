var barWidth = 40;
var symbolSize = [barWidth, 20];
var symbolOffsetT = ["-75%", -10]; //修改绿色柱子头部椭圆位置
var symbolOffsetB = [-30, 10]; //修改绿色柱子底部椭圆位置
var normalColor = "#94a1a9";
var fontSize = 20;
var datas = {
    xdata: ['2016', '2017', '2018', '2019'],
    yData1: [4200, 2220, 3910, 5340],
    yData2: [3100, 2120, 3610, 5140],
    legendData: ['aaa', 'bbb'],
}
option = {
    animation: false, //去除加载时缓动动画
    legend: {
        show: true,
        selectedMode: false, //取消图例上的点击事件
        data: datas.legendData
    },
    xAxis: {
        axisLine: {
            lineStyle: {
                color: normalColor
            }
        },
        axisTick: {
            "show": false
        },
        axisLabel: {
            textStyle: {
                color: normalColor,
                fontSize: fontSize
            },
            margin: 20
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: "dashed",
                color: normalColor
            }
        },
        data: datas.xdata,
    },
    yAxis: [{
            type: 'value',
            name: "单位：",
            nameTextStyle: {
                fontSize: fontSize
            },
            color: normalColor,
            axisTick: {
                "show": false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: "dashed",
                    color: normalColor
                }
            },
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: normalColor,
                    fontSize: fontSize
                }
            },
            axisLine: {
                lineStyle: {
                    color: normalColor
                }
            },

        },
        {
            type: 'value',
            name: "单位：",
            nameTextStyle: {
                fontSize: fontSize
            },
            color: normalColor,
            axisTick: {
                "show": false
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: normalColor,
                    fontSize: fontSize
                }
            },
            axisLine: {
                lineStyle: {
                    color: normalColor
                }
            },

        }
    ],
    series: [{ // 绿色柱子
            name: datas.legendData[0],
            tooltip: {
                show: true
            },
            type: 'bar',
            barWidth: barWidth, //柱子宽度
            barGap: 0.5, //柱子之间间距
            emphasis: {
                itemStyle: { //填充部分鼠标移上去颜色
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(72, 238, 106,0.8)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(11, 151, 138,0.8)'
                            }
                        ]),
                }
            },
            label:{
              show:true ,
              position:"top",
              padding:10,
              textStyle:{
                  fontSize:fontSize
              }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#49ee69'
                            },
                            {
                                offset: 1,
                                color: '#0c9889'
                            }
                        ]),
                    borderWidth: '1',
                    borderColor: '#0c9889',
                }
            },
            data: datas.yData1,
            barGap: 0,
            legendHoverLink: false,
        }, {
            // 绿色柱子底部椭圆
            name: datas.legendData[0],
            tooltip: {
                show: true
            },
            type: 'pictorialBar',
            itemStyle: {
                normal: { //未填充部分鼠标移上去颜色
                    color: '#0c9889',
                    borderWidth: 1,
                    borderColor: '#0c9889'
                }
            },
            // symbol: 'image://data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAAA/ElEQVQ4ja2VOw7CMBBEHyEV4iAUdIC4BxId3xbOk5qAoEIcBNFSUHAGKkQJaKUYmfgTJ8pISbHr3Zkd20ljdPoQiDaQ3B+8gTXwCimLjYgdXeAIdLJsHxgDN+tqDZERMbEAzlpzMsILMDNWlyAQS7bABmgZ2eK8lyBYoWNCL4G3wAElaOojkJF3RSN7YK1XBE4FFfDnQFTRkiL8BNv2oC5I71heKdADrjU2lws4lP2IcoHUWFoeB2CgBOsWybdlmT3PCo1V/USvt+1BqisIhNMBGwG+Agv2PkEuAn3kucMylZe747Q05JjK7cwrDJ4w9H+gGiZAE1gFHQTgC/m7OlXDmboLAAAAAElFTkSuQmCC',
            symbolRotate: 0,
            symbolSize: symbolSize,
            symbolOffset: symbolOffsetB,
            symbolPosition: 'start',
            data: datas.yData1,
            z: 3
        },
        {
            // 绿色柱子头部椭圆
            name: datas.legendData[0],
            tooltip: {
                show: false
            },
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: '#21b267',
                    borderWidth: 1,
                    borderColor: '#7bf2b0'
                }
            },

            // symbol: 'image://data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAABIElEQVQ4jaWVMWoCQRSGv0iKFIm3MLVFYshFbGxMEwTTeQxrBTuFVMkRPMBWhhQpAh5CEBEJhMgjb2T0ze7Mrh8sLPNm5h++nZm9GMz/SKQOjLVrD9ikDLs0LWGawBvQ0GoLaAOfwd4eNdNieQYyb3L0PdNaIUUBN8ArMAGuTPW/baJ9rk1VyQsQJQugYyoW6fOhYwyhgJCSGLnK/ICYkhhBZS6gjJIYHZ2r6QKqKIlx65RJwAr4iQyowq/MKwHvwF3KoSnBl845dd9gCTx6V8E5TIEH4JuTXbQD+noFrCsEyN30pM/WNYbOQRVlouReV39EKABP2chULEdKUgNQZS8FykRJ91RJmQBHSJlTMosNTv0fOGVDvQZkM+Su+gCwB/qVO5cbNt4bAAAAAElFTkSuQmCC',
            symbolRotate: 0,
            symbolSize: symbolSize,
            symbolOffset: symbolOffsetT,
            symbolPosition: 'end',
            data: datas.yData1,
            z: 3
        }, {
            // 红色柱子
            name: datas.legendData[1],
            type: 'bar',
            // stack: 1,
            barWidth: barWidth, //柱子宽度
            barGap: 0.5, //柱子之间间距
            yAxisIndex: 1, //选择第二个y轴 不写的话 双y轴无法实现 
            emphasis: {
                itemStyle: { //左侧未填充部分鼠标移上去颜色
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(235, 70, 80,0.8)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(151, 98, 11,0.8)'
                            }
                        ]),
                    barBorderColor: 'rgba(235, 70, 80,0.8)'
                }
            },
            label:{
              show:true ,
              position:"top",
              padding:10,
              textStyle:{
                  fontSize:fontSize
              }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(235, 70, 80,1)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(151, 98, 11,1)'
                            }
                        ]),
                    barBorderColor: 'rgba(235, 70, 80,1)',
                }
            },
            data: datas.yData2,
        }, {
            // 红色柱子底部椭圆
            name: datas.legendData[1],
            tooltip: {
                show: false
            },
            type: 'pictorialBar',

            itemStyle: {
                normal: {
                    color: 'rgba(151, 98, 11,1)',
                    borderWidth: 1,
                    borderColor: 'rgba(151, 98, 11,1)'
                }
            },
            // symbol: 'image://data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAAA/ElEQVQ4ja2VOw7CMBBEHyEV4iAUdIC4BxId3xbOk5qAoEIcBNFSUHAGKkQJaKUYmfgTJ8pISbHr3Zkd20ljdPoQiDaQ3B+8gTXwCimLjYgdXeAIdLJsHxgDN+tqDZERMbEAzlpzMsILMDNWlyAQS7bABmgZ2eK8lyBYoWNCL4G3wAElaOojkJF3RSN7YK1XBE4FFfDnQFTRkiL8BNv2oC5I71heKdADrjU2lws4lP2IcoHUWFoeB2CgBOsWybdlmT3PCo1V/USvt+1BqisIhNMBGwG+Agv2PkEuAn3kucMylZe747Q05JjK7cwrDJ4w9H+gGiZAE1gFHQTgC/m7OlXDmboLAAAAAElFTkSuQmCC',
            symbolRotate: 0,
            symbolSize: symbolSize,
            symbolOffset: [30, 10],
            symbolPosition: 'start',
            data: datas.yData2,
            z: 7
        },
        {
            // 红色柱子头部椭圆
            name: datas.legendData[1],
            tooltip: {
                show: false
            },
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: '#b13d21',
                    borderWidth: 1,
                    borderColor: '#f18f7b',
                }
            },

            // symbol: 'image://data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAABIElEQVQ4jaWVMWoCQRSGv0iKFIm3MLVFYshFbGxMEwTTeQxrBTuFVMkRPMBWhhQpAh5CEBEJhMgjb2T0ze7Mrh8sLPNm5h++nZm9GMz/SKQOjLVrD9ikDLs0LWGawBvQ0GoLaAOfwd4eNdNieQYyb3L0PdNaIUUBN8ArMAGuTPW/baJ9rk1VyQsQJQugYyoW6fOhYwyhgJCSGLnK/ICYkhhBZS6gjJIYHZ2r6QKqKIlx65RJwAr4iQyowq/MKwHvwF3KoSnBl845dd9gCTx6V8E5TIEH4JuTXbQD+noFrCsEyN30pM/WNYbOQRVlouReV39EKABP2chULEdKUgNQZS8FykRJ91RJmQBHSJlTMosNTv0fOGVDvQZkM+Su+gCwB/qVO5cbNt4bAAAAAElFTkSuQmCC',
            symbolRotate: 0,
            symbolSize: symbolSize,
            symbolOffset: ['30', '-10'],
            symbolPosition: 'end',
            data: datas.yData2,
            z: 7
        }
    ]
};