let xLabel = ['上海','云南','内蒙古','北京','台湾','吉林','四川','天津','宁夏','西藏','贵州','辽宁','重庆','陕西','香港','黑龙江','安徽','山东','山西','广东','广西','新疆','江苏','江西','河北','河南','浙江','海南','湖北','湖南','甘肃','福建'];
let goOutSchool =['392','229','149','269','477','191','131','165','100','170','140','152','226','138','391','181','170','137','149','193','151','161','188','142','169','142','172','356','171','150','116','161'];
option = {
    color: '#14b1eb',
    // backgroundColor: '#0e1c47',
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'transparent',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(126,199,255,0)', // 0% 处的颜色
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(126,199,255,1)', // 100% 处的颜色
                        },
                        {
                            offset: 1,
                            color: 'rgba(126,199,255,0)', // 100% 处的颜色
                        },
                    ],
                    global: false, // 缺省为 false
                },
            },
        },
    },
    grid: {
        top: '18%',
        left: '15%',
        right: '5%',
        bottom: '25%',
        // containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            axisLine: {
                //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: '#14b1eb',
                },
            },
            axisLabel: {
                //坐标轴刻度标签的相关设置
                textStyle: {
                    color: '#14b1eb',
                    padding: 10,
                    fontSize: 14,
                },
                formatter: function (data) {
                    return data;
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#192a4411',
                },
            },
            axisTick: {
                show: false,
            },
            data: xLabel,
        },
    ],
    yAxis: [
        {
            name: '均价',
            nameTextStyle: {
                color: '#14b1eb',
                fontSize: 12,
                padding: -5,
            },
            min: 0,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#192a4411',
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#23365311',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#14b1eb',
                    padding: 16,
                },
                formatter: function (value) {
                    if (value === 0) {
                        return value;
                    }
                    return value;
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '均价',
            type: 'line',
            smooth: true,
            // showSymbol: false,
            symbolSize: 8,
            zlevel: 3,
            lineStyle: {
                normal: {
                    color: '#14b1eb',
                    shadowBlur: 3,
                    shadowColor: '#14b1eb66',
                    shadowOffsetY: 8,
                },
            },
            markPoint: {
                label: {
                    normal: {
                        textStyle: {
                            color: '#fff',
                        },
                    },
                },
                data: [
                    {
                        type: 'max',
                        name: '最大值',
                    },
                    {
                        type: 'min',
                        name: '最小值',
                    },
                ],
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#14b1ebee',
                            },
                            {
                                offset: 1,
                                color: '#14b1eb00',
                            },
                        ],
                        false
                    ),
                    shadowColor: '#14b1eb11',
                    shadowBlur: 10,
                },
            },
            data: goOutSchool,
        },
    ],
};
