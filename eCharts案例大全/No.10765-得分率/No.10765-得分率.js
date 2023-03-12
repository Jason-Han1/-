var scoreRect = {
    green: '/asset/get/s/data-1563263941682-pcRQujm1T.png',
    pink: '/asset/get/s/data-1562914753926-Cb2fqWDcr.png',
};

var colors = {
    green: '#2DBA86',
    pink: '#ED2176',
    orange: '#f47f29',
    blue: '#33aecf',
};

var data = {
    knowledge: ['1.了解古典名著的代表性作品', '2.借助说明书解决生活问题', '3.关注说明书中的细节提示', '4.同音字、多音字、近义词辨析', '5.填写歇后语，创编歇后语'],
    scoreRate: [
        [20, 0],
        [50, 1],
        [0, 2],
        [100, 3],
        [75, 4]
    ],
    maxSore: [100, 100, 100, 100, 100],
    level: ['了解', '掌握运用', '掌握运用', '掌握运用', '理解'],
    questionNo: ['5', '15,16', '17', '2,3', '7,8'],
};

var symbolData = [];
data.scoreRate.forEach((d, i) => {
    symbolData.push({
        value: d,
        symbol: i % 2 === 0 ? 'image://' + scoreRect.green : 'image://' + scoreRect.pink,
    });
});

option = {
    animation: false,
    grid: {
        //bottom:'95%'
        top: 25,
        bottom: 25,
        left: -50,
        right: 320,
        containLabel: true,
    },
    xAxis: {
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        splitLine: {
            show: false,
        }
    },
    yAxis: {
        data: data.knowledge,
        inverse: true, //反向坐标轴
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            align: 'left',
            margin: 150,
            fontSize: 12,
            lineHeight: 15,
            verticalAlign: 'middle',
            fontFamily: 'SourceHanSansCN',
            fontWeight: 'normal',
            formatter: function(v) {
                if (v.length > 9)
                    return v.substr(0, 9) + '\n' + v.substr(9);
                else
                    return v;
            }
        },
        splitLine: {
            show: false,
        }
    },
    series: [{
            type: 'bar',
            data: data.maxSore,
            barWidth: 2,
            color: '#717071',
            label: {
                show: true,
                position: ['100%', -6],
                formatter: function(v) {
                    return '{b| }{level|' + data.level[v.dataIndex] + '}{b| }{questionNo|' + data.questionNo[v.dataIndex] + '}';
                },
                rich: {
                    level: {
                        fontSize: 12,
                        lineHeight: 15,
                        verticalAlign: 'middle',
                        align: 'center',
                        fontFamily: 'SourceHanSansCN',
                        fontWeight: 'normal',
                        width: 100,
                    },
                    questionNo: {
                        fontSize: 12,
                        lineHeight: 15,
                        verticalAlign: 'middle',
                        align: 'center',
                        fontFamily: 'SourceHanSansCN',
                        fontWeight: 'normal',
                        width: 100,
                    },
                    b: {
                        width: 50,
                    }
                }
            }
        },
        {
            type: 'scatter',
            symbolSize: [59.15, 22.95], //1 : 0.388
            symbolOffset: [10, 7],
            color: function(p) {
                return p.dataIndex % 2 === 0 ? colors.green : colors.pink;
            },
            label: {
                show: true,
                formatter: '{a|{@[0]}%}',
                rich: {
                    a: {
                        fontSize: 12,
                        lineHeight: 12,
                        verticalAlign: 'middle',
                        fontFamily: 'SourceHanSansCN',
                        fontWeight: 'normal',
                        width: 40,
                        align: 'center',
                    }
                },
                position: [0, -13],
            },
            itemStyle: {
                opacity: 1,
            },
            data: symbolData
        }
    ]
};