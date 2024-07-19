// Times are in milliseconds
export const delayShippingEstimate = 200;
export const delayRecommendedProducts = 500;
export const delayReviews = 600;

export function withDelay<T>(promise: Promise<T>, delay: number): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      promise.then(resolve);
    }, delay);
  });
}
