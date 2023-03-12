/**
 *
 * 作者: GhostCat
 * 博客: https://gcat.cc
 * 描述: 双立体折线辉光图
 *
 */

let manNumber = [32, 58, 64, 64, 64, 25];
let womanNumber = [32, 58, 64, 64, 64, 25];
let sumNumber = [64, 58 * 2, 64 * 2, 64 * 2, 64 * 2, 25 * 2];
let xData = ['20以下', '21-30', '31-40', '41-50', '51-60', '60以上'];

let dom = 800;
let barWidth = dom / 20;
let manColors = [];
let womanColors = [];
for (let i = 0; i < 10; i++) {
    manColors.push({
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: '#73fcff', // 最左边
            },
            {
                offset: 0.5,
                color: '#86eef1', // 左边的右边 颜色
            },
            {
                offset: 0.5,
                color: '#5ad6d9', // 右边的左边 颜色
            },
            {
                offset: 1,
                color: '#3dc8ca',
            },
        ],
    });
    womanColors.push({
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: '#ffd680', // 最左边
            },
            {
                offset: 0.5,
                color: '#ffd882', // 左边的右边 颜色
            },
            {
                offset: 0.5,
                color: '#f2c258', // 右边的左边 颜色
            },
            {
                offset: 1,
                color: '#f1bf52',
            },
        ],
    });
}
option = {
    backgroundColor: '#010d3a',
    //提示框
    tooltip: {
        trigger: 'axis',
        formatter: function (p) {
            console.log(p, p[0].marker);
            let div = `
                ${p[0].name}
                <br/>
                ${p[0].seriesName}:${p[0].value}
                <br/>
                ${p[3].seriesName}:${p[3].value}
                <br/>
                ${p[6].seriesName}:${p[6].value}
            `;
            return div;
        },
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    // legend: {
    // legend 不好做 放弃
    //     itemGap: 20,
    //     top: 20,
    //     left: '10%',
    //     // itemWidth: 14,
    //     itemHeight: 14,
    //     data: [
    //         {
    //             name: '男',
    //             icon: 'roundRect',
    //         },
    //         {
    //             name: '女',
    //             icon: 'roundRect',
    //         },
    //         {
    //             name: '总人数',
    //             // icon: 'triangle',
    //         }
    //     ],
    //     textStyle: {
    //         color: "#fff",
    //     }
    // },
    /**区域位置*/
    grid: {
        left: '10%',
        right: '10%',
        top: '10%',
        bottom: '10%',
    },
    //X轴
    xAxis: {
        data: xData,
        type: 'category',
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255,255,255,1)',
                shadowColor: 'rgba(255,255,255,1)',
                shadowOffsetX: '20',
            },
            symbol: ['none', 'arrow'],
            symbolOffset: [0, 25],
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            margin: 30,
            fontSize: 15,
        },
    },
    yAxis: {
        show: true,
        splitNumber: 4,
        axisLine: {
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#075858',
            },
        },
        axisLabel: {
            color: '#FFFFFF',
            margin: 30,
            fontSize: 15,
        },
    },
    series: [
        {
            name: '男',
            type: 'bar',
            barWidth: barWidth,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return manColors[params.dataIndex % 7];
                    },
                },
            },
            data: manNumber,
        },
        {
            z: 2,
            type: 'pictorialBar',
            data: manNumber,
            symbol: 'diamond',
            symbolOffset: ['-63%', '50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            itemStyle: {
                normal: {
                    color: function (params) {
                        return manColors[params.dataIndex % 7];
                    },
                },
            },
        },
        {
            z: 3,
            type: 'pictorialBar',
            symbolPosition: 'end',
            data: manNumber,
            symbol: 'diamond',
            symbolOffset: ['-63%', '-50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    color: function (params) {
                        return manColors[params.dataIndex % 7].colorStops[0].color;
                    },
                },
            },
        },
        // ---------------------分割线---------------------
        {
            name: '女',
            type: 'bar',
            barWidth: barWidth,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return womanColors[params.dataIndex % 7];
                    },
                },
            },
            data: womanNumber,
        },
        {
            z: 2,
            type: 'pictorialBar',
            data: womanNumber,
            symbol: 'diamond',
            symbolOffset: ['63%', '50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            itemStyle: {
                normal: {
                    color: function (params) {
                        return womanColors[params.dataIndex % 7];
                    },
                },
            },
        },
        {
            z: 3,
            type: 'pictorialBar',
            symbolPosition: 'end',
            data: womanNumber,
            symbol: 'diamond',
            symbolOffset: ['63%', '-50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    color: function (params) {
                        return womanColors[params.dataIndex % 7].colorStops[0].color;
                    },
                },
            },
        },

        // 总人数
        {
            name: '总人数',
            type: 'line',
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: {
                color: '#fff',
                shadowColor: '#5ce0e2',
                shadowBlur: 20,
                borderColor: '#5ce0e2',
                borderWidth: 5,
            },
            lineStyle: {
                width: 4,
                color: '#5ce0e2',
                shadowColor: '#5ce0e2',
                shadowBlur: 20,
            },
            data: sumNumber,
        },
    ],
};
