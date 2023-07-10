<template>
  <div class="appMain">
    <v-container class="my-5">
      <v-card class="my-5" flat height="54px">
        <v-toolbar>
          <div class="search-box">
            <input
              class="search-input"
              type="text"
              placeholder="Search something.."
              v-model="searchQuery"
            />
            <button class="search-btn"><i class="fa fa-search"></i></button>
          </div>

          <div class="left-option">
            <span @click="toggleSortDirection('price')"> Price </span>

            <span
              @click="toggleSortDirection('review')"
              style="margin-left: 8px"
            >
              Review
            </span>

            <div class="text-center" style="position: relative; top: -5px">
              <v-menu open-on-hover>
                <template v-slot:activator="{ props }">
                  <v-btn color="dark" v-bind="props"> Categories </v-btn>
                </template>

                <v-list>
                  <v-list-item
                    v-for="category in getProductCategories()"
                    :key="category"
                    @click="filterByCategory(category)"
                  >
                    <v-list-item-title>{{ category }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
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
          <v-card>
            <div class="product-card">
              <div class="badge">Hot</div>
              <div class="product-tumb" @click="goToProductDetail(product.id)">
                <img :src="product.image" alt="" />
              </div>
              <div class="product-details">
                <a @click="goToProductDetail(product.id)">
                  <span class="product-catagory">{{ product.categories }}</span>
                  <h4>
                    <a>{{ product.name }}</a>
                  </h4>
                  <p>{{ product.description.substring(0, 80) + ".." }}</p>
                </a>
                <div class="product-bottom-details">
                  <div class="product-price">
                    <small>₹{{ product.cprice }}</small> ₹ {{ product.price }}
                  </div>
                  <div class="product-links">
                    <a @click="addToCart(product)"
                      ><i class="fa fa-shopping-cart"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      searchQuery: "",
      sortDirection: "asc",
      sortField: "price",
      selectedCategory: "",
    };
  },
  computed: {
    ...mapGetters(["products"]),
    filteredProducts() {
      let filtered = this.products;
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter((product) =>
          product.name.toLowerCase().includes(query)
        );
      }
      if (this.selectedCategory) {
        filtered = filtered.filter((product) =>
          Array.isArray(product.categories)
            ? product.categories.includes(this.selectedCategory)
            : product.categories === this.selectedCategory
        );
      }

      // Sort the products
      filtered = filtered.sort((a, b) => {
        const aValue = this.getFieldValue(a, this.sortField);
        const bValue = this.getFieldValue(b, this.sortField);
        return (this.sortDirection === "asc" ? 1 : -1) * (aValue - bValue);
      });

      return filtered;
    },
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    ...mapActions(["fetchProducts", "addToCart"]),
    goToProductDetail(productId) {
      this.$router.push(`/product/${productId}`);
    },
    toggleSortDirection(field) {
      if (this.sortField === field) {
        this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
      } else {
        this.sortField = field;
        this.sortDirection = "asc";
      }
    },
    getFieldValue(obj, field) {
      if (typeof obj[field] === "string") {
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

<style scoped></style>
