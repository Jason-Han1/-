// .spreadTrend_tooltip {
//   background: #fff;
//   padding: 16px;
//   box-shadow: 0px 10px 20px 0px rgba(3, 28, 76, 0.2);
//   border-radius: 4px;
//   > table {
//     font-size: 12px;
//     font-family: PingFangSC-Regular, PingFang SC;
//     font-weight: 400;
//     > tbody {
//       > tr {
//         > td {
//           margin-right: 20px;
//           color: rgba(0, 0, 0, 0.6);
//           min-width: 50px;
//           text-align: center;
//           &:first-child {
//             color: rgba(0, 0, 0, 0.9);
//             font-family: PingFangSC-Medium, PingFang SC;
//             font-weight: 500;
//             text-align: right;
//           }
//         }
//       }
//       > tr:first-child {
//         > th {
//           color: rgba(0, 0, 0, 0.6);
//           line-height: 17px;
//           min-width: 50px;
//           text-align: center;
//           margin-right: 20px;
//         }
//       }
//     }
//   }
// }
const xAxis = ["2021-04-20", "2021-04-21", "2021-04-22"]
const yAxis = {
    '173':{
        '1':[230,67,99],
        '4':[503,607,990],
        '5':[23,67,99],
        '8':[23,67,99],
        'total_count':[503,607,990]
    },
    '174':{
        '1':[23,67,99],
        '4':[23,67,99],
        '5':[23,67,99],
        '8':[23,67,99],
        'total_count':[53,60,0]
    },
    'median':[30,60,70]
}
const brand = [{
    'brand_id': "173",
    'brand_name': "hahahha",
    'color': "rgba(77, 201, 78, 1)"
},{
    brand_id: "174",
    brand_name: "hihih",
    color: "rgba(77, 21, 34,1)"
}]
const platformOption = [{
  label: "微博",
  value: 1
},{
  label: "抖音",
  value: 5
},{
  label: "小红书",
  value: 4
}]
const dateNumInit = xAxis.map(v => {
      const brandId = brand.map(v => v.brand_id);
      const brandNumInit = brandId.reduce((init, curBrand) => {
        init[curBrand] = 0;
        return init;
      }, {});
      return { ...brandNumInit, date: v };
    });

    // const dateNum = dateNumInit.map((dateItem, index) => {
    //   const brandId = brand.map(v => v.brand_id);
    //   const platforms = platformOption.map(v => v.value);
    //   brandId.forEach(id => {
    //     const brandHotContent = platforms
    //       .map(platform => {
    //         return hotContent[id][platform];
    //       })
    //       .flat(1);
    //     brandHotContent.forEach(item => {
    //       if (item.date === dateItem.date) {
    //         dateItem[id] = dateItem[id] + 1;
    //       }
    //     });
    //   });
    //   return { ...dateItem };
    // });
