option = {
    backgroundColor: '#0A2E5D',
    title: {
        text: '高一（三）班数学薄弱知识点统计',
        left: 'center',
        textStyle:{
				color:'white',  //坐标的字体颜色
			},
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        left: 'center',
        top: 'bottom',
        data: ['直线与圆的位置关系', '直线的倾斜角', '分式函数', '对数', '方程组无解', '棱锥', '直线系方程', '二分法'],
         textStyle:{
				color:'white',  //坐标的字体颜色
			},
    },
    toolbox: {
        show: true,
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: true},
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    series: [
        {
            name: '知识点：人数(百分比)',
            type: 'pie',
            radius: [20, 110],
            center: ['50%', '50%'],
            roseType: 'radius',
            label: {
                show: true
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: [
                {value: 10, name: '直线与圆的位置关系'},
                {value: 5, name: '直线的倾斜角'},
                {value: 15, name: '分式函数'},
                {value: 17, name: '对数'},
                {value: 20, name: '方程组无解 '},
                {value: 9, name: '棱锥'},
                {value: 13, name: '直线系方程'},
                {value: 14, name: '二分法'}
            ]
        }
    ]
};
