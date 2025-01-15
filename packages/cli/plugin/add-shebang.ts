/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import { Plugin } from 'vite';

export type PrependShebangOptions = {
  shebang: string;
  // 需要添加shebang的文件
  files: string[];
};

// 默认配置
export const defaultOptions: PrependShebangOptions = {
  shebang: '#!/usr/bin/env node',
  files: ['i-element-cli.mjs'],
};

// 通过package.json文件获取bin文件路径
function getBinFiles(): string[] {
  const packageJsonPath = path.resolve(process.cwd(), 'package.json');

  if (fs.existsSync(packageJsonPath)) {
    try {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

      const { bin } = packageJson;
      if (bin != null) {
        return Object.values(bin).map((file) => path.basename(file as string));
      }
    } catch (error) {
      console.error('Error reading package.json:', error);
    }
  }

  return [];
}

// 插件
export function prependShebang(
  options: Partial<PrependShebangOptions> = defaultOptions,
): Plugin {
  // 配置合并
  let shebang = options.shebang ?? defaultOptions.shebang;

  shebang = `${shebang.replace(/\n+$/, '')}\n`;

  const shebangLines = shebang.split('\n').length - 1;
  const files = options.files ?? defaultOptions.files;

  return {
    name: 'prepend-shebang',
    buildStart() {
      files.push(...getBinFiles());
    },

    renderChunk(code, chunk) {
      if (
        files.includes(chunk.fileName) &&
                chunk.type === 'chunk' &&
                chunk.isEntry
      ) {
        const modifiedCode = shebang + code;

        // Generate a very basic sourcemap
        const lines = code.split('\n').length;
        const mappings = Array(lines)
          .fill(undefined)
          .map((_, i) => `AACA${i}`)
          .join(';');

        const map = {
          version: 3,
          sources: [chunk.fileName],
          names: [],
          mappings: ';'.repeat(shebangLines) + mappings, // Offset by the number of shebang lines
        };

        return {
          code: modifiedCode,
          map,
        };
      }
      return { code, map: null };
    },
  };
}
