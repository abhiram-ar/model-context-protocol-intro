Mock a client call by pipeing a JSONRPC request direct to the STDIO of STDIOMCPServer

### Tool listing
Lists the details of tools by listing them (we are doing some filter also)
```bash
echo '{"jsonrpc": "2.0", "id": 1, "method": "tools/list", "params": {"name": "add", "arguments": {}}}' | node mcp.ts | jq
```
> jq is a json formator

### Tool calling
```bash
echo '{"jsonrpc": "2.0", "id": 1, "method": "tools/call", "params": {"name": "add", "arguments": {"a": 5, "b": 3}}}' | node mcp.ts | jq
```
### Initialization 
```bash
echo '{"jsonrpc": "2.0", "id": 1, "method": "initialize", "params": {"protocolVersion": "2024-11-05", "capabilities": {}, "clientInfo": {"name": "test-client", "version": "1.0.0"}}}' | node mcp.ts | jq
```
