var color = ["#6236FF", "#0091FF", "#32C5FF", "#44D7B6", "#6DD400", "#F7B500", "#FA6400", "#E02020", "#B620E0", "#6D7278"];

option = {
    color: color,
    backgroundColor: '#fff',
    title: {
        text: '南丁格尔',
        left: 'center',
        top: '50%',
        textStyle: {
            fontSize: 22,
            color: '#fff',
            fontWeight: 'normal'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        right: 20,
        top: 20
    },
    series: [{
        type: 'pie',
        avoidLabelOverlap: true,
        roseType: 'radius',
        radius: ['30%', '60%'],
        data: [{
                value: 294,
                name: '社会'
            }, {
                value: 63,
                name: '経済'
            },
            {
                value: 30,
                name: '気候'
            },
            {
                value: 23,
                name: '政治'
            },
            {
                value: 19,
                name: '文化・芸術'
            },
            {
                value: 11,
                name: 'スポーツ'
            },
            {
                value: 8,
                name: '環境'
            },
            {
                value: 6,
                name: '科学・技術'
            },
            {
                value: 4,
                name: '運輸・通信'
            },
            {
                value: 2,
                name: '軍事'
            }
        ],
        label: {
            normal: {
                formatter: '{font|{b}: {c}}\n{hr|}\n{font|{d}%}\n',
                rich: {
                    font: {
                        fontSize: 20,
                        padding: [5, 0],
                        color: '#000'
                    },
                    hr: {
                        height: 0,
                        borderWidth: 1,
                        width: '100%',
                        borderColor: '#000'
                    }
                }
            },
        },
        labelLine: {
            lineStyle: {
                color: '#000'
            }
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0,0,0,0.5)'
            }
        }
    }]
};
