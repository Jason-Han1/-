
const colorGroup =  ['#f38181', '#ff6473', '#5cc1b3', '#757882', '#6ef7c8'];
const obj = setLabel(colorGroup);
option = {
    color: colorGroup,
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center',
                formatter: (params) => {
                    return `{${obj.label[params.color]}|${params.data.value}}`
                },
                rich: obj.rich
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
            ]
        }
    ]
};

function setLabel(arry = []) {
   const rich = arry.map((item, index) => ({
       index: item
   }));
   const label = arry.map((item, index) => ({
       item: index
   }));
   return {
       rich,
       label
   }
}


