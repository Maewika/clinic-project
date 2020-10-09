<template>
  <div id="sup">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-pencil-square"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
            />
            <path
              fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            /></svg>บันทึกการให้คำแนะนำ
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse" />
      </b-navbar>
    </div>
    <br>
    <div class="text-center">
      <b-form id="reset">
        <b-form-row class="justify-content-md-center">
          <b-form-group
            id="input-group-1"
            class="col-2 mr-4"
            label="Name :"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.namein"
              type="name"
              required
            />
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Lastname :"
            label-for="input-2"
          >
            <b-form-input id="input-2" v-model="form.lastnamein" required />
          </b-form-group>
        </b-form-row>
        <b-form-row class="justify-content-md-center">
          <b-form-group id="input-group-3" label="Age :" label-for="input-3">
            <b-form-input id="input-2" v-model="form.agein" required />
          </b-form-group>
        </b-form-row>
        <b-form-row class="justify-content-md-center">
          <b-form-group id="input-group-3" label="Type:" label-for="input-3">
            <b-form-select
              id="input-3"
              v-model="form.typein"
              :options="type"
              required
            />
          </b-form-group>
        </b-form-row>
        <b-form-row class="justify-content-md-center">
          <b-form-group
            id="input-group-2"
            class="col-2 mr-4"
            label="Height (Cm) :"
            label-for="input-2"
          >
            <b-form-input id="input-2" v-model="form.heightin" required />
          </b-form-group>

          <b-form-group
            id="input-group-2"
            class="col-2 mr-4"
            label="Weight (Kg) :"
            label-for="input-2"
          >
            <b-form-input id="input-2" v-model="form.weightin" required />
          </b-form-group>

          <b-form-group id="input-group-3" label="Sex :" label-for="input-3">
            <b-form-select
              id="input-3"
              v-model="form.sexin"
              class="mr-4"
              :options="sex"
              required
            />
          </b-form-group>
        </b-form-row>
        <b-form-row class="justify-content-md-center">
          <b-form-group
            id="input-group-2"
            class="col-sm-4"
            label="Note :"
            label-for="input-2"
          >
            <b-form-input id="input-2" v-model="form.notein" required />
          </b-form-group>
        </b-form-row>
        <b-button type="submit" variant="warning" @click="validate">
          Submit
        </b-button>
        <b-button type="reset" variant="danger" @click="reset">
          Reset
        </b-button>
        <div>
          <b-table
            striped
            hover
            :items="this.$store.state.data"
            :fields="this.$store.state.fields"
          />
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      form: {
        namein: '',
        lastnamein: '',
        agein: '',
        typein: null,
        heightin: '',
        weightin: '',
        sex: null,
        notein: ''
      },
      type: [
        { text: 'Select One', value: null },
        'การเสริมจมูก',
        'การเสริมคาง',
        'การตกแต่งริมฝีปาก',
        'การทำตา',
        'เสริมหน้าอก',
        'การฉีดโบท๊อก'
      ],
      sex: [{ text: 'Select One', value: null }, 'ชาย', 'หญิง']
    }
  },
  methods: {
    computed: {
      ...mapGetters(['data'])
    },
    validate () {
      const name = this.form.namein
      const Lastname = this.form.lastnamein
      const Age = this.form.agein
      const Type = this.form.typein
      const Height = this.form.heightin
      const Weight = this.form.weightin
      const Sex = this.form.sexin
      const Note = this.form.notein
      this.$store.commit('input', {
        name,
        Lastname,
        Age,
        Type,
        Height,
        Weight,
        Sex,
        Note
      })
      document.getElementById('reset').reset()
    },
    reset () {
      document.getElementById('reset').reset()
    }
  }
}
</script>
<style>
body {
  background-image: url("../assets/img/12.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>
