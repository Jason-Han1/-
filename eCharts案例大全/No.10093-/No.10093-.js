let data = [{
    "name": "使用中",
    "value": 23
}, {
    "name": "维修中",
    "value": 9
}, {
    "name": "休息",
    "value": 15
}, {
    "name": "未使用",
    "value": 2
}];
let color = ["#AB63F7", "#FF8266", "#66B5FF ", "#6678FF"]
option = {
    backgroundColor: '#fff',
    animation: true,
    legend: {
        textStyle: {
            color: "#666",
            fontSize: 14
        },
        itemHeight: 13,
        itemWidth: 13,
        icon: 'rect',
        bottom: "10%",
        right:"0",
        orient:'horizonta',
        padding: [10, 20],
        itemGap: 20,
        data: ["使用中", "维修中", "休息", "未使用"]
    },
    series: [{
        type: "pie",
        center: ["50%", "50%"],
        radius: ["25%", "50%"],
        color: color,
        startAngle: 150,
        labelLine: {
            normal: {
                length: 25,
                length2: 50,
            }
        },
        label: {
            normal: {
                formatter: "{per|{d}%}{b|{b}}  ",
                padding: [0, -70, 30, -70],
                rich: {
                    b: {
                        fontSize: 14,
                    },
                    per: {
                        fontSize: 16,
                    }
                },
            }
        },
        data: data
    }]
}