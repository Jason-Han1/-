option = {
    title:
    {
        text:'XX集团负面舆论统计',
        top: 'bottom',
        left:'center'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['XX集团','XX品牌','XX至尊版','XX至尊版plus','XX尊享版','XX尊享版plus','XX尊享版enhanced','XX尊享版extreme','XX尊享版huge']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['5-21','5-22','5-23','5-24','5-25','5-26','5-27','5-28','5-29','5-30','5-31','6-1','6-2','6-3']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
        name: '总数',
        type: 'line',
        label: {
            normal: {
                show: true,
                position: 'top',
            }
        },
        lineStyle: {
            normal: {
                width: 3,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
            }
        },
        data: [2000, 3000, 3700, 3500, 2500, 1300, 2500,3000, 2000, 3700, 3500, 1500, 1300, 2500]
    },
        {
            name:'XX集团',
            type:'bar',
            stack:'品牌',
            data:[320, 332, 301, 334, 390, 330, 320,320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'XX品牌',
            type:'bar',
            stack:'品牌',
            data:[20, 32, 21, 34, 90, 30, 20,20, 32, 21, 34, 90, 30, 20]
        },
        {
            name:'XX至尊版',
            type:'bar',
            stack: '至尊版',
            data:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'XX至尊版plus',
            type:'bar',
            stack: '至尊版',
            data:[220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'XX尊享版',
            type:'bar',
            stack: '尊享版',
            data:[150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'XX尊享版plus',
            type:'bar',
            stack: '尊享版',
            data:[620, 732, 701, 734, 1090, 1130, 1120,620, 732, 701, 734, 1090, 1130, 1120]
        },
        {
            name:'XX尊享版enhanced',
            type:'bar',
            stack: '尊享版',
            data:[120, 132, 101, 134, 290, 230, 220,120, 132, 101, 134, 290, 230, 220]
        },
        {
            name:'XX尊享版extreme',
            type:'bar',
            stack: '尊享版',
            data:[60, 72, 71, 74, 190, 130, 110,60, 72, 71, 74, 190, 130, 110]
        },
        {
            name:'XX尊享版huge',
            type:'bar',
            stack: '尊享版',
            data:[62, 82, 91, 84, 109, 110, 120,62, 82, 91, 84, 109, 110, 120]
        }
    ]
};
