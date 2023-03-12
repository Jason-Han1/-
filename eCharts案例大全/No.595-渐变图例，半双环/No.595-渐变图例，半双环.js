var colorList = ['rgba(248, 201, 109, 1)', 'rgba(120, 235, 246, 1)', 'rgba(138, 122, 209, 1)', 'rgba(28, 187, 210, 1)'];
var __COUNT__ = 1;
let __DEFDATA__ = [
    {
        code: '410100',
        dw: '万人',
        name: '郑州市',
        pcode: 1,
        value: 80,
    },
    {
        code: '410200',
        dw: '万人',
        name: '新乡市',
        pcode: 1,
        value: 70,
    },
    {
        code: '410300',
        dw: '万人',
        name: '安阳市',
        pcode: 1,
        value: 60,
    },
    {
        code: '410400',
        dw: '万人',
        name: '洛阳市',
        pcode: 1,
        value: 50,
    },
    {
        code: '410500',
        dw: '万人',
        name: '鹤壁市',
        pcode: 1,
        value: 40,
    },
    {
        code: '410600',
        dw: '万人',
        name: '平顶山市',
        pcode: 1,
        value: 30,
    },
    {
        code: '410700',
        dw: '万人',
        name: '濮阳市',
        pcode: 1,
        value: 20,
    },
    {
        code: 2,
        dw: '万人',
        name: '外省',
        pcode: null,
        value: 300,
        itemStyle: {
            opacity: 0,
            show: false,
        },
        tooltip: {
            opacity: 0,
            show: false,
        },
    },
    {
        code: 3,
        dw: '万人',
        name: '本市',
        pcode: null,
        value: 200,
        itemStyle: {
            opacity: 0,
            show: false,
        },
        tooltip: {
            opacity: 0,
            show: false,
        },
    },
];
let __DEFIND__ = 0;

option = {
    color: ['rgba(248, 201, 109, 1)', 'rgba(120, 235, 246, 1)', 'rgba(138, 122, 209, 1)', 'rgba(28, 187, 210, 1)'],
    tooltip: {},
    legend: {
        type: 'scroll',
        icon: 'rect',
        orient: 'vertical',
        top: 'center',
        right: '5%',
        itemGap: 12,
        itemWidth: 14,
        itemHeight: 14,
        textStyle: {
            color: '#088AD5',
            fontSize: 14,
        },
        data: [
            {
                code: '410100',
                dw: '万人',
                name: '郑州市',
                pcode: 1,
                value: 80,
            },
            {
                code: '410200',
                dw: '万人',
                name: '新乡市',
                pcode: 1,
                value: 70,
            },
            {
                code: '410300',
                dw: '万人',
                name: '安阳市',
                pcode: 1,
                value: 60,
            },
            {
                code: '410400',
                dw: '万人',
                name: '洛阳市',
                pcode: 1,
                value: 50,
            },
            {
                code: '410500',
                dw: '万人',
                name: '鹤壁市',
                pcode: 1,
                value: 40,
            },
            {
                code: '410600',
                dw: '万人',
                name: '平顶山市',
                pcode: 1,
                value: 30,
            },
            {
                code: '410700',
                dw: '万人',
                name: '濮阳市',
                pcode: 1,
                value: 20,
            },
        ],
    },
    series: [
        {
            name: 'InsidePie',
            type: 'pie',
            center: ['32%', '50%'],
            radius: [0, '60%'],
            label: {
                color: '#383874',
                fontSize: 14,
                fontWeight: 'bold',
                position: 'inner',
            },
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 2,
                },
            },
            data: [
                {
                    code: 1,
                    dw: '万人',
                    name: '本省外市',
                    pcode: null,
                    value: 350,
                },
                {
                    code: 2,
                    dw: '万人',
                    name: '外省',
                    pcode: null,
                    value: 300,
                },
                {
                    code: 3,
                    dw: '万人',
                    name: '本市',
                    pcode: null,
                    value: 200,
                },
            ],
        },
        {
            name: 'InsiderPieBorder',
            center: ['32%', '50%'],
            radius: ['56%', '60%'],
            type: 'pie',
            itemStyle: {
                normal: {
                    color: 'rgba(250,250,250,0.5)',
                },
            },
            data: [
                {
                    value: 0,
                },
            ],
        },
        {
            name: '招标方式',
            type: 'pie',
            center: ['32%', '50%'],
            radius: ['66%', '78%'],
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            itemStyle: {
                color: function (params) {
                    let _rgb_ = colorList[__DEFIND__].slice(0, 20);

                    if (params.dataIndex == __COUNT__ - 1) {
                        return colorList[__DEFIND__];
                    }
                    if (params.dataIndex >= __COUNT__) {
                        return _rgb_ + (1 - (params.dataIndex - __COUNT__ + 1) * 0.1) + ')';
                    }
                    return colorList[params.dataIndex];
                },
            },
            data: __DEFDATA__,
        },
    ],
};
