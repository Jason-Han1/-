xmjdRqDatas = {
    items: [
        {
            xM_CODE: 'NS0060C06',
            xM_NAME: '长沙惠科Trimmer',
            xmjdDto: [
                {
                    jdjH_ZXJD: 100,
                    jdjH_XMJD_NAME: '设计阶段',
                    jdjH_XMJD_CODE: '2',
                    jdjH_KSRQ: '2020-12-23',
                    jdjH_JSRQ: '2021-01-30',
                },
                {
                    jdjH_ZXJD: 100,
                    jdjH_XMJD_NAME: '采购备料',
                    jdjH_XMJD_CODE: '3',
                    jdjH_KSRQ: '2021-01-15',
                    jdjH_JSRQ: '2021-03-15',
                },
                {
                    jdjH_ZXJD: 100,
                    jdjH_XMJD_NAME: '制造组装',
                    jdjH_XMJD_CODE: '4',
                    jdjH_KSRQ: '2021-03-10',
                    jdjH_JSRQ: '2021-04-05',
                },
                {
                    jdjH_ZXJD: 94,
                    jdjH_XMJD_NAME: '研发调试',
                    jdjH_XMJD_CODE: '5',
                    jdjH_KSRQ: '2021-04-06',
                    jdjH_JSRQ: '2021-04-29',
                },
                {
                    jdjH_ZXJD: 0,
                    jdjH_XMJD_NAME: 'IAT及改善',
                    jdjH_XMJD_CODE: '6',
                    jdjH_KSRQ: '2021-04-30',
                    jdjH_JSRQ: '2021-05-03',
                },
            ],
        },
    ],
};

function getXmjdRqInfo(xmName, jdName) {
    const xm = xmjdRqDatas.items.find((f) => f.xM_CODE === xmName);
    let jd;
    if (xm) {
        jd = xm.xmjdDto.find((f) => f.jdjH_XMJD_NAME === jdName);
    }
    if (jd) {
        return jd.jdjH_KSRQ + '~' + jd.jdjH_JSRQ + '（' + jd.jdjH_ZXJD + '%）';
    } else {
        return '';
    }
}

