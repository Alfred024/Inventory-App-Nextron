import { UIState } from './UIProvider';

type UIActionType = | { type: '[UI] - toggleAddProductModal' }

export const UIReducer = (state: UIState, action: UIActionType): UIState => {

   switch (action.type) {
     case '[UI] - toggleAddProductModal':
        return {
            ...state,
           }

       default:
           return state;
   }
}