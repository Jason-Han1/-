// 遇到一些没头绪的图表时，换一种思路也许也可以做的出来
// 当时是想着是关系图做，但是结尾不知道怎么聚集，
// 最后突然想着折线图也能实现出来
// ps. 一些细节没去处理（箭头旋转）
const resource = [{
        "pageIdName": "步骤一,步骤二,步骤三",
        "calcDateH": null,
        "viewCnt": 313652,
        "sum": 381030,
        "calcDate": null,
        "percent": "82.3%"
    },
    {
        "pageIdName": "步骤一,步骤二,步骤三,步骤四",
        "calcDateH": null,
        "viewCnt": 24454,
        "sum": 381030,
        "calcDate": null,
        "percent": "6.4%"
    },
    {
        "pageIdName": "步骤一,步骤二,步骤三,步骤四,步骤五",
        "calcDateH": null,
        "viewCnt": 11946,
        "sum": 381030,
        "calcDate": null,
        "percent": "3.1%"
    },
    {
        "pageIdName": "步骤一,步骤二,步骤三,步骤四",
        "calcDateH": null,
        "viewCnt": 7124,
        "sum": 381030,
        "calcDate": null,
        "percent": "1.9%"
    },
    {
        "pageIdName": "步骤一,步骤二,步骤三,步骤四,步骤五",
        "calcDateH": null,
        "viewCnt": 6727,
        "sum": 381030,
        "calcDate": null,
        "percent": "1.8%"
    },
    {
        "pageIdName": "步骤一,步骤二",
        "calcDateH": null,
        "viewCnt": 5893,
        "sum": 381030,
        "calcDate": null,
        "percent": "1.5%"
    },
    {
        "pageIdName": "步骤一,步骤二,步骤三,步骤四,步骤五",
        "calcDateH": null,
        "viewCnt": 3192,
        "sum": 381030,
        "calcDate": null,
        "percent": "0.8%"
    },
    {
        "pageIdName": "步骤一,步骤二,步骤三,步骤四,步骤五",
        "calcDateH": null,
        "viewCnt": 3101,
        "sum": 381030,
        "calcDate": null,
        "percent": "0.8%"
    },
    {
        "pageIdName": "步骤一,步骤二,步骤三",
        "calcDateH": null,
        "viewCnt": 2544,
        "sum": 381030,
        "calcDate": null,
        "percent": "0.7%"
    },
    {
        "pageIdName": "步骤一,步骤二,步骤三,步骤四,步骤五",
        "calcDateH": null,
        "viewCnt": 2397,
        "sum": 381030,
        "calcDate": null,
        "percent": "0.6%"
    }
];

