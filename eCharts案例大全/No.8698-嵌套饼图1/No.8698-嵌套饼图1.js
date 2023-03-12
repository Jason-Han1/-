let innerFontColor = '#FFFFFF';
let outerFontColor = '#666666';
let scale = 1;
let echartData = {
    inner: [
        {value:335,unit:'个', name:'直达', selected:true},
        {value:679,unit:'个', name:'营销广告'},
        {value:1548,unit:'个', name:'搜索引擎'}
    ],
    outer: [
        {value:310,unit:'个', name:'邮件营销'},
        {value:234, unit:'个',name:'联盟广告'},
        {value:135, unit:'个',name:'视频广告'},
        {value:1048,unit:'个', name:'百度'},
        {value:251, unit:'个',name:'谷歌'},
        {value:147, unit:'个',name:'必应'},
        {value:102, unit:'个',name:'其他'}
    ]
}

let legend1 = echartData.inner.map(v => v.name);
let legend2 = echartData.outer.map(v => v.name);
let legendData = [...legend1, ...legend2];

option = {
    color: ["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80",
            "#8d98b3","#FFEA01","#B8D07C","#fca4bb","#dc69aa",
            "#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050",
            "#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        right: 30,
        top: 'center',
        itemWidth: 14 * scale,
        itemHeight: 14 * scale,
        data:legendData
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:echartData.inner
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],
            data:echartData.outer,
            label: {
                normal: {
                    color: outerFontColor,
                    fontSize: 12 * scale,
                    lineHeight: 16 * scale,
                    padding: [20 * scale, 1,0,0],
                    formatter: function(params){
                        // return '{a|'+params.name+'}\n{b|'+params.percent+'}{a|'+(params.data.unit || '')+'}'
                        return params.name+'\n{b|'+params.percent+'}'+(params.data.unit || '');
                   
                    },
                    rich:{
                        b: {
                            fontWeight: 'bold',
                            color: outerFontColor
                        }
                    }
                }
            }
        }
    ]
};