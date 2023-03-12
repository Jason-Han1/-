let value = 66 / 100;
option = {
    backgroundColor: '#001348', //背景色
    title: {
        text: '完成比例',
        left: 'center',
        top: 140,
        textStyle: {
            color: '#fff',
            fontWeight: 'normal',
            fontSize: 26,
        },
    },
    series: [
        {
            type: 'liquidFill',
            radius: '75%',
            center: ['51%', '50%'],
            data: [0.5, 0.45], // data个数代表波浪数
            color: ['#8190E3', '#71B1FC'],
            outline: {
                // 轮廓设置
                show: true,
                borderDistance: 10, // 边框与球中间间距
                itemStyle: {
                    borderWidth: 2,
                    borderColor: '#ECECF8',
                },
            },
            itemStyle: {
                normal: {
                    shadowColor: 'rgba(22, 22, 22, 0.5)',
                    shadowBlur: 10,
                },
            },
            backgroundStyle: {
                borderWidth: 5,
                borderColor: '#EEF2FD',
                shadowColor: '#008DCE',
                color: '#001348',
            },
            label: {
                position: ['50%', '35%'],
                formatter: (value * 100).toFixed(1) + '%',
                textStyle: {
                    color: '#fff',
                    fontSize: 50,
                },
            },
        },
    ],
};
