let data = [{
    name: "a",
    value: 40
}, {
    name: "b",
    value: 30
}, {
    name: "c",
    value: 20
}, {
    name: "d",
    value: 10
}, {
    name: "e",
    value: 5
}]
//最大最小值
let max = data.reduce((a, b)=>{
    return (b.value == undefined ? b : b.value) > (a.value == undefined ? a : a.value) ? b : a;
}).value;
let min = data.reduce((a, b)=>{
    return (b.value == undefined ? b : b.value) < (a.value == undefined ? a : a.value) ? b : a;
}).value;
//映射到节点大小的最大最小值
let maxSize4Pin = 100;
let minSize4Pin = 30;
//将实际值映射到10-100之间
for (let item of data) {
    item.symbolSize = ((val)=>{
        let a = (maxSize4Pin - minSize4Pin) / (max - min);
        let b = minSize4Pin - a * min;
        return a * val + b;
    })(item.value);
}
console.log(data)
option = {
 backgroundColor: '#012248',
    tooltip: {},
    grid: {
    },
    animationDurationUpdate: function(idx) {
        // 越往后的数据延迟越大
        return idx * 100
    },
    animationEasingUpdate: "bounceIn",
    series: [{
        type: "graph",
        layout: "force",
        force: {
            repulsion: 100, //越大斥力越大
            gravity: 0.05, //越大节点越往中心靠拢
            edgeLength: 20, //值越小则长度越长
        },
        roam: true,
        draggable: true,
        symbolSize: 1,
        itemStyle: {
            opacity: 0.9,
            color: ()=>{
                    return (
                        'rgb(' + [
                            Math.round(Math.random() * 500),
                            Math.round(Math.random() * 300),
                            Math.round(Math.random() * 200)
                        ].join(',') +
                        ')'
                    )
                }
        },
        label: {
            normal: {
                show: true,
                fontSize: 10
                
            }
        },
        data: data
    }]
}