/////////// LOADER ///////////

Vue.component('spinner', {
  template: '#spinner-loader',

  props: {
    status: {
      type: Boolean,
      default: true
    },

    rotation: {
      type: Boolean,
      default: true
    },

    size: {
      type: Number,
      default: 30
    },

    depth: {
      type: Number,
      default: 3
    },

    speed: {
      type: Number,
      default: 1.0
    },

    color: {
      type: String,
      default: '#6589b6'
    }
  },

  data() {
    return {
      rotationAnimations: ['forward', 'backward'],
      sizeUnits: 'px',
      timeUnits: 's'
    }
  },

  computed: {
    rotationDirection() {
        return this.rotation ? this.rotationAnimations[0] : this.rotationAnimations[1];
      },

      spinnerSize() {
        return this.size + this.sizeUnits;
      },

      spinnerDepth() {
        return this.depth + this.sizeUnits;
      },

      spinnerSpeed() {
        return this.speed + this.timeUnits;
      },

      spinnerStyle() {
        return {
          borderTopColor: this.hexToRGB(this.color, 0.15),
          borderRightColor: this.hexToRGB(this.color, 0.15),
          borderBottomColor: this.hexToRGB(this.color, 0.15),
          borderLeftColor: this.color,
          width: this.spinnerSize,
          height: this.spinnerSize,
          borderWidth: this.spinnerDepth,
          animationName: this.rotationDirection,
          animationDuration: this.spinnerSpeed
        }
      }
  },
  methods: {
    hexToRGB(hex, alpha) {
      var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

      if (alpha) {
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
      } else {
        return `rgb(${r}, ${g}, ${b})`;
      }
    }
  }
});

new Vue({
  el: '#app-loader',
  data: function () {
    return {
      spinner: {
        size: 70,
        status: true,
        color: '#B1212F',
        depth: 3,
        rotation: true,
        speed: 0.8
      }
    };
  },
  mounted: function () {
    var body = document.body
    setTimeout(function () {
      body.classList.add('loaded')
    }, 1000)
  }
})

////////////// BACK TO THE TOP ///////////////

Vue.component('backtotop', {
  template: '#backtotop',
  data: function () {
    return {
      isVisible: false
    };
  },
  methods: {
    initToTopButton: function () {
      $(document).bind('scroll', function () {
        var backToTopButton = $('.goTop');
        if ($(document).scrollTop() > 250) {
          backToTopButton.addClass('isVisible');
          this.isVisible = true;
        } else {
          backToTopButton.removeClass('isVisible');
          this.isVisible = false;
        }
      }.bind(this));
    },
    backToTop: function () {
      $('html,body').stop().animate({
        scrollTop: 0
      }, 'slow', 'swing');
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.initToTopButton();
    });
  }
});

new Vue({
  el: '#app-top',
});

///////// MODAL ///////////
Vue.component('modal', {
  template: '#modal-template'
})

// modal on subcribe form on posts
new Vue({
  el: '#app-modal',
  data: {
    showModal: false
  }
})

// modal on overlay with social
new Vue({
  el: '#app-social-modal',
  data: {
    showModal: false
  }
})

// modal on footer x 3
new Vue({
  el: '#app-footer-modal',
  data: {
    showModal: false,
    showModalSitemap: false,
    showModalPrivacy: false
  }
})

//Tabs on Author Portfolio page

new Vue({
  el: '#app-tab',
  data: {
    activetab: 0
  }
})



