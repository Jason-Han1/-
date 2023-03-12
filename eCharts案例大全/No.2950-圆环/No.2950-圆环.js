var uploadedDataURL = '/asset/get/s/data-1624870812990-K0pxWxndG.png';
let datas = {
    value: '0',
};

let max = 10;
let value = datas.value;

//图表配置
let centerArr = ['50%', '70%'];
let colorList = ['#FF951A', '#FB1A1A'];
let colorSet = new echarts.graphic.LinearGradient(0, 1, 0, 0, [
    {
        offset: 0,
        color: colorList[0],
    },
    {
        offset: 1,
        color: colorList[1],
    },
]);

option = {
    backgroundColor: '#fff',
    series: [
        {
            type: 'pie',
            color: ['transparent', 'transparent', 'transparent'],
            animationEasingUpdate: 'cubicOut',
            startAngle: 180,
            center: centerArr,
            radius: ['96.5%', '98%'],
            hoverAnimation: false,
            labelLine: {
                show: false,
            },
            data: [
                {
                    name: '',
                    value: value,
                    itemStyle: {
                        normal: {
                            show: true,
                            color: colorSet,
                            shadowBlur: 8,
                            shadowColor: colorList[0],
                            shadowOffsetX: 0,
                            shadowOffsetY: 4,
                            width: 6,
                        },
                    },
                },
                {
                    //画中间的图标
                    name: '',
                    value: 0,
                    label: {
                        rotate: 110,
                        position: 'inside',
                        width: 52,
                        height: 65,
                        verticalAlign: 'top',
                        backgroundColor: {
                        image: uploadedDataURL,
                        },
                        // borderColor: colorList[0],
                        shadowColor: 'rgba(255,130,26,0.60)',
                        shadowBlur: 10,
                        shadowOffsetY: 4
                    },
                },
                {
                    //画剩余的刻度圆环
                    name: '',
                    value: 10 - value,
                    itemStyle: {
                        color: '#fafafa',
                    },
                },
                {
                    //画剩余的刻度圆环
                    name: '',
                    value: 10,
                },
            ],
        },
    ],
};
