// 2x轴+假数据列
// 细粒度数据，必须根据主分类排序
var dummy = [
    ['2015冬','1月',Math.random()*10,Math.random()*10],
    ['2015冬','2月',Math.random()*20,Math.random()*20],
    ['2016春','3月',Math.random()*50,Math.random()*50],
    ['2016春','4月',Math.random()*100,Math.random()*100],
    ['2016春','5月',Math.random()*150,Math.random()*150],
    ['2016夏','6月',Math.random()*200,Math.random()*200],
    ['2016夏','7月',Math.random()*250,Math.random()*250],
    ['2016夏','8月',Math.random()*200,Math.random()*200],
    ['2016秋','9月',Math.random()*150,Math.random()*150],
    ['2016秋','10月',Math.random()*100,Math.random()*100],
    ['2016秋','11月',Math.random()*20,Math.random()*20],
    ['2016冬','十二月',Math.random()*10,Math.random()*10]
];
// 元数据处理，e.g. metadata.init().xxx
var metadata = {
    flag: true,
    quarter: [],
    month: [],
    data1: [],
    data2: [],
    data3: [],
    x_major_offset: dummy[0][1].length,
    init: function() {
        // 首次初始化
        if (metadata.flag) {
            // 数据遍历
            for (var i = 0; i < dummy.length; i++) {
                //debugger;
                if (i === 0) {
                    metadata.quarter.push(dummy[i][0]);
                } else {
                    // 与子分类列匹配
                    metadata.quarter.push(dummy[i-1][0] === dummy[i][0] ? '' : dummy[i][0]);
                }
                metadata.month.push(dummy[i][1]);
                metadata.data1.push(dummy[i][2]);
                metadata.data2.push(dummy[i][3]);
                metadata.data3.push('');
                // 计算子分类字符长度（按汉字计算，*12号字体）
                metadata.x_major_offset = metadata.x_major_offset > dummy[i][1].length ? metadata.x_major_offset : dummy[i][1].length;
            }
            metadata.flag = false;
        }
        return metadata;
    }
};

option = {
    tooltip: {
        trigger: 'item'
    },
    // grid: {
    //     bottom: metadata.init().x_major_offset * 12 + 30
    // },
    legend: {
        data:['蒸发量','降水量']
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {show: false},
            axisTick: {show: false},
            axisLabel: {
                rotate: 90
            },
            splitArea: {show: false},
            data: metadata.init().month
        },
        {
            type: 'category',
            position: 'bottom',
            offset: metadata.init().x_major_offset * 12,
            axisLine: {show: false},
            axisTick: {
                length: metadata.init().x_major_offset * 12 + 20,
                lineStyle: {color: '#CCC'},
                // interval: function (index, value) {
                //     return value!=='';
                // }
            },
            // splitArea: {
            //     show: true,
            //     interval: function (index, value) {
            //         return value!=='';
            //     }
            // },
            data: ['2015冬', '2016春', '2016夏'],   // metadata.init().quarter
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '水量',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} ml'
            }
        }
    ],
    series: [
        {
            name:'蒸发量',
            type:'bar',
            // z: 1,
             data: metadata.init().data1,
             tooltip: {
                 show: true,
                //  formatter: (params) => {
                //      console.log(params)
                //  }
                // axisPointer: {
                //     type: 'shadow'
                // },
                // trigger: 'axis'
            },
        },
        {
            name: 'help',
            type: 'bar',
            xAxisIndex: 1,
            z: 1,
            silent: true,
            barWidth: 0,
            itemStyle: {
                normal: {
                    opacity: 0,
                    shadowBlur: 0,
                    shadowColor: 'transparent'
                },
                emphasis: {
                    opacity: 0,
                    shadowBlur: 0,
                    shadowColor: 'transparent'
                }
            },
            data: [250, 250, 250, 250, 250],
            tooltip: {
                show: false
            }
        },
        // {
        //     name:'降水量',
        //     type:'bar',
        //     z: 1,
        //     data: metadata.init().data2
        // },
        // {
        //     type:'line',
        //     xAxisIndex: 1,
        //     z: 0,
        //     data: metadata.init().data3
        // }
    ]
};