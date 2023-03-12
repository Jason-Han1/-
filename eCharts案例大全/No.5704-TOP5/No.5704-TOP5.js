
const COLOR = ['rgba(47, 123, 230, 1)', 'rgba(47, 123, 230, 0.85)', 'rgba(47, 123, 230, 0.7)', 'rgba(47, 123, 230, 0.55)', 'rgba(47, 123, 230, 0.4)'];

let data = [
    {"count":"194","name":"京博石化"},
    {"count":"124","name":"中石油云南石化"},
    {"count":"98","name":"国家能源集团宁夏煤业烯烃一分公司"},
    {"count":"74","name":"茂名石化"},
    {"count":"70","name":"华鲁恒升"}]
option = {
    grid: {
        top: '8%',
    left: '15%',
    right: '10%',
    bottom: '2%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        show: false
    },
    yAxis: {
        show: true,
        inverse: true,
        type: 'category',
        axisLine: {
            show: false
        }
    },
    series: [{
        name: 'name',
        type: 'bar',
        barWidth: 20,
        yAxisIndex: 0,
        label: {
            show: true,
            position: 2,
            color: '#262C41',
            fontSize: 15
        },
        data: data.map((item) => {
            return {
                value: 0,
                label: {
                    formatter() {
                        return item.name;
                    }
                }
            };
        })
    }, {
        name: 'count',
        type: 'bar',
        barWidth: 20,
        barMinHeight: 20, // 最小高度
        yAxisIndex: 0,
        label: {
            show: true,
            position: 'right',
            fontSize: 22,
            offset: [10, 0],
            formatter({
                value
            }) {
                return `${value}人`;
            }
        },
        itemStyle: {
            barBorderRadius: [0, 4, 4, 0],
        },
        data: data.map(({count}, index) => {
            console.log(count);
            console.log(index);
            let color = COLOR[index % COLOR.length];
            return {
                value: count,
                label: {
                    color
                },
                itemStyle: {
                    color
                }
            };
        })
    }]
};

console.log(option)