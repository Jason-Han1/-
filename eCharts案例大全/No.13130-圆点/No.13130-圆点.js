
var placeHolderStyle = {
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


var data = []
new Array(8).join().split(',').map((v, k) => {
    data.push({
        name: `point-${k + 1}`,
        value: 10
    }, {
        name: '',
        value: 90,
        itemStyle: placeHolderStyle
    })
})


var seriesObj = [{
    name: '',
    type: 'pie',
    clockWise: false,
    radius: [90, 100],
    hoverAnimation: false,
    label:false,
    data: data
}]

option = {
    backgroundColor: '#04243E',
    tooltip: {
        show: false
    },
    legend: {
        show: false
    },
    toolbox: {
        show: false
    },
    series: seriesObj
}
