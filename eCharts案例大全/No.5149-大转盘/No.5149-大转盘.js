var fxdata = [{
        name: "监控风险点数量",
        value: 754,
        color:'#2768BF',
    },
    {
        name: "已发生风险数",
        value: 611,
        color:'#6888F0',
    },
    {
        name: "未发生风险数",
        value: 400,
        color:'#337EFC',
    },
    {
        name: "已处置风险数",
        value: 200,
        color:'#21E9B9',
    },
    {
        name: "未处置风险数",
        value: 200,
        color:'#27A1BF',
    }
];


arrName = getArrayValue(fxdata, "name");
arrValue = getArrayValue(fxdata, "value");
sumValue = 1000;
objData = array2obj(fxdata, "name");
optionData = getData(fxdata)

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

function getData(fxdata) {
    var res = {
        series: [
            
        ],
        yAxis: []
    };
    for (let i = 0; i < fxdata.length; i++) {
        res.series.push({
            name: '学历',
            type: 'pie',
            clockWise: true,
            color: fxdata[i].color,
            z: 2,
            hoverAnimation: false,
            radius: [73 - i * 15 + '%', 68 - i * 15 + '%'],
            center: ["50%", "55%"],
            label: {
                show: false,
                formatter: '{d}%',
                color: 'RGB(246,175,101)',
                fontSize: 25,
                position: 'inside'
            },
            labelLine: {
                show: false
            },
            data: [{
                value: fxdata[i].value,
                name: fxdata[i].name,
                
            }, {
                value: sumValue - fxdata[i].value,
                name: '',
                itemStyle: {
                    color: "rgba(0,0,0,0)",
                    borderWidth: 0
                },
                tooltip: {
                    show: false
                },
                label: {
                    show: false
                },
                hoverAnimation: false
            }]
        });
        res.series.push({
            name: '背景线',
            type: 'pie',
            silent: true,
            z: 1,
            clockWise: true,
            hoverAnimation: false,
            radius: [73 - i * 15 + '%', 68 - i * 15 + '%'],
            center: ["50%", "55%"],
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
                value: 100,
                itemStyle: {
                    color: "RGB(12,64,128)",
                    borderWidth: 0
                },
                tooltip: {
                    show: false
                },
                hoverAnimation: false
            }]
        });
        res.yAxis.push(fxdata[i].name);
    }
    return res;
}

option = {
    title: {
        text: '',
        textStyle:{
				color:'white',  //坐标的字体颜色
			},
    },
     legend: {
        orient: 'horizontal',
        left: 'center',
        bottom:"0",
        data: ['监控风险点数量', '已发生风险数', '未发生风险数', '已处置风险数', '未处置风险数']
    },
    backgroundColor: 'RGB(8,20,67)',
    
    grid: {
        top: '16%',
        bottom: '54%',
        left: "50%",
        containLabel: false
    },
    
    xAxis: [{
        show: false
    }],
    series: optionData.series
};