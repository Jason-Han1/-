option = {
    // 标题
    title: {
        text: '单折线图测试用例', // 标题名称
    },
    // x轴
    xAxis: {
        data: getDateArr(7), // x轴坐标名称
    },
    // y轴
    yAxis: {},
    // 提示框，鼠标悬浮交互时的信息提示
    tooltip: {
        show: true, // 是否显示
        formatter: '{a}:<br>&nbsp;&nbsp;时间：{b} 值：{c}', // 内容格式器 a（系列名称），b（类目值），c（数值）, d（无）
        trigger: 'axis', // 触发类型，默认数据触发，见下图，可选为：'item' | 'axis'
    },
    // 指定图标的类型
    series: [{
        name: '用例A', // 系列名称
        type: 'line', // 类型：线
        data: getRndArr(7), // 数据
        markPoint: {
            // 标注图形数据
            data: [{
                    type: 'max', // 类型
                    symbol: 'circle', // 标志图形类型，默认自动选择（8种类型循环使用，不显示标志图形可设为'none'），默认循环选择类型有：'circle' | 'rectangle' | 'triangle' | 'diamond' |'emptyCircle' | 'emptyRectangle' | 'emptyTriangle' | 'emptyDiamond' 另外，还支持五种更特别的标志图形'heart'（心形）、'droplet'（水滴）、'pin'（标注）、'arrow'（箭头）和'star'（五角星），这并不出现在常规的8类图形中，但无论是在系列级还是数据级上你都可以指定使用，同时，'star' + n（n>=3)可变化出N角星，如指定为'star6'则可以显示6角星 
                    name: '最大值'
                },
                {
                    type: 'min', // 类型
                    symbol: 'pin',
                    name: '最小值'
                },
            ],
            // 特殊标注文字
            label: {
                normal: {
                    show: true,
                    //position: 'top', // 文字位置
                    // 显示的文字
                    formatter: '{b}：{c}',
                }
            },
            // 触发操作
            tooltip: {
                show: true, // 是否显示
                formatter: '{b}：{c}', // 内容格式器 a（系列名称），b（类目值），c（数值）, d（无）
                trigger: 'item', // 触发类型，默认数据触发，见下图，可选为：'item' | 'axis'
            },
        },
        markLine: {
            data: [{
                type: 'average',
                name: '平均值',
                itemStyle: {
                    normal: {
                        color: 'green'
                    }
                }
            }]
        },
        // 折线图圆点
        label: {
            normal: {
                show: true,
                //position: 'bottom', // 文字位置
                // 显示的文字
                formatter: '{c}',
                textStyle: {
                    color: '#000' // 文字颜色
                }
            }
        },

    }]
};

// 获取日期集合
function getDateArr(day) {
    dateArr = [];
    for (i = 0; i < day; i++) {
        dateArr.unshift(getDay(-i))
    }
    return dateArr;
}

// 获取日期
function getDay(day) {
    var today = new Date();
    var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
    today.setTime(targetday_milliseconds); //注意，这行是关键代码
    var tYear = today.getFullYear();
    var tMonth = today.getMonth();
    var tDate = today.getDate();
    tMonth = doHandleMonth(tMonth + 1);
    tDate = doHandleMonth(tDate);
    return tMonth + "-" + tDate;
}

// 日期补0
function doHandleMonth(month) {
    var m = month;
    if (month.toString().length == 1) {
        m = "0" + month;
    }
    return m;
}

// 获取随机数集合
function getRndArr(day) {
    dateArr = [];
    for (i = 0; i < day; i++) {
        dateArr.unshift(RndNum(3))
    }
    return dateArr;
}

//产生随机数函数
function RndNum(n) {
    var rnd = "";
    for (var i = 0; i < n; i++)
        rnd += Math.floor(Math.random() * 10);
    return rnd;
}