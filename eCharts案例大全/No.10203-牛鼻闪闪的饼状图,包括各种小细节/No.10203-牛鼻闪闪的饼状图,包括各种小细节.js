var data = {
    source: [
        ['葱花味', 88],
        ['酱香味', 23],
        ['清香味', 90],
        ['古墓味', 67],
        ['柠檬味', 98]
    ]
};
var data2 = {
    source: [
        ['葱花味', '酱香味', '清香味', '古墓味'],
        [88, 23, 90, 67],
    ]
};



option = {
    dataset: data,
    backgroundColor: '#0c244cf0',
    color: ['#f92e30', '#34d160', '#2853ec', '#fdd101', '#ff6c00'],
    title: {
        text: [
            '{a|葱油饼香型}',
            '{b|768}'
        ].join('\n'),
        left: 'center',
        top: 'center',
        textStyle: {
            color: '#fff',
            rich: {
                a: {
                    color: '#fff',
                    fontSize: 16,
                    height: 40
                },
                b: {
                    color: '#fdb301',
                    fontSize: 50,
                }
            },
        },

    },
    graphic: [{
        type: 'text',
        top: 20,
        left: 'center',
        style: {
            text: '牛逼闪闪的环状饼图',
            font: 'normal 1.3em "Microsoft YaHei", sans-serif',
            fill: '#fff'
        }
    }],
    tooltip: {},
    legend: {
        textStyle: {
            color: '#fff'
        },
        icon: 'rect',
        top: 'center',
        right: 100,
        orient: 'vertical',
        itemGap: 40,
        itemWidth: 15,
        formatter: function(name) {
            var res = name;
            data.source.forEach((element, index, array) => {
                if (element[0] == name) {
                    res = `${element[0]} ${element[1]}`;
                }
            });
            return res;
        }
    },
    series: [{
        type: 'pie',
        radius: ['35%', '60%'],
        seriesLayoutBy: 'column',
        label: {
            show: false
        },
        encode: {
            itemName: 0,
            value: 1
        }

    }, ]
};