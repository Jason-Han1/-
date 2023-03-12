var getname = ['1号楼','2号楼','3号楼','4号楼','5号楼','6号楼','7号楼','8号楼','9号楼','10号楼'];
var getvalue =[112,120,125,158,122,156,169,178,198,221];
var getbl = [80,65,95,98,54,82,74,91,65,87];
//计算最大值  
function calMax(arr) {
    let max = 0;
    arr.forEach((el) => {
        el.forEach((el1) => {
            if (!(el1 === undefined || el1 === '')) {
                if (max < el1) {
                    max = el1;
                }
            }
        })
    })
    let maxint = Math.ceil(max / 9.5);
    //不让最高的值超过最上面的刻度    
    let maxval = maxint * 10;
    //让显示的刻度是整数    
    return maxval;
}


var max = Math.ceil(calMax([getvalue]) / 100) * 100;
var max2 = Math.ceil(calMax([getbl]) / 100) * 100;

var option = {
    grid: {
        top: 80,
        bottom: 40,
        left: 50,
        right: 50
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: '{b0}<br/>{a0}: {c0}人<br/>{a1}: {c1}%',
    },
    legend: {
        data: [{
            name: '住宿人数',
        }, {
            name: '住宿率',
            icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACA0lEQVQ4T5WTT2uTQRDGnzFvoO8hiFgwhRbMIVfpQQWb9J9Uj/YTiKJS8Z7Wz1BTP4B3vXhSD6UkmFhovFiNInrx4KVI4kWrljTN7IzMvr7507QH97Kwu/PbmXmeIRy3qtUAIz/HgX1gP72D+Xk+6ikNHb5ZzxHJMglfBVxI4gB1LagrEXORZ27W+mN6AFXCu9IqQQpQR6RsgfAA8L9dFMJrnLt1H0RqoB7gbbkIkgKpAHFwF2CgCAhYRrrG+TvLPcDHl1Ng3Yp+NoADhJFOBoAIvh/seSh5gIBUVE9InqeWXkcZfKg8g7hFqF06jAVJPM5MYi416q83fzVx/UsNjYPfUVkqUOgLzi8tErYfJZHI7gISQhwIgkr2AuZSpwf6a5CFTxuI36hKi0OcJNSrZwH5aqlZBulEgG/nLvc1J+JYxya2n6LZ3gP5Pgg6LJkBAKniTCLxn4BuCS6Me1DNXsTs4RJ2m1j4vOF/9n2AtDojVoKteuU5INfi+saCAE8yk5hNjfpSXvkmbqHR/uMBVkKviQYYkjGSzNSw3xrtWMZIJUBUpTPNM/dqPSPVy0WoGclbN3rY3ftdKRb/kKdvFwadaFZ+X1ol6bdy5EoPE7a61QfnbqwMWzlWvb6eI3ErJO4KxIWRZH6YygR+wJeOG6bDY2nquFPj/jjxYwfn73aOGue/WuJU4CbFxoAAAAAASUVORK5CYII='
        }],
        type: "scroll",
        right: '15',
        top: '10',
        itemGap: 25,
        itemWidth: 16,
        itemHeight: 16,
        textStyle: {
            fontSize: '13',
            color: '#656565',
        },

    },
    xAxis: [{
        data: getname,
        axisLabel: {
            margin: 10,
            color: '#656565',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#333333',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        type: 'value',
        min: 0,
        max: max, // 计算最大值
        interval: max / 5, //  平均分为5份
        splitNumber: 5,
        name: '数量（人）',
        nameTextStyle: {
            color: '#666666',
            fontSize: 13,
            padding: [0, 0, 0, 60]
        },
        axisLabel: {
            formatter: function(value) {
                num = value
                if (num && num != 'undefined' && num != 'null') {
                    let numS = num;
                    numS = numS.toString();
                    numS = numS.replace(/,/gi, '');
                    return numS;
                } else {
                    return num;
                }
            },
            color: '#656565',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#0000',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#D1D1D1',
                  type:'dashed'
            }
        }
    }, {
        type: 'value',
        min: 0,
        max: max2, // 计算最大值
        interval: max2 / 5, //  平均分为5份
        splitNumber: 5,
        name: '单位（%）',
        nameTextStyle: {
            color: '#666666',
            fontSize: 13,
            padding: [0, 0, 0, -60]
        },
        //右轴
        axisLabel: {
            color: '#656565',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#0000',
            }
        },
        axisTick: {
            show: false
        },
        //横网格线
        splitLine: {
            lineStyle: {
                color: '#D1D1D1',
                type:'dashed'
                
            }
        }
    }],
    series: [{
        name: "住宿人数",
        type: 'bar',
        data: getvalue,
        barWidth: '20px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#1875F0'
                }, {
                    offset: 1,
                    color: '#1875F0'
                }], false),
            
            }
        },
    },{
        name: "住宿率",
        type: 'line',
        data: getbl,
        yAxisIndex:1,
        symbol: 'circle',
        symbolSize: 10,
        lineStyle: {
            normal: {
                width: 4,
                color: {
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#FFAE00' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#FFAE00' // 100% 处的颜色
                    }],
                },
                shadowColor: '#FFAE00',
        
              
            }
        },
        itemStyle: {
            normal: {
                color: '#FFAE00',
               
            },
        },
    }]
};
return option;