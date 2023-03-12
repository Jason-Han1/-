dataList = [
        [1, '广东省', 9000],
        [2, '江苏省', 8000],
        [3, '河南省', 7000],
        [4, '河北省', 6000],
        [5, '吉林省', 5000],
        [6, '云南省', 4000],
        [7, '湖北省', 3000],
        [8, '湖南省', 2000],
        [9, '辽宁省', 1500],
        [10, '黑龙江省', 1000]
    ];
    
colorList = [
        { 'Color': '#FFCF7B' }, { 'Color': '#00F6FF' }, { 'Color': '#5181E2' },
        { 'Color': '#0F82B7' }, { 'Color': '#0F82B7' }, { 'Color': '#0F82B7' },
        { 'Color': '#0F82B7' }, { 'Color': '#0F82B7' }, { 'Color': '#0F82B7' },
        { 'Color': '#0F82B7' }
    ];
    
barWidth = 20;
nameFontColor = '#B3CCF8';
nameFontSize = 12;
namePosition = [0, -15];
valueFontColor = '#FFFFFF';
valueFontSize = 12;
indexNum = 0;

function __getColorValue(name, val, index) {
    return {
        name: name,
        color: colorList[index].Color,
        value: val,
        itemStyle: {
            normal: {
                show: true,
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: colorList[index].Color + '4B'
                    }, {
                        offset: 1,
                        color: colorList[index].Color + 'FF'
                    }],
                    globalCoord: false,
                },
                barBorderRadius: 10
            },
            emphasis: {
                shadowBlur: 15,
                shadowColor: 'rgba(0, 0, 0, 0.1)'
            }
        }
    };
};

 function __SetOption(data) {
    // top 动态计算
    dataLength = data.length;
    computeNumber = (10 - dataLength) * 30;
    borderList = [(800 - computeNumber * 2) - 10, 5 + computeNumber];
    titleTop = 17 + computeNumber;
    titleLineTop = 55 + computeNumber;
    tableBar = [100 + computeNumber, 16 + computeNumber];

    lists = [];
    values = [];
    data.forEach((item, index) => {
        lists.push(item[1]);
        values.push(__getColorValue(item[1], item[2], index));
    });

    option = {
        backgroundColor: 'RGB(8,20,67)',
        title: {
            show: true,
            text: "动态数据排名",
            top: 17,
            right: 260,
            textStyle: {
                color: "#fff",
                fontSize: 20,
                fontFamily: "trends"
            }
        },
        grid: {
            top: 100,
            left: "65%",
            right: "3%",
            bottom: 80
        },
        yAxis: [
            {
                type: "category",
                inverse: true,
                axisTick: { show: false },
                axisLine: { show: false },
                axisLabel: { show: false, inside: false },
                data: lists
            }
        ],
        xAxis: {
            type: "value",
            axisTick: { show: false },
            axisLine: { show: false },
            splitLine: { show: false },
            axisLabel: { show: false },
        },
        graphic: [
            {
                type: "rect",
                right: 10,
                shape: { x: 5, y: 5, width: 400, height: 800, r: 1 },
                style: {
                    fill: "rgba(0,0,0,0)",
                    stroke: {
                        type: "linear",
                        x: 0,
                        y: 1,
                        x2: 1,
                        y2: 1,
                        colorStops: [
                            { offset: 0, color: "rgba(10,70,120,1)" },
                            { offset: 0.5, color: "rgba(10,70,120,1)" },
                            { offset: 1, color: "rgba(10,70,120,0)" },
                        ],
                        globalCoord: false,
                    },
                    lineWidth: 5,
                },
                zlevel: 1,
            },
            {
                type: "line",
                right: 10,
                shape: { x1: 5, y1: 55, x2: 405, y2: 55, percent: 1 },
                style: {
                    fill: "rgba(0,0,0,0)",
                    stroke: {
                        type: "linear",
                        x: 0,
                        y: 1,
                        x2: 1,
                        y2: 1,
                        colorStops: [
                            { offset: 0, color: "rgba(10,70,120,1)" },
                            { offset: 0.5, color: "rgba(10,70,120,1)" },
                            { offset: 1, color: "rgba(10,70,120,0)" },
                        ],
                        globalCoord: false,
                    },
                    lineWidth: 5,
                },
                zlevel: 1,
            },
        ],
        series: [{
            name: '区域充电桩分配数据',
            type: 'bar',
            barWidth: barWidth,
            data: values,
            animationDuration: 1500,
            zlevel: 2,
            label: {
                normal: {
                    show: true,
                    color: nameFontColor,
                    show: true,
                    position: 'inside',
                    position: namePosition,
                    textStyle: {
                        fontSize: nameFontSize
                    },
                    formatter: function (data) {
                        return data.name;
                    },
                }
            }
        },
        {
            name: '区域充电桩分配数据',
            type: 'bar',
            barGap: '-100%',
            barWidth: barWidth,
            data: values,
            animationDuration: 1500,
            zlevel: 2,
            label: {
                normal: {
                    color: valueFontColor,
                    show: true,
                    position: 'right',
                    textStyle: {
                        fontSize: valueFontSize
                    },
                    formatter: function (a, b) {
                        return a.value;
                    }
                }
            }
        }],
        animationEasing: "cubicOut",
    };
}

__SetOption(dataList);


