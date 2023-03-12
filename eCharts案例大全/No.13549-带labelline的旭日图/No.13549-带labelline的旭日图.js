var originaldata = [{
    "value": 60,
    "name": "移动端",
    "children": [{
        "value": 40,
        "name": "苹果"
    }, {
        "value": 10,
        "name": "安卓"
    }, {
        "value": 10,
        "name": "塞班"
    }]
}, {
    "value": 40,
    "name": "PC"
}, {
    "value": 40,
    "name": "平板"
}];
var color0 = ['#4A6DBF', '#15B3BC', '#FD4440'];
var data0 = [];
for (var i = 0; i < originaldata.length; i++) {
    var obj = originaldata[i];
    data0.push({
        value: obj.value,
        name: obj.name,
        itemStyle: {
            color: color0[i]
        },
        labelLine: {
            length: 40,
            length2: 10
        }
    });
}

var color1 = ['rgba(244,156,31,0.3)', 'rgba(94,140,208,0.3)', 'rgba(198,52,157,0.3)'];
var data1 = [];
for (var i = 0; i < originaldata.length; i++) {
    var obj = originaldata[i];
    var kids = obj.children;
    if (typeof(kids) === 'undefined') {
        data1.push({
            value: obj.value,
            name: obj.name,
            itemStyle: {
                color: 'transparent'
            }
        });
    } else {
        for (var k = 0; k < kids.length; k++) {
            var kid = kids[k];
            data1.push({
                value: kid.value,
                name: kid.name,
                itemStyle: {
                    color: color1[k]
                },
                label: {
                    normal: {
                        position: 'outside',
                        formatter: '{b} {d}% ',
                        color: '#909090'
                    }
                }
            });
        }
    }
    // alert(k);
}

option = {
    backgroundColor: '#161823',
    series: [{
            name: '访问来源',
            type: 'pie',
            animation: false,
            radius: ['47%', '74%'],
            label: {
                normal: {
                    position: 'outside',
                    formatter: '{b} {d}% ',
                    color: '#fff'
                }
            },
            labelLine: {
                normal: {
                    show: true
                },
            },
            data: data0
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['74%', '84%'],
            animation: false,
            data: data1
        }
    ],
};