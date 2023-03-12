const colorList = ['#6055d8', '#976ced', '#e3b380']
let data = [{
        name: '深睡比例',
        value: 19,
        label: '偏低',
        status: 'low'
    },
    {
        name: '浅睡比例',
        value: 80,
        label: '正常',
        status: 'normal'
    },
    {
        name: '清醒比例',
        value: 1,
        label: '正常',
        status: 'normal'


    },
]
option = {
    tooltip: {
        trigger: 'item',
    },
    legend: {
        orient: 'vertical',
        right: '10%',
        top: 'center',
        itemGap: 10,
        itemHeight: 8,
        itemWidth: 8,
        icon: 'rect',
        textStyle: {
            color: 'transformable',
            rich: {
                'name': {
                    color: '#777',
                    fontSize: 14
                },
                'percent': {
                    color: '#777',
                    fontSize: 16,
                    fontWeight: 'bold'

                },
                'normal': {
                    color: '#60dd94',
                    borderColor: '#60dd94',
                    borderRadius: 2,
                    borderWidth: 1,
                    width: 30,
                    height: 18,
                    align: 'center',
                    verticalAlign: 'middle'
                },
                'low': {
                    color: '#f16866',
                    borderColor: '#f16866',
                    borderRadius: 2,
                    borderWidth: 1,
                    width: 30,
                    height: 18,
                    align: 'center',
                    verticalAlign: 'middle'
                }

            }
        },
        formatter: function(name) {
            console.log(name)
            // 获取legend显示内容
            let total = 0;
            let tarValue = 0;
            let item = ''
            for (let i = 0, l = data.length; i < l; i++) {
                total += data[i].value;
                if (data[i].name == name) {
                    tarValue = data[i].value;
                    item = data[i]
                }
            }
            let p = (tarValue / total * 100).toFixed(2);
            return '{name|' + name + '}{percent|' + ' ' + p + '%} {'+item.status+'|' + item.label + '}';
        },

    },
    color: colorList,
    series: [{
        type: 'pie',
        radius: [0, '70%'],
        center: ['30%', '50%'],
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        data: data,
    }]
};