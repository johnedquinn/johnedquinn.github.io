---
title: Resume
description: My resume.
date: 2026-05-29
publish: true
---

[plk]: https://github.com/partiql/partiql-lang-kotlin
[plr]: https://github.com/partiql/partiql-lang-rust
[github]: https://github.com/johnedquinn
[linkedin]: https://www.linkedin.com/in/johnedquinn/

[pr_parser]: https://github.com/partiql/partiql-lang-kotlin/pull/711
[pr_eval]: https://github.com/partiql/partiql-lang-kotlin/pull/1283
[pr_joins]: https://github.com/partiql/partiql-lang-kotlin/pull/1294
[pr_modes]: https://github.com/partiql/partiql-lang-kotlin/pull/1353
[pr_datum]: https://github.com/partiql/partiql-lang-kotlin/pull/1451
[pr_ptype]: https://github.com/partiql/partiql-lang-kotlin/pull/1488
[pr_errors]: https://github.com/partiql/partiql-lang-kotlin/pull/1615
[pr_window]: https://github.com/partiql/partiql-lang-kotlin/pull/1746

[release_v1]: https://github.com/partiql/partiql-lang-kotlin/releases/tag/v1.0.0
[release_v1_1]: https://github.com/partiql/partiql-lang-kotlin/releases/tag/v1.1.0
[release_v1_2]: https://github.com/partiql/partiql-lang-kotlin/releases/tag/v1.2.0
[release_v1_3]: https://github.com/partiql/partiql-lang-kotlin/releases/tag/v1.3.0
[release_vm]: https://github.com/partiql/partiql-lang-rust/releases/tag/v0.15.0-alpha.1

## JOHN QUINN

**Compilers and Database Engine Development**  |  **Rust, Java, Kotlin, C, C++**  
Email: **lump-kinfolk.0m@icloud.com** | GitHub: [johnedquinn][github]  
LinkedIn: [johnedquinn][linkedin]

## Profile

Compiler and database engine engineer specializing in query language implementation and performance. At Amazon, designed `PartiQLVM`, a register-based bytecode VM in Rust achieving ~20x latency improvement over the prior implementation, and led the v1.0.0 release of PartiQL powering multiple production AWS services. Equally comfortable in systems languages (Rust, C, C++) and the JVM (Kotlin, Java), and drawn to work where language design, compiler theory, and performance engineering intersect.

## Experience

### Amazon _SDE 1 (2021 -- 2023); SDE 2 (2023 -- present)_

#### Amazon: [PartiQL (Rust)][plr]

- Designed and built `PartiQLVM`, a register-based bytecode virtual machine in Rust, achieving ~20x latency improvement over the previous Rust implementation through zero-copy data analysis, a cacheable/thread-safe compiled bytecode program, and projection pushdown for non-relational data. ([v0.15.0-alpha.1][release_vm])
- Authored `partiql-jni`, a zero-dependency Java library wrapping `PartiQLVM` via JNI bindings; designed a `BufferedCatalog` with a custom binary encoding to minimize serialization overhead across the Java/Rust boundary, delivering a 2-3x latency improvement over partiql-lang-kotlin.

#### Amazon: [PartiQL (JVM)][plk]

- Led the v1.0.0 release of [partiql-lang-kotlin][plk], an open-source SQL-compatible query language powering multiple Amazon and AWS services. ([v1 Release][release_v1])
- Architected the plan-based evaluator engine from scratch ([PR #1283][pr_eval]); implemented core relational operators including JOINs ([PR #1294][pr_joins]), aggregations, correlated subqueries, set operations, and dynamic function dispatch with type-directed optimization.
- Designed and implemented the `PType` ([PR #1488][pr_ptype]) and `Datum` ([PR #1451][pr_datum]) APIs forming the runtime type system.
- Designed and implemented the error reporting framework ([PR #1615][pr_errors]) and PERMISSIVE/STRICT evaluation modes ([PR #1353][pr_modes]) adopted across the production compiler pipeline.
- Implemented Common Table Expressions (CTEs) end-to-end across parsing, planning, and evaluation; added SQL-standard interval data types supporting arithmetic over `YEAR`, `MONTH`, `DAY`, `HOUR`, and finer-grained units. ([v1.1.0][release_v1_1], [v1.2.0][release_v1_2])
- Implemented window functions (`RANK`, `DENSE_RANK`, `ROW_NUMBER`, `LAG`, `LEAD`) and the `WINDOW` clause operator, enabling inter-row analytical queries and eliminating the need for CPU-intensive self-joins. ([PR #1746][pr_window], [v1.3.0 Release][release_v1_3])
- Authored the PartiQL parser using ANTLR4: wrote the G4 lexer/grammar (~1.1K lines), implemented a parse tree visitor converting ANTLR nodes to the PartiQL AST, and resolved 6 pre-existing parser correctness bugs. ([PR #711][pr_parser])

## Projects

### [Kanonic](https://github.com/johnedquinn/kanonic)

- Designed and implemented a fast LR(1) parser generator for the JVM, written in Kotlin. Implements canonical LR(1) item set construction, conflict resolution, and code generation targeting the JVM — motivated by the lack of a performant JVM-native parser generator suitable for production use.

## Education

B. Engineering, Computer Science -- University of Notre Dame '21
