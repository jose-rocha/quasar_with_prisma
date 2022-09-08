<script setup>
import { getProducts } from 'src/clients/APIClient';
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const obtemProdutos = ref({});

(async () => {
  try {
    const buscaProdutos = await getProducts();

    console.log('Aqui são os dados do Prisma', buscaProdutos);

    obtemProdutos.value = buscaProdutos;
  } catch (e) {
    console.log(`Ocorreu um erro: ${e}`);

    $q.dialog({
      title: 'Ocorreu um erro',
      message: `Estamos com problemas no momento.
                <br>Caso o erro persista entrar em contato com o suporte.`,
      html: true,
    });
  }
})();

</script>
<template>
  <q-page class="flex column">
    <h5 class="text-center q-ma-sm">Lista</h5>

<!--        {{obtemProdutos}}-->

    <q-list bordered separator>
      <q-item clickable v-ripple
              v-for="produto in obtemProdutos" :key="produto">
        <q-item-section avatar>
          <q-icon name="mdi-clipboard-list" color="primary" />
        </q-item-section>
        <q-item-section>{{ (produto.name_product).toLowerCase() }}</q-item-section>
<!--        <span>data de cadastro: {{produto.created_at}}</span>-->
        <q-img :src="produto.image_url" loading="eager" height="35px" width="35px" />
        <q-item-section side>{{Array(produto.price).join('-')}}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>
