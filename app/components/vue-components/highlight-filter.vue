<template>
  <div class="c-filter__container">
    <input class="c-filter__input" type="text" placeholder="Search" v-model="searchTerm"
           @input="handleInputChange">
    <button class="c-button" @click="clearSearch('')">Clear</button>
  </div>
</template>

<script>

export default {
  name: "HighlightFilterComponent",
  data() {
    return {
      searchTerm: ''
    };
  },
  mounted() {
    let urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('filter')) {
      this.searchTerm = urlParams.get('filter');
      this.highlightText(this.searchTerm);
    }
  },
  methods: {
    handleInputChange() {
      window.history.replaceState(null, '', '?filter=' + this.searchTerm);
      this.highlightText(this.searchTerm);
    },
    highlightText(searchTerm) {
      this.$emit('search', searchTerm)
    },
    clearSearch() {
      this.searchTerm = '';
      window.history.replaceState(null, '', '');
      this.$emit('search', '')
    }
  }
};
</script>

