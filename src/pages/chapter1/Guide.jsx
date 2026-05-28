import { useState } from "react";

const topics = [
  {
    id: "intro",
    emoji: "🐍",
    title: "Introduction to Python",
    color: "#4ade80",
    content: {
      theory: [
        { heading: "What is Python?", text: "Python is a dynamic programming language that is high-level, interpreted, and focused on code readability. Guido van Rossum released it in 1991." },
        { heading: "Features of Python", list: [
          "Free and Open Source – download, use, and distribute without cost",
          "High-level Language – close to human language",
          "Interpreted – no separate compilation step (unlike C/C++)",
          "Simple and Easy to Learn – popular for students and professionals",
          "Platform Independent – runs on Linux, Windows, Macintosh, etc.",
          "Dynamic Typing – data types are defined automatically based on values"
        ]},
        { heading: "Python Syntax Rules", list: [
          "Python is case-sensitive: 'num', 'Num', and 'nUm' are three different things",
          "Indentation is CRUCIAL in Python (unlike other languages where it's optional)",
          "Python uses symbols, punctuation, and words"
        ]}
      ],
      quiz: [
        { q: "Who created Python?", a: "Guido van Rossum", options: ["James Gosling", "Guido van Rossum", "Dennis Ritchie", "Bjarne Stroustrup"] },
        { q: "In what year was Python released?", a: "1991", options: ["1985", "1991", "2000", "1995"] },
        { q: "Python is ___-sensitive.", a: "case", options: ["case", "space", "type", "indent"] },
      ]
    }
  },
  {
    id: "datatypes",
    emoji: "📦",
    title: "Data Types",
    color: "#60a5fa",
    content: {
      theory: [
        { heading: "Python Data Types", text: "The type of a variable is specified using Python data types. The data type specifies the kind of information stored in a variable." },
        { heading: "Data Types Table", table: {
          headers: ["Data Type", "Description", "Example"],
          rows: [
            ["int", "Whole numbers (positive and negative)", "var1 = 5, var2 = -15"],
            ["float", "Numbers with a decimal point", "b = 50.45"],
            ["str (Strings)", "Text – collection of letters, words, sentences in quotes", 'str1 = "Hello World!"'],
            ["list", "Ordered grouping of items in square brackets", "list = ['Steve', 589, 5.56, 'Elon', 150.2]"],
            ["tuple", "Like a list but cannot be modified once specified, uses parentheses", "tuple = ('Steve', 589, 5.56, 'Elon', 150.2)"],
            ["dictionary", "Key-value pairs in curly braces {}", "Animals = {'lion':'Lions are kings'}"],
            ["bool", "True or False values", "x = True, y = False"],
            ["set", "Unordered collection of unique elements, auto-removes duplicates", "favourite_fruit = {'Mango','Peach','Kiwi'}"]
          ]
        }}
      ],
      quiz: [
        { q: "Which data type stores True or False?", a: "bool", options: ["int", "str", "bool", "float"] },
        { q: "Which data type uses square brackets []?", a: "list", options: ["tuple", "dict", "set", "list"] },
        { q: "Which data type cannot be modified after creation?", a: "tuple", options: ["list", "tuple", "set", "dictionary"] },
        { q: "A dictionary stores data as ___.", a: "key-value pairs", options: ["single values", "key-value pairs", "ordered list", "boolean"] },
      ]
    }
  },
  {
    id: "variables",
    emoji: "🗂️",
    title: "Variables",
    color: "#f472b6",
    content: {
      theory: [
        { heading: "What are Variables?", text: "Variables are reserved memory areas used to hold values in a Python program. They are containers for storing data." },
        { heading: "Creating Variables", code: `ctr = 1000        # Creates an integer variable
distance = 1000.0  # Creates a float variable
str1 = "Sunita Sood"  # Creates a string variable` },
        { heading: "Rules for Naming Variables", list: [
          "A variable name starts with a letter or underscore (_)",
          "Cannot start with a number or special character like $, (, *, %, etc.",
          "Variable names are case-sensitive: str1 and STR1 are different",
          "Python keywords cannot be used as variable names"
        ]},
        { heading: "Multiple Assignment", code: `a = b = c = 700   # Assign same value to many variables
print(a)  # 700
print(b)  # 700
print(c)  # 700` },
        { heading: "Printing Variables", code: `ctr = 1000
distance = 1000.0
str1 = "Sunita Sood"
print(ctr)       # Output: 1000
print(distance)  # Output: 1000.0
print(str1)      # Output: Sunita Sood` },
        { heading: "Dynamic Typing", text: "In Python, you do not need to declare the variable's type. Python specifies the kind of variable used during program execution. This concept is known as dynamic typing.", code: `y = [41, 12, 13]  # y is a list
print(type(y))    # <class 'list'>
y = True          # reassigning y to boolean
print(type(y))    # <class 'bool'>` }
      ],
      quiz: [
        { q: "Which variable name is VALID?", a: "_myVar", options: ["2var", "_myVar", "$price", "my-var"] },
        { q: "What does a = b = c = 700 do?", a: "Assigns 700 to all three variables", options: ["Creates a list", "Assigns 700 to all three variables", "Causes an error", "Prints 700 three times"] },
        { q: "Python's automatic type detection is called ___.", a: "dynamic typing", options: ["static typing", "dynamic typing", "auto typing", "type casting"] },
      ]
    }
  },
  {
    id: "operators",
    emoji: "➕",
    title: "Operators",
    color: "#fb923c",
    content: {
      theory: [
        { heading: "What are Operators?", text: "Operators are predefined symbols that perform operations on one or more operands." },
        { heading: "Types of Operators", list: ["Arithmetic operators", "Comparison operators", "Assignment operators", "Logical operators"] },
        { heading: "Arithmetic Operators", table: {
          headers: ["Operator", "Name", "Example", "Output"],
          rows: [
            ["+", "Addition", "x + y", "x+y"],
            ["-", "Subtraction", "x - y", "x-y"],
            ["*", "Multiplication", "x * y", "x*y"],
            ["/", "Division", "x / y", "x/y"],
            ["%", "Modulus (Remainder)", "x % y", "remainder"],
            ["//", "Floor division", "x // y", "quotient (no decimal)"],
            ["**", "Exponentiation (Power)", "x ** y", "x to the power y"],
          ]
        }},
        { heading: "PEMDAS Precedence", list: [
          "P – Parentheses",
          "E – Exponentiation",
          "M – Multiplication (and division have same precedence)",
          "D – Division",
          "A – Addition (and subtraction have same precedence)",
          "S – Subtraction"
        ]},
        { heading: "Comparison Operators (used to compare values)", table: {
          headers: ["Operator", "Name", "Example", "Output"],
          rows: [
            ["==", "Equal to", "x == y", "True/False"],
            ["!=", "Not equal to", "x != y", "True/False"],
            [">", "Greater than", "x > y", "True/False"],
            ["<", "Less than", "x < y", "True/False"],
            [">=", "Greater than or equal to", "x >= y", "True/False"],
            ["<=", "Less than or equal to", "x <= y", "True/False"],
          ]
        }},
        { heading: "Logical Operators", table: {
          headers: ["Operator", "Description", "Example", "Output"],
          rows: [
            ["and", "Returns True if BOTH statements are true", "x < 5 and x < 10", "False"],
            ["or", "Returns True if ONE of the statements is true", "x < 5 or x < 4", "False"],
            ["not", "Reverses the result", "not(x < 5 and x < 10)", "True"],
          ]
        }},
        { heading: "Assignment Operators", table: {
          headers: ["Operator", "Same As"],
          rows: [
            ["=", "x = 15"],
            ["+=", "x = x + 13"],
            ["-=", "x = x - 13"],
            ["*=", "x = x * 13"],
            ["/=", "x = x / 13"],
            ["%=", "x = x % 13"],
            ["//=", "x = x // 13"],
            ["**=", "x = x ** 13"],
          ]
        }}
      ],
      quiz: [
        { q: "What does the ** operator do?", a: "Exponentiation (power)", options: ["Multiply", "Exponentiation (power)", "Floor division", "Modulus"] },
        { q: "What does 10 % 3 return?", a: "1", options: ["3", "1", "0", "10"] },
        { q: "What does 10 // 3 return?", a: "3", options: ["3.33", "3", "4", "1"] },
        { q: "Which logical operator returns True only if BOTH conditions are true?", a: "and", options: ["or", "not", "and", "both"] },
      ]
    }
  },
  {
    id: "conditionals",
    emoji: "🔀",
    title: "Conditional Statements",
    color: "#a78bfa",
    content: {
      theory: [
        { heading: "What are Conditional Statements?", text: "Conditional statements make decisions to control the direction or flow of the program execution. Also known as decision-making statements." },
        { heading: "Types of Conditional Statements", list: ["if statement", "if-else statement", "if-elif-else statement"] },
        { heading: "The if Statement", text: "Executes a block only if the condition is true.", code: `i = 10
if(i > 15):
    print("10 is greater than 15")  # skipped
print("I am Not in if")
# Output: I am Not in if` },
        { heading: "The if-else Statement", text: "Executes one block if true, another if false.", code: `i = 220
if (i <= 155):
    print("i is smaller than 155")
else:
    print("i is greater than 155")
    print("I'm not in if and not in else Block")
# Output: i is greater than 155` },
        { heading: "Shorthand if-else (one line)", code: `i = 10
print(True) if i < 145 else print(False)
# Output: True` },
        { heading: "The if-elif-else Statement", text: "Checks multiple conditions in sequence.", code: `number = int(input("Enter a number: "))
if number > 0:
    print("The number is positive.")
elif number < 0:
    print("The number is negative.")
else:
    print("The number is zero.")` },
      ],
      quiz: [
        { q: "What keyword is used to check an additional condition in if-elif-else?", a: "elif", options: ["else if", "elseif", "elif", "or if"] },
        { q: "What is the output of: i=10; if(i>15): print('yes') print('no')", a: "no", options: ["yes", "no", "yes\\nno", "error"] },
        { q: "Conditional statements are also known as ___.", a: "decision-making statements", options: ["loop statements", "decision-making statements", "iterative statements", "assignment statements"] },
      ]
    }
  },
  {
    id: "loops",
    emoji: "🔁",
    title: "Loops (Iterative Statements)",
    color: "#34d399",
    content: {
      theory: [
        { heading: "What are Loops?", text: "Loops allow you to execute a block of code repeatedly. Python has two primitive loop types: while loop and for loop." },
        { heading: "The while Loop", text: "Executes a block of statements as long as the condition is true.", code: `# Print Hello 5 times
count = 0
while (count < 5):
    count = count + 1
    print("Hello")
# Output: Hello (5 times)` },
        { heading: "The for Loop", text: "Used to iterate over an iterable like a string, tuple, list, set, or dictionary.", code: `# Iterate over a list
numbers = ['1', '2', '3']
for i in numbers:
    print(i)
# Output: 1  2  3` },
        { heading: "The range() Function", text: "Generates a set of numbers. Syntax: range(start, stop, step)", code: `# Print from 9 to 14
for i in range(9, 15):
    print(i)
# Output: 9 10 11 12 13 14

# Print even numbers 220 to 230
for i in range(220, 232, 2):
    print(i)
# Output: 220 222 224 226 228 230` },
        { heading: "Loop Control Statements", list: ["break – exits the loop immediately", "continue – skips the current iteration and goes back to the beginning"] },
        { heading: "break Statement", code: `a = 'This is Python'
i = 0
while i < len(a):
    if a[i] == 'e' or a[i] == 's':
        break
    i += 1
    print("Current Letter:", a[i])
# Loop stops when it sees 'e' or 's'` },
        { heading: "continue Statement", code: `a = 'This is Python'
i = 0
while i < len(a):
    if a[i] == 'i' or a[i] == 'o':
        i += 1
        continue
    print("Current Letter:", a[i])
    i += 1
# Skips 'i' and 'o' but prints all other letters` },
      ],
      quiz: [
        { q: "What loop is used when you know how many times to repeat?", a: "for loop", options: ["while loop", "for loop", "do-while loop", "repeat loop"] },
        { q: "range(1, 10) generates numbers from 1 to ___.", a: "9", options: ["10", "9", "1", "11"] },
        { q: "Which statement exits a loop immediately?", a: "break", options: ["continue", "exit", "break", "stop"] },
        { q: "Which statement skips to the next iteration?", a: "continue", options: ["break", "skip", "pass", "continue"] },
        { q: "What is range(9, 15) step default?", a: "1", options: ["0", "1", "2", "9"] },
      ]
    }
  }
];

