let Slide = Vue.component('slide', {
  props: {
    id: Number,
    text: String
  },
  template: `
    <div class="gold">
      {{ text }}
    </div>
  `
})

let Present = Vue.component('present', {
  props: {
    id: Number,
    text: String
  },
  template:
    `
<div class="present">{{ text }}</div>
`
});

let app = new Vue({
  el: '#app',
  data: () => {
    return {
      currentSlide: 0,
      currentPresent: 0,
      showPresents: false,
      slides: [
        'Happy Birthday!',
        'I know you have been working very hard',
        'I know you need to chill even harder',
        'I also know that time is precious',
        'And a lot of the things we do can be doubled up',
        'And since we both love to spoil ourselves',
        'So I want to help you do exactly that',
        'With these presnts, you can enjoy a spa day',
        'And not give up any gaming time!',
        'Ready to see what you got?',
        'Here we go!',
      ].map((x, index) => {
        return {
          id: index,
          text: x,
        }
      }),
      presents: [
        'The gifts',
        'Fast drying hair turban',
        'Nail polish remove clips',
        'Nail polish remover pads (pre-soaked with 100% acetone)',
        'Foot Massager',
        'PSN gift card',
        ''
      ].map((x, index) => {
        return {
          id: index,
          text: x,
          show: false
        }
      })
    }
  },
  methods: {
    prev() {
      if (this.showPresents && this.currentPresent === 0) {
        this.showPresents = false
        this.currentSlide--
        return;
      }

      this.showPresents ?
        (this.currentPresent !== 0 ?
          this.currentPresent-- :
          this.showPresents = false
        ) :
        (this.currentSlide !== 0 ? this.currentSlide-- : this.currentSlide);
    },
    next() {
      this.showPresents ?
        (this.currentPresent !== this.presents.length - 1 ?
          this.currentPresent++ :
          this.currentPresent) :
        (this.currentSlide !== this.slides.length - 1 ?
          this.currentSlide++ :
          this.currentSlide);
      if (!this.showPresents && this.currentSlide === this.slides.length - 1) {
        this.revealPresents();
        return;
      }
    },
    start() {
      this.currentSlide = 0;
      this.currentPresent = 0;
      this.showPresents = false;
    },
    end() {
      this.showPresents ?
        (this.currentPresent = this.presents.length - 1) :
        (this.currentSlide = this.slides.length - 1);

      if (!this.showPresents && this.currentSlide === this.slides.length - 1) {
        this.revealPresents();
        return;
      }
    },
    revealPresents() {
      this.showPresents = true;
    }
  },
  components: {
    'slide': Slide,
    'present': Present
  }
});

