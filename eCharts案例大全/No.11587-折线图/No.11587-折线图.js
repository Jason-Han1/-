option = {
    color: ['#5b9bd5', '#ed7d31'],
    backgroundColor: '#FFF',
    grid: {

        top: 20,
        bottom: 100,
        left: '12%',
        right: '2%'
    },
    legend: {
        bottom: '10',
        itemWidth: 30,
        itemHeight: 6,
        data: ['逐月总逆温日', '逐月PM2.5浓度']
    },
    xAxis: [{
        name: '城市',
        nameLocation: 'center',
        nameGap: 50,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            rotate: 50
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#CCC'
            }
        },
        data: ['南京', '无锡', '徐州', '常州', '苏州', '南通', '连云港', '淮安', '盐城', '扬州', '镇江', '泰州', '宿迁'],
    }],
    yAxis: [{

        name: '地面风速（m/s）',
        nameLocation: 'center',
        nameGap: 40,
        nameTextStyle: {
            color: '#000'
        },
        axisLine: {
            lineStyle: {
                color: '#CCC'
            },
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#CCC'
            }
        },
        axisLabel: {
            color: '#000'
        }
    }],
    series: [{
            name: '逐月总逆温日',
            type: 'line',
            itemStyle: {
                color: '#5b9bd5',
                borderColor: '#5b9bd5',
                borderWidth: 4
            },
            lineStyle: {
                width: 4
            },
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 20]
        },
        {
            name: '逐月PM2.5浓度',
            type: 'line',
            itemStyle: {
                color: '#ed7d31',
                borderColor: '#ed7d31',
                borderWidth: 4
            },
            lineStyle: {
                width: 4
            },
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3, 15]
        }
    ]
};