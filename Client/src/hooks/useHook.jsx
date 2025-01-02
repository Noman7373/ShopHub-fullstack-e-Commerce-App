import { useContext } from "react";
import { ContextProvider } from "./useContext";

const useHook = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("useHook must be used within a Provider");
  }

  const {
    fetchCategory,
    category,
    setCategory,
    loading,
    isLoading,
    subcategories,
    fetchSubCategories,
    email,
    setEmail,
    search,
    setSearch,
    fetchCartItems,
    updateCartItemQuantity,
    removeCartItems,
    totalPrice,
    setTotalPrice,
    totalQty,
    setTotalQty,
    disableScroll,
    enableScroll,
    fetchAddressDetails,
  } = context;

  return {
    fetchCategory,
    category,
    setCategory,
    loading,
    isLoading,
    subcategories,
    fetchSubCategories,
    email,
    setEmail,
    search,
    setSearch,
    fetchCartItems,
    updateCartItemQuantity,
    removeCartItems,
    totalPrice,
    setTotalPrice,
    totalQty,
    setTotalQty,
    disableScroll,
    enableScroll,
    fetchAddressDetails,
  };
};

export default useHook;
