import { createContext } from 'react';


interface ContextProps {
    isAddProductModalOpen: boolean
}

export const UIContext = createContext({} as ContextProps);