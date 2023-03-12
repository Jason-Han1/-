const list = [
    {
        name: '公司A',
        // 支出
        expenses: '190',
        // 收入
        revenue: '320',
    },
    {
        name: '公司B',
        // 支出
        expenses: '110',
        // 收入
        revenue: '270',
    },
    {
        name: '公司C',
        // 支出
        expenses: '240',
        // 收入
        revenue: '380',
    },
    {
        name: '公司D',
        // 支出
        expenses: '170',
        // 收入
        revenue: '270',
    },
    {
        name: '公司E',
        // 支出
        expenses: '210',
        // 收入
        revenue: '380',
    },
    {
        name: '公司F',
        // 支出
        expenses: '180',
        // 收入
        revenue: '330',
    },
    {
        name: '公司G',
        // 支出
        expenses: '160',
        // 收入
        revenue: '230',
    },
];

option = {
    // 鼠标移入提示框
    tooltip: {
        trigger: 'axis',
        backgroundColor: '#05050F', // 提示框背景色
        borderColor: '#05050F', // 提示框边框色
        textStyle: {
            color: '#fff', // 提示框文本颜色
        },
        formatter: (params) => {
            // 自定义tooltip小圆点
            const dotHtml1 =
                '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#01F1E3"></span>';
            const dotHtml2 =
                '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#991BFA"></span>';
            const time = `<p style="text-align:center;margin:0">2021年12月22日</p>`;
            const result = `${dotHtml1} ${params[1].seriesName} : ${params[1].value}万  &nbsp;&nbsp;|&nbsp;&nbsp;   ${dotHtml2} ${params[0].seriesName} : ${params[0].value}万 ${time}`;
            return result;
        },
        axisPointer: {
            type: 'none',
        },
    },
    // 图列组件
    legend: {
        bottom: 0, // 图列项的位置
        itemGap: 50, // 图列项之间的间距
        icon: 'circle', // 图列项的形状
        itemWidth: 8, // 图列项的大小
        textStyle: {
            color: '#fff',
        },
    },
    // 网格
    grid: {
        top: '5%',
        right: '0%',
    },
    // 移动端自适应
    media: [
        {
            query: {
                minWidth: 400,
            },
            option: {
                xAxis: [
                    {
                        axisLabel: {
                            interval: 0,
                        },
                    },
                ],
            },
        },
        {
            query: {
                maxWidth: 400,
            },
            option: {
                xAxis: [
                    {
                        axisLabel: {
                            interval: 1,
                        },
                    },
                ],
            },
        },
    ],
    // x轴
    xAxis: [
        {
            type: 'category',
            axisTick: {
                show: false, // 不显示刻度线
            },
            axisLabel: {
                color: '#fff',
                interval: 0, // 强制显示所有刻度标签
            },
            data: ['公司A', '公司B', '公司C', '公司D', '公司E', '公司F', '公司G'],
        },
    ],
    // y轴
    yAxis: [
        {
            axisLabel: {
                color: '#fff',
            },
            type: 'value',
            min: 0,
            max: 400,
        },
    ],
    series: [
        {
            name: '支出',
            type: 'bar',
            // stack: 'company',
            z: 10000,
            barWidth: '30%',
            itemStyle: {
                color: '#991BFA',
                barBorderRadius: 50,
            },
            data: list.map((item) => {
                return {
                    name: item.name,
                    value: item.expenses,
                };
            }),
        },
        {
            name: '收入',
            type: 'bar',
            // stack: 'company',
            barGap: '-100%',
            barWidth: '30%',
            itemStyle: {
                color: '#01F1E3',
                barBorderRadius: 50,
            },
            data: list.map((item) => {
                return {
                    name: item.name,
                    value: item.revenue,
                };
            }),
        },
    ],
};
