const storage_and_retrieval= `
<h1 id="welcome-to-markdown">Welcome to Markdown</h1>
<p>Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.</p>
<h2 id="how-to-use-this-">How to use this?</h2>
<ol>
<li>Write markdown in the markdown editor window</li>
<li>See the rendered markdown in the preview window</li>
</ol>
<h3 id="features">Features</h3>
<ul>
<li>Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists</li>
<li>Name and save the document to access again later</li>
<li>Choose between Light or Dark mode depending on your preference</li>
</ul>
<blockquote>
<p>This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this <a href="https://www.markdownguide.org/cheat-sheet/">markdown cheatsheet</a>.</p>
</blockquote>
<h4 id="headings">Headings</h4>
<p>To create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You&#39;ll see in this guide that we&#39;ve used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.</p>
<h5 id="lists">Lists</h5>
<p>You can see examples of ordered and unordered lists above.</p>
<h6 id="code-blocks">Code Blocks</h6>
<p>This markdown editor allows for inline-code snippets, like this: <code>&lt;p&gt;I&#39;m inline&lt;/p&gt;</code>. It also allows for larger code blocks like this</p>
<pre><code class="lang-js"><span class="hljs-tag">&lt;<span class="hljs-name">main</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>This is a larger code block<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">main</span>&gt;</span>
</code></pre>
<blockquote class="info">
<p>💡 <strong>Info</strong><br />Database backup is scheduled for 3:00 AM.</p>
</blockquote>

<blockquote class="info">
<p>💡 <strong>Info</strong><br>
This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this
</p>
<img src="https://xnacly.me/syntax-highlight/sqleibniz.png" alt="markdown cheatsheet">
</blockquote>
`

