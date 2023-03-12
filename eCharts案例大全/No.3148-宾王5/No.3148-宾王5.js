option = {
    color: ['#4F3EFE', '#3E82FF',  '#89C2F9', '#36C66A'],
    grid: {
        left: '2%',
        top: '1%',
        bottom: 10,
        right: '1%',
        containLabel: true
    },
    tooltip: {
        trigger: 'item',
        textStyle: {
            fontSize: 14
        },
        formatter: "{b} : {c} ({d}%)"
    },
    calculable: true,
    series: [
       
    {
        stack: 'a',
        type: 'pie',
        radius: ['20%', '40%'],
        center: ['55%', '35%'],
        roseType: 'radius',
        zlevel: 10,
        label: {
            normal: {
                formatter: '{b} {c}人',
                borderWidth: 0,
                borderRadius: 4,
                padding: [0, -50],
                height: 40,
                fontSize: 16,
                align: 'center',
                rich: {
                    b: {
                        fontSize: 13,
                        lineHeight: 5,
                        color: '#41B3DC'
                    }
                }
            }
        },
        labelLine: {
            normal: {
                show: true,
                length: 20,
                length2: 55
            },
            emphasis: {
                show: false
            }
        },
        data: [
            {
                value: 44,
                name: '土家族'
            },
            {
                value: 47,
                name: '苗族'
            },
            {
                value: 9,
                name: '壮族'
            },
            {
                value: 184,
                name: '回族'
            }
        ]
    }, ]
};