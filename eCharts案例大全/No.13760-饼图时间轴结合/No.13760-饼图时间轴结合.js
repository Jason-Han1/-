//------------------------------------引用请注明出处

var myData = ['计算机', '法学院', '理学院', '外国语', '工商学院', '建工学院', '国教学院', '农学院', '工程学院', '食品学院', '艺术学院', '经济管理学院'];
var databeast = {
    1: [{
          name: '正常',
                value: 12060
            },{
                name: '缺考',
                value: 1100
            },{
                name: '白卷',
                value: 1249
            },{
                name: '作弊',
                value: 2500
            }],
    2: [{
          name: '正常',
                value: 12060
            },{
                name: '缺考',
                value: 4100
            },{
                name: '白卷',
                value: 4249
            },{
                name: '作弊',
                value: 4500
            }],
    3: [{
          name: '正常',
                value: 4060
            },{
                name: '缺考',
                value: 4100
            },{
                name: '白卷',
                value: 4249
            },{
                name: '作弊',
                value: 4500
            }],
    4: [{
          name: '正常',
                value: 4060
            },{
                name: '缺考',
                value: 4100
            },{
                name: '白卷',
                value: 4249
            },{
                name: '作弊',
                value: 4500
            }],
    5: [{
          name: '正常',
                value: 4060
            },{
                name: '缺考',
                value: 4100
            },{
                name: '白卷',
                value: 4249
            },{
                name: '作弊',
                value: 4500
            }],
    6: [{
          name: '正常',
                value: 4060
            },{
                name: '缺考',
                value: 4100
            },{
                name: '白卷',
                value: 4249
            },{
                name: '作弊',
                value: 4500
            }],
    7: [{
          name: '正常',
                value: 4060
            },{
                name: '缺考',
                value: 4100
            },{
                name: '白卷',
                value: 4249
            },{
                name: '作弊',
                value: 4500
            }],
    0: [{
          name: '正常',
                value: 4060
            },{
                name: '缺考',
                value: 4100
            },{
                name: '白卷',
                value: 4249
            },{
                name: '作弊',
                value: 4500
            }]
   
};

var timeLineData = [ 2011, 2012,2013,2014,2015,2016,2017];

function optiontitle(value) {
    if (value > 9) {
        return {
            text: '东农' + value + '考试情况统计',
            x: 'center',
            top: '15%'
        }
    } else return {
        text: '东农' + value + '考试情况统计',
        x: 'center',
        top: '15%'
    }


}
option = {
    baseOption: {

        timeline: {
            show: true,
            bottom: 30,
            axisType: 'category',
            tooltip: {
                show: true,
                formatter: function(params) {
                    console.log(params);
                    return params.name;
                }
            },
            autoPlay: true,
            currentIndex: 6,
            playInterval: 1000,
            label: {
                normal: {
                    show: true,
                    interval: 'auto',
                    formatter: function(value) {
                       return  value + '年'
                    }
                },
            },
            data: [],
        },
        title: {
            //   text:'大北京景点帅哥美女统计', 
            textStyle: {
                fontSize: 16,
            },
        },

        grid: [{
            show: false,
            left: '10%',
            top: '15%',
            bottom: 90,
            containLabel: true,
        }],
  
        series: [],

    },

    options: [],


};

for (var i = 0; i < timeLineData.length; i++) {
    option.baseOption.timeline.data.push(timeLineData[i]);
    option.options.push({
        title: optiontitle(timeLineData[i]),
        
        series: [{
            name: '总课时',
            type: 'pie',
           color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4','#659F83','#08C7AE'],
            radius:['30%','45%'],
            label: {
                normal: {
                    show: true,
                    formatter: "{b}: {c} ({d}%)"
                },
                emphasis: {
                    show: true,
                    position: 'left',
                    offset: [0, 0],
                   
                },
            },
            data: databeast[i],
        }]
    });
}