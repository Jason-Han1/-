var max = 100; //满刻度大小
var data = 56,
dataPer = data / 100;
option = {
    backgroundColor: 'rgba(0, 10, 124, )',
    title: [
        {
            text: '能耗环比',
            x: '50%',
            y: 20,
            textAlign: 'center',
            textStyle: {
                fontSize: '24',
                fontWeight: '400',
                color: '#fff',
                textAlign: 'center',
                fontFamily: 'PingFangSC-Regular, PingFang SC',
            },
        },
        {
            top: '47%',
            left: 'center',
            text: data + ' %',
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontWeight: '400',
                fontFamily: 'PingFangSC-Regular, PingFang SC',
                fontSize: 46,
            },
        },
    ],
    series: [
        {
            type: 'liquidFill',
            itemStyle: {
                opacity: 0.8, //波浪的透明度
                shadowBlur: 10, //波浪的阴影范围
                shadowColor: '#FFB931', //阴影颜色
            },
            radius: '80%',
            //水波
            color: [' rgba(28,58,154,.6)', '  rgba(28,58,154,.4)'],
            data: [dataPer, dataPer],
            // background: '#000',
            center: ['50%', '52%'],
            backgroundStyle: {
                color: 'transparent',
            },
            label: {
                normal: {
                    formatter: '',
                    textStyle: {
                        fontSize: 12,
                    },
                },
            },
            outline: {
                itemStyle: {
                    borderColor: 'transparent',
                    borderWidth: 5,
                },
                borderDistance: 0,
            },
        },
        //外环线
        {
            color: ['#1C3A9A', 'rgba(28,58,154,.2)'],
            type: 'pie',
            center: ['50%', '52%'],
            radius: ['80%', '84%'],
            hoverAnimation: false,
            data: [
                {
                    name: '',
                    value: data,
                    label: {
                        show: false,
                        position: 'center',
                        color: '#fff',
                        fontSize: 38,
                        fontWeight: 'bold',
                        formatter: function (o) {
                            return data;
                        },
                    },
                    labelLine: {
                        show: false,
                    },
                },
                {
                    //画剩余的刻度圆环
                    name: '',
                    value: max - data,
                    label: {
                        show: false,
                    },
                    labelLine: {
                        normal: {
                            show: false,
                        },
                        emphasis: {
                            show: false,
                        },
                    },
                },
            ],
        },
    ],
};
