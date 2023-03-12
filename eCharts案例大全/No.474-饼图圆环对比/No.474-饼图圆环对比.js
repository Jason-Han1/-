let datas = [
    {
        name: '战略',
        value: 700,
    },
    {
        name: '军',
        value: 1200,
    },
    {
        name: '空',
        value: 2400,
    },
    {
        name: '火箭',
        value: 700,
    },
    {
        name: '陆',
        value: 200,
    },
];
let max = Math.max(...datas.map((el) => el.value));
let list = [];
const color = [
    '#F68820',
    '#07BCFB',
    '#078AFE',
    '#FCDF00',
    '#FFFEFF',
    '#89A6FF',
    '#FF8181',
    'orange',
    '#FBBC05',
    '#EA4335',
];
datas.forEach((el, i) => {
    list.push(
        {
            value: el.value,
            name: el.name,
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    borderColor: color[i],
                    color: color[i],
                    shadowColor: 'rgba(99,99,99,0.2)',
                    shadowBlur: 25,
                },
            },
        },
        {
            value: max * 0.03,
            name: '',
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0,
                },
            },
        }
    );
});
let seriesOption = [
    {
        name: '',
        type: 'pie',
        clockWise: false,
        radius: ['75%', '70%'],
        center: ['50%', '50%'],
        hoverAnimation: false,
        avoidLabelOverlap: true,
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'outside',
                    formatter: (params) => {
                        var str = '';
                        switch (params.name) {
                            case '战略':
                                str =
                                    '{a|}{numbers| ' + params.value + '}{unit|万元}\n' + '{names|' + params.name + '}';
                                break;
                            case '海':
                                str =
                                    '{b|}{numbers| ' + params.value + '}{unit|万元}\n' + '{names|' + params.name + '}';
                                break;
                            case '空':
                                str =
                                    '{c|}{numbers| ' + params.value + '}{unit|万元}\n' + '{names|' + params.name + '}';
                                break;
                            case '陆':
                                str =
                                    '{d|}{numbers| ' + params.value + '}{unit|万元}\n' + '{names|' + params.name + '}';
                                break;
                            case '火箭':
                                str =
                                    '{e|}{numbers| ' + params.value + '}{unit|万元}\n' + '{names|' + params.name + '}';
                                break;
                        }
                        return str;
                    },
                    rich: {
                        a: {
                            width: 16,
                            height: 16,
                            backgroundColor: '#F68820',
                            align: 'left',
                        },
                        b: {
                            width: 16,
                            height: 16,
                            backgroundColor: '#07BCFB',
                            align: 'left',
                        },
                        c: {
                            width: 16,
                            height: 16,
                            backgroundColor: '#078AFE',
                            align: 'left',
                        },
                        d: {
                            width: 16,
                            height: 16,
                            backgroundColor: '#FFFFFF',
                            align: 'left',
                        },
                        e: {
                            width: 16,
                            height: 16,
                            backgroundColor: '#FCDF00',
                            align: 'left',
                        },
                        numbers: {
                            fontSize: 20,
                            color: '#1F4265',
                            fontWeight: 600,
                            fontFamily: 'Microsoft YaHei',
                            align: 'left',
                        },
                        unit: {
                            fontSize: 14,
                            fontFamily: 'Microsoft YaHei',
                            fontWeight: 600,
                            color: '#1F4265',
                            align: 'left',
                        },
                        names: {
                            fontSize: 16,
                            fontFamily: 'Microsoft YaHei',
                            fontWeight: 500,
                            color: 'rgba(31, 66, 101, 0.8)',
                            align: 'right',
                            lineHeight: 25,
                        },
                    },
                },
                labelLine: {
                    length: '2%',
                    length2: '10%',
                    show: false,
                },
            },
        },
        data: list,
    },
    {
        type: 'pie',
        radius: '40%',
        center: ['50%', '50%'],
        hoverAnimation: false,
        clockWise: false,
        itemStyle: {
            normal: {
                shadowBlur: 18,
                shadowColor: 'rgba(124, 187, 235, 0.6)',
                color: 'rgba(221, 240, 249, 0.6)',
            },
        },
        label: {
            show: false,
        },
        data: [100],
    },
];
option = {
    title: {
        text: '经费',
        left: 'center',
        top: 'middle',
        textStyle: {
            color: '#222',
            fontSize: 20,
            fontWeight: 600,
        },
        textAlign: 'auto',
    },
    tooltip: {
        show: false,
    },
    legend: {
        show: false,
    },
    series: seriesOption,
};
