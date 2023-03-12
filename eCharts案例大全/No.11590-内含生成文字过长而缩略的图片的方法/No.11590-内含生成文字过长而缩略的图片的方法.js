option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};


function buildEllipsisTextRect(text, style, isGetSeries) {
    let option = {
      series : [],
      backgroundColor:'transparent',
    };

    let seriesItem = {
      name:'矩形图',
      type:'treemap',
      roam: false,
      backgroundColor: 'transparent',
      width: '100%',
      height: '100%',
      bottom: '0%',
      label:{
        formatter: text,
        color: style.color || '#8E9CB9',
        backgroundColor:'transparent',
        lineHeight: style.lineHeight || 19,
        fontSize: style.fontSize || 14,
        margin: [0,0,0,0],
        padding:[0,0,0,0],
        verticalAlign: 'middle'
      },
      itemStyle: {
        normal: {
          show: false,
          borderWidth: 0,
          borderColor: '#00000000',
        },
        emphasis: {
          label: {
            show: true
          }
        }
      },
      data:[
        // {
        //   color:'transparent',
        //   name: text,
        //   value: 6
        // },
      ],
      breadcrumb:{
        show: false
      }
    };

    option.series.push( seriesItem );

    let newDiv = document.createElement("div");
    newDiv.style.height = `${style.lineHeight || 19}px`;
    newDiv.style.width = `${style.maxWidth || 80}px`;

    let ellipsisTextChart = echarts.init(  newDiv );
    ellipsisTextChart.setOption(option);

    // let dataUrl1 = ellipsisTextChart.getDataURL( {
    //   type: 'png',
    //   pixelRatio: 1, //2可以避免图片文字像素模糊 //缩放二倍图原理, 否则backgroundSize行宽一致
    //   backgroundColor: 'transparent',
    // });
    //
    // if( text == '水表' ){
    //   $('#logo').attr('src', dataUrl1);
    // }

    // return ellipsisTextChart.getDom();

    let dataUrl = ellipsisTextChart.getRenderedCanvas( {   //返回 HTMLCanvasElement
      pixelRatio: 1,
      backgroundColor: 'transparent',
    });

    if( isGetSeries ){
      return seriesItem;
    }

    return  dataUrl



    // 导出的格式，可选 png, jpeg
    // type: 'png',
    // 导出的图片分辨率比例，默认为 1。
    // pixelRatio?: number,
    // 导出的图片背景色，默认使用 option 里的 backgroundColor
    // backgroundColor: 'transparent',
    // 忽略组件的列表，例如要忽略 toolbox 就是 ['toolbox']
    // excludeComponents?: Array.<string>

  }