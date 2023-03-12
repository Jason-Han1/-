var myColor = ['#E690D1', '#39D8EC', '#9EE6B7', '#FFDB5C', '#FF9F7F', '#FB7293', '#A199FF', '#E163AE', '#E7BBF3', '#8378EA', '#96C0FF'];
option = {
    backgroundColor: '#081c47',
    color: myColor,
    title: {
        text: '呼伦贝尔市',
        subtext: "11种",
        x: "center",
        y: "40%",
        textStyle: {
            color: "#fff",
            fontSize: 16,
            fontWeight: "normal",
            align: "center",
            width: "200px"
        },
        subtextStyle: {
            color: "#fff",
            fontSize: 16,
            fontWeight: "normal",
            align: "center"
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}<br/>{c} ({d}%)",
        position: function(p) { // 其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
        top: '80%',
        itemWidth: 24,
        itemHeight: 9,
        data: ['Ir-192', '硒-75', 'Pu-238/Be', '3.7E+12', 'Cs-137', 'Se-75', 'Co-60', 'Se75', 'Ir192', '铱-192', 'Am-241/Be'],
        textStyle: {
            color: '#fff',
            fontSize: '12',
        }
    },
    label: {
        show: true,
        position: 'outside',
        formatter: '{a|{b}：{d}%}\n{hr|}',
        rich: {
            hr: {
                backgroundColor: 't',
                borderRadius: 3,
                width: 3,
                height: 3,
                padding: [3, 3, 0, 0]
            },
            a: {
                padding: [-5, -10, -25, -5]
            }
        }
    },
    series: [{
        type: 'pie',
        center: ['50%', '45%'],
        radius: ['30%', '50%'],
        data: [{
            value: 2342,
            name: 'Ir-192'
        }, {
            value: 3321,
            name: '硒-75'
        }, {
            value: 1123,
            name: 'Pu-238/Be'
        }, {
            value: 876,
            name: '3.7E+12'
        }, {
            value: 9862,
            name: 'Cs-137'
        }, {
            value: 12352,
            name: 'Se-75'
        }, {
            value: 12354,
            name: 'Co-60'
        }, {
            value: 8762,
            name: 'Se75'
        }, {
            value: 12865,
            name: 'Ir192'
        }, {
            value: 12865,
            name: '铱-192'
        }, {
            value: 12865,
            name: 'Am-241/Be'
        }, ]
    }]
};
