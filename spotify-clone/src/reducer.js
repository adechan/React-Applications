export const initialState = {
  user: null,
  // token: null,
  // token:
  // "BQC0GHWjBr8dd79l5gC796RWdoOHlbQzxw4jEe59is2bbR36j_QsQ6PHS6FDqMVFd82AEv3kHW7J_pYFSxPFSGfVUkhCXn6qychA9I5j_Q_LHTsW-Bbr5kL-1k_r3Xtb1zzRWholnk088QsjVdcBcK580zw5HmNFtYdK05fjQcj3vi_5",
  playlists: [],
  discover_weekly: null,
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  console.log(action); // debugging tool

  //   action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
