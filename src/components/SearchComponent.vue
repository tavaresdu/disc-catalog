<template>
    <div>
        <router-link :to="{ name: 'home' }">&lt; voltar</router-link>
        <h2>Busca por "{{q}}"</h2>
        <br />
        <h3>Coleções</h3>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="collection in collections" :key="collection.id">
                    <td>{{ collection.name }}</td>
                    <td>{{ collection.description }}</td>
                    <td style="float: right">
                        <router-link :to="{name: 'listCollection', params: { id: collection.id }}"
                            class="btn btn-primary mx-1">Visualizar</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        <h3>Discos</h3>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Artista</th>
                    <th>Título</th>
                    <th>Ano</th>
                    <th>Gênero</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="disc in discs" :key="disc.id">
                    <td>{{ disc.artist }}</td>
                    <td>{{ disc.title }}</td>
                    <td>{{ disc.year }}</td>
                    <td>{{ disc.genre }}</td>
                    <td style="float: right">
                        <router-link :to="{name: 'editDisc', params: { did: disc.id, cid: disc.collectionId }}"
                            class="btn btn-primary mx-1">Visualizar</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                discs: [],
                collections: [],
                q: this.$route.query.q,
            }
        },
        created() {
            this.doSearch();
        },
        watch: {
            '$route'() {
                this.q = this.$route.query.q;
                this.doSearch();
            }
        },
        methods: {
            doSearch() {
                let uri = `http://localhost:4000/search`;
                this.axios.post(uri, {
                    q: this.$route.query.q
                }).then(response => {
                    this.discs = response.data.discs;
                    this.collections = response.data.collections;
                });
            }
        }
    }
</script>