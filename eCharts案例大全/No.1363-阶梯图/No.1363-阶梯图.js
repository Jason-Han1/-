let originalData = [105101, 436039, 393569, -236854, -56312, 934709, 12345]; // 原数据 用于label显示
let seriesData = originalData.concat(); // 数据处理过程中用到的数据，值会做改变

// 判断两个数据是不是一正一负
function isSymbolConsistent(data1, data2) {
    return data1 * data2 < 0;
}

// 获取当前值颜色,是否变红，绝对值
function getValueColor(value, red, abs) {
    let obj = {
        value: abs ? Math.abs(value) : value,
        itemStyle: {
            color: '#a90000',
        },
        label: {
            position: 'bottom',
        },
    };

    return red ? obj : value;
}

let helpValus = [];
let NumberSums = [];
let NumberSum = 0;
// 获取所有辅助值
function getAllHelpValue(data) {
    data.forEach((cell, index) => {
        if (index === 0) {
            helpValus.push(0); // 第一个辅助值为0
            NumberSum += cell;
            NumberSums.push(NumberSum);
            if (data[index] < 0) data[index] = getValueColor(data[index], true, false);
        } else if (isSymbolConsistent(NumberSum, cell)) {
            // 一正一负
            if (NumberSum < 0 && Math.abs(NumberSum) > cell) {
                // 前面和<0,当前值大于0.相加之后还是小于0
                helpValus.push(NumberSum + cell);
                data[index] = -cell;
            } else if (NumberSum < 0 && Math.abs(NumberSum) < cell) {
                // 前面和<0,当前值大于0.相加之后还是大于0
                helpValus.push(0);
                data[index] = NumberSum + cell;
                NumberSum += cell;
                NumberSums.push(NumberSum);
            } else if (NumberSum > 0 && NumberSum > Math.abs(cell)) {
                // 和大于0， 当前值小于0 ,相加之后大于0
                helpValus.push(NumberSum + cell);
                data[index] = -cell;
                NumberSum += cell;
                data[index] = getValueColor(data[index], true, false);
            } else if (NumberSum > 0 && cell < 0) {
                helpValus.push(0); // 辅助值为 0
                data[index] = NumberSum + cell;
                NumberSum += cell;
                NumberSums.push(NumberSum);
                data[index] = getValueColor(data[index], true, false);
            } else {
                helpValus.push(0); // 辅助值为 0
                data[index] = NumberSum + cell;
                NumberSum += cell;
                NumberSums.push(NumberSum);
                data[index] = getValueColor(data[index]);
            }
        } else if (!isSymbolConsistent(NumberSum, cell)) {
            // 符号相同
            helpValus.push(NumberSum);
            NumberSum += cell;
            NumberSums.push(NumberSum);
            if (data[index] < 0) data[index] = getValueColor(data[index], true, false);
        }
    });
}
getAllHelpValue(seriesData);

option = {
    
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        data: (function () {
            let list = [];
            for (let i = 1; i <= seriesData.length; i++) {
                list.push('Nov ' + i);
            }
            return list;
        })(),
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            name: 'Placeholder',
            type: 'bar',
            stack: 'Total',
            itemStyle: {
                borderColor: 'transparent',
                color: 'transparent',
            },
            emphasis: {
                itemStyle: {
                    borderColor: 'transparent',
                    color: 'transparent',
                },
            },
            data: helpValus,
        },
        {
            name: 'Income',
            type: 'bar',
            stack: 'Total',
            label: {
                show: true,
                position: 'top',
                formatter: (params) => {
                    return originalData[params.dataIndex];
                },
            },
            data: seriesData,

            // data:  data.map(row=>Math.abs(row))
        },
    ],
};
