<template>
    <div>
        <h1>Coleções</h1>
        <div class="row">
            <div class="col-md-10"></div>
            <div class="col-md-2">
                <router-link :to="{ name: 'createCollection' }" class="btn btn-primary">Criar coleção</router-link>
            </div>
        </div><br />

        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(collection, index) in collections" v-bind:index="index" :key="collection.id">
                    <td>{{ collection.name }}</td>
                    <td>{{ collection.description }}</td>
                    <td style="float: right">
                        <router-link :to="{name: 'listCollection', params: { id: collection.id }}"
                            class="btn btn-primary mx-1">Visualizar</router-link>
                        <button class="btn btn-danger mx-1"
                            @click.prevent="deleteCollection(collection.id, index)">Apagar</button>
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
                collections: []
            }
        },
        created() {
            let uri = 'http://localhost:4000/collection';
            this.axios.get(uri).then(response => {
                this.collections = response.data;
            });
        },
        methods: {
            deleteCollection(id, index) {
                let uri = `http://localhost:4000/collection/${id}`;
                if (confirm("Tem certeza que deseja apagar esta coleção e TODOS os seus discos?")) {
                    this.axios.delete(uri).then(() => {
                        this.collections.splice(index, 1);
                    });
                }
            }
        }
    }
</script>