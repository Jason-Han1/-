var oldData = [{
        "CURRENCY_TYPE": "100元原封新券",
        "AMOUNT": 23.35
    },{
        "CURRENCY_TYPE": "100元回笼券",
        "AMOUNT": 53.35
    },{
        "CURRENCY_TYPE": "100元专用钞",
        "AMOUNT": 163.35
    },{
        "CURRENCY_TYPE": "其他券别",
        "AMOUNT": 143.35
    }
];


let typeArr = [],
    dataset = [];
oldData.forEach((item) => {
    if (typeArr.indexOf(item.CURRENCY_TYPE) < 0) {
        typeArr.push(item.CURRENCY_TYPE);
    }
});

dataset = typeArr.map((CURRENCY_TYPE) => {
    return {
        name: CURRENCY_TYPE,
        value: ''
    };
});

for (var i = 0; i < dataset.length; i++) {
    for (var j = 0; j < oldData.length; j++) {
        // console.log(typeArr[i] +'---'+ oldData[j]);
        if(dataset[i].name == oldData[j].CURRENCY_TYPE){
            dataset[i].value = oldData[j].AMOUNT;
        }

    }
}
/*
var typeArr = ['西凉', '益州', '兖州', '荆州', '幽州'];
var dataset = [
                {value: 535, name: '荆州'},
                {value: 510, name: '兖州'},
                {value: 634, name: '益州'},
                {value: 735, name: '西凉'},
                {value: 735, name: '幽州'}
            ];
*/
option = {
    title: {
        text: '代理库今日期初余额券别统计',
        subtext: '单位：万元',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        top: 'middle',
        left: 'right',
        data: typeArr,
        textStyle: { 
            color: '#000',
            fontSize: 20
        },
    },
    series: [
        {
            type: 'pie',
            radius: '45%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: dataset,
            label: {
                position: 'inside',
                formatter: function(data){
                    return data.value;
                }
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