const getSeries = (
  yAxis,
  brand,
  platformOption,
) => {
  const series = brand.map(v => {
    const platforms = platformOption.map(platform => platform.value);
    return {
      name: v.brand_name,
      type: 'line',
      data: yAxis[v.brand_id].total_count.map((item, i) => {
        const platformValue = platforms.reduce((init, cur) => {
          init[cur] = yAxis[v.brand_id][cur][i];
          return init;
        }, {});
        return {
          brandId: v.brand_id,
          value: item,
          ...platformValue,
        };
      }),
      smooth: true,
      hoverAnimation: false,
      symbolSize: (value, params) => {
        const { dataIndex, data } = params;
        return 6;
      },
      lineStyle: {
        color: v.color,
      },
      itemStyle: {
        borderWidth: 2,
      },
    };
  });
  const median = {
    name: '基准线',
    type: 'line',
    data: yAxis.median,
    smooth: true,
    symbol: 'none',
    lineStyle: {
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: '#FFEF30', // 100% 处的颜色
          },
          {
            offset: 0.3,
            color: '#FF8016', // 0% 处的颜色
          },
          {
            offset: 0.6,
            color: '#FF8016', // 0% 处的颜色
          },
          {
            offset: 1,
            color: '#FFEF30', // 100% 处的颜色
          },
        ],
      },
      type: 'dashed',
    },
  };
  return [...series, median];
};
const getToolTipFormatter = (
  params,
  platformOption,
  brand
 ) => {
  const xData = [
    '',
    '传播总量',
    ...['微博','抖音'],
  ];
  const yData = brand.map(v => v.brand_name);
  const brandData = params.slice(0, brand.length);
  const platforms = platformOption.map(platform => platform.value);
  const platformData = brandData
    // @ts-ignore
    .map(v => v.data)
    // @ts-ignore
    .map(v => {
      return [v.value, ...platforms.map(platform => v[platform])];
    });
  let table =
    '<table style="width:100%; user-select: text;-webkit-user-select: text;color: rgba(255,255,255,0.87);font-size: 12px"> <tr style="display:flex;">';
  xData.forEach(item => {
    table += `<th style="height:24px;flex:1;" class='wheelTd'>${item}</th>`;
  });
  table += '</tr>'
  platformData.forEach((rowArr, index) => {
    table += `<tr style="display:flex;" >`;
    if (yData.length - 1 >= index) {
      table += `<td style="height:24px;flex:1;" class='wheelTd'>${yData[index]}</td>`;
    }
    rowArr.forEach((item, i) => {
      table += `<td style="height:24px;flex:1;color:${
        i === 0 ? brand[index].color : 'not specified'
      }" class='wheelTd'>${+item}</td>`
    });
    table += `</tr>`;
  });
  table += '</table>';
  return `<div class='spreadTrend_tooltip'>${table}</div>`;
};
option = {
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        axisPointer: {
          type: 'shadow',
          shadowStyle: {
            color: '#E5EDFC50',
          },
        },
        formatter: (params) =>
          getToolTipFormatter(params, platformOption, brand),
      },
      color: [...brand.map(v => v.color), '#FF8016'],
      legend: {
        type: 'plain',
        top: 16,
        left: 46,
        itemWidth: 8,
        itemHeight: 8,
        itemGap: 46,
        icon: 'circle',
        textStyle: {
          color: '#000',
          fontSize: 12,
        },
        data: [...brand.map(v => v.brand_name), '基准线'],
      },
      dataZoom: {
        height: 20,
        type: 'slider',
        minValueSpan: 6,
        maxValueSpan: 15,
        backgroundColor: 'rgba(237, 237, 241, .4)',
        fillerColor: 'rgba(41, 115, 255, .1)',
        handleIcon:
          'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '60%',
        showDetail: false,
        bottom: 0,
        handleStyle: {
          color: '#2973FF',
        },
      },
      grid: {
        left: '5%',
        right: '5%',
        bottom: '44',
        top: 90,
        containLabel: true,
      },
      toolbox: {
        // show: false,
        right: 20,
        bottom: 0,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: xAxis,
        splitLine: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#E3E3E3',
          },
        },
        axisTick: {
          show: true,
          inside: true,
        },
        axisLabel: {
          color: 'rgba(0, 0, 0, 0.3)',
          lineHeight: 17,
        },
      },
      yAxis: {
        name: '总传播量',
        nameTextStyle: {
          color: 'rgba(0, 0, 0, 0.6)',
          fontSize: 12,
        },
        type: 'value',
        splitLine: {
          lineStyle: {
            color: '#F0F0F0',
            type: 'dashed',
          },
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: 'rgba(0, 0, 0, 0.3)',
          lineHeight: 17,
          formatter: (value) => +value
        },
      },
      series: getSeries(yAxis, brand, platformOption),
    };
    
    
    
    
    
    
    
 myChart.on('click', (params) => {
  console.log('1212')
});