let color = ['#FE5050', '#FBFE27', '#1DB7E5','rgb(131,249,103)'];
let data = [{
        value: 1245,
        name: '向国家平台上报'
    },
    {
        value: 1245,
        name: '向县级平台共享'
    },
    {
        value: 1245,
        name: '向市州平台共享'
    },
    {
        value: 1245,
        name: '向省级部门共享'
    }
];
let baseData = [];
for (var i = 0; i < data.length; i++) {
    baseData.push({
        value: data[i].value,
        name: data[i].name,
        itemStyle: {
            normal: {
                borderWidth: 22,
                shadowBlur: 50,
                borderColor: color[i],
                shadowColor: 'rgba(0, 0, 0, 0.8)'
            }
        }
    });
}


option = {
    backgroundColor: '#2c343c',
    color: color,
    tooltip: {
        trigger: 'item',
        formatter: "{b} <br/>占比：{d}%"
    },
    grid: {
        top: 'bottom',
        left: '90',
        width: '90%',
        height: '80%',

    },
    series: [{
        name: '',
        type: 'pie',
        selectedMode: 'single',
        radius: [190, 210],
        hoverAnimation: false,
        label: {
            normal: {
                formatter: ['{c|{c}次}', '{b|{b}}'].join('\n'),
                rich: {
                    c: {
                        color: 'rgb(241,246,104)',
                        fontSize: 20,
                        fontWeight: 'bold',
                        lineHeight: 5
                    },
                    b: {
                        color: 'rgb(98,137,169)',
                        fontSize: 15,
                        height: 40
                    },
                },
            }
        },
        labelLine: {
            normal: {
                lineStyle: {
                    color: 'rgb(98,137,169)',
                },
                smooth: 0.2,
                length: 10,
                length2: 20,

            }
        },
        itemStyle: {
            normal: {
                shadowColor: 'rgba(0, 0, 0, 0.8)',
                shadowBlur: 50,
            }
        },
        data: baseData
    }]
};