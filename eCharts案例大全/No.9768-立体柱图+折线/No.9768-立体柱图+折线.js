option = {
    backgroundColor: "#041730",
     grid: {
        top: "14%",
        bottom: "15%"
    },
     tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            label: {
                show: true
            }
        }
    },
    legend: {
        data: ["同比增长量", "驾驶人保有量"],
        top: "8%",
        
        textStyle: {
            color: "#ffffff"
        }
    },
    xAxis: {
        data: ['2015','2016','2017','2018','2019'],
        offset: 12,
          axisLine: {
                show: false,

            },
               axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
              axisTick: {
                show: false
            },
               splitLine: {
                show: false
            },
    },
    yAxis: [
        {
            type: 'value',
            name: '(人)',
            min: 0,
            max: 400,
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#fff'
                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#262b35'
                }
            }
        },
        {
            type: "value",
            name: "同比",
            nameTextStyle: {
                color: "#fff"
            },
            position: "right",
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                  formatter: '{value}%',//右侧Y轴文字显示
                textStyle: {
                    color: "#fff"
                }
            }
        },
          {
            type: "value",
            gridIndex: 0,
            min: 50,
            max: 100,
            splitNumber: 8,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                }
            }
        }
        ],
    series: [
        {
            name: "同比增长量",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: false, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            // symbol: "circle", //标记的图形为实心圆
            // symbolSize: 10, //标记的大小
            symbolSize: 150,
            symbol:  'image://data:image/png;base64,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',
         itemStyle: {
                //折线拐点标志的样式
                color: "#d0bb20",
            },
            lineStyle: {
                color: "#d0bb20"
            },
            areaStyle:{
                color: "rgba(5,140,255, 0.2)"
            },
            data: [17, 22, 32, 24, 45]
        },
        {
            type: 'bar',
            name: '驾驶人保有量',
            barWidth: 8,
            emphasis: {
                itemStyle: {
                    color: '#7fb7e9'
                }
            },
            itemStyle: {
                normal: {
                    color: '#52adff',
                    barBorderRadius: [0, 0, 0, 0],
                }
            },
            data: [220, 182, 191, 234, 223]
        }, {
            name: '驾驶人保有量',
            tooltip: {
                show: false
            },
            type: 'bar',
            barWidth: 8,
            emphasis: {
                itemStyle: {
                    color: '#2e9bff'
                }
            },
            itemStyle: {
                normal: {
                    color: '#0980ed',
                    barBorderRadius: [0, 0, 0, 0]
                }
            },
            data: [220, 182, 191, 234, 223],
            barGap: 0,
            legendHoverLink: false,
        }, {
            name: '驾驶人保有量',
            tooltip: {
                show: false
            },
            type: 'pictorialBar',

            itemStyle: {
                normal: {
                    color: '#73bbff',
                    // borderWidth:1,
                    // borderColor:'#3c93fc'
                }
            },
            symbol: 'image://data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAAA/ElEQVQ4ja2VOw7CMBBEHyEV4iAUdIC4BxId3xbOk5qAoEIcBNFSUHAGKkQJaKUYmfgTJ8pISbHr3Zkd20ljdPoQiDaQ3B+8gTXwCimLjYgdXeAIdLJsHxgDN+tqDZERMbEAzlpzMsILMDNWlyAQS7bABmgZ2eK8lyBYoWNCL4G3wAElaOojkJF3RSN7YK1XBE4FFfDnQFTRkiL8BNv2oC5I71heKdADrjU2lws4lP2IcoHUWFoeB2CgBOsWybdlmT3PCo1V/USvt+1BqisIhNMBGwG+Agv2PkEuAn3kucMylZe747Q05JjK7cwrDJ4w9H+gGiZAE1gFHQTgC/m7OlXDmboLAAAAAElFTkSuQmCC',
            symbolRotate: 0,
            symbolSize: ['17', '7'],
            symbolOffset: ['0', '4'],
            symbolPosition: 'start',
            data: [220, 182, 191, 234, 223],
            z: 3
        },
        {
            name: '驾驶人保有量',
            tooltip: {
                show: false
            },
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: '#73bbff',
                    // borderWidth:1,
                    // borderColor:'#3c93fc'
                }
            },

            symbol: 'image://data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAABIElEQVQ4jaWVMWoCQRSGv0iKFIm3MLVFYshFbGxMEwTTeQxrBTuFVMkRPMBWhhQpAh5CEBEJhMgjb2T0ze7Mrh8sLPNm5h++nZm9GMz/SKQOjLVrD9ikDLs0LWGawBvQ0GoLaAOfwd4eNdNieQYyb3L0PdNaIUUBN8ArMAGuTPW/baJ9rk1VyQsQJQugYyoW6fOhYwyhgJCSGLnK/ICYkhhBZS6gjJIYHZ2r6QKqKIlx65RJwAr4iQyowq/MKwHvwF3KoSnBl845dd9gCTx6V8E5TIEH4JuTXbQD+noFrCsEyN30pM/WNYbOQRVlouReV39EKABP2chULEdKUgNQZS8FykRJ91RJmQBHSJlTMosNTv0fOGVDvQZkM+Su+gCwB/qVO5cbNt4bAAAAAElFTkSuQmCC',
            symbolRotate: 0,
            symbolSize: ['17', '7'],
            symbolOffset: ['0', '-4'],
            symbolPosition: 'end',
            data: [220, 182, 191, 234, 223],
            z: 3
        },
        
    ]
};