const textColor = '#000';
const textBg = '#ffffff';
const lineNumber = resource.length;
// 定义刻度
const yAxisTick = 2;
// 生成Y轴刻度表
const yAxisTickArray = Array(lineNumber).fill(1).map((d, i) => lineNumber - 1 - yAxisTick * i);
// 找出路径最多的（掐头去尾）
// const maxPathNumber = Math.max(...resource.map(d => d.pageIdName ? d.pageIdName.split(',').length - 2 : 0));
// 设置路径最多6个
const maxPathNumber = 6;
// 生成X轴刻度表（maxPathNumber多于8的时候，取前四后四的路径，中间用“……”，所以是9个x坐标值）
// const xAxisTickArray = Array((maxPathNumber > 8 ? 9 : maxPathNumber) + 4).fill(1).map((d, i) => `x${i}`);
const xAxisTickArray = Array(maxPathNumber + 4).fill(1).map((d, i) => `x${i}`);
// 生成series数据
const seriesArray = yAxisTickArray.map((y, i) => {
  const seriesData = [0, ...Array(maxPathNumber + 2).fill(y), 0];
  return {
    data: seriesData,
    type: 'line',
    smooth: 0.7,
    smoothMonotone: 'x',
    symbol: 'none',
    lineStyle: {
      normal: {
        width: i ? 2 : 5 // 第一条线加粗
      }
    },
    markPoint: { // 每条路径的标注
      cursor: 'default',
      label: {
        normal: {
          show: true,
          fontSize: 13,
          formatter(params) {
            return ['percent', 'viewCnt'].includes(params.name) ? params.value : params.name;
          }
        }
      },
      data: (function() {
        // 定义：用每条线（resource）的 pageIdName 遍历出 该条线有几个路径标识（掐头去尾）
        let __pageIdName = [];
        if (resource[i].pageIdName) {
            const arr = resource[i].pageIdName.split(',');
            __pageIdName = arr.concat();
        //  掐头去尾的时候，应用以下代码
        //  arr.pop();
        //  arr.shift();
        //  if (arr.length > 5) {
        //    __pageIdName = [...arr.slice(0, 4), '······'];
        //  } else {
        //    __pageIdName = arr.concat();
        //  }
        } else {
            __pageIdName = [];
        }
        const __path = __pageIdName.map((d, dIndex) => (
          {
            name: d,
            value: yAxisTickArray[i],
            coord: [`x${2 + dIndex}`, yAxisTickArray[i]],
            symbol: 'triangle',
            symbolSize: 10,
            symbolRotate: -90,
            symbolOffset: (function() {
              // console.log(d, d.length * 13 + 20)
              return [((d.length * 13) / 2 + 10 + 5), 0];
            }()),
            // symbol: 'rect',
            // symbolSize: 1,
            label: {
              normal: {
                position: 'inside',
                color: textColor,
                backgroundColor: textBg,
                offset: (function() {
                  // console.log(d, d.length * 13 + 20)
                  return [-((d.length * 13) / 2 + 10 + 5), 0];
                }()),
                padding: [9, 10, 7]
              }
            }
          }
        ));
        // 定义：百分比
        const __percent = {
          name: 'percent',
          value: resource[i].percent,
          coord: ['x1', yAxisTickArray[i]], // 百分比位于每条路径x轴的'x1'位置
          symbol: 'pin',
          symbolSize: 1,
          symbolOffset: [0, -15],
          itemStyle: {
            normal: {
              color: textBg
            },
            emphasis: {
              color: textBg
            }
          },
          label: {
            normal: {
              position: 'right',
              color: textColor,
              fontWeight: '600'
            }
          }
        };
        // 定义：统计数
        const __viewCnt = {
          name: 'viewCnt',
          value: resource[i].viewCnt,
          coord: [xAxisTickArray[xAxisTickArray.length - 2], yAxisTickArray[i]], // 统计数位于每条路径x轴的倒数第二位置
          symbol: 'triangle',
          symbolSize: i ? 10 : 14,
          symbolRotate: -90,
          symbolOffset: [-10, 0],
          label: {
            normal: {
              position: 'left',
              color: textColor,
              fontWeight: '600',
              offset: [-5, -15]
            }
          }
        };
        return [__percent, ...__path, __viewCnt];
      }())
    }
  };
});

option = {
    grid: {
        top: 240,
        right: 0,
        bottom: 240,
        left: 0
    },
    title: {
        text: '折线连通图'
    },
    xAxis: {
        type: 'category',
        show: false,
        boundaryGap: false,
        data: xAxisTickArray
    },
    yAxis: {
        type: 'value',
        show: false,
        splitLine: {
            show: false
        }
    },
    animation: false,
    series: seriesArray
};

// module.exports = {
//   root: true,
//   parserOptions: {
//     parser: 'babel-eslint',
//     sourceType: 'module'
//   },
//   env: {
//     browser: true,
//     node: true,
//     es6: true,
//   },
//   extends: ['plugin:vue/recommended', 'eslint:recommended'],
//   globals: {
//     CryptoJS: true,
//     SM2CipherMode: true,
//     SM2Cipher: true,
//     isGray: true,
//     _: true
//   },

