var symbolIcon = "/asset/get/s/data-1565836233540-7UHP9D1bb.png";

var ringBg = "/asset/get/s/data-1565835657730-Gg-Tn_mWy.png";


option = {
    backgroundColor: "#03141c",
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x: 'center',
        y: 'bottom',
        data: ['rose3', 'rose5', 'rose6', 'rose7', 'rose8']
    },
    calculable: true,
    xAxis: {
        max: 10,
        show: false,
        splitLine: {
            show: false
        }
    },
    yAxis: {
        max: 10,
        show: false,
        splitLine: {
            show: false
        }
    },
    series: [
        {
            type: 'scatter', 
            zlevel: 60,
            itemStyle: {
                opacity: 1 // 控制 满意icon的 透明度
            },
            data: [
                { // 外圈 点状圈
                    value: 5,
                    symbol: 'image://'+ringBg, 
                    symbolSize: 280, 
                    symbolOffset: [0, 0]
                },
                { // 满意 icon
                    value: 5,
                    symbol: 'image://'+symbolIcon, 
                    symbolSize: 40, 
                    symbolOffset: [-110, -50],
                    opacity: 1
                }
            ]
            
        },
        {
            type: 'pie',
            radius: [80, 120],
            center: ['50%', '50%'],
            data: [
                {
                    value: 10,
                    itemStyle: {
                        color: "transparent"
                    }
                },
                {
                    value: 90,
                    name: 'rose2',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: '#0ce4da'
                        }, {
                            offset: 1,
                            color: '#f6fb08'
                        }])
                    },
                    labelLine: {
                      show: false,
                      length: 200,
                      length2: 100
                    },
                    label: {
                        color: "rgba(255,255,255,.45)",
                        fontSize: 14,
                        show: false,
                        position: 'outside',
                        formatter: '客户满意度\n{a|52}个',
                        rich: {
                            a: {
                                color: "#fff",
                                fontSize: 20,
                                lineHeight: 30
                            },
                        }
                    }
                }
            ]
        },
        { // 指示线
            // 通过value 的值 调节lableLine的位置
            type: 'pie',
            radius: [80, 100],
            data: [
                {
                    value: 100,
                    itemStyle: {
                        color: 'transparent'
                    }
                    
                },
                {
                    value: 50,
                    itemStyle: {
                        color: "transparent"
                    },
                    labelLine: {
                      show: true,
                      length: 2,
                      length2: 240,
                      lineStyle: {
                          color: 'skyblue'
                      }
                    },
                    label: {
                        color: "rgba(255,255,255,.45)",
                        fontSize: 14,
                        position: 'outside',
                        formatter: '{p10| 客户满意度}\n{a|90%}',
                        rich: {
                            a: {
                                color: "orange",
                                fontSize: 50,
                                lineHeight: 60,
                                padding: [0, 10, 0, 0]
                            },
                            p10: {
                                padding: [10, 10, 38, 0],
                                color: '#fff',
                                fontSize: 22
                            }
                        }
                    }
                }
            ]
        },
        {
            type: 'pie',
            radius: [80, 100],
            center: ['50%', '50%'],
            data: [{
                    value: 10,
                    itemStyle: {
                        color: '#06d3cd'
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 90,
                    itemStyle: {
                        color: "transparent"
                    }
                }
            ]
        }
        
    ]
};