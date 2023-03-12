option = {
    backgroundColor: '#0a1a2a',
    title: [
        {
            text: '基层站所情况',
            textAlign: 'center',
            x: '34%',
            y: '48%',
            textStyle: {
                color: '#fff',
                fontSize: 25,
                fontWeight: 'normal',
            },
        },
    ],
    tooltip: {
        trigger: 'item',
    },
    legend: {
        icon: 'circle',
        top: 'center',
        width: 20,
        right: '20%',
        orient: 'vertical',
        itemGap: 25,
        textStyle: {
            color: '#fff',
            fontSize: 15,
        },
        formatter: function (name) {
            let target;
            let then = option.series[2].data; 
            for (let i = 0; i < then.length; i++) {
                if (then[i].name == name) {
                    target = then[i].value;
                }
            }
            return name + '  ' + target + ' 家';
        },
    },
    series: [
        {
            //实线外环
            type: 'pie',
            hoverAnimation: false,
            radius: ['75%', '75%'],
            center: ['35%', '50%'],
            data: [100],
            itemStyle: {
                color: 'transparent',
                borderColor: 'rgb(17,60,112)',
                borderWidth: 1,
                borderType: 'solid',
            },
            label: {
                show: false,
            },
        },
        {
            //虚线内环
            type: 'pie',
            hoverAnimation: false,
            radius: ['53%', '53%'],
            center: ['35%', '50%'],
            data: [100],
            itemStyle: {
                color: 'transparent',
                borderColor: 'rgb(17,60,112)',
                borderWidth: 1,
                borderType: 'dashed',
            },
            label: {
                show: false,
            },
        },
        {
            name: '',
            type: 'pie',
            hoverAnimation: false,
            radius: ['55%', '65%'],
            center: ['35%', '50%'],
            color: ['rgb(43, 200, 255)', 'rgb(255, 255, 190)', 'rgba(60, 244, 200)', 'rgb(255, 97, 97)'],
            label: {
                normal: {
                    show: false,
                    position: 'inside',
                    textStyle: {
                        align: 'center',
                        baseline: 'middle',
                        fontSize: 16,
                        fontWeight: '100',
                    },
                },
            },
            labelLine: {
                normal: {
                    smooth: true,
                    length: 10,
                    lineStyle: {
                        width: 1.5,
                    },
                },
            },
            itemStyle: {
                //shadowBlur: 15,
                //shadowColor: 'rgba(0, 0, 0, 0.5)',
                borderColor: '#0a1a2a',
                borderWidth: '5',
            },
            data: [
                {value: 30, name:'五星'},
                {value: 43, name:'四星'},
                {value: 17, name:'三星'},
                {value: 10, name:'达标'}
            ],
        },
    ],
}
