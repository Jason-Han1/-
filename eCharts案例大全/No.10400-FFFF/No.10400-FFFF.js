data = [{
        name: "30岁以下",
        value: 13211
    },
    {
        name: "31-40岁",
        value: 42111
    },
    {
        name: "41-50岁",
        value: 81711
    },
    {
        name: "50岁以上",
        value: 121711
    },
     {
        name: "50岁以上",
        value: 121711
    }
];
arrName = getArrayValue(data, "name");
arrValue = getArrayValue(data, "value");
sumValue = eval(arrValue.join('+'));
objData = array2obj(data, "name");
optionData = getData(data);
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

function array2obj(array,key) {
	var resObj = {};
	for(var i=0;i<array.length;i++){
		resObj[array[i][key]] = array[i];
	}
	return resObj;
}

function getData(data) {
    var res = {
        series: [],
        yAxis: []
    };
    for (let i = 0; i < data.length; i++) {
        res.series.push({
            name: '学历',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [66 - i * 8 + '%', 61 - i * 8 + '%'],
            center: ["50%", "50%"],
            label: {
                show: false
            },
            itemStyle: {
                label: {
                    show: false,
                },
                labelLine: {
                    show: false
                },
                borderWidth: 5,
            },
            data: [{
                value: data[i].value,
                name: data[i].name
            }, {
                value: sumValue - data[i].value,
                name: '',
                itemStyle: {
                    color: "rgba(0,0,0,0)",
                    borderWidth: 0
                },
                tooltip: {
                    show: false
                },
                hoverAnimation: false
            }]
        });
        res.series.push({
            name: '',
            type: 'pie',
            silent: true,
            z: 1,
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [66 - i * 8 + '%', 61 - i * 8 + '%'],
            center: ["50%", "50%"],
            label: {
                show: false
            },
            itemStyle: {
                label: {
                    show: false,
                },
                labelLine: {
                    show: false
                },
                borderWidth: 5,
            },
            data: [{
                value: 7.5,
                itemStyle: {
                    color: "#092B57",
                    borderWidth: 0
                },
                tooltip: {
                    show: false
                },
                hoverAnimation: false
            }, {
                value: 2.5,
                name: '',
                itemStyle: {
                    color: "rgba(0,0,0,0)",
                    borderWidth: 0
                },
                tooltip: {
                    show: false
                },
                hoverAnimation: false
            }]
        });
        res.yAxis.push((data[i].value / sumValue * 100).toFixed(2) + "%");
    }
    return res;
}

option = {
    backgroundColor:'#062147',
   
    tooltip: {
        show: true,
        trigger: "item",
        formatter: "{a}<br>{b}:{c}({d}%)"
    },
    color: ['#02A0EA'],
    grid: {
        top: '16%',
        bottom: '55%',
        left: "50%",
        containLabel: false
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            inside: true,
            textStyle: {
                color: "#E6E7E9",
                fontSize: 14,
            },
            show: true
        },
        // data: optionData.yAxis
        data:["贵宾楼",'诺金酒店',"东方广场",'君悦酒店','新天地',"",""]
    }],
    xAxis: [{
        show: false
    }],
    series: optionData.series
};