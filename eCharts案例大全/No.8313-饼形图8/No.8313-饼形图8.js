var imgSrc = "/asset/get/s/data-1585021051089-ykTLZsVA8.png";

// 数据初始化
let fontColor = '#18DB9F',
    echartData = [{
            name: "1分",
            value: 100
        },
        {
            name: "2分",
            value: 200
        },
        {
            name: "3分",
            value: 200
        },
        {
            name: "4分",
            value: 100
        },
        {
            name: "5分",
            value: 100
        }
    ];
// 数据整理
let total = echartData.reduce((a, b) => {
    return a + b.value
}, 0);

// option
option = {
    backgroundColor: '#FFFFFF',
    color: [
        "#0090FF",
        "#36CE9E",
        "#FFC005",
        "#FF515A",
        "#8B5CFF",
        "#00CA69"
    ],
    graphic: {
        elements: [{
            type: "image",
            z: 3,
            style: {
                image: imgSrc,
                width: 88,
                height: 88
            },
            left: 'center',
            top: "center",
            position: [100, 100]
        }]
    },
    toolbox: {
        show: false
    },
    series: [{
        name: "",
        type: "pie",
        radius: [0, 112],
        center: ["50%", "50%"],
        label: {
            show: false
        },
        itemStyle: {
            normal: {
                color: '#F3FBFF'
            },
        },
        hoverAnimation: false,
        data: [100]
    },{
        name: "",
        type: "pie",
        radius: [112, 113],
        center: ["50%", "50%"],
        label: {
            show: false
        },
        itemStyle: {
            normal: {
                color: 'rgba(0,134,228,0.20)'
            },
        },
        hoverAnimation: false,
        data: [100]
    }, {
        name: "",
        type: "pie",
        radius: [75, 90],
        zlevel: 3,
        center: ["50%", "50%"],
        label: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                borderColor: '#fff',
                borderWidth: 1
            }
        },
        // hoverAnimation: false,
        hoverOffset: 5,
        data: echartData
    }]
};