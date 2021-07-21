/* @flow */

import { baseOptions } from './options'
import { createCompiler } from 'compiler/index'

// 编译器的工厂函数
const { compile, compileToFunctions } = createCompiler(baseOptions)

export { compile, compileToFunctions }
