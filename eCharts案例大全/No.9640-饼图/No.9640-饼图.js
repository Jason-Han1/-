var obj = {
    data: [{
            name: '月通道受阻占比',
            value: '16'
        },
        {
            name: '月调峰受阻占比',
            value: '11'
        }
    ],
    percent: 40.74
};

var option = {
    title: {
        text: obj.percent + '%',
        //subtext: '月调峰(%)',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#fff',
            fontSize: '25'
        },
    },

    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c}万千瓦时"
    },


    color: ['#3B6771', '#03EBA2', '#3C586C', '#48C594', '#3D9180', '#3B7D79'],
    series: [{
        name: '',
        type: 'pie',
        radius: ['25%', '40%'],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    formatter: '{b} : {d}%',
                    fontSize: 16,
                    color: '#fff',
                },
                borderColor: '#202E3B',
                borderWidth: 3,
            },
            labelLine: {
                show: true
            }
        },
        data: obj.data
    }]
};