// var up = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.51miz.com%2FElement%2F00%2F75%2F77%2F26%2Fb50e2132_E757726_7b901316.png%21%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue%2Fformat%2Fpng%2Ffh%2F630&refer=http%3A%2F%2Fimg.51miz.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641086868&t=abe166401d37d82602953d4ecc316543';
// var down = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F19%2F04%2F10%2F36fbb82be564301ca5969797547ba5bc.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641086891&t=8b2874cd97398bd514c5458190d9a998'
var getName = ['观看培训视频 提升急救技能', '黄石站组织开展基础体能训练', '中华人民共和国国境卫生检疫法'];
var getValue = [800, 560, 550];
var max = Math.max.apply(null, getValue);
var getMax = [];
for (let i = 0; i < getName.length; i++) {
    getMax.push(max + 100);
}

option = {
    backgroundColor:'blurScope',
    grid: {
        left: '7%',
        right: '2%',
        bottom: '2%',
        top: '2%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor: '#005ED8', //通过设置rgba调节背景颜色与透明度
        axisPointer: {
            type: 'none',
        },
        formatter: function (params) {
            return params[0].name + ' : ' + params[0].value;
        },
    },
    xAxis: {
        show: false,
        type: 'value',
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#66cc00',
                },
                formatter: function (value, index) {
                    let num = '';
                    let str = '';
                    let valurStr = '';
                    num = index + 1;
                    if (value.length > 6) {
                        valurStr = value.substring(0, 6) + '...';
                    } else {
                        valurStr = value;
                    }
                    str = '{num|' + num + '} {title|' + valurStr + '}';
                    return str;
                },
                rich: {
                    num: {
                        color: '#fff',
                        backgroundColor: '#129DED',
                        width: 20,
                        height: 20,
                        fontSize: 14,
                        align: 'center',
                        borderRadius: 100,
                        padding: [-1, 0, 2, 0],
                    },

                    title: {
                        color: '#fff',
                        width: 80,
                        align: 'left',
                    },
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            data: getName,
        },
        {
            type: 'category',
            offset: -8,
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '12',
                },
                rich: {
                    val: {
                        width: 33,
                    },
                    // up: {
                    //     backgroundColor: {
                    //         image: up,
                    //     },
                    // },
                    // down: {
                    //     backgroundColor: {
                    //         image: down,
                    //     },
                    // },
                },
                formatter: function (value, index) {
                    if (index < 3) {
                        return `{val|${value}k}{up|}`;
                    } else {
                        return `{val|${value}k}{down|}`;
                    }
                },
            },
            data: getValue,
        },
    ],
    series: [
        {
            name: '',
            type: 'bar',
            zlevel: 2,
            barWidth: 8,
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 50, 50, 0],
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                        {
                            offset: 0,
                            color: '#12A0F1',
                        },
                        {
                            offset: 1,
                            color: '#031239',
                        },
                    ]),
                },
            },
            data: getValue,
        },
        {
            // 背景
            type: 'bar',
            barGap: '-100%',
            barWidth: 8,
            top: -8,
            itemStyle: {
                normal: {
                    color: '#133564',
                    barBorderRadius: [0, 50, 50, 0],
                },
            },
            data: getMax,
        },
    ],
};
