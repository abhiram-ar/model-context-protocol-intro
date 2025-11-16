import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { z } from 'zod/v3'

// version is used my the cachine mechanism somewhere
// and when new version is avaiable that cache is invalidated
// check: where is this somewhere
const mcpServer = new McpServer({ name: "add", version: "1.0.0" })

mcpServer.registerTool("add", {
   title: "Addition Tool",
   description: "add two numbers togather",
   inputSchema: {
      a: z.number(),
      b: z.number()
   }
}, async ({ a, b }: { a: number, b: number }) => { return { content: [{ type: "text", text: String(a + b) }] } })

const transport = new StdioServerTransport()
await mcpServer.connect(transport)