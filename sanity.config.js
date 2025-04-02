import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schema from './schemas/schema'

export default defineConfig({
  name: 'default',
  title: 'nanke-blessing',
  projectId: 'p4osbiim',
  dataset: 'production',
  basePath: '/',
  plugins: [deskTool()],
  schema: {
    types: schema.types,
  },
})
