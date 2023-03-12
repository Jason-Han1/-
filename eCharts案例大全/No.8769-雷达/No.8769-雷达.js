const borderStyle = { borderColor: '#fff', borderWidth: 3 }

const hiddenStyle = {
    color: '#ffffff00',
    borderWidth: 0
}
// ['#4c4cff', '#ccfeff', '#ffccff', '#f065ff'],
const color = [
    ['#4c4c4c', '#ccfe67', '#ffcc03', '#f06520'],
    ['#4c4c4c', '#ccfe67', '#ffcc03', '#f06520'],
    ['#4c4c4c', '#ccfe67', '#ffcc03', '#f06520'],
    ['#4c4c4c', '#ccfe67', '#ffcc03', '#f06520'],
];

option = {
    backgroundColor: '#ccc',
    series: [{
        name: '',
        type: 'pie',
        radius: ['200%', '230%'],
        center: ['50%', '140%'],
        startAngle:115,
        hoverAnimation: false,
        legendHoverLink: false,
        label: {
            show:false,
        },
        labelLine: {
            show: false
        },
        data: [
            { value: 2, name: '', itemStyle: { color: color[0][0], borderColor: '#fff', borderWidth: 3 } },
            { value: 2, name: '', itemStyle: { color: color[1][0], borderColor: '#fff', borderWidth: 3 } },
            { value: 2, name: '', itemStyle: { color: color[2][0], borderColor: '#fff', borderWidth: 3 } },
            { value: 2, name: '', itemStyle: { color: color[3][0], borderColor: '#fff', borderWidth: 3 } },
            { value: 50, name: '', itemStyle: hiddenStyle }
        ]
    },{
        name: '',
        type: 'pie',
        radius: ['175%', '200%'],
        center: ['50%', '140%'],
        startAngle:115,
        hoverAnimation: false,
        legendHoverLink: false,
        label: {
            show:false,
        },
        labelLine: {
            show: false
        },
        data: [
            { value: 2, name: '', itemStyle: { color: color[0][1], borderColor: '#fff', borderWidth: 3 } },
            { value: 2, name: '', itemStyle: { color: color[1][1], borderColor: '#fff', borderWidth: 3 } },
            { value: 2, name: '', itemStyle: { color: color[2][1], borderColor: '#fff', borderWidth: 3 } },
            { value: 2, name: '', itemStyle: { color: color[3][1], borderColor: '#fff', borderWidth: 3 } },
            { value: 50, name: '', itemStyle: hiddenStyle }
        ]
    },{
        name: '',
        type: 'pie',
        radius: ['158%', '175%'],
        center: ['50%', '140%'],
        startAngle:115,
        hoverAnimation: false,
        legendHoverLink: false,
        label: {
            show:false,
        },
        labelLine: {
            show: false
        },
        data: [
            { value: 2, name: '', itemStyle: { color: color[0][2], borderColor: '#fff', borderWidth: 3 } },
            { value: 2, name: '', itemStyle: { color: color[1][2], borderColor: '#fff', borderWidth: 3 } },
            { value: 2, name: '', itemStyle: { color: color[2][2], borderColor: '#fff', borderWidth: 3 } },
            { value: 2, name: '', itemStyle: { color: color[3][2], borderColor: '#fff', borderWidth: 3 } },
            { value: 50, name: '', itemStyle: hiddenStyle }
        ]
    },{
        name: '',
        type: 'pie',
        radius: ['145%', '158%'],
        center: ['50%', '140%'],
        startAngle:115,
        hoverAnimation: false,
        legendHoverLink: false,
        label: {
            show:false,
        },
        labelLine: {
            show: false
        },
        data: [
            { value: 2, name: '', itemStyle: { color: color[0][3], borderColor: '#fff', borderWidth: 3 } },
            { value: 2, name: '', itemStyle: { color: color[1][3], borderColor: '#fff', borderWidth: 3 } },
            { value: 2, name: '', itemStyle: { color: color[2][3], borderColor: '#fff', borderWidth: 3 } },
            { value: 2, name: '', itemStyle: { color: color[3][3], borderColor: '#fff', borderWidth: 3 } },
            { value: 50, name: '', itemStyle: hiddenStyle }
        ]
    }]
};