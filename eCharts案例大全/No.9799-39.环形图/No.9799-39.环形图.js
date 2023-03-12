option = {
    dataset: {
        "source": [
            ["province", "l_tmp"],
            ["山东", 39195],
            ["湖北", 46849],
            ["重庆", 3336],
            ["江苏", 34109]
        ]
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        left: 'right',
        top: 'top',
        align: 'left',
        icon: 'circle'
    },
    tooltip: {
        trigger: 'item'
    },
    series: {
        type: 'pie',
        radius: ['50%', '70%'],
    }
};