//   // add your custom rules here
//   //it is base on https://github.com/vuejs/eslint-config-vue
//   rules: {
//     "vue/max-attributes-per-line": [2, {
//       "singleline": 10,
//       "multiline": {
//         "max": 1,
//         "allowFirstLine": false
//       }
//     }],
//     "vue/name-property-casing": ["error", "PascalCase"],
//     'accessor-pairs': 2,
//     'arrow-spacing': [2, {
//       'before': true,
//       'after': true
//     }],
//     'block-spacing': [2, 'always'],
//     'brace-style': [2, '1tbs', {
//       'allowSingleLine': true
//     }],
//     'camelcase': [0, {
//       'properties': 'always'
//     }],
//     'comma-dangle': [2, 'never'],
//     'comma-spacing': [2, {
//       'before': false,
//       'after': true
//     }],
//     'comma-style': [2, 'last'],
//     'constructor-super': 2,
//     'curly': [2, 'multi-line'],
//     'dot-location': [2, 'property'],
//     'eol-last': 2,
//     'eqeqeq': [2, 'allow-null'],
//     'generator-star-spacing': [2, {
//       'before': true,
//       'after': true
//     }],
//     'handle-callback-err': [2, '^(err|error)$'],
//     // 'indent': [2, 2, {
//     //   'SwitchCase': 1
//     // }],
//     'jsx-quotes': [2, 'prefer-single'],
//     'key-spacing': [2, {
//       'beforeColon': false,
//       'afterColon': true
//     }],
//     'keyword-spacing': [2, {
//       'before': true,
//       'after': true
//     }],
//     'new-cap': [2, {
//       'newIsCap': true,
//       'capIsNew': false
//     }],
//     'new-parens': 2,
//     'no-array-constructor': 2,
//     'no-caller': 2,
//     'no-console': 'off',
//     'no-class-assign': 2,
//     'no-cond-assign': 2,
//     'no-const-assign': 2,
//     'no-control-regex': 0,
//     'no-delete-var': 2,
//     'no-dupe-args': 2,
//     'no-dupe-class-members': 2,
//     'no-dupe-keys': 2,
//     'no-duplicate-case': 2,
//     'no-empty-character-class': 2,
//     'no-empty-pattern': 2,
//     'no-eval': 2,
//     'no-ex-assign': 2,
//     'no-extend-native': 2,
//     'no-extra-bind': 2,
//     'no-extra-boolean-cast': 2,
//     'no-extra-parens': [2, 'functions'],
//     'no-fallthrough': 2,
//     'no-floating-decimal': 2,
//     'no-func-assign': 2,
//     'no-implied-eval': 2,
//     'no-inner-declarations': [2, 'functions'],
//     'no-invalid-regexp': 2,
//     'no-irregular-whitespace': 2,
//     'no-iterator': 2,
//     'no-label-var': 2,
//     'no-labels': [2, {
//       'allowLoop': false,
//       'allowSwitch': false
//     }],
//     'no-lone-blocks': 2,
//     'no-mixed-spaces-and-tabs': 2,
//     'no-multi-spaces': 2,
//     'no-multi-str': 2,
//     'no-multiple-empty-lines': [2, {
//       'max': 1
//     }],
//     'no-native-reassign': 2,
//     'no-negated-in-lhs': 2,
//     'no-new-object': 2,
//     'no-new-require': 2,
//     'no-new-symbol': 2,
//     'no-new-wrappers': 2,
//     'no-obj-calls': 2,
//     'no-octal': 2,
//     'no-octal-escape': 2,
//     'no-path-concat': 2,
//     'no-proto': 2,
//     'no-redeclare': 2,
//     'no-regex-spaces': 2,
//     'no-return-assign': [2, 'except-parens'],
//     'no-self-assign': 2,
//     'no-self-compare': 2,
//     'no-sequences': 2,
//     'no-shadow-restricted-names': 2,
//     'no-spaced-func': 2,
//     'no-sparse-arrays': 2,
//     'no-this-before-super': 2,
//     'no-throw-literal': 2,
//     'no-trailing-spaces': 2,
//     'no-undef': 2,
//     'no-undef-init': 2,
//     'no-unexpected-multiline': 2,
//     'no-unmodified-loop-condition': 2,
//     'no-unneeded-ternary': [2, {
//       'defaultAssignment': false
//     }],
//     'no-unreachable': 2,
//     'no-unsafe-finally': 2,
//     'no-unused-vars': [2, {
//       'vars': 'all',
//       'args': 'none'
//     }],
//     'no-useless-call': 2,
//     'no-useless-computed-key': 2,
//     'no-useless-constructor': 2,
//     'no-useless-escape': 0,
//     'no-whitespace-before-property': 2,
//     'no-with': 2,
//     'one-var': [2, {
//       'initialized': 'never'
//     }],
//     'operator-linebreak': [2, 'after', {
//       'overrides': {
//         '?': 'before',
//         ':': 'before'
//       }
//     }],
//     'padded-blocks': [2, 'never'],
//     'quotes': [2, 'single', {
//       'avoidEscape': true,
//       'allowTemplateLiterals': true
//     }],
//     'semi': [2, 'never'],
//     'semi-spacing': [2, {
//       'before': false,
//       'after': true
//     }],
//     'space-before-blocks': [2, 'always'],
//     // 'space-before-function-paren': [2, 'never'],
//     'vue/html-indent': ["error", {
//       'attributes': 1
//     }],
//     'vue/max-attributes-per-line': 'off',
//     'space-in-parens': [2, 'never'],
//     'space-infix-ops': 2,
//     'space-unary-ops': [2, {
//       'words': true,
//       'nonwords': false
//     }],
//     'spaced-comment': [2, 'always', {
//       'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
//     }],
//     'template-curly-spacing': [2, 'never'],
//     'use-isnan': 2,
//     'valid-typeof': 2,
//     'wrap-iife': [2, 'any'],
//     'yield-star-spacing': [2, 'both'],
//     'yoda': [2, 'never'],
//     'prefer-const': 2,
//     'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
//     // 'object-curly-spacing': [2, 'always', {
//     //   objectsInObjects: false
//     // }],
//     'array-bracket-spacing': [2, 'never'],
//     "no-var": 0
//   }
// }
