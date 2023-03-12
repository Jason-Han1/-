var bartop = 70;
var stockidscenter = 50;
var idscenter = 15;
var capbottom = 5;//50px
var bartitletop = bartop-5;
var bartop_text = bartop+'%';
var bartitletop_text = bartitletop+'%';
var capitalData= [
        { name: "电解锌", data: [86] },
        { name: "硅锰合金", data: [3] },
        { name: "磷酸氢钙", data: [11] },
      ];
option = {
    backgroundColor:'#fff',
    title: [{
        text: '重仓股Top10',
        top:bartitletop_text,
        left:'45%'
    },
    {
         text: "资产配置",
         left: "45%",
         top: "5px",
     }],
    grid:[{
            top:bartop_text,
        },
        {
            top:capbottom+'%',
            height:40
        }],
    legend:{
        show:false,
        top:capbottom+'%',
        left:'55%',
        data:{
            name:'股票'
        }
    },
    dataset:[
        {
            source: [
                ['股票','债券','现金'],
                [30,40,20],
                ],
        },
        {
        source: [
            ['stockname', 'stockamount', 'stockpercent', 'top10idsA', 'top10idsus','top10idshk','top10idsApercent','top10idsuspercent','top10idshkpercent'],
            ['贵州茅台', 36.6144, 0.047243,'主要消费', '主要消费', '主要消费',0.0472,0.0472,0.0472,],
            ['五粮液'  , 23.9682, 0.030926,'工业'    , '工业'    , '工业'    ,0.0309,0.0309,0.0309,],
            ['中国平安', 22.9909, 0.029665,'医药卫生', '医药卫生', '医药卫生',0.0296,0.0296,0.0296,],
            ['立讯精密', 21.4294, 0.027650,'信息技术', '信息技术', '信息技术',0.0276,0.0276,0.0276,],
            ['宁德时代', 15.1585, 0.019559,'原材料'  , '原材料'  , '原材料'  ,0.0195,0.0195,0.0195,],
            ['隆基股份', 15.1417, 0.019537,'金融地产', '金融地产', '金融地产',0.0195,0.0195,0.0195,],
            ['招商银行', 14.7713, 0.019059,'金融地产', '金融地产', '金融地产',0.0190,0.0190,0.0190,],
            ['恒瑞医药', 13.9479, 0.017997,'信息技术', '信息技术', '信息技术',0.0179,0.0179,0.0179,], 
            ['中国中免', 12.7890, 0.016501,'医药卫生', '医药卫生', '医药卫生',0.0165,0.0165,0.0165,],
            ['迈瑞医疗', 11.7198, 0.015122,'可选消费', '可选消费', '可选消费',0.0151,0.0151,0.0151,],
            ]
    }],

    xAxis: [{
        type:'category',
    },
    {
        gridIndex:1,
        axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
    }],
    yAxis: [{
        name:'持仓价值'
    },
    {
        gridIndex:1,
        data: ["资产占比"],
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
    }],
    tooltip:{
        show:true
    },
    series: [{
        type: 'bar',
        name: 'stocktop10',
        datasetIndex:1,
        encode: {
            
            x:'stockname',
            y:'stockamount',
        },
        itemStyle:{
            barBorderRadius:[5,5,0,0]
        },
        tooltip:{
            show:true,
            trigger:'item',
            formatter:function(params, ticket, callback){
                // console.log(params.encode);
                var text = params.value[params.encode.x[0]]+'\n:'+params.value[params.encode.y[0]]+','+params.value[1]
                return text
            }
        }
    },
    {
        type:'pie',
        name:'A股重仓股行业分布',
        radius:['10%','15%'],
        center:['15%',stockidscenter+'%'],
        label:{
            show:true,
            formatter:'{@top10idsA}\n{d}%'
            // position:'center'
        },
        // data:[12, 34, 56, 10, 23]
        datasetIndex:1,
        encode:{
         
            value:'top10idsApercent'
        }
    },
    {
        type:'pie',
        name:'港股重仓股行业分布',
        radius:['10%','15%'],
        center:['45%',stockidscenter+'%'],
        label:{
            show:true,
            formatter:'{@top10idshk}\n{@top10idshkpercent}%'
            // position:'center'
        },
        // data:[12, 34, 56, 10, 23]
        datasetIndex:1,
        encode:{
            
            value:'top10idshkpercent'
        }
    },
    ],
    // color: [
    //       "#FCAD2C",
    //       "#5292FD",
    //       "#3DBB33 ",
    //       "#EF6B6E",
    //       "#7F6AAD",
    //       "#585247",
    //     ],
};
capitalData.forEach((item, index) => {
        option.series.push({
          xAxisIndex:1,
          yAxisIndex:1,
          type: "bar",
          name: item.name,
          stack: "1",
          label: {
            normal: {
              show: true,
              position: [5, 5],
              formatter: `{value|${item.data}}\n\n{name|${item.name}}`,
            //   formatter: `{value|${item.data}}`,
              align: "left",
              textStyle: {
                color: "#fff",
                rich: {
                  name: {
                    fontSize: "12",
                    fontWeight: 500,
                    color: "gray",
                  },
                  value: {
                    fontSize: "18",
                    fontWeight: 500,
                    color: "#fff",
                  },
                },
              },
            },
          },
          barWidth: 30,
          data: item.data,
          itemStyle: {
            normal: {
              barBorderRadius: [0],
            },
          },
        });
        if (index === 0) {
          option.series[index+3].itemStyle.normal.barBorderRadius = [
            5,
            0,
            0,
            5,
          ];
        } else if (index === capitalData.length - 1) {
          option.series[index+3].itemStyle.normal.barBorderRadius = [
            0,
            5,
            5,
            0,
          ];
        } else {
          return;
        }
      });