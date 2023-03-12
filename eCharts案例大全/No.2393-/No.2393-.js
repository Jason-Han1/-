let list = [
    {
        value: 7,
        name: '噪音预警',
    },
    {
        value: 6,
        name: 'PM预警',
    },
    {
        value: 8,
        name: '天气预警',
    },
    {
        value: 5,
        name: '风速预警',
    },
    {
        value: 4,
        name: '湿度预警',
    },
    {
        value: 2,
        name: '温度预警',
    },
];
let xData = [];
let total = 0;
list.forEach(function(item){
    xData.push(item.name);
    total = item.value + total;
})
let color1 = ['#5470C6', '#92CC76', '#FAC858', '#EF6666', '#73C0DE', '#3BA272'];
let color2 = ['#9B60B4', '#FC8350', '#3BA271', '#73C0DE', '#ED6765', '#FAC858'];
option = {
    color: color1,
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)',
    },
    legend: {
        type: 'scroll',
        orient: 'vartical',
        top: 'center',
        right: '15',
        icon:"circle",
        itemWidth: 8,
        itemHeight: 8,
        itemGap: 20,
        data:xData,
        formatter: function(name) {
            console.log('name--',name)
            var res = ''
            let pre = 0;
            for (var i = 0; i < list.length; i++) {
                if(list[i].name== name){
                    pre =((list[i].value/total)).toFixed(2)*100+'%';
                    console.log('pre--',pre)
                    res+= '{a|'+ name + '}' +'{pre|'+pre+'}'+ '{b|' + list[i].value + '}'
                }
            }
            return res
        },
        textStyle: {
            color:'#000',
            rich: {
                a: {
                    fontSize: 14,
                    color:'#666',
                    width:85
                },
                 pre: {
                    fontSize: 14,
                    color:'#666',
                    width:45
                },
                b: {
                    fontSize: 14,
                    color:'#666',
                }
            }
        },
    },
    polar: {},
    angleAxis: {
        interval: 1,
        type: 'category',
        data: [],
        z: 10,
        axisLine: {
            show: false,
            lineStyle: {
                color: '#0B4A6B',
                width: 1,
                type: 'solid',
            },
        },
        axisLabel: {
            interval: 0,
            show: true,
            color: '#0B4A6B',
            margin: 8,
            fontSize: 16,
        },
    },
    radiusAxis: {
        show: false,
    },
    calculable: true,
    series: [
        {
            stack: 'a',
            type: 'pie',
            radius: ['10%', '70%'],
            roseType: 'area',
            zlevel: 10,
            label: {
                normal: {
                    show: true,
                    formatter: '{b}',
                    borderRadius:20,
                    textStyle: {
                        fontSize: 12,
                        color:"#666"
                    },
                    position: 'outside',
                },
                emphasis: {
                    show: true,
                },
            },
            itemStyle:{
                borderRadius:10
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 15,
                    length2: 20,
                },
                emphasis: {
                    show: false,
                },
            },
            data: list,
        },
    ],
};
