const attackSourcesColor = [
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
        { offset: 0, color: 'rgba(255, 85, 85, 0.1)' },
        { offset: 1, color: 'rgba(255, 85, 85, 1)' },
    ]),
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
        { offset: 0, color: 'rgba(255, 194, 0, 0.1)' },
        { offset: 1, color: 'rgba(255, 194, 0, 1)' },
    ]),
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
        { offset: 0, color: 'rgba(49, 201, 81, 0.1)' },
        { offset: 1, color: 'rgba(49, 201, 81, 1)' },
    ]),
    new echarts.graphic.LinearGradient(0, 1, 1, 1, [
        { offset: 0, color: 'rgba(0, 221, 255, 0.1)' },
        { offset: 1, color: 'rgba(0, 221, 255, 1)' },
    ]),
];
const shadowSourcesColor = [
    new echarts.graphic.LinearGradient(0, 1, 0, 0, [
        { offset: 0, color: 'rgba(255, 85, 85, 0)' },
        { offset: 1, color: 'rgba(255, 85, 85, 0.44)' },
    ]),
    new echarts.graphic.LinearGradient(0, 1, 0, 0, [
        { offset: 0, color: 'rgba(255, 194, 0, 0)' },
        { offset: 1, color: 'rgba(255, 194, 0, 0.44)' },
    ]),
    new echarts.graphic.LinearGradient(0, 1, 0, 0, [
        { offset: 0, color: 'rgba(49, 201, 81, 0)' },
        { offset: 1, color: 'rgba(49, 201, 81, 0.44)' },
    ]),
    new echarts.graphic.LinearGradient(0, 1, 0, 0, [
        { offset: 0, color: 'rgba(0, 221, 255, 0)' },
        { offset: 1, color: 'rgba(0, 221, 255, 0.44)' },
    ]),
];
const borderColor = ['rgba(255, 85, 85, 1)', 'rgba(255, 194, 0, 1)', 'rgba(49, 201, 81, 1)', 'rgba(0, 221, 255, 1)'];

const xdata = ['王玲仙', '刘忠清', '方刚强', '方朝阳', '朱新亮', '李炬锋'];

const seriesData = [3,1,1,1,1,1];
const resultData = []
seriesData.forEach(function(item, i) {
        const itemStyle = {
          borderColor: i > 3 ? borderColor[3] : borderColor[i],
          color: i > 3 ? shadowSourcesColor[3] : shadowSourcesColor[i]
        };
        resultData.push({
          value: item,
          itemStyle: itemStyle
        });
        return resultData
      });
      
option = {
    backgroundColor: '#1C262F',
    yAxis: {
        data: xdata,
        type: 'category',
        inverse: true,
        axisLabel: {
            fontSize: 12,
            axisTick: false,
            color: '#FFFFFF',
            fontWeight: 400,
            formatter(value = '') {
                let result = '',
                    index = 0;
                if (value.length <= 7) {
                    return value;
                }
                while (index < value.length) {
                    result += value.substring(index, (index += 7)) + '\n';
                }
                return result;
            },
            show: true,
        },
        axisLine: false,
    },
    xAxis: {
        position: 'top',
        type: 'value',
        axisLabel: {
            fontSize: 12,
            color: '#FFFFFF',
            fontWeight: 400,
            fontFamily: 'OPPOSans',
            formatter: '{value}%',
        },
        splitLine: {
            show: false,
        },
        axisLine: {
            show: true,

            lineStyle: {
                color: '#ffffff',
                opacity: 0.3,
            },
        },
        axisTick: false,
    },
    series: [
        {
            type: 'bar',
            barWidth: 4,
            data: resultData,
            color: '#fff',
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(255,192,69, 0.1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(255,192,69,1)',
                        },
                    ],

                    globalCoord: false, // 缺省为 false
                },
            },
            label: {
                show: true,
                position: 'right',
                distance: 12,
                formatter: '{c}%',
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                    distance: 10,
                },
            },
        },
        {
            type: 'scatter',
            symbolSize: 14,
            itemStyle: {
                borderWidth: 1.5,
                borderColor: '#FFC045',
                opacity: 1,
                color: {
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    type: 'linear',
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(255, 192, 69,0)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(255, 192, 69, 0.44)',
                        },
                    ],
                },
            },
            silent: true,
            data: resultData
        },
        {
            type: 'scatter',
            symbolSize: 6,
            itemStyle: {
                color: {
                    type: 'radial',
                    r: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#FFFFFF',
                        },
                        {
                            offset: 1,
                            color: 'rgba(255,255,255, 0)',
                        },
                    ],
                    global: false,
                },
            },
            silent: true,
            data: [3, 1, 1, 1, 1, 1],
        },
    ],
};
