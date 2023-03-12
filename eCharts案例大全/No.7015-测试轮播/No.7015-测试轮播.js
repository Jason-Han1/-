const color = ['#3AA7F9', '#F56C7C', '#FD9A36', '#EBE028', '#31CE65', '#20DACD', '#D671F5', '#F430E8', '#8A31FB'];
const mockData = [{
        name: '直接访问',
        value: 335
    },
    {
        name: '邮件营销',
        value: 310
    },
    {
        name: '联盟广告',
        value: 234
    },
    {
        name: '视频广告',
        value: 135
    },
    {
        name: '搜索引擎',
        value: 1548
    }
];
const legend = [];
let total = 0;
for(let i in mockData){
    total += mockData[i].value;
    legend.push(mockData[i].name)
}
const formatName = (name, value) => `${name}\n${value}\n${((value*100/total).toFixed(2))+'%'}`;
option = {
    backgroundColor: '#4A5886',
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: legend
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
            show: false,
            position: 'center'
        },
        emphasis: {
            label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
            }
        },
        labelLine: {
            show: false
        },
        data: mockData.map((item, index) => {
            return {
                value: item.value,
                name: formatName(item.name, item.value),
                itemStyle: {
                    normal: {
                        color: color[index],
                        shadowColor: color[index],
                        shadowBlur: 7
                    }
                },
            }
        })
    }]
};
myChart.setOption(option);
let i = 0;

let timer = ''

function autoRresh() {
    clearInterval(timer)
    timer = setInterval(() => {
        if (i > mockData.length - 1) {
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: i - 1
            });
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: 0
            });
            i = 1;
        } else {
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: i
            });
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: i - 1
            });
            i++;
        }
    }, 2000)
}
autoRresh();
myChart.on('mouseover', () => {
    if (timer) {
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: i - 1
        });
        i = 0;
    }

    clearInterval(timer)
})
myChart.on('mouseout', (e) => {
    autoRresh();
})