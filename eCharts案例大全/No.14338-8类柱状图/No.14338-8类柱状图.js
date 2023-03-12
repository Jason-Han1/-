option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['Plant-Complete', 'Plant-Chromosome','Plant-Scaffold','Plant-Contig','Animal-Complete', 'Animal-Chromosome','Animal-Scaffold','Animal-Contig']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis:  {
        type: 'value'
    },
    xAxis: {
        type: 'category',
        data: ['2016.01','2016.04','2016.07','2016.10','2017.01','2017.07','Now']
    },
    series: [
        {
            name: 'Plant-Complete',
            type: 'bar',
            stack: 'Plant',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [100, 200, 301, 334, 390, 330, 320]
        },
        {
            name: 'Plant-Chromosome',
            type: 'bar',
            barGap:'5%',
            stack: 'Plant',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'Plant-Scaffold',
            type: 'bar',
            stack: 'Plant',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'Plant-Contig',
            type: 'bar',
            stack: 'Plant',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [150, 212, 201, 154, 190, 330, 410]
        },{
            name: 'Animal-Complete',
            type: 'bar',
            stack: 'Animal',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
            name: 'Animal-Chromosome',
            type: 'bar',
            stack: 'Animal',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'Animal-Scaffold',
            type: 'bar',
            stack: 'Animal',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'Animal-Contig',
            type: 'bar',
            stack: 'Animal',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [150, 212, 201, 154, 190, 330, 410]
        }
    ]
};