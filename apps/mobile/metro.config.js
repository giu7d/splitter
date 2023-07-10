/** @type {import('expo/metro-config').MetroConfig} */

const path = require('path')

const { getDefaultConfig } = require('expo/metro-config')

const projectRoot = __dirname

const config = getDefaultConfig(projectRoot, {
  // Enable CSS support.
  isCSSEnabled: true
})

//
// Handle monorepo
//
const workspaceRoot = path.resolve(projectRoot, '../..')

config.watchFolders = [workspaceRoot]

config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules')
]

config.resolver.disableHierarchicalLookup = true

module.exports = config
