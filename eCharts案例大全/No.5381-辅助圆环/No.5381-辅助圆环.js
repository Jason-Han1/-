var pieInnerData = [];
for (var i = 0; i < 8; i++) {
    pieInnerData.push({
        value: 100
    },{
        value: 10,
        itemStyle: {
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 0
        }
    });
}
            
option = {
    backgroundColor: '#272b2b',
    color: ['#5DA6D5'],
    textStyle: {
        fontSize: 18,
        color: '#F5F5F5'   
    },
    series: [
        {
            type: 'pie',
            name: '内圈辅助圆环',
            radius: ['35%', '38%'],
            startAngle: 90,
            hoverAnimation: false,
            label: {
                show: false
            },
            itemStyle: {
                color: '#5DA6D5'
            },
            data: pieInnerData
        },
        {
            type: 'pie',
            name: '外圈辅助圆环',
            radius: ['46%', '48%'],
            startAngle: 90,
            hoverAnimation: false,
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            itemStyle: {
                color: '#5DA6D5'
            },
            data: [100]
        },
        {
            type: 'pie',
            name: '航班正常率',
            radius: ['44.5%', '49.5%'],
            startAngle: 90,
            hoverAnimation: false,
            label: {
                show: true,
                position: 'center',
                formatter: function (param) {

                    return '{label|' + '航班正常率' + '}\n{num|' + '70%' + '}';
                },
                rich: {
                    label: {
                        color: '#F5F5F5',
                        padding: [0, -105, 5, -105],
                        fontSize: 30
                    },
                    num: {
                        color: '#5DA6D5',
                        padding: [-2, -59, 10, -60],
                        fontSize: 40
                    }
                }
            },
            labelLine: {
                show: false
            },
            itemStyle: {
                color: '#5DA6D5'
            },
            data: [
                {
                    value: 70
                },
                {
                    value: 30,
                    itemStyle: {
                        color: 'transparent'
                    }
                }
            ]
        }
    ]
};