<template lang="html">
  <sui-grid columns="two">
    <sui-grid-column>
      <sui-image src="static/images/wireframes/image.png">
        <sui-label slot="corner" corner="left"><sui-icon name="save" /></sui-label>
      </sui-image>
    </sui-grid-column>

    <sui-grid-column>
      <sui-image wrapped src="static/images/wireframes/image.png">
        <sui-label slot="corner" corner="right" color="red"><sui-icon name="cancel" /></sui-label>
      </sui-image>
    </sui-grid-column>
  </sui-grid>
</template>

<script>
export default {};
</script>

<style lang="css">
</style>
