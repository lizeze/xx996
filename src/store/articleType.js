const articleType = {

    state: {
        mainType: '',
        subType: ''
    }
    ,

    getters: {
        mainType: state => {
            return state.mainType;
        }
        ,
        subType: state => {
            return state.subType
        }
    },
    mutations: {

        mainType: (state, value) => {
            state.mainType = value
        },
        subType: (state, value) => {
            state.subType = value
        }
    }
}
export default articleType