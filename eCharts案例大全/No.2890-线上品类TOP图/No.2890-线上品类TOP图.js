// 按顺序排列从大到小
let nameData = ['包装-礼盒', '包装-烘焙', '包装-鱼豆腐', '包装-鱼糜制品', '包装-豆干'];
let valueData = [2263.82, 1869.34, 729.01, 568.65, 335.37];
let proportion = ['35%', '26%', '23%', '15%', '8.9%'];

let color = ['#ff9500', '#f45333', '#027fff'];
let color1 = ['#ffb349', '#a324dd', '#4aa4ff'];

let lineY = [];
let lineT = [];

for (let i = 0; i < nameData.length; i++) {
    // 统一为下标1颜色，也就是第二个颜色
    let x = 1;

    /*let x = i
                // 从下标2开始，也就是第三条数据开始，使用第三种颜色
                if (x > 1) {
                    x = 2
                }*/
    let data = {
        name: nameData[i],
        color: color[x],
        value: valueData[i],
        proportion: proportion[i],
        // echarts柱状图两个柱子之间的间隙（在 series 某一个bar下面加这个即可）
        barGap: '-100%',
        itemStyle: {
            normal: {
                show: true,
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    1,
                    0,
                    [
                        {
                            offset: 0,
                            color: color[x],
                        },
                        {
                            offset: 1,
                            color: color1[x],
                        },
                    ],
                    false
                ),
                barBorderRadius: 10,
            },
            emphasis: {
                shadowBlur: 15,
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            },
        },
    };
    // 用于展示缺省部分的阴影，当前图形的阴影为透明，此代码可以不用
    let data1 = {
        // 如果后台给出的数据已经经过倒序排序的话，当前下标可以默认为0，如果给的数据没有倒序排过序，则下标需要自己去计算
        value: valueData[0],
        itemStyle: {
            // 柱状缺省部分颜色
            color: 'transparent',
            barBorderRadius: 10,
        },
    };
    lineY.push(data);
    lineT.push(data1);
}

option = {
    // 图形背景颜色
    backgroundColor: '#efefef',
    title: {
        show: false,
    },
    tooltip: {
        trigger: 'item',
        // formatter: '{a} <br/>{b} ： {c}'

        // 自定义鼠标移入提示样式
        formatter: (p) => {
            if (p.seriesName === 'total') {
                return '';
            }
            // 鼠标移入显示的百分比占比为后台给的数据
            // console.log(p)
            // 自定义小圆点(颜色、形状和大小等等)
            return p.seriesName + '<br/>' + p.name + '：' + p.value + '万件' + '（' + p.data.proportion + '）';
            /*let dotHtml = `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color: ${p.color.colorStops[0].color}"></span>`
                        return p.seriesName + '<br/>' + dotHtml + p.name + '：' + p.value + '万件' + '（' + p.data.proportion + '）'*/
            // return `${p.seriesName} <br/>${p.name} ： ${p.value}`
            // return `${p.name}<br/>${p.value}`
        },
    },
    grid: {
        borderWidth: 0,
        top: '10%',
        left: '5%',
        right: '20%',
        bottom: '3%',
    },
    color: color,
    yAxis: [
        {
            type: 'category',
            // 是否倒置
            inverse: true,
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
                inside: false,
            },
            data: nameData,
        },
        {
            type: 'category',
            // 是否倒置
            inverse: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                // 是否显示在柱状里面
                inside: false,
                // 行高针对哪个方位
                verticalAlign: 'bottom',
                // 每条柱状后面的文字说明行高，设置为0则为对齐柱状
                lineHeight: '0',
                textStyle: {
                    color: '#f5b334',
                    fontSize: '14',
                    fontFamily: 'PingFangSC-Regular',
                },
                formatter: function (val) {
                    return `${val}`;
                },
            },
            splitArea: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            data: valueData,
        },
    ],
    xAxis: {
        type: 'value',
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    series: [
        {
            name: 'total',
            type: 'bar',
            zlevel: 1,
            // echarts柱状图两个柱子之间的间隙（在 series 某一个bar下面加这个即可）
            barGap: '-100%',
            barWidth: '10px',
            data: lineT,
            legendHoverLink: false,
        },
        {
            name: '线上品类TOP',
            type: 'bar',
            zlevel: 2,
            barWidth: '10px',
            data: lineY,
            label: {
                normal: {
                    color: '#b3ccf8',
                    show: true,
                    position: [0, '-24px'],
                    textStyle: {
                        fontSize: 16,
                    },
                    formatter: function (a) {
                        let num = '';
                        let str = '';
                        num = a.dataIndex + 1;

                        // 在小于10的序号前补0
                        /*if (a.dataIndex + 1 < 10) {
                                    num = '0' + (a.dataIndex + 1);
                                } else {
                                    num = (a.dataIndex + 1);
                                }*/

                        // 可以给每一条数据单独赋予不同的颜色，目前没有这个需求
                        /*if (a.dataIndex === 0) {
                                    str = `{color1|${num}} {color4|${a.name}}`
                                } else if (a.dataIndex === 1) {
                                    str = `{color2|${num}} {color4|${a.name}}`
                                } else {
                                    str = `{color3|${num}} {color4|${a.name}}`
                                }*/

                        // 目前的需求为统一为同一种颜色
                        // str = `{color1|${num}} {color4|${a.name}}`
                        str = `{nt|${num}} {color4|${a.name}}`;
                        return str;
                    },
                    rich: {
                        // 目前的需求为统一为同一种颜色，需要时再取消注释
                        /*color1: {
                                    color: '#ff9500',
                                    fontWeight: 700
                                },
                                color2: {
                                    color: '#02d8f9',
                                    fontWeight: 700
                                },
                                color3: {
                                    color: '#027fff',
                                    fontWeight: 700
                                },*/
                        // 柱状上方字体颜色
                        color4: {
                            color: '#d9a033',
                        },
                        nt: {
                            color: '#474139',
                            backgroundColor: '#eaac33',
                            width: 20,
                            height: 20,
                            fontWeight: 700,
                            align: 'center',
                            // padding:[0,0,0,0],
                            fontSize: '14',
                            borderRadius: 100,
                        },
                    },
                },
            },
        },
    ],
};
