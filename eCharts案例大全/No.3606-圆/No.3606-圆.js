var getname = ['本校', '省内外校', '省外院校', '境外院校','测试','测试','测试']
var getvalue = [54, 31, 5, 10,0,0,0]
var sumvalue=sum(getvalue)
var data = []
for (var i = 0; i < getname.length; i++) {
    data.push({
        name: getname[i],
        value: getvalue[i],
    })
}

function sum(getvalue) {
  var s = 0;
  for (var i=getvalue.length-1; i>=0; i--) {
    s += getvalue[i];
  }
  return s;
}

var wordLength = (value) => {
    var ret = ""; //拼接加\n返回的类目项
    var maxLength = 4; //每项显示文字个数
    var valLength = value.length; //X轴类目项的文字个数
    var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
    if (rowN > 1) //如果类目项的文字大于3,
    {
        for (var i = 0; i < rowN; i++) {
            var temp = ""; //每次截取的字符串
            var start = i * maxLength; //开始截取的位置
            var end = start + maxLength; //结束截取的位置
            if (end >= valLength) {
                temp = value.substring(start, end);
            } else {
                temp = value.substring(start, end) + "\n";
            }
            ret += temp; //凭借最终的字符串
        }
        return ret;
    } else {
        return value;
    }
}

var colorList = [{
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: '#7BB1FF' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#4185FF' // 100% 处的颜色
    }],
}, {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: '#00CFBF' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#05C398' // 100% 处的颜色
    }],
}]

var opacityList = [1, 1, 0.85, 0.85, 0.65, 0.65, 0.45, 0.45, 0.25, 0.25]

var offsetData = [
    [50, 50],
    [75, 75],
    [70, 23],
    [20, 45],
    [30, 70],
    [40, 15],
    [80, 45]
];

var datas = [];
for (var i = 0; i < data.length; i++) {
    var item = data[i];
    if(item.name==='测试'){
        var colortxt='transparent';
        var size=35
    }else{
        var colortxt='#fff';
        var size=50
    }
    datas.push({
        name: '{value|' + item.value + "%}" + "\n" + '{name|' + wordLength(item.name) + '}',
        value: offsetData[i],
        symbolSize: item.value/sumvalue*200+size,
        label: {
            normal: {
                textStyle: {
                    fontSize: 14,
                    lineHeight: 20
                },
                rich: {
                    name: {
                        color: colortxt,
                        fontSize: 15,
                        fontWeight: '400',
                        lineHeight: 20,
                        align: 'center',
                    },
                    value: {
                        color: colortxt,
                        fontSize: 18,
                        fontWeight: 'bold',
                        lineHeight: 30,
                        align: 'center',
                    },

                }
            }
        },
        itemStyle: {
            normal: {
                color: colorList[i % 2],
                opacity: opacityList[i],
            },

        }
    });
}
var option = {
    grid: {
        show: false,
        top: 10,
        bottom: 10
    },
    xAxis: [{
        gridIndex: 0,
        type: "value",
        show: false,
        min: 0,
        max: 100,
        nameLocation: "middle",
        nameGap: 5
    }],
    yAxis: [{
        gridIndex: 0,
        min: 0,
        show: false,
        max: 100,
        nameLocation: "middle",
        nameGap: 30
    }],

    series: [{
        type: "scatter",
        symbol: "circle",
        symbolSize: 120,
        label: {
            normal: {
                show: true,
                formatter: "{b}",
                color: "#fff",
                textStyle: {
                    fontSize: "20"
                }
            }
        },

        itemStyle: {
            normal: {
                color: "#00acea"
            }
        },
        data: datas
    }]
};