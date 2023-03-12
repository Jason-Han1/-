yList = [32, 58, 64, 64, 64];
xList = [10, 55, 44, 55, 9, 8];
color = ['#CC1CAA', '#8D67FF', '#00FFFF', '#48DE13', '#FFC516', '#DC3E14', '#8E16F8'];
xData = xList.map((item, index) => {
    return {
        value: item,
        textStyle: {
            color: color[index],
        },
    };
});
dom = 800;
barWidth = dom / 20;
colors = [
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: '#FF3FDA',
            },
            {
                offset: 0.5,
                color: '#FF3FDA',
            },
            {
                offset: 0.5,
                color: '#CC1BAA',
            },
            {
                offset: 1,
                color: '#CC1BAA',
            },
        ],
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: '#602CFF',
            },
            {
                offset: 0.5,
                color: '#602CFF',
            },
            {
                offset: 0.5,
                color: '#4915E6',
            },
            {
                offset: 1,
                color: '#4915E6',
            },
        ],
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: '#00FFFF',
            },
            {
                offset: 0.5,
                color: '#00FFFF',
            },
            {
                offset: 0.5,
                color: '#11A6D0',
            },
            {
                offset: 1,
                color: '#11A6D0',
            },
        ],
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: '#89FF5E',
            },
            {
                offset: 0.5,
                color: '#89FF5E',
            },
            {
                offset: 0.5,
                color: '#48DD12',
            },
            {
                offset: 1,
                color: '#48DD12',
            },
        ],
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: '#FFD05C',
            },
            {
                offset: 0.5,
                color: '#FFD05C',
            },
            {
                offset: 0.5,
                color: '#DEA821',
            },
            {
                offset: 1,
                color: '#DEA821',
            },
        ],
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: '#FF7853',
            },
            {
                offset: 0.5,
                color: '#FF7853',
            },
            {
                offset: 0.5,
                color: '#DB3E13',
            },
            {
                offset: 1,
                color: '#DB3E13',
            },
        ],
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: '#AA48FF',
            },
            {
                offset: 0.5,
                color: '#AA48FF',
            },
            {
                offset: 0.5,
                color: '#8E15F8',
            },
            {
                offset: 1,
                color: '#8E15F8',
            },
        ],
    },
];
option = {
    backgroundColor: '#010d3a',
    //标题
    title: {
        text: '志愿项目服务时长变化趋势',
        textStyle: {
            color: '#00FFFF',
            fontWeight: '800',
            fontSize: `20`,
        },
        left: 'center',
        top: '5%',
    },
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
    //   grid: {
    //       left: '10%',
    //       right: '10%',
    //       top: 80,
    //       bottom: 40,
    //     },
    /**图例大小*/
    //  legend: {
    //   type: 'plain',
    //   left: 0,
    //   top: 20,
    //   itemGap: 20,
    //   itemWidth: 35,
    //   itemHeight: 20
    // },
    //X轴
    xAxis: {
        name: 'X',
        nameTextStyle: {
            color: '#FFFFFF',
           padding: [0, 0, 0, 20],
        },
        data: xData,
        show: true,
        type: 'category',
        //坐标轴轴线相关设置。
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,1)',
                shadowColor: 'rgba(255,255,255,1)',
                shadowOffsetX: '20',
            },
            symbol: ['none', 'arrow'],
            //箭头偏移量
            symbolOffset: [0, 25],
        },
        //坐标轴在 grid 区域中的分隔线
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.2)',
            },
        },
        //坐标轴刻度标签的相关设置
        axisLabel: {
            margin: 20,
            rotate: -50,
            fontSize: 12,
        },
    },
    yAxis: {
        show: true,
        splitNumber: 4,
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.2)',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.2)',
            },
        },
        axisLabel: {
            color: '#FFFFFF',
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
                position: [barWidth / 2, -(barWidth + 20)],
                color: '#ffffff',
                fontSize: 12,
                fontStyle: 'bold',
                align: 'center',
            },
            data: yList,
        },
        {
            z: 2,
            type: 'pictorialBar',
            data: yList,
            symbol: 'diamond',
            symbolOffset: [0, '50%'],
            symbolSize: [barWidth, barWidth * 0.5],
            itemStyle: {
                normal: {
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
            symbol: 'diamond',
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
        {
            z: 4,
            type: 'pictorialBar',
            symbolPosition: 'end',
            data: yList,
            symbol: 'circle',
            symbolOffset: [0, -barWidth],
            symbolSize: [barWidth * 0.5, barWidth * 0.5],
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