const CodeBlock = ({ code }) => (
  <pre style={{
    background: "#0f172a",
    color: "#e2e8f0",
    padding: "14px 18px",
    borderRadius: "10px",
    fontSize: "13px",
    overflowX: "auto",
    lineHeight: 1.7,
    fontFamily: "'Fira Code', 'Courier New', monospace",
    border: "1px solid #1e293b",
    margin: "10px 0"
  }}>{code}</pre>
);

const TableView = ({ table }) => (
  <div style={{ overflowX: "auto", margin: "10px 0" }}>
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
      <thead>
        <tr>
          {table.headers.map((h, i) => (
            <th key={i} style={{ background: "#1e293b", color: "#94a3b8", padding: "8px 12px", textAlign: "left", fontWeight: 600 }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.rows.map((row, i) => (
          <tr key={i} style={{ background: i % 2 === 0 ? "#0f172a" : "#111827" }}>
            {row.map((cell, j) => (
              <td key={j} style={{ padding: "7px 12px", color: j === 0 ? "#fbbf24" : "#e2e8f0", fontFamily: j <= 1 ? "'Fira Code', monospace" : "inherit", borderBottom: "1px solid #1e293b" }}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const QuizSection = ({ quiz, topicColor }) => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (qIdx, option) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qIdx]: option }));
  };

  const handleSubmit = () => {
    let s = 0;
    quiz.forEach((q, i) => { if (answers[i] === q.a) s++; });
    setScore(s);
    setSubmitted(true);
  };

  const handleReset = () => { setAnswers({}); setSubmitted(false); setScore(0); };

  return (
    <div>
      <h3 style={{ color: topicColor, marginBottom: 16, fontSize: 16, fontWeight: 700 }}>🧠 Quick Quiz</h3>
      {quiz.map((q, i) => (
        <div key={i} style={{ marginBottom: 20, background: "#0f172a", borderRadius: 10, padding: 16, border: "1px solid #1e293b" }}>
          <p style={{ color: "#e2e8f0", marginBottom: 10, fontWeight: 600, fontSize: 14 }}>{i + 1}. {q.q}</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {q.options.map((opt, j) => {
              let bg = "#1e293b";
              let border = "1px solid #334155";
              let color = "#94a3b8";
              if (answers[i] === opt) { bg = "#1e3a5f"; border = `1px solid ${topicColor}`; color = topicColor; }
              if (submitted) {
                if (opt === q.a) { bg = "#14532d"; border = "1px solid #22c55e"; color = "#86efac"; }
                else if (answers[i] === opt && opt !== q.a) { bg = "#7f1d1d"; border = "1px solid #ef4444"; color = "#fca5a5"; }
              }
              return (
                <button key={j} onClick={() => handleSelect(i, opt)} style={{
                  background: bg, border, color, borderRadius: 8, padding: "8px 12px",
                  cursor: submitted ? "default" : "pointer", fontSize: 13, textAlign: "left", transition: "all 0.2s"
                }}>{opt}</button>
              );
            })}
          </div>
          {submitted && answers[i] !== q.a && (
            <p style={{ color: "#86efac", fontSize: 12, marginTop: 8 }}>✅ Correct: {q.a}</p>
          )}
        </div>
      ))}
      {!submitted ? (
        <button onClick={handleSubmit} disabled={Object.keys(answers).length < quiz.length} style={{
          background: topicColor, color: "#0f172a", border: "none", borderRadius: 8, padding: "10px 24px",
          fontWeight: 700, fontSize: 14, cursor: Object.keys(answers).length < quiz.length ? "not-allowed" : "pointer",
          opacity: Object.keys(answers).length < quiz.length ? 0.5 : 1
        }}>Submit Quiz</button>
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ background: "#0f172a", border: `2px solid ${topicColor}`, borderRadius: 10, padding: "10px 20px", color: topicColor, fontWeight: 700, fontSize: 16 }}>
            Score: {score}/{quiz.length} {score === quiz.length ? "🎉" : score >= quiz.length / 2 ? "👍" : "📚"}
          </div>
          <button onClick={handleReset} style={{ background: "#1e293b", color: "#94a3b8", border: "1px solid #334155", borderRadius: 8, padding: "10px 20px", cursor: "pointer", fontSize: 13 }}>Try Again</button>
        </div>
      )}
    </div>
  );
};

const TopicContent = ({ topic }) => {
  const [tab, setTab] = useState("learn");
  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        {["learn", "quiz"].map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            background: tab === t ? topic.color : "#1e293b",
            color: tab === t ? "#0f172a" : "#64748b",
            border: "none", borderRadius: 8, padding: "8px 20px", fontWeight: 700, fontSize: 13, cursor: "pointer"
          }}>{t === "learn" ? "📖 Learn" : "🧠 Quiz"}</button>
        ))}
      </div>
      {tab === "learn" ? (
        <div>
          {topic.content.theory.map((section, i) => (
            <div key={i} style={{ marginBottom: 24 }}>
              <h3 style={{ color: topic.color, fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{section.heading}</h3>
              {section.text && <p style={{ color: "#cbd5e1", fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}>{section.text}</p>}
              {section.list && (
                <ul style={{ paddingLeft: 20, margin: 0 }}>
                  {section.list.map((item, j) => (
                    <li key={j} style={{ color: "#cbd5e1", fontSize: 14, lineHeight: 1.9 }}>{item}</li>
                  ))}
                </ul>
              )}
              {section.code && <CodeBlock code={section.code} />}
              {section.table && <TableView table={section.table} />}
            </div>
          ))}
        </div>
      ) : (
        <QuizSection quiz={topic.content.quiz} topicColor={topic.color} />
      )}
    </div>
  );
};

export default function PythonGuide() {
  const [activeId, setActiveId] = useState("intro");
  const active = topics.find(t => t.id === activeId);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#060d1a",
      fontFamily: "'Segoe UI', sans-serif",
      display: "flex",
      flexDirection: "column"
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1a0a2e 50%, #0f172a 100%)",
        borderBottom: "1px solid #1e293b",
        padding: "20px 24px",
        textAlign: "center"
      }}>
        <div style={{ fontSize: 36, marginBottom: 4 }}>🐍</div>
        <h1 style={{ color: "#f1f5f9", fontSize: 22, fontWeight: 800, margin: 0 }}>Python Fundamentals</h1>
        <p style={{ color: "#64748b", fontSize: 13, margin: "4px 0 0" }}>Chapter 1 • Master Guide • Interactive Learning</p>
      </div>

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* Sidebar */}
        <div style={{
          width: 220,
          minWidth: 220,
          background: "#0a1628",
          borderRight: "1px solid #1e293b",
          overflowY: "auto",
          padding: "12px 8px"
        }}>
          <p style={{ color: "#475569", fontSize: 11, fontWeight: 700, textTransform: "uppercase", padding: "0 8px 8px", letterSpacing: 1 }}>Topics</p>
          {topics.map(t => (
            <button key={t.id} onClick={() => setActiveId(t.id)} style={{
              width: "100%",
              background: activeId === t.id ? "#1e293b" : "transparent",
              border: activeId === t.id ? `1px solid ${t.color}33` : "1px solid transparent",
              borderLeft: activeId === t.id ? `3px solid ${t.color}` : "3px solid transparent",
              borderRadius: 8, padding: "10px 12px", cursor: "pointer",
              display: "flex", alignItems: "center", gap: 8, marginBottom: 4
            }}>
              <span style={{ fontSize: 16 }}>{t.emoji}</span>
              <span style={{ color: activeId === t.id ? t.color : "#64748b", fontSize: 13, fontWeight: activeId === t.id ? 700 : 400, textAlign: "left" }}>{t.title}</span>
            </button>
          ))}
          {/* Progress */}
          <div style={{ marginTop: 20, padding: "0 8px" }}>
            <p style={{ color: "#475569", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Topics</p>
            <div style={{ background: "#1e293b", borderRadius: 100, height: 6, overflow: "hidden" }}>
              <div style={{ width: `${(topics.findIndex(t => t.id === activeId) + 1) / topics.length * 100}%`, height: "100%", background: `linear-gradient(90deg, #4ade80, #60a5fa)`, transition: "width 0.4s" }} />
            </div>
            <p style={{ color: "#475569", fontSize: 11, marginTop: 6 }}>{topics.findIndex(t => t.id === activeId) + 1} of {topics.length}</p>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
          {/* Topic Header */}
          <div style={{
            background: `linear-gradient(135deg, ${active.color}15 0%, #1e293b 100%)`,
            border: `1px solid ${active.color}33`,
            borderRadius: 14, padding: "18px 22px", marginBottom: 24,
            display: "flex", alignItems: "center", gap: 14
          }}>
            <span style={{ fontSize: 36 }}>{active.emoji}</span>
            <div>
              <h2 style={{ color: active.color, fontSize: 20, fontWeight: 800, margin: 0 }}>{active.title}</h2>
              <p style={{ color: "#64748b", fontSize: 12, margin: "2px 0 0" }}>Chapter 1 • Fundamentals of Python</p>
            </div>
          </div>

          <TopicContent topic={active} />

          {/* Navigation */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 32, paddingTop: 20, borderTop: "1px solid #1e293b" }}>
            {topics.findIndex(t => t.id === activeId) > 0 ? (
              <button onClick={() => setActiveId(topics[topics.findIndex(t => t.id === activeId) - 1].id)} style={{
                background: "#1e293b", color: "#94a3b8", border: "1px solid #334155", borderRadius: 8,
                padding: "10px 18px", cursor: "pointer", fontSize: 13, fontWeight: 600
              }}>← Previous</button>
            ) : <div />}
            {topics.findIndex(t => t.id === activeId) < topics.length - 1 ? (
              <button onClick={() => setActiveId(topics[topics.findIndex(t => t.id === activeId) + 1].id)} style={{
                background: active.color, color: "#0f172a", border: "none", borderRadius: 8,
                padding: "10px 18px", cursor: "pointer", fontSize: 13, fontWeight: 700
              }}>Next Topic →</button>
            ) : (
              <div style={{ background: "#14532d", color: "#86efac", border: "1px solid #22c55e", borderRadius: 8, padding: "10px 18px", fontSize: 13, fontWeight: 700 }}>
                🎉 Chapter Complete!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
