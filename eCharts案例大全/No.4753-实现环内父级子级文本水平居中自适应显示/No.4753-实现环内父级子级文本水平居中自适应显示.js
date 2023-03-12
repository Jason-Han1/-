let echartData = {
    outer: [{
            value: 30,
            unit: '件',
            name: '已保护'
        },
        {
            value: 164,
            unit: '件',
            name: '未保护'
        }
    ]
}

var tarObj = {
    '已保护': 30,
    '未保护': 164
}

function fontSize(res) { // 用来计算文字大小

    let docEl = document.documentElement,

        clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (!clientWidth) return;

    let fontSize = 2.5 * (clientWidth / 1920);

    return res * fontSize;

}

// 获取图例数据
var arrName = getArrayValue(echartData.outer, "name");

function getArrayValue(array, key) {
    key = key || "value";
    var res = [];
    if (array) {
        array.forEach(function(t) {
            res.push(t[key]);
        });
    }
    return res;
}


option = {
    backgroundColor: "#ffffff",
    title: {
        text: '新卡数',
        subtext: 7789,
        textStyle: {
            color: '#2F396C',
            fontSize: fontSize(30),
        },
        subtextStyle: {
            fontSize: fontSize(40),
            color: '#8494A7',
        },
        top: '46%',
        left: "40%",
        textAlign: 'center',
        textVerticalAlign: 'middle'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    color: ['#3190F6', '#FF5B5C', '#53c9c8', '#489ee5', '#436fce'],
    legend: { // 右侧注释
        show: true,
        top: "46%",
        left: '80%',
        data: arrName,
        itemWidth: 20,
        itemHeight: 20,
        padding: [0, 5],
        itemGap: 25,
        textStyle: {
            color: '#b0b9cb'
        },
        formatter: function(name) {
            return name + ' ' + tarObj[name]
            // return "{title|" + name + "}\n{value|" + (objData[name].value) + "人}"
        },
    },
    series: [

        {
            name: '控制台',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ["40%", "50%"],
            startAngle: '0',
            data: echartData.outer,
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: { // 此配置
                normal: {
                    borderWidth: 2,
                    borderColor: '#fff',
                }
            }
        }
    ]
};