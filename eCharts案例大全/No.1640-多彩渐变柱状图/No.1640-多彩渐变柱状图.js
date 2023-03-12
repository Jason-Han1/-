const formatBytes = function (bytes) {
    console.log(bytes);
    if (bytes === null || bytes === undefined) {
        return '-';
    }
    bytes = parseInt(bytes);
    if (isNaN(bytes)) {
        return '-';
    }
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return (parseFloat(bytes) / Math.pow(k, i)).toFixed(2) + '' + sizes[i];
};

const seriesData = [
    { name: '文档', value: 0 },
    { name: '图片', value: 0 },
    { name: '视频', value: 0 },
    { name: '音频', value: 0 },
    { name: '设计', value: 0 },
    { name: '三维', value: 0 },
    { name: 'CAD', value: 0 },
    { name: '其他', value: 0 },
];

const colors = [
    { color: 'rgba(0,107,255,1)', start: 'rgba(0,107,255,0.75)', end: 'rgba(0,107,255,0.25)' },
    { color: 'rgba(121,72,255,1)', start: 'rgba(121,72,255,0.75)', end: 'rgba(121,72,255,0.25)' },
    { color: 'rgba(176,53,220,1)', start: 'rgba(176,53,220,0.75)', end: 'rgba(176,53,220,0.25)' },
    { color: 'rgba(255,100,121,1)', start: 'rgba(255,100,121,0.75)', end: 'rgba(255,100,121,0.25)' },
    { color: 'rgba(255,203,61,1)', start: 'rgba(255,203,61,0.75)', end: 'rgba(255,203,61,0.25)' },
    { color: 'rgba(0,188,163,1)', start: 'rgba(0,188,163,0.75)', end: 'rgba(0,188,163,0.25)' },
    { color: 'rgba(42,170,255,1)', start: 'rgba(42,170,255,0.75)', end: 'rgba(42,170,255,0.25)' },
    { color: 'rgba(195,195,225,1)', start: 'rgba(195,195,225,0.75)', end: 'rgba(195,195,225,0.25)' },
];

seriesData.forEach((it, idx) => {
    it.value = (parseInt(Math.random() * 1024) + 10) * Math.pow(1024, 3);
    it.itemStyle = {
        borderColor: colors[idx].color,
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
                {
                    offset: 0,
                    color: colors[idx].start, // 0% 处的颜色
                },
                {
                    offset: 1,
                    color: colors[idx].end, // 100% 处的颜色
                },
            ],
            global: false, // 缺省为 falseÏ
        },
    };
});

option = {
    backgroundColor: '#002251',
    grid: {
        top: 35,
        right: 50,
        bottom: 35,
        left: 50,
    },

    tooltip: {
        trigger: 'axis',
        formatter: function (series) {
            return `${series[0].data.name}:${formatBytes(series[0].data.value)}`;
        },
        textStyle:{
            color: '#ffffff'
        },
        backgroundColor: 'rgba(0, 34, 81, 0.85)'
    },
    xAxis: {
        type: 'category',
        data: seriesData.map((it) => it.name),
        axisTick: {
            alignWithLabel: true,
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#C7C7E5', //更改坐标轴文字颜色
                fontSize: 14, //更改坐标轴文字大小
            },
        },
        axisLine: {
            lineStyle: {
                color: '#ffffff', //更改坐标轴颜色
            },
        },
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false,
            alignWithLabel: true,
        },
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.20)',
            },
        },
    },
    series: [
        {
            type: 'bar',
            data: seriesData,
            barWidth: 24,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    fontSize: 16,
                    color: '#fff',
                    offset: [2, -10],
                    formatter: function (series) {
                        return formatBytes(series.data.value);
                    },
                },
            },
        },
    ],
};
