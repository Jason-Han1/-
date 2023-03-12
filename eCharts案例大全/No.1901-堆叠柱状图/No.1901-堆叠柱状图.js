var dataset = {
	dimensions: ["访问时间", '直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
	source: [
		{ 访问时间: '周一', 直接访问: 320, 邮件营销: 120, 联盟广告: 220, 视频广告: 150, 搜索引擎: 820 },
		{ 访问时间: '周二', 直接访问: 302, 邮件营销: 132, 联盟广告: 182, 视频广告: 212, 搜索引擎: 832 },
		{ 访问时间: '周三', 直接访问: 301, 邮件营销: 101, 联盟广告: 191, 视频广告: 201, 搜索引擎: 901 },
		{ 访问时间: '周四', 直接访问: 334, 邮件营销: 134, 联盟广告: 234, 视频广告: 154, 搜索引擎: 934 },
		{ 访问时间: '周五', 直接访问: 390, 邮件营销: 90, 联盟广告: 290, 视频广告: 190, 搜索引擎: 1290 },
		{ 访问时间: '周六', 直接访问: 330, 邮件营销: 230, 联盟广告: 330, 视频广告: 330, 搜索引擎: 1330 },
		{ 访问时间: '周日', 直接访问: 320, 邮件营销: 210, 联盟广告: 310, 视频广告: 410, 搜索引擎: 1320 },
	]
}

function series(){
    const s = []
    for (var i = 0; i<dataset.dimensions.length-1; i++) {
        s.push({
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            }
        }) 
    }
    return s
}

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        type: 'value'
    },
    dataset: dataset,
    series: series()
};