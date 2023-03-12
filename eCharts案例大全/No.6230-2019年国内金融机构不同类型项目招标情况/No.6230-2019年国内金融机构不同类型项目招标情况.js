var scale = 1;
var echartData = [{
    value: 308,
    name: '安全服务'
}, {
    value:336 ,
    name: '办公用品'
}, {
    value: 211,
    name: '文化、体育、娱乐服务'
}, {
    value: 146,
    name: '医疗卫生服务'
}, {
    value:237 ,
    name: '物业管理服务'
}, {
    value: 854,
    name: '软件开发服务'
}, {
    value: 88,
    name: '印刷和出版服务'
}, {
    value: 154,
    name: '餐饮服务'
}, {
    value: 72,
    name: '会议服务'
}, {
    value: 335,
    name: '维修和保养服务'
}, {
    value: 106,
    name: '租赁服务'
}, {
    value: 61,
    name: '电信服务'
}, {
    value: 731,
    name: '运营服务'
}, {
    value: 252,
    name: '咨询服务'
}, {
    value: 202,
    name: '运行维护服务'
}, {
    value: 648,
    name: '装修工程'
}, {
    value: 517,
    name: '广告服务'
},{ 
    value: 610,
    name: '计算机硬件设备'
}, {
    value: 102,
    name: '人员外包'
}, {
    value: 281,
    name: '计算机软件设备'
}

]
var rich = {
    yellow: {
        color: "#3bc7ff",
        fontSize: 10 * scale,
        padding: [8, 0],
        align: 'center'
    },
    total: {
        color: "#A2C7F3",
        fontSize: 60 * scale,
        align: 'center'
    },
    white: {
        color: "#a2c7f3",
        align: 'center',
        fontSize: 10 * scale,
        padding: [8,0 ]
    },
    blue: {
        color: '#3bc7ff',
        fontSize: 10 * scale,
        align: 'center'
    },
    hr: {
        borderColor: '#a2c7f3',
        width: '100%',
        borderWidth: 1,
        height: 0,
    }
}
option = {
    backgroundColor: '#031f2d',
    title: {
        text: '2019年国内金融机构不同类型项目招标情况',
        textStyle:{
				color:'white',  //坐标的字体颜色
			},
    },
    legend: {
        selectedMode:false,
        formatter: function(name) {
            var total = 0; //各科正确率总和
            var averagePercent; //综合正确率
            echartData.forEach(function(value, index, array) {
                total += value.value;
            });
            return '{total|' + total + '}';
        },
        data: [echartData[0].name],
        // data: ['高等教育学'],
        // itemGap: 50,
        left: 'center',
        top: 'center',
        icon: 'none',
        align:'center',
        textStyle: {
            color: "#fff",
            fontSize: 18 * scale,
            rich: rich
        },
    },
    series: [{
        name: '2019年国内金融机构不同类型项目招标情况',
        type: 'pie',
        radius: ['42%', '50%'],
        hoverAnimation: false,
        color: ['#fc962c', '#d83472', '#0F9AF8', '#2B63D5', '#2039C3', '#2ECACE','#6F81DA'],
        label: {
            normal: {
                formatter: function(params, ticket, callback) {
                    var total = 0; //考生总数量
                    var percent = 0; //考生占比
                    echartData.forEach(function(value, index, array) {
                        total += value.value;
                    });
                    percent = ((params.value / total) * 100).toFixed(1);
                    return '{white|' + params.name + '}\n{hr|}\n{yellow|' + params.value + '分/}{blue|' + percent + '%}';
                },
                rich: rich
            },
        },
        labelLine: {
            normal: {
                length:20 * scale,
                length2: 0,
                lineStyle: {
                    color:'#a2c7f3'
                }
            }
        },
        data: echartData
    }]
};