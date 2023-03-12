var fontColor = '#fff';
let noramlSize = 16;
var color = 'rgb(75, 243, 249)';
let arrow =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAOCAYAAAAbvf3sAAAAxElEQVQokX2SMU5CQRRFz9ffUGlDg40rkEgDm4C1kJCYuAtWoGsggVhoTUuk0w0YKChJqI6F+ebx/uhNprjv3pNJ5k2lEjQGJkAzrIAFsPxtqPE829ZT7FTphg7Q51wb4NSYDMyBYQLWwKwxdQpHBeDiTwMcaOtsloETbR2jqYFbYAp8AYMCcA88Al1gjnqtvhWeM+tVvYo7ePmnvGp6EajVz0L5Q70sAag36j6Ud2ovdjKA2g/AXc7z4gDegQd+PuA2h99NvBPSQ48xLwAAAABJRU5ErkJggg==';

var datas = {
    value: 78,
    company: '%',
    ringColor: [
        {
            offset: 0,
            color: '#02d6fc', // 0% 处的颜色
        },
        {
            offset: 1,
            color: '#367bec', // 100% 处的颜色
        },
    ],
};
var option = {
    backgroundColor: '#000',
    tooltip: {
        show: true,
    },
    title: {
        text: `{d|${datas.value}${datas.company}} {icon|}`,
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#fff',

            rich: {
                d: {
                    fontSize: '50',
                    color: '#fff',
                    fontWeight: 500,
                },
                icon: {
                    height: 30,
                    backgroundColor: {
                        image: arrow,
                    },
                },
            },
        },
    },
    color: ['#282c40'],
    legend: {
        show: false,
        data: [],
    },

    series: [
        {
            name: 'Line 1',
            type: 'pie',
            z: 1,
            clockWise: true,
            radius: ['50%', '60%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    shadowColor:'#5d8df5',
                    shadowBlur:50,
                    
                },
            },
            hoverAnimation: false,
            data: [
                {
                    value: datas.value,
                    name: '',
                    itemStyle: {
                        normal: {
                            color,
                        },
                    },
                },
                {
                    name: '',
                    value: 100 - datas.value,
                    itemStyle:{
                      color:"#00227e"  
                    },
                    tooltip: { show: false },
                },
            ],
        },
        {
            type: 'pie',
            radius: ['48%', '49%'],
            tooltip: { show: false },
            labelLine: {
                show: false,
            },
            emphasis:{
                show: false,
            },
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    color: '#5d8df5',
                },
            },
            data: [
                {
                    value: datas.value,
                },
            ],
        },
    ],
};
