import { Provider } from "react-redux";
import store from "./../services/store";
import { ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

const ReduxProvider = ({ children }: ProviderProps) => (
  <Provider store={store}>{children}</Provider>
);

export default ReduxProvider;
