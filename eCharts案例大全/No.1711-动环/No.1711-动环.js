option = {
    backgroundColor: "#164563",
    series:[
        {
            type: 'pie',
            radius: ['49%', '50%'],
            hoverAnimation: false,
            clockWise: false,
            label: {
                show: false
            },
            data: getData()
        }
    ]
};
function getData() {
    let data = [];
    for (var i = 0; i < 60; i++) {
        if (i % 2 === 0) {
            data.push({
                value: 5,
                itemStyle: {
                    normal: {
                        color: '#96ebfa66',
                    }
                }
            })
        } else {
            data.push({
                value: 20,
                itemStyle: {
                    normal: {
                        color: 'rgb(0,0,0,0)',
                        borderWidth: 1,
                        borderColor: "#51d3e6",
                    }
                }
            })
        }

    }
    return data

}
function rotate() {
    let option = myChart.getOption();
    option.series[0].startAngle = option.series[0].startAngle - 5;
    myChart.setOption(option);
}
setTimeout(setInterval(rotate, 100), 0);