//const colorList = ['#08daaa', '#ffd813', '#fea537', '#1e30ff', '#6571fc'];
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
    color: ['#08daaa', '#ffd813', '#fea537', '#1e30ff', '#6571fc'],
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
        data: ['汽油', '焦炭', '煤油', '原煤', '天然气'],
        orient: 'vertical',
        left: '5%',
        bottom: '5',
        itemWidth: 14,
        itemHeight: 14,
        itemGap: 10,
    },
    tooltip: {
        trigger: 'item',
    },
    series: [
        {
            type: 'pie',
            radius: [0, 160],
            center: ['50%', '40%'],
            roseType: 'area',
            //标题与数字分二行显示
            label: {
                formatter: '{name|{b}}\n{time|{d}%}',
                minMargin: 5,
                lineHeight: 20,
                rich: {
                    time: {
                        fontSize: 10,
                        color: 'auto',
                    },
                },
            },
            itemStyle: {
                normal: {
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowBlur: 10,
                },
            },
            data: [
                { value: 1048, name: '汽油' },
                { value: 735, name: '焦炭' },
                { value: 580, name: '煤油' },
                { value: 735, name: '原煤' },
                { value: 580, name: '天然气' },
            ],
        },
    ],
};
