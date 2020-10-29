export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
     //token:'BQCROkk2CuCEeONceeSJxdh0SwZiZ2JrTBwR64LRcBmLBG94-WNmQldJ0QS8WZ0BuB6gC4dZqVWZHFTYtxjSOplefzHAdRpSBxQuwa18rBATocqRZMLxlqCnZ1mCabtcxhfLKMYXnZocBTgwyoU7NJ0G_7ilTNhbW6XJlyse0PydFIig1Uf-',
}
const reducer = (state,action)=>{
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.user,
            };
            case 'SET_TOKEN':
                return{
                    ...state,
                    token:action.token,
                };
            case 'SET_PLAYLISTS':
                return{
                    ...state,
                    playlists:action.playlists,
                };
                case 'SET_DISCOVER_WEEKLY':
                    return{
                        ...state,
                        discover_weekly:action.discover_weekly,
                    }; 
        default:
            return state;
    }

}

export default reducer;