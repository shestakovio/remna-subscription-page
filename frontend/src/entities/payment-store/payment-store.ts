import { create } from 'zustand'

interface IState {
    paymentUrl: string
    tariffAmounts: number[]
}

interface IActions {
    actions: {
        setPaymentUrl: (url: string) => void
        setTariffAmounts: (amounts: number[]) => void
    }
}

const initialState: IState = {
    paymentUrl: '',
    tariffAmounts: []
}

export const usePaymentStore = create<IActions & IState>()((set) => ({
    ...initialState,
    actions: {
        setPaymentUrl: (url: string) => {
            set({ paymentUrl: url })
        },
        setTariffAmounts: (amounts: number[]) => {
            set({ tariffAmounts: amounts })
        }
    }
}))

export const usePaymentStoreActions = () => usePaymentStore((store) => store.actions)

export const usePaymentUrl = () => usePaymentStore((state) => state.paymentUrl)

export const useTariffAmounts = () => usePaymentStore((state) => state.tariffAmounts)
