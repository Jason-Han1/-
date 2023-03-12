
var data = [
    {
        value: 3,
        name: '国铁',
    },
    {
        value: 22,
        name: '城轨',
    },
    {
        value: 2,
        name: '检修',
    },
    {
        value: 5,
        name: '海外',
    },
];

var legendData = ['国铁', '城轨', '检修', '海外'];
var colorArr = ['#FF9C98', '#3082FF', '#FEAF1B', '#00C9D9'];
function getRich() {
    let result = {};
    colorArr.forEach((v, i) => {
        (result[`normal${i}`] = {
            fontSize: 20,
            align: 'left',
            padding: [10, 4],
            color: '#4B525E',
        }),
            (result[`value${i}`] = {
                color: '#4B525E',
                align: 'left',
                fontSize: 14,
                padding: [2, 4],
            });
    });
    return result;
}
option = {
    color: colorArr,
    legend: {
        icon: 'circle',
        itemWidth: 10,
        itemHeight: 10,
        padding: [10, 20],
        backgroundColor: '#F9F9F9',
        borderRadius: 20,
        // 大小 和位置 文字样式
        itemGap: 8,
        x: 'center',
        top: 10,
        textStyle: {
            fontSize: 12,
            color: '#4B525E',
            fontFamily: 'PingFang',
        },
        data:legendData,
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius:'70%',
            center: ['43%', '50%'],
            selectedMode: 'single',
            selectedOffset: 10,
            clockwise: true,
            label: {
                normal: {
                    formatter: function (params, ticket, callback) {
                        aa = params.dataIndex;
                        var percent = 0;
                        var total = 0;
                        for (var i = 0; i < data.length; i++) {
                            total += data[i].value;
                        }
                        percent = ((params.value / total) * 100).toFixed(0) + '%';
                        const index = params.dataIndex;
                        // return [`{a${index}|${params.name}：${percent}}`].join('\n')
                        return [`{normal${index}|${percent}}\n{value${index}|${params.name}}`].join('\n');
                    },
                    padding: [0, -80],
                    rich: getRich(),
                },
            },
            labelLine: {
                length: 40,
                length2: 80,
            },
            itemStyle: {
                normal: {
                    shadowColor: 'rgba(0,0,0,0.4)',
                    shadowBlur: 15,
                },
            },
            data: data,
        },
    ],
};
