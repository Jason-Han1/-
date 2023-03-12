option = {
    backgroundColor: '#2f3031',
    tooltip : {
        formatter: "{a} : {c}L"
    },
    series: [
        {
            name: '车速KM/H',
            type: 'gauge',
            radius: 110,//半径
            max:200,
            splitNumber:20,
            z: 3,
            detail: {//仪表盘详情，用于显示数据
               formatter:'限80', 
               offsetCenter: [0, '30%'],
               textStyle: {
                   color: '#ff0000',
                   fontSize: 18,
               },
            },
            title: {//仪表盘标题
                show: true,
                offsetCenter: [0, '-30%'],
                textStyle: {
                    color: '#cececf',
                    fontSize: 18,
                },
            },
            axisLine: {//仪表盘轴线
                lineStyle: {
                    color:[[1, '#fff']],
                    width: 4,
                },
            },
            splitLine: {//分隔线样式
                show: false
            },
            axisTick: {//刻度样式
                show: false,
            },
            axisLabel: {//刻度标签
                show: true,
                distance:-2,
                textStyle: {
                    color: '#fff',
                },
            },
            pointer: {//仪表盘指针
                length: '80%',
                width: 8,
            },
            itemStyle: {//仪表盘指针样式
                normal: {
                    color: '#dee0e4',
                },
            },
            data: [{value: 28.69, name: '车速KM/H'}]
        },{//刻度1
            type: 'gauge',
            z: 2,
            radius: 104,//半径
            max:200,
            splitNumber:20,
            axisLine: {//仪表盘轴线
                show: false,
                lineStyle: {
                    width: 0,
                },
            },
            detail: {//仪表盘详情，用于显示数据
               show: false
            },
            splitLine: {//分隔线样式
                length: 20,
                lineStyle: {
                    color: '#d6d6d6',
                    width: 1.5,
                },
            },
            axisTick: {//刻度样式
                length: 6,
                lineStyle: {
                    color: '#2d4550',
                    width: 0.5,
                },
            },
            axisLabel: {//刻度标签
                show: false
            },
            pointer: {//仪表盘指针
                show: false
            },
        },{//刻度2
            type: 'gauge',
            z: 2,
            radius: 98,//半径
            max:200,
            splitNumber:20,
            axisLine: {//仪表盘轴线
                show: false,
                lineStyle: {
                    width: 0,
                },
            },
            detail: {//仪表盘详情，用于显示数据
               show: false
            },
            splitLine: {//分隔线样式
                show: false
            },
            axisTick: {//刻度样式
                length: 9,
                lineStyle: {
                    color: '#9b9c9c',
                    width: 0.5,
                },
            },
            axisLabel: {//刻度标签
                show: false
            },
            pointer: {//仪表盘指针
                show: false
            },
        },{
            type: 'gauge',
            z: 1,
            radius: 90,//半径
            axisLine: {//仪表盘轴线
                lineStyle: {
                    color:[[0.2, '#61d32a'], [0.8, '#44a8cd'], [1, '#d54e38']],
                    width: 6,
                },
            },
            detail: {//仪表盘详情，用于显示数据
               show: false
            },
            splitLine: {//分隔线样式
                show: false
            },
            axisTick: {//刻度样式
                show: false,
            },
            axisLabel: {//刻度标签
                show: false
            },
            pointer: {//仪表盘指针
                show: false
            },
        }
    ]
};