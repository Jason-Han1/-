const colorList = ['#58D5FF', '#73ACFF', '#FDD56A', '#FDB36A', '#FD866A', '#9E87FF']
const hideItemStyle = {
    color: "transparent"
}
const innerItemIndex = 0

const data = [{
    name: 'first',
    value: 1
}, {
    name: 'second',
    value: 2
}, {
    name: 'third',
    value: 3
}, {
    name: 'fourth',
    value: 4
}, {
    name: 'fifth',
    value: 5
}, {
    name: 'sixth',
    value: 6,
}]


const [data1, data2] = data.reduce((r, item, i) => {
    let flag = i === innerItemIndex
    r[+flag].push(item)
    r[+(!flag)].push({
        ...item,
       itemStyle: hideItemStyle
    })
    console.log(+flag, +(!flag))

    return r
}, [
    [],
    []
])

 console.log(data1,data2)

option = {
    background: 'transparent',
    color:colorList,
    tooltip: {
        trigger: 'item'
    },
    series: [{
        type: 'pie',
        center: ['30%', '30%'],
        radius: ['25%', '40%'],
        data: data1
    }, {
        type: 'pie',
        center: ['30%', '30%'],
        radius: ['22%', '40%'],
        data: data2
    }]
};