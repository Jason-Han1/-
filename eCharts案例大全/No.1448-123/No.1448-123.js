let yList = [20, 20, 20];
let xList = [10, 55, 44, 55];
let xData = ['学前', '小学', '初中'];
let color = ['#0082FC', '#8D67FF', '#00FFFF', '#48DE13', '#FFC516', '#DC3E14', '#8E16F8'];

dom = 800;
barWidth = dom / 20;
let colors = [];
for (let i = 0; i < 4; i++) {
    colors.push({
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: 'rgba(20,200,207,.5)', // 最左边
            },
            {
                offset: 0.5,
                color: 'rgba(1, 125, 191,.5)', // 左边的右边 颜色
            },
            {
                offset: 0.5,
                color: 'rgba(2, 68, 108,.5)', // 右边的左边 颜色
            },
            {
                offset: 1,
                color: 'rgba(6, 94, 149,.5)',
            },
        ],
    });
}
option = {
    backgroundColor: '#010d3a',
    //提示框
    tooltip: {
        trigger: 'axis',
        formatter: '{b} : {c}',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
    },
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
            show: true,
            lineStyle: {
                color: '#033062',
                shadowColor: 'rgba(255,255,255,1)',
                // shadowOffsetX: '0',
                // shadowOffsetY:'10'
            },
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            margin: 20,
            fontSize: 15,
            color: '#fff',
        },
    },
    yAxis: {
        show: true,
        splitNumber: 4,
        axisLine: {
            show: false,
        },
        
        splitLine: {
            show: false,
            lineStyle: {
                type: 'dashed',
                color: '#075858',
                
            },
        },
        axisLabel: {
            show: false,
            color: '#FFFFFF',
            margin: 30,
            fontSize: 15,
        },
    },
    series: [
        {
            type: 'bar',
            barWidth: barWidth,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colors[params.dataIndex % 7];
                    },
                },
            },
            label: {
                show: true,
                position: [barWidth / 2, -(barWidth + 0)],
                color: '#ffffff',
                fontSize: 14,
                align: 'center',
            },
            data: yList,
        },
        {
            z: 2,
            type: 'pictorialBar',
            data: yList,
            // symbol: 'diamond',
            symbolOffset: [0, '50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            itemStyle: {
                normal: {
                    borderWidth: 30,
                    color: function (params) {
                        return colors[params.dataIndex % 7];
                    },
                },
            },
        },
        {
            z: 3,
            type: 'pictorialBar',
            symbolPosition: 'end',
            data: yList,
            // symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    color: function (params) {
                        return colors[params.dataIndex % 7].colorStops[0].color;
                    },
                },
            },
        },
    ],
};
