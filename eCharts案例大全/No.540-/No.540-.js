let { gridRight, rightNum } = {
    rightNum: true,
};
let { category, total, datas } = {
    datas: [32, 41, 20, 37, 62],
    total: 100,
    category: [
        { name: '公安工作基础', value: 32 },
        { name: '公安民警疫情应对身心健康手册', value: 41 },
        { name: '公安网计算机常用软件安装与配置', value: 20 },
        { name: '各个部门创建自己部门审核流程操', value: 37 },
        { name: '国家移民管理局第2总队军体拳训练', value: 62 },
    ],
};
let color = '#0285ff';
let totalList = [];
category.forEach((item) => {
    totalList.push(total);
});
option = {
    // tooltip:{},
    backgroundColor: 'blurScope',
    xAxis: {
        max: total,
        splitLine: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    },
    grid: {
        left: 40,
        top: 20, // 设置条形图的边距
        right: gridRight == 0 ? gridRight : 80,
        bottom: 20,
    },
    yAxis: [
        {
            type: 'category',
            inverse: false,
            data: category,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
        },
    ],
    series: [
        {
            // 内
            type: 'bar',
            barWidth: 10,

            legendHoverLink: false,
            silent: true,
            itemStyle: {
                normal: {
                    color: '#0285ff',
                },
            },
            label: {
                show: true,
                position: 'insideBottomLeft',
                // distance: 20,
                offset: [-6, -10],
                fontSize: 16,
                color: '#fff',
                formatter: function (params) {
                    let str = params.name;
                    if (str.length > 20) {
                        str = str.slice(0, 20) + '...';
                    }
                    return str;
                },
            },
            data: category,
            z: 1,
            animationEasing: 'elasticOut',
        },
        {
            // 分隔
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: '#061348',
                },
            },
            label: {
                normal: {
                    show: rightNum ? rightNum : false,
                    position: 'right',
                    offset: [0, 0],
                    textStyle: {
                        color: '#fff',
                        fontSize: 16,
                    },
                    formatter: '{c}%',
                },
            },
            symbolRepeat: 'fixed',
            symbolMargin: 3,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [1, 12],
            symbolPosition: 'start',
            symbolOffset: [1, -1],
            symbolBoundingData: total,
            data: category,
            z: 2,
            animationEasing: 'elasticOut',
        },
        {
            name: '外框',
            type: 'bar',
            barGap: '-136%', // 设置外框粗细
            data: totalList,
            barWidth: 18,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    offset: gridRight == 0 ? [-100, -20] : [(-80, -20)],
                    textStyle: {
                        color: 'rgba(255,255,255,.6)',
                        fontSize: 14,
                    },
                    formatter: gridRight == 0 ? '做题量：{b}' : '{b}人已学习',
                    // formatter: "50人已学习",
                },
            },
            itemStyle: {
                normal: {
                    color: 'transparent', // 填充色
                    barBorderColor: '#0b63f5', // 边框色
                    barBorderWidth: 1, // 边框宽度
                    // barBorderRadius: 0, //圆角半径
                    label: {
                        // 标签显示位置
                        show: false,
                        position: 'top', // insideTop 或者横向的 insideLeft
                    },
                },
            },
            z: 0,
        },
    ],
};
