# Sources And Verification Notes

Last verified: July 2, 2026.

## Model Lineup

- [Claude models overview](https://platform.claude.com/docs/en/about-claude/models/overview)  
  Used for official lineup, model positioning, model IDs, comparative latency, context windows, max output, and training/knowledge cutoff notes. As of verification, the current comparison table includes Claude Fable 5, Claude Opus 4.8, Claude Sonnet 5, and Claude Haiku 4.5.

- [Choosing the right model](https://platform.claude.com/docs/en/about-claude/models/choosing-a-model)  
  Used for the capability-speed-cost framing and guidance that Haiku is a fast/cost-effective starting point for simple or high-volume work, while Opus is appropriate for complex reasoning, accuracy-sensitive work, and advanced coding/agentic use cases.

- [Redeploying Fable 5](https://www.anthropic.com/news/redeploying-fable-5)  
  Used for current availability caveat. Anthropic states that access to Claude Fable 5 and Mythos 5 was restored on July 1, 2026, after a temporary suspension.

- [Claude Fable 5 and Claude Mythos 5](https://www.anthropic.com/news/claude-fable-5-mythos-5)  
  Used for launch context and the distinction between Fable 5 and Mythos 5. Mythos 5 is official but limited/invitation-only through Project Glasswing or approved access, so it is not recommended as a default PM-user option.

- [Introducing Claude Sonnet 5](https://www.anthropic.com/news/claude-sonnet-5)  
  Used for Sonnet 5 positioning as a scalable model for coding, agents, and professional work.

- [Introducing Claude Opus 4.8](https://www.anthropic.com/news/claude-opus-4-8)  
  Used for Opus 4.8 positioning around complex enterprise reasoning, agentic coding, and high-stakes review.

- [Claude Haiku](https://www.anthropic.com/claude/haiku)  
  Used for Haiku 4.5 positioning as the fastest and most cost-efficient model for high-volume and routine work.

## Prompt Engineering

- [Prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)  
  Used for clear/direct instructions, adding context, examples/few-shot prompting, XML tags, role prompting, long-context ordering, output formatting, tool-use guidance, thinking/reasoning guidance, agentic-system guidance, migration notes, and guidance to move away from prefilled responses.

Key teaching points taken from this source:

- Be clear and direct; Claude performs better when the desired behavior and output are explicit.
- Add context and motivation, especially why a constraint matters.
- Use relevant, diverse, structured examples; Anthropic recommends 3-5 examples for best results.
- Use XML tags like `<instructions>`, `<context>`, `<input>`, `<documents>`, and `<example>` to reduce ambiguity in complex prompts.
- For long documents or data-rich inputs, place longform source material near the top and the query/instructions near the end. Anthropic notes this can improve quality by up to 30% in complex multi-document tests.
- Use adaptive thinking and effort controls for current models when deeper reasoning is needed.
- For tool use and agentic systems, say clearly whether Claude should act, research, propose, edit files, or wait for approval.

- [Define tools](https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools)  
  Used for tool-description best practices and the idea that tools need clear descriptions, schemas, caveats, and examples for Claude to use them well.

## Claude Chat, Projects, Skills, And Connectors

- [Get started with Claude](https://support.claude.com/en/articles/8114491-get-started-with-claude)  
  Used for Claude Chat availability and general product access context.

- [What are projects?](https://support.claude.com/en/articles/9517075-what-are-projects)  
  Used for the recommendation to create self-contained workspaces with chat histories and knowledge bases for recurring project context.

- [Collaborate with Claude on Projects](https://www.anthropic.com/news/projects)  
  Used for the idea that Projects reduce the cold-start problem by grounding Claude in internal knowledge such as style guides, codebases, interview transcripts, or past work.

- [What are artifacts and how do I use them?](https://support.claude.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them)  
  Used for the recommendation that Chat can produce substantial standalone content in a dedicated window, such as tools, visualizations, and shareable content.

- [What are skills?](https://support.claude.com/en/articles/12512176-what-are-skills)  
  Used for explaining Skills as folders of instructions, scripts, and resources that help Claude complete specialized tasks repeatably.

- [Use connectors to extend Claude's capabilities](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities)  
  Used for explaining connectors as a way for Claude to access apps and services according to each user's permissions.

## Claude For Work, Team, And Enterprise

- [Claude for work](https://www.anthropic.com/learn/claude-for-work)  
  Used for the broad positioning of Claude as an organizational productivity tool and for feature areas such as ways to use Claude, Projects, Skills, Research, tools/integrations, and Cowork.

- [What is the Team plan?](https://support.claude.com/en/articles/9266767-what-is-the-team-plan)  
  Used for Team-plan features including admin controls, SSO/JIT/RBAC, spend controls, enterprise search, connectors, Claude Code, Cowork, Projects, knowledge bases, collaboration features, and 200k chat context.

- [What is the Enterprise plan?](https://support.claude.com/en/articles/9797531-what-is-the-enterprise-plan)  
  Used for Enterprise controls such as security/compliance, scalable organizational deployment, and admin infrastructure.

- [Enterprise solutions](https://claude.com/solutions/enterprise)  
  Used for the statement that Claude Enterprise gives employees secure access to Chat, Claude Cowork, Claude Code, and company connectors with admin controls, management, and visibility.

## Claude Cowork

- [Claude Cowork by Anthropic](https://www.anthropic.com/product/claude-cowork)  
  Used for the core Cowork framing: it handles tasks autonomously, starts from a goal, works on a user's computer, local files, and applications, and returns finished deliverables for repetitive, messy, or time-consuming knowledge work.

- [Claude Cowork product page](https://claude.com/product/cowork)  
  Used for official FAQ wording: Cowork is Anthropic's agentic AI system for knowledge work, runs on desktop, connects to local files/applications, and completes multi-step tasks from start to finish.

- [Get started with Claude Cowork](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)  
  Used for the task loop: analyze request, create plan, break complex work into subtasks, run code/commands in an isolated VM, coordinate workstreams in parallel, and deliver outputs to the file system.

- [Use Claude Cowork safely](https://support.claude.com/en/articles/13364135-use-claude-cowork-safely)  
  Used for the safety guidance that Cowork can read files, browse, run code, and use apps, so PM workflows should separate read tools from write tools and require human approval for consequential actions.

- [Assign tasks from anywhere in Claude Cowork](https://support.claude.com/en/articles/13947068-assign-tasks-from-anywhere-in-claude-cowork)  
  Used for Dispatch/mobile context and the idea of assigning tasks, leaving Claude to work, and returning to a finished output.

- [Organize your tasks with projects in Claude Cowork](https://support.claude.com/en/articles/14116274-organize-your-tasks-with-projects-in-claude-cowork)  
  Used for Cowork Projects as local task workspaces with files, context, instructions, and memory.

## Claude Code

- [Claude Code overview](https://code.claude.com/docs/en/overview)  
  Used for the official definition of Claude Code as an agentic coding tool that reads codebases, edits files, runs commands, and integrates with development tools across terminal, IDE, desktop app, and browser.

- [Claude Code by Anthropic](https://www.anthropic.com/product/claude-code)  
  Used for the "agentic, not autocomplete" framing and for PM/non-engineering relevance: people outside engineering can build prototypes, internal tools, and personal projects by describing the goal.

- [Claude Code model configuration](https://code.claude.com/docs/en/model-config)  
  Used for Code-specific model aliases and effort guidance, including that `opus` resolves to Opus 4.8 and `sonnet` resolves to Sonnet 5 on the Anthropic API, with provider-specific caveats.

## Team Collaboration

- [Introducing Claude Tag](https://www.anthropic.com/news/introducing-claude-tag)  
  Used as a current team-collaboration reference. Claude Tag is an official Slack beta for Claude Enterprise and Team customers where team members can tag `@Claude`, delegate tasks, and work with a shared Claude in a channel. It is separate from Claude Cowork and Claude Code.

## Verification Flags

- `Fable 5`, `Mythos 5`, `Opus 4.8`, `Sonnet 5`, and `Haiku 4.5` are official Anthropic model names.
- `Claude Chat`, `Claude Cowork`, and `Claude Code` are official product/interface names, not model names.
- `Claude Coworker` is not the official product name. Use `Claude Cowork`.
- `Hiku` should be corrected to `Haiku`.
- `Mythos 5` is official but not a normal recommendation for PM users because access is limited.
