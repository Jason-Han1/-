let total = 4;
let value = 1;
let totalPercent = 360; // 全部比值
let splitPercent = 6; // 中间分割白块单个占比
let titlePercent = 40; // info占比
let blockPercent = (totalPercent - titlePercent - (total - 1) * splitPercent) / total; // 每一份占比
let seriesData = (() => {
    let tmp = [];
    for (let i = 0; i < total; i++) {
        tmp.push({ // 块状
            value: blockPercent,
            itemStyle: {
                color: i < value ? '#F64D0C' : '#E7E6E9'
            }
        });
        if (i + 1 < total) { // 插入分割
            tmp.push({
                value: splitPercent,
                itemStyle: {
                    color: '#fff'
                }
            });
        }
    }
    tmp.push({ // info部分空间
        value: titlePercent,
        itemStyle: {
            color: '#fff'
        }
    });
    return tmp;
})();
option = {
    backgroundColor: '#fff',
    title: {
        text: `Pie Gap, ${value}/${total}`,
        left: '50%',
        top: 'middle',
        textStyle: {
            fontSize: 40
        }
    },
    series: {
        type: 'pie',
        silent: true,
        startAngle: titlePercent / totalPercent / 2 * 360,
        radius: ['50%', '70%'],
        clockwise: false,
        label: {
            show: false,
            position: 'center'
        },
        labelLine: {
            show: false
        },
        data: seriesData
    }
};