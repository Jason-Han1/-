let list = [
    {
        value: 13,
        name: 'XXXXXX信息科技有限公司',
        label: {
            color: '#666',
        },
    },
    {
        value: 12,
        name: 'AAAAAA信息科技有限公司',
        label: {
            color: '#666',
        },
    },
    {
        value: 12,
        name: 'BBBBBBB信息科技有限公司',
        label: {
            color: '#666',
        },
    },
    {
        value: 12,
        name: 'CCCCCCC信息科技有限公司',
        label: {
            color: '#666',
        },
    },
    {
        value: 43,
        name: 'DDDDDD信息科技有限公司',
        label: {
            color: '#666',
        },
    },
    {
        value: 43,
        name: 'EEEEEEEE信息科技有限公司',
        label: {
            color: '#666',
        },
    },
];
let all = 0;
list.forEach(function(item){
    all += item.value;
})

let colorList = ['#FFC67E', '#5DB7D2', '#BF8AF2', '#FF945E', '#1773DD', '#61D79B'];
option = {
    backgroundColor: '#fff',

    tooltip: {
        trigger: 'item',
        formatter: '{b} <br/> {c}' + '人',
        backgroundColor: 'rgba(67,100,247,0.8)',
        textStyle: {
            color: '#fff',
        },
        padding: [10, 10],
        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                color: '#fff',
            },
        },
    },

    title: {
        text: all,
        subtext: '工人总数',
        x: '30%',
        y: '43%',
        textStyle: {
            fontSize: 50,
            fontWeight: 'normal',
            color: '#333',
        },
        subtextStyle: {
            fontSize: 20,
            fontWeight: 'normal',
            align: 'center',
            color: '#555',
        },
    },
    legend: {
        orient: 'vertical',
        right: '5%',
        align: 'left',
        top: 'middle',
        itemWidth: 13,
        itemHeight: 13,
        icon: 'circle',
        itemGap: 50,
        data: list,
        formatter: function (name) {
            console.log('name--', name);
            let data = 0
            var res = '';
            for (var i = 0; i < list.length; i++) {
                if (list[i].name == name) {
                    data = ((list[i].value/all)*100).toFixed(2)+'%';
                    res += '{a|' + name + '}' + '| ' +'{b|'+data+'}' + '{b|' + list[i].value + '}';
                }
            }
            return res;
        },
        textStyle: {
            color: '#000',
            rich: {
                a: {
                    fontSize: 14,
                    color: '#666',
                    padding: [0, 10, 0, 6],
                },
                b: {
                    fontSize: 14,
                    color: '#666',
                    padding: [0, 6, 0, 6],
                },
            },
        },
    },
    series: [
        {
            type: 'pie',
            zlevel: 3,
            radius: ['130', '200'],
            center: ['35%', '50%'],
            color: colorList,
            itemStyle: {
                normal: {
                    borderWidth: 10,
                    borderColor: '#fff',
                },
            },
            data: list,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            label: {
                show: false,
            },
        },
    ],
};
