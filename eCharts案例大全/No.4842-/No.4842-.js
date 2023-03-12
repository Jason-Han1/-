//人才引进趋势 
var getzylbhnf = ['2014', '2015', '2016', '2017', '2018', '2019'];
var getzylbhs = [86, 73, 88, 82, 79, 85];
//人才引进趋势图表
option = {
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: 'none'
        },
        formatter: '人才引进:{c0}人'
    },
    grid: {
        top: '15%',
        left: '7%',
        right: '2%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: [{
        data: getzylbhnf,
        axisLabel: {
            margin: 10,
            color: '#A1D5FF',
            textStyle: {
                fontSize: 12
            },
        },
        axisLine: {
            lineStyle: {
                color: '#102E74',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,

            lineStyle: {
                color: '#364255',
            }
        },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            color: '#A1D5FF',
            textStyle: {
                fontSize: 12
            },
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#364255',
            }
        }
    }],
    series: [{
        symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACV0lEQVQ4T7WVPWtUQRSGnzN3bvYrm4/NhsQoUdsUgo0QhFSBNIIoFmn8E7YWpraxtLRNK4JokUaIvdWqTURUXLIbk93sV+6dOXLv7pqgMYiuA4dzGZiH98455x3h56UqQBLJOpl1sHecRYbfPyjDA3AMMkASwRwYD6I1RMqoAa2CBxz9nIRyAtwH9mEpBLAlsFGT0Js0ghxIB9R4nPFEYZFoD2L60YcPoENgArNzEHYaZGJLNgzIuYiszWCJMIT4uEcchHQjR8fGdHMT9KoQpWCRRC0yUJcoG5tokLUhhSNH0QQURSgYIYsjIMB5patKyzuaYwHNOKLVmKALHKVKRTQBpupKkO22GTeeqdBSUsMMEdNiyavHiiHWmDYh38RTj2L2vGE/m+dwjxSaqhwCM8UmeTPGlHrKJmBeYhYWlZUlYbVsKLWVegW2KsortXzxjq9iqPkj9ptF2kBvCEyqmT1sURRlJrDMiWPxomFtVVi/amDeQFfhvYenns03npca8NHFVFWojxdoVhOVIi5RGMxC7rDDZMZSFs954NKaY+OGZXbZwrz0/6ni4HlM7bHwAPighs+9mNp4joNd6AyBtlwj5wtMemVW4IIKl+8Kj25azHIAeUmaDXY8vIhx9x33RNlR+GSEXdPioFZOgfFvFd72bNwaKJwWcArvPDzz7D70bJyl8NQ7XDKs3TGsXwvgnIGOwlsPTxyb2+7sO0za5tQqXxFWrgurC4ZSQ6lve7Ze/0GVR96HyfiNcFL65jDCWf4vbnMMHdrYP/rhSdcemWP/8hb83cZ3pbKcJE9Q4QMAAAAASUVORK5CYII=',
        symbolSize: 20,
        type: "line",
        data: getzylbhs,
        itemStyle: {
            normal: {
                borderWidth: 5,
                color: '#5DF1FF',
                shadowColor: 'rgba(93,241,255,0.7)',
                shadowBlur: 10,
                areaStyle: {
                    color: new echarts2.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: 'rgba(60,255,120,0.3)'
                    }, {
                        offset: 1,
                        color: 'rgba(66,249,255,0)'
                    }]),
                }
            },
        },
        label: {
            normal: {
                show: true,
                fontSize: 14,
                //fontWeight: 'bold',
                color: '#1CEAF6',
                position: 'top',
            }
        }
    }]
};