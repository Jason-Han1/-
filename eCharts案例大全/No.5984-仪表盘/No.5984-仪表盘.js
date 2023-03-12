option = {
    backgroundColor: '#001533',
    series: [
        {
            type: 'gauge',
            // startAngle: 50,
            name: '外圈灰色线',
            radius: '98%',
            // startAngle: 150,
            // endAngle: 30,
            splitNumber: 0,
            axisLine: { // 坐标轴线
                lineStyle: {
                    color: [[1, '#818184']], // 属性lineStyle控制线条样式
                    width: 3
                }
            },
            splitLine: { // 分隔线
                show: false
            },
            detail: {show: false},
        },
        {
            radius: '88%',
            splitNumber: '52',
            axisLine: {
                show: false,
                lineStyle: {
                    color: [[1, '#818184']],
                    width: 20
                }
            },
            splitLine: {
                length: 15,
                lineStyle: {
                    width: 2,
                    color: '#818184',
                    distance: 10,
                } //刻度节点线
            },
            detail: {show: false},
        },
        {
            radius: '75%',
            splitNumber: '15',
            axisLine: {
                show: false,
            },
            splitLine: {
                length: 25,
                lineStyle: {
                    color: '#2f9ed3',
                    width: 25
                }
            },
            detail: {show: false},
        },
        {
            radius: '60%',
            splitNumber: 0,
            axisLine: { // 坐标轴线
                // show:false,
                lineStyle: {
                    color: [[1, '#818184']], // 属性lineStyle控制线条样式
                    width: 3
                }
            },
            splitLine: {
                show: false
            },
            detail: {show: false},
        },
        {
            radius: '50%',
            splitNumber: '10',
            axisLine: {
                lineStyle: {
                    color: [
                        [0, '#37c0fe'],
                        [1, '#175068']
                    ],
                    width: 25
                }
            },
            pointer: {
                    show: true,
                    length: '40%',
                    radius: '20%',
                    width: 8, //指针粗细
            },
            itemStyle: {
                // show: false,
                normal: {
                    color: 'rgb(0,191,255)'
                },

            },
            splitLine: {
                length: 30,
                lineStyle: {
                    color: '#001533',
                    // color: 'rgba(47,158,211,0.4)',
                    width: 25
                }
            },
            detail: {
                show: true,
                formatter: function(value) {
                    if (value !== 0) {
                        return value
                        // var num = Math.round(value ) ;
                        // return parseInt(num).toFixed(0)+"%";
                    } else {
                        return 0;
                    }
                },
                textStyle: {
                    fontSize: 25,
                    fontWeight: '700',
                    color: "#67d9fe"
                }
            },
            data: [{
                name: "",
                value: 50,
            }],
        }
    ]
};


for (var i = 0; i < option.series.length; i++) {
    option.series[i].type = 'gauge';
    option.series[i].startAngle = 270;
    option.series[i].endAngle = -89.9999;
    option.series[i].center = ['50%', '50%'];
    option.series[i].axisTick = {show: false};
    option.series[i].axisLabel = {show: false};
    // optionThree.series[i].pointer = {show: false};
    // optionThree.series[i].detail = {show: false};

}

var num1 = 0;
    var myInterval = setInterval(function () {
        num1 += Math.round(Math.random()) === 0 ? 0.011 : 0.005;
        if (num1 >= 1) num1 = 0;
        // console.log(num1)
        option.series[4].axisLine.lineStyle.color = [[num1, '#37c0fe'], [1, '#175068']];
      
    }, 50);