let chartData = {
                caseOccupyTotal: 234,
                caseOccupyData: [
                    {
                        name: '破坏湿地资源行为',
                        value: 46,
                        percent: 23,
                    },
                    {
                        name: '破坏森林资源行为',
                        value: 76,
                        percent: 23,
                    },
                    {
                        name: '破坏野生动物资源行为',
                        value: 96,
                        percent: 23,
                    },
                    {
                        name: '其他破坏资源行为',
                        value: 4,
                        percent: 2,
                    }
                ],
            };

data = chartData.caseOccupyData;
// 总事件数
let total = chartData.caseOccupyTotal;
// 副标题
let subtext = '总事件';
// 配色数组
let colors = ['rgba(30, 171, 107, 1)', 'rgba(0, 220, 255, 1)', 'rgba(211, 191, 6, 1)', 'rgba(248, 122, 66, 1)'];

option = {
    backgroundColor: '#313131',
    title: {
        text: total,
        subtext,
        left: '33%',
        top: '45%',
        itemGap: 0,
        textStyle: {
            color: '#FFFFFF',
            fontSize: '25',
            fontWeight: 400
        },
        subtextStyle: {
            color: 'rgba(255, 255, 255, 0.4)',
            fontSize: '17',
            fontWeight: 400,
            lineHeight: '30'
        }
    },
    color: colors,
    legend: {
        itemWidth: 14,
        itemHeight: 8,
        show: true,
        left: "80%",
        top: "20%",
        itemGap:60,
        formatter: (name) => {
            return (
                // {name|' + item.name + '}
                "{name|" + name + "} {percent|" + data.find((item) => {
                    return item.name == name
                }).percent + '%' + "}"
            );
        },
        padding: [100,0,0,0],
        textStyle: {
            color: "#beceff", //元字颜色
            fontSize: 24,
            rich: {
                name: {
                    color: 'rgba(255, 255, 255, .6)',
                    fontSize: 12,
                },
                percent: {
                    color: '#FFFFFF',
                    fontSize: 12,
                }
            }
        },
    },
    tooltip: {
        show: true,
    },
    series: [
    {
        type: 'pie',
        roundCap: 0,
        hoverAnimation: false,
        radius: ['78%', '93%'],
        center: ['35%', '50%'],
        avoidLabelOverlap: false,
        label: {
            show: false,
            position: 'center'
        },
        emphasis: {
            show: false,
        },
        labelLine: {
            show: false
        },
        data: data,
    }]
};