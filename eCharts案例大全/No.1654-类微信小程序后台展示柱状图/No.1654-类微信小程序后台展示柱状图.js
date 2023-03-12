const DATA = [
    ['线下扫码', 455],
    ['任务栏', 56],
    ['小程序跳转', 8],
    ['手机端搜索', 6],
    ['发现 - 小程序', 5],
    ['单聊分享', 4],
    ['小程序功能', 4],
    ['收藏', 3],
    ['相册选择', 2],
    ['Android系统', 12],
].sort((a, b) => a[1] - b[1]); // 正序排序
let SUM = 0;
DATA.map((item) => {
    // 总合，为计算百分比
    SUM += item[1];
});
option = {
    // 数据集
    dataset: {
        source: DATA,
    },
    // 浮标提示
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        formatter: (params) => {
            // 修改浮标展示
            if (params[0].name !== '') {
                return `${params[0].name}：${params[0].value[1]} (${
                    Math.round((params[0].value[1] / SUM) * 10000) / 100 + '%'
                })`;
            }
        },
    },
    // title 样式
    title: {
        text: '09/17 周五',
        left: 'left',
        top: 20,
        textStyle: {
            color: '#797979',
        },
    },
    grid: {
        containLabel: true,
        left: '4%', // 距离左侧偏移量
    },
    xAxis: {
        // show: false, // 是否开启 X 轴
        name: '人次/百分比',
    },
    yAxis: {
        type: 'category',
        axisLabel: {
            // Y 轴样式
            show: true,
            margin: 15,
            textStyle: {
                color: '#000000',
            },
        },
        splitLine: {
            // 是否展示 Y 轴辅助线
            show: false,
        },
        axisTick: {
            // 是否展示 Y 轴横线刻度
            show: false,
        },
        axisLine: {
            // 是否展示 Y 轴竖线
            show: false,
        },
    },
    series: [
        {
            type: 'bar',
            barWidth: 20, // 柱子宽度
            itemStyle: {
                // 柿子样式
                barBorderRadius: [0, 30, 30, 0],
                color: '#07c160',
            },
            // 柱子后面跟随的数字
            label: {
                show: true,
                position: 'right',
                fontSize: 12,
                fontWeight: 'bold',
                color: '#727272',
                formatter: function (params, index) {
                    // 为计算百分比
                    return `${params.value[1]} (${Math.round((params.value[1] / SUM) * 10000) / 100 + '%'})`;
                },
            },
        },
    ],
};
