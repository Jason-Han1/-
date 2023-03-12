/**
 *
 * @param {*} len   数组长度
 * @param {*} start 最小值
 * @param {*} end   最大值
 * @return {*} 
 */
function random(len, start, end) {
    var arr = [];

    function _inner(start, end) {
        var span = end - start;
        return parseInt(Math.random() * span + start)
    }
    while (arr.length < len) {
        var num = _inner(start, end);
        if (arr.indexOf(num) == -1) {
            arr.push(num);
        }
    }
    return arr;
}


var dataArr = [{
        value: random(1, 30000000, 5000000),
        name: '数据一',
    }, {
        value: random(1, 30000000, 5000000),
        name: '数据二',
    }, {
        value: random(1, 30000000, 5000000),
        name: '数据三',
    }

];

let total = 0; //合计总数
for (var totalIndex = 0; totalIndex < dataArr.length; totalIndex++) {
    console.log(dataArr[totalIndex].value)
    total += dataArr[totalIndex].value[0]
}
if (total === 0) { //当值为0时 不显示 改为字符串可显示
    total = "0"
}

var colorsArr = ["#27adff", "#f96f6c", "#47bd6c"];

option = {
    backgroundColor: '#fff',
    title: {
        text: total,
        top: '48%',
        textAlign: "center",
        left: "49%",
        itemGap:0,//主副标题间隔
        textStyle: {
            color: '#000',
            fontSize: 18,
            fontWeight: '700',
            padding:[50,50,50,50]

        },
        subtext: '合计',
        subtextStyle: {
            color: '#1e86ef',
            fontSize: 16,
            fontWeight: '400',
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function(parms) { //hover显示内容
            var str = parms.marker + "" + parms.data.name + "</br>" +
                "销售额：" + parms.data.value + "</br>" +
                "占比：" + parms.percent + "%";
            return str;
        },
    },
    series: [{
        type: 'pie',
        radius: ['50%', '70%'],
        // hoverAnimation:false,
        startAngle: 90,
        color:colorsArr,

        label: {
            normal: {
                // formatter: '{text|{b}} \n{num|{c} ({d}%)}',
                formatter: '{text|{b}} \n{num|{c}}',

                textStyle: {
                    fontWeight: 'bold',
                    fontSize: 14,
                    rich: {
                        text: {
                            fontWeight: '700',
                            padding: [10, -50, 0, -50]
                        },
                        num: {
                            padding: [0, -50, 10, -50]
                        }
                    }
                },

            }
        },
        labelLine: {
            normal: {
                length: 10,
                length2: 60
            }
        },
        data: dataArr
    }, ]
};