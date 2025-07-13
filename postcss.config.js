import postcssPresetEnv from 'postcss-preset-env';
import postcssImport from 'postcss-import';
import postcssMixins from 'postcss-mixins';
import cssnano from 'cssnano';

export default {
  plugins: [
    postcssImport(),
    postcssMixins(),
    postcssPresetEnv({
      stage: 3,
      features: {
        'nesting-rules': true
      }
    }),
    cssnano()
  ]
} 