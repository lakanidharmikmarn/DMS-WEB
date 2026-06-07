import verifiedSuccess from './verified-success.json';

/**
 * Central registry for all Lottie animation files.
 * Add new animations here after placing the .json file in src/assets/lottie/
 */
export const lottieAnimations = {
  'verified-success': verifiedSuccess
};

export const getLottieAnimation = (name) => lottieAnimations[name] ?? null;

export const lottieAnimationNames = Object.keys(lottieAnimations);
