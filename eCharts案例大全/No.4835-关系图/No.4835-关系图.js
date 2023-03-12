// 原始数据
let sourceData = [{name1:"生物化学与细胞生物学研究所",name2:"动物研究所",name3:"上海营养与健康研究院",num:3},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"北京基因组研究所",name2:"动物研究所",name3:"生物化学与细胞生物学研究所",num:3},
{name1:"动物研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"动物研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"中国科学技术大学",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"中国科学技术大学",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"上海营养与健康研究院",name2:"遗传与发育生物学研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"遗传与发育生物学研究所",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"上海营养与健康研究院",name2:"动物研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"中国科学技术大学",name3:"上海营养与健康研究院",num:3},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"遗传与发育生物学研究所",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"动物研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"动物研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物物理研究所",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"动物研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"遗传与发育生物学研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"动物研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"动物研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"上海营养与健康研究院",name2:"生物化学与细胞生物学研究所",name3:"",num:2},
{name1:"北京基因组研究所",name2:"中国科学技术大学",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"生物物理研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"广州生物医药与健康研究院",num:3},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"动物研究所",name2:"遗传与发育生物学研究所",name3:"",num:2},
{name1:"动物研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"动物研究所",name2:"遗传与发育生物学研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"遗传与发育生物学研究所",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"北京基因组研究所",name2:"动物研究所",name3:"",num:2},
{name1:"上海营养与健康研究院",name2:"上海巴斯德研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"上海营养与健康研究院",name2:"生物物理研究所",name3:"",num:2},
{name1:"动物研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"上海营养与健康研究院",name2:"遗传与发育生物学研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"遗传与发育生物学研究所",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"动物研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"动物研究所",name2:"遗传与发育生物学研究所",name3:"",num:2},
{name1:"动物研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"动物研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"动物研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"动物研究所",name3:"",num:2},
{name1:"上海营养与健康研究院",name2:"生物化学与细胞生物学研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"动物研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"遗传与发育生物学研究所",name3:"苏州纳米技术与纳米仿生研究所",num:3},
{name1:"动物研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"上海营养与健康研究院",name2:"生物化学与细胞生物学研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"动物研究所",name2:"遗传与发育生物学研究所",name3:"生物物理研究所",num:3},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"上海营养与健康研究院",name2:"苏州生物医学工程技术研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"遗传与发育生物学研究所",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"动物研究所",name3:"",num:2},
{name1:"动物研究所",name2:"遗传与发育生物学研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"生物物理研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"动物研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"动物研究所",name3:"",num:2},
{name1:"动物研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"上海营养与健康研究院",name2:"生物化学与细胞生物学研究所",name3:"",num:2},
{name1:"遗传与发育生物学研究所",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"动物研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"遗传与发育生物学研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"生物物理研究所",name3:"广州生物医药与健康研究院",num:3},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"北京基因组研究所",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"动物研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"动物研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"上海营养与健康研究院",name2:"生物化学与细胞生物学研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"上海营养与健康研究院",name2:"生物物理研究所",name3:"",num:2},
{name1:"上海营养与健康研究院",name2:"中国科学技术大学",name3:"遗传与发育生物学研究所",num:3},
{name1:"生物化学与细胞生物学研究所",name2:"中国科学技术大学",name3:"上海营养与健康研究院",num:3},
{name1:"动物研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"上海营养与健康研究院",name2:"动物研究所",name3:"",num:2},
{name1:"上海营养与健康研究院",name2:"生物化学与细胞生物学研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"动物研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"动物研究所",name3:"",num:2},
{name1:"遗传与发育生物学研究所",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"动物研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"上海营养与健康研究院",name2:"生物化学与细胞生物学研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"上海营养与健康研究院",name2:"生物化学与细胞生物学研究所",name3:"",num:2},
{name1:"动物研究所",name2:"遗传与发育生物学研究所",name3:"生物物理研究所",num:3},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"北京基因组研究所",name2:"动物研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"北京基因组研究所",name2:"动物研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"北京基因组研究所",name2:"中国科学技术大学",name3:"广州生物医药与健康研究院",num:3},
{name1:"动物研究所",name2:"遗传与发育生物学研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海巴斯德研究所",name3:"",num:2},
{name1:"遗传与发育生物学研究所",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"上海营养与健康研究院",name2:"生物化学与细胞生物学研究所",name3:"",num:2},
{name1:"北京基因组研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"遗传与发育生物学研究所",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"遗传与发育生物学研究所",name3:"苏州纳米技术与纳米仿生研究所",num:3},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"上海营养与健康研究院",name2:"北京基因组研究所",name3:"生物化学与细胞生物学研究所",num:3},
{name1:"遗传与发育生物学研究所",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"上海营养与健康研究院",name2:"动物研究所",name3:"上海营养与健康研究院",num:3},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"上海巴斯德研究所",num:3},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"北京基因组研究所",name2:"动物研究所",name3:"",num:2},
{name1:"上海营养与健康研究院",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"动物研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"遗传与发育生物学研究所",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"动物研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"动物研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"动物研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"上海营养与健康研究院",name2:"动物研究所",name3:"生物物理研究所",num:3},
{name1:"中国科学技术大学",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"北京基因组研究所",name2:"动物研究所",name3:"",num:2},
{name1:"上海营养与健康研究院",name2:"生物化学与细胞生物学研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"北京基因组研究所",name2:"动物研究所",name3:"广州生物医药与健康研究院",num:3},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"动物研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"动物研究所",name2:"遗传与发育生物学研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"北京基因组研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"动物研究所",name3:"",num:2},
{name1:"北京基因组研究所",name2:"动物研究所",name3:"生物物理研究所",num:3},
{name1:"生物化学与细胞生物学研究所",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"北京基因组研究所",name2:"动物研究所",name3:"生物物理研究所",num:3},
{name1:"生物物理研究所",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"上海营养与健康研究院",name2:"生物化学与细胞生物学研究所",name3:"上海营养与健康研究院",num:3},
{name1:"中国科学技术大学",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"动物研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"北京基因组研究所",name2:"动物研究所",name3:"生物物理研究所",num:3},
{name1:"动物研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"动物研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"动物研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"上海营养与健康研究院",num:3},
{name1:"中国科学技术大学",name2:"遗传与发育生物学研究所",name3:"苏州纳米技术与纳米仿生研究所",num:3},
{name1:"动物研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"上海营养与健康研究院",name2:"动物研究所",name3:"上海营养与健康研究院",num:3},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"广州生物医药与健康研究院",num:3},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"广州生物医药与健康研究院",num:3},
{name1:"遗传与发育生物学研究所",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"北京基因组研究所",name2:"动物研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"动物研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"广州生物医药与健康研究院",num:3},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"动物研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物物理研究所",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"上海营养与健康研究院",name2:"生物化学与细胞生物学研究所",name3:"上海营养与健康研究院",num:3},
{name1:"北京基因组研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"上海营养与健康研究院",name2:"北京基因组研究所",name3:"上海营养与健康研究院",num:3},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"动物研究所",name2:"遗传与发育生物学研究所",name3:"",num:2},
{name1:"上海营养与健康研究院",name2:"动物研究所",name3:"生物化学与细胞生物学研究所",num:3},
{name1:"动物研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"北京基因组研究所",name2:"动物研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物物理研究所",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"动物研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"动物研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"动物研究所",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"动物研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"动物研究所",name3:"",num:2},
{name1:"动物研究所",name2:"遗传与发育生物学研究所",name3:"",num:2},
{name1:"北京基因组研究所",name2:"动物研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"上海营养与健康研究院",name2:"上海巴斯德研究所",name3:"广州生物医药与健康研究院",num:3},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"北京基因组研究所",name2:"动物研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"动物研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"动物研究所",name3:"",num:2},
{name1:"上海营养与健康研究院",name2:"生物化学与细胞生物学研究所",name3:"上海营养与健康研究院",num:3},
{name1:"生物物理研究所",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"北京基因组研究所",name2:"动物研究所",name3:"",num:2},
{name1:"北京基因组研究所",name2:"动物研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"生物物理研究所",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"生物物理研究所",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"生物物理研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"遗传与发育生物学研究所",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"北京基因组研究所",name2:"动物研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"遗传与发育生物学研究所",name3:"苏州纳米技术与纳米仿生研究所",num:3},
{name1:"遗传与发育生物学研究所",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"遗传与发育生物学研究所",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"北京基因组研究所",name2:"动物研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"动物研究所",name2:"遗传与发育生物学研究所",name3:"",num:2},
{name1:"北京基因组研究所",name2:"动物研究所",name3:"生物物理研究所",num:3},
{name1:"中国科学技术大学",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"北京基因组研究所",name2:"动物研究所",name3:"",num:2},
{name1:"北京基因组研究所",name2:"动物研究所",name3:"遗传与发育生物学研究所",num:3},
{name1:"中国科学技术大学",name2:"生物物理研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"上海营养与健康研究院",name3:"",num:2},
{name1:"遗传与发育生物学研究所",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"北京基因组研究所",name2:"动物研究所",name3:"",num:2},
{name1:"北京基因组研究所",name2:"动物研究所",name3:"生物物理研究所",num:3},
{name1:"中国科学技术大学",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"苏州生物医学工程技术研究所",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"中国科学技术大学",name2:"动物研究所",name3:"生物物理研究所",num:3},
{name1:"上海营养与健康研究院",name2:"上海巴斯德研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"动物研究所",name3:"",num:2},
{name1:"生物化学与细胞生物学研究所",name2:"上海营养与健康研究院",name3:"生物物理研究所",num:3},
{name1:"中国科学技术大学",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"生物物理研究所",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"中国科学技术大学",name2:"广州生物医药与健康研究院",name3:"",num:2},
{name1:"北京基因组研究所",name2:"动物研究所",name3:"",num:2},
{name1:"动物研究所",name2:"生物物理研究所",name3:"",num:2},
{name1:"上海营养与健康研究院",name2:"中国科学技术大学",name3:"",num:2},
{name1:"遗传与发育生物学研究所",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2},
{name1:"遗传与发育生物学研究所",name2:"苏州纳米技术与纳米仿生研究所",name3:"",num:2}]


let dealRes = dealWithData(sourceData)
let linksSetTmp = dealRes.linksSetTmp
let nodes = dealRes.nodes
let articleList = [
    {name:"北京基因组研究所",num:120},
    {name:"广州生物医药与健康研究院",num:349},
    {name:"生物化学与细胞生物学研究所",num:397},
    {name:"苏州生物医学工程技术研究所",num:14},
    {name:"生物物理研究所",num:282},
    {name:"遗传与发育生物学研究所",num:227},
    {name:"苏州纳米技术与纳米仿生研究所",num:107},
    {name:"动物研究所",num:505},
    {name:"上海巴斯德研究所",num:24},
    {name:"中国科学技术大学",num:341},
    {name:"上海营养与健康研究院",num:565}]
let cellNum = 0
nodes.map((item)=>{
    cellNum = articleList.filter((res)=>{ return res.name == item.id})[0].num
    item.symbolSize = cellNum / 600 * 40
    item.category = item.id
    item.name = item.id
    item.value = cellNum 
})
let nodesTmp = JSON.parse(JSON.stringify(nodes))
let linkList = []
let arry = null
let nodeItem = {}
let nodeList = JSON.parse(JSON.stringify(nodes))
linksSetTmp1= [{"name":"遗传与发育生物学研究所-遗传与发育生物学研究所","num":2},
{"name":"广州生物医药与健康研究院-广州生物医药与健康研究院","num":3},
{"name":"北京基因组研究所-北京基因组研究所","num":2},
{"name":"动物研究所-动物研究所","num":2},
{"name":"上海营养与健康研究院-上海营养与健康研究院","num":2},
{"name":"生物化学与细胞生物学研究所-生物化学与细胞生物学研究所","num":1},
{"name":"生物化学与细胞生物学研究所-上海营养与健康研究院","num":2},
{"name":"中国科学技术大学-中国科学技术大学","num":4},
{"name":"中国科学技术大学-广州生物医药与健康研究院","num":5},
{"name":"上海营养与健康研究院-动物研究所","num":2},
{"name":"生物物理研究所-生物物理研究所","num":2},
{"name":"生物化学与细胞生物学研究所-动物研究所","num":2},
{"name":"动物研究所-上海营养与健康研究院","num":3},
{"name":"中国科学技术大学-遗传与发育生物学研究所","num":2},
{"name":"遗传与发育生物学研究所-苏州纳米技术与纳米仿生研究所","num":2},
{"name":"中国科学技术大学-苏州纳米技术与纳米仿生研究所","num":2},
{"name":"北京基因组研究所-遗传与发育生物学研究所","num":2},
{"name":"苏州纳米技术与纳米仿生研究所-苏州纳米技术与纳米仿生研究所","num":2},
{"name":"动物研究所-生物物理研究所","num":3},
{"name":"生物化学与细胞生物学研究所-广州生物医药与健康研究院","num":2},
{"name":"上海营养与健康研究院-广州生物医药与健康研究院","num":7},
{"name":"生物物理研究所-苏州纳米技术与纳米仿生研究所","num":4},
{"name":"上海营养与健康研究院-生物化学与细胞生物学研究所","num":2},
{"name":"生物化学与细胞生物学研究所-中国科学技术大学","num":8},
{"name":"北京基因组研究所-动物研究所","num":1},
{"name":"动物研究所-生物化学与细胞生物学研究所","num":3},
{"name":"北京基因组研究所-生物化学与细胞生物学研究所","num":2},
{"name":"上海巴斯德研究所-上海巴斯德研究所","num":2},
{"name":"北京基因组研究所-生物物理研究所","num":9},
{"name":"广州生物医药与健康研究院-苏州纳米技术与纳米仿生研究所","num":1},
{"name":"中国科学技术大学-动物研究所","num":25},
{"name":"动物研究所-广州生物医药与健康研究院","num":5},
{"name":"动物研究所-遗传与发育生物学研究所","num":25},
{"name":"苏州生物医学工程技术研究所-苏州生物医学工程技术研究所","num":12},
{"name":"上海营养与健康研究院-遗传与发育生物学研究所","num":6},
{"name":"生物化学与细胞生物学研究所-遗传与发育生物学研究所","num":2},
{"name":"上海营养与健康研究院-上海巴斯德研究所","num":5},
{"name":"上海营养与健康研究院-生物物理研究所","num":9},{"name":"生物化学与细胞生物学研究所-生物物理研究所","num":8},{"name":"遗传与发育生物学研究所-生物物理研究所","num":4},{"name":"中国科学技术大学-生物物理研究所","num":6},{"name":"生物物理研究所-广州生物医药与健康研究院","num":7},{"name":"北京基因组研究所-中国科学技术大学","num":4},{"name":"北京基因组研究所-广州生物医药与健康研究院","num":7},{"name":"中国科学技术大学-上海营养与健康研究院","num":4},{"name":"生物化学与细胞生物学研究所-上海巴斯德研究所","num":3},{"name":"上海营养与健康研究院-中国科学技术大学","num":2},{"name":"生物化学与细胞生物学研究所-北京基因组研究所","num":1},{"name":"上海营养与健康研究院-苏州生物医学工程技术研究所","num":1},{"name":"上海巴斯德研究所-广州生物医药与健康研究院","num":1},{"name":"上海营养与健康研究院-北京基因组研究所","num":2},{"name":"北京基因组研究所-上海营养与健康研究院","num":1},{"name":"苏州生物医学工程技术研究所-广州生物医药与健康研究院","num":1}]
linksSetTmp.map((item)=> {
    arry = item.name.split("-")
    linkList.push({
        source: arry[0],
        target: arry[1]
    })
    // if (item.num > 1) {
    //     // 如果自己到自己且不只一条
    //     for (let i = 1; i < item.num; i++) {
    //         // addNodes(nodeList, {id: arry[1] + i, category: arry[1], symbolSize: 10, name: ''})
    //         linkList.push({
    //             source: arry[0],
    //             target: arry[1],
    //             lineStyle: {
    //                 curveness: 0.01 * i
    //             }
    //         })
    //      }
    // }
    // if (item.num > 1) {
    //     // 如果自己到自己且不只一条
    //     for (let i = 1; i < item.num; i++) {
    //         addNodes(nodeList, {id: arry[1] + i, category: arry[1], symbolSize: 10, name: ''})
    //         linkList.push({
    //             source: arry[0],
    //             target: arry[1] + i,
    //         })
    //      }
    // }
})

function addNodes(arry, cell) {
    if (arry.some(function(res){
       return res.id == cell.id
    })) {
        return
    }
    arry.push(cell)
}
console.log(nodeList)
// console.log(JSON.stringify(linksSetTmp))
// console.log(linkList)
myChart.showLoading();
    myChart.hideLoading();
    option = {
        backgroundColor: 'rgba(0,0,0,1)',
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        series : [
            {
                type: 'graph',
                layout: 'force',
                circular: {
                    rotateLabel: true
                },
                data: nodeList,
                links: linkList,
                categories: nodesTmp,
                roam: true,
                label: {
                    show: true,
                    position: 'center',
                    color: '#fff',
                    formatter: [
                        '{b}'
                    ].join('\n'),
                
                    rich: {
                        b: {
                            height: 40,
                            verticalAlign: 'middle',
                            align: 'center',
                            verticalAlign: 'middle',
                            align: 'center',
                        }
                    }
                },
                edgeLabel: {
                    show: false
                },
                force: {
                    repulsion: 100
                }
            }
        ]
    };
    console.log(JSON.stringify(option))
    myChart.setOption(option);
    
    
    
    
function dealWithData(data) {
    // data: 原始数据[{name1: "", name2: "", name3: "", num: 1}]
    // 1、过滤 关系为0的数据
    data2 = data.filter((item) => {
        return item.num
    })
    // 2、获取所有机构名称
    let agencyNames =[]
    data2.map((item)=>{
        item.name1 && agencyNames.push(item.name1)
        item.name2 && agencyNames.push(item.name2)
        item.name3 && agencyNames.push(item.name3)
    })
    // 3、获取节点
    let nodes = Array.from(new Set(agencyNames)).map((item)=>{
        return {
            id: item
        }
    })
    // 4获取关系linksSetTmp
    let links = []
    data2.map((item)=>{
        if (item.num == 1) {
            // links.push({
            // source: item.name1,
            // target: item.name1
            // })
        } else if (item.num == 2) {
            links.push({
            source: item.name1,
            target: item.name2
            })
        } else if (item.num == 3) {
            links.push({
            source: item.name1,
            target: item.name2
            })
            links.push({
                source: item.name2,
                target: item.name3
            })
            links.push({
                source: item.name1,
                target: item.name3
            })
        }
    })
    let linksTmp = links.map((item)=>{
        return `${item.source}-${item.target}`
    })
    let linksSetTmp = []
    Array.from(new Set(linksTmp)).map((res)=>{
        let tmp = {
            name: res,
            num: 0
        }
        linksTmp.map((item)=>{
            if (item == tmp.name) {
                tmp.num++
            }
        })
        linksSetTmp.push(tmp)
    })
    return {
        nodes: nodes,
        linksSetTmp: linksSetTmp
    }
}