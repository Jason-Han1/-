// let dataArr = [{name: '6小时内',valuej: [[20,0.2], [30,0.3], [50,0.5], [25,0.25]]},
//             {name: '6～24小时内',valuej: [[30,0.3], [5,0.05], [10,0.1], [5,0.05]]},
//             {name: '24～72小时内',valuej: [[10,0.1], [5,0.05], [10,0.1], [20,0.2]]},
//             {name: '72小时以上',valuej: [[10,0.1], [30,0.3], [20,0.2], [10,0.1]]},
//             {name: '未上传',valuej: [[30,0.3], [30,0.3], [10,0.1], [40,0.4]]},
//         ]
        
let dataArr = [{"name":"6小时内","valuej":[["5","0.25"],["null","null"],["16","0.80"],["21","1.05"]]},
{"name":"6~24小时内","valuej":[["null","null"],["null","null"],["null","null"],["null","null"]]},
{"name":"24~72小时内","valuej":[["null","null"],["null","null"],["null","null"],["null","null"]]},
{"name":"72小时以上","valuej":[["10","0.11"],["5","0.25"],["4","0.20"],["9","0.45"]]},
{"name":"未上传","valuej":[["15","0.75"],["15","0.75"],["null","null"],["30","1.50"]]}]

option = {
    backgroundColor: '#fff',
    tooltip: {
          //提示框组件
          trigger: "item",
          formatter: ({value,seriesName,seriesIndex,dataIndex}) => (`${seriesName}：${dataArr[seriesIndex].valuej[dataIndex][0]}单`), 
          axisPointer: {
            type: "shadow",
            label: {
              backgroundColor: "#6a7985"
            }
          },
          textStyle: {
            color: "#fff",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: 12
          }
        },
    legend: {
        top: '5%',
        textStyle: {
            color: '#666'
        },
    },
    grid: {
        left: '3%',
        top: '15%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                color: '#eee'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            // margin: 10,
            color: '#333',
            show: false
        }
    },
    yAxis: {
        type: 'category',
        data: ['待发货', '运输中', '已卸货', '所有状态'],
        axisLine: {
            lineStyle: {
                color: '#999'
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            // margin: 10,
            color: '#666',
        }
    },
    color: ["#ffdddd","#ffa1a1","#ff6868","#ff3344","#dddddd"],
    series: (() => {
        return dataArr.map(item => ({
                    name: item.name,
                    type: 'bar',
                    stack: 'Tik Tok',
                    barWidth: 25,
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                            offset: [0, 0],
                            formatter: ({value}) => (`${value*100}%`),
                            textStyle: {
                                align: 'center',
                                baseline: 'middle',
                                fontSize: 14,
                                fontWeight: '400',
                                color: '#fff',
                                textShadowColor:'#000',
                                textShadowBlur:'0',
                                textShadowOffsetX:1,
                                textShadowOffsetY:1,
                            }
                        },
                    },
                    data: item.valuej.map(sss => sss[1])
                })
           
        )
    })()
        
};