var getname = ['汉族', '满族', '其他'];
var getvalue = [12032, 10362, 9230];

var data = [];
for (var i = 0; i < getname.length; i++) {
    data.push({
        name: getname[i],
        value: getvalue[i]
    })
}

var colorList = [{
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: '#1B856D' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#2CFFBA' // 100% 处的颜色
    }],
}, {
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: '#FFFF00' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#817619' // 100% 处的颜色
    }],
}, {
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: '#27F8F6' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#209ECD' // 100% 处的颜色
    }],
}];

option = {
    backgroundColor: '#000',
    title: {
        text: '民族',
        textStyle: {
            color: '#F1F2F4',
            fontSize: 16,
            fontWeight:'400',
        },
        left: 'center',
        top: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}：{c}人"
    },

    legend: {
        right: '10%',
        bottom: '4%',
        left: 'center',
        itemWidth: 6,
        itemHeight: 6,
        itemGap: 20,
        icon: "circle",
        data: getname,
        textStyle: {
            color: '#A9C1E5',
            fontSize: 12,
        }

    },
    series: [{
        type: 'pie',
        radius: ['50%', '60%'],
        center: ["50%", "50%"],
        itemStyle: {
            normal: {
                borderColor: '#111E2F',
                borderWidth: 5,
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        label: {
            normal: {
                show: false,
            },
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: data
    }]
};