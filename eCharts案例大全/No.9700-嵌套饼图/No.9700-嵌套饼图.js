var cg = ['汽油', '汽油', '柴油', '柴油'];
var cg1 = ['汽油1', '汽油2', '柴油1', '柴油2'];
var cd = [90, 80, 60, 25];




var color = ['#61A5E8', '#7ECF51', '#FCCE10', '#223273', '#12c2c2',
    '#E16757', '#9570E5', '#605FF0', '#F3A43B', '#60C0DD',
    '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
];

function unique(arr) {
    var temp = [];
    for (var a = 0; a < arr.length; a++) {
        if (temp.indexOf(arr[a]) == -1) {
            temp.push(arr[a]);
        }
    }
    return temp;
}
var c = [];
var c = unique(cg);
//console.log(c);

var c3 = [];

for (var m = 0; m < c.length; m++) {
    te = [];
    for (var i = 0; i < cg1.length; i++) {
        if (cg[i] == c[m]) {
            te.push({
                name: cg1[i],
                label: {
                    align: 'left',
                    position: 'inside',
                    formatter: '{b}\n{c}'
                },
                itemStyle: {
                    color: color[i]
                },

                value: cd[i]
                // value: 10
            });
        }
    }
    c3.push({
        name: c[m],
        label: {
            align: 'left',
            position: 'inside',
            formatter: '{b}\n{c}'
        },
        children: te
    });
}

//console.log(c3);
//console.log(data);
option = {
    series: {
        radius: ['20%', '90%'],
        type: 'sunburst',
        sort: null,
        name:'销量',
        highlightPolicy: 'none',
        data: c3,
        label: {
            formatter: '{b}\n{c}',
            fontSize: 20
        },
        emphasis: {
            label: {
                formatter: '{b}\n{c}'
            }
        }
    }
};