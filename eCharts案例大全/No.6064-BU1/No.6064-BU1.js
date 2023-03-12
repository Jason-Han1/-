// 全部样式请查看：http://js.jirengu.com/sezev/2/
// 全部样式请查看：http://js.jirengu.com/sezev/2/
// 全部样式请查看：http://js.jirengu.com/sezev/2/
// 全部样式请查看：http://js.jirengu.com/sezev/2/
// 全部样式请查看：http://js.jirengu.com/sezev/2/
// 全部样式请查看：http://js.jirengu.com/sezev/2/
// 全部样式请查看：http://js.jirengu.com/sezev/2/
// 全部样式请查看：http://js.jirengu.com/sezev/2/
// 全部样式请查看：http://js.jirengu.com/sezev/2/



document.getElementById('chart-panel').style.backgroundColor = 'rgba(13, 17, 29)';

var data = [{
    name: '同城',
    value: 45,
    percent: 97568
}, {
    name: '国际',
    value: 40,
    percent: 85958
}, {
    name: '冷运',
    value: 30,
    percent: 7725
}, {
    name: '快运',
    value: 25,
    percent: 3529
}, {
    name: '泰丰产业园',
    value: 15,
    percent: 600
}, {
    name: 'TS',
    value: 12,
    percent: 300
}, {
    name: 'KC',
    value: 12,
    percent: 262
}, {
    name: '特种',
    value: 10,
    percent: 50
}, {
    name: '多式联运',
    value: 10,
    percent: 82
}];


var option = option = {
    title: {
        show: false
    },
    tooltip: {
        formatter: function(info) {
            return info.name + " : " + "<span style='color:rgba(25, 181, 165)'>" + info.data.percent + '人</span>';
        },
        backgroundColor: 'rgba(29, 38, 71)',
        extraCssText: 'box-shadow: 0 0 3px rgba(10, 88, 82, 0.8);'
    },

    series: [{
        type: 'treemap',
        left: 'center',
        breadcrumb: {
            show: false
        },
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    formatter: "{b}",
                },
                borderWidth: 1,
                borderColor: 'rgba(0, 0, 0)',
                strokeWidth: 2,
                strokeColor: 'rgba(0, 0, 0)',
            },
            emphasis: {
                label: {
                    show: true,
                    color: 'rgba(22, 90, 90)'
                },
                color: 'rgba(11, 117, 212)'
            }
        },
        label: {
            normal: {
                fontSize: 20
            }
        },
        data: data
    }],
    color: ["rgba(112,128,144)"]
};