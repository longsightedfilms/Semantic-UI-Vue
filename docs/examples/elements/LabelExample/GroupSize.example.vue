<template>
  <sui-label-group size="huge">
    <sui-label
      v-for="label in labels"
      :key="label"
    >
      {{ label }}
    </sui-label>
  </sui-label-group>
</template>

<script>
export default {
  name: 'GroupSize',
  data() {
    return {
      labels: [
        'Fun',
        'Happy',
        'Smart',
        'Witty',
      ],
    };
  },
};
</script>
