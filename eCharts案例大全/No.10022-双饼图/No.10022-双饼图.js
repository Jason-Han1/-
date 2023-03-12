let scaleData = [{
        name: '火星',
        value: 10
    },
    {
        name: '地球',
        value: 50
    },
    {
        name: '水星',
        value: 20
    }
];
let objData = array2obj(scaleData, "name");

function array2obj(array, key) {
    let resObj = {};
    for (let iterator of array) {
        resObj[iterator[key]] = iterator;
    }
    return resObj;
}
let placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
    }
};
let dataM = [];
for (let value of scaleData) {
    dataM.push({
        value: value.value,
        name: value.name,
        itemStyle: {
            normal: {}
        }
    }, {
        value: 4,
        name: '',
        itemStyle: placeHolderStyle
    });
}
let seriesObj = [{
        name: '',
        type: 'pie',
        clockWise: false,
        center: ["50%", "50%"],
        radius: [75, 79],
        hoverAnimation: false,
        color: ["#1978C8", "#FFAB00", "#4CB10C"],
        itemStyle: {
            normal: {
                label: {
                    show: false,
                },
                labelLine: {
                    show: false
                }
            }
        },
        data: dataM
    },
    {
        name: '',
        type: 'pie',
        clockWise: false,
        center: ["50%", "50%"],
        radius: [60, 69],
        hoverAnimation: false,
        color: ["#1978C8", "#FFAB00", "#4CB10C"],
        itemStyle: {
            normal: {
                label: {
                    show: false,
                },
                labelLine: {
                    show: false
                }
            }
        },
        data: dataM
    }
];
option = {
    backgroundColor: '#FFFFFF',
    tooltip: {
        show: false
    },
    legend: {
        show: true,
        icon: "circle",
        textStyle: {
            color: "#606266",
            fontSize: 14
        },
        right: '5%',
        top: 'center',
        itemWidth: 10,
        itemHeight: 10,
        formatter: (name) => {
            return name + "  " + objData[name].value
        },
    },
    toolbox: {
        show: false
    },
    series: seriesObj
}