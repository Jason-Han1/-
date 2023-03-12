let color = ['#4dce75', '#ffd43e', '#3a9ffb', '#34cbcf'];
let centerItem01 = "世软"
let centerNum01 = 1200
option = {
    color: color,
    title: [{
        text: '{name|' + centerItem01 + '}\n{val|' + centerNum01 + '}',
        top: 'center',
        left: 'center',
        textStyle: {
            rich: {
                name: {
                    fontSize: 14,
                    fontWeight: 'normal',
                    color: '#666666',
                    padding: [10, 0]
                },
                val: {
                    fontSize: 32,
                    fontWeight: 'bold',
                    color: '#333333',
                }
            }
        }
    }, {
        text: '商品数量组成',
        top: '10%',
        left: '5%'
    }],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        right: 'right',
        bottom: 'bottom',
        icon: 'circle',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告']
    },
    series: [{
        name: '访问来源',

        legendHoverLink: true,
        hoverAnimation: true,
        radius: ['45%', '60%'],
        type: 'pie',

        center: ['50%', '51%'],
        data: [{
                value: 335,
                name: '直接访问'
            },
            {
                value: 310,
                name: '邮件营销'
            },
            {
                value: 234,
                name: '联盟广告'
            },
            {
                value: 135,
                name: '视频广告'
            },
        ],
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};