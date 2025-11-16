## LLM vs Agent
(agent is a vauge term nowadays but we can infer that)

Agent:
- Network of LLMs => agent
- In a agentic workflow LLMs will pass work from one to another
- Create muti step aautonomous framework to complete a task

## MCP Client
Anything that consume a MCP server is a client

## MCP Server 
- Provide servicecs for clients

### Features
1. Tools - 
   - Are executable functions that a LLM can call to perform an action
   - It provide additioanl functionality to the LLM. 
   - Its a LLM driven context, it can load this context as per its the LLMs requirement 
2. Resouces - 
   - Explicity user driven context for the LLM, It can use this context to plan the tool calling.
   - It could be a file or data tha provide context for the LLMm
   - eg: providing the schema of the DM for DB related calls
   - Note: Resources are for context not for commands

3. Prompt - 
   - To give instruction to the LLM to follow
   - Unlike Resources prompts are a way to give commands to a LLM 

---- In the making ----

4. Roots - a subfolder in the system where the model has full access to
5. Sampling - Server driven prompts for the clinet/LLM
6. Elisitation - When a tool is being processed, the server can request more information from the client for the tool call

### Transport 
Data transere between MCP client and the MCP server is via JsonRPC

Possible transports are:
1. StandardIO  
   - MCP client can interact with the server process running in the same host machine 
   - This is a old way of doing thigs, but it is still very useful for local workloads
2. SSE - Being replaced by stremable HTTP
3. HTTP Streaming 

### Useful patterns
1. Avoid creating a tool for a traditional API. Model will stuggle to do a task require sequential execution. Instead create a job - composition of api to do a task so it is easer a LLM to follow.

