<template>
  <sui-label-group tag>
    <sui-label
      v-for="price in prices"
      :key="price"
    >
      ${{ price }}
    </sui-label>
  </sui-label-group>
</template>

<script>
export default {
  name: 'GroupTag',
  data() {
    return {
      prices: [
        '10.00',
        '19.99',
        '24.99',
        '30.99',
        '10.25',
      ],
    };
  },
};
</script>
