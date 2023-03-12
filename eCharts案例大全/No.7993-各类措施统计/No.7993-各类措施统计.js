var legend = ['特色产业扶贫', '生态补偿扶贫', '劳务协助扶贫', '社会保障兜底扶贫',
    '危房改造脱贫', '医疗保障与社会保障扶贫', '教育助学扶贫', '异地搬迁扶贫', '金融扶贫', '饮水安全'
];

var data = [];
for (let i = 0; i < legend.length; i++) {
    data.push({
        name: legend[i],
        value: (Math.random() * 100000).toFixed(0)
    });
}

option = {
    backgroundColor: '#05274C',
    color: ['#2AC9FD', '#76FBC0', '#35C96E', '#FCC708', '#48B188', '#5957C2', '#4A5D73'],
    tooltip: { //提示框
        trigger: "item",
        triggerOn: "mousemove",
        backgroundColor: "rgba(1,70,86,1)",
        borderColor: "rgba(0,246,255,1)",
        borderWidth: 0.5,
        textStyle: {
            fontSize: 14
        }
    },
    title: [{
        text: 18653,
        subtext: '救助人口',
        textStyle: {
            fontSize: 20,
            color: "#fff"
        },
        subtextStyle: {
            fontSize: 20,
            color: '#fff'
        },
        textAlign: "center",
        x: '50%',
        y: '47%',
    }],
    series: [{
            color: ['#2AC9FD', '#76FBC0', '#35C96E', '#FCC708', '#48B188', '#5957C2'],
            type: 'pie',
            radius: ['62', '100'],
            labelLine: {
                normal: {
                    length: 25,
                    length2: 120,
                    lineStyle: {
                        type: 'solid'
                    }
                }
            },
            label: {
                normal: {
                    formatter: (params) => {
                        console.log(params);
                        return '{b| ' + params.name + '}  ' + '{c|' + params.percent.toFixed(0) + '%}'
                    },
                    borderWidth: 0,
                    borderRadius: 4,
                    padding: [0, -86],
                    height: 70,
                    fontSize: 13,
                    align: 'center',
                    color: '#3494BD',
                    rich: {
                        b: {
                            fontSize: 12,
                            lineHeight: 20,
                            color: '#41B3DC',
                            padding: [0, 0, 5, 0]
                        },
                        c: {
                            fontSize: 20,
                            lineHeight: 20,
                            color: 'orange'
                        }

                    }
                }
            },
            data: data,
        },
        {
            type: 'pie',
            radius: ['50', '51'],
            data: [100],
            label: {
                show: false
            }
        }
    ]
};