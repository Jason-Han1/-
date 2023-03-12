var dataList = [{
        name: '美容汽车服务',
        value: 125
    },
    {
        name: '保养服务',
        value: 125
    },
    {
        name: '安全检查服务',
        value: 125
    },
    {
        name: '目的地接送',
        value: 125
    },
    {
        name: '代驾',
        value: 125
    },
    {
        name: '非事故道路救援',
        value: 125
    },
    {
        name: '故障服务',
        value: 125
    },
    {
        name: '车管所服务',
        value: 125
    }
]

const colorList = ['#5EA6FE', '#45FBF7', '#48FF58', '#EAE809', '#FF7E3F', '#FF4746', '#E177F9', '#4E6BFF'];

function appendBaseColor(dataList, colorList, opacity) {
    const temp = [];
    for (let i in dataList) {
        const tempObj = {
            ...dataList[i],
            itemStyle: {
                color: colorList[i],
                opacity: opacity
            }
        };
        temp.push(tempObj)
    }
    return temp;
}

option = {
    backgroundColor: '#222',
    series: [{
            type: 'pie',
            radius: [0, 66],
            label: {
                normal: {
                    show: false
                }
            },
            itemStyle: {},
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: appendBaseColor(dataList, colorList, 0.6)
        },
        {
            type: 'pie',
            radius: [85, 110],
            label: {
                normal: {
                    fontSize: 14,
                }
            },
            labelLine: {
                show: false
            },
            data: appendBaseColor(dataList, colorList, 1)
        }
    ]
};

myChart.setOption(option);
startLoopMove()

function startLoopMove() {
    let idx = 0;
    setInterval(() => {
        clearSelectedStatus();
        option.series[0].data[idx]['selected'] = true;
        option.series[0].data[idx]['itemStyle']['opacity'] = 1;
        option.series[1].data[idx]['selected'] = true;
        myChart.setOption(option);
        idx++;
        if (idx >= dataList.length) {
            idx = 0;
        }
    }, 1000)
}

function clearSelectedStatus() {
    option.series[0].data = appendBaseColor(dataList, colorList, 0.6)
    option.series[1].data = appendBaseColor(dataList, colorList, 1)
    myChart.setOption(option);
}