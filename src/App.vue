<template>
  <div id="app">
    <h1>Template App</h1>
    <div>
      <input id="name" type="text" v-model="name" placeholder="Template Name">
      <input id="description" type="text" v-model="description" placeholder="Template Description">
    </div>
    <div>
      <textarea v-model="content" id="sdata" name="sdata" rows="20" cols="80"></textarea>
    </div>
    <div>
      <button id="create-template" v-on:click="createTemplate">Create Template</button>
    </div>
    <div>
      <input type="text" v-model="id" placeholder="Item ID">
      <button id="delete-template" v-on:click="deleteTemplate">Delete Template</button>
    </div>
    <div>
      <button id="upload-content" v-on:click="uploadContent">Upload Content</button>
    </div>
    <div>
      <button id="remove-content" v-on:click="removeContent">Remove Content</button>
    </div>
    <div v-for="item in templates" :key="item.id">
      <h3>{{ item.name }}</h3>
      <p>{{ item.description }}</p>
      <h6>{{ item.id }}</h6>
    </div>
    <div id="content">{{ displayContent }}</div>
  </div>
</template>

<script>
import Amplify, { Storage, API } from 'aws-amplify';
import { createTemplate, deleteTemplate } from './graphql/mutations';
import { listTemplates } from './graphql/queries';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

export default {
  name: 'App',
  async created() {
    this.getTemplates().then(this.getContent());
  },
  data() {
    return {
      name: '',
      description: '',
      id: '',
      content: '',
      templates: [],
    };
  },
  methods: {
    async createTemplate() {
      const { name, description, content } = this;
      if (!name || !description) return;
      const template = { name, description, content };
      this.templates = [...this.templates, template];
      // eslint-disable-next-line no-console
      console.log('template:', template);
      await API.graphql({
        query: createTemplate,
        variables: { input: template },
      });
      this.name = '';
      this.description = '';
      this.content = '';
    },
    async getTemplates() {
      const templates = await API.graphql({
        query: listTemplates,
      });
      this.templates = templates.data.listTemplates.items;
    },
    async getContent() {
      const c = await Storage.get('test.json', {
        level: 'public',
        download: false,
        contentType: 'text/json',
      });
      this.displayContent = c;
    },
    async deleteTemplate() {
      const { id } = this;
      if (!id) return;
      // eslint-disable-next-line no-console
      console.log('id:', id);
      await API.graphql({
        query: deleteTemplate,
        variables: { input: { id, expectedVersion: 1 } },
      });
    },
    async uploadContent() {
      Storage.put('test.json', this.content)
        // eslint-disable-next-line no-console
        .then((result) => console.log(result))
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err));
    },
    async removeContent() {
      Storage.remove('test.json')
        // eslint-disable-next-line no-console
        .then((result) => console.log(result))
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
