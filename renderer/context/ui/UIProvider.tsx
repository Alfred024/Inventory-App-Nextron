import { FC, PropsWithChildren, useReducer } from 'react';
import { UIContext, UIReducer } from './';

export interface UIState {
    isAddProductModalOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
    isAddProductModalOpen: false,
}

export const UIProvider: FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE)

    return (
        <UIContext.Provider value={{
            isAddProductModalOpen: false
        }}>
            {children}
        </UIContext.Provider>
    )
}