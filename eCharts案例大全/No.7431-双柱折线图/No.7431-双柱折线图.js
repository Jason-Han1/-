/** 
 * 
 * 作者: GhostCat
 * 博客: https://gcat.cc
 * 描述: 双柱折线图
 * 
 */
 
let dedicatedData = [45, 106, 126, 52, 74, 50, 56, 88, 125]
let generalData = [42, 126, 146, 22, 54, 80, 96, 78, 115]
let sumData =[]
for(let i in generalData){
    sumData.push(dedicatedData[i] + generalData[i])
}
let labelData = ['语文', '数学', '英语', '生物', '物理', '化学', '历史', '政治', '地理']
//对话框图片
var uploadedDataURL = "/asset/get/s/data-1547533200844-7eBMgp66l.png";

option = {
    backgroundColor: '#080c34',
    grid: {
        top: '15%',
        right: '10%',
        left: '10%',
        bottom: '12%'
    },

    tooltip: {},
    legend: {
        show: true,
         itemWidth: 16,
        top: "8%",
        left: '10%',
        data: ['通用课程', '专递课', '总计'],
        textStyle: {
            color: "RGB(193,223,255)"
        }
    },
    xAxis: [{
        type: 'category',
        color: '#59588D',
        data: labelData,
        axisLabel: {
            margin: 20,
            color: 'rgba(119,133,213,0.5)',
            textStyle: {
                fontSize: 18
            },
        },
        axisLine: {
            lineStyle: {
                color: '#08175b',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        min: 0,
        axisLabel: {
            color: 'rgba(119,133,213,0.5)',
            textStyle: {
                fontSize: 18
            },
        },
        axisLine: {
            lineStyle: {
                color: '#08175b',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#08175b'
            }
        }
    }],
    series: [{
            name: '通用课程',
            type: 'bar',
            data: dedicatedData,
            barWidth: '17px',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#d1d337' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#d1d337' // 100% 处的颜色
                    }], false),
                    barBorderRadius: [30, 30, 0, 0],
                }
            }
        },
        {
            name: '专递课',
            type: 'bar',
            data: generalData,
            barWidth: '17px',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#017aff' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#017aff' // 100% 处的颜色
                    }], false),
                    barBorderRadius: [30, 30, 0, 0],
                }
            }
        },
        {
            name: '总计',
            type: 'line',
            symbol: 'circle',
            symbolSize: 7,
            lineStyle: {
                color: 'rgb(33,148,246)',
                shadowBlur: 12,
                shadowColor: 'rgb(33,148,246,0.9)',
                shadowOffsetX: 1,
                shadowOffsetY: 1
            },
            itemStyle: {
                color: 'rgb(33,148,246)',
                borderWidth: 1,
                borderColor: '#FFF'
            },
            label: {
                show: false,
                distance: 1,
                emphasis: {
                    // show: true,
                    offset: [25, -2],
                    //borderWidth:1,
                    // borderColor:'rgb(33,148,246)',
                    //formatter:'{bg|{b}\n数据量:{c}}',
                    // backgroundColor: {
                    //     image: uploadedDataURL
                    // },
                    color: '#FFF',
                    padding: [8, 20, 8, 6],
                    //width:60,
                    height: 36,
                    formatter: function(params) {
                        var name = params.name;
                        var value = params.data;
                        var str = name + '\n数据量：' + value;
                        return str;
                    },
                    rich: {
                        bg: {
                            backgroundColor: {
                                image: uploadedDataURL
                            },
                            width: 78,
                            //height:42,
                            color: '#FFF',
                            padding: [20, 0, 20, 10]
                        },
                        br: {
                            width: '100%',
                            height: '100%'
                        }

                    }
                }
            },
            data: sumData
        }
    ]
};