option = {
    backgroundColor: '#0B173D',
    grid: { left: '5%', right: '10%', bottom: '10%', top: '5%', containLabel: true },
    tooltip: {
        trigger: 'axis',
        position: ['50%', '50%'],
        textStyle: { fontSize: 14, align: 'left' },
        formatter: function (params) {
            const len = params.length;
            let tip = len ? params[0].name : '';
            for (let i = 0; i < params.length; i++) {
                const ele = params[i];
                if (ele.seriesName.includes('_START')) {
                    continue;
                }
                const info = getXmjdRqInfo(params[0].name, ele.seriesName);
                if (!info) {
                    continue;
                }
                tip += '</br>' + ele.marker + ele.seriesName + '：' + getXmjdRqInfo(params[0].name, ele.seriesName);
            }
            return tip;
        },
    },
    xAxis: { type: 'time', axisLabel: { color: 'rgba(255,255,255,0.7)', fontSize: 14 } },
    yAxis: { axisLabel: { color: 'turquoise', fontSize: 14 }, data: ['NS0060C06'] },
    series: [
        {
            name: '设计阶段',
            type: 'bar',
            stack: '设计阶段',
            label: {
                show: true,
                fontSize: 14,
                position: 'right',
                color: 'turquoise',
                formatter: function (params) {
                    const xm = xmjdRqDatas.items[params.dataIndex];
                    let jd;
                    if (xm) {
                        jd = xm.xmjdDto.find((f) => f.jdjH_XMJD_NAME === params.seriesName);
                    }
                    if (jd) {
                        return params.seriesName + '：' + (jd.jdjH_ZXJD ? jd.jdjH_ZXJD : 0) + '%';
                    }
                    return '';
                },
            },
            itemStyle: { borderColor: '#0B173D', borderWidth: 2 },
            zlevel: -1,
            data: ['2021-01-30T00:00:00.000Z'],
        },
        {
            name: '设计阶段_START',
            type: 'bar',
            stack: '设计阶段',
            itemStyle: { color: '#0B173D' },
            zlevel: -1,
            data: ['2020-12-23T00:00:00.000Z'],
        },
        {
            name: '采购备料',
            type: 'bar',
            stack: '采购备料',
            label: {
                show: true,
                fontSize: 14,
                position: 'right',
                color: 'turquoise',
                formatter: function (params) {
                    const xm = xmjdRqDatas.items[params.dataIndex];
                    let jd;
                    if (xm) {
                        jd = xm.xmjdDto.find((f) => f.jdjH_XMJD_NAME === params.seriesName);
                    }
                    if (jd) {
                        return params.seriesName + '：' + (jd.jdjH_ZXJD ? jd.jdjH_ZXJD : 0) + '%';
                    }
                    return '';
                },
            },
            itemStyle: { borderColor: '#0B173D', borderWidth: 2 },
            zlevel: -1,
            data: ['2021-03-15T00:00:00.000Z'],
        },
        {
            name: '采购备料_START',
            type: 'bar',
            stack: '采购备料',
            itemStyle: { color: '#0B173D' },
            zlevel: -1,
            data: ['2021-01-15T00:00:00.000Z'],
        },
        {
            name: '制造组装',
            type: 'bar',
            stack: '制造组装',
            label: {
                show: true,
                fontSize: 14,
                position: 'right',
                color: 'turquoise',
                formatter: function (params) {
                    const xm = xmjdRqDatas.items[params.dataIndex];
                    let jd;
                    if (xm) {
                        jd = xm.xmjdDto.find((f) => f.jdjH_XMJD_NAME === params.seriesName);
                    }
                    if (jd) {
                        return params.seriesName + '：' + (jd.jdjH_ZXJD ? jd.jdjH_ZXJD : 0) + '%';
                    }
                    return '';
                },
            },
            itemStyle: { borderColor: '#0B173D', borderWidth: 2 },
            zlevel: -1,
            data: ['2021-04-05T00:00:00.000Z'],
        },
        {
            name: '制造组装_START',
            type: 'bar',
            stack: '制造组装',
            itemStyle: { color: '#0B173D' },
            zlevel: -1,
            data: ['2021-03-10T00:00:00.000Z'],
        },
        {
            name: '研发调试',
            type: 'bar',
            stack: '研发调试',
            label: {
                show: true,
                fontSize: 14,
                position: 'right',
                color: 'turquoise',
                formatter: function (params) {
                    const xm = xmjdRqDatas.items[params.dataIndex];
                    let jd;
                    if (xm) {
                        jd = xm.xmjdDto.find((f) => f.jdjH_XMJD_NAME === params.seriesName);
                    }
                    if (jd) {
                        return params.seriesName + '：' + (jd.jdjH_ZXJD ? jd.jdjH_ZXJD : 0) + '%';
                    }
                    return '';
                },
            },
            itemStyle: { borderColor: '#0B173D', borderWidth: 2 },
            zlevel: -1,
            data: ['2021-04-29T00:00:00.000Z'],
        },
        {
            name: '研发调试_START',
            type: 'bar',
            stack: '研发调试',
            itemStyle: { color: '#0B173D' },
            zlevel: -1,
            data: ['2021-04-06T00:00:00.000Z'],
        },
        {
            name: 'IAT及改善',
            type: 'bar',
            stack: 'IAT及改善',
            label: {
                show: true,
                fontSize: 14,
                position: 'right',
                color: 'turquoise',
                formatter: function (params) {
                    const xm = xmjdRqDatas.items[params.dataIndex];
                    let jd;
                    if (xm) {
                        jd = xm.xmjdDto.find((f) => f.jdjH_XMJD_NAME === params.seriesName);
                    }
                    if (jd) {
                        return params.seriesName + '：' + (jd.jdjH_ZXJD ? jd.jdjH_ZXJD : 0) + '%';
                    }
                    return '';
                },
            },
            itemStyle: { borderColor: '#0B173D', borderWidth: 2 },
            zlevel: -1,
            data: ['2021-05-03T00:00:00.000Z'],
        },
        {
            name: 'IAT及改善_START',
            type: 'bar',
            stack: 'IAT及改善',
            itemStyle: { color: '#0B173D' },
            zlevel: -1,
            data: ['2021-04-30T00:00:00.000Z'],
        },
    ],
};
