
// 指定图表的配置项和数据
var option = {
    backgroundColor: '#ffffff',
    title: [
        {
            x: 'left',
            y: 'top',
            top: '3%',
            text: '单位:万吨',
            left: '5%',
            textStyle: {
                fontStyle: 'normal',
                color: '#6D96FF',
                fontfamily: 'MicrosoftYaHei-Bold',
                fontweight: 'normal',
                fontstretch: 'normal',
                fontSize: 13,
            },
        },
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    legend: {
        x: 'right',
        y: 'top',
        show: true,
        textStyle: {
            fontStyle: 'normal',
            color: '#999',
            fontfamily: 'MicrosoftYaHei-Bold',
            fontweight: 'normal',
            fontstretch: 'normal',
            fontSize: 13,
        },
        top: '1',
        left: '75%',
        data: ['存粮量', '仓储量'],
    },
    grid: {
        top: '10%',
        left: '10%',
        right: '5%',
        bottom: '15%',
    },
    xAxis: {
        type: 'value',
        axisTick: {
            show: false,
        },
        axisLabel: {
            color: '#0B63EE',
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            show: true,
        },
    },
    yAxis: {
        type: 'category',
        inverse: true,
        axisLabel: {
            color: '#4D81ED',
            fontSize: 15,
            //rotate: 50,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#384267',
                type: 'dashed',
            },
        },
        axisLine: {
            lineStyle: {
                color: '#384267',
                width: 1,
                type: 'dashed',
            },
            show: true,
        },
        data: ['二九零', '江滨', '宝泉岭','新华','友谊','八五三'],
    },
    series: [
        {
            name: '存粮量',
            type: 'bar',
            itemStyle: {
                color: '#0097EE',
            },
            barWidth: '30',
            label: {
                show: true,
                position: 'top', // 位置
                color: '#FFBB5D',
                fontSize: 14,
                fontWeight: 'bold', // 加粗
                distance: 2, // 距离
            }, // 柱子上方的数值
            data: [1, 6, 8,9,10,11],
            z: 10,
        },
        {
            name: '仓储量',
            type: 'bar',
            barGap: '-100%',
            barWidth: '30',
            label: {
                show: true,
                position: 'right', // 位置
                color: '#FFBB5D',
                fontSize: 14,
                fontWeight: 'bold', // 加粗
                distance: 2, // 距离
            }, // 柱子上方的数值
            itemStyle: {
                barBorderRadius: [20, 20, 20, 20], // 圆角（左上、右上、右下、左下）
                color: '#63DBFF',
            },
            data: [10, 20, 30,60,50,60],
            z: 5,
        },
    ],
};
