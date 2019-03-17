// 引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random
// mock登录数据
const loginData = () => {
  let loginObject = {
    username: localStorage.getItem('username') || '13333333333',
    userpsw: localStorage.getItem('userpsw') || 'a123456',
    token: '1234567890',
    url: '/list'
  }
  return loginObject
}
// mock注册数据
const registeredsData = () => {
  let registeredsObject = {
    status: '1',
    token: '1234567890',
    url: '/list'
  }
  return registeredsObject
}
// mock注册数据
const timeData = () => {
  let timeObject = {
    time: '60',
    num: '1111'
  }
  return timeObject
}
// mock首页列表数据
const listData = () => {
  let listdata = []
  for (let i = 0; i < 10; i++) {
    let listObject = {
      // 标题
      title: Random.cword('零售宝HR012345678910期', 5, 7),
      // 年利率a
      incomea: Random.float(1, 10, 2, 2),
      // 附加年利率
      incomeb: Random.float(1, 10, 2, 2),
      // 期限
      incometime: Random.natural(30, 90),
      // 进度
      progressbar: Random.natural(0, 100),
      // 起投金额
      investmentamount: 1000,
       // 封顶金额
       topamount: 10000,
      // 购买后剩余额度
      remainingamount: Random.float(10, 100, 2, 2),
      // 年利率是否添加附加年利率，等于1就添加
      status: Random.natural(0, 1),
      // 产品的id号
      id: i,
      // 项目金额
      itemamount: '1000万',
      // 预计起息日时间轴
      detailstime: 1469281964000,
      // 可用余额
      balance: Random.float(1, 10000, 2, 2),
      infos: [
        {
          tab: '项目信息',
          con: [
            {
              title: '预计截止日期',
              other: Random.datetime('yyyy-MM-dd')
            },
            {
              title: '预计起息日',
              other: Random.datetime('yyyy-MM-dd')
            },
            {
              title: '预计回款日',
              other: '2017-09-09起5个工作日内'
            },
            {
              title: '回款方式',
              other: '先息后本'
            },
            {
              title: '合伙人计划',
              other: '参与合伙人计划'
            },
            {
              title: '转让规则',
              other: '不支持转让'
            },
            {
              title: '担保方式',
              other: '渤海担保有限公司'
            }
          ]
        },
        {
          tab: '相关方介绍',
          con: Random.cparagraph()
        },
        {
          tab: '风控信息',
          con: Random.cparagraph()
        },
        {
          tab: '免责声明',
          con: Random.cparagraph()
        }
      ],
      // 订单号
      ordernumber: Random.integer('10000')
    }
    listdata.push(listObject)
  }
  return {
    listdata: listdata
  }
}
// mock用户中心首页数据
const userindexdata = () => {
  let userindexObject = {
    // 总资产
    allmoney: Random.integer(1000, 100000),
    // 我的收益
    income: Random.float(1, 1000, 2, 2),
    // 账户余额
    balance: Random.float(1, 1000, 2, 2)
  }
  return userindexObject
}
// mock我的投资数据
const userinvestmentlistdata = () => {
  let userinvestmentlistObject = {
    // 总资产
    allmoney: Random.integer(1000, 100000),
    // 我的收益
    income: Random.float(1, 1000, 2, 2),
    // 冻结金额
    freeze: Random.float(1, 1000, 2, 2),
    investmentlist: [
      {
        name: '持有中',
        info: [
          {
            title: Random.cword('零售宝HR012345678910期', 5, 7),
            status: '申购中',
            income: Random.float(1, 10, 2, 2),
            money: Random.integer(1000, 10000),
            starttime: Random.date('yyyy-MM-dd'),
            endtime: Random.date('yyyy-MM-dd')
          },
          {
            title: Random.cword('零售宝HR012345678910期', 5, 7),
            status: '申购中',
            income: Random.float(1, 10, 2, 2),
            money: Random.integer(1000, 10000),
            starttime: Random.date('yyyy-MM-dd'),
            endtime: Random.date('yyyy-MM-dd')
          },
          {
            title: Random.cword('零售宝HR012345678910期', 5, 7),
            status: '申购中',
            income: Random.float(1, 10, 2, 2),
            money: Random.integer(1000, 10000),
            starttime: Random.date('yyyy-MM-dd'),
            endtime: Random.date('yyyy-MM-dd')
          },
          {
            title: Random.cword('零售宝HR012345678910期', 5, 7),
            status: '申购中',
            income: Random.float(1, 10, 2, 2),
            money: Random.integer(1000, 10000),
            starttime: Random.date('yyyy-MM-dd'),
            endtime: Random.date('yyyy-MM-dd')
          }
        ]
      },
      {
        name: '已回款',
        info: [
          {
            title: Random.cword('零售宝HR012345678910期', 5, 7),
            status: '已回款',
            income: Random.float(1, 10, 2, 2),
            money: Random.integer(1000, 10000),
            starttime: Random.date('yyyy-MM-dd'),
            endtime: Random.date('yyyy-MM-dd')
          },
          {
            title: Random.cword('零售宝HR012345678910期', 5, 7),
            status: '已回款',
            income: Random.float(1, 10, 2, 2),
            money: Random.integer(1000, 10000),
            starttime: Random.date('yyyy-MM-dd'),
            endtime: Random.date('yyyy-MM-dd')
          },
          {
            title: Random.cword('零售宝HR012345678910期', 5, 7),
            status: '已回款',
            income: Random.float(1, 10, 2, 2),
            money: Random.integer(1000, 10000),
            starttime: Random.date('yyyy-MM-dd'),
            endtime: Random.date('yyyy-MM-dd')
          },
          {
            title: Random.cword('零售宝HR012345678910期', 5, 7),
            status: '已回款',
            income: Random.float(1, 10, 2, 2),
            money: Random.integer(1000, 10000),
            starttime: Random.date('yyyy-MM-dd'),
            endtime: Random.date('yyyy-MM-dd')
          }
        ]
      },
      {
        name: '已转让',
        info: [
          {
            title: Random.cword('零售宝HR012345678910期', 5, 7),
            status: '已转让',
            income: Random.float(1, 10, 2, 2),
            money: Random.integer(1000, 10000),
            starttime: Random.date('yyyy-MM-dd'),
            endtime: Random.date('yyyy-MM-dd')
          },
          {
            title: Random.cword('零售宝HR012345678910期', 5, 7),
            status: '已转让',
            income: Random.float(1, 10, 2, 2),
            money: Random.integer(1000, 10000),
            starttime: Random.date('yyyy-MM-dd'),
            endtime: Random.date('yyyy-MM-dd')
          },
          {
            title: Random.cword('零售宝HR012345678910期', 5, 7),
            status: '已转让',
            income: Random.float(1, 10, 2, 2),
            money: Random.integer(1000, 10000),
            starttime: Random.date('yyyy-MM-dd'),
            endtime: Random.date('yyyy-MM-dd')
          },
          {
            title: Random.cword('零售宝HR012345678910期', 5, 7),
            status: '已转让',
            income: Random.float(1, 10, 2, 2),
            money: Random.integer(1000, 10000),
            starttime: Random.date('yyyy-MM-dd'),
            endtime: Random.date('yyyy-MM-dd')
          }
        ]
      }
    ]
  }
  return userinvestmentlistObject
}
// mock资金明细数据
const detaildata = () => {
  let detail = []
  for (let i = 0; i < 20; i++) {
    let detailObject = {
      title: Random.csentence(5),
      time: Random.date('yyyy-MM-dd'),
      money: Random.float(50, 10000, 2, 2),
      balance: Random.float(50, 10000, 2, 2),
      status: Random.natural(0, 1)
    }
    detail.push(detailObject)
  }
  return {
    detail: detail
  }
}
// mock一组数据
const produceNewsData2 = () => {
  let articles2 = []
  for (let i = 0; i < 100; i++) {
    let newArticleObject = {
      // Random.csentence( min, max )
      title: Random.csentence(5, 30),
      // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'),
      // Random.cname() 随机生成一个常见的中文姓名
      author_name: Random.cname(),
      // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
      date: Random.date() + ' ' + Random.time(),
      token: '1234567890'
    }
    articles2.push(newArticleObject)
  }
  return {
    articles2: articles2
  }
}

// Mock.mock( url, post/get , 返回的数据)
Mock.mock('/news/login', 'post', loginData)
Mock.mock('/news/registered', 'post', registeredsData)
Mock.mock('/news/time', 'post', timeData)
Mock.mock('/news/list', 'get', listData)
Mock.mock('/news/userindex', 'get', userindexdata)
Mock.mock('/news/userinvestmentlist', 'get', userinvestmentlistdata)
Mock.mock('/news/detail', 'get', detaildata)

Mock.mock('/news/index2', 'get', produceNewsData2)
