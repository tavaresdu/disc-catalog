<template>
    <div>
        <h2>Discos</h2>
        <div class="row">
            <div class="col-md-10"></div>
            <div class="col-md-2">
                <router-link :to="{ name: 'createDisc' }" class="btn btn-primary">Cadastrar Disco</router-link>
            </div>
        </div><br />
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
                <tr v-for="(disc, index) in discs" v-bind:index="index" :key="disc.id">
                    <td>{{ disc.artist }}</td>
                    <td>{{ disc.title }}</td>
                    <td>{{ disc.year }}</td>
                    <td>{{ disc.genre }}</td>
                    <td style="float: right">
                        <router-link :to="{name: 'editDisc', params: { did: disc.id, cid: disc.collectionId }}"
                            class="btn btn-primary mx-1">Detalhar</router-link>
                        <button class="btn btn-danger mx-1" @click.prevent="deleteDisc(disc.id, index)">Apagar</button>
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
                discs: []
            }
        },
        created() {
            let uri = `http://localhost:4000/collection/${this.$route.params.id}/discs`;
            this.axios.get(uri).then(response => {
                this.discs = response.data;
            });
        },
        methods: {
            deleteDisc(id, index) {
                let uri = `http://localhost:4000/disc/${id}`;
                if (confirm("Tem certeza que deseja apagar este disco?")) {
                    this.axios.delete(uri).then(() => {
                        this.discs.splice(index, 1);
                    });
                }
            }
        }
    }
</script>