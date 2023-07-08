// store.js
import { createStore } from 'vuex';

const store = createStore({
    state: {
        products: [{
                id: 1,
                name: 'Samsung',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
                price: 100,
                review: 3,
                categories: 'Phone',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtSEFFpil4Rg0ulT2xMbuelj9GAlyiKXkSLUZd55nrhiGiN5gOnnESq_OwEMjaR4nC8w&usqp=CAU',
            },
            {
                id: 2,
                name: 'Nokia',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
                price: 200,
                review: 4,
                categories: 'Phone',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtSEFFpil4Rg0ulT2xMbuelj9GAlyiKXkSLUZd55nrhiGiN5gOnnESq_OwEMjaR4nC8w&usqp=CAU',
            },
            {
                id: 3,
                name: 'Apple',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
                price: 140,
                review: 3,
                categories: 'Phone',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtSEFFpil4Rg0ulT2xMbuelj9GAlyiKXkSLUZd55nrhiGiN5gOnnESq_OwEMjaR4nC8w&usqp=CAU',
            },
            {
                id: 4,
                name: 'Boat',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
                price: 110,
                review: 5,
                categories: 'EarPhone',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtSEFFpil4Rg0ulT2xMbuelj9GAlyiKXkSLUZd55nrhiGiN5gOnnESq_OwEMjaR4nC8w&usqp=CAU',
            },
            {
                id: 5,
                name: 'JBL',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
                price: 1300,
                review: 3,
                categories: 'EarPhone',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtSEFFpil4Rg0ulT2xMbuelj9GAlyiKXkSLUZd55nrhiGiN5gOnnESq_OwEMjaR4nC8w&usqp=CAU',
            },
            {
                id: 6,
                name: 'Jazz',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
                price: 140,
                review: 4,
                categories: 'EarPhone',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtSEFFpil4Rg0ulT2xMbuelj9GAlyiKXkSLUZd55nrhiGiN5gOnnESq_OwEMjaR4nC8w&usqp=CAU',
            },
            {
                id: 7,
                name: 'LG',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
                price: 80,
                review: 5,
                categories: 'EarPhone',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtSEFFpil4Rg0ulT2xMbuelj9GAlyiKXkSLUZd55nrhiGiN5gOnnESq_OwEMjaR4nC8w&usqp=CAU',
            },
            {
                id: 8,
                name: 'Samsung',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
                price: 1100,
                review: 3,
                categories: 'Charger',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtSEFFpil4Rg0ulT2xMbuelj9GAlyiKXkSLUZd55nrhiGiN5gOnnESq_OwEMjaR4nC8w&usqp=CAU',
            },
            {
                id: 9,
                name: 'IQue',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
                price: 190,
                review: 5,
                categories: 'Charger',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtSEFFpil4Rg0ulT2xMbuelj9GAlyiKXkSLUZd55nrhiGiN5gOnnESq_OwEMjaR4nC8w&usqp=CAU',
            },
            {
                id: 10,
                name: 'Oppo',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
                price: 400,
                review: 4,
                categories: 'Charger',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtSEFFpil4Rg0ulT2xMbuelj9GAlyiKXkSLUZd55nrhiGiN5gOnnESq_OwEMjaR4nC8w&usqp=CAU',
            },
            {
                id: 11,
                name: 'Vivo',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
                price: 230,
                review: 3,
                categories: 'Charger',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtSEFFpil4Rg0ulT2xMbuelj9GAlyiKXkSLUZd55nrhiGiN5gOnnESq_OwEMjaR4nC8w&usqp=CAU',
            },
            {
                id: 12,
                name: 'Blackberry',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
                price: 260,
                review: 5,
                categories: 'Phone',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgtSEFFpil4Rg0ulT2xMbuelj9GAlyiKXkSLUZd55nrhiGiN5gOnnESq_OwEMjaR4nC8w&usqp=CAU',
            },

        ],
        cartItems: [],
        totalPrice: 0,
        darkMode: false,
    },
    mutations: {
        updateCartItems(state, items) {
            state.cartItems = items;
        },
        updateTotalPrice(state, totalPrice) {
            state.totalPrice = totalPrice;
        },
        SET_DARK_MODE(state, darkMode) {
            state.darkMode = darkMode;
        },

    },
    actions: {
        fetchProducts() {
            // No action needed in this case
        },

        addToCart({ commit, state }, product) {
            const existingItem = state.cartItems.find(item => item.id === product.id);
            if (existingItem) {
                state.cartItems.push({...product, quantity: 1 });
                commit('updateCartItems', state.cartItems);
            } else {
                const newItem = {...product, quantity: 1 };
                state.cartItems.push(newItem);

            }

            state.totalPrice += product.price; // Add the price of the added product to the total price
            commit('updateCartItems', state.cartItems);
            commit('updateTotalPrice', state.totalPrice);
        },
        removeFromCart({ commit, state }, product) {
            const index = state.cartItems.findIndex(item => item.id === product.id);
            if (index !== -1) {
                const item = state.cartItems[index];
                if (item.quantity === 1) {
                    state.cartItems.splice(index, 1);
                } else {
                    item.quantity--;
                }
                state.totalPrice -= product.price; // Subtract the price of the removed product from the total price
                commit('updateCartItems', state.cartItems);
                commit('updateTotalPrice', state.totalPrice);
            }
        },
        toggleDarkMode({
            commit,
            state
        }) {
            const darkMode = !state.darkMode;
            commit('SET_DARK_MODE', darkMode);
            if (darkMode) {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
        },

    },
    getters: {
        products: (state) => state.products,
        cartItems: (state) => state.cartItems,
        totalPrice: state => state.totalPrice,
        getProductById: (state) => (id) => {
            return state.products.find((product) => product.id === id);
        },
        darkMode: state => state.darkMode,

    },
});

export default store;