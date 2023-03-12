// 镜像圆点饼图配置优化更新---------suwq20201104

const colorList = ['#58D5FF', '#73ACFF', '#FDD56A', '#FDB36A', '#FD866A','#9E87FF']
option = {
    tooltip: {
        trigger: 'item'
    },
    series: [{
        type: 'pie',
        center: ['30%', '30%'],
        radius: ['25%', '40%'],
        minAngle: 10 ,
        avoidLabelOverlap: true,
        hoverOffset: 15,
        itemStyle: {
            color: (params) => {
                return colorList[params.dataIndex]
            }
        },
        label: {
            show: true,
            position: 'outer',
            alignTo: 'labelLine',
            // ·圆点
            backgroundColor: 'auto',//圆点颜色，auto：映射的系列色
            height: 0,
            width: 0,
            lineHeight: 0,
            // height,width.lineHeight必须为0
            distanceToLabelLine: 0,//圆点到labelline距离
            borderRadius: 2.5,
            padding: [2.5, -2.5, 2.5, -2.5],
/*radius和padding为圆点大小，圆点半径为几radius和padding各项数值就为几
  如：圆点半径为1
            borderRadius: 1,
            padding: [1, -1, 1, -1]
*/
            formatter: '{a|{b}：}{b|{d}%}',
            rich: {
                a: {
                    padding: [0, 0, 0, 10]
                },
                b: {
                    padding: [0, 10, 0, 0]
                }
            }
        },
        data: [
            {
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
                value: 6
            }]
    }, {
        type: 'pie',
        center: ['70%', '70%'],
        radius: ['25%', '40%'],
        minAngle: 10,
        avoidLabelOverlap: true,
        roseType: 'radius',
        hoverOffset: 15,
        itemStyle: {
            color: (params) => {
                return colorList.slice(2)[params.dataIndex]
            }
        },
        label: {
            show: true,
            position: 'outer',
            width:0,
            height: 0,
            lineHeight: 0,
            backgroundColor: 'auto',
            padding: [2,-2,2,-2],
            borderRadius: 2,
            distanceToLabelLine: 0,
            formatter: '{top|{b}}\n{bottom|{d}%}',
            align: 'center',
            rich: {
                top: {
                    verticalAlign: 'bottom',
// bottom：文字在上圆点在下
// top: 文字在下圆点在上
                    padding: [10, 10, 0, 10],
// padding：[上， 右， 下，左]，
// 上：圆点到上文字间距, 文字上移距离
// 右：文字与右侧圆点间距, 文字左移距离
// 下：圆点到下文字间距, 文字下移距离
// 左：文字与左侧圆点间距, 文字右移距离
                    align: 'center'
 // center:文字圆点居中，right文字在圆点左侧，left文字在圆点右侧
                },
                bottom: {
                    padding: [0, 10, 10, 10],
                    verticalAlign: 'top',
                    align: 'center'
                }
            }
        },
        data: [{
            name: 'Adidas',
            value: 5
        }, {
            name: 'Nike',
            value: 10
        }, {
            name: 'Pumas',
            value: 15
        }, {
            name: 'Convers',
            value: 20
        }]
    }]
};