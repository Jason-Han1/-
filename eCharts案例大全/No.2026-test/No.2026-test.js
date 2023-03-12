let nameList = ['外聘教师数', '实验技术人员数量', '本科生与就业指导人员比例', '本科生与辅导员比例'];
// 外聘教师数
let line1 = [10, 34, 29, 43, 50];
// 实验技术人员数
let line2 = [30, 32, 46, 39, 42];
//本科生与就业指导人员比例
let line3 = [70, 60, 73, 58, 66];
// 本科生与辅导员比例
let line4 = [61, 73, 59, 68, 77];

option = {
    title: {
        text: 'Awesome Chart',
    },
    xAxis: {
        data: nameList,
        axisLine: {
            lineStyle: {
                color: 'rgba(49, 194, 255, 1)',
            },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            color: '#CAEEFF',
        },
    },
    yAxis: [
        {
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(49, 194, 255, 1)',
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                color: '#CAEEFF',
            },
        },
        {
            position: 'right',
            max: 100,
            splitLine: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(49, 194, 255, 1)',
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                color: '#CAEEFF',
                formatter: (name) => {
                    return `${name}%`;
                },
            },
        },
    ],
    series: [
        {
            type: 'line',
            data: line1,
            name: '外聘教师数',
            itemStyle: {
                color: 'rgba(38, 215, 160, 1)',
            },
            symbol: 'none',
            smooth: true,
            lineStyle:{
                shadowColor:'rgba(38, 215, 160, 1)',
                shadowBlur:6
            },
            areaStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            color: 'rgba(38, 215, 160, 0.4)',
                            offset: 0,
                        },
                        {
                            color: 'rgba(33, 176, 136, 0)',
                            offset: 1,
                        },
                    ],
                },
            },
        },
        {
            type: 'line',
            data: line2,
            name: '实验技术人员数量',
            itemStyle: {
                color: 'rgba(0, 138, 255, 1)',
            },
            lineStyle:{
                shadowColor:'rgba(0, 138, 255, 1)',
                shadowBlur:6
            },
            symbol: 'none',
            smooth: true,
            areaStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            color: 'rgba(0, 138, 255, 0.6)',
                            offset: 0,
                        },
                        {
                            color: 'rgba(33, 247, 255, 0)',
                            offset: 1,
                        },
                    ],
                },
            },
        },
        {
            type: 'line',
            yAxisIndex: 1,
            data: line3,
            name: '本科生与就业指导人员比例',
            itemStyle: {
                color: 'rgba(5, 236, 247, 1)',
            },
            lineStyle:{
                shadowColor:'rgba(5, 236, 247, 1)',
                shadowBlur:10  
            },
            symbolSize: 10,
        },
        {
            type: 'line',
            data: line4,
            yAxisIndex: 1,
            name: '本科生与辅导员比例',
            itemStyle: {
                color: 'rgba(0, 138, 255, 1)',
            },
            lineStyle:{
                shadowColor:'rgba(0, 138, 255, 1)',
                shadowBlur:6
            },
            symbolSize: 10,
        },
    ],
};
