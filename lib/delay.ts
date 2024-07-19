// Times are in milliseconds
export const delayShippingEstimate = 200;
export const delayRecommendedProducts = 500;
export const delayReviews = 600;

export async function withDelay<T>(
  promise: Promise<T>,
  delay: number
): Promise<T> {
  // Ensure we throw if this throws
  const ret = await promise;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ret);
    }, delay);
  });
}
