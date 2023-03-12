const myData = ['福田区', '罗湖区', '南山区', '盐田区', '宝安区', '龙岗区', '坪山区', '龙华区', '光明区', '大鹏区'];
// 全彩屏，双基色屏，简易屏，条形屏
const offLine = [
    [20, 40, 60, 60, 10, 20, 40, 20, 20, 10],
    [10, 30, 50, 20, 50, 30, 30, 40, 10, 20],
    [50, 20, 40, 10, 20, 40, 20, 30, 30, 30],
    [20, 10, 30, 40, 10, 10, 10, 40, 40, 40],
];

const onLine = [
    [10, 20, 20, 40, 20, 10, 60, 60, 40, 20],
    [20, 10, 40, 30, 30, 50, 20, 50, 30, 10],
    [30, 30, 30, 20, 40, 20, 10, 40, 20, 50],
    [40, 40, 40, 10, 10, 10, 40, 30, 10, 20],
];

const offLineSum = [100, 100, 180, 130, 90, 100, 100, 130, 100, 100];
const onLineSum = [100, 100, 130, 100, 100, 90, 130, 180, 100, 100];

// backgroundColor: '#11356D',
option = {
    backgroundColor: '#11356D',
    /*    title: [
        {
            text: '脱机状态',
            top: '2%',
            left: '30%',
            textStyle: {
                color: '#DC3239',
                fontSize: 14,
            },
        },
        {
            text: '联机状态',
            top: '2%',
            right: '30%',
            textStyle: {
                color: '#2087FE',
                fontSize: 14,
            },
        },
    ],*/
    legend: [
        {
            // 图例
            top: '2%',
            left: 'center', // 图例距离左侧距离(此处水平居中)
            textStyle: {
                // 图例文本样式
                color: '#fff',
            },
            itemGap: 100,

            selectedMode: false, //图例点击失效
            data: ['脱机状态', '联机状态'],
        },
        {
            // 图例
            bottom: '45',
            left: 'center', // 图例距离左侧距离(此处水平居中)
            textStyle: {
                // 图例文本样式
                color: '#fff',
            },
            selectedMode: false, //图例点击失效
            data: ['全彩屏', '双基色屏', '简易屏', '条形屏'],
        },
    ],
    tooltip: {
        // 提示框
        show: true,
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器配置项。
            type: 'shadow', // 'line' 直线指示器;'shadow' 阴影指示器.
        },
        // formatter: '{b}<br/>脱机: {c}' // 提示框所提示的文本内容
        formatter: function (params) {
            const fullScreenColor = `<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#F59A3F;"></span>`; // 全彩屏颜色
            const doubleScreenColor = `<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#F2C751;"></span>`; // 双基色屏颜色
            const simpleScreenColor = `<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#296FFB;"></span>`; // 简易屏颜色
            const lineScreenColor = `<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#4AA5EA;"></span>`; // 条形屏颜色
            const fullScreen = params[0]; // 全彩屏序列
            const doubleScreen = params[1]; // 双基色屏序列
            const simpleScreen = params[2]; // 简易屏屏序列
            const lineScreen = params[3]; // 条形屏屏序列
            const bg = params[4]; // 背景区分联机与脱机
            const status =
                bg.seriesName === '联机状态'
                    ? `<span style="display:inline-block;color:#2087FE;">联机</span>`
                    : `<span style="display:inline-block;color:#DC3239;">脱机</span>`;
            return (
                `${fullScreen.name}(${status})</br>` +
                `${fullScreenColor}${fullScreen.seriesName}：${fullScreen.value}</br>` +
                `${doubleScreenColor}${doubleScreen.seriesName}：${doubleScreen.value}</br>` +
                `${simpleScreenColor}${simpleScreen.seriesName}：${simpleScreen.value}</br>` +
                `${lineScreenColor}${lineScreen.seriesName}：${lineScreen.value}</br>`
            );
        },
    },
    grid: [
        {
            // 左边
            show: false,
            left: '2%',
            top: 20,
            bottom: 60,
            containLabel: true,
            width: '43%',
        },
        {
            // 中间
            show: false,
            left: '55%',
            top: 40,
            bottom: 60,
            width: '14%',
        },
        {
            // 右边
            show: false,
            right: '2%',
            top: 20,
            bottom: 60,
            containLabel: true,
            width: '43%',
        },
    ],
    // X轴线配置
    xAxis: [
        {
            // 左侧区域
            gridIndex: 0, // x 轴所在的 grid 的索引，默认位于第一个 grid。[ default: 0 ]
            type: 'value', // 轴线类型: 数值轴
            position: 'top', // 轴线位置(此处位于顶部)
            inverse: true, // 是否是反向坐标轴.[ default: false ]
            axisLine: {
                show: false, // 轴线不显示
            },
            axisTick: {
                show: false, // 轴线刻度不显示
            },
            axisLabel: {
                // 轴线刻度标签
                show: true, // 显示刻度标签
                textStyle: {
                    // 标签样式
                    color: '#153D7D64',
                    fontSize: 12,
                },
            },
            splitLine: {
                // 垂直于X轴的分隔线
                show: true, // 显示分隔线
                lineStyle: {
                    // 分隔线样式
                    color: '#153D7D64',
                    width: 1,
                    type: 'solid',
                },
            },
            // 强制设置坐标轴分割间隔
            // interval: 50,
            // min: 0, // 最小值
            // max: 200 // 最大值
        },
        {
            // 中间区域
            gridIndex: 1,
            show: false, // 中间部分不显示X轴
        },
        {
            // 右侧区域
            gridIndex: 2,
            type: 'value',
            position: 'top',
            inverse: false, // 是否是反向坐标轴.[ default: false ]
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#153D7D64',
                    fontSize: 12,
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#153D7D64',
                    width: 1,
                    type: 'solid',
                },
            },
            // 强制设置坐标轴分割间隔
            // interval: 50,
            // min: 0, // 最小值
            // max: 200 // 最大值
        },
    ],
    // Y轴线配置
    yAxis: [
        {
            // 左侧区域
            gridIndex: 0, // y 轴所在的 grid 的索引，默认位于第一个 grid。[ default: 0 ]
            type: 'category', // 轴线类型: 类目轴
            // 类目轴中 boundaryGap 可以配置为 true 和 false。默认为 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间。
            boundaryGap: true, // 坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。
            inverse: true, // 是否是反向坐标轴.[ default: false ]
            position: 'right', // y轴的位置。'left' or 'right'
            axisLine: {
                show: false, // y轴线不显示
            },
            axisTick: {
                show: false, // y轴线刻度不显示
                lineStyle: {
                    // 刻度线样式
                    color: '#11356D',
                },
            },
            axisLabel: {
                show: false, // 刻度标签不显示
            },
            data: myData, // Y轴(这里是类目轴)的类目数据
        },
        {
            gridIndex: 1, // 中间区域
            type: 'category',
            boundaryGap: true,
            inverse: true,
            position: 'left', // y轴的位置。'left' or 'right'
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true, // 显示中间部分的Y轴刻度标签(中间的文字)
                textStyle: {
                    // 标签样式
                    color: '#cccccc',
                    fontSize: 12,
                },
            },
            data: myData,
        },
        {
            // 右侧区域
            gridIndex: 2,
            type: 'category',
            boundaryGap: true,
            inverse: true,
            position: 'left',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
                lineStyle: {
                    // 刻度线样式
                    color: '#153D7D',
                },
            },
            axisLabel: {
                show: false,
            },
            data: myData,
        },
    ],
    series: [
        {
            name: '全彩屏', // 系列名称
            type: 'bar',
            // barGap: 5, // 柱间距离
            barWidth: 15, // 柱子宽度
            xAxisIndex: 0, // 对应在X轴的grid索引
            yAxisIndex: 0, // 对应在Y轴的grid索引
            stack: '1', // 相同就是堆叠
            // barGap:'-100%', //重叠
            label: {
                show: true,
                position: 'top',
                color: '#F59A3F',
                fontSize: 10,
            },
            itemStyle: {
                // 柱条样式。
                color: '#F59A3F',
                // borderWidth:1,
                // borderColor:'transparent'
            },
            emphasis: {
                // 鼠标指向高亮
                show: true,
                label: {
                    color: '#F59A3F96', // 高亮状态下柱条颜色
                },
                itemStyle: {
                    color: '#F59A3F96', // 高亮状态下柱条颜色
                },
            },
            data: offLine[0], // 系列中的数据内容数组
        },
        {
            name: '双基色屏', // 系列名称
            type: 'bar',
            barWidth: 15, // 柱子宽度
            xAxisIndex: 0, // 对应在X轴的grid索引
            yAxisIndex: 0, // 对应在Y轴的grid索引
            stack: '1', // 相同就是堆叠
            label: {
                show: true,
                position: 'top',
                color: '#F2C751',
                fontSize: 10,
            },
            itemStyle: {
                // 柱条样式。
                color: '#F2C751',
                // borderWidth:1,
                // borderColor:'transparent'
            },
            emphasis: {
                // 高亮
                show: true,
                label: {
                    color: '#F2C75196', // 高亮状态下柱条颜色
                },
                itemStyle: {
                    color: '#F2C75196', // 高亮状态下柱条颜色
                },
            },
            data: offLine[1], // 系列中的数据内容数组
        },
        {
            name: '简易屏', // 系列名称
            type: 'bar',
            barWidth: 15, // 柱子宽度
            xAxisIndex: 0, // 对应在X轴的grid索引
            yAxisIndex: 0, // 对应在Y轴的grid索引
            stack: '1', // 相同就是堆叠
            label: {
                show: true,
                position: 'top',
                color: '#296FFB',
                fontSize: 10,
            },
            itemStyle: {
                // 柱条样式。
                color: '#296FFB',
                // borderWidth:1,
                // borderColor:'transparent'
            },
            emphasis: {
                // 高亮
                show: true,
                label: {
                    color: '#296FFB96', // 高亮状态下柱条颜色
                },
                itemStyle: {
                    color: '#296FFB96', // 高亮状态下柱条颜色
                },
            },
            data: offLine[2], // 系列中的数据内容数组
        },
        {
            name: '条形屏', // 系列名称
            type: 'bar',
            barWidth: 15, // 柱子宽度
            xAxisIndex: 0, // 对应在X轴的grid索引
            yAxisIndex: 0, // 对应在Y轴的grid索引
            stack: '1', // 相同就是堆叠
            label: {
                show: true,
                position: 'top',
                color: '#4AA5EA',
                fontSize: 10,
            },
            itemStyle: {
                // 柱条样式。
                color: '#4AA5EA',
                // borderWidth:1,
                // borderColor:'transparent'
            },
            emphasis: {
                // 高亮
                show: true,
                label: {
                    color: '#4AA5EA96', // 高亮状态下柱条颜色
                },
                itemStyle: {
                    color: '#4AA5EA96', // 高亮状态下柱条颜色
                },
            },
            data: offLine[3], // 系列中的数据内容数组
        },
        // 脱机背景
        {
            name: '脱机状态', // 系列名称
            type: 'bar',
            // barGap: 5, // 柱间距离
            barWidth: 21, // 柱子宽度
            xAxisIndex: 0, // 对应在X轴的grid索引
            yAxisIndex: 0, // 对应在Y轴的grid索引
            // stack: '1', // 相同就是堆叠
            barGap: '-120%', //重叠
            itemStyle: {
                // 柱条样式。
                // color: '#DC3239',
                color: 'transparent',
                borderWidth: 1,
                borderColor: '#DC3239',
                shadowColor: '#DC3239',
                shadowBlur: 20,
            },
            emphasis: {
                scale: false,
            },
            data: offLineSum, // 系列中的数据内容数组
        },

        {
            name: '全彩屏', // 系列名称
            type: 'bar',
            barWidth: 15, // 柱子宽度
            xAxisIndex: 2, // 对应在X轴的grid索引
            yAxisIndex: 2, // 对应在Y轴的grid索引
            stack: '2', // 相同就是堆叠
            label: {
                show: true,
                position: 'top',
                color: '#F59A3F',
                fontSize: 10,
            },
            itemStyle: {
                // 柱条样式。
                color: '#F59A3F',
                // borderWidth:1,
                // borderColor:'transparent'
            },
            emphasis: {
                // 鼠标指向高亮
                show: true,
                label: {
                    color: '#F59A3F96', // 高亮状态下柱条颜色
                },
                itemStyle: {
                    color: '#F59A3F96', // 高亮状态下柱条颜色
                },
            },
            data: onLine[0], // 系列中的数据内容数组
        },
        {
            name: '双基色屏', // 系列名称
            type: 'bar',
            barWidth: 15, // 柱子宽度
            xAxisIndex: 2, // 对应在X轴的grid索引
            yAxisIndex: 2, // 对应在Y轴的grid索引
            stack: '2', // 相同就是堆叠
            label: {
                show: true,
                position: 'top',
                color: '#F2C751',
                fontSize: 10,
            },
            itemStyle: {
                // 柱条样式。
                color: '#F2C751',
                // borderWidth:1,
                // borderColor:'transparent'
            },
            emphasis: {
                // 高亮
                show: true,
                label: {
                    color: '#F2C75196', // 高亮状态下柱条颜色
                },
                itemStyle: {
                    color: '#F2C75196', // 高亮状态下柱条颜色
                },
            },
            data: onLine[1], // 系列中的数据内容数组
        },
        {
            name: '简易屏', // 系列名称
            type: 'bar',
            barWidth: 15, // 柱子宽度
            xAxisIndex: 2, // 对应在X轴的grid索引
            yAxisIndex: 2, // 对应在Y轴的grid索引
            stack: '2', // 相同就是堆叠
            label: {
                show: true,
                position: 'top',
                color: '#296FFB',
                fontSize: 10,
            },
            itemStyle: {
                // 柱条样式。
                color: '#296FFB',
                // borderWidth:1,
                // borderColor:'transparent'
            },
            emphasis: {
                // 高亮
                show: true,
                label: {
                    color: '#296FFB96', // 高亮状态下柱条颜色
                },
                itemStyle: {
                    color: '#296FFB96', // 高亮状态下柱条颜色
                },
            },
            data: onLine[2], // 系列中的数据内容数组
        },
        {
            name: '条形屏', // 系列名称
            type: 'bar',
            barWidth: 15, // 柱子宽度
            xAxisIndex: 2, // 对应在X轴的grid索引
            yAxisIndex: 2, // 对应在Y轴的grid索引
            stack: '2', // 相同就是堆叠
            label: {
                show: true,
                position: 'top',
                color: '#4AA5EA',
                fontSize: 10,
            },
            itemStyle: {
                // 柱条样式。
                color: '#4AA5EA',
                // borderWidth:1,
                // borderColor:'transparent'
            },
            emphasis: {
                // 高亮
                show: true,
                label: {
                    color: '#4AA5EA96', // 高亮状态下柱条颜色
                },
                itemStyle: {
                    color: '#4AA5EA96', // 高亮状态下柱条颜色
                },
            },
            data: onLine[3], // 系列中的数据内容数组
        },
        // 联机背景
        {
            name: '联机状态', // 系列名称
            type: 'bar',
            // barGap: 5, // 柱间距离
            barWidth: 21, // 柱子宽度
            xAxisIndex: 2, // 对应在X轴的grid索引
            yAxisIndex: 2, // 对应在Y轴的grid索引
            // stack: '2', // 相同就是堆叠
            barGap: '-120%', //重叠
            itemStyle: {
                // 柱条样式。
                // color: '#2087FE',
                color: 'transparent',
                borderWidth: 1,
                borderColor: '#2087FE',
            },
            data: onLineSum, // 系列中的数据内容数组
        },
    ],
};
