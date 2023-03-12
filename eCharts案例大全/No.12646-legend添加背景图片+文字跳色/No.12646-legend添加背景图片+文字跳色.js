let pieSource = {
        '这个人员': 335,
        '那个人员': 335,
        '这个那个人员': 335,
        '特殊人员': 335,
        '优先人员': 335,
        '正常人员': 335,
        '特别正常人员': 335,
        '人员': 335,
    },
    legendColor = ["#3471fd", "#6babff", "#aee1ff", "#fca98f", "#5598ff", "#4a53ff", "#fe6e52", "#5fc6fc"],
    richStyle = {};

function initData(source) {
    legendColor.map((item, index) => {
        richStyle['style' + index] = {};
        richStyle['style' + index]['color'] = item;
        richStyle['style' + index]['align'] = 'right';
    });
    if (Object.prototype.toString.call(source) === '[object Object]') {
        const arr = [];
        const legendData = [];
        Object.entries(source).forEach((value) => {
            legendData.push(value[0]);
            let obj = {};
            obj.name = value[0];
            obj.value = value[1];
            arr.push(obj);
        });
        source = arr;
        return {
            source,
            legendData
        };
    } else if (source && Object.prototype.toString.call(source) === '[object Array]') {
        let legendData = [];
        source.forEach((item, index) => {
            legendData.push(item.name);
        });
        return {
            source,
            legendData
        };
    }
}
source = initData(pieSource);
option = {
    backgroundColor: '#131535',
    tooltip: {
        trigger: 'item',
        textStyle: {
            color: '#fff',
            // fontSize:28
        },
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color: legendColor,
    legend: [{
            orient: 'vertical',
            left: 500,
            y: 'center',
            icon: 'rect',
            textStyle: {
                color: '#cddafd',
                fontSize: 14,
                rich: richStyle,
                width: 207,
                height: 20,
                backgroundColor: {
                    image: '/asset/get/s/data-1545016257824-mxLqGjr4z.png',
                },
            },
            padding: [30, 0, 30, 0],
            itemWidth: 10,
            itemHeight: 5,
            itemGap: 20,
            data: source.legendData.slice(0, 4),
            formatter: function(name) {
                let oa = option.series[0].data;
                let total = 0;
                oa.forEach((item, index) => {
                    total += item.value;
                });
                for (let i = 0; i < oa.length; i++) {
                    if (name == oa[i].name) {
                        // return name + '  ' + '{style'+i+'|' + (oa[i].value / total * 100).toFixed(2) + '%}';
                        return name + '{style' + i + '|' + (oa[i].value / total * 100).toFixed(2) + '%}';
                    }
                }
            },
        },
        {
            orient: 'vertical',
            left: 800,
            y: 'center',
            icon: 'rect',
            textStyle: {
                color: '#cddafd',
                fontSize: 14,
                rich: richStyle,
                width: 207,
                height: 20,
                backgroundColor: {
                    image: '/asset/get/s/data-1545016257824-mxLqGjr4z.png',
                },
            },
            padding: [30, 0, 30, 0],
            itemWidth: 10,
            itemHeight: 5,
            itemGap: 20,
            data: source.legendData.slice(4),
            formatter: function(name) {
                let oa = option.series[0].data;
                let total = 0;
                oa.forEach((item, index) => {
                    total += item.value;
                });
                for (let i = 0; i < oa.length; i++) {
                    if (name == oa[i].name) {
                        return name + '  ' + '{style' + i + '|' + (oa[i].value / total * 100).toFixed(2) + '%}';
                    }
                }
            },
        }
    ],
    series: [{
        name: '重点人员',
        type: 'pie',
        radius: ['10%', '40%'],
        center: ['20%', '50%'],
        data: source.source,
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                shadowColor: '#438bff',
                shadowBlur: 20
            },
        }
    }]
};