const list = [
  {
    value: '50',
    name: '华为',
    textStyle: {
      shadowBlur: 4,
      shadowColor: '#ECEFFF',
      shadowOffsetY: 14,
      color: '#73DDFF',
    },
  }, // 50
  { value: '30', name: 'VIVO' },
  { value: '29', name: 'OPPO' },
  { value: '28', name: 'HONOR' },
  { value: '27', name: '红米' },
  { value: '26', name: '小米' },
  { value: '25', name: '美图' },
  { value: '24', name: 'ONEPLUS' },
  { value: '23', name: '魅族' },
  { value: '22', name: '红手指' },
  { value: '21', name: 'SAMSUNG' },
  { value: '20', name: '金立' },
  { value: '16', name: 'BLACKBERRY' },
  { value: '15', name: '诺基亚' },
  { value: '14', name: '锤子' },
  { value: '13', name: '大疆' },
  { value: '12', name: '361' },
  { value: '11', name: '摩托罗拉' },
  { value: '10', name: '联想' },
  { value: '9', name: '玩家国度' },
]
option = {
  tooltip: {
    show: true,
          borderColor: '#fe9a8bb3',
          borderWidth: 1,
          padding: [10, 15, 10, 15],
          confine: true,
          backgroundColor: 'rgba(255, 255, 255, .9)',
          textStyle: {
            color: 'hotpink',
            lineHeight: 22
          },
          extraCssText: 'box-shadow: 0 4px 20px -4px rgba(199, 206, 215, .7);border-radius: 4px;'
  },
  series: [
    {
      type: 'wordCloud',
      // The shape of the "cloud" to draw. Can be any polar equation represented as a
      // callback function, or a keyword present. Available presents are circle (default),
      // cardioid (apple or heart shape curve, the most known polar equation), diamond (
      // alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.

      shape: 'pentagon',

      // A silhouette image which the white area will be excluded from drawing texts.
      // The shape option will continue to apply as the shape of the cloud to grow.

      // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
      // Default to be put in the center and has 75% x 80% size.

      left: 'center',
      top: 'center',
      width: '100%',
      height: '100%',
      right: null,
      bottom: null,

      // Text size range which the value in data will be mapped to.
      // Default to have minimum 12px and maximum 60px size.

      sizeRange: [14, 50],

      // Text rotation range and step in degree. Text will be rotated randomly in range [-90, 90] by rotationStep 45

      rotationRange: [0, 0],
      rotationStep: 0,

      // size of the grid in pixels for marking the availability of the canvas
      // the larger the grid size, the bigger the gap between words.

      gridSize: 25,

      // set to true to allow word being draw partly outside of the canvas.
      // Allow word bigger than the size of the canvas to be drawn
      drawOutOfBound: false,

      // If perform layout animation.
      // NOTE disable it will lead to UI blocking when there is lots of words.
      layoutAnimation: true,

      // Global text style
      textStyle: {
        fontFamily: 'PingFangSC-Semibold',
        fontWeight: 600,
        color: function (params) {
          let colors = ['#fe9a8bb3', '#fe9a8bb3', '#fe9a8b03', '#9E87FFb3', '#9E87FFb3', '#9E87FFb3', '#fe9a8bb3', '#fe9a8bb3', '#fe9a8bb3', '#73DDFF', '#58D5FF']
          return colors[parseInt(Math.random() * 10)];
        },
      },
      emphasis: {
        focus: 'none',
      },

      // Data is an array. Each array item must have name and value property.
      data: list,
    },
  ],
};
