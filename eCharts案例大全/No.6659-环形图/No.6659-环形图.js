var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 10,
        shadowColor: 'rgba(40, 40, 40, 0.3)',
    }
};
var placeHolderStyle = {
    normal: {
        color: 'rgba(0,0,0,0)',
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    // emphasis: {
    //     color: 'rgba(0,0,0,0)'
    // }
};
var item = {
    value: 50,
    name: 'invisible',
    tooltip: {
        show: false
    },
    itemStyle: placeHolderStyle
}
var da = [
        {name: '公司1', value: 300},
        {name: '公司2', value: 200},
        {name: '公司3', value: 100},
        {name: '公司4', value: 50},
        {name: '公司5', value: 25},
        {name: '公司6', value: 15}
    ]
var daa = [
        {name: '公司1', value: 300, percent: '43.47%'},
        {name: '公司2', value: 200, percent: '28.98%'},
        {name: '公司3', value: 100, percent: '14.49%'},
        {name: '公司4', value: 50, percent: '7.24%'},
        {name: '公司5', value: 25, percent: '2.89%'},
        {name: '公司6', value: 15, percent: '2.1%'}
    ]

var total = 0
daa.map(res => {
    total += res.value
})
daa.forEach(res => {
    res.percent = ((res.value / total) * 100).toFixed(1);
})
console.log(daa)
var color = ["#857ABA", "#4C3CAE", "#8C0F86", "#CA2C95", "#E1A4C4", "#857ABA"]
var data1 = []
var title = '供应商'
var arrName = getArrayValue(daa, "name");
var arrValue = getArrayValue(daa, "value");
var sumValue = eval(arrValue.join('+'));
var objData = array2obj(daa, "name");

function getArrayValue(array, key) {
    var key = key || "value";
    var res = [];
    if (array) {
        array.forEach(function(t) {
            res.push(t[key]);
        });
    }
    return res;
}

function array2obj(array, key) {
    var resObj = {};
    for (var i = 0; i < array.length; i++) {
        resObj[array[i][key]] = array[i];
    }
    return resObj;
}
for (let i = 0; i < arrValue.length; i++) {
    data1.push({
        name: title,
        type: 'pie',
        // center: ["18%", "50%"],
        clockWise: false,
        // radius: [180, 200],
        radius: [150 - i * 20, 170 - i * 20],
        label: {
            show: false
        },
        // itemStyle: dataStyle,
        hoverAnimation: false,
        data: [{
            value: arrValue[i],
            name: arrName[i]
        }, item]
    })
}
option = {
    // backgroundColor: '#1C0D22',
    color: color,
    tooltip: {
        show: true,
        formatter: "{a} <br/>{b} : {c}"
    },
    legend: {
        itemGap: 7,
        top: '27%',
        right: '10px',
        formatter: function(name) {
            return "{percent|" + objData[name].percent + "% }{name|" + name + " }{value|" + (objData[name].value) + "项}"
        },
        textStyle: {
            rich: {
                percent: {
                    fontSize: 15,
                    color: ''
                },
                name: {
                    fontSize: 18,
                    color: "rgba(0,0,0,.45)"
                },
                value: {
                    fontSize: 14,
                    // lineHeight: 18,
                    color: "rgba(0,0,0,.85)"
                }
            }
        },
        orient: 'vertical',
        data: arrName
    },
    series: data1
};