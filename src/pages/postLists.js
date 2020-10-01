const posts = [
  {
    id: 1,
    author: '中田 大輔',
    address: '福岡県福岡市博多区博多駅前',
    main_images:[
      {
        photo: 'https://response.jp/imgs/thumb_h2/1368463.jpg',
      },
      {
        photo: 'https://toyota.jp/pages/contents/prius/004_p_007/4.0/image/top_design_ext.jpg',
      },
      {
        photo: 'https://motor-fan.jp/images/articles/10006723/big_main10006723_20181128205859000000.png',
      },
      {
        photo: 'https://toyota.jp/pages/contents/prius/004_p_007/4.0/image/top_conductor_perf.jpg',
      }
    ],
    pr1: '24h貸し出し可能',
    pr2: 'クルーズコントロール、カーナビ、TOYOTAセーフティ機能付',
    pr3: 'TOYOTAセーフティ機能付',
    pr4: '定員5人OK',
    tag1: '1ヶ月間貸し出しOK',
    tag2: '駐車場無料使用OK',
    price: '8,700',
    car_type: 'Prius',
    title: 'プリウスの歴史・概要',
    text: 'プリウスの登場は、2001年だ。センタータンクレイアウトを採用し、広大な室内スペースと低燃費性能を実現したモデルとして誕生した。',
  },
  {
    id: 2,
    author: '佐藤',
    address: '大分県大分市由布院由布院町',
    main_images:[
      {
        photo: 'https://response.jp/imgs/thumb_h2/1460324.jpg',
      },
      {
        photo: 'https://www.webcg.net/mwimgs/0/7/-/img_0734dcd3f4313fc03ce1c972541182de183262.jpg',
      },
      {
        photo: 'https://motor-fan.jp/images/cars/1858/big_20191007204634000000.jpg',
      },
      {
        photo: 'https://toyokeizai.net/mwimgs/d/9/-/img_d929ff5a1bfe3a9edc4c6fc63c8afb25169634.jpg',
      }
    ],
    pr1: '24h貸し出し可能',
    pr2: '1ヶ月貸し出せます',
    pr3: '駐車場付き',
    pr4: '',
    tag1: '1ヶ月間貸し出しOK',
    tag2: '',
    price: '7,500',
    car_type: 'Corolla',
    title: 'やっぱりトヨタのお車です',
    text: '「トヨタ・カローラ」ならではの走りが最高です！',
  },
  {
    id: 3,
    author: '松井',
    address: '福岡県福岡市中央区天神',
    main_images:[
      {
        photo: 'https://www.carsensor.net/contents/article_images/_64427/0026.jpg',
      },
      {
        photo: 'https://www.webcg.net/mwimgs/0/7/-/img_0734dcd3f4313fc03ce1c972541182de183262.jpg',
      },
      {
        photo: 'https://motor-fan.jp/images/cars/1858/big_20191007204634000000.jpg',
      },
      {
        photo: 'https://toyokeizai.net/mwimgs/d/9/-/img_d929ff5a1bfe3a9edc4c6fc63c8afb25169634.jpg',
      }
    ],
    pr1: '24h貸し出し可能',
    pr2: 'クルーズコントロール、カーナビ、TOYOTAセーフティ機能付',
    pr3: 'TOYOTAセーフティ機能付',
    pr4: '定員5人OK',
    tag1: '1ヶ月間貸し出しOK',
    tag2: '駐車場無料使用OK',
    price: '7,700',
    car_type: 'Corolla',
    title: 'カローラはおすすめ',
    text: '少し高いですが、カローラはとても乗りやすいのでおすすめしています！',
  },
  {
    id: 4,
    author: '児玉',
    address: '東京都世田谷区六本木',
    main_images:[
      {
        photo: 'https://www.autocar.jp/wp-content/uploads/2020/06/toyota-corolla-trek-2020-uk_200606_1.jpg',
      },
      {
        photo: 'https://www.webcg.net/mwimgs/0/7/-/img_0734dcd3f4313fc03ce1c972541182de183262.jpg',
      },
      {
        photo: 'https://motor-fan.jp/images/cars/1858/big_20191007204634000000.jpg',
      },
      {
        photo: 'https://toyokeizai.net/mwimgs/d/9/-/img_d929ff5a1bfe3a9edc4c6fc63c8afb25169634.jpg',
      }
    ],
    pr1: 'カーナビ、ETC付き',
    pr2: '1ヶ月貸し出せます',
    pr3: '',
    pr4: '',
    tag1: '1ヶ月間貸し出しOK',
    tag2: '',
    price: '6,500',
    car_type: 'Corolla',
    title: 'カローラです！',
    text: 'お気に入りの車のひとつです。フィットよりもかっこいいのでカローラにしました。',
  },
  {
    id: 5,
    author: '小原',
    address: '福岡県北九州市板前',
    main_images:[
      {
        photo: 'https://img.bestcarweb.jp/wp-content/uploads/2019/11/20174319/IKE_0930-1021.jpg',
      },
      {
        photo: 'https://www.webcg.net/mwimgs/0/7/-/img_0734dcd3f4313fc03ce1c972541182de183262.jpg',
      },
      {
        photo: 'https://motor-fan.jp/images/cars/1858/big_20191007204634000000.jpg',
      },
      {
        photo: 'https://toyokeizai.net/mwimgs/d/9/-/img_d929ff5a1bfe3a9edc4c6fc63c8afb25169634.jpg',
      }
    ],
    pr1: '24h貸し出し可能',
    pr2: 'クルーズコントロール、カーナビ、TOYOTAセーフティ機能付',
    pr3: 'TOYOTAセーフティ機能付',
    pr4: '定員5人OK',
    tag1: '1ヶ月間貸し出しOK',
    tag2: '駐車場無料使用OK',
    price: '6,800',
    car_type: 'Corolla',
    title: 'カローラかフィットが悩んだ',
    text: 'どっちがいいか悩みましたがカローラを選ぶことにしました！',
  },
  {
    id: 6,
    author: '坂下',
    address: '福岡県福岡市博多区住吉',
    main_images:[
      {
        photo: 'https://www.car-and-driver.jp/newcar/assets_c/2020/05/85c9734a88fb0c3161777b77a737f951348e8a5f-thumb-650x450-15007.jpg',
      },
      {
        photo: 'https://www.webcg.net/mwimgs/0/7/-/img_0734dcd3f4313fc03ce1c972541182de183262.jpg',
      },
      {
        photo: 'https://motor-fan.jp/images/cars/1858/big_20191007204634000000.jpg',
      },
      {
        photo: 'https://toyokeizai.net/mwimgs/d/9/-/img_d929ff5a1bfe3a9edc4c6fc63c8afb25169634.jpg',
      }
    ],
    pr1: 'カーナビ、ETC付き',
    pr2: '1ヶ月貸し出せます',
    pr3: '駐車場付き',
    pr4: '',
    tag1: '1ヶ月間貸し出しOK',
    tag2: '',
    price: '10,500',
    car_type: 'Corolla',
    title: 'カローラフィールダーが良かった',
    text: 'やっぱりカローラだよね。愛車を貸し出しますので無傷で返してください',
  },
  {
    id: 7,
    author: '松田',
    address: '福岡県福岡市西区小笠原',
    main_images:[
      {
        photo: 'https://cdn.autoc-one.jp/images/article/201711/08103927971_o.jpg',
      },
      {
        photo: 'https://kuruma-news.jp/wp-content/uploads/2018/07/20180629_voxy_nenpi_010.jpg',
      },
      {
        photo: 'https://webcg.ismcdn.jp/mwimgs/c/5/1200/img_c569261de798b02fb6348d718f5b26cd268100.jpg',
      },
      {
        photo: 'https://engcar.jp/wp-content/uploads/2019/12/WS000563.jpg',
      }
    ],
    pr1: '24h貸し出し可能',
    pr2: 'クルーズコントロール、カーナビ、TOYOTAセーフティ機能付',
    pr3: 'TOYOTAセーフティ機能付',
    pr4: '定員5人OK',
    tag1: '1ヶ月間貸し出しOK',
    tag2: '駐車場無料使用OK',
    price: '15,300',
    car_type: 'Voxy',
    title: 'ヴォクシーは本当にいい車！',
    text: 'インテリアがかっこいい、ヴォクシーを貸し出します！',
  },
]

export default posts;