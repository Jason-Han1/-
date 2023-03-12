
var datas=[
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
            ];

const colorList = ['rgb(24,144,255)', 'rgb(14,239,141)','rgb(238,89,16)',
  'rgb(255,154,55)', 'rgb(255,209,24)'];

option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    color:colorList,
    legend: {
         type: 'scroll',
        orient: 'vertical',
        right: 50,
        top: 'middle',
        itemWidth: 8,
        itemHeight: 8,
        itemGap: 20,
        align: 'left',
        icon: 'circle',
        formatter: (name) =>{
          var target = 0;
          datas.forEach(item =>{
            if(item.name === name){
              target = item.value;
            }
          });
          return `${name} ( ${target}人 )`
        },
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
                position: 'center'
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
            data: datas,
        }
    ]
};
