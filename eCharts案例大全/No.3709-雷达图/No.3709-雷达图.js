let indicator = [{
        label: "法轮功",
        value: 400
    }, {
        label: "全能神",
        value: 333
    }, {
        label: "门徒会",
        value: 333
    },
    {
        label: "法轮功",
        value: 500
    },
    {
        label: "全能神",
        value: 133
    }, {
        label: "门徒会",
        value: 700
    }, {
        label: "观音法门",
        value: 800
    }, {
        label: "其他",
        value: 441
    }
]
let total = indicator.reduce((a, b) => a + b, 0)
let seriesData = indicator.map((ele, index) => {
    return ele.value;
});

let dataMax = indicator.map((ele, index) => {
    return {
        name: ele.label,
        max: seriesData.reduce((a, b) => a + b, 0)
    };
});


const maxValue = []
seriesData.forEach((item, i) => {
    maxValue.push(total)
})
let splitNumber = 5;
dataMax[0].axisLabel = {
    show: true
}; //刻度


option = {
    tooltip: {
        backgroundColor: '#FFFFFF',
        trigger: 'item',
        // trigger: 'axis',
        confine: true,
        position: function([x, y]) {
            const newX = x + 100
            // console.log(newX)
            return [newX, y]
        },
        formatter: function(params) {
            const name = params.name
            const acceptNum = params.value
            const res = ' <div class=\'tooltips\' id=\'tooltips\' style=\'position: relative;\n' +
                '        display: inline-block;\n' +
                '        background: #FFFFFF;\n' +
                '        box-shadow: 0 -3px 10px 0 rgba(206,211,212,0.45), 2px 10px 13px 0 rgba(0,0,0,0.04);\n' +
                '        padding: 0.1rem 0.2rem;\n' +
                '        border-radius: 0.04rem;\'>' +
                '<div>' +
                '<span class=\'\' style=\'opacity: 0.7;\n' +
                '        font-family: PingFangSC-Medium;\n' +
                '        font-size: 0.14rem;\n' +
                '        color: #222222;\n' +
                '        padding: 0 0 0.05rem 0;\'>' + name[0].name + '：' + '</span>' +
                '<span class=\'\' style=\'color: #2A70F1;\n' +
                '        font-family: PingFangSC-Medium;\n' +
                '        font-size: 0.13rem;\'>' + acceptNum[0] + '人</span>' +
                '</div>' +
                '<div>' +
                '<span class=\'\' style=\'opacity: 0.7;\n' +
                '        font-family: PingFangSC-Medium;\n' +
                '        font-size: 0.14rem;\n' +
                '        color: #222222;\n' +
                '        padding: 0 0 0.05rem 0;\'>' + name[1].name + '：' + '</span>' +
                '<span class=\'\' style=\'color: #2A70F1;\n' +
                '        font-family: PingFangSC-Medium;\n' +
                '        font-size: 0.13rem;\'>' + acceptNum[1] + '人</span>' +
                '</div>' +
                '<div>' +
                '<span class=\'\' style=\'opacity: 0.7;\n' +
                '        font-family: PingFangSC-Medium;\n' +
                '        font-size: 0.14rem;\n' +
                '        color: #222222;\n' +
                '        padding: 0 0 0.05rem 0;\'>' + name[2].name + '：' + '</span>' +
                '<span class=\'\' style=\'color: #2A70F1;\n' +
                '        font-family: PingFangSC-Medium;\n' +
                '        font-size: 0.13rem;\'>' + acceptNum[2] + '人</span>' +
                '</div>' +
                '<div>' +
                '<span class=\'\' style=\'opacity: 0.7;\n' +
                '        font-family: PingFangSC-Medium;\n' +
                '        font-size: 0.14rem;\n' +
                '        color: #222222;\n' +
                '        padding: 0 0 0.05rem 0;\'>' + name[3].name + '：' + '</span>' +
                '<span class=\'\' style=\'color: #2A70F1;\n' +
                '        font-family: PingFangSC-Medium;\n' +
                '        font-size: 0.13rem;\'>' + acceptNum[3] + '人</span>' +
                '</div>' +
                '<div>' +
                '<span class=\'\' style=\'opacity: 0.7;\n' +
                '        font-family: PingFangSC-Medium;\n' +
                '        font-size: 0.14rem;\n' +
                '        color: #222222;\n' +
                '        padding: 0 0 0.05rem 0;\'>' + name[4].name + '：' + '</span>' +
                '<span class=\'\' style=\'color: #2A70F1;\n' +
                '        font-family: PingFangSC-Medium;\n' +
                '        font-size: 0.13rem;\'>' + acceptNum[4] + '人</span>' +
                '</div>' +
                '<div>' +

                '<div class=\'\' style=\'width: 0;\n' +
                '        height: 0;\n' +
                '        border-left: 7px solid transparent;\n' +
                '        border-right: 7px solid transparent;\n' +
                '        border-top: 7px solid #ffffff;\n' +
                '        position: absolute;\n' +
                '        left: -8%;\n' +
                '        top: 50%;\'></div>' +
                '</div>'
            return res
        },
        padding: [
            11, // 上
            19, // 右
            13, // 下
            13 // 左
        ],
        // extraCssText: 'box-shadow:0px 1px 2px 0px rgba(134,134,134,0.45),0px -1px 2px 0px rgba(0,0,0,0.03);',
    },
    radar: {
        center: ['45%', '50%'],
        radius: '75%',
        // splitNumber:splitNumber,
        name: {
            textStyle: {
                color: '#595959',
            },
        },
        axisLine: {
            lineStyle: {
                color: '#DEDEDE',
                width: 1,
                type: 'dotted',
            },
        },
        splitLine: {
            lineStyle: {
                color: ['#EDEEF4'],
                width: 1,
            },
        },
        splitArea: {
            areaStyle: {
                color: ['#F8FAFD', '#F8FAFD', '#F8FAFD', '#F8FAFD'],
                shadowColor: '#fff',
            },
        },
        indicator: dataMax,
    },
    series: [{
            type: 'radar',
            name: "变化的值",
            data: [{
                value: seriesData,
                symbol: 'none',
                symbolSize: 4,
                name: dataMax,
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        color: '#8097EF',
                    },
                },
                areaStyle: {
                    normal: {
                        color: '#8097EF',
                    },
                },
            }],
        },
        {
            name: "满值",
            type: "radar",
            symbolSize: 4,
            symbol: 'circle',
            itemStyle: {
                color: '#FCCE3B',
                borderColor: '#FCCE3B',
                borderWidth: 4,
            },
            lineStyle: {
                color: '#E9EBF1',
                width: 1
            },
            data: [maxValue]
        }
    ],
};