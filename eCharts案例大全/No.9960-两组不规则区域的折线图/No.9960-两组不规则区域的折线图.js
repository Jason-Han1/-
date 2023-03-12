var data1 = [220, 182, 191, 234, 290, 330, 310]; //高值
var data2 = [220, 170, 160, 200, 244, 240, 222]; //低值
var xBew = []; //差值
for (var i = 0; i < data1.length; i++) {
    xBew.push(data1[i] - data2[i]);
}

var item1 = [220, 212, 206, 205, 190, 250, 300]; //高值2
var item2 = [220, 205, 190, 180, 144, 165, 240]; //低值2
var xBew2 = []; //差值2
for (var i = 0; i < item1.length; i++) {
    xBew2.push(item1[i] - item2[i]);
}

var color1 = "#58bbb8";
var color2 = "#53d77e";

option = {
     backgroundColor: "#fff",
    title: {
        text: '两组不规则区域的折线图'
    },
    tooltip: {
        formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}<br/>{a2}: {c2}<br/>{a3}: {c3}<br/>{a4}: {c4}<br/>{a5}: {c5}'
    },
    xAxis: {
        boundaryGap: false,
        axisTick: false,
        splitLine: "none",
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {
        splitLine: "none",
        axisTick: false,
    },
    series: [


        {
            symbol: "none",
            name: '不采取措施低值',
            type: 'line',
            stack: "未采取措施",
            smooth: false,
            data: item2,
            lineStyle: {
                normal: {
                    color: color2,
                    width: 0
                }
            }
        },
        {
            symbol: "none",
            name: '不采取措施-差值',
            type: 'line',
            markArea: {},
            smooth: false,
            stack: "未采取措施",
            areaStyle: {
                normal: {
                    color: color2,
                }
            },
            lineStyle: {
                normal: {
                    color: color2,
                    width: 0
                }
            },
            data: xBew2,

        },
        {
            symbol: "none",
            name: '不采取措施高值',
            type: 'line',
            smooth: false,
            data: item1,
            lineStyle: {
                normal: {
                    color: color2,
                    width: 0
                }
            }
        },


        {
            symbol: "none",
            name: '采取措施低值',
            type: 'line',
            stack: '采取措施',
            smooth: false,
            data: data2,
            lineStyle: {
                normal: {
                    color: color1,
                    width: 0
                }
            }
        },
        {
            symbol: "none",
            name: '采取措施-差值',
            type: 'line',
            smooth: false,
            stack: '采取措施',
            areaStyle: {
                normal: {
                    color: color1,
                }
            },
            lineStyle: {
                normal: {
                    color: color1,
                    width: 0
                }
            },
            data: xBew,

        },
        {
            symbol: "none",
            name: '采取措施高值',
            type: 'line',
            smooth: false,
            data: data1,
            lineStyle: {
                normal: {
                    color: color1,
                    width: 0
                }
            }
        },
    ]
};