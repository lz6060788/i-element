#!/usr/bin/env node
/* eslint-disable no-console */
import yargs from 'yargs';
import path from 'node:path';
import fs from 'node:fs';
import {
  indexFile, indexFileName, packageJsonFile, packageJsonFileName, propsFile, propsFileName, styleFile, styleFileName, viteConfigFile, viteConfigFileName, vueFile, vueFileName,
} from './fileTemplate';

const ROOT_DIR = process.cwd();
const PACKAGES_DIR = 'packages';
const RESOURCE_DIR = 'src';

async function main() {
  // 定义命令行选项
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  const argv = await yargs(process.argv.slice(2))
    .usage('Usage: $0 [command] <options>')
    .demandOption(['n'])
    .option('name', {
      type: 'string',
      describe: '组件名称',
      alias: 'n',
    })
    .option('cnName', {
      type: 'string',
      describe: '组件中文名称',
      alias: 'c',
    })
    .option('prefix', {
      type: 'string',
      describe: '组件前缀',
      alias: 'p',
    })
    .help()
    .parse();

  const componentName = argv.name?.toLocaleLowerCase();
  const componentCNName = argv.cnName || componentName || '未命名';
  const prefix = argv.prefix || 'i';

  if (!componentName) {
    console.error('请输入组件名称');
    return;
  }
  try {
    const componentDir = path.join(ROOT_DIR, PACKAGES_DIR, componentName);
    fs.mkdirSync(componentDir);
    console.log('组件目录创建成功');
    const componentResourceDir = path.join(componentDir, RESOURCE_DIR);
    fs.mkdirSync(componentResourceDir);
    console.log('组件资源目录创建成功');
    const packageJsonPath = path.join(componentDir, packageJsonFileName());
    fs.writeFileSync(packageJsonPath, packageJsonFile(prefix, componentName));
    console.log('组件package.json文件生成成功');
    const viteConfigPath = path.join(componentDir, viteConfigFileName());
    fs.writeFileSync(viteConfigPath, viteConfigFile());
    console.log('组件vite.config.ts文件生成成功');
    const indexFilePath = path.join(componentResourceDir, indexFileName());
    fs.writeFileSync(indexFilePath, indexFile(prefix, componentName));
    console.log('index.ts生成成功');
    const styleFilePath = path.join(componentResourceDir, styleFileName(componentName));
    fs.writeFileSync(styleFilePath, styleFile(prefix, componentName));
    console.log('style.scss文件生成成功');
    const propsFilePath = path.join(componentResourceDir, propsFileName());
    fs.writeFileSync(propsFilePath, propsFile(prefix, componentName, componentCNName));
    console.log('props文件生成成功');
    const vueFilePath = path.join(componentResourceDir, vueFileName(componentName));
    fs.writeFileSync(vueFilePath, vueFile(prefix, componentName));
    console.log('vue文件生成成功');
  } catch (e) {
    console.error(e);
  }
}

main();
