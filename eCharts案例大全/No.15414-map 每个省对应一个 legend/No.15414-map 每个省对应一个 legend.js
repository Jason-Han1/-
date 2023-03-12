function randomData() {
    return Math.round(Math.random()*1000);
}

var data = [
    {name: '北京', value: [randomData(), 0] },
    {name: '天津', value: [randomData(), 1] },
    {name: '上海', value: [randomData(), 2] },
    {name: '重庆', value: [randomData(), 3] },
    {name: '河北', value: [randomData(), 4] },
    {name: '河南', value: [randomData(), 5] },
    {name: '云南', value: [randomData(), 6] }
];

option = {
    title: {
        text: 'iphone销量',
        subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data:['iphone3','iphone4','iphone5']
    },
    visualMap: {
        type: 'piecewise',
        dimension: 1,
        pieces: [
            {value: 0, color: '#c23531'},
            {value: 1, color: '#2f4554'},
            {value: 2, color: '#61a0a8'},
            {value: 3, color: '#d48265'},
            {value: 4, color: '#91c7ae'},
            {value: 5, color: '#749f83'},
            {value: 6, color: '#ca8622'}
        ],
        formatter: function (value) {
            return data[value].name + '： ' + data[value].value[0];
        },
        right: 10,
        top: 'center'
    },
    series: [
        {
            name: 'iphone3',
            type: 'map',
            mapType: 'china',
            roam: false,
            // right: 50,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data: data
        }
    ]
};