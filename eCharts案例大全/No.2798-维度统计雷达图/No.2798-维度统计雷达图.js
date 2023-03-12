const dataname = ['认证', '邀请', '注册', 'VIP会员', '等级', '信用分'];
const datamax = [100, 100, 100, 100, 100, 100];
const value1 = [89, 93, 60, 59, 85, 91];
const num = 72;

var indicator = [];
for (var i = 0; i < dataname.length; i++) {
    indicator.push({
        name: dataname[i],
        max: 100,
    });
}
option = {
    backgroundColor: '#2e6cf6',
    title: {
        text: [`{span|${num}}`].join(''),
        bottom: 'center',
        left: 'center',
        textStyle: {
            rich: {
                span: {
                    fontSize: 120,
                    color: '#fff',
                },
            },
        },
    },
    radar: {
        center: ['50%', '50%'],
        radius: '50%',
        splitArea: {
            areaStyle: {
                color: ['rgba(255,255,255,0.1)'].reverse(),
            },
        },
        axisLine: {
            show: true,
            lineStyle: {
                // color: '#fff',
                color: ['rgba(255,255,255,0.3)'].reverse(),
            },
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#ccc',
            },
        },
        name: {
            show: true, // 是否显示工艺等文字
            formatter: function (name) {
                const i = dataname.indexOf(name);
                return `{name|${name}}`;
                // return `{name1|${value1[i]}}\n{name3|${name}}`;
            },

            lineHeight: 20,
            rich: {
                name: {
                    color: '#fff',
                    fontSize: 20,
                    align: 'center',
                },
                // name2: {
                //     color: '#DFB48F',
                //     align: 'center',
                // },
                // name3: {
                //     color: '#606266',
                //     align: 'center',
                // },
            },
        },
        indicator: indicator,
    },

    series: [
        {
            name: '信用分',
            type: 'radar',
            symbol: 'none',
            areaStyle: { normal: { color: 'rgba(255,255,255,0.7)' } },
            lineStyle: { width: 0 },
            data: [value1],
        },
    ],
};
