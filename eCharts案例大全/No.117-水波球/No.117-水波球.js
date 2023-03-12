option = {
    backgroundColor: '#485C6D', //背景色
    series: [
        {
            type: 'liquidFill', //水位图
            radius: '80%', //显示比例
            center: ['50%', '50%'], //中心点
            amplitude: 20, //水波振幅
            data: [0.5, 0.5, 0.5], // data个数代表波浪数
            color: ['#23cc72'], //波浪颜色
            backgroundStyle: {
                borderWidth: 6, //外边框
                borderColor: '#23cc72', //边框颜色
                color: '#485C6D', //边框内部填充部分颜色
            },
            label: {
                //标签设置
                normal: {
                    position: ['50%', '30%'],
                    formatter: '50%', //显示文本,
                    textStyle: {
                        fontSize: '52px', //文本字号,
                        color: '#fff',
                    },
                },
            },
            outline: {
                show: false,//最外层边框显示控制
            },
        },
    ],
};
