const colorList = ['#ffd813', '#08daaa', '#6571fc'];
let index = 0;
function fun() {
    var timer = setInterval(function () {
        myChart.dispatchAction({
            type: 'hideTip',
            seriesIndex: 0,
            dataIndex: index,
        });
        // 显示提示框
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: index,
        });
        // 取消高亮指定的数据图形
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: index == 0 ? 5 : index - 1,
        });
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: index,
        });
        index++;
        if (index > 5) {
            index = 0;
        }
    }, 3000);
}
fun();
setTimeout(function () {
    fun();
}, 5000);
option = {
    //标题
    title: {
        text: '近五年全省清洁能源发电及电能占比情况',
        textStyle: {
            color: '#212b43',
            fontSize: 14,
            //fontWeight: 'normal',
        },
    },
    //图例组件
    legend: {
        bottom: '0;',
    },
    tooltip: {
        trigger: 'item',
    },
    series: [
        {
            type: 'pie',
            radius: [20, 160],
            center: ['50%', '40%'],

            roseType: 'area',
            itemStyle: {
                color: (params) => {
                    return colorList[params.dataIndex];
                },
                borderRadius: 8,
            },
            //标题与数字一行显示
            label: {
                show: true,
                position: 'outside',
                formatter: '{a|{b}：{d}%}\n{hr|}',
                rich: {
                    hr: {
                        /*
            再次声明一下，大家在这里修改之后不要点击上面的保存！
    不要点击保存！不要点击保存！重要的事情说三遍！
    你的修改会覆盖我的原代码的！感谢理解！
                                --2020/8/4  by--suwanqing
                    */
                        backgroundColor: 'auto',
                        borderRadius: 3,
                        width: 3,
                        height: 3,
                        padding: [3, 3, 0, -12],
                    },
                    a: {
                        padding: [-30, 15, -20, 15],
                        color: 'auto',
                    },
                },
            },
            //标题与数字分二行显示
            // label: {
            //     alignTo: 'edge',
            //     formatter: '{name|{b}}\n{time|{d}%}',
            //     minMargin: 5,
            //     edgeDistance: 10,
            //     lineHeight: 30,
            //     rich: {
            //         time: {
            //             fontSize: 10,
            //             color: 'auto'
            //         }
            //     }
            // },
            data: [
                { value: 1048, name: '初始分配' },
                { value: 735, name: '交易公配' },
                { value: 580, name: 'CCER' },
            ],
        },
    ],
};
