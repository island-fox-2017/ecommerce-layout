axios.defaults.baseURL = 'http://localhost:3000/suplement';
var home = new Vue({
  el: '#home',
  data: {
    suplements: [],
    detail: [],
    cartItem: []
  },
  methods: {
    getAllSuplement () {
      axios.get('/')
      .then(res => {
        // console.log(res.data);
        this.suplements = res.data
      })
      .catch(err => {
        console.log(err);
      })
    },
    getId (id) {
      axios.get(`/${id}`)
      .then(res => {
        console.log(res);
        this.detail = res.data
      })
      .catch(err => {
        console.log(err);
      })
    },
    addToCart (obj) {
      // console.log(obj);
      this.cartItem.push(obj)
      alert('Thank you, your item already added to Cart')
      console.log(this.cartItem);
    }
  },
  created () {
    this.getAllSuplement()
  }
})