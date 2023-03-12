var trafficWay = [
    {
        name: '33类',
        value: 20,
    },
    {
        name: '33类',
        value: 20,
    },
    {
        name: '33类',
        value: 20,
    },
    {
        name: '33类',
        value: 25,
    },
    {
        name: '33类',
        value: 20,
    },
];

var data = [];
var color = ['#F6C558', '#25EFBD', '#21bad6', '#3283F5', '#E44660'];
for (var i = 0; i < trafficWay.length; i++) {
    data.push(
        {
            value: trafficWay[i].value,
            name: trafficWay[i].name,
            itemStyle: {
                normal: {
                    borderWidth: 8,
                    shadowBlur: 0,
                    borderColor: color[i],
                    shadowColor: color[i],
                },
            },
        },
        {
            value: 3,
            name: '',
            labelLine:{
              show:false  
            },
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0,
                },
            },
        }
    );
}
var seriesOption = [
    {
        name: '',
        type: 'pie',
        clockWise:true,
        radius: [125, 129],
        hoverAnimation: true,
        itemStyle: {
            normal: {
                label: {
                    show: true
                },
            },
        },
        data: data,
        labelLine: {
            normal: {
                length: 30,
                length2: 45,
                lineStyle: {
                    type: 'solid',
                    color: '#31FFFF',
                },
            },
        },
        label: {
            normal: {
                formatter: function (params) {
                    var result = '';
                    if (params.name) {
                        result +=  params.name+'{blue|' + params.value + '%' + '}';
                    }
                    return result;
                },
                borderWidth: 0,
                borderRadius: 4,
                padding: [60, 0],
                height: 10,
                fontSize: 14,
                align: 'center',
                color: '#DEDEDE',
                rich: {
                    blue: {
                        fontSize: 14,
                        lineHeight: 5,
                        color: '#31FFFF',
                        padding: [0, 20],
                    },
                },
            },
        },
    },
    {
        type: 'pie',
        radius: [115, 115],
        hoverAnimation: false,
        clockWise: false,
        itemStyle: {
            normal: {
                borderColor: 'rgba(2,178,247,0.2)',
                borderWidth: 10,
            },
        },
        label: {
            show: false,
        },
        data: [200],
    },
    {
        type: 'pie',
        radius: [0, '20%'],
        zlevel: 3,
        silent: true,
        label: {
            normal: {
                show: false,
            },
        },
        labelLine: {
            normal: {
                show: false,
            },
        },
        data: [
            {
                value: 6,
                name: '总数',
                itemStyle: {
                    normal: {
                        color: {
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            type: 'linear',
                            global: false,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: 'rgba(2,178,247,0.2)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(2,178,247,0.2)',
                                },
                            ],
                        },
                    },
                },
            },
        ],
    },
];
option = {
    backgroundColor: '#162020',
    color: color,
    tooltip: {
        show: false,
    },
    toolbox: {
        show: false,
    },
    series: seriesOption,
};

