var data = [{
        value: 140,
        name: '单位1',
        selected: true
    },
    {
        value: 150,
        name: '单位2',
        selected: true
    },
    {
        value: 130,
        name: '单位3',
        selected: true
    }
];
var data1 = [{
    value: 60,
    name: 'A'
}];
var a = 0;
for (var i = 0; i < data.length; i++) {
    a += data[i].value;
}
data.push({
    value: a,
    name: '__other',
    itemStyle: {
        normal: {
            color: 'rgba(0,0,0,0)'
        }
    }
});
console.log(data);

var b = 0;
for (var i = 0; i < data1.length; i++) {
    b += data1[i].value;
}
data1.push({
    value: b,
    name: '__other',
    itemStyle: {
        normal: {
            color: 'rgba(0,0,0,0)'
        }
    }
});
console.log(data);
option = {
    title: {
        text: '半圆饼图',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [{
            name: '访问来源',
            type: 'pie',
            startAngle: -180,
            radius: ['0', '20%'],
            center: ['50%', '60%'],
            itemStyle: {
                "normal": {
                    "label": {
                        "show": false
                    },
                    "labelLine": {
                        "show": false
                    }
                }
            },
            roseType: 'radius',
            data: data1

        },
        {
            name: '访问来源',
            type: 'pie',
            startAngle: -180,
            radius: ['20%', '200%'],
            center: ['50%', '60%'],
            label: {
                position: 'inner'
            },
            roseType: 'radius',
            data: data
        }
    ]
};