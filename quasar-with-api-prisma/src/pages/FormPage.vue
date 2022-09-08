<script setup>
import { usePrismaStore } from 'stores/prisma-store';
import { postProducts } from 'src/clients/APIClient';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

const $q = useQuasar();

const router = useRouter();

const prismaStore = usePrismaStore();

const cadastrar = async () => {
  try {
    const cadastrarProdutos = {
      name_product: prismaStore.name_product,
      image_url: prismaStore.image_url,
      bar_code: prismaStore.bar_code,
      price: prismaStore.price,
    };

    await postProducts(cadastrarProdutos);

    prismaStore.name_product = '';
    prismaStore.image_url = '';
    prismaStore.bar_code = '';
    prismaStore.price = '';

    router.push('/');
  } catch (e) {
    console.log(`Ocorreu um erro: ${e}`);

    $q.dialog({
      title: 'Ocorreu um erro',
      message: `Estamos com problemas no momento.
                <br>Caso o erro persista entrar em contato com o suporte.`,
      html: true,
    });
  }
};

const maskPrice = computed(() => {
  if (prismaStore.price.length >= 100 || prismaStore.price.length <= 999) {
    return '###.##';
  }

  // if (prismaStore.price.length >= 1000) {
  //   return '#.#########';
  // }

  return '#.######';
});

const ativaBtn = computed(() => prismaStore.name_product !== '' && prismaStore.image_url !== ''
  && prismaStore.bar_code !== '' && prismaStore.price !== '');
</script>

<template>
  <q-page class="flex column">
    <h5 class="text-center q-ma-sm">Cadastrar Produto</h5>

    <div class="q-pa-md" >
      <form class="q-gutter-xs">
        <q-input
          outlined
          ref="nameRef"
          label="Nome do produto *"
          v-model="prismaStore.name_product"
          lazy-rules
          :rules="[val => val.length >= 3 || 'Digita o nome do produto']"
        />

        <q-input
          ref="ageRef"
          outlined
          label="URL da imagem"
          v-model="prismaStore.image_url"
          lazy-rules
          :rules="[val => val.length >= 3 || 'Digita a url da imagem']"
        />

        <q-input
          ref="ageRef"
          outlined
          label="Código de barras"
          v-model="prismaStore.bar_code"
          lazy-rules
          :rules="[val => val.length >= 3 || 'Digite o código de barras']"
        />

        <q-input
          ref="ageRef"
          outlined
          label="Preco do produto"
          v-model="prismaStore.price"
          :mask="maskPrice"
          prefix="R$"
          lazy-rules
          :rules="[val => val.length >= 1 || 'Digite o preço do produto']"
        />

        <div>
          <q-btn class="full-width" @click="cadastrar" :disable="!ativaBtn"
                 :label="!ativaBtn ? 'Existe campo vazio' : 'Cadastrar Item'" color="primary" />

        </div>
      </form>
    </div>
  </q-page>
</template>
