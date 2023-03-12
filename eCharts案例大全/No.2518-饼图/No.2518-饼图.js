option = {
    backgroundColor: '#0a1a2a',
    tooltip: {
        show: true,
        alwaysShowContent: true,
        position: ['40%', '40%'],
        formatter: function(params) {
            return `<div style="color:red;font-size: 24px;line-height:32px;font-weight:bold;">${params.value}</div><div style="line-height:32px;text-align:center;font-size: 24px;font-weight:bold;color:white">${params.name}</div>`
        },
        backgroundColor: 'transparent',
        borderWidth: 0,
        textStyle: {
            color: '#fff'
        }
    },
    series: [
        {
            name: 'title',
            type: 'pie',
            zlevel: 3,
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['45%', '50%'],
            center: ['45%', '50%'],
            label: {
                show: false,

                formatter: (params) => {
                    return `
 ${params.name}: ${params.percent}%
 ${params.data.value}个
 `;
                },
                padding: [0, -30],
                textStyle: {
                    lineHeight: 25,
                },
            },
            labelLine: {
                show: true,
                // showAbove:true,
                length: 30,
                length2: 50,
            },
            itemStyle: {
                shadowBlur: 15,
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                borderColor: '#0a1a2a',
            },
            data: [
                {
                    value: 41,
                    name: '正常',
                    itemStyle: {
                        color: 'rgba(65, 243, 175, 1)',
                    },
                },
                {
                    value: 20,
                    name: '告警',
                    itemStyle: {
                        color: 'rgba(197, 17, 18, 1)',
                    },
                },
                {
                    value: 20,
                    name: '故障',
                    itemStyle: {
                        color: 'rgba(226, 177, 27, 1)',
                    },
                },
                {
                    value: 20,
                    name: '离线',
                    itemStyle: {
                        color: 'rgba(110, 115, 118, 1)',
                    },
                },
            ],
        },
        {
            name: '',
            type: 'pie',
            zlevel: 1,
            cursor: 'default',
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['37%', '50%'],
            center: ['45%', '50%'],
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            itemStyle: {
                normal: {
                    // shadowBlur: 15,
                    // shadowColor: 'rgba(0, 0, 0, 0.5)',
                    borderColor: '#0a1a2a',
                    // borderWidth:'10',
                },
                ellipsis: {
                    borderColor: '#0a1a2a',
                },
            },
            tooltip: {
                show: false,
            },
            data: [
                {
                    value: 41,
                    name: '正常',
                    itemStyle: {
                        color: 'rgba(65, 243, 175, 0.3)',
                    },
                },
                {
                    value: 20,
                    name: '告警',
                    itemStyle: {
                        color: 'rgba(197, 17, 18, 0.3)',
                    },
                },
                {
                    value: 20,
                    name: '故障',
                    itemStyle: {
                        color: 'rgba(226, 177, 27, 0.3)',
                    },
                },
                {
                    value: 20,
                    name: '离线',
                    itemStyle: {
                        color: 'rgba(110, 115, 118, 0.3)',
                    },
                },
            ],
        },
    ],
};

setTimeout(function () {

myChart.dispatchAction({
  type: 'showTip',
  seriesIndex:0 ,//第几条series
  dataIndex: 1,//第几个tooltip
  });
},500);
