option = {
    dataset: [{
        "source": [
            ["province", "l_tmp"],
            ["山东", 39195],
            ["湖北", 46849],
            ["重庆", 3336],
            ["江苏", 34109],
            ["河南", 44786],
            ["北京", 2115],
            ["河北", 22162],
            ["四川", 55601],
            ["宁夏", 7417],
            ["西藏", 2886],
            ["辽宁", 20968],
            ["浙江", 32220],
            ["云南", 34769],
            ["上海", 2954],
            ["天津", 2407],
            ["吉林", 7157],
            ["江西", 34913],
            ["澳门", 3915],
            ["陕西", 22992],
            ["湖南", 40693]
        ]
    }],
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
        radius: ['50%,', '75%'],
        roseType: 'area',
        label: {
            show: false
        },
        emphasis: {
            label: {
                show: true
            }
        }
    }
};