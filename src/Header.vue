<template>
    <h1>
        <slot name="title"></slot>
        <slot name="sum"></slot>
    </h1>
</template>

<script>
export default {
    name: 'Header',
};
</script>
