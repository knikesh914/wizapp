<template>
  <div class="appMain">
    <v-container class="my-5">
      <v-card class="pa-1" flat height="100px">
        <v-toolbar dense>
          <v-text-field
            class="search-textarea"
            rows="1"
            placeholder="Search"
            v-model="searchQuery"
          ></v-text-field>

          <span @click="toggleSortDirection('price')">
            Price
          </span>

          <span @click="toggleSortDirection('review')" style="margin-left: 8px;">
          Review
          </span>
          
          <div class="text-center">
            <v-menu open-on-hover>
              <template v-slot:activator="{ props }">
                <v-btn
                  color="primary"
                  v-bind="props"
                >
                  Categories
                </v-btn>
              </template>

              <v-list>
                <v-list-item v-for="category in getProductCategories()" :key="category" @click="filterByCategory(category)">
                  <v-list-item-title>{{ category }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-toolbar>
      </v-card>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="product in filteredProducts"
          :key="product.id"
        >
          <v-card
            class="mx-auto"
            max-width="344"
            hover
            style="border: 1px solid grey;"
           
          >
          <div  @click="goToProductDetail(product.id)">
            <v-img :src="product.image"></v-img>

            <v-card-title class="text-left">
              {{ product.name }}
            </v-card-title>

            <v-card-subtitle class="text-left">
              {{ product.description }}
            </v-card-subtitle>
            <v-card-subtitle class="text-left">
              ₹ {{ product.price }}
            </v-card-subtitle>
          </div>

            <v-card-actions>
              <v-btn size="small" color="primary" @click="addToCart(product)">
                Add to cart
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      searchQuery: '', 
      sortDirection: 'asc', 
      sortField: 'price', 
      selectedCategory: '',
    };
  },
  computed: {
    ...mapGetters(['products']),
    filteredProducts() {
      
      let filtered = this.products;
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(query)
        );
      }
      if (this.selectedCategory) {
        filtered = filtered.filter(product =>
          Array.isArray(product.categories) ? product.categories.includes(this.selectedCategory) : product.categories === this.selectedCategory
        );
      }

      // Sort the products
      filtered = filtered.sort((a, b) => {
        const aValue = this.getFieldValue(a, this.sortField);
        const bValue = this.getFieldValue(b, this.sortField);
        return (
          (this.sortDirection === 'asc' ? 1 : -1) * (aValue - bValue)
        );
      });

      return filtered;
    },
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    ...mapActions(['fetchProducts', 'addToCart']),
    goToProductDetail(productId) {
      this.$router.push(`/product/${productId}`);
    },
    toggleSortDirection(field) {
      if (this.sortField === field) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortField = field;
        this.sortDirection = 'asc';
      }
    },
    getFieldValue(obj, field) {
      if (typeof obj[field] === 'string') {
        return obj[field].toLowerCase();
      }
      return obj[field];
    },
    getProductCategories() {
      const uniqueCategories = new Set();
      this.products.forEach((product) => {
        if (Array.isArray(product.categories)) {
          product.categories.forEach((category) => {
            uniqueCategories.add(category);
          });
        } else if (product.categories) {
          uniqueCategories.add(product.categories);
        }
      });
      return Array.from(uniqueCategories);
    },
    filterByCategory(category) {
      this.selectedCategory = category;
    },
  },
};
</script>

<style scoped>

</style>
