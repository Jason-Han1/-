var colorList = ['#22D7BB', '#24AAFF', '#5EDDF8', '#FCB840', '#F9D660'];
var data = [15, 36, 10, 15, 36];
var dataChart = [];
function sum(data) {
    return eval(data.join('+'));
}
var sum = sum(data);
data.map((item, index) => {
    if (item != 0) {
        dataChart.push(
            {
                value: item,
                itemStyle: {
                    normal: {
                        color: colorList[index],
                    },
                },
            },
            {
                value: sum / 150,
                itemStyle: {
                    normal: {
                        color: '#FFFFFF',
                    },
                },
            }
        );
    }
});
option = {
    backgroundColor: '#FFFFFF',
    color: colorList,
    grid: {
        bottom: 150,
        left: 0,
        right: '10%',
    },
    title: {
        subtext: '签约额',
        text: '业务',
        top: '45%',
        left: 'center',
        textStyle: {
            color: '#656A73',
            fontSize: 24,
        },
        subtextStyle: {
            color: '#656A73',
            fontSize: 24,
        },
    },

    legend: {
        show: false,
        orient: 'vertical',
        top: 'middle',
        right: '5%',
        textStyle: {
            color: '#f2f2f2',
            fontSize: 25,
        },
        icon: 'roundRect',
    },
    series: [
        // 边框设置
        {
            radius: ['45%', '55%'],
            center: ['50%', '50%'],
            type: 'pie',
            hoverAnimation: false,
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: false,
                },
            },
            labelLine: {
                normal: {
                    show: true,
                },
                emphasis: {
                    show: false,
                },
            },
            animation: false,
            tooltip: {
                show: false,
            },
            itemStyle: {
                normal: {
                    color: 'rgba(206,213,225,0.12)',
                },
            },
            data: [1],
        },
        // 内圈
        {
            radius: ['0%', '32%'],
            center: ['50%', '50%'],
            type: 'pie',
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: false,
                },
            },
            hoverAnimation: false,
            labelLine: {
                normal: {
                    show: true,
                },
                emphasis: {
                    show: false,
                },
            },
            animation: false,
            tooltip: {
                show: false,
            },
            itemStyle: {
                normal: {
                    color: 'rgba(206,213,225,0.3)',
                    borderColor: '#CED5E1',
                    borderWidth: 1,
                },
            },
            data: [1],
        },
        // 主要展示层的
        {
            radius: ['33%', '50%'],
            center: ['50%', '50%'],
            type: 'pie',
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colorList[params.dataIndex];
                    },
                },
            },

            label: {
                show: false,
            },
            labelLine: {
                normal: {
                    length: 20,
                    length2: 150,
                    lineStyle: {
                        width: 1,
                    },
                },
            },
            data: dataChart,
        },
    ],
};
