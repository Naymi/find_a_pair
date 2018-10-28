const topcard = 'http://natpagle.ru/wp-content/uploads/2017/02/HCT-cardback.png'

class Card{
  constructor(card){
    this.card=card;
  }
}
var v = new Vue({
  created() {
    this.cards = this.cards.concat(this.cards);
    this.cards = this.cards.sort(() => Math.random() - 0.5);
  },
  el: "#app",
  data: {
    score: 0,
    trys: 0,
    topcard,
    process: !1,
    cards: [
      new Card('https://upload.wikimedia.org/wikipedia/ru/thumb/3/39/Java_logo.svg/1200px-Java_logo.svg.png'),
      new Card('https://www.nixp.ru/uploads/news/fullsize_image/bc6e85e35944886749263e972b56e20a600a6a69.png'),
      new Card('https://avatars.mds.yandex.net/get-pdb/904462/23df2d90-5376-4409-aeda-1ec9ea23dcf7/s375'),
      new Card('http://itdistrict.ru/wp-content/uploads/2016/03/yazyik-programmirovaniya-JavaScript.png'),
      new Card('http://alllogos.ru/images/logotip-node-js.png'),
      new Card('https://www.nixp.ru/uploads/news/fullsize_image/3c154b61e5f47c4b7bb4fc37433d74422621e200.png'),
    ],
    tmp: [],
    collection: new Set()
  },
  methods: {
    flip(e) {
      const el = e.target.parentNode;
      if (!this.process && !el.classList.contains("active") && !el.classList.contains("reveal")) {        
        el.classList.add("active");
      } else {
        return;
      }
      this.tmp.push(el);
        if (this.tmp[1]) {
          this.trys++
          this.times++
          this.process = !0
          if (this.tmp[1].dataset.card == this.tmp[0].dataset.card) {
            this.tmp[0].classList.add("reveal");
            this.tmp[1].classList.add("reveal");
            this.process = !1
            this.collection.add(this.tmp[0])
        }
        setTimeout(() => {
          this.process = !1
          this.tmp[0].classList.remove("active");
          this.tmp[1].classList.remove("active");
          this.tmp.shift();
          this.tmp.shift();          
        },500)
      }
    }
  }
});