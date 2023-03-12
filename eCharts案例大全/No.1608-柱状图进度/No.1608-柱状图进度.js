
var myColor = ['#51FC4E', '#4C5FF5', '#FFE660', '#79F1FF', '#E76725'].reverse();

const propData=[
    { name: '项目1', value: '115.10', ratio: '28.99' },
    { name: '项目2', value: '84.57', ratio: '21.3' },
    { name: '项目3', value: '71.98', ratio: '18.13' },
    { name: '项目4', value: '28.21', ratio: '7.1' },
    { name: '项目5', value: '16.35', ratio: '4.12' },
];
const xData = propData.map((item) => item.name);
const yData = propData.map((item) => item.value);
let max = Math.ceil(Math.max(...yData) * 1.2);
let maxData = [max, max, max, max, max];
let emptyData = yData.map((v, i) => {
    let color = myColor[i];
    let item = {
        value: max,
        label: {
            formatter: '{a|' + v + '}',
            position: 'right',
            distance: -60,
            offset: [0, -30],
            rich: {
                a: {
                    fontSize: 14,
                    color: '#ffffff',
                },
            },
        },
    };
    return item;
});
var option = {
    backgroundColor: '#0A2E5D',
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: false,
    },
    xAxis: [
        {
            show: false,
        },
        {
            show: false,
        },
    ],
    yAxis: [
        {
            show: false,
            inverse: true,
            data: yData,
        },

        {
            show: true,
            data: yData,
            offset: -109,
            position: 'right',
            axisLabel: {
                lineHeight: 30,
                verticalAlign: 'bottom',
                textStyle: {
                    fontSize: 12,
                    color: '#fff',
                },
                formatter: '{value}kg',
            },
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
      
        {
            show: true,
            type: 'bar',
            barGap: '-100%',
            xAxisIndex: 1,

            barWidth: 8, //统计条宽度
            itemStyle: {
                
                normal: {
                    barBorderRadius: 8,
                    color: function (params) {
                        var num = myColor.length;
                        return {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: '#0F1F45',
                                },
                                {
                                    offset: 1,
                                    color: myColor[params.dataIndex % num],
                                },
                            ],
                        };
                    },
                },
            },
            // max: 0,
            labelLine: {
                show: false,
            },
            z: 2,
            data: yData,
        },
        {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: yData,
            xAxisIndex: 1,
            symbolSize: 14,
            itemStyle: {
                normal: {
                    color: function (params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num];
                    },
                    opacity: 1,
                },
            },
            z: 2,
        },
        {
            z: 1,
            show: true,
            type: 'bar',
            xAxisIndex: 1, 
            barGap: '-100%',
            barWidth: 7, //统计条宽度
            itemStyle: {
                normal: {
                    barBorderRadius: 7,
                    color: 'rgba(13, 55, 78, 1)',
                },
            },
            label: {
                normal: {
                    show: true,
                 
                    position: [0, -20],
                    rich: {
                        //富文本
                        white: {
                            //自定义颜色
                            color: '#ffffff',
                        },
                    },
                    formatter: function (data) {
                      
                        return '{white|' + xData[data.dataIndex] + '}';
                    },
                },
            },
            data: maxData,
        },
    ],
};
