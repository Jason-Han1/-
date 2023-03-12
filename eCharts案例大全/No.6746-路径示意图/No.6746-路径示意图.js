var data = [{
        index: 1,
        id: 1,
        name: "高速路入口"
    },

    {
        index: 2,
        id: 2,
        name: "四平互通至仙马泉互通S门架2"
    },
    {
        index: 3,
        id: 3,
        name: "四平互通至仙马泉互通S门3"
    },
    {
        index: 4,
        id: 4,
        name: "四平互通至仙马泉互通S门4架"
    },
    {
        index: 5,
        id: 5,
        name: "四平互通至仙马泉互通S门架5"
    },
    {
        index: 6,
        id: 6,
        name: "四平互通至仙马泉互通S门架6"
    },
    {
        index: 7,
        id: 7,
        name: "高速路出口"
    },

];
let linearr = [],
    yInfo = [];
data.map(item => {
    linearr.push(0);
    yInfo.push(item.name);
});
option = {
    grid: {
        top: "top",
        left: "50%"
    },
    tooltip: {
        show: true,
        tigger: "item",
        formatter: params => {
            let result = data[params.dataIndex];
            let callbackInfo = result.name;
            return callbackInfo;
        }
    },
    xAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: "category",
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            margin: 20,
            color: "black",
            fontSize: 12
        },
        data: [...yInfo]
    },
    series: [{
        type: "line",
        symbol: (value, params) => {
            let symbolImg = "roundRect";
            if (
                params.dataIndex == 0 ||
                params.dataIndex == data.length - 1
            ) {
                symbolImg = "circle";
            }
            return symbolImg;
        },
        symbolSize: (value, params) => {
            let size = [20, 10];
            if (
                params.dataIndex == 0 ||
                params.dataIndex == data.length - 1
            ) {
                size = 8;
            }
            return size;
        },
        itemStyle: {
            color: "gray"
        },
        hoverAnimation: false,
        legendHoverLink: false,
        data: [...linearr],
        lineStyle: {
            color: "#F5222D",
            width: 8
        }
    }]
};