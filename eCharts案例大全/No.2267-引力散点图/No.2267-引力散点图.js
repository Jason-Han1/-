var datas = [
    {
        name: 'A01区',
        value: 13,
    },
    {
        name: 'A02区',
        value: 54,
    },
    {
        name: 'A03区',
        value: 156,
    },
    {
        name: 'A04区',
        value: 82,
    },
    {
        name: 'A05区',
        value: 42,
    },
    {
        name: 'A06区',
        value: 51,
    },
    {
        name: 'A07区',
        value: 82,
    },
    {
        name: 'A08区',
        value: 42,
    },
    {
        name: 'A09区',
        value: 51,
    },
    {
        name: 'A10区',
        value: 82,
    },
];
function compare(propertyName) {
    return function (object1, object2) {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if (value2 < value1) {
            return 1;
        } else if (value2 > value1) {
            return -1;
        } else {
            return 0;
        }
    };
}
datas = datas.sort(compare('value')).reverse();
var seriesData = [];
var maxValue = datas[0].value;
var colors = [
    '#49CCFF',
    '#20D3AB',
    '#FDD56A',
    '#49CCFF',
    '#20D3AB',
    '#FDD56A',
    '#49CCFF',
    '#20D3AB',
    '#FDD56A',
    '#49CCFF',
    '#20D3AB',
    '#FDD56A',
];
var colors2 = [
    '#49CCFF88',
    '#20D3AB88',
    '#FDD56A88',
    '#49CCFF88',
    '#20D3AB88',
    '#FDD56A88',
    '#49CCFF88',
    '#20D3AB88',
    '#FDD56A88',
    '#49CCFF88',
    '#20D3AB88',
    '#FDD56A88',
];
for (var i = 0; i < datas.length; i++) {
    var ss = 120;
    if (i < 3) {
        ss = 100 - i * 10;
    } else if (3 <= i < 10) {
        ss = 100 - i * 10;
    } else {
        ss = 100 - i * 4;
    } 
    var item = {
        name: datas[i].name,
        value: datas[i].value,
        symbolSize: ss,
        draggable: true, 
            label: {
                show: true,
                formatter: ['{title|{b}}', '{name|{c}}'].join('\n'), 
                rich: {
                    title: {
                        fontSize: 12,
                        color: '#fff',
                        textBorderColor: colors[i],
                        textBorderWidth:2,
                        textAlign: 'center',
                        align: 'center',
                    },
                    name: {
                        fontSize: 12,
                        color: '#fff',
                        textBorderColor: colors[i],
                        textBorderWidth:2,
                        textAlign: 'center',
                        align: 'center',
                    },
                },
            },
        itemStyle: {
            color: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.5,
                colorStops: [
                    {
                        offset: 0,
                        color: colors[i],
                    },
                    {
                        offset: 1,
                        color: colors2[i],
                    },
                ],
                global: false,
            },
            borderColor: colors[i],
                    shadowBlur: 20,
                    shadowColor: colors[i],
            borderWidth: 2,
        },
    };

    seriesData.push(item);
} 
option = {
    tooltip: {
        formatter: function (params) {
            console.log(params);
            var str = params.marker + '' + params.data.name + '</br>' + '门禁数量：' + params.data.value + '个</br>';
            return str;
        },
    },
    animationDurationUpdate: function (idx) {
        // 越往后的数据延迟越大
        return idx * 1;
    },
    animationEasingUpdate: 'bounceIn',
    color: ['#fff', '#fff', '#fff'],
    series: [
        {
            type: 'graph',
            layout: 'force',
            force: {
                repulsion: 130,
                edgeLength: 10,
            },
            roam: true,
            data: seriesData,
        },
    ],
};
