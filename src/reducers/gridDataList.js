/* eslint-disable default-case */
let list = [
    {name: "Pivot", views: "Grid View",  value: 10, rate: "20%", active: false},
    {name: "KPI", views: "Tile View",  value: 20, rate: "20%", active: false},
    {name: "Chart", views: "Line View",  value: 30, rate: "60%", active: false}
];
const gridDataListReducer = (state = list, action) => {
    switch(action.type){
        default:
            return state
        case 'LOAD':
            return state;
        case "UPDATESTATUS":
            const index = state.findIndex(post => post.name === action.payload.name)
            return [
                ...state.slice(0, index), // everything before current post
                {
                    ...state[index],
                    active: !action.payload.active,
                },
                ...state.slice(index + 1), // everything after current post
            ]
    }
}
export default gridDataListReducer;