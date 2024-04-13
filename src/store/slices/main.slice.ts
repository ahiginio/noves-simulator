import { TransactionData } from '@/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import { toast } from 'sonner';
import { getBlock, simulateTransaction } from '../api/main.api';

export interface MainState {
  transactions: TransactionData[];
  transactionSelected: TransactionData | null;
  block: object | null;
  isFetching: boolean;
}

const initialState: MainState = {
  transactions: [],
  block: null,
  transactionSelected: null,
  isFetching: false,
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setTransaction(state, action: PayloadAction<TransactionData>) {
      const transactions = [...state.transactions];
      transactions.push(action.payload);
      state.transactions = transactions;
    },
  },
  extraReducers(builder) {
    /* Get block */
    builder.addCase(getBlock.fulfilled, (state, action) => {
      state.isFetching = false;
      state.block = action.payload;
    });
    /* Simulate transaction */
    builder.addCase(simulateTransaction.fulfilled, (state, action) => {
      state.isFetching = false;
      state.transactionSelected = action.payload;
    });

    /* Matchers */
    builder.addMatcher(isPending, (state) => {
      state.isFetching = true;
    });
    builder.addMatcher(isRejected, (state, action) => {
      state.isFetching = false;
      if (action.error.message) {
        toast.error(action.error.message);
      } else toast.error('Error al procesar la solicitud');
    });

    /* Default */
    builder.addDefaultCase((state) => {
      state.isFetching = false;
    });
  },
});

export const { setTransaction } = mainSlice.actions;
export default mainSlice.reducer;
