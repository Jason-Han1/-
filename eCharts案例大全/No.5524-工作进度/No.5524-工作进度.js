const data = [0.6,0.4];
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
    series: [{
        type: 'liquidFill',
        radius: '96%', // 半径大小
        center: ['50%', '50%'], // 布局位置
        data: data, // 水球波纹值
        label: {
            normal: {
                color: '#fff',
                textStyle: {
                    fontSize: 18
                },
                formatter: (params) => { //console.log(params)
                    let newValue = params.value * 100;
                    return "工作进度" + newValue.toFixed(2) + '%'
                }
            }
        },
        outline: { // 轮廓设置
            show: true,
            borderDistance: 2, // 轮廓间距
            itemStyle: {
                borderColor: '#294D99', // 轮廓颜色
                borderWidth: 4, // 轮廓大小
                shadowBlur: 'none', // 轮廓阴影
            }
        },
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