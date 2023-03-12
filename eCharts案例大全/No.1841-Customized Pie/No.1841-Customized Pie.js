option = {
    backgroundColor: '#2c343c',
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
        bottom: '30',
        itemWidth: 15,
    },
    series: [
        {
            name: '预警类别',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
                { value: 20, name: 'Ⅱc类' },
                { value: 26, name: 'Ⅱb类' },
                { value: 24, name: 'Ⅱa 类' },
                { value: 30, name: 'Ⅰ类' },
            ].sort(function (a, b) {
                return a.value - b.value;
            }),
            roseType: 'angle',
            label: {
              formatter: '{c}',
              position: 'inside',
              fontSize: '20px',
              fontFamily: 'Microsoft YaHei UI, Microsoft YaHei UI-Regular',
              color: '#ffffff',
            },
            labelLine: {
                show: false,
            },
            itemStyle: {
                normal: {
                    color: function (params) {
                        console.log('params', params);
                        var colorList = ['#F9C900', '#FB8500', '#E85080', '#CB3BEC'];
                        return colorList[params.dataIndex];
                    },
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                },
            },
        },
    ],
};
