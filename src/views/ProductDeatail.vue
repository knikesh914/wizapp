<template>
  <div class="detailPage" v-if="product">
    <main>
      <div class="card">
        <div class="card__title">
          <div class="icon">
            <a href="#"><i class="fa fa-arrow-left"></i></a>
          </div>
          <h3>New products</h3>
        </div>
        <div class="card__body">
          <div class="half">
            <div class="featured_text">
              <h1>{{ product.name }}</h1>
              <p class="sub">{{ product.categories }}</p>
              <p class="price">₹ {{ product.price }}</p>
            </div>
            <div class="image">
              <img :src="product.image" alt="" />
            </div>
          </div>
          <div class="half">
            <div class="description">
              <p>{{ product.description }}</p>
            </div>
            <div class="reviews">
              <div class="star-rating">
                <input
                  type="radio"
                  id="1-star"
                  name="rating"
                  value="1"
                  v-model="product.review"
                />
                <label for="1-star" class="star">&#9733;</label>
                <input
                  type="radio"
                  id="2-stars"
                  name="rating"
                  value="2"
                  v-model="product.review"
                />
                <label for="2-stars" class="star">&#9733;</label>
                <input
                  type="radio"
                  id="3-stars"
                  name="rating"
                  value="3"
                  v-model="product.review"
                />
                <label for="3-stars" class="star">&#9733;</label>
                <input
                  type="radio"
                  id="4-stars"
                  name="rating"
                  value="4"
                  v-model="product.review"
                />
                <label for="4-stars" class="star">&#9733;</label>
                <input
                  type="radio"
                  id="5-stars"
                  name="rating"
                  value="5"
                  v-model="product.review"
                />
                <label for="5-stars" class="star">&#9733;</label>
              </div>
            </div>
          </div>
        </div>
        <div class="card__footer">
          <div class="recommend"></div>
          <div class="action">
            <button type="button" @click="addToCart(product)">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getProductById"]),
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
        return chunks.join("<br>");
      }
      return text;
    },
    addToCart(product) {
      this.$store.dispatch("addToCart", product);
    },
  },
};
</script>

<style></style>
