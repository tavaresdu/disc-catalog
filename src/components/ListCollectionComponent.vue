<template>
    <div>
        <router-link :to="{ name: 'home' }">&lt; voltar</router-link>
        <h1>{{collection.name}}</h1>
        <div class="row">
            <div class="col-md-6">
                {{collection.description}}
            </div>
            <div class="col-md-6">
                <router-link :to="{name: 'editCollection', params: { id: collection.id }}"
                    class="btn btn-primary float-right">Editar dados da coleção</router-link>
            </div>
        </div>
        <br />
        <ListDiscComponent />
    </div>
</template>

<script>
    import ListDiscComponent from './ListDiscComponent'

    export default {
        components: {
            ListDiscComponent,
        },
        data() {
            return {
                collection: {},
                discs: []
            }
        },
        created() {
            let uri = `http://localhost:4000/collection/${this.$route.params.id}`;
            this.axios.get(uri).then((response) => {
                this.collection = response.data;
            });
        }
    }
</script>