var yList = [61, 86, 67, 43, 52, 70, 28, 107];
var maxData = [200, 200, 200, 200, 200, 200, 200, 200];
var xList = ['杭商院北门', '港边路口', '张家口', '马冢', '马家村', '未来学校', '金竹新村', '学府小学'];
var xData = xList.map((item, index) => {
    return {
        value: item,
        textStyle: {
            color: '#00dcf1',
        },
    };
});
var dom = 800;
var barWidth = dom / 20;
var colors = [
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
            {
                offset: 0,
                color: '#d088c2',
            },
            {
                offset: 0,
                color: 'rgba(204,27,170,0.3)',
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
            {
                offset: 0,
                color: '#9d87de',
            },
            {
                offset: 0,
                color: 'rgba(73,21,230,0.3)',
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
            {
                offset: 0,
                color: '#83bac9',
            },
            {
                offset: 0,
                color: 'rgba(17,166,208,0.3)',
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
            {
                offset: 0,
                color: '#a9dc97',
            },
            {
                offset: 0,
                color: 'rgba(72,221,18,0.3)',
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
            {
                offset: 0,
                color: '#dbcdaa',
            },
            {
                offset: 0,
                color: 'rgba(222,168,33,0.3)',
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
            {
                offset: 0,
                color: '#d5aa9f',
            },
            {
                offset: 0,
                color: 'rgba(219,62,19,0.3)',
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
            {
                offset: 0,
                color: '#e0caf3',
            },
            {
                offset: 0,
                color: 'rgba(142,21,248,0.3)',
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
            {
                offset: 0,
                color: '#d088c2',
            },
            {
                offset: 0,
                color: 'rgba(204,27,170,0.3)',
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
            {
                offset: 0,
                color: '#9d87de',
            },
            {
                offset: 0,
                color: 'rgba(73,21,230,0.3)',
            },
        ],
    },
];
option = {
    backgroundColor:'black',
    grid: {
        left: '15%',
        right: '3%',
        top: '10%',
        bottom: '15%',
    },
    xAxis: {
        nameTextStyle: {
            color: '#00dcf1',
            padding: [0, 0, 0, 20],
        },
        data: xData,
        show: true,
        type: 'category',
        axisLabel: {
            //rotate: -30,
            fontSize: 12,
            lineHeight: 30,
            fontFamily: 'siyuan',
            //fontStyle: 'italic'
        },
        axisTick: {
            show: false,
        },
    },
    yAxis: {
        show: true,
        splitNumber: 4,
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: 'rgba(255,255,255,0.2)',
            },
        },
        axisLabel: {
            color: '#00dcf1',
        },

        axisTick: {
            //y轴刻度线
            show: false,
        },
        axisLine: {
            //y轴
            show: false,
        },
    },
    series: [
        {
            type: 'bar',
            barWidth: barWidth,
            showBackground: true,
            itemStyle: {
                normal: {
                    color: function (params) {
                        //console.log(params)
                        return colors[params.dataIndex % 7];
                    },
                },
            },
            label: {
                show: true,
                position: [barWidth / 2, -(barWidth - 15)],
                color: '#fff',
                fontSize: 12,
                fontStyle: 'bold',
                align: 'center',
            },

            data: yList,
        },
        {
            data: maxData,
            type: 'bar',
            barMaxWidth: 'auto',
            barWidth: barWidth,
            barGap: '-100%',
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colors[params.dataIndex % 7].colorStops[5].color;
                    },
                },
            },
            zlevel: -1,
        },

        {
            z: 2,
            type: 'pictorialBar',
            data: yList,
            symbol: 'diamond',
            symbolOffset: [0, '50%'],
            symbolSize: [barWidth, barWidth * 0.25],
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
            symbolSize: [barWidth, barWidth * 0.25],
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
            z: 3,
            type: 'pictorialBar',
            symbolPosition: 'end',
            data: maxData,
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [barWidth, barWidth * 0.25],
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    color: function (params) {
                        return colors[params.dataIndex % 7].colorStops[4].color;
                    },
                },
            },
        },
    ],
};
