var scaleData = [
    {
        name: '总户数',
        value: 1234,
    },
    {
        name: '总人口数',
        value: 4700,
    },
    {
        name: '已覆盖户数',
        value: 1200,
    },
    {
        name: '已覆盖人口数',
        value: 3687,
    },
];

var data = [];
var color = ['rgb(255, 153, 153)', 'rgb(255, 176, 63)', 'rgb(61, 186, 45)', 'rgb(43, 166, 254)'];

for (var i = 0; i < scaleData.length; i++) {
    data.push(
        {
            data: scaleData[i].value,
            value: scaleData[i].value,
            name: scaleData[i].name,
        }
    );
}
var seriesObj = [
    {
        name: '',
        type: 'pie',
        clockWise: false,
        radius: [0, 200],
        hoverAnimation: false,
        startAngle: -30,
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'inner',
                    fontSize: 14,
                    lineHeight: 15,
                    color: 'rgba(255,255,255,1)',
                    formatter: function (params) {
                        if (params.name !== '') {
                            return params.data.data;
                        } else {
                            return '';
                        }
                    },
                },
            },
        },
        data: data,
    },
    {
        name: '',
        type: 'pie',
        clockWise: false,
        radius: [100, 200],
        hoverAnimation: false,
        startAngle: -30,
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'outside',
                    fontSize: 18,
                    formatter: function (params) {
                        if (params.name !== '') {
                            return params.name;
                        } else {
                            return '';
                        }
                    },
                    
                },
                labelLine: {
                    length: 30,
                    length2: 60,
                    show: true,
                },
            },
        },
        data: data,
    },
];
option = {
    backgroundColor: '#fff',
    tooltip: {
        show: false,
    },
    color: color,
    legend: {
        show: true,
    },
    toolbox: {
        show: false,
    },
    series: seriesObj,
};
