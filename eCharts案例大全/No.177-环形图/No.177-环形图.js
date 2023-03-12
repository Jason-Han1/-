function generateData(totalNum, bigvalue, smallvalue, color) {
    let dataArr = [];
    for (var i = 0; i < totalNum; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: bigvalue,
                itemStyle: {
                    normal: {
                        color: color,
                        borderWidth: 0,
                    }
                }
            });
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: smallvalue,
                itemStyle: {
                    normal: {
                        color: "rgb(0,0,0,0)",
                        borderWidth: 0,
                    }
                }
            });
        }

    }
    return dataArr;
}
let threeData = generateData(10, 40, 5, 'rgb(12,65,144)');

let startAngle = 50; // 初始旋转角度
option = {
    backgroundColor: '#031845',
   
    tooltip: {
        trigger: 'item',
        formatter: "服务器总量:{c}%  "
    },

   title: [
    {
        text: '32%',
        x: 'center',
        y: '45%',
        textStyle: {
            fontSize: 18,
            fontWeight: 'normal',
            color: 'rgb(106,163,185)',
        },
    },
    {
        text: '服务器总量',
        x: 'center',
        y: '75%',
        textStyle: {
            fontSize: 18,
            fontWeight: 'normal',
            color: '#ffffff',
        },
    }
],
    polar: {
        radius: ['40%', '45%'],
        center: ['50%', '50%'],
    },
    angleAxis: {
        max: 100,
        show: false,
    },
    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    },
    series: [
        {
            // 渐变圈
            name: '服务器总量',
            type: 'bar',
            roundCap: true,
            barWidth: 90,
            showBackground: true,
            backgroundStyle: {
                color: 'rgb(36,101,243)',
            },
            data: [32],
            coordinateSystem: 'polar',

            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: 'rgb(56,220,246)',
                        },
                        {
                            offset: 1,
                            color: 'rgb(43,155,252)',
                        },
                    ]),
                },
            },
    }, 
    {
        type: 'pie',
        name: '旋转圆',
        zlevel: 20,
        silent: true,
        radius: ['57%', '56%'],
        hoverAnimation: false,
        startAngle: startAngle,
        data: threeData,
        label: {
            normal: {
                show: false
            },
        },
        labelLine: {
            normal: {
                show: false
            }
        },
    },
    ]
};