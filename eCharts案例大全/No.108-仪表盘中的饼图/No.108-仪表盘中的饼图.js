var value = [
    { name: 'ss', value: 120 },
    { name: 'xx', value: 80 },
    { name: 'yy', value: 65 },
    { name: 'zz', value: 90 },
    { name: 'hh', value: 70 },
];

var dom_width = 800;
var dom_height = 800;
var center = ['50%', '93%'];
var guageMaxNum = 100; //仪表盘的最大数据值
var guageStartRadius = 10; //最小仪表盘半径
var guageIntervelRadius = 20; //仪表盘间隔半径
var colorArr = ['#5470C6', '#91CC75', '#FAC858', '#EE6666', '#73C0DE'];
var guageColorArr = ['#fff', '#fff', '#fff', '#fff', '#fff'];

 //饼图数据超过仪表盘最大值时
value = value.map(function(val, index){
	var obj = {}
    obj.value = Math.min(val.value, guageMaxNum); 
	obj.name = val.name;
	obj.trueVal = val.trueVal? val.trueVal:val.value;
	return obj;
})
//半径参照值
var radiusRefer;
if (dom_height >= dom_width / 2) {
    //高度大于等于宽度的一般，半径参照值为容器宽度一半
    radiusRefer = dom_width / 2;
} else {
    radiusRefer = Math.min(dom_height, dom_width);
}


var maxPer;
if (guageMaxNum % 5 == 0) {
    maxPer = guageMaxNum / 5;
} else {
    maxPer = parseInt(guageMaxNum / 5) + 1;
}


//是否对数据进行处理
var isOperatorData;
value.forEach(function (value, index) {
    if (value.value == guageMaxNum && value.name == '') {
        //有值为最大值的数据则处理数据
        isOperatorData = true;
    } else {
        isOperatorData = false;
    }
});

var dataLength = value.length;
if (isOperatorData) {
    value.splice(dataLength / 2); //删除不是用户传入的数据（值为最大值的数据）
}


var legend = [];
value.map(function (value, index) {
    legend.push(value.name);
});

value.forEach(function (item, index) {
    value.push({
        value: guageMaxNum, //使仪表盘值与饼图数据对应
        name: '',
        label: {
            normal: {
                show: false,
            },
        },
        itemStyle: {
            color: 'transparent',
        },
    });
});
option = {
    backgroundColor: 'black',
    title: {
        show: false,
        text: '标题',
        left: 'center',
        bottom: '5%',
        textStyle: {
            fontSize: 24,
            color: '#fff',
        },
    },
    legend: {
        show: true,
        top: 5,
        left: 'center',
        textStyle: {
            fontSize: 14,
            color: '#fff',
        },
        data: legend,
    },
    tooltip: {
        trigger: 'item',
    },
    series: [
        {
            type: 'pie',
            tooltip: {
                formatter: function (params) {
                    return params.data.name + ':' + params.data.trueVal;
                },
            },
            radius: radiusRefer * 0.88,
            center: center,
            roseType: 'area',
            startAngle: 180,
            label: {
                show: true,
                position: 'inside',
            },
            itemStyle: {
                opacity: 1,
                color: function (params) {
                    var colorList = colorArr;
                    return colorList[params.dataIndex % colorList.length];
                },
            },
            data: value,
        },
    ],
};
//向option.series中插入仪表盘
for (i = 5; i > 0; i--) {
    var radiusAccount = (guageStartRadius + guageIntervelRadius * (i - 1)) * 0.01;
    option.series.unshift({
        name: 'Indicator',
        type: 'gauge',
        //radius: (confOptions.guageStartRadius + confOptions.guageIntervelRadius*(i-1)) + '%',
        radius: radiusAccount * radiusRefer,
        center: center,
        detail: {
            //仪表盘详情，用于显示数据
            show: false,
        },
        pointer: {
            //仪表盘指针
            show: false,
        },
        startAngle: 180, //仪表盘起始角度
        endAngle: 0, //仪表盘结束角度
        splitNumber: 1, //仪表盘刻度的分割段数
        axisTick: {
            //刻度样式
            show: false,
        },
        min: maxPer * i, //最小的数据值
        max: maxPer * i, //最大的数据值
        axisLine: {
            //仪表盘轴线相关配置
            show: true,
            lineStyle: {
                width: 1,
                color: [[1, guageColorArr[i - 1] || '#fff']],
            },
        },
        splitLine: {
            //分割线样式
            show: false,
            length: 0, //分割线线长
            distance: 0, //分割线与轴线距离
        },
        axisLabel: {
            //刻度标签
            show: true,
            padding: [0, 0, 23, 0],
            distance: -5, //标签与刻度线的距离
            rich: {
                pad: {
                    padding: [45, 0, 0, 0],
                },
            },
            formatter: '{pad|{value}}',
        },
    });
}
