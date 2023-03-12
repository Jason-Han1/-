var arr = [{
    name: "零食",
    value: 3000
}, {
    name: "化妆品",
    value: 9300
}, {
    name: "服装",
    value: 13200
}, {
    name: "家电",
    value: 5600
}]
option = {
    color: ['#9658c3', '#6c6be2', '#01aebf', '#18b794'],
    series: [{
        type: 'pie',
        data: arr,

        label: { // 饼图文字的显示
            show: true, // 显示文字
            //formatter: 'hehe' // 决定文字显示的内容
            formatter: function(arg) {
                // console.log(arg)
                return arg.name + '消费' + arg.value + '元\n' + '\n' + '占' + arg.percent + '%'
            }
        },
        // radius: 20, // 饼图的半径
        //   radius: '20%' ,// 百分比参照的是宽度和高度中较小的那一部分的一半来进行百分比设置
        //   radius: ['50%', '75%'], // 第0个元素代表的是內圆的半径 第1个元素外圆的半径
        roseType: 'radius', // 南丁格尔图 饼图的每一个区域的半径是不同的
        selectedMode: 'single', // 选中的效果,能够将选中的区域偏离圆点一小段距离
        //  selectedMode: 'multiple',
        selectedOffset: 30
    }]
};