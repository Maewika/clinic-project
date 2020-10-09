export const state = () => ({
  data: [],
  fields: [
    {
      key: 'name'
    },
    {
      key: 'Lastname'
    },
    {
      key: 'Age'
    },
    {
      key: 'Type'
    },
    {
      key: 'Height'
    },
    {
      key: 'Weight'
    },
    {
      key: 'Sex'
    },
    {
      key: 'Note'
    }
  ]
})
export const mutations = {
  input (state, { name, Lastname, Age, Type, Height, Weight, Sex, Note }) {
    state.data.push({ name, Lastname, Age, Type, Height, Weight, Sex, Note })
  }
}
export const getters = {
  data (state) {
    return state.data
  }
}
