<template>
  <v-container :class="{ onDark: darkMode }">
    <v-col cols="12">
      <h2>Your Cart</h2>
      <v-divider></v-divider>
    </v-col>

    <v-col cols="12 myCart">
      <p>Your cart is empty.</p>
    </v-col>

    <v-col cols="12 myCart">
      <h3>Sub Total: {{ formatPrice(totalPrice) }}</h3>
      <h3>GST: {{ formatPrice(gstAmount) }}</h3>
      <h3>Total Price: {{ formatPrice(totalPriceWithGST) }}</h3>
    </v-col>
    <v-col cols="12" sm="6" md="4" lg="12">
      <v-card v-for="item in cartItems" :key="item.id" class="my-3">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title class="text-h5 text-left">
              {{ item.name }}
            </v-card-title>
            <v-card-subtitle class="text-left">
              {{ item.categories }}
            </v-card-subtitle>

            <v-card-subtitle class="text-left"
              >₹ {{ formatPrice(item.price) }}</v-card-subtitle
            >

            <div class="centered-div">
              <v-list-item-action>
                <span class="cart-action" @click="addToCart(item)">
                  <i class="fa fa-plus-circle" aria-hidden="true"></i>
                </span>
                <span class="cart-action" @click="removeFromCart(item)">
                  <i class="fa fa-minus-circle"></i>
                </span>
              </v-list-item-action>
            </div>
          </div>

          <v-avatar class="ma-3" size="125" rounded="0">
            <v-img :src="item.image" alt="Product Image"></v-img>
          </v-avatar>
        </div>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["cartItems", "totalPrice", "darkMode"]),
    gstAmount() {
      const GST_RATE = 0.18; 
      const gstAmount = this.totalPrice * GST_RATE;
      return this.formatPrice(gstAmount);
    },
    totalPriceWithGST() {
      const gstAmount = this.totalPrice * 0.18; 
      const totalPriceWithGST = this.totalPrice + gstAmount;
      return this.formatPrice(totalPriceWithGST);
    },
  },
  methods: {
    formatPrice(price) {
      const priceNumber = Number(price);
      return priceNumber.toFixed(2); 
    },
    ...mapActions(["removeFromCart", "addToCart"]),
   
  },
};
</script>

<style scoped>
.text-h5 {
  margin-bottom: 0;
}

.centered-div {
  display: flex;
  justify-content: center;
}

.cart-action {
  margin: 0 10px; /* Adjust the margin value as needed */
}
</style>
