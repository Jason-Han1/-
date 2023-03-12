let DataPie2 = [{
        'name': '一级告警',
        'value': 20
    },
    {
        'name': '五级告警',
        'value': 30
    },
    {
        'name': '四级告警',
        'value': 10
    },
    {
        'name': '三级告警',
        'value': 10
    },
    {
        'name': '二级告警',
        'value': 10
    },
    {
        'name': '六级告警',
        'value': 10
    },

];
let seriesPie2 = [];
let colorPie2 = ['#d61616', '#00f948', '#12b4ff', '#fef119', '#ff5b00', '#00d4ff']
for (let i = 0; i < DataPie2.length; i++) {
    seriesPie2.push({
        value: DataPie2[i].value,
        name: DataPie2[i].name,
        label: {
            color: '#dfe9e3'
        },
        labelLine: {
            show: true,
            length: 10,
            length2: 20,
            lineStyle: {
                color: '#053256',
                width: 2
            }
        },
        itemStyle: {
            normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor: colorPie2[i],
                shadowColor: colorPie2[i],
            }
        }

    }, {
        value: 3,
        name: '',
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                color: 'transparent',
            }
        }
    });
}

option = {
    backgroundColor: '#04243E',
    grid: {
        left: '1%', // 与容器左侧的距离
        right: '1%', // 与容器右侧的距离
        top: '1%', // 与容器顶部的距离
        bottom: '1%', // 与容器底部的距离
    },
   
    series: [{
        name: '',
        type: 'pie',
        clockWise: true, //饼图的扇区是否是顺时针排布。
        radius: ['63%', '63.5%'],
        hoverAnimation: false, //关闭hover伞形变大
        itemStyle: {
            normal: {
                label: {
                    formatter: function(params) {
                        var percent = 0;
                        var total = 0;
                        for (var i = 0; i < DataPie2.length; i++) {
                            total += DataPie2[i].value;
                        }
                        percent = ((params.value / total) * 100).toFixed(0);
                        if (params.name !== '') {
                            return params.name + '\n{white|' + '占比' + percent + '%}';
                        } else {
                            return '';
                        }
                    },
                    rich: {
                        white: {
                            color: '#f4fff7',
                            align: 'center',
                            padding: [3, 0]
                        }
                    }
                },


            }
        },
        data: seriesPie2
    }]
};