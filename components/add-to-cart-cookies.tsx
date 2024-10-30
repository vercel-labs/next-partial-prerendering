import { AddToCart } from '#/components/add-to-cart';
import { cookies } from 'next/headers';

export async function AddToCartFromCookies() {
  // Get the cart count from the users cookies and pass it to the client
  // AddToCart component
  const cartCount = Number((await cookies()).get('_cart_count')?.value || '0');
  return <AddToCart initialCartCount={cartCount} />;
}
