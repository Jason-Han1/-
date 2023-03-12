const chartData = { ONE: 10, TWO: 20, THREE: 30 ,num:60};
const seriesData = [];
const legendData = [];
const nameList = [
    { key: 'ONE', text: '一级问题', left: '15%', right: null, bottom: '20%' },
    { key: 'TWO', text: '二级问题', left: null, right: '15%', bottom: '20%' },
    { key: 'THREE', text: '三级问题', left: 'center', right: null, bottom: '10%' },
];
nameList.forEach((item, i) => {
    if (item.key) {
        seriesData.push({
            value: chartData[item.key],
            show: true,
            name: item.text,
        });
        legendData.push({
            orient: 'horizontal',
            bottom: item.bottom,
            left: item.left,
            right: item.right,
            textStyle: {
                color: '#fff',
                fontSize: 14,
            },
            padding: [10, 20],
            icon: 'circle',
            backgroundColor: 'rgba(0,102,255,0.2)',
            itemStyle: {},
            borderWidth: 0,
            borderColor: '#0066FF',
            borderRadius: 100,
            data: [{ name: item.text }],
            formatter(text) {
                const arr = nameList.filter((item) => item.text === text);
                return `${arr[0].text} ${chartData[arr[0].key] ? chartData[arr[0].key] : 0}人`;
            },
        });
    }
});

option = {
    legend: legendData,
    tooltip: {
        rich: {},
    },
backgroundColor:'#10225c',
    color: ['#243eff', '#2490ff', '#30f3e3'],
    series: [
        {
            name: '',
            type: 'pie',
            center: ['50%', '40%'],
            radius: ['40%', '50%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
            },
            label: {
                show: true,
                position: 'center',
                fontFamily: 'fzzz',
                color: '#fff',
                fontSize: 22,
                formatter() {
                    return `问题人数\n\n${chartData.num} 人`;
                },
            },

            labelLine: {
                show: false,
            },
            data: seriesData,
        },
    ],
};
