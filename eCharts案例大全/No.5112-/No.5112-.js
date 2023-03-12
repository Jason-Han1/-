var img = {
    a: "/asset/get/s/data-1605149982832-J2TYULtfd.png",
};
var value = 1; // >0
var getname = ['实验室', '多媒体', '普通教室', '计算机房', '运动场', '语音室', '体育馆', '形体训练室', '微格教室', '其他', '数码钢琴房', '音乐厅', '琴房', '翻译同传室', '泰语实训室', '画室'];
var getvalue = [190, 165, 49, 22, 22, 17, 8, 4, 2, 2, 2, 1, 1, 1, 1, 1];
var ydata2 = [];
for (var i = 0; i < getname.length; i++) {
    ydata2.push({
        value: getvalue[i],
        symbol: 'image://' + img.a
    });

}
var maxnum = Math.max.apply(null, getvalue);
var maxlen = Math.pow(10, String(Math.ceil(maxnum)).length - 2);
if (maxnum >= 5) {
    var max = Math.ceil(maxnum / (9.5 * maxlen)) * maxlen * 10;
} else {
    var max = 5;
}

if(getname.length>7){
    var isshow=true
}else{
     var isshow=false
}

option = {
    backgroundColor: "#000",
    grid: {
        left: "20",
        top: "10",
        bottom: "30",
        right: "10",
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            return '<span style="color: #fff;">' + params[0].name + '房间数：' + params[0].value + '间</span>';
        },
        axisPointer: {
            type: 'none'
        }
    },
    yAxis: {
        min: 0,
        max: max, // 计算最大值
        interval: max / 5, //  平均分为5份
        splitNumber: 5,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    xAxis: [{
            type: "category",

            data: getname,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                lineStyle: {
                    type: "dashed",
                    color: "#3e86dd"
                }
            },
            axisLabel: {
                margin: 8,
                textStyle: {
                    color: "#FFF",
                    fontSize: 12,
                }

            }
        }

    ],
    dataZoom: [{
        show: isshow,
        zoomLock: true, //禁止拉伸
        height: 8,
        xAxisIndex: [0],
        bottom: 10,
        startValue: 0,
        endValue: 6,
        handleIcon: "M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z",
        handleSize: "100%",
        handleStyle: {
            color: "#ADADAD",
            //shadowColor: "#B1B5B9",
            //shadowBlur: 5,
        },
        backgroundColor: "transparent",
        fillerColor: "#ADADAD",
        textStyle: {
            color: "transparent",
        },
        dataBackground: {
            lineStyle: {
                color: "transparent",
            },
            areaStyle: {
                color: "transparent",
            },
        },
        borderColor: "transparent",
    }],
    series: [

        {
            type: "pictorialBar",
            symbolSize: ['25', '6'],
            animation: true,
            symbolRepeat: "true",
            symbolPosition: "start",
            symbolMargin: 2,
            symbolOffset: [0, 0],
            data: ydata2,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#FFF',
                        fontSize: 12,

                    },
                    formatter: "{c}间",
                    position: "top",
                    offset: [0, 0]

                }
            },
        },
        {
            type: "bar"
        },

    ]
};