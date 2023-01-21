import * as types from "./walletTypes";

let walletobj = {
  connected: false,
  loading: false,
  wallet: sessionStorage.getItem("wallet"),
  address: "",
  loaded_assets: false,
  lib_loaded: false,
};

function update_tokens(asset) {
  if (asset) {
    console.log(55, asset)

    // asset.collection = 
    // if(policy_id in state_policies_collections){
    //   token.collection = state_policies_collections[policy_id];
    // }else{
    //   token.collection = {policy_id: policy_id};
    // }
    // token.listing = 
    //   token.listing ? {...token.listing} : {}
    // ;
  }
  return asset;
}

export default function walletReducer(state = walletobj, { type, payload }) {
  switch (type) {

    case types.LIB_LOADED:
      return{
        ...state,
        lib_loaded: true,
      };

    case types.WALLET_CARDANO_CONNECTED:
      return {
        ...state,
        connected: true,
        loading: false,
        wallet: payload.wallet,
        address: payload.address,
      };

    case types.WALLET_CARDANO_DISCONNECTED:
      return {
        ...state,
        connected: false,
      };

    case types.SET_WALLET_LOADING:
      return {
        ...state,
        loading: payload,
      };

    // case types.SET_WALLET_ASSETS:
    //   let tmp_assets = {};
    //   for(var asset_id in payload){
    //     if(asset_id!='lovelace'){
    //       let this_asset = payload[asset_id];
    //       if(this_asset){
    //         tmp_assets[asset_id] = {
    //           policy_id: this_asset.details.policyId,
    //           // quantity: this_asset.quantity,
    //           asset_id: asset_id,
    //         }
    //       }
    //     }
    //   }
    //   return {
    //     ...state,
    //     assets: tmp_assets,
    //     loaded_assets: true,
    //     loading: false,
    //   };

    case types.SET_WALLET_DATA:
      return {
        ...state,
        loading: false,
        data: payload,
        loaded_assets: true,
      };

    case types.ADD_WALLET_ASSET:
      console.log(1, payload)
      console.log(2, state.data.assets)
      return {
        ...state,
      };

    default:
      return state;
  }
}
