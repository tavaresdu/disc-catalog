<template>
    <div>
        <router-link :to="{ name: 'listCollection', params: { id: this.$route.params.id } }">&lt; voltar</router-link>
        <h1>Cadastro de Disco</h1>
        <form @submit.prevent="createDisc">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Artista:</label>
                        <input type="text" class="form-control" v-model="disc.artist">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Título:</label>
                        <input type="text" class="form-control" v-model="disc.title">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <div class="form-group">
                        <label>Ano:</label>
                        <input type="text" class="form-control" maxlength="4"
                            onkeyup="this.value=this.value.replace(/[^\d]/,'')" v-model="disc.year">
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label>Gênero:</label>
                        <select class="form-control" v-model="disc.genre">
                            <option value="Pop">Pop</option>
                            <option value="Rock">Rock</option>
                            <option value="Sertanejo">Sertanejo</option>
                            <option value="Hip Hop">Hip Hop</option>
                            <option value="Samba">Samba</option>
                            <option value="Pagode">Pagode</option>
                            <option value="Eletrônica">Eletrônica</option>
                            <option value="Funk">Funk</option>
                            <option value="Religiosa">Religiosa</option>
                            <option value="Outros">Outros</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Playlist:</label>
                        <textarea class="form-control" v-model="disc.songs" rows="5"></textarea>
                    </div>
                </div>
            </div><br />
            <div class="form-group">
                <button class="btn btn-primary">Cadastrar</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                disc: {}
            }
        },
        methods: {
            createDisc() {
                let uri = 'http://localhost:4000/disc';
                this.disc.collectionId = this.$route.params.id;
                this.axios.post(uri, this.disc).then(() => {
                    this.$router.push({
                        name: 'listCollection',
                        params: this.$route.params.id
                    });
                });
            }
        }
    }
</script>