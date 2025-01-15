import { generateConfig } from '../build/scripts';
import { prependShebang } from './plugin/add-shebang';

/** 本包产物相对本包根目录的路径 */
const OUT_REL = 'bin';

export default generateConfig({
  outDir: OUT_REL,
}, {
  plugins: [prependShebang()],
});
