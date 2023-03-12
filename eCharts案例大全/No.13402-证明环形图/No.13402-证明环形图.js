//  颜色集合
var colorList = [
    '#D271EB', '#B799D7', '#FDD826', '#F8A3AA', '#96E54B', '#259EF3', '#69D7CB', '#ee82ed', '#8fca5f', '#b995f5'
];
var originalData = [{
        value: 100,
        name: '居住证明'
    },
    {
        value: 100,
        name: '死亡证明'
    },
    {
        value: 100,
        name: '应征入伍政审意见证明'
    },
    {
        value: 100,
        name: '志愿服务证明'
    },
    {
        value: 100,
        name: '社区矫正人员情况证明'
    },
    {
        value: 100,
        name: '社会实践证明'
    },
    {
        value: 100,
        name: '发展党员证明'
    }
];
echarts.util.each(originalData, function(item, index) {
    item.itemStyle = {
        normal: {
            color: colorList[index]
        }
    };
});
option = {
    backgroundColor: '#0F2360',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        left: 'center',
        bottom: 30,
        padding: 5,
        itemWidth: 20,
        itemHeight: 8,
        textStyle: {
            color: '#fff'
        },
        data: ['居住证明', '死亡证明', '应征入伍政审意见证明', '志愿服务证明', '社区矫正人员情况证明', '社会实践证明', '发展党员证明']
    },
    series: [{
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            selectedOffset: 16, //选中是扇区偏移量
            startAngle: 90,
            radius: ['20%', '39%'],

            label: {
                normal: {
                    show: false,
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 8,
                    borderColor: '#0F2360',
                },
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 5,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.2)'
                }
            },
            data: originalData
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '43%'],
            label: {
                normal: {
                    formatter: '{per|{d}%}',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        abg: {
                            backgroundColor: '#333',
                            width: '100%',
                            align: 'right',
                            height: 22,
                            borderRadius: [4, 4, 0, 0]
                        },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#0F2360',
                            padding: [2, 4],
                            fontSize: 16,
                            borderRadius: [4, 4, 4, 4]
                        }
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 30,
                    length2: 40,
                    lineStyle: {
                        type: 'dashed'
                    }
                },
            },
            itemStyle: {
                normal: {
                    borderWidth: 8,
                    borderColor: '#0F2360',
                },
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 5,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.2)'
                }
            },
            data: originalData
        }
    ]
};