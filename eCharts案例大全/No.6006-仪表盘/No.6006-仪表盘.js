option = {
    backgroundColor: '#001533',
    tooltip: {
        format: function(params) {
            console.log(params);
        }
    },
    series: [{
            type: 'gauge',
            // startAngle: 50,
            name: '外圈灰色线',
            radius: '90%',
            // startAngle: 150,
            // endAngle: 30,
            splitNumber: 0,
            axisLine: { // 坐标轴线
                lineStyle: {
                    color: [
                        [1, '#818184']
                    ], // 属性lineStyle控制线条样式
                    width: 2
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLine: { // 分隔线
                show: false
            },
            detail: {
                show: false
            },
        },
        {
            radius: '86%',
            splitNumber: 180,
            min: 0,
            max: 100,
            axisLine: { // 坐标轴线
                // show:false,
                lineStyle: {
                    color: [
                        [1, '#818184']
                    ], // 属性lineStyle控制线条样式
                    width: 2
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            detail: {
                show: false
            },
        },
        {
            radius: '80%',
            splitNumber: '180',
            axisLine: {
                show: false,
            },
            pointer: {
                show: false,
                length: '80%',
                radius: '20%',
                width: 5, //指针粗细
            },
            itemStyle: {
                // show: false,
                normal: {
                    color: 'rgb(0,191,255)'
                },

            },
            splitLine: {
                length: 15,
                lineStyle: {
                    width: 2,
                    color: '#01b4e0',
                    distance: 5,
                } //刻度节点线
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },

            detail: {
                show: false
            },
        },
        {
            radius: '80%',
            splitNumber: 4,
            min: 0,
            max: 100,
            pointer: {
                show: true,
                length: '80%',
                radius: '20%',
                width: 5, //指针粗细
            },
            itemStyle: {
                normal: {
                    color: 'rgb(0,191,255)'
                },
            },
            axisLine: {
                show: true,
                fontSize: 20,
                lineStyle: {
                    width: 0,
                    color: [
                        [1, '#01b4e0']
                    ],
                }
            },
            splitLine: {
                length: 30,
                lineStyle: {
                    width: 2,
                    color: '#01b4e0',
                    distance: 5,
                } //刻度节点线
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                fontSize: 20,
                color: '#fff'
                // fontWeight: 700
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
                    fontSize: 30,
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
    // option.series[i].axisTick = {show: false};
    // option.series[i].axisLabel = {show: false};
    // optionThree.series[i].pointer = {show: false};
    // optionThree.series[i].detail = {show: false};

}