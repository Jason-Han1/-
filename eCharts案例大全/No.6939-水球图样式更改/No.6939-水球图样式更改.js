const data = [0.48, 0.48]
option = {
    // x轴
    xAxis: {
        show: false, // 不显示
    },
    // y轴
    yAxis: {
        show: false, // 不显示
    },
    grid: {
        top: '2.5%',
        right: '40',
        bottom: '2.5%',
        left: 0,
    },
    title: {
        text: '48.00{a|m}',
        textStyle: {
            fontSize: 34,
            // fontFamily: 'Microsoft Yahei',
            fontWeight: 'bold',
            color: '#fff',
            rich: {
                a: {
                    fontSize: 18
                }
            }
        },
        x: 'center',
        y: 'center'
    },
    graphic: [{
        type: 'group',
        left: 'center',
        top: '60%'
    }],
    series: [{
        type: 'liquidFill',
        radius: '50%',
        center: [
            '50%',
            '50%'
        ],
        data, // 水球波纹值

        outline: { // 轮廓设置
            show: true,
            borderDistance: 8, // 边框与球中间间距
            itemStyle: {
                borderWidth: 5,
                borderColor: '#08B5F7',
                shadowBlur: 10,
                shadowColor: '#08B5F7'
            }
        },
        color: [
            '#08B5F7',
            '#4FCBFA50'
        ],
        backgroundStyle: {
            borderWidth: 0,
            borderColor: '#ffffff00',
            color: '#ffffff00'
        },
        label: {
            normal: {
                formatter: ''
            }
        }
    }, {
        type: 'line', // 折线图
        markLine: {
            silent: true, // 不触发鼠标事件
            symbol: '', // 标线两端样式
            lineStyle: { // 标线样式
                color: '#f00',
                type: 'solid'
            },
            data: [{ // 标线数据
                yAxis: data[1], // y 轴
            }]
        }

    }]
};