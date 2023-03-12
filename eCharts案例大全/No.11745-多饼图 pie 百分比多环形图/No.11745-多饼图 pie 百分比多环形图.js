placeHolderStyle = {
    normal: {
        labelLine: {
            show: false
        },
        color: "#dedede",
        borderColor: "#dedede",
        borderWidth: 1
    },
    emphasis: {
        color: "#dedede",
        borderColor: "#dedede",
        borderWidth: 2
    }
};
option = {
    series: [{
        name: '值',
        type: 'pie',
        clockWise: true, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: ['40%', '41%'],
        itemStyle: {
            normal: {
                labelLine: {
                    show: false,
                },
                borderWidth: 6,
                borderColor: "#45E6B0"
            }
        },
        data: [{
            value: 7
        }, {
            value: 3,
            itemStyle: placeHolderStyle
        }]
    }, {
        name: '白',
        type: 'pie',
        clockWise: false,
        radius: ['40%', '40%'],
        hoverAnimation: false,
        label: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 1
        }]
    }, {
        name: '值',
        type: 'pie',
        hoverAnimation: false,
        radius: ['30%', '31%'],
        itemStyle: {
            normal: {
                labelLine: {
                    show: false,
                },
                borderWidth: 6,
                borderColor: "#09A6F9",
            }
        },
        data: [{
            value: 5,
        }, {
            value: 5,
            itemStyle: placeHolderStyle
        }]
    }, 
    {
        name: '白',
        type: 'pie',
        hoverAnimation: false,
        radius: ['30%', '30%'],
        label: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 1
        }]
    }, 
    {
        name: '值',
        type: 'pie',
        hoverAnimation: false,
        radius: ['20%', '21%'],
        itemStyle: {
            normal: {
                labelLine: {
                    show: false,
                },
                borderWidth: 6,
                borderColor: "#FFD76C",
            }
        },
        data: [{
            value: 4
        }, {
            value: 6,
            itemStyle: placeHolderStyle
        }]
    },
    {
        name: '白',
        type: 'pie',
        hoverAnimation: false,
        radius: ['20%', '20%'],
        label: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 1
        }]
    }]
};