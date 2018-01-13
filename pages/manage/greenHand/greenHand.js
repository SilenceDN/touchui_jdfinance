// greenHand.js
export default {
  data () {
    return {
      column:[
        {
          title:'产品类型',
          content:'养老保险'
        },
        {
          title: '产品名称',
          content: '践行养老压根不老'
        },
        {
          title: '转入规则',
          content: '15:00前购买成功，发行机构会在第二个交易日确认。15:00后购买成功，发行机构会在第三个交易日确认（交易日是指排除周末及法定节假日的时间）'
        },
        {
          title: '收益规则',
          content: '从发行机构确认后半天，开始计算收益。第二个自然日展示收益。周末及法定节假日正常计算'
        },
        {
          title: '取出规则',
          content: '用户至少在赎回开放日前一天预约赎回，该产品美格30天为一个赎回开放日，最近一次赎回开放日为2018-02-14。预约成功后，资金将会在指定赎回开放日后1个交易日内转入原支付账户（具体时间视银行而定），如遇节假日顺延，节假日期间仍享受收益。'
        }
      ],
      isTip:true
    }
  },
  methods: {
    close(){
      this.isTip=false
    },
    navigateBack() {
      ui.navigateBack()
    }
  },
  mounted () {}
}
