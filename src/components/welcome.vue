<template>
<div class="bannerWrapper">
        <div class="greeting">
            <h1> {{banner.greeting}}</h1>
            <h2 class="message">{{banner.message}}</h2>
        </div>
    <vue-progress-bar></vue-progress-bar>
</div>
</template>

<script>
    export default {
        name: 'banner',
        data() {
            return {
                greeting: 'hello!',
                message: 'press <ENTER> or <SCROLL DOWN> to begin'
            }
        }
    }
</script>

<style>
.bannerWrapper {
        position: absolute;
        display: block;
        width: 100%;
        text-align: center;
    }
    .greeting {
        position: absolute;
        width: 100%;
        display: block;
        float: center;
        padding-top: 15%;
        margin: 0px auto;
    }
    .message {
        position: absolute;
        display: block;
        width: 100%;
        top: 88%;
    }
</style>