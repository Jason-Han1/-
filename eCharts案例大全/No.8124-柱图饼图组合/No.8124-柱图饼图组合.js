var data = [{
        name: '幸福指数1',
        data: [{
            name: '<20',
            value: '23'
        }, {
            name: '20~40',
            value: '22'
        }, {
            name: '40~60',
            value: '11'
        }, {
            name: '60~80',
            value: '35'
        }, {
            name: '>80',
            value: '35'
        }]
    },
    {
        name: '幸福指数2',
        data: [{
            name: '<20',
            value: '34'
        }, {
            name: '20~40',
            value: '34'
        }, {
            name: '40~60',
            value: '23'
        }, {
            name: '60~80',
            value: '32'
        }, {
            name: '>80',
            value: '23'
        }]
    },
    {
        name: '幸福指数3',
        data: [{
            name: '<20',
            value: '12'
        }, {
            name: '20~40',
            value: '2'
        }, {
            name: '40~60',
            value: '22'
        }, {
            name: '60~80',
            value: '32'
        }, {
            name: '>80',
            value: '12'
        }]
    },
    {
        name: '幸福指数4',
        data: [{
            name: '<20',
            value: '11'
        }, {
            name: '20~40',
            value: '22'
        }, {
            name: '40~60',
            value: '52'
        }, {
            name: '60~80',
            value: '62'
        }, {
            name: '>80',
            value: '22'
        }]
    },
    {
        name: '幸福指数5',
        data: [{
            name: '<20',
            value: '42'
        }, {
            name: '20~40',
            value: '32'
        }, {
            name: '40~60',
            value: '32'
        }, {
            name: '60~80',
            value: '52'
        }, {
            name: '>80',
            value: '42'
        }]
    },
]

var pieData = new Array(5);
for (var index = 0; index < data.length; index++) {
    pieData[index] = [];
    data.map((item, i) => {
        console.log(item.data)
        pieData[index].push(item.data[index]);
    })
}
pieData = pieData.map((item, i) => {
    item = item.map((ite, index) => {
        ite.age = ite.name;
        ite.name = index + 1
        return ite;
    })
    return item;
})

var serPiePisition  = [["10%", "80%"],["30%", "80%"],["50%", "80%"],["70%", "80%"],["90%", "80%"]];
var serPie = {

        name: "采购方式统计1",
        type: "pie",
        radius: "20%",
        //center: ["30%", "80%"],
        // labelLine: {
        //     length: 5,
        //     length2: 5
        // },
        label: {
            position: 'inside'
        },
        //data: pieData[1],
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'inside',
                    formatter: "{b} \n ({d}%)",
                    textStyle: {
                        // color: "#fff"
                    },

                }
            }
        }
    }
    
var pieData = pieData.map((item,i)=>{
    serPie.data  = item;
    serPie.center = serPiePisition[i];
    return JSON.parse(JSON.stringify(serPie));
})    
console.log(pieData)
option = {
    title: [{
        text: '',

    }, {
        text: '各指数年龄占比',
        x: "10",
        top: "55%",
    }],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        //formatter: "{b} ({c})"
    },

    legend: {
        data: ['1', '2', '3', '4', '5'],
        align: 'right',
        right: 10
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '53%',
        containLabel: true
    },
    xAxis: [{
        name: '年龄',
        type: 'category',
        data: ['<20', '20~40', '40~60', '60~80', '>80']
    }],
    yAxis: [{
        type: 'value',
        name: 'count',
        axisLabel: {
            formatter: '{value}'
        }
    }],
    series: [{
        name: '1',
        type: 'bar',
        data: data[0].data
    }, {
        name: '2',
        type: 'bar',
        data: data[1].data
    }, {
        name: '3',
        type: 'bar',
        data: data[2].data
    }, {
        name: '4',
        type: 'bar',
        data: data[3].data
    }, {
        name: '5',
        type: 'bar',
        data: data[4].data
    }, ...pieData]
};