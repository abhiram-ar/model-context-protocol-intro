import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod/v3";
import { readFileSync } from "node:fs";

const fullPathToStandardJSMarkdown =
  "C:\\Users\\Abhiram\\Desktop\\mcp\\style-guide.md";

const standardJSMarkdown = readFileSync(fullPathToStandardJSMarkdown, "utf-8");

const server = new McpServer({
  name: "Standard JS style guide",
  version: "1.0.0",
});

server.registerPrompt(
  "review-code",
  {
    title: "Code Review",
    description: "Review code for best practices and potential issues",
    argsSchema: { code: z.string() },
  },
  ({ code }: { code: string }) => ({
    messages: [
      {
        role: "user",
        content: {
          type: "text",
          text: `Please review this code to see if it follows our best practices.
          Use this Standard JS style guide as references and the rules:
          \n\n==========\n
          ${standardJSMarkdown}
          \n\n============\n\n
          Here is the code to review: \n\n
          ${code}`,
        },
      },
    ],
  }),
);

const transport = new StdioServerTransport();
await server.connect(transport);
