var data1 = [{
    name: "",
    value: 14.22
}, {
    name: "",
    value: 85.78
}];
var data2 = [{
    name: "",
    value: 25
}, {
    name: "",
    value: 22
}, {
    name: "",
    value: 22
}, {
    name: "",
    value: 6
}, {
    name: "",
    value: 25
}];

var color1 = ['#5A8FD1', '#A3CEFC'];
var color2 = ['#618CD3', '#8FDFFF', '#FE935D','#FAD845','#53DD9B'];

var seriesOption = [{
    name: '',
    type: 'pie',
    center: ['30%', '40%'],
    radius: ['30%', '38%'],
    hoverAnimation: false,
    itemStyle: {
        normal: {
            color: (params) => {
                return color1[params.dataIndex]
            },
            label: {
                show: false,
            },
            labelLine: {
                length: 0,
                length2: 0,
                show: false,
            }
        }
    },
    data: data1
},
{
    name: '',
    type: 'pie',
    clockWise: true,
    center: ['70%', '40%'],
    radius: ['30%', '38%'],
    hoverAnimation: false,
    itemStyle: {
        normal: {
            color: (params) => {
                return color2[params.dataIndex]
            },
            label: {
                show: false,
            },
            labelLine: {
                length: 0,
                length2: 0,
                show: false,
            }
        }
    },
    data: data2
}
];
option = {
    backgroundColor: '#0A2E5D',
    title:[
        {
            text: '适用占比',
            x: '29%',
            y: '31%',
            textAlign: 'center',
            textStyle: {
                fontSize: '20',
                fontWeight: '400',
                color: '#ffffff',
                textAlign: 'center',
            },
        }, {
            text: '85.78%',
            left: '29%',
            top: '40%',
            textAlign: 'center',
            textStyle: {
                fontSize: '24',
                fontWeight: '400',
                color: '#ffffff',
                textAlign: 'center',
            },
        },
        {
            text: '入组占比',
            x: '70%',
            y: '31%',
            textAlign: 'center',
            textStyle: {
                fontSize: '20',
                fontWeight: '400',
                color: '#ffffff',
                textAlign: 'center',
            },
        }, {
            text: '85.78%',
            left: '70%',
            top: '40%',
            textAlign: 'center',
            textStyle: {
                fontSize: '24',
                fontWeight: '400',
                color: '#ffffff',
                textAlign: 'center',
            },
        }
    ],
    tooltip: {
        show: false
    },
    toolbox: {
        show: false
    },
    series: seriesOption
}