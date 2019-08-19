<template>
    <div>
        <router-link :to="{ name: 'home'}">&lt; voltar</router-link>
        <h1>Criar Coleção</h1>
        <form @submit.prevent="createCollection">
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
                <button class="btn btn-primary">Criar</button>
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
        methods: {
            createCollection() {
                let uri = 'http://localhost:4000/collection';
                this.axios.post(uri, this.collection).then(() => {
                    this.$router.push({
                        name: 'home'
                    });
                });
            }
        }
    }
</script>