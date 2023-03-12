var legends = ['湖北', '河南', '山西', '陕西', '广西', '吉林'];
var colors = ['#0278e6', '#34d160', '#fcdf39', '#f19611', '#00c6ff', '#f76363'].reverse();
var data = [{
        name: '湖北',
        value: 1
    },
    {
        name: '河南',
        value: 2
    },
    {
        name: '山西',
        value: 3
    },
    {
        name: '陕西',
        value: 4
    },
    {
        name: '广西',
        value: 5
    },
    {
        name: '吉林',
        value: 6
    }
];
var total = data.reduce((prev, curr) => prev + curr.value, 0);
console.log(total)
option = {
    backgroundColor: "#0f375f",
    color: colors,
    legend: {
        orient: 'vertical',
        top: "center",
        right: "5%",
        itemGap: 50,
        itemWidth: 16,
        itemHeight: 16,
        textStyle: {
            color: "#fff",
            fontSize: 16
        },
        data: legends,
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    series: [{
        name: '半径模式',
        type: 'pie',
        radius: ['30%', '80%'],
        center: ['40%', '50%'],
        roseType: 'radius',
        minShowLabelAngle: 60,
        label: {
            show: true,
            normal: {
                position: 'outside',
                fontSize: 16,
                formatter: (params) => {
                    return params.name + '(' + (params.value / total * 100).toFixed(2) + '%)' + '\n' + params.value + '头';
                }
            }
        },
        labelLine: {
            length: 1,
            length2: 20,
            smooth: true
        },
        data: data
    }]
};