var xAxisData = ["2013年9月","2013年10月","2013年11月","2013年12月","2014年1月","2014年2月","2014年3月","2014年4月","2014年5月","2014年6月","2014年7月","2014年8月","2014年9月","2014年10月","2014年11月","2014年12月","2015年1月","2015年2月","2015年3月","2015年4月","2015年5月","2015年6月","2015年7月","2015年8月","2015年9月","2015年10月","2015年11月","2015年12月","2016年1月","2016年2月","2016年3月","2016年4月","2016年5月","2016年6月","2016年7月","2016年8月","2016年9月","2016年10月","2016年11月","2016年12月","2017年1月","2017年2月","2017年3月"];
var data = ["33","759","973","792","608","401","1471","1084","1779","1778","1627","1238","2052","887","2504","3088","3004","2716","6278","6229","5514","5445","5079","3775","4883","4452","4624","3882","3956","2179","3802","3014","3914","4230","3237","3956","4584","2960","3713","3650","2955","4022","4077"];
option = {
    backgroundColor: "#000",
    title: {
        text: '“一带一路”传播趋势分析（月度）',
        subtext:'纯属虚构',
        x:'center',
        top:'40',
        textStyle: {
            color: "#fff",
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '15%',
        top: '20%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis'
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: xAxisData,
        splitLine: {
            show: true,
            interval: 'auto'
        },
        "axisLabel": {
            textStyle: {
                fontFamily: "微软雅黑",
                fontSize: '14px',
                color: "#fff",
                fontWeight:'normal',

            }
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color:"#fff"
            }
        },
    },
    series: [{
        name: '值',
        type: 'line',
        smooth: true,
        data: data,
        itemStyle: {
            normal: {
                lineStyle: {
                    color: '#00CCFF'
                }
            }
        }
    }]
};