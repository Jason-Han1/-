var imgURL = "/asset/get/s/data-1612407787644-ElxYReRPV.png";
const color = [
    '#0CD2E6',
    '#3751E6',
    '#FFC722',
    '#886EFF',
    '#008DEC',
    '#114C90',
    '#00BFA5',
];
const data = [{
        "name": "A类型",
        "value": 30
    },
    {
        "name": "B类型",
        "value": 10
    },
    {
        "name": "C类型",
        "value": 15
    },
    {
        "name": "D类型",
        "value": 23
    },
    {
        "name": "E类型",
        "value": 10
    },
    {
        "name": "其他",
        "value": 12
    }
]
// 设置数据
function setChartOption(data) {
    const formatData = [];
    data.forEach(function(item, index) {
        formatData.push({
            value: item.value,
            name: item.name,
            itemStyle: {
                normal: {
                    borderWidth: 10,
                    shadowBlur: 20,
                    borderColor: color[index],
                    shadowColor: color[index],
                },
            },
        }, {
            value: 5,
            name: '',
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
        })
    })

    return formatData;
};

option = {
    backgroundColor: '#020933',
    color: color,
    title:{
        text: '流光圆环',
        top:20,
        left: 'center',
        textStyle: {
          fontSize: 20,
          color: 'rgba(0,141,236,0.9)',
        },
    },
    graphic: {
        elements: [{
            type: 'image',
            z: 3,
            style: {
                image: imgURL,
                width: 50,
                height: 50,
            },
            left: 'center',
            top: 'center',
        }, ],
    },
    series: [{
        name: '',
        type: 'pie',
        radius: ['50%', '52%'],
        hoverAnimation: false,
        data: setChartOption(data),
    }, ],
}