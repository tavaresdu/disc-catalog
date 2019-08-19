<template>
    <div>
        <router-link :to="{ name: 'listCollection', params: { id: this.$route.params.id } }">&lt; voltar</router-link>
        <h1>Editar Coleção</h1>
        <form @submit.prevent="updateCollection">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Nome:</label>
                        <input type="text" class="form-control" v-model="collection.name">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Descrição:</label>
                        <textarea class="form-control" v-model="collection.description" rows="5"></textarea>
                    </div>
                </div>
            </div><br />
            <div class="form-group">
                <button class="btn btn-primary">Atualizar</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                collection: {}
            }
        },
        created() {
            let uri = `http://localhost:4000/collection/${this.$route.params.id}`;
            this.axios.get(uri).then((response) => {
                this.collection = response.data;
            });
        },
        methods: {
            updateCollection() {
                let uri = `http://localhost:4000/collection/${this.$route.params.id}`;
                this.axios.put(uri, this.collection).then(() => {
                    this.$router.push({
                        name: 'listCollection',
                        params: {
                            id: this.collection.id
                        }
                    });
                });
            }
        }
    }
</script>