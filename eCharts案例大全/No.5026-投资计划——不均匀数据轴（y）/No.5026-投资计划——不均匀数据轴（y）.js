// 源数据(自己造的数据，所以处理的时候没有针对特殊进行处理)
const sourceData = [{
        date: '2020-01-01',
        amount: 1000000
    },
    {
        date: '2020-02-01',
        amount: 100000
    },
    {
        date: '2020-03-01',
        amount: 200000
    },
    {
        date: '2020-04-01',
        amount: 50000
    },
    {
        date: '2020-05-01',
        amount: 20000000
    },
    {
        date: '2020-06-01',
        amount: 300000000
    },
    {
        date: '2020-07-01',
        amount: 400000
    },
    {
        date: '2020-08-01',
        amount: 3000000000
    },
    {
        date: '2020-09-01',
        amount: 550000
    },
];

// 定义数据间隔
const dataInterval = [0, 100000, 1000000, 10000000, 100000000, 1000000000, 2000000000, 3000000000];

// 处理源数据
const investAmount = sourceData.map(item => {
    const amount = item.amount;

    // 寻找在数据间隔里小于amount的最大值
    const min_v = Math.max(...dataInterval.filter(v => v <= amount));
    // 寻找在数据间隔里大于amount的最小值
    const max_v = Math.min(...dataInterval.filter(v => v > amount));

    // 寻找 min_v 所在的下标
    const index = dataInterval.findIndex(v => v === min_v);

    // 计算该amount在y轴上应该展示的位置
    const y_value = (((amount - min_v) / (max_v - min_v)) * 10) + index * 10;

    return {
        value: y_value,
        realValue: amount,
        date: item.date
    };
}).filter(x => x);

// 配置
option = {
    title: {
        text: '投资计划——不均匀数据轴（y）',
        subtext: '点击查看代码讲解博客 \n\n 贴出地址以防万一：https://blog.csdn.net/s_y_w123/article/details/109801701',
        sublink: 'https://blog.csdn.net/s_y_w123/article/details/109801701',
        subtextStyle:{
            color:'#5094D5',
            fontSize:15,
            fontWeight:'bold'
        }
    },
    grid:{
        top: '15%'
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: (v) => {
            const date = v[0].data.date;
            const value = v[0].data.realValue;
            return `<div>
                <span>日期：${date}</span><br>
                <span>金额：${value / 10000}（万）</span>
            </div>`
        }
    },
    xAxis: {
        type: 'category',
        data: investAmount.map(item => item.date)
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: (v, i) => {
                if (i === 0) {
                    v = '0'
                }
                if (i === 1) {
                    v = '10万'
                }
                if (i === 2) {
                    v = '100万'
                }
                if (i === 3) {
                    v = '1千万'
                }
                if (i === 4) {
                    v = '1亿'
                }
                if (i === 5) {
                    v = '10亿'
                }
                if (i === 6) {
                    v = '20亿'
                }
                if (i === 7) {
                    v = '30亿'
                }
                return v;
            }
        }
    },
    series: [{
        name: '投资计划',
        type: 'bar',
        data: investAmount
    }]
};