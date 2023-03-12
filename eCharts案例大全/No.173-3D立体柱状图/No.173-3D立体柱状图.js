maxData = [10, 100, 100, 100];
yList = [80, 100, 100, 100];
xList = ['寿命≤100', '100<寿命≤200', '200<寿命≤300', '寿命>300'];
color = ['#3070cf', '#2fd28d', '#c4742d', '#c42d2d'];
xData = xList.map((item, index) => {
    return {
        value: item,
        textStyle: {
            color: color[index],
        },
    };
});
dom = 400;
barWidth = dom / 10;
colors = [
    {
        type: 'linear',
        x: 1,
        x2: 1,
        y: 0,
        y2:1,
        colorStops: [
            {
                 offset: 0.8,  
                color: 'rgba(0,255,252,0.1)',
            },
            {
               
                offset: 0,
                color: '#30a4cf',
            },
   /*         {
        offset: 0.8,   // 透明度
        color: 'rgba(0,255,252,0.1)'
    }, {
        offset: 0.5,
        color: '#6DD4E5'
    }, {
        offset: 0.2,
        color: '#0EADC9'
    }, {
        offset: 0.1,
        color: '#218bd1'
    }*/
        ],
    },
    {
        type: 'linear',
        x: 0,
        x2: 0,
        y: 0,
        y2: 1,
        colorStops: [
            {
                offset: 0,
                color: '#78cc40',
            },
            {
                offset: 1,
                color: '#2fd28d',
            },
        ],
    },
    {
        type: 'linear',
        x: 0,
        x2: 0,
        y: 0,
        y2: 1,
        colorStops: [
            {
                offset: 0,
                color: '#f5a43a',
            },
            {
                offset: 1,
                color: '#c4742d',
            },
        ],
    },
    {
        type: 'linear',
        x: 0,
        x2: 0,
        y: 0,
        y2: 1,
        colorStops: [
            {
                offset: 0,
                color: 'rgba(245,89,58,0.78)',
            },
            {
                offset: 1,
                color: 'rgba(196,45,45,1)',
            },
        ],
    },
    {
        type: 'linear',
        x: 0,
        x2: 0,
        y: 0,
        y2: 1,
        colorStops: [
            {
                offset: 0,
                color: '#f5593a',
            },
            {
                offset: 1,
                color: '#c42d2d',
            },
        ],
    },
];
colors1 = [
    {
        type: 'linear',
        x: 0,
        x2: 0,
        y: 1,
        y2: 0,
        colorStops: [
            {
                offset: 0.3,
                color: '#4bcde4',
            },
            {
                offset: 1,
                color: '#4b88e4',
            },
        ],
    },
    {
        type: 'linear',
        x: 0,
        x2: 0,
        y: 1,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: '#c6e755',
            },
            {
                offset: 1,
                color: '#92ee4e',
            },
        ],
    },
    {
        type: 'linear',
        x: 0,
        x2: 0,
        y: 1,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: '#ebe962',
            },
            {
                offset: 1,
                color: '#ffb401',
            },
        ],
    },
    {
        type: 'linear',
        x: 0,
        x2: 0,
        y: 1,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: '#fa8c56',
            },
            {
                offset: 1,
                color: '#f5593a',
            },
        ],
    },
];
option = {
    backgroundColor: '#091126',

    //提示框

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
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.4)',
            },
            symbol: ['none', 'arrow'],
            symbolOffset: [0, 25],
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.2)',
            },
        },
        axisLabel: {
            rotate: 0,
            fontSize: 12,
        },
    },
    yAxis: {
        show: true,
        splitNumber: 4,
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.4)',
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
    grid: {
        top: '52%',
        right: '50%',
        containLabel: true, // gird 区域是否包含坐标轴的刻度标签
    },
    series: [
        {
            type: 'bar',
            barWidth: barWidth,
            symbolOffset: ['10%', '50%'],
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colors[params.dataIndex % 4];
                    },
                },
            },
            label: {
                show: true,
                position: 'top',
                color: '#ffffff',
                fontSize: 12,
                formatter: function (params) {
                    return params.value + '%';
                },
                offset: [0, -20],
                align: 'center',
            },
            data: yList,
        },

        {// 实体柱状图底部
            z: 4,
            type: 'pictorialBar',
            data: yList,

            symbolOffset: ['0%', '0%'],
            symbolSize: [barWidth, barWidth * 0.3],
            itemStyle: {
                normal: {
                    color: function (params) {
                        return 'rgba(0,255,252,0.1)';
                    },
                },
            },
        },
        {  // 实体柱状图顶部
            z: 3,
            type: 'pictorialBar',
            symbolPosition: 'end',
            data: yList,
            symbolOffset: ['0%', '-50%'],
            symbolSize: [barWidth, barWidth * 0.3],
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    color: function (params) {
                        return colors1[params.dataIndex % 4];
                    },
                },
            },
        },
      /*  {
             z: 3,
            data: maxData,
            type: 'bar',
            barMaxWidth: 'auto',
            barWidth: barWidth + 20,
            barGap: '-125%',
            zlevel: -1,
            itemStyle: {
                color: 'rgba(0,255,252,0.1)',
            },
        },
        {    // 透明顶部
            z: 0,
            type: 'pictorialBar',
            symbolPosition: 'end',
            data: maxData,
            symbolOffset: ['-8%', '-50%'],  // 位置
            symbolSize: [barWidth + 20, barWidth * 0.3],
            itemStyle: {
                color: function (params) {
                    return 'rgba(0,255,252,0.1)';
                },
            },
        },*/
    ],
};
