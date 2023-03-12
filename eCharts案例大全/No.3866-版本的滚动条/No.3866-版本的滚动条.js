let seriesData = []; //数据
let yValue = []; //y轴显示

let objArr = [{
        name: "生产中心",
        value: 140
    },
    {
        name: "营销中心",
        value: 55
    },
    {
        name: "产品事业中心",
        value: 78
    },
    {
        name: "行政人事部",
        value: 66
    },
    {
        name: "基础架构部",
        value: 63
    },
    {
        name: "金融PU",
        value: 67
    },
    {
        name: "通信PU",
        value: 55
    },
    {
        name: "AAAAAAA",
        value: 42
    },
    {
        name: "BBBBBBB",
        value: 29
    },
    {
        name: "CCCCCCC",
        value: 38
    },
    {
        name: "DDDDDDD",
        value: 75
    },
];

objArr.sort((a, b) => {
    return a.value - b.value;
});
objArr.forEach((item) => {
    seriesData.push(item.value);
    yValue.push(item.name);
});
option = {
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
        },
    },
    //滚动条
    dataZoom: [{
        type: "slider",
        show: true,
        yAxisIndex: [0],
        width: 6, //组件宽度
        // height: 100,//组件高度
        backgroundColor: "#1A53DD", //两边未选中的滑动条区域的颜色
        borderRadius: 5,
        borderColor: "#093683", //滚动条边框颜色
        fillerColor: "#093683", //选中的滑动条区域的颜色
        left: "95%", //滚动条位置
        start: 100, //数据窗口范围的起始百分比
        end: 60, //数据窗口范围的结束百分比
        realtime: true, //是否实时更新
    }, ],
    //整个图的位置
    grid: {
        left: "2.5%",
        right: "16.7%",
        bottom: "15%",
        top: "12%",
        containLabel: true,
    },
    //x轴设置
    xAxis: {
        //x轴数据
        type: "value",
        boundaryGap: [0, 0.1],
        axisLabel: {
            textStyle: {
                color: "#C5D2F2", //颜色
                fontSize: "14", //字体大小
            },
        },
        // max: 150, //最大值
        min: 0, //最小值
        splitNumber: 3, //间隔数量
        axisTick: {
            //坐标轴刻度相关设置
            show: false, //是否显示坐标轴刻度。
        },
    },
    //y轴设置
    yAxis: {
        //y轴名称数据
        type: "category",
        data: yValue,
        axisLabel: {
            textStyle: {
                color: "#C5D2F2",
                fontSize: "14",
            },
        },
        axisTick: {
            //坐标轴刻度相关设置
            show: false, //是否显示坐标轴刻度。
        },
    },
    //数据设置
    series: [
        //显示几条数据
        {
            type: "bar",
            color: "#3DADFF",
            data: seriesData,
            barWidth: 16, //柱图宽度
        },
    ],
};