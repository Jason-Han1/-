option = {
    backgroundColor: '#C82E20',
    color: ["#ffffff"],
    title: {
        text: 'Statistics on the amount of paper used this month',
        subtext: ' The data comes from the Property Department',
        x: 'center',
        y: "85%",
        textStyle: {
            color: '#fff'
        },
        subtextStyle: {
            color: '#fff',
            fontSize: '12'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
 
    series: [{
        name: 'Group',
        type: 'pie',
        radius: '75%',
        center: ['50%', '42%'],
        label: {
            normal: {
                position: 'inside',
                textStyle: {
                    color: '#C82E20',
                    fontSize: 12
                }
            }
        },
        data: [{
            value: 55,
            name: 'A'
        }, {
            value: 70,
            name: 'B'
        }, {
            value: 144,
            name: 'C'
        }, {
            value: 75,
            name: 'D'
        }, {
            value: 88,
            name: 'E'
        }, {
            value: 450,
            name: 'F'
        }, {
            value: 94,
            name: 'G'
        }, {
            value: 67,
            name: 'H'
        }, {
            value: 40,
            name: 'I'
        },
         {
            value: 60,
            name: 'J'
        }, {
            value: 94,
            name: 'K'
        }, {
            value: 85,
            name: 'L'
        }],
        itemStyle: {
            normal: {
                borderColor: '#C82E20',
                borderWidth: 1
            },
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};