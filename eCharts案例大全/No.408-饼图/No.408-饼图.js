var legends = ['湖北', '河南', '山西'];
var colors = ['#0f99df', '#df48ff', '#faee04'];
var data = [
    {
        name: '湖北',
        value: 1,
    },
    {
        name: '河南',
        value: 2,
    },
    {
        name: '山西',
        value: 3,
    },
];
var total = data.reduce((prev, curr) => prev + curr.value, 0);
console.log(total);
let target1 = 55555;
option = {
    backgroundColor: '#0d0a3a',
    color: colors,
    title: {
        text: ['{a|动态数据:    }',  '{c|' + target1 + '}', '{a|(万吨)}'].join(''),
        right: '11%',
        top: '38%',
        textStyle: {
            rich: {
                a: {
                    color: '#fff',
                    fontSize: '16px',
                },
                c: {
                    fontFamily: 'Regular',
                    color: '#faee04',
                    fontWeight: 'Bold',
                    fontSize: '20px',
                },
            },
        },
    },
    legend: {
        orient: 'vertical',
        icon: 'rect',
        top: 'center',
        right: '15%',
        itemGap: 10,
        itemWidth: 16,
        itemHeight: 16,
        formatter: (name) => {
            let target = 10000;
            let arr = '';
            if (name == '湖北') {
                arr = ['{a|' + name + '}', '{b|' + target + '}', '{a|万吨}'];
            }
            if (name == '河南') {
                arr = ['{a|' + name + '}', '{c|' + target + '}', '{a|万吨}'];
            }
            if (name == '山西') {
                arr = ['{a|' + name + '}', '{d|' + target + '}', '{a|万吨}'];
            }
            return arr.join('');
        },
        textStyle: {
            rich: {
                a: {
                    color: '#fff',
                    lineHeight: 10,
                    fontFamily: 'Regular',
                    fontSize: '14px',
                },
                b: {
                    color: 'green',
                    fontFamily: 'Regular',
                    lineHeight: 10,
                    fontSize: '14px',
                },
                c: {
                    color: 'blue',
                    fontFamily: 'Regular',
                    lineHeight: 10,
                    fontSize: '14px',
                },
                d: {
                    color: '#f40',
                    fontFamily: 'Regular',
                    lineHeight: 10,
                    fontSize: '14px',
                },
            },
        },
        data: legends,
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    series: [
        {
            name: '半径模式',
            type: 'pie',
            radius: ['30%', '80%'],
            center: ['40%', '50%'],
            roseType: 'radius',
            minShowLabelAngle: 60,
            label: {
                show: false,
            },
            labelLine: {
                //血线
                show: false,
            },
            data: data,
        },
    ],
};
