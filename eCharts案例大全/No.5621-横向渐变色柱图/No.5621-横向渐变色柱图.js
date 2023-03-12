/**
 * 根据给定两个hex颜色和分割数量，得到颜色数组
 * @param {*} startColor #hex #fffff
 * @param {*} endColor #hex #000000
 * @param {*} _step 颜色分几步包括首尾
 * @return [ #fffff, rgba(), #000000 ]
 */
function getGradientColorArr(startColor, endColor, _step) {
  const step = _step - 2;
  let result = [];
  function hexToRgb(hex) {
    var rgb = [];
    for (var i = 1; i < 7; i += 2) {
      rgb.push(parseInt('0x' + hex.slice(i, i + 2)));
    }
    return rgb;
  }
  //将hex转换为rgb
  const sColor = hexToRgb(startColor);
  const eColor = hexToRgb(endColor);
  if (step > 0) {
    //计算R\G\B每一步的差值
    const rStep = (eColor[0] - sColor[0]) / step;
    const gStep = (eColor[1] - sColor[1]) / step;
    const bStep = (eColor[2] - sColor[2]) / step;

    for (var i = 0; i < step; i++) {
      //计算每一步的hex值
      let r = parseInt(rStep * i + sColor[0]);
      let g = parseInt(gStep * i + sColor[1]);
      let b = parseInt(bStep * i + sColor[2]);
      result.push(`rgba(${r},${g},${b},1)`);
    }
  }
  result.push(endColor);
  result.unshift(startColor);

  return result;
}

let data = [];
let xAxisData = [];
let gradientColorArr = getGradientColorArr('#2EFFF7', '#FFD02E', 100);

for (let i = 1; i < 101; i++) {
  data.push({
    value: Math.ceil(Math.random() * 100),
    itemStyle: {
      color: gradientColorArr[i - 1],
    },
  });
  xAxisData.push(i);
}

option = {
  backgroundColor: '#000',

  grid: {
  },
  xAxis: {
    type: 'category',
    data: xAxisData,
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: '销售量',
      type: 'bar',
      data: data,
    },
  ],
};