const learning_domain_driven_design = `
<h1 id="understanding-business-domains-and-subdomains-in-software-development">Understanding Business Domains and Subdomains in Software Development</h1>
<p>In software development, especially in domains driven by complex business logic, it&#39;s critical to understand the landscape in which your application operates. This landscape is defined by <strong>business domains</strong> and their respective <strong>subdomains</strong>. Let&#39;s break it down.</p>
<hr>
<h2 id="-table-of-contents">📚 Table of Contents</h2>
<ul>
<li><a href="#what-is-a-business-domain">What Is a Business Domain?</a></li>
<li><a href="#strategic-vs-tactical-design">Strategic vs. Tactical Design</a></li>
<li><a href="#what-are-subdomains">What Are Subdomains?</a><ul>
<li><a href="#core-subdomains">Core Subdomains</a></li>
<li><a href="#generic-subdomains">Generic Subdomains</a></li>
<li><a href="#supporting-subdomains">Supporting Subdomains</a></li>
</ul>
</li>
<li><a href="#comparing-subdomains">Comparing Subdomains</a></li>
<li><a href="#discovering-domain-knowledge">Discovering Domain Knowledge</a></li>
<li><a href="#final-thoughts">Final Thoughts</a></li>
<li><a href="#managing-domain-complexity">Managing Domain Complexity</a><ul>
<li><a href="#bounded-contexts">Bounded Contexts</a></li>
<li><a href="#boundaries">Boundaries</a></li>
<li><a href="#real-life">Real Life</a></li>
</ul>
</li>
<li><a href="#integrating-bounded-contexts">Integrating Bounded Contexts</a><ul>
<li><a href="#cooperation">Cooperation</a><ul>
<li><a href="#partnership">Partnership</a></li>
<li><a href="#shared-kernel">Shared Kernel</a></li>
</ul>
</li>
<li><a href="#customer–supplier">Customer–Supplier</a><ul>
<li><a href="#conformist">Conformist</a></li>
<li><a href="#anti-corruption-layer">Anti Corruption Layer</a></li>
<li><a href="#open-host-service">Open-Host Service</a></li>
<li><a href="#separate-ways">Separate Ways</a></li>
</ul>
</li>
<li><a href="#context-map">Context Map</a><ul>
<li><a href="#maintenance">Maintenance</a></li>
<li><a href="#limitations">Limitations</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#modeling-the-dimension-of-time">Modeling the Dimension of Time</a></li>
<li><a href="#architectural-patterns">Architectural Patterns</a><ul>
<li><a href="#layer-architecture">Layer Architecture</a></li>
<li><a href="#ports--adapters">Ports &amp; Adapters</a></li>
<li><a href="#command-query-responsibility-segregation">Command-Query Responsibility Segregation</a></li>
</ul>
</li>
<li><a href="#model-translation">Model Translation</a><ul>
<li><a href="#stateless-model-translation">Stateless Model Translation</a><ul>
<li><a href="#synchronous">Synchronous</a></li>
<li><a href="#asynchronous">Asynchronous</a></li>
</ul>
</li>
<li><a href="#stateful-model-translation">Stateful Model Translation</a><ul>
<li><a href="#aggregating-incoming-data">Aggregating Incoming Data</a></li>
<li><a href="#outbox-pattern">Outbox Pattern</a></li>
<li><a href="#saga">Saga</a></li>
<li><a href="#process-manager">Process Manager</a></li>
</ul>
</li>
<li><a href="#heuristic">Heuristic</a></li>
<li><a href="#decision-tree">Decision Tree</a></li>
</ul>
</li>
<li><a href="##ddd-in-reality-not-just-a-lab-dream">DDD in Reality: Not Just a &quot;Lab Dream&quot;</a><ul>
<li><a href="#checklist-for-applying-ddd-in-legacy-projects">Checklist for Applying DDD in Legacy Projects</a></li>
<li><a href="#modernization-strategy">Modernization Strategy</a></li>
<li><a href="#tactical-modernization">Tactical Modernization</a></li>
<li><a href="#ubiquitous-language">Ubiquitous Language</a></li>
<li><a href="#strangler-pattern">Strangler Pattern</a></li>
<li><a href="#microservices-and-bounded-contexts">Microservices and Bounded Contexts</a></li>
<li><a href="#event-driven-architecture">Event-Driven Architecture</a><ul>
<li><a href="#event-types">Event Types</a><ul>
<li><a href="#event-notification">Event Notification</a></li>
<li><a href="#event-carried-state-transfer-ecst">Event-Carried State Transfer (ECST)</a></li>
<li><a href="#domain-event">Domain Event</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#data-mesh-for-analytical-systems">Data Mesh for Analytical Systems</a></li>
</ul>
</li>
</ul>
<hr>
<h2 id="what-is-a-business-domain-">What Is a Business Domain?</h2>
<p>A <strong>business domain</strong> is the area of activity in which a company operates. It encompasses the goals, processes, and challenges specific to that area. Whether it&#39;s finance, healthcare, education, or e-commerce, every domain has its own set of rules and problems to solve.</p>
<blockquote>
<p><strong>Not all business problems are solved through algorithms or technical solutions.</strong><br>Sometimes, the solution lies in understanding the <strong>why</strong> and <strong>what</strong>, not just the <strong>how</strong>.</p>
</blockquote>
<hr>
<h2 id="strategic-vs-tactical-design">Strategic vs. Tactical Design</h2>
<p>When analyzing a business domain, it&#39;s helpful to divide it into two perspectives:</p>
<ul>
<li><strong>Strategic Design</strong>: Focuses on the <em>what</em> and <em>why</em> — understanding business goals, identifying competitive advantages, and setting direction.</li>
<li><strong>Tactical Design</strong>: Deals with the <em>how</em> — the technical implementation details, processes, and architecture.</li>
</ul>
<hr>
<h2 id="what-are-subdomains-">What Are Subdomains?</h2>
<p>To operate effectively within a business domain, companies often break it down into <strong>subdomains</strong> — smaller, specialized areas of functionality.</p>
<p>There are three types of subdomains:</p>
<h3 id="core-subdomains">Core Subdomains</h3>
<ul>
<li>What sets a company apart from its competitors.</li>
<li>Often where innovation and custom solutions are required.</li>
<li><strong>Not necessarily technical</strong>, but <strong>crucial</strong> to business success.</li>
<li>Complex and volatile – they must evolve constantly and resist easy replication.</li>
</ul>
<h3 id="generic-subdomains">Generic Subdomains</h3>
<ul>
<li>Common to all businesses (e.g., payroll, accounting).</li>
<li>These areas do not offer competitive advantage.</li>
<li>Can be complex but aren&#39;t unique.</li>
<li>Often solved using <strong>open source</strong> or standard industry tools.</li>
</ul>
<h3 id="supporting-subdomains">Supporting Subdomains</h3>
<ul>
<li>Help core operations but are not central to the business&#39;s unique value.</li>
<li>Tend to be simpler and more stable.</li>
<li>Frequently <strong>outsourced</strong> or implemented using <strong>standard practices</strong>.</li>
</ul>
<hr>
<h2 id="comparing-subdomains">Comparing Subdomains</h2>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Core</th>
<th>Generic</th>
<th>Supporting</th>
</tr>
</thead>
<tbody>
<tr>
<td>Competitive Advantage</td>
<td>✅ High</td>
<td>❌ None</td>
<td>❌ None</td>
</tr>
<tr>
<td>Complexity</td>
<td>🚧 High</td>
<td>🧠 Medium</td>
<td>🧩 Low</td>
</tr>
<tr>
<td>Volatility</td>
<td>🔁 Changes Often</td>
<td>🛠️ Updates Over Time</td>
<td>💤 Rarely Changes</td>
</tr>
<tr>
<td>Solution Strategy</td>
<td>🔬 Advanced Engineering</td>
<td>🧰 Open Source Tools</td>
<td>🤝 Outsourcing</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="discovering-domain-knowledge">Discovering Domain Knowledge</h2>
<p>Success in software development depends heavily on <strong>understanding the business domain</strong> — not just technically, but from a strategic standpoint.</p>
<blockquote>
<p><strong>Key to success</strong>: Effective <strong>knowledge sharing</strong> between domain experts (those who understand the business) and software engineers (those building the solution).</p>
</blockquote>
<p>Both the business domain and each subdomain may present unique challenges. Addressing them requires collaboration, curiosity, and continuous learning.</p>
<hr>
<h2 id="final-thoughts">Final Thoughts</h2>
<p>When designing software for a business, it&#39;s not enough to write clean code or use the latest framework. You need to:</p>
<ul>
<li>Understand <em>what</em> the business does,</li>
<li><em>Why</em> it matters,</li>
<li>And <em>how</em> to align your solution to its strategic goals.</li>
</ul>
<p>By distinguishing between <strong>core</strong>, <strong>generic</strong>, and <strong>supporting</strong> subdomains, you can focus your effort where it matters most — delivering true business value.</p>
<h2 id="managing-domain-complexity">Managing Domain Complexity</h2>
<blockquote>
<p>“No matter what you do, you are always facing complexity: the complexity of filtering out extraneous details, the complexity of finding what you do need, and most importantly, the complexity of keeping the data in a consistent state.”</p>
</blockquote>
<p>Software architecture is ultimately <strong>system design</strong>, and system design is all about <strong>contextual decisions</strong> — setting boundaries and making trade-offs that make complexity manageable.</p>
<hr>
<h2 id="bounded-contexts">Bounded Contexts</h2>
<p>A <strong>Bounded Context</strong> is a strategic design pattern used to divide a large domain into smaller, manageable problem spaces. Each bounded context has its own <strong>ubiquitous language</strong>, <strong>data model</strong>, and <strong>business rules</strong>.</p>
<p>It allows different parts of a system to evolve independently, reducing accidental complexity.</p>
<hr>
<h2 id="boundaries">Boundaries</h2>
<p>Understanding boundaries is key when managing complexity.</p>
<h3 id="physical-boundaries">Physical Boundaries</h3>
<ul>
<li>Each bounded context can be implemented as a <strong>separate project or service</strong>.</li>
<li>Teams can choose the <strong>technology stack</strong> that fits their needs.</li>
</ul>
<h3 id="ownership-boundaries">Ownership Boundaries</h3>
<ul>
<li>Define <strong>communication protocols</strong> explicitly for integration.</li>
<li>Each team maintains control over their bounded context.</li>
</ul>
<hr>
<h2 id="real-life-analogies">Real Life Analogies</h2>
<h3 id="semantic-domain">Semantic Domain</h3>
<ul>
<li>In linguistics, a <strong>semantic domain</strong> refers to an area of meaning and the words used to talk about it.</li>
<li>Similarly, in software, a <strong>frontend and backend</strong> might both talk about a <code>PORT</code>, but the meaning and behavior might differ slightly in each context.</li>
</ul>
<h3 id="science">Science</h3>
<ul>
<li>Like science, domains are broken down into specialties with shared assumptions, tools, and methods.</li>
</ul>
<hr>
<h2 id="integrating-bounded-contexts">Integrating Bounded Contexts</h2>
<p>Bounded contexts are often owned by <strong>different teams</strong>, so integration requires <strong>well-defined communication</strong> and a shared understanding.</p>
<hr>
<h2 id="cooperation-models">Cooperation Models</h2>
<h3 id="partnership">Partnership</h3>
<ul>
<li>Tight collaboration, with frequent communication.</li>
<li>Both sides adapt easily, no drama.</li>
<li>Requires <strong>continuous integration</strong> of changes.</li>
<li>Not ideal for <strong>distributed teams</strong>.</li>
</ul>
<h3 id="shared-kernel">Shared Kernel</h3>
<ul>
<li>A <strong>shared subset of the domain model</strong> is used across bounded contexts.</li>
<li>Strong <strong>dependency</strong> between contexts.</li>
<li>Suited for <strong>core subdomains</strong> that evolve together.</li>
<li>Keep the shared part <strong>minimal</strong> to reduce ripple effects.</li>
<li>Trigger <strong>integration tests</strong> on every change.</li>
</ul>
<hr>
<h2 id="customer-supplier-relationships">Customer–Supplier Relationships</h2>
<h3 id="conformist">Conformist</h3>
<ul>
<li>The consumer adapts to the supplier&#39;s model.</li>
<li>No expectation of flexibility.</li>
<li>Suitable when <strong>downstream</strong> has little influence over <strong>upstream</strong>.</li>
</ul>
<h3 id="anti-corruption-layer-acl-">Anti Corruption Layer (ACL)</h3>
<ul>
<li>Protects the consumer from unstable or inconvenient upstream models.</li>
<li>The downstream introduces a <strong>translation layer</strong>.</li>
<li>Especially useful when:<ul>
<li>The downstream is implementing a <strong>core subdomain</strong>.</li>
<li>The upstream model is <strong>frequently changing</strong>.</li>
</ul>
</li>
</ul>
<h3 id="open-host-service">Open-Host Service</h3>
<ul>
<li>The <strong>supplier</strong> provides a translation layer to expose its model in a consumer-friendly format.</li>
<li>Allows for <strong>gradual migration</strong> and versioning.</li>
</ul>
<h3 id="separate-ways">Separate Ways</h3>
<ul>
<li>When dealing with <strong>generic subdomains</strong>, it might be cheaper to <strong>duplicate functionality</strong>.</li>
<li>Avoid costly integration when there&#39;s no strategic value in sharing.</li>
</ul>
<hr>
<h2 id="context-map">Context Map</h2>
<p>A <strong>Context Map</strong> is a high-level visual representation of the system&#39;s bounded contexts and their relationships.</p>
<p>It helps visualize:</p>
<ul>
<li>Integration patterns</li>
<li>Team ownership</li>
<li>Communication protocols</li>
</ul>
<h3 id="maintenance">Maintenance</h3>
<ul>
<li>Each team is responsible for <strong>maintaining their own integrations</strong>.</li>
</ul>
<h3 id="-limitations">⚠️ Limitations</h3>
<ul>
<li>Creating an accurate context map can be <strong>difficult and time-consuming</strong>.</li>
<li>Requires <strong>deep domain knowledge</strong> and collaboration between teams.</li>
</ul>
<hr>
<h2 id="final-thoughts">Final Thoughts</h2>
<p>Managing domain complexity is not about eliminating it — it&#39;s about organizing it. By using <strong>bounded contexts</strong>, <strong>strategic boundaries</strong>, and <strong>clear integration models</strong>, teams can build software that is resilient, maintainable, and aligned with the business.</p>
<p>Let your <strong>architecture reflect your organization&#39;s reality</strong>, and never underestimate the power of <strong>clear context</strong>.</p>
<h2 id="modeling-the-dimension-of-time">Modeling the Dimension of Time</h2>
<p>Time is one of the most complex and powerful dimensions in software modeling. Rather than storing only the <em>current state</em>, modeling with <strong>events over time</strong> captures the <em>history</em> of change, enabling better auditability, traceability, and insights.</p>
<p>But it comes with trade-offs.</p>
<hr>
<h3 id="why-not-just-replay-events-">Why not just replay events?</h3>
<blockquote>
<p>“Reconstituting an aggregate&#39;s state from events will negatively affect the system&#39;s performance.”</p>
</blockquote>
<p>Projecting events into state <strong>requires compute power</strong>. As more events are added, performance <strong>degrades</strong>, making naive event replay unsuitable for high-throughput systems without additional strategies (e.g., <strong>snapshots</strong>).</p>
<hr>
<h3 id="why-not-write-logs-to-a-text-file-">Why not write logs to a text file?</h3>
<p>Tempting — but flawed. Writing logs to a file alongside a database update means <strong>you&#39;re transacting across two storage mechanisms</strong> — and this breaks <strong>atomicity</strong>. You can&#39;t guarantee consistency.</p>
<hr>
<h3 id="what-if-i-append-logs-in-a-db-table-">What if I append logs in a DB table?</h3>
<p>Appending logs in the same transaction <strong>preserves atomicity</strong>, but:</p>
<ul>
<li>You now have <strong>two sources of truth</strong>: state and logs.</li>
<li>The log table&#39;s schema <strong>often degenerates into chaos</strong>, lacking structure, purpose, or queryability.</li>
<li>This model often fails to provide clear business meaning for the changes.</li>
</ul>
<hr>
<h3 id="can-i-snapshot-state-changes-using-db-triggers-">Can I snapshot state changes using DB triggers?</h3>
<p>Yes, but it&#39;s a <strong>partial solution</strong>.</p>
<ul>
<li>You&#39;ll capture what changed, not <strong>why</strong> it changed.</li>
<li>It misses business intent — the “why” that events are designed to preserve.</li>
<li>Also, triggers often become brittle and hard to maintain.</li>
</ul>
<blockquote>
<p>Events are about business decisions. State is just the result.</p>
</blockquote>
<hr>
<h2 id="architectural-patterns">Architectural Patterns</h2>
<p>Choosing the right architectural pattern is a key decision in scaling both your system and your team. Let&#39;s look at some of the most common patterns and their trade-offs.</p>
<hr>
<h2 id="layer-architecture">Layer Architecture</h2>
<blockquote>
<p>“Layers and tiers are conceptually different: a <strong>layer</strong> is a logical boundary, whereas a <strong>tier</strong> is a physical boundary.”</p>
</blockquote>
<h3 id="classic-layers-">Classic layers:</h3>
<ol>
<li><p><strong>Presentation Layer</strong><br>Handles UI/UX, input/output, formatting data for users.</p>
</li>
<li><p><strong>Business Logic Layer</strong><br>Encapsulates the domain logic, validations, and decision-making.</p>
</li>
<li><p><strong>Data Access Layer</strong><br>Responsible for retrieving and storing data, abstracting persistence logic.</p>
</li>
</ol>
<p>✅ Easy to understand<br>✅ Works well for simple systems<br>❌ Can lead to tight coupling<br>❌ Difficult to scale or evolve</p>
<hr>
<h2 id="ports-adapters-aka-hexagonal-architecture-">Ports &amp; Adapters (aka Hexagonal Architecture)</h2>
<p>Decouple the <strong>core domain</strong> from external concerns like:</p>
<ul>
<li>Databases</li>
<li>External services</li>
<li>User interfaces</li>
</ul>
<p>Core logic lives at the center, and all inputs/outputs go through well-defined <strong>ports</strong> with interchangeable <strong>adapters</strong>.</p>
<p>✅ Testable<br>✅ Technology-agnostic<br>✅ Encourages clean architecture<br>❌ More upfront design complexity</p>
<hr>
<h2 id="command-query-responsibility-segregation-cqrs-">Command-Query Responsibility Segregation (CQRS)</h2>
<p>Split <strong>reads</strong> and <strong>writes</strong> into separate models.</p>
<ul>
<li><p><strong>Synchronous projections</strong><br>Immediate updates to the read model after a write.</p>
</li>
<li><p><strong>Asynchronous projections</strong><br>Writes go to a queue; reads are eventually consistent.</p>
</li>
</ul>
<h3 id="benefits">Benefits</h3>
<ul>
<li>Scales well</li>
<li>Allows for <strong>read model optimization</strong></li>
<li>Fits well with <strong>event sourcing</strong></li>
</ul>
<h3 id="challenges">Challenges</h3>
<ul>
<li>Increased <strong>operational complexity</strong></li>
<li>Must handle <strong>eventual consistency</strong></li>
<li>More <strong>infrastructure</strong> required</li>
</ul>
<hr>
<h2 id="final-thoughts">Final Thoughts</h2>
<p>Modeling time, choosing the right architecture, and thinking in <strong>events, not just state</strong>, are what separate reactive, resilient systems from rigid, brittle ones. Embracing these principles gives you not just better software, but a deeper understanding of the business it supports.</p>
<p>Let the architecture tell a story — of time, intent, and evolution.</p>
<h2 id="model-translation">Model Translation</h2>
<hr>
<h2 id="stateless-model-translation">Stateless Model Translation</h2>
<p>A <strong>stateless</strong> translation model focuses on translating data on-the-fly without maintaining any session or state between interactions.</p>
<ul>
<li>Often implemented using the <strong>Proxy Design Pattern</strong> to intercept incoming or outgoing requests and transform the source model into the target model suited to its bounded context.</li>
<li>Implementation depends on whether the communication between contexts is <strong>synchronous or asynchronous</strong>.</li>
</ul>
<hr>
<h3 id="synchronous">Synchronous</h3>
<ul>
<li>Embedding the translation logic directly inside the bounded context&#39;s source code.</li>
<li>For performance, this logic can be <strong>moved to an external component</strong> like an <strong>API Gateway</strong>, which aggregates and batches requests when needed.</li>
</ul>
<hr>
<h3 id="asynchronous">Asynchronous</h3>
<ul>
<li>Implement a <strong>message proxy</strong>: an intermediary that subscribes to messages from the source context, transforms them, and forwards them to the consuming service.</li>
<li>Allows for decoupled communication and scalable processing.</li>
</ul>
<hr>
<h2 id="stateful-model-translation">Stateful Model Translation</h2>
<p>A <strong>stateful</strong> approach keeps track of context or aggregates data before performing translation or processing.</p>
<hr>
<h3 id="aggregating-incoming-data">Aggregating Incoming Data</h3>
<ul>
<li>Combine multiple small (fine-grained) messages into a <strong>single, unified message</strong> to improve processing efficiency.</li>
<li>Useful for both synchronous and asynchronous scenarios.</li>
</ul>
<hr>
<h3 id="outbox-pattern">Outbox Pattern</h3>
<p>Ensures <strong>reliable delivery</strong> of domain events:</p>
<ol>
<li>Don&#39;t send the event immediately within business logic.</li>
<li>Instead, save the event to a special <strong>“outbox” table</strong> in the same transaction as your aggregate.</li>
<li>A <strong>background worker (message relay)</strong> then:<ul>
<li>Fetches unsent events.</li>
<li>Publishes them to the message bus.</li>
<li>Marks them as sent (or deletes them).</li>
</ul>
</li>
</ol>
<p>This avoids data loss and preserves consistency.</p>
<hr>
<h3 id="saga-pattern">Saga Pattern</h3>
<p>Used to maintain <strong>eventual consistency</strong> across multiple aggregates.</p>
<ul>
<li>Each transaction should <strong>only operate within a single aggregate</strong>.</li>
<li>Use <strong>Strong Consistency</strong> when all related data resides in one aggregate.</li>
<li>Use <strong>Eventual Consistency</strong> when data spans multiple aggregates.<ul>
<li>Data is gradually synchronized using <strong>events and commands</strong>.</li>
<li>This is where <strong>Saga</strong> comes into play: listening, reacting, and ensuring the whole process eventually reaches a valid state.</li>
</ul>
</li>
</ul>
<blockquote>
<p>✅ Only data within a single aggregate can be strongly consistent.<br>➡ Everything outside of it should rely on eventual consistency via events.</p>
</blockquote>
<hr>
<h3 id="process-manager">Process Manager</h3>
<ul>
<li>While Sagas handle simple &quot;event → command&quot; flows, <strong>Process Managers (PMs)</strong> are designed for <strong>complex workflows</strong>.</li>
<li>A Process Manager has <strong>its own state</strong>, and it can <strong>decide what to do next</strong> based on business logic and conditions.</li>
</ul>
<blockquote>
<p>If you find <code>if-else</code> logic in your Saga...<br>👉 You probably need a Process Manager.</p>
</blockquote>
<hr>
<h2 id="heuristic">Heuristic</h2>
<p><strong>Heuristics</strong> are practical rules or methods that help guide decisions effectively by ignoring noise and focusing on what matters most.</p>
<ul>
<li>There are many useful heuristics for defining <strong>service boundaries</strong>.</li>
<li><strong>Size is one of the least useful</strong> indicators.</li>
<li>Refactoring <strong>bounded contexts</strong> is costly, especially when they&#39;re managed by different teams.<ul>
<li>➡ These poorly defined boundaries often become <strong>technical debt</strong>.</li>
</ul>
</li>
</ul>
<h3 id="practical-advice">Practical Advice</h3>
<ul>
<li>When the domain is unclear or changing rapidly, <strong>start with a wide bounded context</strong>.</li>
<li>Group <strong>closely related subdomains</strong>, especially in the <strong>core</strong>, into a single context.</li>
<li>➡ Once you understand the domain better, split them up later.</li>
<li>Refactoring <strong>code boundaries</strong> is cheaper than refactoring <strong>physical boundaries</strong> (services, databases, team structure).</li>
</ul>
<hr>
<h2 id="decision-tree">Decision Tree</h2>
<blockquote>
<p>Visual aids can help clarify which model translation or consistency strategy to choose.</p>
</blockquote>
<p><img src="/images/Figure103.png" alt="This is a screenshot"><br><img src="/images/Figure107.png" alt="This is a screenshot"></p>
<h1 id="ddd-in-reality-not-just-a-lab-dream-">DDD in Reality: Not Just a &quot;Lab Dream&quot;</h1>
<p>Most of the projects you&#39;ll encounter are brownfield – full of legacy code and technical debt. Ironically, these are the projects that <strong>need DDD the most</strong> – to untangle complexity, recover domain knowledge, and reorganize the system.</p>
<h2 id="ddd-checklist-for-legacy-projects">DDD Checklist for Legacy Projects</h2>
<table>
<thead>
<tr>
<th>Task</th>
<th>Tool/Technique</th>
</tr>
</thead>
<tbody>
<tr>
<td>Understand business and domain</td>
<td>Stakeholder interviews, org charts</td>
</tr>
<tr>
<td>Classify subdomains</td>
<td>Core / Supporting / Generic</td>
</tr>
<tr>
<td>Map the current architecture</td>
<td>Context Mapping</td>
</tr>
<tr>
<td>Evaluate the codebase</td>
<td>Check if existing patterns align</td>
</tr>
<tr>
<td>Run EventStorming sessions</td>
<td>Recover logic &amp; define Ubiquitous Language</td>
</tr>
<tr>
<td>Start small</td>
<td>Refactor a small subdomain first</td>
</tr>
</tbody>
</table>
<h2 id="modernization-strategy">Modernization Strategy</h2>
<ul>
<li>Rewriting the system from scratch rarely works.</li>
<li>A better approach: <strong>refactor safely</strong> by preserving domain logic and restructuring the codebase.</li>
</ul>
<h2 id="tactical-modernization">Tactical Modernization</h2>
<p>Focus on the <strong>most painful areas</strong> – where <strong>business value is high</strong> but <strong>technical design is poor</strong>.</p>
<h2 id="ubiquitous-language">Ubiquitous Language</h2>
<p>A shared language across the team is crucial. Use <strong>EventStorming</strong> to model the domain clearly and align team understanding.</p>
<h2 id="strangler-pattern">Strangler Pattern</h2>
<p>Inspired by tropical plants that grow around and eventually replace the host tree.</p>
<h3 id="how-it-works-">How it works:</h3>
<ul>
<li>Create a new bounded context (<code>strangler</code>).</li>
<li>Implement new requirements in the <code>strangler</code>.</li>
<li>Gradually migrate old logic from the legacy system.</li>
<li>Freeze development in the old system (except emergency hotfixes).</li>
<li>Once everything is moved, retire the legacy system.</li>
</ul>
<p>💡 Often used with the <strong>Façade Pattern</strong>, which routes requests to either old or new systems depending on migration status.</p>
<p><strong>Shared databases are temporary</strong> – aim to separate them eventually.</p>
<blockquote>
<p>DDD is not just about aggregates or value objects.<br>👉 It&#39;s about letting the domain guide software design.</p>
</blockquote>
<hr>
<h1 id="microservices-and-bounded-contexts">Microservices and Bounded Contexts</h1>
<ul>
<li>Not all <strong>bounded contexts</strong> are <strong>microservices</strong>, but all microservices should be a bounded context.</li>
<li>Aggregates define the narrowest valid boundaries.</li>
<li>Microservices are not just about breaking down functionality, but designing <strong>interactions</strong>.</li>
<li>Sometimes, a microservice is just a <strong>module</strong>; over-decomposition increases complexity.</li>
<li>Subdomains are a safe boundary for microservice design.</li>
</ul>
<hr>
<h1 id="event-driven-architecture-eda-">Event-Driven Architecture (EDA)</h1>
<p>EDA ≠ Event Sourcing, even though both use <em>events</em>.</p>
<ul>
<li><strong>EDA</strong> = inter-service communication.</li>
<li><strong>Event Sourcing</strong> = internal service state modeled by events.</li>
</ul>
<h3 id="event-schema">Event Schema</h3>
<p>Typical event contains:</p>
<ul>
<li><strong>Metadata</strong> (e.g., timestamp, event type)</li>
<li><strong>Payload</strong> (actual event data)</li>
</ul>
<h2 id="event-types">Event Types</h2>
<h3 id="event-notification">Event Notification</h3>
<ul>
<li>Tells others an event occurred, without full data.</li>
<li>Consumers must fetch more info via API.</li>
<li>✅ Good for:<ul>
<li><strong>Security</strong> (limit data exposure)</li>
<li><strong>Concurrency</strong> (ensure freshness)</li>
</ul>
</li>
</ul>
<h3 id="event-carried-state-transfer-ecst-">Event-Carried State Transfer (ECST)</h3>
<ul>
<li>Carries full data needed for consumer to act.</li>
<li>Async data sync between producer/consumer.</li>
<li>✅ Good for:<ul>
<li><strong>Performance</strong> (cache locally)</li>
<li><strong>Resilience</strong> (can continue when producer is down)</li>
</ul>
</li>
<li>⚠️ Watch out for:<ul>
<li>Versioning issues</li>
<li>Data overexposure</li>
</ul>
</li>
</ul>
<h3 id="domain-event">Domain Event</h3>
<ul>
<li>Describes a <strong>business moment</strong>.</li>
<li>Contains all info, no follow-up needed.</li>
<li>Center of Event Sourcing design.</li>
<li>Use even when there&#39;s <strong>no subscriber</strong> (for audit/history).</li>
</ul>
<h2 id="choosing-the-right-event-type">Choosing the Right Event Type</h2>
<table>
<thead>
<tr>
<th>Type</th>
<th>When to Use</th>
<th>Pros</th>
<th>Cons</th>
</tr>
</thead>
<tbody>
<tr>
<td>Notification</td>
<td>Announce that something happened; hide internal state</td>
<td>Lightweight, secure, clear boundaries</td>
<td>Requires consumer to fetch extra data</td>
</tr>
<tr>
<td>ECST</td>
<td>Provide full state to avoid API calls</td>
<td>Better perf, resilient, cache-friendly</td>
<td>Schema coupling, possible over-sharing</td>
</tr>
<tr>
<td>Domain Event</td>
<td>Capture important domain changes, support event sourcing</td>
<td>Self-contained, audit-ready</td>
<td>May require good modeling to avoid overuse</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Only the paranoid survive.</p>
<ul>
<li>The network <strong>will</strong> be slow.</li>
<li>Servers <strong>will</strong> fail.</li>
<li>Events <strong>will</strong> be late, duplicated, or out of order.</li>
<li>It&#39;ll happen on <strong>weekends and holidays</strong>.</li>
</ul>
</blockquote>
<p><strong>&quot;Driven&quot;</strong> in <em>event-driven</em> means everything depends on <strong>reliable message delivery</strong>. Don&#39;t just <em>hope</em> it works.</p>
<h3 id="design-notes-">Design Notes:</h3>
<ul>
<li>Distinguish between <strong>public</strong> and <strong>private</strong> events.</li>
<li>Evaluate <strong>consistency needs</strong>:<ul>
<li>Use <strong>ECST</strong> if eventual consistency is okay.</li>
<li>Use <strong>Notification + Query</strong> if consumer needs fresh data.</li>
</ul>
</li>
</ul>
<hr>
<h1 id="data-mesh-for-analytical-systems">Data Mesh for Analytical Systems</h1>
<ul>
<li>Like domain events, analytical data is <strong>append-only</strong> – no deletions, no edits.</li>
<li>To show something is obsolete, <strong>add a new record</strong> with updated state.</li>
</ul>
<h2 id="oltp-vs-olap">OLTP vs OLAP</h2>
<table>
<thead>
<tr>
<th>Aspect</th>
<th>OLTP (Operational)</th>
<th>OLAP (Analytical)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Data granularity</td>
<td>Fine-grained (detailed transactions)</td>
<td>Aggregated (summary for insights)</td>
</tr>
<tr>
<td>Schema types</td>
<td>Star or Snowflake schemas</td>
<td>Snowflake often used for normalization</td>
</tr>
</tbody>
</table>
<h2 id="snowflake-schema">Snowflake Schema</h2>
<ul>
<li>Dimensions are further normalized into multiple levels.</li>
<li>Saves storage and improves maintainability.</li>
<li>Requires more <strong>joins</strong> → higher query cost.</li>
</ul>
<h2 id="beware-the-data-swamp">Beware the Data Swamp</h2>
<p>Without governance, a data lake can become a <strong>data swamp</strong> – unmanageable, low-quality data pool.</p>
<hr>
`

export default {storage_and_retrieval, learning_domain_driven_design}