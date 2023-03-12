 let data = [582, 421.2, 622.1, 625.3, 265, 224]
 let indicator = [{
         name: '上传资料',
         max: 1000
     },
     {
         name: '添加题目',
         max: 1000
     },
     {
         name: '新建试卷',
         max: 1000
     },
     {
         name: '发布作业',
         max: 1000
     },
     {
         name: '发布测试',
         max: 1000
     },
     {
         name: '发布公告',
         max: 1000
     },
 ]

 option = {
     radar: {
         center: ['50%', '50%'],
         radius: '75%',
         name: {
             formatter: function(name, indicator) {
                 let arr;
                 arr = [
                     '{a|' + name + '}'
                 ]
                 return arr.join('\n')
             },
             textStyle: {
                 rich: { //根据文字的组设置格式
                     a: {
                         color: 'rgba(0, 255, 252, 1)',
                         fontSize: 13,
                         fontWeight: 500,
                         fontFamily: 'Source Han Sans CN',
                     },
                 }

             }
         },
         nameGap: 20,
         indicator: indicator,
         splitLine: {
             show: false

         },
         splitArea: {
             show: true,
             areaStyle: {
                 color: ['rgba(24, 56, 214, 1)', 'rgba(24, 56, 214, 0.75)', 'rgba(24, 56, 214, 0.55)', 'rgba(24, 56, 214, 0.35)', 'rgba(24, 56, 214, 0.2)']
             }
         },
         axisLine: {
             show: false
         }
     },
     series: [{
         // name: '家庭融合包',
         type: 'radar',
         data: [data],
         // value:14,
        //  label: {
        //      show: true,
        //      formatter: function(params) {
        //          console.log(params)
        //          return params.value + '万';
        //      },
        //      color: '#8E88FE',
        //      // position:[-20,-10,-10,-10],
        //      align: 'right',
        //      distance: 10,
        //      align: 'right'
        //  },
         symbolSize: [8, 8],
         lineStyle: { //边缘颜色
            //  width: 0
            color:'rgba(255, 213, 213, 1)',
            shadowBlur:8,
            shadowColor:'#ff3838'
         },
         itemStyle: {
             borderWidth: 3,
             color: 'rgba(255, 237, 175, 1)',
             borderColor: 'rgba(255, 83, 83, 1)',
             shadowBlur:8,
             shadowColor:'#ff3838'
         },
         areaStyle: {
             color: 'rgba(255, 0, 228, 1)',
             opacity: 0.3
         }
     }]
 };