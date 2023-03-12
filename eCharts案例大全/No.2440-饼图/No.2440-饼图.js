
option = {
    backgroundColor:'RGB(9,22,75)',
    color: ['#42b3ff','#6fb9ff','#e0e0e0','#f4ba1a','#3f67ac','#80c74f','#275687','#f94e00','#1659ff','#0cd100','#ff9000'],
    tooltip: {
        show: false
    },
    toolbox: {
        show: false
    },
    series:{
    name: '',
    type: 'pie',
    clockWise: false,
    radius: [150, 200],
    hoverAnimation: false,
    itemStyle: {
        normal: {

            label: {
                show: false,
                position: 'inside',
                color: 'rgba(0,0,0,0)',
            }
        }
    },
    data: [100,30,30,20,20,200,500,80,90,100,200]
}
}
