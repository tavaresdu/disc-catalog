<template>
    <div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <div class="container">
                <router-link to="/" class="h3 text-white nav-link my-0" style="{color: inherit;}">
                    Catálogo de Discos
                </router-link>
                <form class="form-inline" @submit.prevent="search">
                    <div class="input-group">
                        <input type="search" v-model="searchData.q" placeholder="Buscar" aria-describedby="button-addon"
                            class="form-control">
                        <div class="input-group-append">
                            <button id="button-addon" type="submit" class="btn btn-primary">
                                <font-awesome-icon icon="search" :style="{ color: 'white' }" /></button>
                        </div>
                    </div>
                </form>
            </div>
        </nav><br />
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                searchData: {}
            }
        },
        methods: {
            search() {
                this.$router.push({
                    name: 'search',
                    query: {
                        q: this.searchData.q
                    }
                });
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .title {
        color: white;
    }
</style>