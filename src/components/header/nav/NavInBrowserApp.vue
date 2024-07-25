<template>
  <n-button text tag="a" href="https://www.secsi.io" target="_blank">
    <img class="site-favicon" src="/logo-secsi.png">
    <!-- <template #icon>
      <n-icon>
        <Box16Regular />
      </n-icon>
    </template> -->
    SecSI
  </n-button>
</template>

<script setup lang="ts">
import { NButton, NIcon } from "naive-ui";
import { Box16Regular } from "@vicons/fluent";
</script>

<style scoped>
.site-favicon {
  margin-inline-end: 8px;
  min-width: 16px;
  width: 16px;
  height: 16px;
}
</style>
