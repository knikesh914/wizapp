<template>
    <div class="detailPage" v-if="product">
      <v-col cols="12"  sm="6"
          md="4"
          lg="12">
        <v-card >
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-img
                :src="product.image"
                height="400"
                width="300"
                class="ma-3"
              ></v-img>
            </div>
  
            <div class="detailCard">
              <v-card-title class="text-h5">
                {{ product.name }}
              </v-card-title>
  
              <v-card-subtitle> <span v-html="insertLineBreak(product.description, 120)"></span></v-card-subtitle>
              <v-card-subtitle>Price: ₹ {{ product.price }}</v-card-subtitle>
  
              <div class="star-rating">
                <input type="radio" id="1-star" name="rating" value="1" v-model="product.review" />
                <label for="1-star" class="star">&#9733;</label>
                <input type="radio" id="2-stars" name="rating" value="2" v-model="product.review" />
                <label for="2-stars" class="star">&#9733;</label>
                <input type="radio" id="3-stars" name="rating" value="3" v-model="product.review" />
                <label for="3-stars" class="star">&#9733;</label>
                <input type="radio" id="4-stars" name="rating" value="4" v-model="product.review" />
                <label for="4-stars" class="star">&#9733;</label>
                <input type="radio" id="5-stars" name="rating" value="5" v-model="product.review" />
                <label for="5-stars" class="star">&#9733;</label>
               
               
                
              </div>
  
              <v-card-actions>
                <v-btn class="ms-2" variant="outlined" size="small"  @click="addToCart(product)">
                  Add to cart
                </v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </v-col>
    </div>
    <div v-else>Loading...</div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['getProductById']),
      product() {
        const productId = parseInt(this.$route.params.id);
        return this.getProductById(productId);
      },
    },
    methods: {
        insertLineBreak(text, maxLength) {
      if (text.length > maxLength) {
        const chunks = [];
        let i = 0;
        while (i < text.length) {
          chunks.push(text.substr(i, maxLength));
          i += maxLength;
        }
        return chunks.join('<br>');
      }
      return text;
    },
    addToCart(product) {
    this.$store.dispatch('addToCart', product);
  },
  },
  };
  </script>
  
  <style>
  .star-rating input {
    display: none;
  }
  
  .star-rating label {
    color: #ccc;
    cursor: pointer;
    font-size: 30px;
  }
  
  .star-rating :checked ~ label {
    color: #f90;
    font-size: 30px;
  }
  
  .star-rating label:hover,
  .star-rating label:hover ~ label {
    color: #fc0;
    font-size: 30px;
  }
  </style>
  