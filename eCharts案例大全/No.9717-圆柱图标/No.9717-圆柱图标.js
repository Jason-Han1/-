option = {
    xAxis: {
        //show: false,
        data: ['南山分行柜面演练', '南山分行ATM演练执行', '福田分行', '福田分行', '主机环境检查', '柜面演练', 'ATM演练执行'],
        //offset: 12,
    },
    yAxis: {
        //show: false
    },
    series: [ {
            name: 'a',
            tooltip: {
                show: false
            },
            type: 'bar',
            barWidth: 16, //柱子宽度
			barGap: 0.5, //柱子之间间距
            emphasis: {
                itemStyle: {//填充部分鼠标移上去颜色
                    color: 'rgba(255, 0, 0, 0.4)'
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(255, 0, 0, 0.4)',
                    borderWidth:'1',
                    borderColor:'rgba(255, 0, 0 , 0.3)',
                }
            },
            data: [220, 182, 191, 234, 290, 330, 310],
            barGap: 0,
            legendHoverLink: false,
        }, {
            name: 'b',
            tooltip: {
                show: false
            },
            type: 'pictorialBar',
            itemStyle: {
                normal: {//未填充部分鼠标移上去颜色
                    color: 'rgba(255, 0, 0, 0.4)',
                    borderWidth:1,
                    borderColor:'rgba(255, 0, 0, 1)'
                }
            },
            // symbol: 'image://data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAAA/ElEQVQ4ja2VOw7CMBBEHyEV4iAUdIC4BxId3xbOk5qAoEIcBNFSUHAGKkQJaKUYmfgTJ8pISbHr3Zkd20ljdPoQiDaQ3B+8gTXwCimLjYgdXeAIdLJsHxgDN+tqDZERMbEAzlpzMsILMDNWlyAQS7bABmgZ2eK8lyBYoWNCL4G3wAElaOojkJF3RSN7YK1XBE4FFfDnQFTRkiL8BNv2oC5I71heKdADrjU2lws4lP2IcoHUWFoeB2CgBOsWybdlmT3PCo1V/USvt+1BqisIhNMBGwG+Agv2PkEuAn3kucMylZe747Q05JjK7cwrDJ4w9H+gGiZAE1gFHQTgC/m7OlXDmboLAAAAAElFTkSuQmCC',
            symbolRotate:0,
            symbolSize: [16, 6],
            symbolOffset: [-12, 2],
            symbolPosition: 'start',
            data: [220, 182, 191, 234, 290, 330, 310],
            z: 3
        },
        {
            name: 'b',
            tooltip: {
                show: false
            },
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: 'rgba(255, 0, 0, 0.4)',
                    borderWidth:1,
                    borderColor:'rgba(255, 0, 0, 1)'
                }
            },

            // symbol: 'image://data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAABIElEQVQ4jaWVMWoCQRSGv0iKFIm3MLVFYshFbGxMEwTTeQxrBTuFVMkRPMBWhhQpAh5CEBEJhMgjb2T0ze7Mrh8sLPNm5h++nZm9GMz/SKQOjLVrD9ikDLs0LWGawBvQ0GoLaAOfwd4eNdNieQYyb3L0PdNaIUUBN8ArMAGuTPW/baJ9rk1VyQsQJQugYyoW6fOhYwyhgJCSGLnK/ICYkhhBZS6gjJIYHZ2r6QKqKIlx65RJwAr4iQyowq/MKwHvwF3KoSnBl845dd9gCTx6V8E5TIEH4JuTXbQD+noFrCsEyN30pM/WNYbOQRVlouReV39EKABP2chULEdKUgNQZS8FykRJ91RJmQBHSJlTMosNTv0fOGVDvQZkM+Su+gCwB/qVO5cbNt4bAAAAAElFTkSuQmCC',
            symbolRotate: 0,
            symbolSize: [16, 6],
            symbolOffset: ['-12', '-2'],
            symbolPosition: 'end',
            data: [220, 182, 191, 234, 290, 330, 310],
            z: 3
        },{
            type: 'bar',
            // stack: 1,
            barWidth: 16, //柱子宽度
			barGap: 0.5, //柱子之间间距
            emphasis: {
                itemStyle: {//左侧未填充部分鼠标移上去颜色
                    color: 'rgba(143, 219, 255, 0.45)', 
                    barBorderColor:'rgba(143, 219, 255 ,1)'
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(143, 219, 255, 0.45)',
                    barBorderColor:'rgba(143, 219, 255 ,1)',
                }
            },
            data: [220, 182, 191, 234, 290, 330, 310],
        }, {
            name: 'b1',
            tooltip: {
                show: false
            },
            type: 'pictorialBar',

            itemStyle: {
                normal: {
                    color: 'rgba(143, 219, 255, 0.45)',
                    borderWidth:1,
                    borderColor:'rgba(143, 219, 255, 0.45)'
                }
            },
            // symbol: 'image://data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAAA/ElEQVQ4ja2VOw7CMBBEHyEV4iAUdIC4BxId3xbOk5qAoEIcBNFSUHAGKkQJaKUYmfgTJ8pISbHr3Zkd20ljdPoQiDaQ3B+8gTXwCimLjYgdXeAIdLJsHxgDN+tqDZERMbEAzlpzMsILMDNWlyAQS7bABmgZ2eK8lyBYoWNCL4G3wAElaOojkJF3RSN7YK1XBE4FFfDnQFTRkiL8BNv2oC5I71heKdADrjU2lws4lP2IcoHUWFoeB2CgBOsWybdlmT3PCo1V/USvt+1BqisIhNMBGwG+Agv2PkEuAn3kucMylZe747Q05JjK7cwrDJ4w9H+gGiZAE1gFHQTgC/m7OlXDmboLAAAAAElFTkSuQmCC',
            symbolRotate: 0,
            symbolSize: [16, 6],
            symbolOffset: [12, 2],
            symbolPosition: 'start',
            data: [220, 182, 191, 234, 290, 330, 310],
            z: 7
        },
        {
            name: 'b1',
            tooltip: {
                show: false
            },
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: 'rgba(143, 219, 255, 0.45)',
                    borderWidth:1,
                    borderColor:'rgba(143, 219, 255, 1)'
                }
            },

            // symbol: 'image://data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAABIElEQVQ4jaWVMWoCQRSGv0iKFIm3MLVFYshFbGxMEwTTeQxrBTuFVMkRPMBWhhQpAh5CEBEJhMgjb2T0ze7Mrh8sLPNm5h++nZm9GMz/SKQOjLVrD9ikDLs0LWGawBvQ0GoLaAOfwd4eNdNieQYyb3L0PdNaIUUBN8ArMAGuTPW/baJ9rk1VyQsQJQugYyoW6fOhYwyhgJCSGLnK/ICYkhhBZS6gjJIYHZ2r6QKqKIlx65RJwAr4iQyowq/MKwHvwF3KoSnBl845dd9gCTx6V8E5TIEH4JuTXbQD+noFrCsEyN30pM/WNYbOQRVlouReV39EKABP2chULEdKUgNQZS8FykRJ91RJmQBHSJlTMosNTv0fOGVDvQZkM+Su+gCwB/qVO5cbNt4bAAAAAElFTkSuQmCC',
            symbolRotate: 0,
            symbolSize: [16, 6],
            symbolOffset: ['12', '-2'],
            symbolPosition: 'end',
            data: [220, 182, 191, 234, 290, 330, 310],
            z: 7
        }
    ]
};