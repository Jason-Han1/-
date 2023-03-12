let manNumber = [32, 58, 64, 64, 64, 25];
let womanNumber = [32, 58, 64, 64, 64, 25];
let womanNumber1 = [32, 58, 64, 64, 64, 25];
let womanNumber2 = [32, 58, 64, 64, 64, 25];
let xData = ['20以下', '21-30', '31-40', '41-50', '51-60', '60以上'];

let dom = 800;
let barWidth = dom / 20;
let manColors = [];
let womanColors = [];
let monitorColors = [];
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
                color: '#f998af', // 最左边
            },
            {
                offset: 0.5,
                color: '#f65c7f', // 左边的右边 颜色
            },
            {
                offset: 0.5,
                color: '#f65c7f', // 右边的左边 颜色
            },
            {
                offset: 1,
                color: '#eb5b7a',
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
                color: '#fba179', // 最左边
            },
            {
                offset: 0.5,
                color: '#f76425', // 左边的右边 颜色
            },
            {
                offset: 0.5,
                color: '#f76425', // 右边的左边 颜色
            },
            {
                offset: 1,
                color: '#ec6b2f',
            },
        ],
    });
    monitorColors.push({
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: '#e87ef4', // 最左边
            },
            {
                offset: 0.5,
                color: '#e142f3', // 左边的右边 颜色
            },
            {
                offset: 0.5,
                color: '#e142f3', // 右边的左边 颜色
            },
            {
                offset: 1,
                color: '#d038e2',
            },
        ],
    });
}
option = {
    //提示框
    tooltip: {
        trigger: 'axis',
        formatter: function (p) {
            console.log(p);
            let div = `
                      ${p[0].name}
                      <br/>
                      ${p[0].seriesName}: ${p[0].value}
                      <br/>
                      ${p[3].seriesName}: ${p[3].value}
                      <br/>
                      ${p[6].seriesName}: ${p[6].value}
                  `;
            return div;
        },
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    // 图例
    legend: {
        // legend 不好做 放弃
        itemGap: 20,
        bottom: 0,
        left: 'center',
        itemHeight: 14,
        itemWidth: 14,
        data: [
            {
                name: '甲供物资',
                icon: 'roundRect',
                itemStyle: {
                    color: '#f65c7f',
                },
                textStyle: {
                    fontSize: 18,
                    color: '#000000',
                },
            },
            {
                name: '联采物资',
                icon: 'roundRect',
                itemStyle: {
                    color: '#f76425',
                },
                textStyle: {
                    fontSize: 18,
                    color: '#000000',
                },
            },
            {
                name: '重点监控物资',
                icon: 'roundRect',
                itemStyle: {
                    color: '#e142f3',
                },
                textStyle: {
                    fontSize: 18,
                    color: '#000000',
                },
            },
        ],
        textStyle: {
            color: '#fff',
        },
    },
    /**区域位置*/
    grid: {
        left: '5%',
        right: '5%',
        top: '5%',
        bottom: '25%',
    },
    //X轴
    xAxis: {
        data: [
            "站前一标",
            "站前二标",
            "站前三标",
            "站前四标",
            "站房一标",
            "站房二标"
        ],
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
            color: '#000000',
            margin: 15,
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
            color: '#000000',
            margin: 10,
            fontSize: 15,
        },
    },
    series: [
        {
            name: '甲供物资',
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
            symbolOffset: ['-180%', '50%'],
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
            symbolOffset: ['-180%', '-50%'],
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
            name: '联采物资',
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
            symbolOffset: ['-60%', '50%'],
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
            symbolOffset: ['-60%', '-50%'],
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
        // ---------------------分割线---------------------
        {
            name: '重点监控物资',
            type: 'bar',
            barWidth: barWidth,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return monitorColors[params.dataIndex % 7];
                    },
                },
            },
            data: womanNumber1,
        },
        {
            z: 2,
            type: 'pictorialBar',
            data: womanNumber1,
            symbol: 'diamond',
            symbolOffset: ['60%', '50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            itemStyle: {
                normal: {
                    color: function (params) {
                        return monitorColors[params.dataIndex % 7];
                    },
                },
            },
        },
        {
            z: 3,
            type: 'pictorialBar',
            symbolPosition: 'end',
            data: womanNumber1,
            symbol: 'diamond',
            symbolOffset: ['60%', '-50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    color: function (params) {
                        return monitorColors[params.dataIndex % 7].colorStops[0].color;
                    },
                },
            },
        },
        // ---------------------分割线---------------------
        {
            name: '重点监控物资',
            type: 'bar',
            barWidth: barWidth,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return monitorColors[params.dataIndex % 7];
                    },
                },
            },
            data: womanNumber1,
        },
        {
            z: 2,
            type: 'pictorialBar',
            data: womanNumber1,
            symbol: 'diamond',
            symbolOffset: ['180%', '50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            itemStyle: {
                normal: {
                    color: function (params) {
                        return monitorColors[params.dataIndex % 7];
                    },
                },
            },
        },
        {
            z: 3,
            type: 'pictorialBar',
            symbolPosition: 'end',
            data: womanNumber1,
            symbol: 'diamond',
            symbolOffset: ['180%', '-50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    color: function (params) {
                        return monitorColors[params.dataIndex % 7].colorStops[0].color;
                    },
                },
            },
        },
    ],
};
