// 基坑观测数据
const observationData = [{
        name: '第一次',
        time: '2020-09-26',
        floor: -3,
        settlement: 0
    },
    {
        name: '第二次',
        time: '2020-10-23',
        floor: 2,
        settlement: -1.44
    }, {
        name: '第三次',
        time: '2020-11-04',
        floor: 6,
        settlement: -2.28
    },
    {
        name: '第四次',
        time: '2020-11-28',
        floor: 10,
        settlement: -3.80
    },
    // {
    //     name: '第五次',
    //     time: '2020-12-15',
    //     floor: 13,
    //     settlement: -4.60
    // }
];

// 拼接 echarts y 轴数据
// 1. 取得数据中的最大沉降量(即沉降量最小值)
let maxSettlement = Math.min(...observationData.map(item => item.settlement));
// 2. 根据最大沉降量 * 2 得到沉降量数组 同时定义 y轴 分割基准值
let settlementArr = [];
let yAxisDividNum = 0.5;

// 2.1 判断最小值扩大之后的情况
if (maxSettlement * 1.2 < -20) {
    maxSettlement = -20;
    yAxisDividNum = 1;
} else maxSettlement *= 1.2;

// 2.2 循环构造数组
do {
    settlementArr.push(maxSettlement);
    maxSettlement = Number((maxSettlement + yAxisDividNum).toFixed(1));
} while (maxSettlement < 0);

// 2.3 多push一个值，用来显示 y 轴负值区域的轴名称
settlementArr.unshift(settlementArr[0] - yAxisDividNum);

// 3. 楼层高度
const buildingHeight = 19;

// 3.1 根据楼层高度得到楼层数组
let buildingArr = [];
for (let i = 1; i <= buildingHeight; i++) {
    buildingArr.push(i);
}

// 3.2 楼层数组需额外 + 地下两层 + 夹层
buildingArr = [0.1, 0.2, 0.3].concat(buildingArr);

// 4. 拼接 y 轴数据（沉降量 + 楼层）
const temp = settlementArr.concat(buildingArr);
let fNum = 0; // y 轴负值
let zNum = 0; // y 轴正值
for (let i = 0; i < temp.length; i++) {
    if (temp[i] < 0) fNum--;
    if (temp[i] > 0) zNum++;
}
let yAxisData = [];
for (let i = fNum; i <= zNum; i++) {
    yAxisData.push(i); // y z轴真实数据
}

// 单独获取一下数据中的沉降量数据
const CJL = observationData.map(item => item.settlement);
// echarts配置
option = {
    backgroundColor: "#fff",
    tooltip: {
        show: true,
        trigger: 'axis',
        // axisPointer: {
        //     type: 'cross',
        //     axis:'x',
        //     label: {
        //         show: false
        //     },
        //     crossStyle: {
        //         type: 'solid',
        //         color: 'red'
        //     }
        // },
        formatter: (params) => {
            return `<span>${params[0].axisValueLabel}</span><br>
                <span><span>${params[0].marker}</span>楼层：${params[0].value === 0 ? 0:params[0].value - 3}</span><br>
                <span><span>${params[1].marker}</span>沉降量：${CJL[params[1].dataIndex]}</span>`;
        }
    },
    grid: {
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: true
        },
        boundaryGap: false,
        axisLabel: {
            show: true,
            align: 'left'
        },
        axisLine: {
            symbol: ['none', 'arrow'],
            lineStyle: {
                width: 2
            }
        },
        data: observationData.map(item => `${item.time}\n${item.name}`)
    },
    yAxis: {
        name: '载荷（楼层）',
        nameTextStyle: {
            align: 'right'
        },
        type: 'value',
        max: yAxisData[yAxisData.length - 1],
        min: yAxisData[0],
        interval: 1,
        splitLine: {
            show: true
        },
        axisLabel: {
            show: true,
            formatter: (item, index) => {
                // 改变y轴label
                if (item === yAxisData[0]) return '累积沉降量（mm）'
                if (item >= 0 && item < 4) {
                    return item === 0 ? 0 : item === 1 ? 'B2' : item === 2 ? 'B1' : 'J'
                } else {
                    if (item < 0) return settlementArr[index];
                    if (item === yAxisData[yAxisData.length - 1]) return '机房层';
                    return item - 3;
                }
            }
        },
        axisLine: {
            symbol: ['arrow', 'arrow'],
            symbolOffset: [-12, 12],
            lineStyle: {
                width: 2
            },
        },
        data: yAxisData
    },
    series: [{
            name: '楼层',
            type: 'line',
            smooth: true,
            label: {
                show: true,
                formatter: (value) => {
                    switch (value.value) {
                        case 0:
                            return '';
                        case 1:
                            return 'B2';
                        case 2:
                            return 'B1';
                        case 3:
                            return 'J';
                        default:
                            return value.value - 3;
                    }
                }
            },
            data: observationData.map(item => {
                // 每一层的数加上地下3成（+3）
                return item.floor + 3;
            })
        },
        {
            name: '沉降量',
            type: 'line',
            smooth: true,
            label: {
                show: true,
                position: 'bottom',
                formatter: (params) => {
                    if (params.value === 0) return '';
                    return CJL[params.dataIndex];
                }
            },
            data: CJL.map((item, index) => {
                if (index === 0) return 0;
                return item / yAxisDividNum - ((settlementArr[settlementArr.length - 1] / yAxisDividNum) + 1);
            })
        }
    ]
};