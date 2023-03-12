const getLineTooltip = ({ title = '', width = 197, valueTitle = '', data = [] }) => `<div style="width: ${typeof width === 'number' ? `${width}px` : width}; overflow:hidden;">
  <div style="clear:both; width:100%; height:28px;background:rgba(0, 0, 0, 0.9);line-height:28px; font-size: 14px">
    <span style="margin-left: 16px;">${title}</span>
    <span style="float:right; margin-right: 16px;">${valueTitle}</span>
  </div>
  <div style="clear:both;padding: 8px 0;width:100%;background:rgba(0, 0, 0, 0.5);">
    ${data
      .map(
        ({ legend, name, value }) => `
        <div style="margin:0 16px; width: '100%'; height: '24px';">
          <span style="width: 16px; height: '100%';">${legend}</span>
          <span style="line-height: 24px; font-size: 12px">${name}</span>
          <span style="float:right; line-height: 24px; font-size: 12px">${value}</span>
        </div>
      `,
      )
      .join('')}
  </div>
</div>`

option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    tooltip:{
       formatter: `<div style="width: 295px; overflow:hidden;">
  <div style="clear:both; width:100%; height:28px;background:rgba(0, 0, 0, 0.9);line-height:28px; font-size: 14px">
    <span style="margin-left: 16px;">2020-06-01</span>
    <span style="float:right; margin-right: 16px;"></span>
  </div>
  <div style="clear:both;padding: 8px 0;width:100%;background:rgba(0, 0, 0, 0.5);">
    
        <div style="margin:0 16px; width: '100%'; height: '24px';">
          <span style="width: 16px; height: '100%';">
              <svg width="14px" height="12px">
              <defs>
                <linearGradient id="gradient0" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="100%" style="stop-color:#45f5c8;stop-opacity:1"/>
                  <stop offset="0%" style="stop-color:#0bcf7a;stop-opacity:1"/>
                </linearGradient>
              </defs>
                <path d="M1.19694305,10.2914863 C1.62719581,9.6590509 2.83321045,7.508 5.54070823,7.508 C9.27692772,7.508 9.81611087,11.5149889 12,11.5149889 C14.1729711,11.5149889 14.9116706,9.96232504 15.4626329,9.05118966 C15.7427236,8.58799897 16.2639001,8.09885094 16.7238845,8.36336852 C17.0305408,8.53971357 17.1051866,8.85391264 16.9478219,9.30596572 C15.8593971,11.818637 14.2101231,13.0749726 12,13.0749726 C8.9488875,13.0749726 8.30660169,9.05118966 5.54070823,9.05118966 C3.53913493,9.05118966 2.59630684,11.0033242 2.3432282,11.2591566 C2.09014956,11.5149889 1.71887157,12.0143782 1.19694305,11.7646836 C0.675014537,11.5149889 0.856059445,10.7925565 1.19694305,10.2914863 Z" style="fill:url(#gradient0)" transform="scale(0.8, 0.8)" />
              </svg>
            </span>
          <span style="line-height: 24px; font-size: 12px">实际值</span>
          <span style="float:right; line-height: 24px; font-size: 12px">100.00 kWh/辆</span>
        </div>
      
  </div>
</div>`
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        textStyle: {
          fontSize: 12,
          fontWeight: 'bolder',
         // icon: greenFillFocus,
        },
        smooth: true,
        showAllSymbol: true,
        showSymbol: true,
        //symbol: `image://${orangeFillFocus}`,
        symbolSize: 22,
        label: {
          show: true,
          distance: 4,
          position: ['-300%', '-110%'],
          formatter: function(params) {
            var val1 = params.value || 0;
            return '{color1|' + val1 * 100 + '}{color2| % }';
          },
          rich: {
            color1: {
              color: '#fff',
              backgroundColor: 'black',
              borderColor: '#FAAE29',
              border: 1,
              lineHeight: 24,
              height: 24,
              padding: [0, 6, 0, 6],
              borderWidth: 1,
              borderRadius: [3, 0, 0, 3],
            },
            color2: {
              color: '#fff',
              backgroundColor: '#FAAE29',
              borderColor: '#FAAE29',
              lineHeight: 24,
              height: 24,
              borderWidth: 1,
              borderRadius: [0, 3, 3, 0],
              padding: [0, 4, 0, 1],
            },
          },
        },
        itemStyle: {
          lineStyle: {
            width: 2,
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#78ffc8', // 0% 处的颜色
                },
                {
                  offset: 0.5,
                  color: '#1ff39d', // 50% 处的颜色
                },
                {
                  offset: 1,
                  color: '#125037', // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
            shadowColor: '#000',
            shadowBlur: 10,
            shadowOffsetY: 40,
          },
        },
    }]
};
