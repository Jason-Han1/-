;(function(Number) {
    // 乘法
    Number.prototype.mul = function(arg, acc) {
        var m = 0
        var s1 = this.toString()
        var s2 = arg.toString()
        try {
            m += s1.split('.')[1].length
        } catch (e) {
            // console.log('catch mul', e);
        }
        try {
            m += s2.split('.')[1].length // m是累加结果
        } catch (e) {
            // console.log(e)
        }
        var result = (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) / Math.pow(10, m)
        // 小数位数处理
        if (acc) {
            return Number(Number(result).toFixed(parseInt(acc)))
        } else {
            return result
        }
    }
})(Number)
let titleData = [];
let seriesData = [];
let total = 0;
let percent_total = [0];
let render_data = [
    { bq_bm: '105', value: 19, percent: 0.06, key: '儿童' },
    { bq_bm: '100', value: 76, percent: 0.27, key: '青少年' },
    { bq_bm: '103', value: 57, percent: 0.20, key: '中年' },
    { bq_bm: '102', value: 29, percent: 0.10, key: '老年' },
     { bq_bm: '', value: 12, percent: 0.04, key: '成年' },
    { bq_bm: '', value: 91, percent: 0.33, key: '其他' },
];
for (const item of render_data) {
      total += item.value ? item.value : 0
  }
render_data.forEach((item,index)=>{
    percent_total.push(percent_total[index] + item.value)
    titleData.push({
            text: '(' + item.percent.mul(100) + '%)' + '\n\n\n\n\n',
            left: index * 10 +9.8 + '%',
            top: '41%',
            textAlign: 'center',
            textStyle: {
                fontSize: '10',
                color: '#fff',
                fontWeight: '200',
            },
            subtext: `${item.value}`,
            subtextStyle: {
                fontSize: '12',
                color: 'F0FFFF',
                fontWeight: '200',
                verticalAlign: 'top',
                ellipsis: '...',
            },
        });
        titleData.push({
                        text: '__',
                        left: index * 10 + 9.9 + '%',
                        bottom: '50%',
                        textAlign: 'center',
                        textStyle: {
                            color: '#8DFFD5',
                            fontWeight: 'blod',
                        },
                    })
            seriesData.push(
                {
                    type: 'pie',
                    clockWise: false, // 逆时针
                    radius: ['40', '70'],
                    startAngle: (percent_total[index] / total) * 360 + 90,

                    center: [index * 10 + 10 + '%', '40%'],
                    hoverAnimation: false,
                    label: {
                        normal: {
                            position: 'center',
                        },
                    },
                    data: [
                        {
                            value: item.value,
                            name: '-',
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                        {
                                            offset: 0,
                                            color: '#81DB93',
                                        },
                                        {
                                            offset: 1,
                                            color: '#3AC1F3',
                                        },
                                    ]),
                                },
                            },
                            label: {
                                normal: {
                                    show: false,
                                },
                            },
                        },
                        {
                            value: total - item.value,
                            name: item.key,
                            tooltip: {
                                show: true,
                            },
                            itemStyle: {
                                normal: {
                                    color: '#244f82',
                                },
                            },
                            label: {
                                normal: {
                                    formatter: item.value,
                                    textStyle: {
                                        fontSize: 12,
                                        color: '#fff',
                                    },
                                },
                            },
                        },
                    ],
                },
                /* 中间的小圆环--虚点 */
                {
                    name: '',
                    z: 5,
                    type: 'pie',
                    cursor: 'default',
                    radius: ['37.5', '37.5'],
                    center: [index * 10 + 10 + '%', '40%'],
                    hoverAnimation: false,
                    legendHoverLink: false,
                    labelLine: {
                        normal: {
                            show: false,
                        },
                    },
                    data: [
                        {
                            value: 100,
                            itemStyle: {
                                borderWidth: 1,
                                borderColor: {
                                    type: 'linear',
                                    x: 1,
                                    y: 1,
                                    x2: 0,
                                    y2: 0,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: '#81DB93', // 0% 处的颜色
                                        },
                                        {
                                            offset: 0.3,
                                            color: '#164AA5', // 33% 处的颜色
                                        },
                                        {
                                            offset: 0.6,
                                            color: '#81db93', // 66% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: '#164AA5', // 100% 处的颜色
                                        },
                                    ],
                                },
                                borderType: 'dashed',
                            },
                        },
                    ],
                },
            )
})

option = {
    backgroundColor: '#182932',
    title: titleData,
    series: seriesData,
};
