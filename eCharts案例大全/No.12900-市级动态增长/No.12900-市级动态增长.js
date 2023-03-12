var originaldata = [{
    "value": 1165494,
    "name": "地方级",
    "abc":'增长12%',
    "children": [{
        "value": 422034,
        "name": "市级",
        "abc":'增长20%',
    }, {
        "value": 743461,
        "name": "区级",
        "abc":'增长30%',
    }]
}, {
    "value": 1090671,
    "name": "中央级",
    "abc":'增长5%',
}];
var color0 = ['#4A6DBF', '#15B3BC', '#FD4440'];
var data0 = [];
for (var i = 0; i < originaldata.length; i++) {
    var obj = originaldata[i];
    data0.push({
        value: obj.value,
        name: obj.name,
        abc:obj.abc,
        itemStyle: {
            color: color0[i]
        },
        labelLine: {
            length: 40,
            length2: 10
        }
    });
}

var color1 = ['rgba(244,156,31,3)', 'rgba(194,134,208,3)', 'rgba(198,52,157,3)'];
var data1 = [];
for (var i = 0; i < originaldata.length; i++) {
    var obj = originaldata[i];
    var kids = obj.children;
    if (typeof(kids) === 'undefined') {
        data1.push({
            value: obj.value,
            name: obj.name,
            abc:obj.abc,
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
                abc:kid.abc,
                itemStyle: {
                    color: color1[k]
                },
                label: {
                    normal: {
                        position: 'outside',
                        // formatter: '{b}\n{c}\n {d}%',
                        formatter: function (params) {
    			        	 return params.name+'\n'+params.value+'\n'
    			        	 +params.percent+'%\n'+params.data.abc;
    			        },
                        color: '#080808'
                    }
                }
            });
        }
    }
    // alert(k);
}

option = {
    backgroundColor: '#ffff',
    series: [{
            name: '访问来源',
            type: 'pie',
            animation: false,
            radius: ['27%', '54%'],
            label: {
                normal: {
                    position:'inner',
                    // formatter: '{b}\n{c}\n {d}%',
                    formatter: function (params) {
			        	 return params.name+'\n'+params.value+'\n'
			        	 +params.percent+'%\n'+params.data.abc;
			        },
                    color: '#fff',
                    show:true
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
            },
            data: data0
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['54%', '64%'],
            animation: false,
            data: data1
        }
    ],
};