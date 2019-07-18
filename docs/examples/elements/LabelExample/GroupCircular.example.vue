<template>
  <sui-label-group circular>
    <sui-label
      v-for="number in numbers"
      circular
      :key="number"
    >
      {{ number }}
    </sui-label>
  </sui-label-group>
</template>

<script>
export default {
  name: 'GroupCircular',
  data() {
    return {
      numbers: [
        '11',
        '22',
        '33',
        '44',
        '141',
      ],
    };
  },
};
</script>
