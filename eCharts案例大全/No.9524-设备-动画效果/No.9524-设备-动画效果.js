let data = [{
    "name": "使用中",
    "value": 23
}, {
    "name": "维修中",
    "value": 9
}, {
    "name": "休息",
    "value": 15
}, {
    "name": "未使用",
    "value": 2
}];
let color = ["#AB63F7", "#FF8266", "#66B5FF ", "#6678FF"];
let echart = echarts.init(document.getElementById('chart-panel'));

let option = {
    backgroundColor: '#000',
    title: {
        text: data[0].value,
        subtext: data[0].name,
        x: '50%',
        y: '45%',
        textAlign: 'center',
        textStyle: {
            color: '#00ffff',
            fontSize: 50,
        },
        subtextStyle: {
            color: 'rgba(255,255,255,0.5)',
            fontSize: 14
        }
    },
    animation: true,
    legend: {
        textStyle: {
            rich: {
                blue: {
                    color: "#029aff"
                },
                white: {
                    color: "#fff",
                }
            },

            fontSize: 14
        },
        itemHeight: 3,
        itemWidth: 10,
        icon: 'rect',
        bottom: "center",
        right: "0",
        orient: 'horizonta',
        padding: [10, 20],
        itemGap: 20,
        formatter: function(values) {
            // console.log(values)
            let value = '';
            data.forEach(function(item, index) {
                if (item.name == values) {
                    value = item.value;
                }

            });
            return '{blue|' + values + '}' + '  ' + '{white|' + value + '}';
        },
        data: ["使用中", "维修中", "休息", "未使用"],

    },
    series: [{
        type: "pie",
        center: ["50%", "50%"],
        radius: ["35%", "50%"],
        color: color,
        startAngle: 150,
        label: {
            normal: {
                show: false,
                position: 'center',
                formatter: "{per|{d}%}{b|{b}}  ",
                rich: {
                    b: {
                        fontSize: 14,
                    },
                    per: {
                        fontSize: 16,
                    }
                },
            }
        },
        data: data
    }]
}
echart.setOption(option);
var app = {
    currentIndex: -1
};

/**var changeFocus;
先移除定时器，然后再绑定定时器
window.clearInterval(changeFocus);
changeFocus = */
window.setInterval(function() {
    var dataLen = option.series[0].data.length;
    // 取消之前高亮的图形
    echart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: app.currentIndex
    });
    app.currentIndex = (app.currentIndex + 1) % dataLen;
    echart.setOption({
        title: {
            text: data[app.currentIndex].value,
            subtext: data[app.currentIndex].name
        }
    });
    // 高亮当前图形
    echart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: app.currentIndex
    });
    // 显示 tooltip
    echart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: app.currentIndex
    });
}, 3000);